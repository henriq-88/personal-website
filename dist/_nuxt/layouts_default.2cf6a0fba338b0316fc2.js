webpackJsonp([1],{"+hxr":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{app:"",absolute:"",dark:"",height:"auto"}},[a("v-container",{staticClass:"black white--text",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md8:"","offset-md2":"",lg6:"","offset-lg3":""}},[a("v-layout",{staticClass:"my-2",attrs:{row:""}},[a("v-spacer"),t._l(t.socials,function(e,s){return a("v-btn",{key:s,attrs:{color:e.color,href:e.href,flat:"",fab:"",small:"",target:"_blank"}},[a("v-icon",[t._v(t._s(e.icon))])],1)}),a("v-spacer")],2),a("v-layout",{staticClass:"mt-2",attrs:{row:""}},[a("v-spacer"),a("span",{staticClass:"title"},[t._v("Let's make magic together!")]),a("v-spacer")],1),a("v-layout",{staticClass:"mb-2",attrs:{row:""}},[a("v-spacer"),a("ContactForm"),a("v-spacer")],1),a("v-layout",{staticClass:"grey--text mt-4 mb-2",attrs:{row:""}},[a("v-spacer"),t._v("\n          Copyright © "+t._s((new Date).getFullYear())+" Henrik Wassdahl\n          "),a("v-spacer")],1)],1)],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"5ojb":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".clickable{cursor:pointer}.text-shadow{text-shadow:0 2px 2px #333}a:-webkit-any-link{text-decoration:none}",""])},"8cxC":function(t,e,a){"use strict";var s=a("jmf+"),r=a("CmKu"),o=!1;var n=function(t){o||a("TBAY")},i=a("VU/8")(s.a,r.a,!1,n,"data-v-6b24b0be",null);i.options.__file="components\\Core\\Footer\\ContactForm\\index.vue",e.a=i.exports},"Awn/":function(t,e,a){var s=a("ma53");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("794331df",s,!1,{sourceMap:!1})},CmKu:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",color:"accent",rules:[t.$globals.rules.required],disabled:t.loading,"hide-details":"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{disabled:t.loading,label:"Organization",color:"accent","hide-details":""},model:{value:t.organization,callback:function(e){t.organization=e},expression:"organization"}}),a("v-text-field",{attrs:{disabled:t.loading,label:"Email",color:"accent",rules:[t.$globals.rules.required,t.$globals.rules.email],"hide-details":"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{disabled:t.loading,label:"Message",color:"accent",rows:"2",rules:[t.$globals.rules.required],"multi-line":"","hide-details":"",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{attrs:{block:"",color:"accent",disabled:!t.valid,loading:t.loading},on:{click:t.sendMessage}},[t._v("\n        Send\n      ")])],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("zt6Q"),r=a("STrE"),o=!1;var n=function(t){o||a("sDJo")},i=a("VU/8")(s.a,r.a,!1,n,null,null);i.options.__file="layouts\\default.vue",e.default=i.exports},S4xV:function(t,e,a){"use strict";var s=a("8cxC");e.a={components:{ContactForm:s.a},data:function(){return{socials:[{href:"https://www.facebook.com/henrik.wassdahl",icon:"mdi-facebook",color:"indigo"},{href:"https://plus.google.com/+HenrikWassdahl",icon:"mdi-google",color:"red"},{href:"https://github.com/seline",icon:"mdi-github-circle",color:"grey"},{href:"https://bitbucket.org/Seline88",icon:"mdi-bitbucket",color:"blue"},{href:"https://www.linkedin.com/in/henrikwassdahl",icon:"mdi-linkedin",color:"light-blue"},{href:"https://stackoverflow.com/users/2375978/henrik-wassdahl",icon:"mdi-stack-overflow",color:"orange"}]}}}},STrE:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Toolbar"),e("v-content",[e("v-container",{staticClass:"px-0 ma-0",attrs:{fluid:""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md8:"","offset-md2":"",lg6:"","offset-lg3":""}},[e("nuxt")],1)],1)],1)],1),e("Footer")],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},TBAY:function(t,e,a){var s=a("of9F");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("35c422a7",s,!1,{sourceMap:!1})},"Y/x4":function(t,e,a){"use strict";var s=a("S4xV"),r=a("+hxr"),o=!1;var n=function(t){o||a("wg6X")},i=a("VU/8")(s.a,r.a,!1,n,"data-v-a10fa894",null);i.options.__file="components\\Core\\Footer\\index.vue",e.a=i.exports},eec0:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".half-transparent[data-v-a10fa894]{background:rgba(0,0,0,.712)}",""])},"jmf+":function(t,e,a){"use strict";var s=a("Xxa5"),r=a.n(s),o=a("exGp"),n=a.n(o),i=a("Sazm");a.n(i);e.a={data:function(){return{valid:!1,loading:!1,name:null,organization:null,email:null,message:null}},methods:{sendMessage:function(){var t=n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.postMessage();case 4:this.$refs.form.reset(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:this.loading=!1;case 11:case"end":return t.stop()}},t,this,[[1,7]])}));return function(){return t.apply(this,arguments)}}(),postMessage:function(){return i.firestore().collection("messages").add({name:this.name,organization:this.organization,email:this.email,message:this.message})}}}},ma53:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},of9F:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},pqS9:function(t,e,a){"use strict";var s=a("qdfc"),r=a("xoaT"),o=!1;var n=function(t){o||a("Awn/")},i=a("VU/8")(s.a,r.a,!1,n,"data-v-f0d3e2c8",null);i.options.__file="components\\Core\\Toolbar\\index.vue",e.a=i.exports},qdfc:function(t,e,a){"use strict";e.a={computed:{isSignedIn:function(){return this.$store.getters.isSignedIn},items:function(){var t=[{text:"Home",url:"/"},{text:"About",url:"/about"}];return this.isSignedIn&&t.push({text:"Sign Out",url:"/signOut"}),t}}}},sDJo:function(t,e,a){var s=a("5ojb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("39f2ee6f",s,!1,{sourceMap:!1})},wg6X:function(t,e,a){var s=a("eec0");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("90db6de0",s,!1,{sourceMap:!1})},xoaT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"md-4 offset-md4",attrs:{app:"",tabs:"",fixed:"",dark:"",color:"primary","scroll-off-screen":"","scroll-threshold":1}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md8:"","offset-md2":"",lg6:"","offset-lg3":""}},[a("v-layout",{attrs:{row:""}},[a("v-toolbar-title",[t._v("\n          Henrik Wassdahl\n          "),a("div",{staticClass:"body-2"},[t._v("UX Developer")])]),a("v-spacer"),a("v-tabs",{staticStyle:{width:"inherit"},attrs:{color:"primary",right:""}},[a("v-tabs-slider"),t._l(t.items,function(e,s){return a("v-tab",{key:s,attrs:{to:e.url,exact:"",nuxt:""}},[t._v("\n            "+t._s(e.text)+"\n          ")])})],2)],1)],1)],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},zt6Q:function(t,e,a){"use strict";var s=a("pqS9"),r=a("Y/x4");e.a={components:{Toolbar:s.a,Footer:r.a},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}}});