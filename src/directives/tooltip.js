import Utils from 'popper.js/dist/popper-utils';
import Popper from 'popper.js';

const BASE_CLASS = 'tooltip';
const PLACEMENT = ['top', 'left', 'right', 'bottom', 'auto'];

const DEFAULT_OPTIONS = {
    container: false,
    delay: 0,
    instance: null, // the popper.js instance
    eventsEnabled: true,
    html: false,
    modifiers: {
        arrow: {
            element: '.tooltip-arrow'
        }
    },
    placement: 'auto',
    placementPostfix: null, // start | end
    removeOnDestroy: true,
    title: '',
    class: '', // ex: 'tooltip-custom tooltip-other-custom'
    triggers: ['hover', 'focus'],
    offset: 100
};

export default class Tootlip {
    constructor (el, options = {}) {
        this._options = {
            ...DEFAULT_OPTIONS,
            ...{
                onCreate: () => {
                    this.content(this.tooltip.options.title);
                    this._$tt.update();
                },
                onUpdate: () => {
                    this.content(this.tooltip.options.title);
                    this._$tt.update();
                }
            },
            ...Tootlip.filterOptions(options)
        };

        const $tpl = this._createTooltipElement(this.options);
        document.querySelector('body').appendChild($tpl);

        this._$el = el;
        this._$tt = new Popper(el, $tpl, this._options);
        this._$tpl = $tpl;
        this._visible = false;
        this._setEvents();
    }

    destroy () {
        this._setEvents('remove');
        document.querySelector('body').removeChild(this._$tpl);
    }

    get options () {
        return {...this._options};
    }

    get tooltip () {
        return this._$tt;
    }

    _createTooltipElement (options) {
        // wrapper
        let $popper = document.createElement('div');
        $popper.setAttribute('id', `tooltip-${randomId()}`);
        $popper.setAttribute('class', `${BASE_CLASS} ${this._options.class}`);
        Utils.setStyles($popper, {display: 'none'});

        // make arrow
        let $arrow = document.createElement('div');
        $arrow.setAttribute('class', 'tooltip-arrow');
        $popper.appendChild($arrow);

        // make content container
        let $content = document.createElement('div');
        $content.setAttribute('class', 'tooltip-content');
        $popper.appendChild($content);

        return $popper;
    }

    _setEvents (state = 'add') {
        if (!Array.isArray(this.options.triggers)) {
            console.error('trigger should be an array', this.options.triggers);
            return;
        }
        let lis = null;
        if (state === 'add') {
            lis = (...params) => this._$el.addEventListener(...params);
        } else {
            lis = (...params) => this._$el.removeEventListener(...params);
        }

        if (this.options.triggers.includes('manual')) {
            lis('click', this._onToggle.bind(this), false);
        } else {
            this.options.triggers.map(evt => {
                switch (evt) {
                case 'click':
                    lis('click', this._onToggle.bind(this), false);
                    if (state === 'add') {
                        document.addEventListener('click', this._onDeactivate.bind(this), false);
                    } else {
                        document.removeEventListener('click', this._onDeactivate.bind(this), false);
                    }
                    break;
                case 'hover':
                    lis('mouseenter', this._onActivate.bind(this), false);
                    lis('mouseleave', this._onDeactivate.bind(this), true);
                    break;
                case 'focus':
                    lis('focus', this._onActivate.bind(this), false);
                    lis('blur', this._onDeactivate.bind(this), true);
                    break;
                }
            });
        }
    }

    _cleanEvents () {
        const eal = (...params) => this._$el.removeEventListener(...params);

        if (this.options.triggers.includes('manual')) {
            eal('click', this._onToggle.bind(this), false);
        } else {
            this.options.triggers.map(evt => {
                switch (evt) {
                case 'click':
                    eal('click', this._onToggle.bind(this), false);
                    document.addEventListener('click', this._onDeactivate.bind(this), false);
                    break;
                case 'hover':
                    eal('mouseenter', this._onActivate.bind(this), false);
                    eal('mouseleave', this._onDeactivate.bind(this), true);
                    break;
                case 'focus':
                    eal('focus', this._onActivate.bind(this), false);
                    eal('blur', this._onDeactivate.bind(this), true);
                    break;
                }
            });
        }
    }

    _onActivate (e) {
        this.show();
    }

    _onDeactivate (e) {
        this.hide();
    }

    _onToggle (e) {
        e.stopPropagation();
        e.preventDefault();
        this.toggle();
    }

    content (content) {
        const wrapper = this.tooltip.popper.querySelector('.tooltip-content');
        if (typeof content === 'string') {
            this.tooltip.options.title = content;
            wrapper.textContent = content;
        } else if (isElement(content)) {
            wrapper.innerHTML = '';
            this.tooltip.options.title = content;
            wrapper.appendChild(content);
        } else {
            console.error('unsupported content type', content);
        }
    }

    static filterOptions (options) {
        let opt = {...options};

        opt.placement = PLACEMENT.includes(options.placement) ? options.placement : 'auto';
        // if (!opt.modifiers) {
        //     opt.modifiers = { offset: null };
        // }
        // if (opt.offset) {
        //     opt.modifiers.offset = { offset: opt.offset };
        // }

        return opt;
    }

    show () {
        this.toggle(true);
    }

    hide () {
        this.toggle(false);
    }

    toggle (val) {
        if (typeof val !== 'boolean') {
            val = !this._visible;
        }
        this._visible = val;
        this._$tt.popper.style.display = (this._visible === true) ? 'inline-block' : 'none';
        this._$tt.update();
    }
}

function randomId () {
    return `${Date.now()}-${Math.round(Math.random() * 100000000)}`;
}

/**
 * Check if the variable is an html element
 * @param {*} value
 * @return Boolean
 */
function isElement (value) {
    return value instanceof window.Element;
}