_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[161],{"1G8C":function(e,t,a){"use strict";var n=a("gYMh"),r=a("q1tI"),l=a.n(r),s=a("hCLT"),o=l.a.createElement;t.a=function(e){return Object(n.a)(e),o("div",null,o("div",{className:"font-black text-xl m-auto text-32px lg:hidden mb-5 -mt-6 relative z-1",style:{width:"222px"}},"Get",o("span",{className:"ml-2 text-brand-base"},o(s.a,null,o("span",null,"Paid"),o("span",null,"Collabs"),o("span",null,"Products"),o("span",null,"Viral"),o("span",null,"Fame"),o("span",null,"#infloso")))))}},"7c/T":function(e,t,a){"use strict";a.r(t);var n=a("vJKn"),r=a.n(n),l=a("rg98"),s=a("q1tI"),o=a.n(s),c=a("z7pX"),i=a("cpVT"),u=o.a.createElement;function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e){var t=e.steps,a=e.onSubmit,n=(e.title,e.error),r=e.setStepCount,l=e.onChange,i=Object(s.useState)([0]),m=i[0],f=i[1],b=Object(s.useState)({}),g=b[0],p=b[1],v=function(e,n){var s=d(d({},g),e);if(p(s),l&&l(s),m.length<=t.length-1){for(var o=[],c=0;c<n;c++)o.push(c);f(o),r(o.length)}else a&&a(s)},x=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],l=d(d({},g),e);if(p(l),n)if(m.length<=t.length-1){var s=[].concat(Object(c.a)(m),[m[m.length-1]+1]);f(s),r(s.length)}else a&&a(l)},h=function(){var e=m.filter((function(e,t){return t<m.length-1}));f(e),r(e.length)},y=t[0],N=t[1],k=t[2],w=t[3];return u(o.a.Fragment,null,m&&m.map((function(e){return u("div",{key:e},0===e&&4!==m.length&&u(y,{key:1,onBack:h,onNext:x,formData:g,step:m,error:n}),1===e&&4!==m.length&&u(N,{key:2,onBack:h,onNext:x,onStep:v,formData:g,error:n}),2===e&&4!==m.length&&u(k,{key:3,onBack:h,onNext:x,formData:g,error:n}),3===e&&u(w,{key:4,onBack:h,onNext:x,formData:g,error:n}))})))}var b=a("52mf"),g=a("/MKj"),p=a("MHX4"),v=(a("ICZF"),a("6dgR")),x=a("tDFY"),h=a("FGyW"),y=o.a.createElement;function N(e){e.onBack;var t=e.onNext,a=e.step,n=e.formData,r=(e.error,Object(p.a)()),l=r.register,o=r.handleSubmit,c=(r.watch,r.errors),i=Object(s.useState)((null===n||void 0===n?void 0:n.email)||""),u=i[0],m=i[1],d=Object(g.d)();Object(s.useEffect)((function(){d(b.a.user.clearError())}),[]),Object(s.useEffect)((function(){c&&c.email&&h.b.error("Email is required")}),[c]);var f=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(u||"");return y("form",{onSubmit:o((function(e){t(e)})),className:"flex flex-col"},y("div",{className:"mb-6"},y(v.a,null,"Email"),y("div",{className:"flex "},y("input",{autoFocus:!0,name:"email",type:"email",value:u||"",onChange:function(e){m(e.target.value),t({email:e.target.value},!1)},ref:l({required:!0}),className:"relative border-b-2 text-md ".concat(c.email?"border-red-500":"border-gray-300 focus:border-brand-base"," w-full outline-none mt-2")}))),y("div",{className:"w-full ".concat(a.length>1?"hidden":"")},y(x.a,{buttonType:"submit",disabled:!f,className:"w-full"},"Get Started")))}var k=a("IP2g"),w=o.a.createElement;function O(e){e.onBack,e.onNext;var t=e.onStep,a=e.formData,n=Object(s.useState)((null===a||void 0===a?void 0:a.type)||""),r=n[0],l=n[1],c=Object(g.d)();Object(s.useEffect)((function(){c(b.a.user.clearError())}),[]);var i=function(e){l(e),t({type:e},3)},u={textShadow:"0px 4px 4px rgb(0 0 0 / 25%)"};return w(o.a.Fragment,null,w(v.a,null,"Tell us who you are"),w("div",{className:"flex flex-row gap-3 mb-4"},w("div",{className:"text-center cursor-pointer transform duration-75 hover:scale-110",onClick:function(){return i("influencer")}},w("img",{src:"/images/illustration/influencer".concat("influencer"===r?"_hover":"",".svg"),alt:"social media marketing",className:"mx-auto",onMouseOver:function(e){return e.currentTarget.src="/images/illustration/influencer_hover.svg"},onMouseOut:function(e){return e.currentTarget.src="/images/illustration/influencer".concat("influencer"===r?"_hover":"",".svg")}}),w(v.a,{weight:"semibold",style:"influencer"===r?u:{}},"Influencer")),w("div",{className:"text-center cursor-pointer transform duration-75 hover:scale-110",onClick:function(){return i("brand")}},w("img",{src:"/images/illustration/brand".concat("brand"===r?"_hover":"",".svg"),alt:"social media marketing",className:"mx-auto",onMouseOver:function(e){return e.currentTarget.src="/images/illustration/brand_hover.svg"},onMouseOut:function(e){return e.currentTarget.src="/images/illustration/brand".concat("brand"===r?"_hover":"",".svg")}}),w(v.a,{weight:"semibold",style:"brand"===r?u:{}},"Brand")),w("div",{className:"text-center cursor-pointer transform duration-75 hover:scale-110",onClick:function(){return i("agency")}},w("img",{src:"/images/illustration/agency".concat("agency"===r?"_hover":"",".svg"),alt:"social media marketing",className:"mx-auto",onMouseOver:function(e){return e.currentTarget.src="/images/illustration/agency_hover.svg"},onMouseOut:function(e){return e.currentTarget.src="/images/illustration/agency".concat("agency"===r?"_hover":"",".svg")}}),w(v.a,{weight:"semibold",style:"agency"===r?u:{}},"Agency"))))}var j=o.a.createElement;function E(e){e.onBack;var t=e.onNext,a=e.formData,n=Object(p.a)(),r=n.register,l=n.handleSubmit,o=(n.watch,n.errors),c=Object(s.useState)((null===a||void 0===a?void 0:a.name)||""),i=c[0],u=c[1],m=Object(g.d)();Object(s.useEffect)((function(){m(b.a.user.clearError())}),[]),Object(s.useEffect)((function(){o&&o.name&&h.b.error("Name is required")}),[o]);var d={influencer:"What's your name?",brand:"What's your brand name?",agency:"What's your agency name?"}[a.type],f=i&&i.length>0;return j("form",{onSubmit:l((function(e){t(e)})),className:"flex flex-col text-sm mb-4"},j("div",{className:"text-gray-700 mb-6"},j(v.a,null,d),j("div",{className:"flex"},j("input",{autoFocus:!0,name:"name",type:"text",value:i||"",onChange:function(e){u(e.target.value)},ref:r({required:!0}),className:"relative border-b-2 w-full text-md outline-none ".concat(o&&o.name?"border-red-500":"border-gray-300 focus:border-brand-base")}))),j("div",{className:"w-full"},j("div",{className:"p-2 pt-0 pb-2 -mt-5 text-right"},j("span",null,j("a",{className:"link"},j("span",{className:"text-secondary text-xs"},"\xa0"))))),j("div",{className:"w-full"},j(x.a,{buttonType:"submit",disabled:!f,className:"w-full"},"Continue")))}var C=a("wHSu"),_=a("tmuj"),S=a("hSdx"),F=o.a.createElement;function T(e){var t=Object(g.e)((function(e){return{user:e.user}}),g.c).user,a=e.onBack,n=e.onNext,r=e.formData,l=(e.error,Object(p.a)()),c=l.register,i=l.handleSubmit,u=(l.watch,l.errors),m=Object(s.useState)(),d=m[0],f=m[1],v=Object(s.useState)(!0),y=v[0],N=v[1],w=t.loading&&(t.loading.indexOf("register")>-1||t.loading.indexOf("email-login")>-1),O=Object(g.d)();Object(s.useEffect)((function(){O(b.a.user.clearError())}),[]),Object(s.useEffect)((function(){u&&u.password&&h.b.error("Password is required")}),[u]);var j=[{label:"1 lowercase character",validation:S.n},{label:"1 special character",validation:S.p},{label:"1 uppercase character",validation:S.q},{label:"8 characters minimum",validation:S.K},{label:"1 number",validation:S.o}],E=j.map((function(e,t){return e.validation(d||"")})).filter((function(e){return!0===e})).length===j.length;C.p,C.Db,C.Rb;return F(o.a.Fragment,null,F("div",{className:"flex gap-4 mb-4"},F("div",{className:"flex-initial w-28"},F("div",{className:"text-center cursor-pointer"},F("img",{src:"/images/illustration/".concat(r.type,"_hover.svg"),alt:r.type,className:"mx-auto"}))),F("div",{className:"flex-1 text-md text-black"},F("div",{className:"mt-2"},F("p",null,r.name)),F("div",{className:"mt-2"},F("p",null,r.email)))),F("form",{onSubmit:i((function(e){n({password:d})})),className:"flex flex-col text-sm mb-4"},F("div",{className:"w-full mb-3"},F(_.a,{name:"Password",label:"Password",onChange:function(e){f(e.target.value)},value:d||"",className:"border-gray-300 border-b-2 focus:border-b-2 text-gray-800 w-full md:text-lg outline-none focus:border-b-2 focus:border-brand-base",classLabel:"text-sm text-gray-700 mb-4 font-bold"}),F("div",{className:"grid grid-flow-row grid-cols-2"},j.map((function(e,t){var a=e.validation(d||"");return F("div",{key:t,className:"".concat(a?"text-gray-900":"text-gray-600"," text-xs")},F(k.a,{icon:C.D,color:a?"green":"gray",size:"xs",className:"mt-4 mr-1 opacity-75"}),F("span",null,e.label))})))),F("div",{className:"w-full mb-4"},F("div",{className:"inline-block"},F("div",{className:"mt-0"},F("label",{className:"inline-flex items-center text-md"},F("input",{name:"terms",ref:c(),type:"checkbox",className:"form-checkbox",checked:y,onChange:function(){return N(!y)}}),F("div",{className:"ltr:ml-2 rtl:mr-2 text-md text-black"},"I agree to the",F("br",{className:"md:hidden"}),F("a",{target:"_blank",href:"/terms-of-service",className:"link mr-1 md:mx-1"},"Terms of service"),"and",F("a",{target:"_blank",href:"privacy-policy",className:"link mx-1"},"Privacy policy")))))),F("div",{className:"w-full flex flex-row gap-2"},F("div",{className:"w-5/12 mr-1"},F(x.a,{type:"secondary",onClick:function(){return a()},className:"w-full"},"Back")),F("div",{className:"w-full sm:w-10/12 mb-4"},F(x.a,{disabled:!y||!E,loading:w,className:"w-full"},"Create an Account")))))}var P=a("YFqc"),I=a.n(P),D=a("ICkt"),q=a("NM33"),M=a("ATCD"),L=a("q6M+"),B=a("g4pe"),A=a.n(B),G=a("1G8C"),z=(a("jDDT"),o.a.createElement),H={register:b.a.user.register,login:b.a.user.login,getUser:b.a.user.getUser,setNav:b.a.navigation.set};t.default=Object(g.b)((function(e){return{error:e.user.error}}),H)((function(e){var t=e.register,a=e.login,n=e.getUser,c=e.setNav,i=e.error,u=Object(s.useState)(0),m=u[0],d=u[1],p=Object(s.useState)({}),v=p[0],x=p[1],y=[N,O,E,T],k=Object(g.e)((function(e){return{ui:e.ui}}),g.c).ui,w=Object(g.d)();Object(s.useEffect)((function(){w(b.a.user.clearError())}),[]),Object(s.useEffect)((function(){i&&h.b.error(i)}),[i]);var j=function(){var e=Object(l.a)(r.a.mark((function e(l){var s,o,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(l);case 3:if(!(s=e.sent).created_date){e.next=19;break}return e.next=7,a("email",l);case 7:if(!(o=e.sent)){e.next=17;break}return i=Object(D.b)(o.access),e.next=12,n(null,i);case 12:if(!(u=e.sent)||!u.type&&!u.usertype){e.next=17;break}return e.next=16,c(u.type||u.usertype);case 16:e.sent;case 17:e.next=20;break;case 19:s.status;case 20:e.next=24;break;case 22:e.prev=22,e.t0=e.catch(0);case 24:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),C=[z("div",{key:0},"Build a community,",z("br",null),"reach your audience."),z("div",{key:1},"Build a community,",z("br",null),"reach your audience."),z("div",{key:2},"Build a community,",z("br",null),"reach your audience."),"brand"===v.type?z("div",null,"Make your brand viral,",z("br",null),"get people talking."):"agency"===v.type?z("div",null,"Grow your agency,",z("br",null),"at zero cost"):"influencer"===v.type?z("div",null,"Get famous,",z("br",null),"grow your influence"):"","brand"===v.type||"agency"===v.type?z("div",null,"Maximum results,",z("br",null),"minimum spending."):z("div",null,"Paid Collabs,",z("br",null),"Free Products")];return z("div",{className:"bg-white h-screen"},z(A.a,null,z("title",null,"Create an Account - ",k.name),z("meta",{name:"description",content:k.description}),z("link",{rel:"icon",href:k.icon||k.logo})),z("div",{className:"text-blacks"},z(h.a,{position:"top-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})),z("div",{className:"flex justify-center items-center md:h-screen flex-col"},z("div",{className:"w-full relative bg-white md:bg-transparent py-2 lg:hidden"},z(M.a,{hideName:!1})),z("div",{className:"flex w-4/5 max-w-screen-lg mb-6 sm:shadow-custom sm:rounded-10px sm:border-1 border-gray-300"},z(L.a,{img:["signup.png","signup.png","who_are_you.svg","who_are_you.svg","create_account.svg"][m],title:C[m]}),z("div",{className:"flex flex-col bg-white w-full lg:w-6/12 sm:px-10 lg:px-16 sm:py-10 lg:py-7 sm:rounded-l-10px lg:rounded-l-none sm:rounded-r-10px"},z(G.a,null),z("p",{className:"font-poppins font-bold text-xl sm:text-2xl md:text-2.5xl mb-2 lg:text-center"},"Create your Free Account"),z("div",{className:"-mt-6"},"\xa0"),z("div",{className:"flex-1 max-w-80"},z("div",{className:"mb-4 mt-6"},z(f,{steps:y,onSubmit:j,error:i,setStepCount:d,onChange:x})),0===m&&z(o.a.Fragment,null,z("div",{className:"flex mb-6 mt-6"},z("p",{className:"w-2/5 border-b-2 self-center"}),z("p",{className:"w-1/5 text-center text-gray-600"},"OR"),z("p",{className:"w-2/5 border-b-2 self-center"})),z("div",{className:"mb-6"},z(q.a,null)))),z(o.a.Fragment,null,z("div",{className:"text-center pt-4 pb-4"},z("p",{className:"text-black text-md"},"Already have an account?",z("span",{className:"ml-2 text-brand-base"},z(I.a,{href:"/login"},"Log In"))))))),z("div",{className:"ltr:ml-2 rtl:mr-2 text-md text-brand-base"},z("a",{target:"_blank",href:"/terms-of-service",className:"link"},"Terms of service"),z("a",{target:"_blank",href:"privacy-policy",className:"link ml-4"},"Privacy policy"))))}))},ATCD:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("/MKj"),s=a("YFqc"),o=a.n(s),c=r.a.createElement;t.a=function(e){var t=Object(l.e)((function(e){return{name:e.ui.name,logo:e.ui.logo}}),l.c),a=t.name,n=t.logo;return c("div",{className:"logo flex flex-row items-center font-bold text-lg tracking-wider justify-center"},c(o.a,{href:"/"},c("a",{className:"flex flex-row items-center justify-start children-x-1"},c("img",{src:n||"/64x64.png",alt:"image",className:"h-32 rounded"}),!e.hideName&&c("span",{className:"ml-2 hidden lg:block"},a))))}},ICZF:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),l=(a("IP2g"),a("AYAT")),s=r.a.createElement;function o(e){var t=e.label,a=e.disabled,n=e.onClick,r=e.isLoading;return s("button",{type:"submit",className:"btn btn-default h-50px font-bold btn-block rounded-10px bg-brand-base text-gray-100 transition duration-500 ".concat(a||r?"opacity-50":"cursor-pointer"),disabled:a||r,onClick:a||r?function(){}:n},r?s(l.a,{type:"light"}):t)}},Ihil:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return a("7c/T")}])},NM33:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("vJKn"),r=a.n(n),l=a("rg98"),s=a("q1tI"),o=a.n(s),c=a("/MKj"),i=a("52mf"),u=a("IP2g"),m=a("wHSu"),d=a("jBg/"),f=a("ICkt"),b=a("GuSe"),g=o.a.createElement;function p(e){var t=Object(c.e)((function(e){return{facebook:e.ui.social.facebook,user:e.user}}),c.c),a=t.facebook,n=t.user,s=n.loading&&n.loading.indexOf("facebook-login")>-1,d=Object(c.d)(),p=function(){var t=Object(l.a)(r.a.mark((function t(){var n,l,s,o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(a);case 2:if(n=t.sent,!(l=n&&n.authResponse&&n.authResponse.accessToken)){t.next=23;break}return e.onLogin&&e.onLogin(n),t.next=8,d(i.a.user.facebookLogin(l));case 8:if(!(s=t.sent)||!s.access_token){t.next=20;break}return o=Object(f.b)(s.access_token),t.next=13,d(i.a.user.getUser(null,o));case 13:if(!(c=t.sent).usertype){t.next=18;break}return t.next=17,d(i.a.navigation.set(c.usertype));case 17:t.sent;case 18:t.next=21;break;case 20:d(i.a.user.showError("Could not complete Login"));case 21:t.next=25;break;case 23:d(i.a.user.showError("Could not complete Login")),e.onFailure&&e.onFailure(n);case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return g(o.a.Fragment,null,g("button",{onClick:p,className:"w-full btn btn-default btn-flatx border-1 border-black rounded-20px btn-icon btn-outlined-facebook transition duration-500 text-black hover:bg-gray-100",style:{fontWeight:"600"}},g("img",{src:"/logos/facebook2.svg",className:"w-5 mr-2 float-left"}),g("span",{className:"mr-2"},"Continue with Facebook"),s?g(u.a,{icon:m.E,spin:!0}):""))}var v=o.a.createElement;function x(e){var t=Object(c.e)((function(e){return{google:e.ui.social.google,user:e.user}}),c.c),a=t.google,n=t.user,s=Object(c.d)(),o=n.loading&&n.loading.indexOf("google-login")>-1,g=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.d)(a);case 3:return t=e.sent,e.next=6,p(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(i.a.user.showError(e.t0.details));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var t=Object(l.a)(r.a.mark((function t(a){var n,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s(Object(d.clearError)()),!a){t.next=23;break}if(e.onLogin&&e.onLogin(a),!a.accessToken){t.next=20;break}return t.next=6,s(i.a.user.googleLogin(a.accessToken));case 6:if(!(n=t.sent)||!n.access_token){t.next=18;break}return l=Object(f.b)(n.access_token),t.next=11,s(i.a.user.getUser(null,l));case 11:if(!(o=t.sent).usertype){t.next=16;break}return t.next=15,s(i.a.navigation.set(o.usertype));case 15:t.sent;case 16:t.next=18;break;case 18:t.next=21;break;case 20:a&&"popup_closed_by_user"!==a.error||s(i.a.user.showError("Could not complete Login"));case 21:t.next=25;break;case 23:s(i.a.user.showError("Could not complete Login")),e.onFailure&&e.onFailure(a);case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return v("button",{onClick:g,className:"w-full btn btn-default btn-flazt border-1 border-black rounded-20px btn-icon transition duration-500 btn-outlined-google text-black hover:bg-gray-100",style:{fontWeight:"600"}},v("img",{src:"/logos/google.svg",className:"w-5 mr-2"}),v("span",{className:"mr-2"},"Continue with Google"),o?v(u.a,{icon:m.E,spin:!0}):"")}var h=o.a.createElement;function y(e){return h("div",{className:"flex w-full flex-col gap-y-6"},h("div",{className:"flex-1"},h(x,null)),h("div",{className:"flex-1 mt-1"},h(p,null)))}},"q6M+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("/MKj"),s=a("YFqc"),o=a.n(s),c=r.a.createElement;t.a=function(e){var t=e.children,a=e.img,n=void 0===a?"login.svg":a,r=e.title,s=void 0===r?"Infloso":r,i=Object(l.e)((function(e){return{ui:e.ui}}),l.c).ui;return c("div",{className:"w-6/12 h-full hidden flex items-center justify-center flex-col lg:block md:rounded-l-10px",style:{backgroundColor:"#FAFAFB"}},c("div",{className:"flexz justify-between w-full mx-auto pt-4 px-8"},c("div",{className:"flex flex-row"},c("div",{className:"flex-1"}),c(o.a,{href:"/"},c("a",{href:"/"},c("img",{src:i.logo,alt:"logo",className:"w-20 cursor-pointer"}))),c("div",{className:"flex-1"})),i.social_login&&c("div",null,t)),c("div",{className:"py-10 px-20 mx-auto w-full",style:{minHeight:"280px"}},c("img",{src:"/images/illustration/".concat(n),alt:"social media marketing",className:"mx-auto"})),c("div",{className:"text-center font-bold text-28px mb-10"},c("div",{style:{width:"335px",margin:"auto",lineHeight:"38px"}},s)))}},tmuj:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("wHSu"),s=a("IP2g"),o=r.a.createElement;function c(e){var t=e.label,a=e.value,r=e.onChange,c=e.name,i=e.autocomplete,u=Object(n.useState)(l.S),m=u[0],d=u[1];return o("label",{className:"block relative"},t&&o("span",{className:e.classLabel?"".concat(e.classLabel):"text-default font-bold"},t),o("input",{autoFocus:!0,ref:function(e){return e&&e.focus()},name:c,autoComplete:i,type:m===l.S?"password":"text",value:a||"",onChange:r||function(){},className:e.className?"".concat(e.className):"form-input mt-1 text-xs block w-full bg-white pr-8 transition duration-500 rounded-full"}),o("div",{className:"absolute mb-2 mr-2 cursor-pointer text-gray-500",style:{right:"7px",bottom:"2px"},onClick:function(){m===l.R?d(l.S):d(l.R)}},o(s.a,{icon:m})))}}},[["Ihil",0,1,9,12,13,2,3,4,5,6,7,8,10,11,14,25,34]]]);
//# sourceMappingURL=register-e3372e8d3023252b7b27.js.map