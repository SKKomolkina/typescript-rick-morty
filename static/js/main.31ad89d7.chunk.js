(this.webpackJsonp0112=this.webpackJsonp0112||[]).push([[0],{33:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var c=a(0),r=a.n(c),n=a(26),s=a.n(n),i=(a(33),a(7)),o=a.n(i),u=a(12),l=a(3),h=a(2),p=a(13),j=a.n(p),m=(a(53),a.p+"static/media/logo.e5d5c523.png"),b=(a(54),a(1)),f=function(t){var e=t.characters,a=t.setCheckedCharacter,c=t.setReturnCharacter,n=r.a.useState(""),s=Object(l.a)(n,2),i=s[0],o=s[1];return Object(b.jsx)("div",{className:"search-form",children:Object(b.jsxs)("form",{className:"search-form__form",children:[Object(b.jsxs)("select",{className:"search-from__select","aria-placeholder":"chose character!",onChange:function(t){return function(t){o(t.currentTarget.value)}(t)},children:[Object(b.jsx)("option",{children:"Select person..."}),e.map((function(t){return Object(b.jsx)("option",{children:t.name},t.id)}))]}),Object(b.jsx)("button",{className:"search-form__button",onClick:function(){return function(t){var r=e.find((function(e){return e.name===t}));console.log(r),r&&(c(r.id),a(!0))}(i)},type:"button",children:"Search"})]})})},d=(a(56),a(57),function(t){var e=t.character,a=r.a.useState(!1),c=Object(l.a)(a,2),n=c[0],s=c[1];return Object(b.jsxs)("article",{className:"character",children:[Object(b.jsx)("img",{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},className:n?"character__image character__image_hover":"character__image",src:e.image,alt:e.name}),Object(b.jsx)("h3",{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},className:"character__title",children:e.name})]},e.id)}),O=function(t){var e=t.characters;return Object(b.jsx)("section",{className:"character-list",children:e.map((function(t){return Object(b.jsx)(d,{character:t},t.id)}))})},g=function(t){var e=t.returnCharacter,a=r.a.useState(),c=Object(l.a)(a,2),n=c[0],s=c[1];function i(){return(i=Object(u.a)(o.a.mark((function t(e){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://rickandmortyapi.com/api/character/".concat(e));case 3:a=t.sent,c=a.data,s(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return r.a.useEffect((function(){!function(t){i.apply(this,arguments)}(e)}),[]),Object(b.jsx)("section",{className:"character-page",children:Object(b.jsxs)("div",{className:"character-page__item",children:[Object(b.jsx)("h2",{children:null===n||void 0===n?void 0:n.name}),Object(b.jsx)("img",{src:null===n||void 0===n?void 0:n.image,alt:null===n||void 0===n?void 0:n.name}),Object(b.jsx)("p",{children:null===n||void 0===n?void 0:n.species})]},null===n||void 0===n?void 0:n.id)})},v=(a(58),a.p+"static/media/portal.09620ccf.gif"),x=function(t){var e=t.setStartPage,a=r.a.useState(!1),c=Object(l.a)(a,2),n=c[0],s=c[1],i=Object(h.g)();return Object(b.jsx)("section",{className:"start-page",children:Object(b.jsx)("img",{onClick:function(){s(!0),setTimeout((function(){i.push("https://skkomolkina.github.io/typescript-rick-morty/main"),e(!1)}),2e3)},className:n?"start-page__portal start-page__portal-animation":"start-page__portal",alt:"Go!",src:v})})},_=function(){var t=r.a.useState(!0),e=Object(l.a)(t,2),a=e[0],c=e[1],n=r.a.useState(!1),s=Object(l.a)(n,2),i=s[0],p=s[1],d=r.a.useState(!1),v=Object(l.a)(d,2),_=v[0],k=v[1],y=r.a.useState([]),S=Object(l.a)(y,2),N=S[0],C=S[1],w=r.a.useState({}),E=Object(l.a)(w,2),M=E[0],I=E[1],J=r.a.useState(1),L=Object(l.a)(J,2),P=L[0],R=L[1],T=r.a.useState(!1),B=Object(l.a)(T,2),G=B[0],q=B[1],z=Object(h.h)();function A(){return(A=Object(u.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://rickandmortyapi.com/api/character");case 3:e=t.sent,a=e.data.results,console.log(a),C(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}r.a.useEffect((function(){"https://skkomolkina.github.io/typescript-rick-morty/homepage"===z.pathname?c(!0):c(!1),console.log(z)}),[z]),r.a.useEffect((function(){!function(){A.apply(this,arguments)}()}),[]),r.a.useEffect((function(){D()}),[]);var D=function(){window.setInterval((function(){k(!0)}),3500),window.setInterval((function(){k(!1)}),2e3)};return Object(b.jsx)("main",{className:"application",children:Object(b.jsxs)("div",{className:a?"application__wrapper_start":"application__wrapper",children:[a?"":Object(b.jsx)("div",{className:_?"application__vhs":""}),a?null:Object(b.jsx)("img",{onMouseEnter:function(){return p(!0)},onMouseOut:function(){return p(!1)},src:m,alt:m,className:i?"application__logo application__logo_hover":"application__logo"}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"https://skkomolkina.github.io/typescript-rick-morty/homepage",children:Object(b.jsx)(x,{setStartPage:c})}),Object(b.jsxs)(h.b,{path:"https://skkomolkina.github.io/typescript-rick-morty/main",children:[Object(b.jsx)(f,{characters:N,selectedCharacter:M,setSelectedCharacter:I,setReturnCharacter:R,setCheckedCharacter:q}),Object(b.jsx)(O,{characters:N}),G?Object(b.jsx)(h.a,{to:"https://skkomolkina.github.io/typescript-rick-morty/character/".concat(P.valueOf())}):null]}),Object(b.jsx)(h.b,{path:"https://skkomolkina.github.io/typescript-rick-morty/character/".concat(P.valueOf()),children:Object(b.jsx)(g,{returnCharacter:P})})]})]})})},k=a(8);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k.a,{children:Object(b.jsx)(_,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.31ad89d7.chunk.js.map