import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import(/* webpackChunkName: "setup" */ '@/views/setup.vue')
    },
    {
      path: '/globals',
      name: 'globals',
      component: () => import(/* webpackChunkName: "globals" */ '@/views/globals.vue')
    },
    {
      path: '/usage',
      name: 'usage',
      component: () => import(/* webpackChunkName: "usage" */ '@/views/usage.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component: () => import(/* webpackChunkName: "positions" */ '@/views/positions.vue')
    },
    {
      path: '/delay',
      name: 'delay',
      component: () => import(/* webpackChunkName: "delay" */ '@/views/delay.vue')
    },
    {
      path: '/offset',
      name: 'offset',
      component: () => import(/* webpackChunkName: "offset" */ '@/views/offset.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "events" */ '@/views/events.vue')
    },
    {
      path: '/custom',
      name: 'custom',
      component: () => import(/* webpackChunkName: "custom" */ '@/views/custom.vue')
    },
    {
      path: '/ios',
      name: 'ios',
      component: () => import(/* webpackChunkName: "ios" */ '@/views/ios.vue')
    },
    {
      path: '/tests',
      name: 'tests',
      component: () => import(/* webpackChunkName: "tests" */ '@/views/tests.vue')
    }
  ]
})
