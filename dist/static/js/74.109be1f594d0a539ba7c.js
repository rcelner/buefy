webpackJsonp([74],{169:function(e,t,i){var l=i(0)(i(703),i(785),null,null,null);e.exports=l.exports},703:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{total:200,current:1,perPage:20,order:"",size:"",isSimple:!1,isRounded:!1}}}},785:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-field",{attrs:{grouped:"","group-multiline":""}},[i("b-field",{attrs:{label:"Total"}},[i("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),e._v(" "),i("b-field",{attrs:{label:"Items per page"}},[i("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),e._v(" "),i("b-field",{attrs:{label:"Order"}},[i("b-select",{model:{value:e.order,callback:function(t){e.order=t},expression:"order"}},[i("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),i("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),i("option",{attrs:{value:"is-right"}},[e._v("is-right")])])],1),e._v(" "),i("b-field",{attrs:{label:"Size"}},[i("b-select",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[i("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),i("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),i("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),i("option",{attrs:{value:"is-large"}},[e._v("is-large")])])],1)],1),e._v(" "),i("div",{staticClass:"block"},[i("b-switch",{model:{value:e.isSimple,callback:function(t){e.isSimple=t},expression:"isSimple"}},[e._v("Simple")]),e._v(" "),i("b-switch",{model:{value:e.isRounded,callback:function(t){e.isRounded=t},expression:"isRounded"}},[e._v("Rounded")])],1),e._v(" "),i("hr"),e._v(" "),i("b-pagination",{attrs:{total:e.total,current:e.current,order:e.order,size:e.size,simple:e.isSimple,rounded:e.isRounded,"per-page":e.perPage},on:{"update:current":function(t){e.current=t}}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=74.109be1f594d0a539ba7c.js.map