webpackJsonp([1],{"1X6k":function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("h1",{staticClass:"header-logo"},[this._v("Todos")])])}]},a={components:{HeaderComponent:o("VU/8")({},s,!1,function(e){o("SX13")},"data-v-c4e77048",null).exports},name:"app"},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("header-component"),this._v(" "),t("router-view")],1)},staticRenderFns:[]},d=o("VU/8")(a,c,!1,function(e){o("rrpF")},null,null).exports,i=o("/ocq"),r=o("mvHQ"),m=o.n(r),u={todos:[{id:1,memo:"hoge",completed:!1},{id:2,memo:"foo",completed:!1},{id:3,memo:"bar",completed:!1}]},l=function(e,t){var o=parseInt(t,10);return e.findIndex(function(e){return e.id===o})},p={addMemo:function(e){e.id=u.todos.reduce(function(e,t){return e<t.id?t.id:e},0)+1,u.todos.push(e)},changeChecked:function(e){u.todos[e-1].completed=!u.todos[e-1].completed},removeTodo:function(e){var t=l(u.todos,e);u.todos.splice(t,1)},saveTodo:function(){localStorage.setItem("todos",m()(u.todos))},loadTodo:function(){u.todos=JSON.parse(localStorage.getItem("todos")),u.todos||(u.todos=[])}},f={state:u,actions:p},v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],staticClass:"footer__input",attrs:{type:"text",placeholder:"メモを入れてね"},domProps:{value:e.memo},on:{input:function(t){t.target.composing||(e.memo=t.target.value)}}}),e._v(" "),o("button",{staticClass:"footer__button",on:{click:function(t){e.$emit("addMemo",e.memo)}}},[e._v("登録する")])])},staticRenderFns:[]},h={components:{FooterComponent:o("VU/8")({props:{},data:function(){return{memo:""}}},v,!1,function(e){o("1X6k")},"data-v-7af81d0e",null).exports},data:function(){return{sharedState:f.state}},created:function(){f.actions.loadTodo()},methods:{addMemo:function(e){console.log(e);var t={memo:e,completed:!1};f.actions.addMemo(t),f.actions.saveTodo()},changeChecked:function(e){f.actions.changeChecked(e)},mouseenter:function(e){},removeTodo:function(e){f.actions.removeTodo(e),f.actions.saveTodo()}}},_={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"main"},[0!==e.sharedState.todos.length?o("ul",{staticClass:"todo-list"},e._l(e.sharedState.todos,function(t){return o("li",{key:t.id,staticClass:"todo-list-item",class:{completed:t.completed},on:{mouseenter:e.mouseenter}},[o("input",{attrs:{id:t.id,type:"checkbox"},domProps:{checked:t.completed},on:{click:function(o){e.changeChecked(t.id)}}}),e._v(" "),o("label",{attrs:{for:t.id}},[o("span",[e._v("id:"+e._s(t.id))]),e._v(" "),o("span",[e._v(e._s(t.memo))])]),e._v(" "),o("button",{staticClass:"todo-list-item__button",on:{click:function(o){e.removeTodo(t.id)}}},[e._v("削除")])])})):o("div",[e._v("表示するTodoがありません")]),e._v(" "),o("footer-component",{on:{addMemo:e.addMemo}})],1)},staticRenderFns:[]},g=o("VU/8")(h,_,!1,function(e){o("UL5T")},"data-v-7339c3cf",null).exports;n.a.use(i.a);var C=new i.a({mode:"history",routes:[{path:"/",name:"All",component:g}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:C,template:"<App/>",components:{App:d}})},SX13:function(e,t){},UL5T:function(e,t){},rrpF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3ce1cb39427869747121.js.map