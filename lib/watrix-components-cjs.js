"use strict";var e=require("vue");function t(e,t,n,o,r,s,i,c,a,_){"boolean"!=typeof i&&(a=c,c=i,i=!1);const d="function"==typeof n?n.options:n;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),o&&(d._scopeId=o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):t&&(u=i?function(e){t.call(this,_(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),u)if(d.functional){const e=d.render;d.render=function(t,n){return u.call(n),e(t,n)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return n}const n=e.defineComponent({name:"helloworld",setup:t=>({count:e.ref(0),...t})});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("button",{attrs:{type:"button"},on:{click:function(t){e.count++}}},[e._v("count is: "+e._s(e.count))]),e._v(" "),e._m(3)])};o._withStripped=!0;const r=t({render:o,staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Recommended IDE setup:\n    "),n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank"}},[e._v("VSCode")]),e._v("\n    +\n    "),n("a",{attrs:{href:"https://github.com/johnsoncodehk/volar",target:"_blank"}},[e._v("Volar")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("See "),n("code",[e._v("README.md")]),e._v(" for more information.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://vitejs.dev/guide/features.html",target:"_blank"}},[e._v("\n      Vite Docs\n    ")]),e._v("\n    |\n    "),n("a",{attrs:{href:"https://v3.vuejs.org/",target:"_blank"}},[e._v("Vue 3 Docs")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    Edit\n    "),n("code",[e._v("components/HelloWorld.vue")]),e._v(" to test hot module replacement.\n  ")])}]},undefined,n,"data-v-2d77cab5",false,undefined,!1,void 0,void 0,void 0);function s(e){e.component(r.name,r)}"undefined"!=typeof window&&window.Vue&&s(window.Vue),module.exports=s;