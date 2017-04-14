import Tooltip from './directives/tooltip.js';

export default Tooltip;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Tooltip);
}