(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"69TA":function(e,t,r){"use strict";r.d(t,"a",(function(){return Z}));var n=r("VTBJ");function o(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var i="function"===typeof Symbol&&Symbol.observable||"@@observable",u=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(o(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(o(1));return r(f)(e,t)}if("function"!==typeof e)throw new Error(o(2));var u=e,s=t,p=[],l=p,d=!1;function y(){l===p&&(l=p.slice())}function b(){if(d)throw new Error(o(3));return s}function h(e){if("function"!==typeof e)throw new Error(o(4));if(d)throw new Error(o(5));var t=!0;return y(),l.push(e),function(){if(t){if(d)throw new Error(o(6));t=!1,y();var r=l.indexOf(e);l.splice(r,1),p=null}}}function w(e){if(!a(e))throw new Error(o(7));if("undefined"===typeof e.type)throw new Error(o(8));if(d)throw new Error(o(9));try{d=!0,s=u(s,e)}finally{d=!1}for(var t=p=l,r=0;r<t.length;r++){(0,t[r])()}return e}function O(e){if("function"!==typeof e)throw new Error(o(10));u=e,w({type:c.REPLACE})}function v(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(o(11));function r(){e.next&&e.next(b())}return r(),{unsubscribe:t(r)}}})[i]=function(){return this},e}return w({type:c.INIT}),(n={dispatch:w,subscribe:h,getState:b,replaceReducer:O})[i]=v,n}function s(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),i=function(){throw new Error(o(15))},u={getState:r.getState,dispatch:function(){return i.apply(void 0,arguments)}},c=t.map((function(e){return e(u)}));return i=s.apply(void 0,c)(r.dispatch),Object(n.a)(Object(n.a)({},r),{},{dispatch:i})}}}var l=r("RsHP"),d=r("68Vi"),y=r("jBg/"),b=r("MOS3"),h=r("xjeD"),w=r("PQPH"),O=r("30QO"),v=r("zlwi"),g=r("dmhV"),E=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];0,"function"===typeof e[i]&&(r[i]=e[i])}var u,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:c.INIT}))throw new Error(o(12));if("undefined"===typeof r(void 0,{type:c.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(r)}catch(f){u=f}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,i={},c=0;c<a.length;c++){var f=a[c],s=r[f],p=e[f],l=s(p,t);if("undefined"===typeof l){t&&t.type;throw new Error(o(14))}i[f]=l,n=n||l!==p}return(n=n||a.length!==Object.keys(e).length)?i:e}}({loading:l.default,ui:d.default,user:y.default,navigation:b.default,page:h.default,campaign:w.default,modal:O.default,common:v.default,wallet:g.default}),j=function(e,t){return t.type===y.LOGOUT_SUCCESS?E({ui:e.ui},t):E(e,t)},m=r("dCQc"),x=r("vJKn"),S=r.n(x),P=r("cpVT"),N=r("xvhg"),C=r("dhJC"),k=r("rg98"),I=r("q1tI"),T=r.n(I),_=r("ICkt"),A=r("52mf"),R=r("/MKj"),U=r("pDOg"),D=r("TREv"),L=r("tDFY"),B=r("wHSu"),H=r("AYAT"),J=T.a.createElement;function K(e){var t=e.onChange,r=e.onSuccess,n=(Object(R.e)((function(e){return{user:e.user}}),R.c).user,Object(I.useState)("")),o=n[0],i=n[1],u=Object(I.useState)(!1),c=u[0],a=u[1],f=function(){var e=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,r();case 3:a(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return J("div",{className:"bg-brand-light rounded-lg text-white"},J("div",{className:"text-center text-white font-medium pt-2 mb-2"},"Session Expired"),J("div",null,J(U.a,{showUsername:!1,showType:!1})),J("div",{className:"flex flex-row pb-8"},J("div",{className:"flex-1"}),J("div",{className:"flex-initial w-40 relative",style:{height:"44px"}},J("div",{className:"".concat(c&&"invisible")},J(D.a,{name:"password",type:"password",placeholder:"Enter Password",onEnter:f,onChange:function(e){i(e),t&&t({password:e})},showEye:!1,value:o})),J("div",{className:"absolute w-full h-full text-center m-auto self-center  ".concat(!c&&"invisible"),style:{bottom:"-12px"}},J("div",null,J(H.a,{type:"light"})))),J("div",{className:"flex-1 self-center ".concat(c&&"invisible")},J(L.a,{icon:B.f,onClick:f}))))}var V=T.a.createElement;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(P.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return function(n){var o=n.dispatch,i=n.getState;return function(n){return function(){var u=Object(k.a)(S.a.mark((function u(c){var a,f,s,p,l,d,b,h,w,O;return S.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if("function"!==typeof c){u.next=2;break}return u.abrupt("return",c(o,i));case 2:if(a=c.promise,f=c.types,s=Object(C.a)(c,["promise","types"]),a){u.next=5;break}return u.abrupt("return",n(c));case 5:if(p=Object(N.a)(f,3),l=p[0],d=p[1],b=p[2],n(G(G({},s),{},{type:l})),(h=i().user)&&h.access&&Object(_.a)(h.access,!0)){u.next=22;break}if(!h.refresh||!Object(_.a)(h.refresh,!0)){u.next=17;break}return u.next=12,Object(y.refresh)()({dispatch:o,getState:i}).promise(e,t,r).catch((function(e){return console.log}));case 12:return w=u.sent,u.next=15,n({type:y.REFRESH_TOKEN_SUCCESS,payload:w});case 15:u.next=22;break;case 17:if(!h||!h.user_id||c.type===y.LOGIN_REQUEST||c.type===y.LOGIN_SUCCESS||c.type===y.LOGIN_FAILURE||"email-login"===c.service){u.next=22;break}return u.next=20,new Promise((function(e,t){return o(A.a.modal.show({title:"Session Expired",content:V(K,null),successButtonText:"Login",width:"w-1/3",contentPadding:!1,showFooter:!1,onSuccess:function(){var t=Object(k.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(A.a.user.login("email",{username:h.username,password:r&&r.password}));case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),showClose:!1,showHeader:!1}))}));case 20:u.next=22;break;case 22:return(O=a(e,t,r)).then((function(e){return n(G(G({},s),{},{result:e,type:d}))}),(function(e){return n(G(G({},s),{},{error:e,type:b}))})),u.abrupt("return",O);case 25:case"end":return u.stop()}}),u)})));return function(e){return u.apply(this,arguments)}}()}}}var Q=r("hSdx");function W(e){return function(t){return function(r){if(r.type&&-1===r.type.indexOf("CLEAR_SUCCESS")&&r.type.endsWith("SUCCESS")){var n=r.type.split("/")[0],o=Object(Q.H)(r);if(o)try{setTimeout((function(){var t=o;e.dispatch(function(e,t){return{type:t+"/CLEAR_SUCCESS",payload:e}}(t,n))}),5e3)}catch(i){console.error("INVALID payload in successmiddlewre")}}return t(r)}}}function Y(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var q=Y();q.withExtraArgument=Y;var z,X=q,Z=function(e){return z||(z=$(e)),z},$=function(){var e=f(j,{},p(X,M(m.a,m.b,m.c),W));return e}},VTBJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("rePB");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=6e59967ec6eedfa12ce6a0f12e7d0c9b64459982.ad46f92ce0f208353b1c.js.map