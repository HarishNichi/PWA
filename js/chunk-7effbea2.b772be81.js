(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7effbea2"],{"04ad":function(e,t,n){"use strict";var a=n("bfdd"),l=n.n(a);l.a},"1ed4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-5"},[n("div",{staticClass:"justifyClass mt-3"},[e._v("get API Example")]),n("div",{staticClass:"mt-5 ml-5 mr-5",attrs:{id:"settingTable"}},[n("b-table",{ref:"selectableTable",attrs:{id:"selectableTable","select-mode":e.selectModeTable,fields:e.fields,items:e.getcompanyData,striped:!0,bordered:!0,borderless:!0,"head-variant":"dark",fixed:"","sticky-header":"","show-empty":""},scopedSlots:e._u([{key:"cell(Year)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(EmployeeNumber)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Capital)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Revenue1)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Floorspace)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(NumberOfStores)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(IndustryType)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"})],1)]},proxy:!0},{key:"empty",fn:function(){return[n("div",{staticClass:"text-center"},[e._v(" No Data Available ")])]},proxy:!0}])})],1),n("div",{staticClass:"justifyClass alignTop mt-5 mb-5"},[e._v("Post API Example")]),n("div",{staticClass:"mt-5 ml-5 mr-5",attrs:{id:"settingTable"}},[n("b-table",{ref:"selectableTable",attrs:{id:"selectableTable","select-mode":e.selectModeTable,fields:e.fieldss,items:e.companyData,striped:!0,bordered:!0,borderless:!0,"head-variant":"dark",fixed:"","sticky-header":"","show-empty":""},scopedSlots:e._u([{key:"cell(Year)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(EmployeeNumber)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Capital)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Revenue1)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(Floorspace)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(NumberOfStores)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"cell(IndustryType)",fn:function(t){return[e._v(e._s(t.value))]}},{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"})],1)]},proxy:!0},{key:"empty",fn:function(){return[n("div",{staticClass:"text-center"},[e._v(" No Data Available ")])]},proxy:!0}])})],1)])},l=[],r=(n("96cf"),n("3b8d")),s=(n("ac6a"),{data:function(){return{companyData:[],companysizeInfo:[],selectModeTable:"single",getcompanyData:[]}},computed:{fieldss:function(){return[{key:"Year",label:"Year",class:"text-center normal-width"},{key:"EmployeeNumber",label:"EmployeeNumber",class:"text-center normal-width"},{key:"Capital",label:"Capital1",class:"text-center normal-width"},{key:"Revenue",label:"Revenue1",class:"text-center normal-width"},{key:"Floorspace",label:"FloorSpace2",class:"text-center normal-width"},{key:"NumberOfStores",label:"NumberOfStores",class:"text-center normal-width"},{key:"IndustryType",label:"Industry",class:"text-center normal-width"}]},fields:function(){return[{key:"Year",label:"Year",class:"text-center normal-width"},{key:"EmployeeNumber",label:"EmployeeNumber",class:"text-center normal-width"},{key:"Capital",label:"Capital1",class:"text-center normal-width"},{key:"Revenue",label:"Revenue1",class:"text-center normal-width"},{key:"Floorspace",label:"FloorSpace2",class:"text-center normal-width"},{key:"NumberOfStores",label:"NumberOfStores",class:"text-center normal-width"},{key:"IndustryType",label:"Industry",class:"text-center normal-width"}]}},mounted:function(){this.companyTableData(),this.getApiMethod()},methods:{getApiMethod:function(){var e=this;fetch("https://mng.kanbei.develop.groony.jp/api/master/readall/m_client_company_size_info").then((function(e){return e.json()})).then((function(t){var n=t.data;if(n.length>0){var a=t.data;a.forEach((function(t){var n,a;1==t.company_size?e.companytype="small":2==t.company_size?e.companytype="Medium":3==t.company_size?e.companytype="Big":e.companytype="",null==t.revenue&&null==t.floor_space?(n=null,a=null):null!=t.revenue&&null==t.floor_space?(n=t.revenue,a=null):null==t.revenue&&null!=t.floor_space?(n=null,a=t.floor_space):(n=t.revenue,a=t.floor_space);var l={Year:t.info_year,EmployeeNumber:t.employee_number,Capital:t.capital,Revenue:n,Floorspace:a,NumberOfStores:t.number_of_stores,IndustryType:e.companytype};e.getcompanyData.push(l)}))}}))},companyTableData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ap.kanbei.co.jp/api/master/readdata/m_client_company_size_info",{method:"POST",body:JSON.stringify({fieldlist:["*"],client_no:29}),headers:{"Content-type":"application/json;"}}).then((function(e){return e.json()})).then((function(e){console.log(e.data);var n=e.data;if(n.length>0){var a=e.data;a.forEach((function(e){var n,a;1==e.company_size?t.companytype="small":2==e.company_size?t.companytype="Medium":3==e.company_size?t.companytype="Big":t.companytype="",null==e.revenue&&null==e.floor_space?(n=null,a=null):null!=e.revenue&&null==e.floor_space?(n=e.revenue,a=null):null==e.revenue&&null!=e.floor_space?(n=null,a=e.floor_space):(n=e.revenue,a=e.floor_space);var l={Year:e.info_year,EmployeeNumber:e.employee_number,Capital:e.capital,Revenue:n,Floorspace:a,NumberOfStores:e.number_of_stores,IndustryType:t.companytype};t.companyData.push(l)}))}}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}}),o=s,c=(n("04ad"),n("2877")),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},bfdd:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7effbea2.b772be81.js.map