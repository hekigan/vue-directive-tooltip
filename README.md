# vue-directive-tooltip

![Node](https://img.shields.io/node/v/vue-directive-tooltip.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/vue-directive-tooltip.svg?style=flat-square)](https://www.npmjs.com/package/vue-directive-tooltip)
[![Vue.js](https://img.shields.io/badge/vue-2-green.svg)](https://vuejs.org)

> Vue.js tooltip directive ([based on Popper.js](https://github.com/FezVrasta/popper.js))

### Usage

```js
import Tooltip from 'vue-directive-tooltip';
// or require('vue-directive-tooltip');
```

```html
<span v-tooltip="'my text'">some text</span>
```

It is recommended to also add the CSS file which is in the `./css/` folder.
A SASS file is also included in the source for those who prefer fiddling.

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add vue-directive-tooltip (--dev)

or npm

	npm install vue-directive-tooltip (--save-dev)


### configuration

```html
<span v-tooltip="'my text'">some text</span>
```
or
```html
<span v-tooltip="{content: 'my text'}">some text</span>
```

**modifier**
<br/> 📝 Change the position of the tooltip
<br/> ℹ️ options: bottom (default) | top | left | right
<br/> 💡 example
```html
<span v-tooltip.top="'my text'">some text</span>
```
**content**
<br/> 📝 Set the text to display
<br/> 💡 example
```html
<span v-tooltip="{ content: 'my text' }">some text</span>
```
**class**
<br/> 📝 Append custom CSS class
<br/> 💡 example
```html
<span v-tooltip="{ class: 'custom-class other-custom-class' }">some text</span>
```
**visible**
<br/> 📝 Show/hide the tooltip
<br/> ℹ️ options: true (default) | false
<br/> 💡 example
```html
<span v-tooltip="{ content: 'my text', visible: true }">some text</span>
```

### Examples

See [`example`](example/index.html) folder.

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

This module was created using [generator-module-extended-boilerplate](https://github.com/hekigan/generator-module-extended-boilerplate).