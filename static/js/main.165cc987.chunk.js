(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(5),a=c.n(n),i=c(7),s=c(2),b=c(4),d=c(1),r=(c(12),c(13),c(14),c(6)),o=c.n(r),l=c(0),j=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=(0,t.getCurrentTab)(c);return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:o()({"is-active":t.id===c}),"data-cy":"Tab",children:Object(l.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){t.id!==c&&n(t.id)},children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=u.reduce((function(t,e){return Object(b.a)(Object(b.a)({},t),{},Object(s.a)({},e.id,e))}),{}),x=function(){var t=function(t){return O[t]||null},e=Object(d.useState)(u[0].id),c=Object(i.a)(e,2),n=c[0],a=c[1],s=t(n);return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(s.title)}),Object(l.jsx)(j,{tabs:u,selectedTabId:n,onTabSelected:function(t){return a(t)},getCurrentTab:t})]})};a.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.165cc987.chunk.js.map