(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{2167:function(e,r,t){"use strict";var n=t(3848);r.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(1063),u=t(4651),c=t(7426);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var l=function(e){var r,t=!1!==e.prefetch,a=u.useRouter(),l=o.default.useMemo((function(){var r=i.resolveHref(a,e.href,!0),t=n(r,2),o=t[0],u=t[1];return{href:o,as:e.as?i.resolveHref(a,e.as):u||o}}),[a,e.href,e.as]),d=l.href,v=l.as,p=e.children,h=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var m=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,w=c.useIntersection({rootMargin:"200px"}),k=n(w,2),R=k[0],E=k[1],x=o.default.useCallback((function(e){R(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,R]);o.default.useEffect((function(){var e=E&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:a&&a.locale,n=s[d+"%"+v+(r?"%"+r:"")];e&&!n&&f(a,d,v,{locale:r})}),[v,d,E,b,t,a]);var C={ref:x,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:u}))}(e,a,d,v,h,g,y,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),f(a,d,v,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof b?b:a&&a.locale,I=a&&a.isLocaleDomain&&i.getDomainLocale(v,O,a&&a.locales,a&&a.domainLocales);C.href=I||i.addBasePath(i.addLocale(v,O,a&&a.defaultLocale))}return o.default.cloneElement(r,C)};r.default=l},7426:function(e,r,t){"use strict";var n=t(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,c=a.useRef(),s=a.useState(!1),f=n(s,2),l=f[0],d=f[1],v=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||l||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=u.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,i=n.elements;return i.set(e,r),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,l]);return a.useEffect((function(){if(!i&&!l){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[l]),[v,l]};var a=t(7294),o=t(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},1664:function(e,r,t){e.exports=t(2167)},720:function(e,r,t){"use strict";t.d(r,{Z:function(){return C}});var n=t(4184),a=t.n(n),o=t(7294),i=t(600),u=t(4680),c=t(5893),s=e=>o.forwardRef(((r,t)=>(0,c.jsx)("div",{...r,ref:t,className:a()(r.className,e)})));const f=o.forwardRef((({bsPrefix:e,className:r,variant:t,as:n="img",...o},u)=>{const s=(0,i.vE)(e,"card-img");return(0,c.jsx)(n,{ref:u,className:a()(t?`${s}-${t}`:s,r),...o})}));f.displayName="CardImg";var l=f,d=t(9059);const v=o.forwardRef((({bsPrefix:e,className:r,as:t="div",...n},u)=>{const s=(0,i.vE)(e,"card-header"),f=(0,o.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,c.jsx)(d.Z.Provider,{value:f,children:(0,c.jsx)(t,{ref:u,...n,className:a()(r,s)})})}));v.displayName="CardHeader";var p=v;const h=s("h5"),g=s("h6"),y=(0,u.Z)("card-body"),b=(0,u.Z)("card-title",{Component:h}),m=(0,u.Z)("card-subtitle",{Component:g}),w=(0,u.Z)("card-link",{Component:"a"}),k=(0,u.Z)("card-text",{Component:"p"}),R=(0,u.Z)("card-footer"),E=(0,u.Z)("card-img-overlay"),x=o.forwardRef((({bsPrefix:e,className:r,bg:t,text:n,border:o,body:u,children:s,as:f="div",...l},d)=>{const v=(0,i.vE)(e,"card");return(0,c.jsx)(f,{ref:d,...l,className:a()(r,v,t&&`bg-${t}`,n&&`text-${n}`,o&&`border-${o}`),children:u?(0,c.jsx)(y,{children:s}):s})}));x.displayName="Card",x.defaultProps={body:!1};var C=Object.assign(x,{Img:l,Title:b,Subtitle:m,Body:y,Link:w,Text:k,Header:p,Footer:R,ImgOverlay:E})},2503:function(e,r,t){"use strict";t.d(r,{ZP:function(){return K}});var n=t(7294),a=Object.prototype.hasOwnProperty;function o(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}c((n=n.apply(e,r||[])).next())}))}function i(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var u={}[0],c=function(e){return e===u},s=function(e){return"function"==typeof e},f=function(){},l=function(e,r){return Object.assign({},e,r)},d=!0,v="undefined"!=typeof window,p="undefined"!=typeof document,h=v&&window.addEventListener||f,g=p&&document.addEventListener||f,y={isOnline:function(){return d},isVisible:function(){var e=p&&document.visibilityState;return!!c(e)||"hidden"!==e}},b={initFocus:function(e){g("visibilitychange",e),h("focus",e)},initReconnect:function(e){h("online",(function(){d=!0,e()})),h("offline",(function(){d=!1}))}},m="undefined"==typeof window||"Deno"in window,w=m?null:window.requestAnimationFrame,k=w?function(e){return w(e)}:function(e){return setTimeout(e,1)},R=m?n.useEffect:n.useLayoutEffect,E="undefined"!=typeof navigator&&navigator.connection,x=!m&&E&&(["slow-2g","2g"].includes(E.effectiveType)||E.saveData),C=new WeakMap,O=0;function I(e){if(s(e))try{e=e()}catch(r){e=""}var r;return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",t=0;t<e.length;++t){var n=e[t],a=u;null===n||"object"!=typeof n&&!s(n)?a=JSON.stringify(n):C.has(n)?a=C.get(n):(a=O,C.set(n,O++)),r+="$"+a}return r}(e)):r=[e=String(e||"")],[e,r,e?"$err$"+e:"",e?"$req$"+e:""]}var L=new WeakMap,T=function(e,r,t,n,a,o){void 0===o&&(o=!1);var i=L.get(e),u=i[0],c=i[1],s=u[r],f=c[r];if(f)for(var l=0;l<f.length;++l)f[l](t,n,a);return o&&s&&s[0]?s[0](2).then((function(){return e.get(r)})):e.get(r)},M=0,S=function(){return++M},P=function(e,r,t,n){return void 0===n&&(n=!0),o(void 0,void 0,void 0,(function(){var a,o,f,l,d,v,p,h,g,y,b;return i(this,(function(i){switch(i.label){case 0:if(a=I(r),o=a[0],f=a[2],!o)return[2];if(l=L.get(e),d=l[2],v=l[3],c(t))return[2,T(e,o,e.get(o),e.get(f),u,n)];if(g=d[o]=S(),v[o]=0,s(t))try{t=t(e.get(o))}catch(e){t=u,h=e}if(!t||!s(t.then))return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t];case 2:return p=i.sent(),[3,4];case 3:return y=i.sent(),h=y,[3,4];case 4:if(g!==d[o]){if(h)throw h;return[2,p]}return[3,6];case 5:p=t,i.label=6;case 6:return c(p)||e.set(o,p),e.set(f,h),v[o]=S(),[4,T(e,o,p,h,u,n)];case 7:if(b=i.sent(),h)throw h;return[2,b]}}))}))};function j(e,r){for(var t in e)e[t][0]&&e[t][0](r)}function N(e,r){if(!L.has(e)){var t=l(b,r),n={},a=P.bind(u,e);return L.set(e,[n,{},{},{},{},{},a]),m||(t.initFocus(j.bind(u,n,0)),t.initReconnect(j.bind(u,n,1))),[e,a]}}var V=N(new Map),Z=V[0],$=V[1],D=l({onLoadingSlow:f,onSuccess:f,onError:f,onErrorRetry:function(e,r,t,n,a){if(y.isVisible()){var o=t.errorRetryCount,i=a.retryCount,u=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;!c(o)&&i>o||setTimeout(n,u,a)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:function e(r,t){var n,o;if(r===t)return!0;if(r&&t&&(n=r.constructor)===t.constructor){if(n===Date)return r.getTime()===t.getTime();if(n===RegExp)return r.toString()===t.toString();if(n===Array){if((o=r.length)===t.length)for(;o--&&e(r[o],t[o]););return-1===o}if(!n||"object"===typeof r){for(n in o=0,r){if(a.call(r,n)&&++o&&!a.call(t,n))return!1;if(!(n in t)||!e(r[n],t[n]))return!1}return Object.keys(t).length===o}}return r!==r&&t!==t},isPaused:function(){return!1},cache:Z,mutate:$,fallback:{}},y);function _(e,r){var t=l(e,r);if(!r)return t;var n=e.use,a=e.fallback,o=r.use,i=r.fallback;return n&&o&&(t.use=n.concat(o)),a&&i&&(t.fallback=l(a,i)),t}var H=(0,n.createContext)({});function F(e){return s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var A,W=function(e,r,t){var n=r[e]||(r[e]=[]);return n.push(t),function(){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.pop())}},q={dedupe:!0},K=(Object.defineProperty((function(e){var r=e.children,t=e.value,a=_((0,n.useContext)(H),t),o=t&&t.provider,i=(0,n.useState)((function(){return o?N(o(a.cache||Z),t):u}))[0];return i&&(a.cache=i[0],a.mutate=i[1]),(0,n.createElement)(H.Provider,{value:a},r)}),"default",{value:D}),A=function(e,r,t){var a=t.cache,s=t.compare,f=t.fallbackData,d=t.suspense,v=t.revalidateOnMount,p=t.refreshInterval,h=t.refreshWhenHidden,g=t.refreshWhenOffline,y=L.get(a),b=y[0],w=y[1],E=y[2],x=y[3],C=y[4],O=y[5],M=I(e),j=M[0],N=M[1],V=M[2],Z=M[3],$=(0,n.useRef)(!1),D=(0,n.useRef)(!1),_=(0,n.useRef)(j),H=(0,n.useRef)(t),F=function(){return H.current},A=a.get(j),K=c(f)?t.fallback[j]:f,U=c(A)?K:A,B=a.get(V);if(d&&(!j||!r))throw new Error("useSWR requires either key or fetcher with suspense mode");var z=function(){return c(v)?d?!$.current&&!c(U):c(U)||t.revalidateIfStale:v},G=!(!j||!r)&&(!!a.get(Z)||!$.current&&z()),J=function(e,r){var t=(0,n.useState)({})[1],a=(0,n.useRef)(e),o=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,n.useCallback)((function(e){var n=!1,i=a.current;for(var u in e){var c=u;i[c]!==e[c]&&(i[c]=e[c],o.current[c]&&(n=!0))}n&&!r.current&&t({})}),[]);return R((function(){a.current=e})),[a,o.current,i]}({data:U,error:B,isValidating:G},D),Q=J[0],X=J[1],Y=J[2],ee=(0,n.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var n,o,f,l,d,v,p,h,g;return i(this,(function(i){switch(i.label){case 0:if(!j||!r||D.current||F().isPaused())return[2,!1];f=!0,l=e||{},d=!c(C[j])&&l.dedupe,v=function(){return!D.current&&j===_.current&&$.current},p=function(){delete C[j],delete O[j]},i.label=1;case 1:return i.trys.push([1,6,,7]),a.set(Z,!0),Y({isValidating:!0}),d||T(a,j,Q.current.data,Q.current.error,!0),d?(o=O[j],[4,C[j]]):[3,3];case 2:return n=i.sent(),[3,5];case 3:return t.loadingTimeout&&!a.get(j)&&setTimeout((function(){f&&v()&&F().onLoadingSlow(j,t)}),t.loadingTimeout),O[j]=o=S(),[4,C[j]=r.apply(r,N)];case 4:n=i.sent(),setTimeout((function(){O[j]===o&&p()}),t.dedupingInterval),v()&&F().onSuccess(n,j,t),i.label=5;case 5:return O[j]!==o?[2,!1]:(a.set(V,u),a.set(Z,!1),h={isValidating:!1},!c(E[j])&&(o<=E[j]||o<=x[j]||0===x[j])?(Y(h),[2,!1]):(c(Q.current.error)||(h.error=u),s(Q.current.data,n)||(h.data=n),s(a.get(j),n)||a.set(j,n),Y(h),d||T(a,j,n,h.error,!1),[3,7]));case 6:return g=i.sent(),p(),a.set(Z,!1),F().isPaused()?(Y({isValidating:!1}),[2,!1]):(a.set(V,g),Q.current.error!==g&&(Y({isValidating:!1,error:g}),d||T(a,j,u,g,!1)),v()&&(F().onError(g,j,t),t.shouldRetryOnError&&F().onErrorRetry(g,j,t,ee,{retryCount:(l.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return f=!1,[2,!0]}}))}))}),[j]),re=(0,n.useCallback)((function(e,r){return P(a,_.current,e,r)}),[]);if(R((function(){H.current=t})),R((function(){if(j){var e=$.current,r=ee.bind(u,q),t=function(){return F().isVisible()&&F().isOnline()},n=0,a=W(j,w,(function(e,r,t){Y(l({error:r,isValidating:t},s(e,Q.current.data)?null:{data:e}))})),o=W(j,b,(function(e){if(0===e){var a=Date.now();F().revalidateOnFocus&&a>n&&t()&&(n=a+F().focusThrottleInterval,r())}else if(1===e)F().revalidateOnReconnect&&t()&&r();else if(2===e)return ee()}));return D.current=!1,_.current=j,e&&Y({data:U,error:B,isValidating:G}),z()&&(c(U)||m?r():k(r)),$.current=!0,function(){D.current=!0,a(),o()}}}),[j,ee]),R((function(){var e;function r(){p&&-1!==e&&(e=setTimeout(t,p))}function t(){Q.current.error||!h&&!F().isVisible()||!g&&!F().isOnline()?r():ee(q).then((function(){return r()}))}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[p,h,g,ee]),(0,n.useDebugValue)(U),d&&c(U))throw c(B)?ee(q):B;return{mutate:re,get data(){return X.data=!0,U},get error(){return X.error=!0,B},get isValidating(){return X.isValidating=!0,G}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=F(e),a=t[0],o=t[1],i=t[2],u=l(D,(0,n.useContext)(H)),c=_(u,i),s=A,f=c.use;if(f)for(var d=f.length;d-- >0;)s=f[d](s);return s(a,o||c.fetcher,c)})}}]);