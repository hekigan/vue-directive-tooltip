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
// main.js

import Vue from 'vue';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';

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
            <code>@import "~vue-directive-tooltip/css/index.css";</code>
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
            href="https://raw.githubusercontent.com/hekigan/vue-directive-tooltip/master/css/index.css"
            target="_blank"
            >download</a>
        </p>
        
        <pre>
            <code>
&lt;link rel="stylesheet" href="https://unpkg.com/vue-directive-tooltip@latest/css/index.min.css"&gt;
&lt;script src="https://unpkg.com/vue@latest/dist/vue.js">&lt;/script&gt;
&lt;script src="https://unpkg.com/vue-directive-tooltip@latest/dist/vueDirectiveTooltip.min.js">&lt;/script&gt;
&lt;script>Vue.use(vueDirectiveTooltip);&lt;/script&gt;
            </code>
        </pre>
        
  </main>
</template>
