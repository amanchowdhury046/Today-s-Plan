(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),s=a.n(c),r=(a(14),a(1)),o=a(4),i=a(5),m=a(7),d=a(6),u=a(8);var h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"shadow p-2 my-2 col-sm-9"},e.value),l.a.createElement("button",{className:"btn btn-danger my-2 col-sm-2 offset-1",onClick:function(){e.sendData(e.id)}},"X"))},f=(a(16),a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],text:""},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleAdd=function(e){if(""!==a.state.text){var t=[].concat(Object(r.a)(a.state.items),[a.state.text]);a.setState({items:t,text:""})}},a.handleDelete=function(e){console.log("Deleted",e);var t=Object(r.a)(a.state.items);console.log("Olditems",t);var n=t.filter(function(t,a){return a!==e});console.log("Newitems",n),a.setState({items:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 mx-auto text-white shadow-lg p-3"},l.a.createElement("h2",{className:"text-center m-5"}," Today's Plan "),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Write Plan Here",value:this.state.text,onChange:this.handleChange})),l.a.createElement("div",{className:"col-2"},l.a.createElement("button",{className:"btn btn-warning px-5 font-weight-bold",onClick:this.handleAdd},"Add"))),l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"list-unstyled row m-5"},this.state.items.map(function(t,a){return l.a.createElement(h,{key:a,id:a,value:t,sendData:e.handleDelete})})))))))}}]),t}(n.Component));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.7ec669ff.chunk.js.map