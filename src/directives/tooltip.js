/**
 * @author: laurent blanes <laurent.blanes@gmail.com>
 */
import Utils from 'popper.js/dist/popper-utils';
import Popper from 'popper.js';

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
export default {
    name: 'tooltip',
    config: {},
    install (Vue) {
        Vue.directive('tooltip', {
            bind (el, binding, vnode) {
                let $popper = null;
                let placement = 'bottom';

                if (binding.modifiers.left) {
                    placement = 'left';
                } else if (binding.modifiers.right) {
                    placement = 'right';
                } else if (binding.modifiers.top) {
                    placement = 'top';
                } else if (binding.modifiers.bottom) {
                    placement = 'bottom';
                }

                // wrapper
                $popper = document.createElement('div');
                $popper.setAttribute('class', BASE_CLASS);
                Utils.setStyles($popper, {visibility: 'hidden'});

                // make arrow
                let $arrow = document.createElement('div');
                $arrow.setAttribute('x-arrow', '');
                $popper.appendChild($arrow);

                // make content container
                let $content = document.createElement('div');
                $content.setAttribute('class', 'vue-tooltip-content');
                $popper.appendChild($content);

                document.querySelector('body').appendChild($popper);

                const options = Object.assign({},
                    binding.value,
                    {
                        placement,
                        onCreate (e) {
                            setProperties(el, binding);
                            setAttributes($popper, $content, el);
                        },
                        onUpdate (e) {
                            setAttributes($popper, $content, el);
                        }
                    }
                );
                el.popper = new Popper(el, $popper, options);
            },
            inserted (el, binding, vnode, oldVnode) {
                el.addEventListener('mouseover', onMouseOver);
                el.addEventListener('mouseout', onMouseOut);
                el.addEventListener('mouseleave', onMouseOut);
            },
            componentUpdated (el, binding, vnode, oldVnode) {
                setProperties(el, binding);
            },
            unbind (el, binding, vnode, oldVnode) {
                el.removeEventListener('mouseover', onMouseOver);
                el.removeEventListener('mouseout', onMouseOut);
                el.removeEventListener('mouseleave', onMouseOut);
                document.querySelector('body').removeChild(el.popper.popper);
            }
        });
    }
};

function setProperties (el, binding) {
    if (typeof binding.value === 'string') {
        el.popper._class = '';
        el.popper._content = binding.value;
        el.popper._visible = true;
    } else {
        el.popper._class = binding.value.class || '';
        el.popper._content = binding.value.content;
        el.popper._visible = binding.value.visible !== false;
    }
}

function setAttributes ($popper, $content, el) {
    $content.innerHTML = el.popper._content;
    Utils.setStyles(el.popper.popper, {
        display: el.popper._visible ? 'inline-block' : 'none'
    });
    const classes = `${BASE_CLASS} ${el.popper._class}`;
    $popper.setAttribute('class', classes.trim());
}

function onMouseOver (e) {
    const el = e.currentTarget;
    Utils.setStyles(el.popper.popper, {visibility: 'visible'});
    el.popper.update();
}

function onMouseOut (e) {
    const el = e.currentTarget;
    Utils.setStyles(el.popper.popper, {visibility: 'hidden'});
}
