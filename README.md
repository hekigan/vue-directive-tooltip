# vue-directive-tooltip

![Node](https://img.shields.io/node/v/vue-directive-tooltip.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/vue-directive-tooltip.svg?style=flat-square)](https://www.npmjs.com/package/vue-directive-tooltip)
[![Travis](https://img.shields.io/travis/hekigan/vue-directive-tooltip/master.svg?style=flat-square)](https://travis-ci.org/hekigan/vue-directive-tooltip)
[![David](https://img.shields.io/david/hekigan/vue-directive-tooltip.svg?style=flat-square)](https://david-dm.org/hekigan/vue-directive-tooltip)
[![Coverage Status](https://img.shields.io/coveralls/hekigan/vue-directive-tooltip.svg?style=flat-square)](https://coveralls.io/github/hekigan/vue-directive-tooltip)

> Vue.js tooltip directive 

### Usage

```js
import vueDirectiveTooltip from 'vue-directive-tooltip';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add vue-directive-tooltip (--dev)

or npm

	npm install vue-directive-tooltip (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import vueDirectiveTooltip from 'vue-directive-tooltip';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
vueDirectiveTooltip

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hekigan/vue-directive-tooltip) example.

### Builds

If you don't use a package manager, you can [access `vue-directive-tooltip` via unpkg (CDN)](https://unpkg.com/vue-directive-tooltip/), download the source, or point your package manager to the url.

`vue-directive-tooltip` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `vue-directive-tooltip` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/vue-directive-tooltip/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/vue-directive-tooltip) on your page. The UMD builds make `vue-directive-tooltip` available as a `window.vueDirectiveTooltip` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
