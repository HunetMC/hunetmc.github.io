(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{4995:function(e,n,r){"use strict";r.r(n);var t=r(9008),i=r(5208),u=r(5893);n.default=function(e){var n=e.title,r=e.children,a="HunetMC";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(t.default,{children:[(0,u.jsx)("title",{children:n?"".concat(n," - ").concat(a):a}),(0,u.jsx)("link",{rel:"icon",href:"/images/favicon.ico"})]}),(0,u.jsxs)("main",{children:[(0,u.jsx)(i.default,{}),r]})]})}},3310:function(e,n,r){"use strict";r.r(n);var t=r(5893);n.default=function(){return(0,t.jsx)("div",{style:{"text-align":"center"},children:(0,t.jsx)("h2",{children:"\u5165\u529b\u3055\u308c\u305f UUID \u307e\u305f\u306f\u30d7\u30ec\u30a4\u30e4\u30fc\u540d\u306b\u8a72\u5f53\u3059\u308b\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})})}},5208:function(e,n,r){"use strict";r.r(n);var t=r(2743),i=r(1959),u=r(682),a=r(7625),o=r(9398),c=(r(7294),r(1163)),s=r(5893);n.default=function(){var e,n=(0,c.useRouter)();return e=n.pathname.includes("players")?"/players":"/"===n.pathname?"/":"NULL",(0,s.jsx)(t.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(t.Z.Brand,{href:"#home",children:"HunetMC"}),(0,s.jsx)(t.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsx)(t.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsxs)(i.Z,{className:"me-auto",activeKey:e,children:[(0,s.jsxs)(i.Z.Link,{href:"/",children:[(0,s.jsx)(a.G,{icon:o.J9Y,width:20}),"\xa0 \u30db\u30fc\u30e0"]}),(0,s.jsxs)(i.Z.Link,{href:"/players",children:[(0,s.jsx)(a.G,{icon:o.wn1,width:20}),"\xa0 \u30d7\u30ec\u30a4\u30e4\u30fc\u691c\u7d22"]})]})})]})})}},3340:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return s}});var t=r(4995),i=r(1163),u=r(2503),a=r(3310),o=r(5893),c=function(e){return fetch(e).then((function(e){return e.json()}))};function s(){var e=(0,i.useRouter)(),n=e.query.ign,r=(0,u.ZP)(n?"https://api.ashcon.app/mojang/v2/user/".concat(n):null,c),s=r.data;return r.error?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.default,{title:"\u30a8\u30e9\u30fc - \u30d7\u30ec\u30a4\u30e4\u30fc\u60c5\u5831",children:(0,o.jsx)("p",{className:"text-2xl",children:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"})})}):s?s.code?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.default,{title:"404 - \u30d7\u30ec\u30a4\u30e4\u30fc\u60c5\u5831",children:(0,o.jsx)(a.default,{})})}):(e.push("/players/"+s.uuid),(0,o.jsx)("p",{children:"\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u3066\u3044\u307e\u3059..."})):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.default,{title:"\u8aad\u307f\u8fbc\u307f\u4e2d... - \u30d7\u30ec\u30a4\u30e4\u30fc\u60c5\u5831",children:(0,o.jsx)("p",{className:"text-2xl",children:"\u8aad\u307f\u8fbc\u307f\u4e2d"})})})}},9207:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lookup/[ign]",function(){return r(3340)}])},9008:function(e,n,r){e.exports=r(639)},2503:function(e,n,r){"use strict";r.d(n,{ZP:function(){return H}});var t=r(7294),i=Object.prototype.hasOwnProperty;function u(e,n,r,t){return new(r||(r=Promise))((function(i,u){function a(e){try{c(t.next(e))}catch(e){u(e)}}function o(e){try{c(t.throw(e))}catch(e){u(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,o)}c((t=t.apply(e,n||[])).next())}))}function a(e,n){var r,t,i,u,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(u){return function(o){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(i=2&u[0]?t.return:u[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,u[1])).done)return i;switch(t=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],t=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}}var o={}[0],c=function(e){return e===o},s=function(e){return"function"==typeof e},l=function(){},f=function(e,n){return Object.assign({},e,n)},d=!0,h="undefined"!=typeof window,v="undefined"!=typeof document,g=h&&window.addEventListener||l,p=v&&document.addEventListener||l,y={isOnline:function(){return d},isVisible:function(){var e=v&&document.visibilityState;return!!c(e)||"hidden"!==e}},b={initFocus:function(e){p("visibilitychange",e),g("focus",e)},initReconnect:function(e){g("online",(function(){d=!0,e()})),g("offline",(function(){d=!1}))}},w="undefined"==typeof window||"Deno"in window,x=w?null:window.requestAnimationFrame,m=x?function(e){return x(e)}:function(e){return setTimeout(e,1)},j=w?t.useEffect:t.useLayoutEffect,k="undefined"!=typeof navigator&&navigator.connection,R=!w&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),O=new WeakMap,E=0;function T(e){if(s(e))try{e=e()}catch(n){e=""}var n;return Array.isArray(e)?(n=e,e=function(e){if(!e.length)return"";for(var n="arg",r=0;r<e.length;++r){var t=e[r],i=o;null===t||"object"!=typeof t&&!s(t)?i=JSON.stringify(t):O.has(t)?i=O.get(t):(i=E,O.set(t,E++)),n+="$"+i}return n}(e)):n=[e=String(e||"")],[e,n,e?"$err$"+e:"",e?"$req$"+e:""]}var S=new WeakMap,C=function(e,n,r,t,i,u){void 0===u&&(u=!1);var a=S.get(e),o=a[0],c=a[1],s=o[n],l=c[n];if(l)for(var f=0;f<l.length;++f)l[f](r,t,i);return u&&s&&s[0]?s[0](2).then((function(){return e.get(n)})):e.get(n)},V=0,_=function(){return++V},P=function(e,n,r,t){return void 0===t&&(t=!0),u(void 0,void 0,void 0,(function(){var i,u,l,f,d,h,v,g,p,y,b;return a(this,(function(a){switch(a.label){case 0:if(i=T(n),u=i[0],l=i[2],!u)return[2];if(f=S.get(e),d=f[2],h=f[3],c(r))return[2,C(e,u,e.get(u),e.get(l),o,t)];if(p=d[u]=_(),h[u]=0,s(r))try{r=r(e.get(u))}catch(e){r=o,g=e}if(!r||!s(r.then))return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,r];case 2:return v=a.sent(),[3,4];case 3:return y=a.sent(),g=y,[3,4];case 4:if(p!==d[u]){if(g)throw g;return[2,v]}return[3,6];case 5:v=r,a.label=6;case 6:return c(v)||e.set(u,v),e.set(l,g),h[u]=_(),[4,C(e,u,v,g,o,t)];case 7:if(b=a.sent(),g)throw g;return[2,b]}}))}))};function I(e,n){for(var r in e)e[r][0]&&e[r][0](n)}function N(e,n){if(!S.has(e)){var r=f(b,n),t={},i=P.bind(o,e);return S.set(e,[t,{},{},{},{},{},i]),w||(r.initFocus(I.bind(o,t,0)),r.initReconnect(I.bind(o,t,1))),[e,i]}}var Z=N(new Map),F=Z[0],L=Z[1],D=f({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:function(e,n,r,t,i){if(y.isVisible()){var u=r.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;!c(u)&&a>u||setTimeout(t,o,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:R?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:R?5e3:3e3,compare:function e(n,r){var t,u;if(n===r)return!0;if(n&&r&&(t=n.constructor)===r.constructor){if(t===Date)return n.getTime()===r.getTime();if(t===RegExp)return n.toString()===r.toString();if(t===Array){if((u=n.length)===r.length)for(;u--&&e(n[u],r[u]););return-1===u}if(!t||"object"===typeof n){for(t in u=0,n){if(i.call(n,t)&&++u&&!i.call(r,t))return!1;if(!(t in r)||!e(n[t],r[t]))return!1}return Object.keys(r).length===u}}return n!==n&&r!==r},isPaused:function(){return!1},cache:F,mutate:L,fallback:{}},y);function M(e,n){var r=f(e,n);if(!n)return r;var t=e.use,i=e.fallback,u=n.use,a=n.fallback;return t&&u&&(r.use=t.concat(u)),i&&a&&(r.fallback=f(i,a)),r}var W=(0,t.createContext)({});function $(e){return s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var q,A=function(e,n,r){var t=n[e]||(n[e]=[]);return t.push(r),function(){var e=t.indexOf(r);e>=0&&(t[e]=t[t.length-1],t.pop())}},G={dedupe:!0},H=(Object.defineProperty((function(e){var n=e.children,r=e.value,i=M((0,t.useContext)(W),r),u=r&&r.provider,a=(0,t.useState)((function(){return u?N(u(i.cache||F),r):o}))[0];return a&&(i.cache=a[0],i.mutate=a[1]),(0,t.createElement)(W.Provider,{value:i},n)}),"default",{value:D}),q=function(e,n,r){var i=r.cache,s=r.compare,l=r.fallbackData,d=r.suspense,h=r.revalidateOnMount,v=r.refreshInterval,g=r.refreshWhenHidden,p=r.refreshWhenOffline,y=S.get(i),b=y[0],x=y[1],k=y[2],R=y[3],O=y[4],E=y[5],V=T(e),I=V[0],N=V[1],Z=V[2],F=V[3],L=(0,t.useRef)(!1),D=(0,t.useRef)(!1),M=(0,t.useRef)(I),W=(0,t.useRef)(r),$=function(){return W.current},q=i.get(I),H=c(l)?r.fallback[I]:l,U=c(q)?H:q,J=i.get(Z);if(d&&(!I||!n))throw new Error("useSWR requires either key or fetcher with suspense mode");var X=function(){return c(h)?d?!L.current&&!c(U):c(U)||r.revalidateIfStale:h},B=!(!I||!n)&&(!!i.get(F)||!L.current&&X()),K=function(e,n){var r=(0,t.useState)({})[1],i=(0,t.useRef)(e),u=(0,t.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,t.useCallback)((function(e){var t=!1,a=i.current;for(var o in e){var c=o;a[c]!==e[c]&&(a[c]=e[c],u.current[c]&&(t=!0))}t&&!n.current&&r({})}),[]);return j((function(){i.current=e})),[i,u.current,a]}({data:U,error:J,isValidating:B},D),Y=K[0],z=K[1],Q=K[2],ee=(0,t.useCallback)((function(e){return u(void 0,void 0,void 0,(function(){var t,u,l,f,d,h,v,g,p;return a(this,(function(a){switch(a.label){case 0:if(!I||!n||D.current||$().isPaused())return[2,!1];l=!0,f=e||{},d=!c(O[I])&&f.dedupe,h=function(){return!D.current&&I===M.current&&L.current},v=function(){delete O[I],delete E[I]},a.label=1;case 1:return a.trys.push([1,6,,7]),i.set(F,!0),Q({isValidating:!0}),d||C(i,I,Y.current.data,Y.current.error,!0),d?(u=E[I],[4,O[I]]):[3,3];case 2:return t=a.sent(),[3,5];case 3:return r.loadingTimeout&&!i.get(I)&&setTimeout((function(){l&&h()&&$().onLoadingSlow(I,r)}),r.loadingTimeout),E[I]=u=_(),[4,O[I]=n.apply(n,N)];case 4:t=a.sent(),setTimeout((function(){E[I]===u&&v()}),r.dedupingInterval),h()&&$().onSuccess(t,I,r),a.label=5;case 5:return E[I]!==u?[2,!1]:(i.set(Z,o),i.set(F,!1),g={isValidating:!1},!c(k[I])&&(u<=k[I]||u<=R[I]||0===R[I])?(Q(g),[2,!1]):(c(Y.current.error)||(g.error=o),s(Y.current.data,t)||(g.data=t),s(i.get(I),t)||i.set(I,t),Q(g),d||C(i,I,t,g.error,!1),[3,7]));case 6:return p=a.sent(),v(),i.set(F,!1),$().isPaused()?(Q({isValidating:!1}),[2,!1]):(i.set(Z,p),Y.current.error!==p&&(Q({isValidating:!1,error:p}),d||C(i,I,o,p,!1)),h()&&($().onError(p,I,r),r.shouldRetryOnError&&$().onErrorRetry(p,I,r,ee,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return l=!1,[2,!0]}}))}))}),[I]),ne=(0,t.useCallback)((function(e,n){return P(i,M.current,e,n)}),[]);if(j((function(){W.current=r})),j((function(){if(I){var e=L.current,n=ee.bind(o,G),r=function(){return $().isVisible()&&$().isOnline()},t=0,i=A(I,x,(function(e,n,r){Q(f({error:n,isValidating:r},s(e,Y.current.data)?null:{data:e}))})),u=A(I,b,(function(e){if(0===e){var i=Date.now();$().revalidateOnFocus&&i>t&&r()&&(t=i+$().focusThrottleInterval,n())}else if(1===e)$().revalidateOnReconnect&&r()&&n();else if(2===e)return ee()}));return D.current=!1,M.current=I,e&&Q({data:U,error:J,isValidating:B}),X()&&(c(U)||w?n():m(n)),L.current=!0,function(){D.current=!0,i(),u()}}}),[I,ee]),j((function(){var e;function n(){v&&-1!==e&&(e=setTimeout(r,v))}function r(){Y.current.error||!g&&!$().isVisible()||!p&&!$().isOnline()?n():ee(G).then((function(){return n()}))}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[v,g,p,ee]),(0,t.useDebugValue)(U),d&&c(U))throw c(J)?ee(G):J;return{mutate:ne,get data(){return z.data=!0,U},get error(){return z.error=!0,J},get isValidating(){return z.isValidating=!0,B}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=$(e),i=r[0],u=r[1],a=r[2],o=f(D,(0,t.useContext)(W)),c=M(o,a),s=q,l=c.use;if(l)for(var d=l.length;d-- >0;)s=l[d](s);return s(i,u||c.fetcher,c)})}},function(e){e.O(0,[774,523,413,526,888,179],(function(){return n=9207,e(e.s=n);var n}));var n=e.O();_N_E=n}]);