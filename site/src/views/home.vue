<style>
.shields a + a {
    margin-left: 10px;
}

.pl-e, .pl-s {
    color: #3eaf7c;
    font-weight: bold;
}

.pl-pds {
    color: #333;
}
</style>

<template>
  <main class="home">
    <p class="shields">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://camo.githubusercontent.com/29bde16f85e663232ce557f5378d8d487aa62556/68747470733a2f2f696d672e736869656c64732e696f2f6e6f64652f762f7675652d6469726563746976652d746f6f6c7469702e7376673f7374796c653d666c61742d737175617265"
      >
        <img
          src="https://camo.githubusercontent.com/29bde16f85e663232ce557f5378d8d487aa62556/68747470733a2f2f696d672e736869656c64732e696f2f6e6f64652f762f7675652d6469726563746976652d746f6f6c7469702e7376673f7374796c653d666c61742d737175617265"
          alt="Node"
          data-canonical-src="https://img.shields.io/node/v/vue-directive-tooltip.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
      <a href="https://www.npmjs.com/package/vue-directive-tooltip" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/e4aa488ccc7406d46fd6a8b70e283d4b05d78f8b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d6469726563746976652d746f6f6c7469702e7376673f7374796c653d666c61742d737175617265"
          alt="NPM"
          data-canonical-src="https://img.shields.io/npm/v/vue-directive-tooltip.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
      <a href="https://www.npmjs.com/package/vue-directive-tooltip" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/30367b671667a18a198895c48b7c2e1b6e3975c0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652d6469726563746976652d746f6f6c7469702e7376673f7374796c653d666c61742d737175617265"
          alt="NPM Downloads/month"
          data-canonical-src="https://img.shields.io/npm/dm/vue-directive-tooltip.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
      <a href="https://vuejs.org" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/7715a7fdda150215bf3574595335920924579190/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7675652d322d677265656e2e737667"
          alt="Vue.js"
          data-canonical-src="https://img.shields.io/badge/vue-2-green.svg"
          style="max-width:100%;"
        >
      </a>
    </p>
    <blockquote>
      <p>
        Vue.js tooltip directive (
        <a href="https://github.com/FezVrasta/popper.js" target="_blank">based on Popper.js</a>)
      </p>
    </blockquote>
    
    <h3>Usage</h3>

    <div class="highlight highlight-text-html-basic">
      <code v-tooltip="'my text'">
          &lt;<span class="pl-ent">span </span> <span class="pl-e">v-tooltip</span>=<span class="pl-s"><span class="pl-pds">"</span>'my text'<span class="pl-pds">"</span></span>&gt;Super simple&lt;/<span class="pl-ent">span</span>&gt;</code>
    </div>
    <p>
      A
      <strong>lot of options</strong> make this tooltip convenient:
    </p>
    <ul>
      <li>
        <strong>content</strong>: simple text or use another html tag
      </li>
      <li>
        <strong>positioning</strong> (right, left, ...)
      </li>
      <li>
        <strong>positioning variants</strong>: start | end. ex: bottom.end, top.start, right.end, etc...
      </li>
      <li>
        <strong>delay</strong> to hide (in ms)
      </li>
      <li>
        <strong>offset</strong> (from the target in px)
      </li>
      <li>
        choose from
        <strong>several triggers</strong> (hover, focus, click)
      </li>
      <li>
        <strong>full programmatic</strong>, you choose when to show/hide the tooltip
      </li>
      <li>
        and of course, use your
        <strong>custom CSS</strong> class
      </li>
    </ul>
    
    <h3>Builds</h3>
    <p>
      If you don't use a package manager, you can
      <a href="https://unpkg.com/vue-directive-tooltip/" rel="nofollow">
        access
        <strong>vue-directive-tooltip</strong> via unpkg (CDN)
      </a>, download the source, or point your package manager to the url.
    </p>
    <p>
      <strong>vue-directive-tooltip</strong> is compiled as a collection of
      <a href="http://webpack.github.io/docs/commonjs.html" rel="nofollow">CommonJS</a> modules &amp;
      <a href="http://www.2ality.com/2014/09/es6-modules-final.html" rel="nofollow">ES2015 modules</a> for bundlers that support the
      <strong>jsnext:main</strong> or
      <strong>module</strong> field in package.json (Rollup, Webpack 2)
    </p>
    <p>
      The
      <strong>vue-directive-tooltip</strong> package includes precompiled production and development
      <a href="https://github.com/umdjs/umd">UMD</a> builds in the
      <a href="https://unpkg.com/vue-directive-tooltip/dist/" rel="nofollow">
        <strong>dist</strong> folder
      </a>.  They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a
      <a href="https://unpkg.com/vue-directive-tooltip" rel="nofollow">
        <strong>&lt;script&gt;</strong> tag
      </a> on your page. The UMD builds make
      <strong>vue-directive-tooltip</strong> available as a
      <strong>window.vueDirectiveTooltip</strong> global variable.
    </p>

    <h3>License</h3>
    <p>
      The code is available under the
      <a href="/hekigan/vue-directive-tooltip/blob/master/LICENSE">MIT</a> license.
    </p>

    <h3>Contributing</h3>
    <p>
      We are open to contributions, see
      <a href="/hekigan/vue-directive-tooltip/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> for more info.
    </p>
  </main>
</template>
