webpackJsonp([0],{"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("m5pN"),n=r("Pmg7"),i=!1;var o=function(t){i||r("t7qv")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-1b011d9c",null);s.options.__file="pages\\index.vue",e.default=s.exports},"7UE4":function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-btn",{staticClass:"filter-button",attrs:{color:this.filterColor,fab:"",fixed:"",top:"",right:""}},[this.filterCount?e("span",[this._v(this._s(this.filterCount))]):e("v-icon",[this._v("filter_list")])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},"88lN":function(t,e,r){"use strict";e.a={props:["project"],methods:{selectCategory:function(){var t={field:"category",value:this.project.category};this.$store.dispatch("addFilter",t)}},computed:{projectLink:function(){return this.project?"/projects/"+this.project.id:"/projects/new"},projectName:function(){return this.project?this.project.name:"Create New"},projectImage:function(){return this.project&&this.project.images&&0!==this.project.images.length?this.project.images[0].url:""},projectTags:function(){return this.project?this.project.tags.sort(function(t,e){return t>e?1:t<e?-1:0}):null},projectDate:function(){return this.project.date.getFullYear()}}}},Dgq8:function(t,e,r){"use strict";var a=r("gH8t"),n=r("kAMJ"),i=!1;var o=function(t){i||r("vv8J")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-4cb597c8",null);s.options.__file="components\\Projects\\Thumb\\Loading.vue",e.a=s.exports},HbFx:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-slide-x-reverse-transition",[r("v-card",[r("nuxt-link",{attrs:{to:t.projectLink}},[r("v-card-media",{staticClass:"white--text",class:t.projectImage?"":t.$globals.category[t.project.category].color,attrs:{height:"200px",src:t.projectImage}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("span",{staticClass:"project-title text-shadow headline"},[t._v(t._s(t.projectName)+" ("+t._s(t.projectDate)+")")])])],1)],1)],1)],1),t.project?r("v-card-text",[r("v-layout",{attrs:{row:""}},[r("v-chip",{staticClass:"clickable",attrs:{color:t.$globals.category[t.project.category].color,"text-color":"white"},on:{click:t.selectCategory}},[t._v("\n          "+t._s(t.$globals.category[t.project.category].name)+"\n        ")]),r("v-spacer"),r("div",t._l(t.projectTags,function(e){return r("v-btn",{key:e.name,staticClass:"ma-0",attrs:{title:t.$globals.tags[e].name,flat:"",small:"",icon:""}},[r("v-icon",{attrs:{small:"",color:"secondary"}},[t._v("\n              "+t._s(t.$globals.tags[e].icon)+"\n            ")])],1)}))],1)],1):t._e()],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},I8DZ:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".clickable>.chip__content{cursor:pointer!important}",""])},IOem:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},Lw2x:function(t,e,r){var a=r("tddE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("f85dff34",a,!1,{sourceMap:!1})},N3DW:function(t,e,r){"use strict";var a=r("88lN"),n=r("HbFx"),i=!1;var o=function(t){i||(r("Lw2x"),r("VGcB"))},s=r("VU/8")(a.a,n.a,!1,o,"data-v-c6f2da5c",null);s.options.__file="components\\Projects\\Thumb\\index.vue",e.a=s.exports},OP0F:function(t,e,r){"use strict";var a=r("g9or"),n=r("7UE4"),i=!1;var o=function(t){i||r("k4cm")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-5fde71ac",null);s.options.__file="components\\Projects\\FilterButton\\index.vue",e.a=s.exports},Pavd:function(t,e,r){var a=r("de/U");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("68145ab6",a,!1,{sourceMap:!1})},Pmg7:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[t.loading||0!==t.items.length?t._e():r("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n    No data found.\n  ")]),r("v-layout",{attrs:{row:"",wrap:""}},[t.isSignedIn?r("v-flex",{attrs:{md4:"",sm6:"",xs12:""}},[r("ProjectThumbNew")],1):t._e(),t._l(t.items,function(t,e){return r("v-flex",{key:e,attrs:{md4:"",sm6:"",xs12:""}},[r("ProjectThumb",{key:"transition-"+e,attrs:{project:t}})],1)})],2),r("ProjectFilterButton",{nativeOn:{click:function(e){t.filterDialog=!0}}}),r("ProjectFilterDialog",{attrs:{dialog:t.filterDialog},on:{"update:dialog":function(e){t.filterDialog=e}}})],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},SUMs:function(t,e,r){var a=r("IOem");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("5ae8d725",a,!1,{sourceMap:!1})},VGcB:function(t,e,r){var a=r("I8DZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("4a5a85ac",a,!1,{sourceMap:!1})},WatP:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".filter-button[data-v-1b011d9c]{margin-top:64px}",""])},aG8S:function(t,e,r){"use strict";e.a={head:function(){var t=this.$route.name;return"index"===t&&(t="home"),{title:(t=this.$options.filters.titlecase(t))+" - Henrik Wassdahl - UX Developer"}}}},"de/U":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"a .project-title[data-v-5ecd8e80]{text-decoration:none!important}",""])},dzWX:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.filterDialog,callback:function(e){t.filterDialog=e},expression:"filterDialog"}},[r("v-card",[r("v-card-title",[r("div",{staticClass:"title"},[t._v("Project Filter")])]),r("v-card-text",[r("v-select",{attrs:{items:t.categories,clearable:"",label:"Category"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"accent",flat:""},on:{click:function(e){e.stopPropagation(),t.filterDialog=!1}}},[t._v("\n        Close\n      ")]),r("v-btn",{attrs:{color:"accent",flat:"",disabled:!t.filterChanged},on:{click:t.saveFilter}},[t._v("\n        Save\n      ")])],1)],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},eLCB:function(t,e,r){"use strict";var a=r("i/hW"),n=r("z+f4"),i=!1;var o=function(t){i||r("Pavd")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-5ecd8e80",null);s.options.__file="components\\Projects\\Thumb\\New.vue",e.a=s.exports},g9or:function(t,e,r){"use strict";var a=r("fZjL"),n=r.n(a);e.a={computed:{filter:function(){return this.$store.getters.filter},filterCount:function(){var t=this,e=0;return n()(this.filter).forEach(function(r){t.filter[r]&&e++}),e},filterColor:function(){return this.filterCount?"accent":"grey lighten-2"}}}},gH8t:function(t,e,r){"use strict";e.a={}},hbMO:function(t,e,r){"use strict";var a=r("fZjL"),n=r.n(a),i=r("Xxa5"),o=r.n(i),s=r("exGp"),c=r.n(s),l=r("Sazm");r.n(l);e.a={props:["dialog"],data:function(){return{filterDialog:!1,loading:!1,category:null,categories:[]}},mounted:function(){this.reloadCategories()},methods:{saveFilter:function(){this.filterDialog=!1;var t={category:this.category};this.$store.dispatch("updateFilter",t)},reloadCategories:function(){var t=c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.getCategories();case 4:this.categories=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:this.loading=!1;case 11:case"end":return t.stop()}},t,this,[[1,7]])}));return function(){return t.apply(this,arguments)}}(),getCategories:function(){var t=c()(o.a.mark(function t(){var e,r,a=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.firestore().collection("categories"),r=[],t.next=4,e.get();case 4:return t.sent.forEach(function(){var t=c()(o.a.mark(function t(e){var n,i,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.data(),n.id,i=n.name,s={text:i,value:e.id},r.push(s);case 3:case"end":return t.stop()}},t,a)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initFilter:function(){var t=this;n()(this.filter).forEach(function(e){var r=t.filter[e];switch(e){case"category":t.category=r}})}},computed:{filter:function(){return this.$store.getters.filter},filterChanged:function(){return this.filter.category!==this.category}},watch:{dialog:function(t){t&&this.initFilter(),this.filterDialog=t},filterDialog:function(t){this.$emit("update:dialog",t)},filter:{handler:function(t){this.category=t.category},deep:!0}}}},"i/hW":function(t,e,r){"use strict";e.a={}},jKEb:function(t,e,r){"use strict";var a=r("aG8S"),n=r("VU/8")(a.a,null,!1,null,null,null);n.options.__file="components\\Mixins\\Head.vue",e.a=n.exports},k4cm:function(t,e,r){var a=r("mvFy");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("1c11f71a",a,!1,{sourceMap:!1})},kAMJ:function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-slide-x-reverse-transition",[e("v-card",[e("nuxt-link",{attrs:{to:"/projects/new"}},[e("v-card-media",{staticClass:"grey white--text",attrs:{height:"266px"}},[e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},m5pN:function(t,e,r){"use strict";var a=r("//Fk"),n=r.n(a),i=r("Xxa5"),o=r.n(i),s=r("fZjL"),c=r.n(s),l=r("exGp"),u=r.n(l),f=r("Sazm"),p=(r.n(f),r("jKEb")),d=r("N3DW"),v=r("eLCB"),h=r("Dgq8"),g=r("y6IH"),m=r("OP0F");e.a={mixins:[p.a],components:{ProjectThumb:d.a,ProjectThumbNew:v.a,ProjectThumbLoading:h.a,ProjectFilterDialog:g.a,ProjectFilterButton:m.a},data:function(){return{loading:!1,items:[],filterDialog:!1}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=u()(o.a.mark(function t(){var e,r,a,i,s=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.firestore().collection("projects").orderBy("date","desc"),this.filter&&(c()(this.filter).forEach(function(t){var r=s.filter[t];r&&(e=e.where(t,"==",r))}),this.items=this.items.filter(function(t){for(var e=c()(s.filter),r=0;r<e.length;r++){var a=e[r],n=s.filter[a];if(n)return n===t[a]}return!0}),this.items.sort(function(t,e){return t.date<e.date?1:t.date>e.date?-1:0})),this.loading=!0,t.prev=3,r=[],t.next=7,e.get();case 7:t.sent.forEach(function(){var t=u()(o.a.mark(function t(e){var a,n,i,c,l,u,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.data(),n=a.name,i=a.category,c=a.images,l=a.tags,u=a.date,f={id:e.id,name:n,category:i,images:c,tags:l,date:u},r.push(f);case 3:case"end":return t.stop()}},t,s)}));return function(e){return t.apply(this,arguments)}}()),a=o.a.mark(function t(e){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r[e],-1===s.items.findIndex(function(t){return t.id===a.id})){t.next=4;break}return t.abrupt("return","continue");case 4:return s.items.push(a),s.items.sort(function(t,e){return t.date<e.date?1:t.date>e.date?-1:0}),t.next=8,new n.a(function(t){return setTimeout(t,100)});case 8:case"end":return t.stop()}},t,s)}),i=0;case 11:if(!(i<r.length)){t.next=19;break}return t.delegateYield(a(i),"t0",13);case 13:if("continue"!==t.t0){t.next=16;break}return t.abrupt("continue",16);case 16:i++,t.next=11;break;case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(3),console.error(t.t1);case 24:this.loading=!1;case 25:case"end":return t.stop()}},t,this,[[3,21]])}));return function(){return t.apply(this,arguments)}}()},computed:{isSignedIn:function(){return this.$store.getters.isSignedIn},filter:function(){return this.$store.getters.filter}},watch:{filter:{handler:function(){this.getDataFromApi()},deep:!0}}}},mvFy:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},t7qv:function(t,e,r){var a=r("WatP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("2a8ee42a",a,!1,{sourceMap:!1})},tddE:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"a .project-title[data-v-c6f2da5c]{text-decoration:none!important}",""])},vv8J:function(t,e,r){var a=r("yAQ8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("331ce98f",a,!1,{sourceMap:!1})},y6IH:function(t,e,r){"use strict";var a=r("hbMO"),n=r("dzWX"),i=!1;var o=function(t){i||r("SUMs")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-131c79c0",null);s.options.__file="components\\Projects\\FilterDialog\\index.vue",e.a=s.exports},yAQ8:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"a .project-title[data-v-4cb597c8]{text-decoration:none!important}",""])},"z+f4":function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-slide-x-reverse-transition",[e("v-card",[e("nuxt-link",{attrs:{to:"/projects/new"}},[e("v-card-media",{staticClass:"grey white--text",attrs:{height:"266px"}},[e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[e("span",{staticClass:"project-title text-shadow headline"},[this._v("\n                Create New Project\n                "),e("v-icon",{attrs:{"x-large":"",color:"white"}},[this._v("add")])],1)])],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n}});