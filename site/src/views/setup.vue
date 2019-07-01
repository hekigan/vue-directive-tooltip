<template>
  <main class="setup">
        <h3>Installation</h3>

        <h4>Using Webpack, Rollup, etc...</h4>
        <h5>1. using npm or yarn</h5>
        <p>
            install the script like so:
        </p>
        <p>
            <code>npm install vue-directive-tooltip --save</code>
        </p>
        <p>or</p>
        <p>
            <code>yarn add vue-directive-tooltip</code>
        </p>

        <h5>2. use the script with Vue</h5>
        <pre>
            <code>
// src/main.js

import Vue from 'vue';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

Vue.use(Tooltip);
            </code>
        </pre>

        <h5>3. do not forget the css if you do not want to use the above import!</h5>
        <p>
            You can either get the raw css
            <a
            href="https://raw.githubusercontent.com/hekigan/vue-directive-tooltip/master/css/index.css"
            target="_blank"
            >clicking here</a>
        </p>
        <p>
            or import the
            <b>css</b> from node_modules (in case of webpack, the
            <code>~</code> represents the node_modules folder):
            <br>
            <code>@import "~vue-directive-tooltip/dist/vueDirectiveTooltip.css";</code>
        </p>
        <p>
            or the scss directly:
            <br>
            <code>@import "~vue-directive-tooltip/src/css/index.scss";</code>
        </p>

        <h4>Using script tag</h4>
        <p>
            When using ES5, don't forget to copy the css.
            <br>raw css:
            <a
            href="https://raw.githubusercontent.com/hekigan/vue-directive-tooltip/master/dist/vueDirectiveTooltip.css"
            target="_blank"
            >download</a>
        </p>
        
        <pre>
            <code>
&lt;link rel="stylesheet" href="https://unpkg.com/vue-directive-tooltip@latest/dist/vueDirectiveTooltip.css"&gt;
&lt;script src="https://unpkg.com/vue@latest/dist/vue.js">&lt;/script&gt;
&lt;script src="https://unpkg.com/vue-directive-tooltip@latest/dist/vueDirectiveTooltip.min.js">&lt;/script&gt;
&lt;script>Vue.use(vueDirectiveTooltip);&lt;/script&gt;
            </code>
        </pre>

        <h4>Development</h4>

        <p>
            In case you want to work on a fork of this project you will need to install <code>Vue CLI</code>
        </p>

        <h5>NPM</h5>
        <p>
            <code>sudo npm install -g @vue/cli</code>
        </p>
        <p>
            <code>sudo npm install -g @vue/cli-service-global</code>
        </p>

        <h5>Yarn</h5>
        <p>
            <code>sudo yarn global add @vue/cli</code>
        </p>
        <p>
            <code>sudo yarn global add @vue/cli-service-global</code>
        </p>    
        
  </main>
</template>
