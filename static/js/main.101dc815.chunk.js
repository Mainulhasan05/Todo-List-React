(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),l=n.n(s),r=(n(12),n(3)),o=n(7),i=(n(13),n(0));function b(e){return Object(i.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("a",{class:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)("a",{class:"nav-link",href:"#",children:"About"})})]}),Object(i.jsxs)("form",{class:"d-flex",children:[Object(i.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}function j(e){var t=e.todo,n=e.onDelete;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t.title}),Object(i.jsx)("p",{children:t.desc}),Object(i.jsx)("button",{onClick:function(){n(t)},className:"btn btn-danger btn-sm",children:"Delete"})]})}function d(e){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h3",{className:"my-3",children:"kajer List"}),0===e.kajx.length?"No Todo's to display":e.kajx.map((function(t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{todo:t,onDelete:e.onDelete},t.sl_no),Object(i.jsx)("hr",{})]})}))]})}function u(){return Object(i.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",width:"100%",top:"100vh"},children:Object(i.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodoList.com"})})}function h(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),o=Object(r.a)(l,2),b=o[0],j=o[1];return Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h3",{children:"Add a Todo"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&b?e.addTodo(c,b):alert("khali rakha jabe na")},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(i.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:c,className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(i.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:b,className:"form-control",id:"desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-success btn-sm       ",children:"Add Todo"})]})]})}var x=function(){var e=Object(a.useState)([{sl_no:1,title:"Vaat khabo",desc:"dupurer vaat"},{sl_no:2,title:"Digbaji diboo",desc:"ghumer moddhe"},{sl_no:3,title:"gosol korbo",desc:"vooor raaite"}]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"Rifat er kaj nai"}),Object(i.jsx)(h,{addTodo:function(e,t){console.log(e+t);var a={sl_no:0==n.length?1:n[n.length-1].sl_no+1,title:e,desc:t};console.log(a),c([].concat(Object(o.a)(n),[a]))}}),Object(i.jsx)(d,{kajx:n,onDelete:function(e){c(n.filter((function(t){return t!==e})))}}),Object(i.jsx)(u,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.101dc815.chunk.js.map