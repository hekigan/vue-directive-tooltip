import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Tooltip from '../../src/directives/tooltip-directive';

Vue.use(Tooltip);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
