(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{4995:function(e,n,s){"use strict";s.r(n);var a=s(9008),r=s(5208),t=s(5893);n.default=function(e){var n=e.title,s=e.children,i="HunetMC";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:n?"".concat(n," - ").concat(i):i}),(0,t.jsx)("link",{rel:"icon",href:"/images/favicon.ico"})]}),(0,t.jsxs)("main",{children:[(0,t.jsx)(r.default,{}),s]})]})}},5208:function(e,n,s){"use strict";s.r(n);var a=s(2743),r=s(1959),t=s(682),i=s(7625),c=s(9398),l=(s(7294),s(1163)),u=s(5893);n.default=function(){var e,n=(0,l.useRouter)();return e=n.pathname.includes("players")?"/players":"/"===n.pathname?"/":"NULL",(0,u.jsx)(a.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,u.jsxs)(t.Z,{children:[(0,u.jsx)(a.Z.Brand,{href:"#home",children:"HunetMC"}),(0,u.jsx)(a.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,u.jsx)(a.Z.Collapse,{id:"basic-navbar-nav",children:(0,u.jsxs)(r.Z,{className:"me-auto",activeKey:e,children:[(0,u.jsxs)(r.Z.Link,{href:"/",children:[(0,u.jsx)(i.G,{icon:c.J9Y,width:20}),"\xa0 \u30db\u30fc\u30e0"]}),(0,u.jsxs)(r.Z.Link,{href:"/players",children:[(0,u.jsx)(i.G,{icon:c.wn1,width:20}),"\xa0 \u30d7\u30ec\u30a4\u30e4\u30fc\u691c\u7d22"]})]})})]})})}},5444:function(e,n,s){"use strict";s.r(n);var a=s(2503),r=s(7294),t=s(1163),i=s(1555),c=s(4051),l=s(3314),u=s(5005),h=s(682),d=s(7005),o=(s(9588),s(4995)),x=s(7625),f=s(9398),j=s(5893),p=function(e){return fetch(e).then((function(e){return e.text()}))};n.default=function(){var e=(0,a.ZP)("https://api.skura.tech/players",p),n=e.data,s=e.error,m=(0,t.useRouter)(),v=(0,r.useState)([]),Z=v[0],N=v[1];if(s)return(0,j.jsx)("p",{children:"API \u30b5\u30fc\u30d0\u30fc\u304c\u30c0\u30a6\u30f3\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002"});if(n){var g=JSON.parse(n);return(0,j.jsx)(o.default,{title:"\u30d7\u30ec\u30a4\u30e4\u30fc\u691c\u7d22",children:(0,j.jsxs)(h.Z,{style:{marginTop:"100px"},className:"mx-auto",children:[(0,j.jsx)("h1",{className:"text-center",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u691c\u7d22"}),(0,j.jsx)(l.Z,{className:"mx-auto",style:{maxWidth:"600px"},children:(0,j.jsxs)(c.Z,{className:"align-items-center",children:[(0,j.jsx)(i.Z,{className:"my-1",children:(0,j.jsx)(d.pY,{size:"lg",id:"basic-typeahead-single",labelKey:"name",onChange:N,options:g,placeholder:"\u30d7\u30ec\u30a4\u30e4\u30fc\u540d\u3092\u5165\u529b...",selected:Z,value:Z})}),(0,j.jsx)(i.Z,{xs:"auto",className:"my-1",children:(0,j.jsxs)(u.Z,{size:"lg",onClick:function(){m.push("/players/"+Z)},children:[(0,j.jsx)(x.G,{icon:f.wn1}),"\xa0\u691c\u7d22"]})})]})})]})})}return(0,j.jsx)(j.Fragment,{children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."})}},7331:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/players",function(){return s(5444)}])}},function(e){e.O(0,[774,523,413,526,59,888,179],(function(){return n=7331,e(e.s=n);var n}));var n=e.O();_N_E=n}]);