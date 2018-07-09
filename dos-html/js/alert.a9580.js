/*! kui-vue v1.8.5 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{BizV:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Alert 警告提示")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Demo",{attrs:{title:"基础"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success"}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info"}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning"}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error"}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),s("code",[t._v("type")]),t._v("来控制展示类型")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"图标"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success",showIcon:""}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info",showIcon:""}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning",showIcon:""}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error",showIcon:""}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("showIcon")]),t._v("来设置是否显示图标")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.icon))])]),t._v(" "),s("Demo",{attrs:{title:"可关闭"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Alert",{attrs:{type:"success",showIcon:"",closable:""}},[t._v("Success Text")]),t._v(" "),s("Alert",{attrs:{type:"info",showIcon:"",closable:""}},[t._v("Info Text")]),t._v(" "),s("Alert",{attrs:{type:"warning",showIcon:"",closable:""}},[t._v("Warning Text")]),t._v(" "),s("Alert",{attrs:{type:"error",showIcon:"",closable:""}},[t._v("Error Text")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("closable")]),t._v("来控制是否显示可关闭按钮")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.close))])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("按钮类型，可选值为success、info、warning、error或者不设置")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("warning")])]),t._v(" "),s("tr",[s("td",[t._v("showIcon")]),t._v(" "),s("td",[t._v("是否显示图标")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否显示关闭按钮")]),t._v(" "),s("td",[t._v("Boolean ")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("close")]),t._v(" "),s("td",[t._v("关闭时触发的回调函数 ")]),t._v(" "),s("td",[t._v("Function ")]),t._v(" "),s("td",[t._v("-")])])])])}];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return n})},BybE:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},n=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return n})},C8VU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=s("z7BB"),r=(o=n)&&o.__esModule?o:{default:o};e.default=r.default},Eu1e:function(t,e,s){"use strict";s.r(e);var o=s("Lvem"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,function(){return o[t]})}(r);e.default=n.a},IUUY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={base:'<Alert type="success">Success Text</Alert>\n<Alert type="info">Info Text</Alert>\n<Alert type="warning">Warning Text</Alert>\n<Alert type="error">Error Text</Alert>',icon:'<Alert type="success" showIcon>Success Text</Alert>\n<Alert type="info" showIcon>Info Text</Alert>\n<Alert type="warning" showIcon>Warning Text</Alert>\n<Alert type="error" showIcon>Error Text</Alert>',close:'<Alert type="success" showIcon closable>Success Text</Alert>\n<Alert type="info" showIcon closable>Info Text</Alert>\n<Alert type="warning" showIcon closable>Warning Text</Alert>\n<Alert type="error" showIcon closable>Error Text</Alert>'};e.default=o},Lvem:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(s("C8VU")),n=r(s("IUUY"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:o.default},data:function(){return{code:n.default}}}},"U9/v":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l(s("YEIV")),n=l(s("cF/K")),r=l(s("Ff65")),c=l(s("7+I9"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:c.default},components:{Code:n.default,Collapse:r.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},m9Vz:function(t,e,s){"use strict";s.r(e);var o=s("BizV"),n=s("Eu1e");for(var r in n)"default"!==r&&function(t){s.d(e,t,function(){return n[t]})}(r);var c=s("KHd+"),l=Object(c.a)(n.default,o.a,o.b,!1,null,null,null);e.default=l.exports},sOOp:function(t,e,s){"use strict";s.r(e);var o=s("U9/v"),n=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,function(){return o[t]})}(r);e.default=n.a},z7BB:function(t,e,s){"use strict";s.r(e);var o=s("BybE"),n=s("sOOp");for(var r in n)"default"!==r&&function(t){s.d(e,t,function(){return n[t]})}(r);var c=s("KHd+"),l=Object(c.a)(n.default,o.a,o.b,!1,null,null,null);e.default=l.exports}}]);