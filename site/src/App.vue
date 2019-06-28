<style lang="sass" src="./assets/sass/common.sass"></style>

<template>
    <div id="app">
        <header>
            <a  class="menu-handle" @click="toggleMenu"></a>
            <img class="logo" alt="Vue logo" src="@/assets/img/logo.svg">
            <h1>
                Vue Directive Tooltip
                <span class="one-liner">a <span class="tooltip" v-tooltip.top.notrigger="{ content: 'v-tooltip', visible: true, class: 'fade-in' }">tooltip</span> for Vue.js</span>
            </h1>
        </header>
        <div class="content">
            <aside-menu :hide="menuHide"></aside-menu>
            <router-view class="main-content" />
        </div>
    </div>
</template>

<script>
import AsideMenu from '@/components/menu.vue'

export default {
    name: 'home',
    data () {
        return {
            menuHide: true
        };
    },
    components: {
        AsideMenu
    },
    mounted () {
        this.$router.beforeEach((to, from, next) => {
            this.menuHide = true;
            next();
        });
    },
    methods: {
        toggleMenu () {
            this.menuHide = !this.menuHide;
        }
    }
}
</script>

