(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52ccd1b9"],{"31ea":function(t,e,r){},"454f":function(t,e,r){r("46a7");var a=r("584a").Object;t.exports=function(t,e,r){return a.defineProperty(t,e,r)}},"46a7":function(t,e,r){var a=r("63b6");a(a.S+a.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},8492:function(t,e,r){"use strict";var a=r("31ea"),n=r.n(a);n.a},"85f2":function(t,e,r){t.exports=r("454f")},"8e6e":function(t,e,r){var a=r("5ca1"),n=r("990b"),s=r("6821"),i=r("11e9"),o=r("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,a=s(t),c=i.f,l=n(a),u={},p=0;while(l.length>p)r=c(a,e=l[p++]),void 0!==r&&o(u,e,r);return u}})},"990b":function(t,e,r){var a=r("9093"),n=r("2621"),s=r("cb7c"),i=r("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=a.f(s(t)),r=n.f;return r?e.concat(r(t)):e}},ac50:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"content",staticClass:"topHeader"},[r("b-row",[r("b-col",{staticClass:"mt-1 cancelCase"},[r("b-button",{staticClass:"back-btn",attrs:{variant:"primary"},on:{click:t.close}},[t._v(" "+t._s(t.$t("CLOSE"))+" ")])],1)],1),r("b-row",[r("b-col",[r("b-card",{staticClass:"p-1 mt-1 inquary-box mb-2",attrs:{"no-body":""}},[r("b-card-body",[r("b-row",[r("b-col",{staticClass:"text-center title-fw title-fs"},[t._v(" "+t._s(t.$t("INQUIRY"))+" ")])],1),r("br"),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"mb-4"},[r("b-form-group",[r("b-row",[r("b-col",{attrs:{cols:"5",sm:"4",lg:"2"}}),r("b-col",{attrs:{cols:"5",sm:"4",lg:"3"}},[r("div",{staticClass:"line-3"},[t._v(t._s(t.$t("COMPANYNAMEORNAME")))])]),r("b-col",{staticClass:"p-top-5",attrs:{cols:"2",sm:"2",lg:"1"}},[r("b-button",{staticClass:"px-4 required-btn float-right",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))])],1),r("b-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[r("b-input-group",{staticClass:"mb-1 mt-1"},[r("b-input",{staticClass:"form-control",attrs:{id:"input-id",placeholder:t.$t("COMPANYNAMEORNAME"),type:"text"},model:{value:t.$v.inquary.company_name.$model,callback:function(e){t.$set(t.$v.inquary.company_name,"$model","string"===typeof e?e.trim():e)},expression:"$v.inquary.company_name.$model"}})],1),r("show-errors",{attrs:{control:t.$v.inquary.company_name,field:t.$t("COMPANYNAMEORNAME")}})],1)],1)],1),r("b-form-group",[r("b-row",[r("b-col",{attrs:{cols:"5",sm:"4",lg:"2"}}),r("b-col",{attrs:{cols:"5",sm:"4",lg:"3"}},[r("div",{staticClass:"line-3"},[t._v(t._s(t.$t("PERSONINCHARGE")))])]),r("b-col",{staticClass:"p-top-5",attrs:{cols:"2",sm:"2",lg:"1"}},[r("b-button",{staticClass:"px-4 required-btn float-right",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))])],1),r("b-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[r("b-input-group",{staticClass:"mb-1 mt-1"},[r("b-input",{staticClass:"form-control",attrs:{id:"input-id",placeholder:t.$t("PERSONINCHARGE"),type:"text"},model:{value:t.$v.inquary.person_in_charge.$model,callback:function(e){t.$set(t.$v.inquary.person_in_charge,"$model","string"===typeof e?e.trim():e)},expression:"$v.inquary.person_in_charge.$model"}})],1),r("show-errors",{attrs:{control:t.$v.inquary.person_in_charge,field:t.$t("PERSONINCHARGE")}})],1)],1)],1),r("b-form-group",[r("b-row",[r("b-col",{attrs:{cols:"5",sm:"4",lg:"2"}}),r("b-col",{attrs:{cols:"5",sm:"4",lg:"3"}},[r("div",{staticClass:"line-3"},[t._v(t._s(t.$t("PHONENO")))])]),r("b-col",{staticClass:"p-top-5",attrs:{cols:"2",sm:"2",lg:"1"}},[r("b-button",{staticClass:"px-4 required-btn float-right",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))])],1),r("b-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[r("b-input-group",{staticClass:"mb-1 mt-1"},[r("b-input",{staticClass:"form-control",attrs:{id:"input-id",placeholder:t.$t("PHONENO"),type:"text",maxlength:"11",onkeypress:"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"},model:{value:t.$v.inquary.phone_no.$model,callback:function(e){t.$set(t.$v.inquary.phone_no,"$model","string"===typeof e?e.trim():e)},expression:"$v.inquary.phone_no.$model"}})],1),r("show-errors",{attrs:{control:t.$v.inquary.phone_no,field:t.$t("PHONENO")}})],1)],1)],1),r("b-form-group",[r("b-row",[r("b-col",{attrs:{cols:"5",sm:"4",lg:"2"}}),r("b-col",{attrs:{cols:"5",sm:"4",lg:"3"}},[r("div",{staticClass:"line-3"},[t._v(t._s(t.$t("MAILADDRESS")))])]),r("b-col",{staticClass:"p-top-5",attrs:{cols:"2",sm:"2",lg:"1"}},[r("b-button",{staticClass:"px-4 required-btn float-right",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))])],1),r("b-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[r("b-input-group",{staticClass:"mb-1 mt-1"},[r("b-input",{staticClass:"form-control",attrs:{id:"input-id",placeholder:t.$t("MAILADDRESS"),type:"text"},model:{value:t.$v.inquary.email.$model,callback:function(e){t.$set(t.$v.inquary.email,"$model","string"===typeof e?e.trim():e)},expression:"$v.inquary.email.$model"}})],1),r("show-errors",{attrs:{control:t.$v.inquary.email,field:t.$t("MAILADDRESS")}})],1)],1)],1),r("b-form-group",{staticClass:"inquary_content"},[r("b-row",{staticClass:"outer"},[r("b-col",{attrs:{cols:"5",sm:"4",lg:"2"}}),r("b-col",{attrs:{cols:"5",sm:"4",lg:"3"}},[r("div",{staticClass:"textarea-line"},[t._v(" "+t._s(t.$t("CONTENTOFINQUARY"))+" ")])]),r("b-col",{staticClass:"textarea-pt",attrs:{cols:"2",sm:"2",lg:"1"}},[r("b-button",{staticClass:"px-4 required-btn float-right",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))])],1),r("b-col",{attrs:{cols:"12",sm:"12",lg:"4"}},[r("b-form-textarea",{staticClass:"f-textarea",attrs:{plain:!0,rows:"6"},model:{value:t.$v.inquary.content_of_inquary.$model,callback:function(e){t.$set(t.$v.inquary.content_of_inquary,"$model","string"===typeof e?e.trim():e)},expression:"$v.inquary.content_of_inquary.$model"}},[t._v(" {{}} ")]),r("show-errors",{attrs:{control:t.$v.inquary.content_of_inquary,field:t.$t("CONTENTOFINQUARY")}})],1)],1)],1)],1),r("b-row",[r("b-col",{staticClass:"text-center mb-1",attrs:{cols:"12"}},[r("b-button",{staticClass:"px-4 send-btn",attrs:{variant:"primary",type:"submit"}},[t._v(" "+t._s(t.$t("SEND"))+" "),t.loading?r("i",{staticClass:"fa fa-spinner fa-spin"}):t._e()])],1)],1)],1)],1)],1)],1)],1)],1)},n=[],s=(r("8e6e"),r("ac6a"),r("cadf"),r("456d"),r("96cf"),r("3b8d")),i=r("bd86"),o=r("b5ae"),c=r("c827"),l=r("3f54"),u=r("1315"),p=r("d3a4"),m=r("2f62"),b=r("2f4e");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _=l["a"].get("basic");u["Settings"].defaultLocale="ja";var v={components:{ShowErrors:c["a"]},data:function(){return{session_id:"",inquary:{company_name:"",person_in_charge:"",phone_no:"",email:"",content_of_inquary:""},loading:!1,from_time:"10時",to_time:"17時"}},validations:{inquary:{company_name:{required:o["required"]},person_in_charge:{required:o["required"]},phone_no:{required:o["required"],phoneNumber:o["numeric"],phoneMaxLenth:Object(o["maxLength"])(11)},email:{required:o["required"],email:o["email"]},content_of_inquary:{required:o["required"]}}},computed:d({},Object(m["b"])({user_details:"getUserDetails"})),mounted:function(){this.getUserDataForContactInquiry()},created:function(){},destroyed:function(){},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.inquary.$touch(),this.$v.inquary.$invalid){t.next=9;break}return this.loading=!0,t.next=5,_.postAPI(b["a"].ROOTSENDCONTACTREQUEST,{client_no:this.user_details.client_account_no,company_name:this.inquary.company_name,person_incharge:this.inquary.person_in_charge,phone_no:this.inquary.phone_no,email:this.inquary.email,content:this.inquary.content_of_inquary});case 5:e=t.sent,r=e.data,this.loading=!1,r.success?(a=this.getSuccessHtml(),this.$swal({width:500,type:"success",text:r.message,html:a,customClass:{popup:"format-pre"}}).then((function(){}))):this.$swal({type:"warning",text:r.message});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSuccessHtml:function(){var t='<div class="title-fw text-left"> '+p["a"].t("MSGSENTTOADMIN")+" </div>";return t+='<div class="title-fw mb-4 text-left">'+p["a"].t("WAITFORANSWER")+"</div>",t+='<div class="title-fw text-left"> '+p["a"].t("ANSWERNEXTDAY")+"</div>",t+='<div class="title-fw mb-4 text-left">'+p["a"].t("FORGIVEME")+"</div>",t+='<div class="title-fw text-left">'+p["a"].t("SUPPORTTIME")+"</div>",t+='<div class="title-fw text-left">'+p["a"].t("WEEKDAYS")+"：<span>"+this.from_time+"~"+this.to_time+"</span></div>",t+='<div class="title-fw text-left">'+p["a"].t("CLOSED")+"</div>",t},getUserDataForContactInquiry:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.session_id=localStorage.getItem("client_account_no"),t.next=3,_.postAPI(b["a"].CONTACT,{client_account_no:this.session_id});case 3:e=t.sent,r=e.data,this.inquary={company_name:r.data.client_name,person_in_charge:r.data.client_person_name,phone_no:r.data.client_tel,email:r.data.client_mail,content_of_inquary:""};case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),close:function(){window.close()}}},y=v,h=(r("8492"),r("2877")),g=Object(h["a"])(y,a,n,!1,null,"5aabc590",null);e["default"]=g.exports},bd86:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("85f2"),n=r.n(a);function s(t,e,r){return e in t?n()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},f1ae:function(t,e,r){"use strict";var a=r("86cc"),n=r("4630");t.exports=function(t,e,r){e in t?a.f(t,e,n(0,r)):t[e]=r}}}]);
//# sourceMappingURL=chunk-52ccd1b9.c308d741.js.map