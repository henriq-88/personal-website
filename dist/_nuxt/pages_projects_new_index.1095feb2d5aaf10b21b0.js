webpackJsonp([1],{"/vZd":function(e,t,a){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("CreateProject")};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"0wGi":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{md4:"",sm6:"",xs12:""}},[a("input",{ref:"imageInput",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/x-png,image/jpeg"},on:{change:function(t){e.uploadImage(t.target.files[0])}}}),a("v-card",[a("v-card-media",{staticClass:"grey white--text clickable",attrs:{height:"266px",src:e.imageUrl},on:{click:e.selectImage}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e.imageUploading?a("v-flex",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{size:100,width:15,rotate:-90,value:e.imageUploadProgress,color:"white"}},[a("span",{staticClass:"text-shadow"},[e._v(e._s(e.imageUploadProgress)+"%")])])],1):e.imageUrl?e._e():a("v-flex",{staticClass:"text-xs-center"},[a("span",{staticClass:"project-title text-shadow headline"},[a("div",[e._v("Upload Image")]),a("v-icon",{attrs:{"x-large":"",color:"white"}},[e._v("add")])],1)])],1)],1)],1)],1),a("v-text-field",{attrs:{value:e.imageFileName,label:"Image",readonly:""},on:{click:e.selectImage}})],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"7rHC":function(e,t,a){var r=a("PecC");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("efda05d4",r,!1,{sourceMap:!1})},"8i2/":function(e,t,a){"use strict";var r=a("Xxa5"),n=a.n(r),i=a("exGp"),s=a.n(i),c=a("Sazm");a.n(c);t.a={props:["index","projectId","image"],data:function(){return{imageUrl:null,imageUploading:!1,imageUploadProgress:0,imageFileName:null}},methods:{selectImage:function(){this.imageUploading||this.$refs.imageInput.click()},uploadImage:function(){var e=s()(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.imageUploading=!0,e.prev=1,this.imageFileName=t.name,e.next=5,this.uploadProjectImage(t);case 5:this.imageUrl=e.sent,a={url:this.imageUrl,name:this.imageFileName},this.$emit("imageUploaded",{index:this.index,image:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:this.imageUploading=!1;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),uploadProjectImage:function(e){var t=this;if(e){var a=c.storage().ref("projects/"+this.projectId+"/"+e.name).put(e);return a.on(c.storage.TaskEvent.STATE_CHANGED,function(e){t.imageUploadProgress=Math.round(e.bytesTransferred/e.totalBytes*100)}),a.then(function(e,t){return e.downloadURL})}}},watch:{image:function(e){e&&(this.imageUrl=e.url,this.imageFileName=e.name)}}}},MDoU:function(e,t,a){"use strict";var r=a("8i2/"),n=a("0wGi"),i=!1;var s=function(e){i||a("ZOkg")},c=a("VU/8")(r.a,n.a,!1,s,"data-v-59175085",null);c.options.__file="components\\Projects\\ImagePicker\\index.vue",t.a=c.exports},PecC:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},Tcj4:function(e,t,a){"use strict";var r=a("wCh6"),n=a("U7TS"),i=!1;var s=function(e){i||a("7rHC")},c=a("VU/8")(r.a,n.a,!1,s,"data-v-20d31df4",null);c.options.__file="components\\Projects\\CreateEdit\\index.vue",t.a=c.exports},TvmS:function(e,t,a){var r=a("i/4j");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3ec9eb3e",r,!1,{sourceMap:!1})},U7TS:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e.project?a("span",{staticClass:"headline"},[e._v("\n        Edit Project\n      ")]):a("span",{staticClass:"headline"},[e._v("\n        Create New Project\n      ")])]),a("v-card-text",[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",disabled:!!e.project,rules:[e.$globals.rules.required],required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-select",{attrs:{label:"Category",rules:[e.$globals.rules.required],items:e.categories,required:""},model:{value:e.categorySelect,callback:function(t){e.categorySelect=t},expression:"categorySelect"}}),a("v-select",{attrs:{label:"Tags",rules:[e.$globals.rules.required],items:e.tags,chips:"",multiple:"",required:""},model:{value:e.tagSelect,callback:function(t){e.tagSelect=t},expression:"tagSelect"}}),a("v-menu",{ref:"dateMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.date},on:{"update:returnValue":function(t){e.date=t}},model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Date",rules:[e.$globals.rules.required],readonly:"",required:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.dateMenu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.dateMenu.save(e.date)}}},[e._v("OK")])],1)],1),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.$globals.config.MAX_PROJECT_IMAGE_COUNT,function(t){return a("ProjectImagePicker",{key:t,attrs:{index:t-1,projectId:e.projectId,image:e.images?e.images[t-1]:null},on:{imageUploaded:e.addImage}})}))],1)],1)],1),a("v-card-actions",[a("v-spacer"),e.project?a("v-btn",{attrs:{disabled:!e.valid,loading:e.loading,flat:""},on:{click:e.createUpdateProject}},[e._v("\n        Update\n      ")]):a("v-btn",{attrs:{disabled:!e.valid,loading:e.loading,flat:""},on:{click:e.createUpdateProject}},[e._v("\n        Create\n      ")])],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"XbS/":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},ZOkg:function(e,t,a){var r=a("XbS/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("b32fa1fe",r,!1,{sourceMap:!1})},aG8S:function(e,t,a){"use strict";t.a={head:function(){var e=this.$route.name;return"index"===e&&(e="home"),{title:(e=this.$options.filters.titlecase(e))+" - Henrik Wassdahl - UX Developer"}}}},"i/4j":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},iJic:function(e,t,a){"use strict";var r=a("Tcj4");t.a={components:{CreateProject:r.a}}},jKEb:function(e,t,a){"use strict";var r=a("aG8S"),n=a("VU/8")(r.a,null,!1,null,null,null);n.options.__file="components\\Mixins\\Head.vue",t.a=n.exports},tutA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("iJic"),n=a("/vZd"),i=!1;var s=function(e){i||a("TvmS")},c=a("VU/8")(r.a,n.a,!1,s,"data-v-3485615a",null);c.options.__file="pages\\projects\\new\\index.vue",t.default=c.exports},wCh6:function(e,t,a){"use strict";var r=a("Xxa5"),n=a.n(r),i=a("exGp"),s=a.n(i),c=a("Sazm"),o=(a.n(c),a("jKEb")),l=a("MDoU");t.a={mixins:[o.a],components:{ProjectImagePicker:l.a},props:["project"],data:function(){return{loading:!1,valid:!1,name:null,categorySelect:null,categories:[],categoriesLoading:!1,tagSelect:null,tags:[],tagsLoading:!1,date:null,dateMenu:!1,images:null}},mounted:function(){this.reloadCategories(),this.reloadTags()},methods:{createUpdateProject:function(){var e=s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.setProject();case 4:this.$router.go(-1),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:this.loading=!1;case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}(),setProject:function(){return c.firestore().collection("projects").doc(this.projectId).set({name:this.name,category:this.categorySelect,tags:this.tagSelect,date:new Date(this.date),images:this.images})},reloadCategories:function(){var e=s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoriesLoading=!0,e.prev=1,e.next=4,this.getCategories();case 4:this.categories=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:this.categoriesLoading=!1;case 11:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}(),getCategories:function(){var e=s()(n.a.mark(function e(){var t,a,r=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.firestore().collection("categories"),a=[],e.next=4,t.get();case 4:return e.sent.forEach(function(){var e=s()(n.a.mark(function e(t){var i,s,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=t.data(),i.id,s=i.name,c={text:s,value:t.id},a.push(c);case 3:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),reloadTags:function(){var e=s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.tagsLoading=!0,e.prev=1,e.next=4,this.getTags();case 4:this.tags=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:this.tagsLoading=!1;case 11:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}(),getTags:function(){var e=s()(n.a.mark(function e(){var t,a,r=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.firestore().collection("tags"),a=[],e.next=4,t.get();case 4:return e.sent.forEach(function(){var e=s()(n.a.mark(function e(t){var i,s,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=t.data(),i.id,s=i.name,c={text:s,value:t.id},a.push(c);case 3:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addImage:function(e){var t=e.index,a=e.image;this.images||(this.images=[]),this.images[t]=a,this.images=this.images.filter(function(e){return!!e})}},computed:{projectId:function(){if(this.name)return this.$options.filters.linkText(this.name)}},watch:{project:function(e){var t=e.name,a=e.category,r=e.tags,n=e.date,i=e.images;this.name=t,this.categorySelect=a,this.tagSelect=r,this.date=("0000"+n.getFullYear()).slice(-4)+"-"+("00"+(n.getMonth()+1)).slice(-2)+"-"+("00"+n.getDate()).slice(-2),this.images=i}}}}});