!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["watrix-components"]=t(e.Vue)}(this,(function(e){"use strict";function t(e,t,n,o,r,s,i,c,d,a){"boolean"!=typeof i&&(d=c,c=i,i=!1);const u="function"==typeof n?n.options:n;let _;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),s?(_=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=_):t&&(_=i?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),_)if(u.functional){const e=u.render;u.render=function(t,n){return _.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,_):[_]}return n}const n=e.defineComponent({name:"helloworld",setup:t=>({count:e.ref(0),...t})});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("button",{attrs:{type:"button"},on:{click:function(t){e.count++}}},[e._v("count is: "+e._s(e.count))]),e._v(" "),e._m(3)])};o._withStripped=!0;const r=t({render:o,staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Recommended IDE setup:\n    "),n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank"}},[e._v("VSCode")]),e._v("\n    +\n    "),n("a",{attrs:{href:"https://github.com/johnsoncodehk/volar",target:"_blank"}},[e._v("Volar")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("See "),n("code",[e._v("README.md")]),e._v(" for more information.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://vitejs.dev/guide/features.html",target:"_blank"}},[e._v("\n      Vite Docs\n    ")]),e._v("\n    |\n    "),n("a",{attrs:{href:"https://v3.vuejs.org/",target:"_blank"}},[e._v("Vue 3 Docs")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Edit\n    "),n("code",[e._v("components/HelloWorld.vue")]),e._v(" to test hot module replacement.\n  ")])}]},undefined,n,"data-v-2d77cab5",false,undefined,!1,void 0,void 0,void 0);function s(e){e.component(r.name,r)}return"undefined"!=typeof window&&window.Vue&&s(window.Vue),s}));