webpackJsonp([3],{"+hxr":function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"half-transparent",attrs:{app:"",absolute:""}},[e("v-layout",{staticClass:"grey--text",attrs:{row:""}},[e("v-spacer"),this._v("\n    © Henrik Wassdahl "+this._s((new Date).getFullYear())+"\n    "),e("v-spacer")],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},"5ojb":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".clickable{cursor:pointer}.text-shadow{text-shadow:0 2px 2px #333}a:-webkit-any-link{text-decoration:none}",""])},"Awn/":function(t,e,r){var a=r("ma53");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("794331df",a,!1,{sourceMap:!1})},Ma2J:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("zt6Q"),n=r("STrE"),s=!1;var o=function(t){s||r("sDJo")},i=r("VU/8")(a.a,n.a,!1,o,null,null);i.options.__file="layouts\\default.vue",e.default=i.exports},S4xV:function(t,e,r){"use strict";e.a={}},STrE:function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Toolbar"),e("v-content",[e("v-container",{style:"max-width: 840px",attrs:{fluid:""}},[e("nuxt")],1)],1),e("Footer")],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},"Y/x4":function(t,e,r){"use strict";var a=r("S4xV"),n=r("+hxr"),s=!1;var o=function(t){s||r("wg6X")},i=r("VU/8")(a.a,n.a,!1,o,"data-v-a10fa894",null);i.options.__file="components\\Core\\Footer\\index.vue",e.a=i.exports},eec0:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".half-transparent[data-v-a10fa894]{background:rgba(0,0,0,.712)}",""])},ma53:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},pqS9:function(t,e,r){"use strict";var a=r("qdfc"),n=r("xoaT"),s=!1;var o=function(t){s||r("Awn/")},i=r("VU/8")(a.a,n.a,!1,o,"data-v-f0d3e2c8",null);i.options.__file="components\\Core\\Toolbar\\index.vue",e.a=i.exports},qdfc:function(t,e,r){"use strict";e.a={computed:{isSignedIn:function(){return this.$store.getters.isSignedIn},items:function(){var t=[{text:"Home",url:"/"},{text:"Projects",url:"/projects"},{text:"About",url:"/about"},{text:"Contact",url:"/contact"}];return this.isSignedIn&&t.push({text:"Sign Out",url:"/signOut"}),t}}}},sDJo:function(t,e,r){var a=r("5ojb");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("39f2ee6f",a,!1,{sourceMap:!1})},wg6X:function(t,e,r){var a=r("eec0");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("90db6de0",a,!1,{sourceMap:!1})},xoaT:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{app:"",tabs:"",fixed:"",dark:"",color:"primary","scroll-off-screen":"","scroll-threshold":1}},[r("v-toolbar-title",[t._v("\n    Henrik Wassdahl\n    "),r("div",{staticClass:"body-2"},[t._v("UX Developer")])]),r("v-spacer"),r("v-tabs",{staticStyle:{width:"inherit"},attrs:{color:"primary",right:""}},[r("v-tabs-slider"),t._l(t.items,function(e,a){return r("v-tab",{key:a,attrs:{to:e.url,nuxt:""}},[t._v("\n      "+t._s(e.text)+"\n    ")])})],2)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},zt6Q:function(t,e,r){"use strict";var a=r("pqS9"),n=r("Y/x4");e.a={components:{Toolbar:a.a,Footer:n.a},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}}});