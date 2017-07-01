/**
 * @author: laurent blanes <laurent.blanes@gmail.com>
 */
import Tooltip from 'tooltip.js';

const BASE_CLASS = 'vue-tooltip';

/**
 * usage:
 *
 * // basic usage:
 * <div v-tooltip="'my content'">
 * or
 * <div v-tooltip="{content: 'my content'}">
 *
 * // change position of tooltip
 * // options: bottom (default) | top | left | right
 * <div v-tooltip.top="{content: 'my content'}">
 *
 * // add custom class
 * <div v-tooltip="{class: 'custom-class', content: 'my content'}">
 *
 * // toggle visibility
 * <div v-tooltip="{visible: false, content: 'my content'}">
 */
const tooltipDirective = {
    name: 'tooltip',
    config: {},
    install (Vue) {
        Vue.directive('tooltip', {
            bind (el, binding, vnode) {
            },

            // On element inserted in the DOM
            inserted (el, binding, vnode, oldVnode) {
                let placement = 'bottom';
                let trigger = [];

                // POSITION
                if (binding.modifiers.left) {
                    placement = 'left';
                } else if (binding.modifiers.right) {
                    placement = 'right';
                } else if (binding.modifiers.top) {
                    placement = 'top';
                } else if (binding.modifiers.bottom) {
                    placement = 'bottom';
                }

                // TRIGGERS
                if (binding.modifiers.notrigger) {
                    trigger.push('manual');
                } else {
                    if (binding.modifiers.click) {
                        trigger.push('click');
                    }

                    if (binding.modifiers.hover) {
                        trigger.push('hover');
                    }

                    if (binding.modifiers.focus) {
                        trigger.push('focus');
                    }

                    if (trigger.length === 0) {
                        trigger.push('hover', 'focus');
                    }

                    if (binding.modifiers.click && !binding.modifiers.manual) {
                        tooltipDirective.onDocumentClick = (e) => {
                            el.tooltip.hide();
                        };
                        document.addEventListener('click', tooltipDirective.onDocumentClick);
                    }
                }

                // const popperOptions = Object.assign({},
                //     binding.value,
                //     {
                //         placement,
                //         onCreate (e) {
                //             setProperties(el, binding);
                //             setAttributes($tooltip, $content, el);
                //         },
                //         onUpdate (e) {
                //             setAttributes($tooltip, $content, el);
                //         }
                //     }
                // );
                // el.popper = new Tooltip(el, $tooltip, options);

                // OPTIONS
                const tooltipOptions = {
                    title: getContent(binding),
                    html: Boolean(binding.value.html),
                    placement,
                    template: `<div class="${getCssClass(binding)}" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,
                    trigger: trigger.join(' '),
                    // offset: binding.value.offset,
                    // Poppers specific options
                    popperOptions: {
                        onCreate (e) {
                            // console.warn('created');
                            // document.getElementById(binding.value.html)
                        },
                        onUpdate (e) {
                            // console.warn('updated');
                            // document.getElementById(binding.value.html)
                        },
                        modifiers: {
                            offset: {
                                offset: binding.value.offset
                            }
                        }
                    }
                };
                // console.info(tooltipOptions);

                // TOOLTIP CREATION
                el.tooltip = new Tooltip(el, tooltipOptions);
                // console.info(el.tooltip);
                // console.info(el.tooltip.popperInstance.modifiers);

                if (binding.value.html) {
                    // TODO: refactor when possible
                    // super dirty! Hate it, but for the moment I did not find a cleaner way with the current state of Tooltip.js
                    // If I managed to use 'onCreate/onUpdate' hooks, I could make something a lot nicer.
                    el.tooltip.show();
                    el.tooltip.hide();
                    el.tooltip.popperInstance.options.onUpdate = function (e) {
                        // console.warn('onUpdate');
                        // document.getElementById(binding.value.html)
                    };
                    // console.info(el.tooltip.popperInstance);
                }

                // Show/hide programmatically
                toggleVisibility(el, binding.value.visible);
            },

            // On component updated
            componentUpdated (el, binding, vnode, oldVnode) {
                toggleVisibility(el, binding.value.visible);

                if (el.tooltip.popperInstance) {
                    const node = el.tooltip._tooltipNode;
                    const contentWrapper = node.querySelector(el.tooltip.innerSelector);
                    if (!el.tooltip.options.html) {
                        contentWrapper.innerText = getContent(binding);
                    // } else {
                        // contentWrapper.innerHTML = getContent(binding);
                    }
                    el.tooltip.popperInstance.scheduleUpdate();
                }
            },

            // On component destroyed, do some cleanup
            unbind (el, binding, vnode, oldVnode) {
                if (binding.modifiers.click && !binding.modifiers.manual) {
                    document.removeEventListener('click', tooltipDirective.onDocumentClick);
                }
                el.tooltip.dispose();
            }
        });
    },

    // in the case of "manual" modifiers being used, set this function
    onDocumentClick: null
};

function isObject (binding) {
    return typeof binding.value === 'object';
}

function getContent (binding) {
    if (isObject(binding)) {
        if (binding.value.content !== undefined) {
            return `${binding.value.content}`;
        } else if (binding.value.html && document.getElementById(binding.value.html)) {
            return document.getElementById(binding.value.html);
        } else {
            return '';
        }
    } else {
        return `${binding.value}`;
    }
}

function getCssClass (binding) {
    if (isObject(binding) && binding.value.class) {
        return `${BASE_CLASS} ${binding.value.class}`;
    } else {
        return BASE_CLASS;
    }
}

function toggleVisibility (el, status) {
    if (typeof status === 'boolean') {
        status ? el.tooltip.show() : el.tooltip.hide();
    }
}

export default tooltipDirective;