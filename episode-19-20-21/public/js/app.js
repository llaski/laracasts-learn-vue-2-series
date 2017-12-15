!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),e.exports=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}return i(e,[{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"set",value:function(e){this.errors=e}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}]),e}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.originalData=t;for(var n in t)this[n]=t[n];this.errors=new s}return a(e,[{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"submit",value:function(e,t){var n=this;return new Promise(function(r,o){axios[e](t,n.data()).then(function(e){n.onSuccess(e.data),r(e.data)}).catch(function(e){n.onFail(e.response.data),o(e.response.data)})})}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"onSuccess",value:function(e){this.reset()}},{key:"onFail",value:function(e){this.errors.set(e.errors)}}]),e}();new Vue({el:"#app",components:{ProjectList:o.a},data:{form:new u({name:"",description:""}),projects:[]},mounted:function(){this.projects=window.InitialProjects},methods:{onSubmit:function(){var e=this,t=this.form.data();this.form.post("/projects").then(function(n){e.projects.push(t)})}}})},function(e,t,n){var r=n(3)(n(4),n(5),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:s,exports:a,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{projects:{required:!0}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.projects.length>0,expression:"projects.length > 0"}]},[n("h1",{staticClass:"title is-3"},[e._v("My Projects")]),e._v(" "),n("ul",e._l(e.projects,function(t){return n("li",[n("a",{attrs:{href:"#"}},[e._v(e._s(t.name))])])})),e._v(" "),n("hr")])},staticRenderFns:[]}},function(e,t){}]);