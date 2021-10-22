<<<<<<< HEAD
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).importor=r()}(this,(function(){"use strict";function t(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function c(r){t(a,o,i,c,u,"next",r)}function u(r){t(a,o,i,c,u,"throw",r)}c(void 0)}))}}function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,r,e){return r&&n(t.prototype,r),e&&n(t,e),t}function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c={exports:{}};!function(t){var r=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?y:p,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function g(){}function b(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,A=w&&w(w(j([])));A&&A!==e&&n.call(A,i)&&(m=A);var x=b.prototype=v.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function R(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:r,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new S(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),R(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;R(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(c);var u=c.exports,f=function(t){return t&&t.Math==Math&&t},s=f("object"==typeof globalThis&&globalThis)||f("object"==typeof window&&window)||f("object"==typeof self&&self)||f("object"==typeof a&&a)||function(){return this}()||Function("return this")(),l={},p=function(t){try{return!!t()}catch(t){return!0}},h=!p((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),y={},d={}.propertyIsEnumerable,v=Object.getOwnPropertyDescriptor,g=v&&!d.call({1:2},1);y.f=g?function(t){var r=v(this,t);return!!r&&r.enumerable}:d;var b,m,w=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},A={}.toString,x=function(t){return A.call(t).slice(8,-1)},O=x,S="".split,E=p((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?S.call(t,""):Object(t)}:Object,T=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},R=E,_=T,j=function(t){return R(_(t))},L=function(t){return"function"==typeof t},k=L,P=function(t){return"object"==typeof t?null!==t:k(t)},I=s,C=L,M=function(t){return C(t)?t:void 0},F=function(t,r){return arguments.length<2?M(I[t]):I[t]&&I[t][r]},N=F("navigator","userAgent")||"",U=s,D=N,H=U.process,B=U.Deno,$=H&&H.versions||B&&B.version,G=$&&$.v8;G?m=(b=G.split("."))[0]<4?1:b[0]+b[1]:D&&(!(b=D.match(/Edge\/(\d+)/))||b[1]>=74)&&(b=D.match(/Chrome\/(\d+)/))&&(m=b[1]);var Y=m&&+m,V=Y,W=p,z=!!Object.getOwnPropertySymbols&&!W((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V&&V<41})),K=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,q=L,J=F,X=K?function(t){return"symbol"==typeof t}:function(t){var r=J("Symbol");return q(r)&&Object(t)instanceof r},Q=function(t){try{return String(t)}catch(t){return"Object"}},Z=L,tt=Q,rt=function(t){if(Z(t))return t;throw TypeError(tt(t)+" is not a function")},et=rt,nt=function(t,r){var e=t[r];return null==e?void 0:et(e)},ot=L,it=P,at={exports:{}},ct=s,ut=function(t,r){try{Object.defineProperty(ct,t,{value:r,configurable:!0,writable:!0})}catch(e){ct[t]=r}return r},ft=ut,st="__core-js_shared__",lt=s[st]||ft(st,{}),pt=lt;(at.exports=function(t,r){return pt[t]||(pt[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.18.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var ht=T,yt=function(t){return Object(ht(t))},dt=yt,vt={}.hasOwnProperty,gt=Object.hasOwn||function(t,r){return vt.call(dt(t),r)},bt=0,mt=Math.random(),wt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++bt+mt).toString(36)},At=s,xt=at.exports,Ot=gt,St=wt,Et=z,Tt=K,Rt=xt("wks"),_t=At.Symbol,jt=Tt?_t:_t&&_t.withoutSetter||St,Lt=function(t){return Ot(Rt,t)&&(Et||"string"==typeof Rt[t])||(Et&&Ot(_t,t)?Rt[t]=_t[t]:Rt[t]=jt("Symbol."+t)),Rt[t]},kt=P,Pt=X,It=nt,Ct=function(t,r){var e,n;if("string"===r&&ot(e=t.toString)&&!it(n=e.call(t)))return n;if(ot(e=t.valueOf)&&!it(n=e.call(t)))return n;if("string"!==r&&ot(e=t.toString)&&!it(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")},Mt=Lt("toPrimitive"),Ft=function(t,r){if(!kt(t)||Pt(t))return t;var e,n=It(t,Mt);if(n){if(void 0===r&&(r="default"),e=n.call(t,r),!kt(e)||Pt(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===r&&(r="number"),Ct(t,r)},Nt=X,Ut=function(t){var r=Ft(t,"string");return Nt(r)?r:String(r)},Dt=P,Ht=s.document,Bt=Dt(Ht)&&Dt(Ht.createElement),$t=function(t){return Bt?Ht.createElement(t):{}},Gt=$t,Yt=!h&&!p((function(){return 7!=Object.defineProperty(Gt("div"),"a",{get:function(){return 7}}).a})),Vt=h,Wt=y,zt=w,Kt=j,qt=Ut,Jt=gt,Xt=Yt,Qt=Object.getOwnPropertyDescriptor;l.f=Vt?Qt:function(t,r){if(t=Kt(t),r=qt(r),Xt)try{return Qt(t,r)}catch(t){}if(Jt(t,r))return zt(!Wt.f.call(t,r),t[r])};var Zt={},tr=P,rr=function(t){if(tr(t))return t;throw TypeError(String(t)+" is not an object")},er=h,nr=Yt,or=rr,ir=Ut,ar=Object.defineProperty;Zt.f=er?ar:function(t,r,e){if(or(t),r=ir(r),or(e),nr)try{return ar(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var cr=Zt,ur=w,fr=h?function(t,r,e){return cr.f(t,r,ur(1,e))}:function(t,r,e){return t[r]=e,t},sr={exports:{}},lr=L,pr=lt,hr=Function.toString;lr(pr.inspectSource)||(pr.inspectSource=function(t){return hr.call(t)});var yr,dr,vr,gr=pr.inspectSource,br=L,mr=gr,wr=s.WeakMap,Ar=br(wr)&&/native code/.test(mr(wr)),xr=at.exports,Or=wt,Sr=xr("keys"),Er=function(t){return Sr[t]||(Sr[t]=Or(t))},Tr={},Rr=Ar,_r=P,jr=fr,Lr=gt,kr=lt,Pr=Er,Ir=Tr,Cr="Object already initialized",Mr=s.WeakMap;if(Rr||kr.state){var Fr=kr.state||(kr.state=new Mr),Nr=Fr.get,Ur=Fr.has,Dr=Fr.set;yr=function(t,r){if(Ur.call(Fr,t))throw new TypeError(Cr);return r.facade=t,Dr.call(Fr,t,r),r},dr=function(t){return Nr.call(Fr,t)||{}},vr=function(t){return Ur.call(Fr,t)}}else{var Hr=Pr("state");Ir[Hr]=!0,yr=function(t,r){if(Lr(t,Hr))throw new TypeError(Cr);return r.facade=t,jr(t,Hr,r),r},dr=function(t){return Lr(t,Hr)?t[Hr]:{}},vr=function(t){return Lr(t,Hr)}}var Br={set:yr,get:dr,has:vr,enforce:function(t){return vr(t)?dr(t):yr(t,{})},getterFor:function(t){return function(r){var e;if(!_r(r)||(e=dr(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},$r=h,Gr=gt,Yr=Function.prototype,Vr=$r&&Object.getOwnPropertyDescriptor,Wr=Gr(Yr,"name"),zr={EXISTS:Wr,PROPER:Wr&&"something"===function(){}.name,CONFIGURABLE:Wr&&(!$r||$r&&Vr(Yr,"name").configurable)},Kr=s,qr=L,Jr=gt,Xr=fr,Qr=ut,Zr=gr,te=zr.CONFIGURABLE,re=Br.get,ee=Br.enforce,ne=String(String).split("String");(sr.exports=function(t,r,e,n){var o,i=!!n&&!!n.unsafe,a=!!n&&!!n.enumerable,c=!!n&&!!n.noTargetGet,u=n&&void 0!==n.name?n.name:r;qr(e)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Jr(e,"name")||te&&e.name!==u)&&Xr(e,"name",u),(o=ee(e)).source||(o.source=ne.join("string"==typeof u?u:""))),t!==Kr?(i?!c&&t[r]&&(a=!0):delete t[r],a?t[r]=e:Xr(t,r,e)):a?t[r]=e:Qr(r,e)})(Function.prototype,"toString",(function(){return qr(this)&&re(this).source||Zr(this)}));var oe={},ie=Math.ceil,ae=Math.floor,ce=function(t){var r=+t;return r!=r||0===r?0:(r>0?ae:ie)(r)},ue=ce,fe=Math.max,se=Math.min,le=function(t,r){var e=ue(t);return e<0?fe(e+r,0):se(e,r)},pe=ce,he=Math.min,ye=function(t){return t>0?he(pe(t),9007199254740991):0},de=ye,ve=function(t){return de(t.length)},ge=j,be=le,me=ve,we=function(t){return function(r,e,n){var o,i=ge(r),a=me(i),c=be(n,a);if(t&&e!=e){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},Ae={includes:we(!0),indexOf:we(!1)},xe=gt,Oe=j,Se=Ae.indexOf,Ee=Tr,Te=function(t,r){var e,n=Oe(t),o=0,i=[];for(e in n)!xe(Ee,e)&&xe(n,e)&&i.push(e);for(;r.length>o;)xe(n,e=r[o++])&&(~Se(i,e)||i.push(e));return i},Re=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_e=Te,je=Re.concat("length","prototype");oe.f=Object.getOwnPropertyNames||function(t){return _e(t,je)};var Le={};Le.f=Object.getOwnPropertySymbols;var ke=oe,Pe=Le,Ie=rr,Ce=F("Reflect","ownKeys")||function(t){var r=ke.f(Ie(t)),e=Pe.f;return e?r.concat(e(t)):r},Me=gt,Fe=Ce,Ne=l,Ue=Zt,De=function(t,r){for(var e=Fe(r),n=Ue.f,o=Ne.f,i=0;i<e.length;i++){var a=e[i];Me(t,a)||n(t,a,o(r,a))}},He=p,Be=L,$e=/#|\.prototype\./,Ge=function(t,r){var e=Ve[Ye(t)];return e==ze||e!=We&&(Be(r)?He(r):!!r)},Ye=Ge.normalize=function(t){return String(t).replace($e,".").toLowerCase()},Ve=Ge.data={},We=Ge.NATIVE="N",ze=Ge.POLYFILL="P",Ke=Ge,qe=s,Je=l.f,Xe=fr,Qe=sr.exports,Ze=ut,tn=De,rn=Ke,en=function(t,r){var e,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(e=u?qe:f?qe[c]||Ze(c,{}):(qe[c]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(a=Je(e,n))&&a.value:e[n],!rn(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;tn(i,o)}(t.sham||o&&o.sham)&&Xe(i,"sham",!0),Qe(e,n,i,t)}},nn=rt,on=P,an=[].slice,cn={},un=function(t,r,e){if(!(r in cn)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";cn[r]=Function("C,a","return new C("+n.join(",")+")")}return cn[r](t,e)},fn=Function.bind||function(t){var r=nn(this),e=an.call(arguments,1),n=function(){var o=e.concat(an.call(arguments));return this instanceof n?un(r,o.length,o):r.apply(t,o)};return on(r.prototype)&&(n.prototype=r.prototype),n};en({target:"Function",proto:!0},{bind:fn});var sn={};sn[Lt("toStringTag")]="z";var ln="[object z]"===String(sn),pn=ln,hn=L,yn=x,dn=Lt("toStringTag"),vn="Arguments"==yn(function(){return arguments}()),gn=pn?yn:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),dn))?e:vn?yn(r):"Object"==(n=yn(r))&&hn(r.callee)?"Arguments":n},bn=gn,mn=ln?{}.toString:function(){return"[object "+bn(this)+"]"},wn=ln,An=sr.exports,xn=mn;wn||An(Object.prototype,"toString",xn,{unsafe:!0});var On=rt,Sn=function(t,r,e){if(On(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}},En=x,Tn=Array.isArray||function(t){return"Array"==En(t)},Rn=p,_n=L,jn=gn,Ln=gr,kn=[],Pn=F("Reflect","construct"),In=/^\s*(?:class|function)\b/,Cn=In.exec,Mn=!In.exec((function(){})),Fn=function(t){if(!_n(t))return!1;try{return Pn(Object,kn,t),!0}catch(t){return!1}},Nn=!Pn||Rn((function(){var t;return Fn(Fn.call)||!Fn(Object)||!Fn((function(){t=!0}))||t}))?function(t){if(!_n(t))return!1;switch(jn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Mn||!!Cn.call(In,Ln(t))}:Fn,Un=Tn,Dn=Nn,Hn=P,Bn=Lt("species"),$n=function(t){var r;return Un(t)&&(r=t.constructor,(Dn(r)&&(r===Array||Un(r.prototype))||Hn(r)&&null===(r=r[Bn]))&&(r=void 0)),void 0===r?Array:r},Gn=function(t,r){return new($n(t))(0===r?0:r)},Yn=Sn,Vn=E,Wn=yt,zn=ve,Kn=Gn,qn=[].push,Jn=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,a=7==t,c=5==t||i;return function(u,f,s,l){for(var p,h,y=Wn(u),d=Vn(y),v=Yn(f,s,3),g=zn(d),b=0,m=l||Kn,w=r?m(u,g):e||a?m(u,0):void 0;g>b;b++)if((c||b in d)&&(h=v(p=d[b],b,y),t))if(r)w[b]=h;else if(h)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:qn.call(w,p)}else switch(t){case 4:return!1;case 7:qn.call(w,p)}return i?-1:n||o?o:w}},Xn={forEach:Jn(0),map:Jn(1),filter:Jn(2),some:Jn(3),every:Jn(4),find:Jn(5),findIndex:Jn(6),filterReject:Jn(7)},Qn=p,Zn=function(t,r){var e=[][t];return!!e&&Qn((function(){e.call(null,r||function(){throw 1},1)}))},to=Xn.forEach,ro=Zn("forEach")?[].forEach:function(t){return to(this,t,arguments.length>1?arguments[1]:void 0)};en({target:"Array",proto:!0,forced:[].forEach!=ro},{forEach:ro});var eo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},no=$t("span").classList,oo=no&&no.constructor&&no.constructor.prototype,io=oo===Object.prototype?void 0:oo,ao=s,co=eo,uo=io,fo=ro,so=fr,lo=function(t){if(t&&t.forEach!==fo)try{so(t,"forEach",fo)}catch(r){t.forEach=fo}};for(var po in co)co[po]&&lo(ao[po]&&ao[po].prototype);lo(uo);var ho=p,yo=Y,vo=Lt("species"),go=function(t){return yo>=51||!ho((function(){var r=[];return(r.constructor={})[vo]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},bo=Xn.filter;en({target:"Array",proto:!0,forced:!go("filter")},{filter:function(t){return bo(this,t,arguments.length>1?arguments[1]:void 0)}});var mo=Ut,wo=Zt,Ao=w,xo=function(t,r,e){var n=mo(r);n in t?wo.f(t,n,Ao(0,e)):t[n]=e},Oo=en,So=p,Eo=Tn,To=P,Ro=yt,_o=ve,jo=xo,Lo=Gn,ko=go,Po=Y,Io=Lt("isConcatSpreadable"),Co=9007199254740991,Mo="Maximum allowed index exceeded",Fo=Po>=51||!So((function(){var t=[];return t[Io]=!1,t.concat()[0]!==t})),No=ko("concat"),Uo=function(t){if(!To(t))return!1;var r=t[Io];return void 0!==r?!!r:Eo(t)};function Do(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function Ho(t){return function(t){if(Array.isArray(t))return Do(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return Do(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Do(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Oo({target:"Array",proto:!0,forced:!Fo||!No},{concat:function(t){var r,e,n,o,i,a=Ro(this),c=Lo(a,0),u=0;for(r=-1,n=arguments.length;r<n;r++)if(Uo(i=-1===r?a:arguments[r])){if(u+(o=_o(i))>Co)throw TypeError(Mo);for(e=0;e<o;e++,u++)e in i&&jo(c,u,i[e])}else{if(u>=Co)throw TypeError(Mo);jo(c,u++,i)}return c.length=u,c}});var Bo=en,$o=Tn,Go=Nn,Yo=P,Vo=le,Wo=ve,zo=j,Ko=xo,qo=Lt,Jo=go("slice"),Xo=qo("species"),Qo=[].slice,Zo=Math.max;function ti(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ri(t,r){return ri=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},ri(t,r)}function ei(t){return ei=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ei(t)}function ni(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function oi(t){return oi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(t)}function ii(t,r){return!r||"object"!==oi(r)&&"function"!=typeof r?ti(t):r}function ai(t,r,e){return ai=ni()?Reflect.construct:function(t,r,e){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(t,n));return e&&ri(o,e.prototype),o},ai.apply(null,arguments)}function ci(t){var r="function"==typeof Map?new Map:void 0;return ci=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return ai(t,arguments,ei(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ri(n,t)},ci(t)}Bo({target:"Array",proto:!0,forced:!Jo},{slice:function(t,r){var e,n,o,i=zo(this),a=Wo(i),c=Vo(t,a),u=Vo(void 0===r?a:r,a);if($o(i)&&(e=i.constructor,(Go(e)&&(e===Array||$o(e.prototype))||Yo(e)&&null===(e=e[Xo]))&&(e=void 0),e===Array||void 0===e))return Qo.call(i,c,u);for(n=new(void 0===e?Array:e)(Zo(u-c,0)),o=0;c<u;c++,o++)c in i&&Ko(n,o,i[c]);return n.length=o,n}});var ui=h,fi=zr.EXISTS,si=Zt.f,li=Function.prototype,pi=li.toString,hi=/^\s*function ([^ (]*)/;ui&&!fi&&si(li,"name",{configurable:!0,get:function(){try{return pi.call(this).match(hi)[1]}catch(t){return""}}});var yi=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&ri(t,r)}(i,t);var r,n,o=(r=i,n=ni(),function(){var t,e=ei(r);if(n){var o=ei(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return ii(this,t)});function i(t,r){var n;return e(this,i),(n=o.call(this,r)).name=t,Error.captureStackTrace(ti(n),n.constructor),n}return i}(ci(Error)),di=function(){function t(r){e(this,t),this.args=r,this.tasks={}}return o(t,[{key:"tap",value:function(t,r){if(this.tasks[t])throw yi("SyncHookTapError","A SyncHook named ".concat(t," already exists, But you can run Instance.remove(hookName) before defining it "));this.tasks[t]=r}},{key:"call",value:function(t){for(var r,e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(!this.tasks[t])throw new yi("SyncHookCallError","The SyncHook named ".concat(t," not exists;"));if(this.args){if(n.length<this.args.length)throw new yi("SyncHookCallError","".concat(this.args.length," arguments required;but ").concat(n.length," provided"));n=n.slice(0,this.args.length)}(r=this.tasks)[t].apply(r,Ho(n))}},{key:"remove",value:function(t){if(!this.tasks[t])throw new yi("SyncHookCallError","The SyncHook named ".concat(t," not exists;"));this.tasks[t]=null}}]),t}(),vi=gn,gi=function(t){if("Symbol"===vi(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)},bi=rr,mi=function(){var t=bi(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r},wi={},Ai=p,xi=s.RegExp;wi.UNSUPPORTED_Y=Ai((function(){var t=xi("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),wi.BROKEN_CARET=Ai((function(){var t=xi("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));var Oi,Si=Te,Ei=Re,Ti=Object.keys||function(t){return Si(t,Ei)},Ri=Zt,_i=rr,ji=Ti,Li=h?Object.defineProperties:function(t,r){_i(t);for(var e,n=ji(r),o=n.length,i=0;o>i;)Ri.f(t,e=n[i++],r[e]);return t},ki=F("document","documentElement"),Pi=rr,Ii=Li,Ci=Re,Mi=Tr,Fi=ki,Ni=$t,Ui=Er("IE_PROTO"),Di=function(){},Hi=function(t){return"<script>"+t+"</"+"script>"},Bi=function(t){t.write(Hi("")),t.close();var r=t.parentWindow.Object;return t=null,r},$i=function(){try{Oi=new ActiveXObject("htmlfile")}catch(t){}var t,r;$i="undefined"!=typeof document?document.domain&&Oi?Bi(Oi):((r=Ni("iframe")).style.display="none",Fi.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(Hi("document.F=Object")),t.close(),t.F):Bi(Oi);for(var e=Ci.length;e--;)delete $i.prototype[Ci[e]];return $i()};Mi[Ui]=!0;var Gi=Object.create||function(t,r){var e;return null!==t?(Di.prototype=Pi(t),e=new Di,Di.prototype=null,e[Ui]=t):e=$i(),void 0===r?e:Ii(e,r)},Yi=p,Vi=s.RegExp,Wi=Yi((function(){var t=Vi(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),zi=p,Ki=s.RegExp,qi=zi((function(){var t=Ki("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Ji=gi,Xi=mi,Qi=wi,Zi=at.exports,ta=Gi,ra=Br.get,ea=Wi,na=qi,oa=RegExp.prototype.exec,ia=Zi("native-string-replace",String.prototype.replace),aa=oa,ca=function(){var t=/a/,r=/b*/g;return oa.call(t,"a"),oa.call(r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),ua=Qi.UNSUPPORTED_Y||Qi.BROKEN_CARET,fa=void 0!==/()??/.exec("")[1];(ca||fa||ua||ea||na)&&(aa=function(t){var r,e,n,o,i,a,c,u=this,f=ra(u),s=Ji(t),l=f.raw;if(l)return l.lastIndex=u.lastIndex,r=aa.call(l,s),u.lastIndex=l.lastIndex,r;var p=f.groups,h=ua&&u.sticky,y=Xi.call(u),d=u.source,v=0,g=s;if(h&&(-1===(y=y.replace("y","")).indexOf("g")&&(y+="g"),g=s.slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==s.charAt(u.lastIndex-1))&&(d="(?: "+d+")",g=" "+g,v++),e=new RegExp("^(?:"+d+")",y)),fa&&(e=new RegExp("^"+d+"$(?!\\s)",y)),ca&&(n=u.lastIndex),o=oa.call(h?e:u,g),h?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:ca&&o&&(u.lastIndex=u.global?o.index+o[0].length:n),fa&&o&&o.length>1&&ia.call(o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=ta(null),i=0;i<p.length;i++)a[(c=p[i])[0]]=o[c[1]];return o});var sa=aa;en({target:"RegExp",proto:!0,forced:/./.exec!==sa},{exec:sa});var la=sr.exports,pa=sa,ha=p,ya=Lt,da=fr,va=ya("species"),ga=RegExp.prototype,ba=ce,ma=gi,wa=T,Aa=function(t){return function(r,e){var n,o,i=ma(wa(r)),a=ba(e),c=i.length;return a<0||a>=c?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},xa={codeAt:Aa(!1),charAt:Aa(!0)},Oa=xa.charAt,Sa=yt,Ea=Math.floor,Ta="".replace,Ra=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,_a=/\$([$&'`]|\d{1,2})/g,ja=rr,La=L,ka=x,Pa=sa,Ia=function(t,r,e,n){var o=ya(t),i=!ha((function(){var r={};return r[o]=function(){return 7},7!=""[t](r)})),a=i&&!ha((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[va]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r}));if(!i||!a||e){var c=/./[o],u=r(o,""[t],(function(t,r,e,n,o){var a=r.exec;return a===pa||a===ga.exec?i&&!o?{done:!0,value:c.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}));la(String.prototype,t,u[0]),la(ga,o,u[1])}n&&da(ga[o],"sham",!0)},Ca=p,Ma=rr,Fa=L,Na=ce,Ua=ye,Da=gi,Ha=T,Ba=function(t,r,e){return r+(e?Oa(t,r).length:1)},$a=nt,Ga=function(t,r,e,n,o,i){var a=e+t.length,c=n.length,u=_a;return void 0!==o&&(o=Sa(o),u=Ra),Ta.call(i,u,(function(i,u){var f;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(a);case"<":f=o[u.slice(1,-1)];break;default:var s=+u;if(0===s)return i;if(s>c){var l=Ea(s/10);return 0===l?i:l<=c?void 0===n[l-1]?u.charAt(1):n[l-1]+u.charAt(1):i}f=n[s-1]}return void 0===f?"":f}))},Ya=function(t,r){var e=t.exec;if(La(e)){var n=e.call(t,r);return null!==n&&ja(n),n}if("RegExp"===ka(t))return Pa.call(t,r);throw TypeError("RegExp#exec called on incompatible receiver")},Va=Lt("replace"),Wa=Math.max,za=Math.min,Ka="$0"==="a".replace(/./,"$0"),qa=!!/./[Va]&&""===/./[Va]("a","$0");Ia("replace",(function(t,r,e){var n=qa?"$":"$0";return[function(t,e){var n=Ha(this),o=null==t?void 0:$a(t,Va);return o?o.call(t,n,e):r.call(Da(n),t,e)},function(t,o){var i=Ma(this),a=Da(t);if("string"==typeof o&&-1===o.indexOf(n)&&-1===o.indexOf("$<")){var c=e(r,i,a,o);if(c.done)return c.value}var u=Fa(o);u||(o=Da(o));var f=i.global;if(f){var s=i.unicode;i.lastIndex=0}for(var l=[];;){var p=Ya(i,a);if(null===p)break;if(l.push(p),!f)break;""===Da(p[0])&&(i.lastIndex=Ba(a,Ua(i.lastIndex),s))}for(var h,y="",d=0,v=0;v<l.length;v++){p=l[v];for(var g=Da(p[0]),b=Wa(za(Na(p.index),a.length),0),m=[],w=1;w<p.length;w++)m.push(void 0===(h=p[w])?h:String(h));var A=p.groups;if(u){var x=[g].concat(m,b,a);void 0!==A&&x.push(A);var O=Da(o.apply(void 0,x))}else O=Ga(g,a,b,m,A,o);b>=d&&(y+=a.slice(d,b)+O,d=b+g.length)}return y+a.slice(d)}]}),!!Ca((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!Ka||qa);var Ja=L,Xa=rr,Qa=function(t){if("object"==typeof t||Ja(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")},Za=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return Xa(e),Qa(n),r?t.call(e,n):e.__proto__=n,e}}():void 0),tc=L,rc=P,ec=Za,nc=function(t,r,e){var n,o;return ec&&tc(n=r.constructor)&&n!==e&&rc(o=n.prototype)&&o!==e.prototype&&ec(t,o),t},oc=P,ic=x,ac=Lt("match"),cc=F,uc=Zt,fc=h,sc=Lt("species"),lc=function(t){var r=cc(t),e=uc.f;fc&&r&&!r[sc]&&e(r,sc,{configurable:!0,get:function(){return this}})},pc=h,hc=s,yc=Ke,dc=nc,vc=fr,gc=Zt.f,bc=oe.f,mc=function(t){var r;return oc(t)&&(void 0!==(r=t[ac])?!!r:"RegExp"==ic(t))},wc=gi,Ac=mi,xc=wi,Oc=sr.exports,Sc=p,Ec=gt,Tc=Br.enforce,Rc=lc,_c=Wi,jc=qi,Lc=Lt("match"),kc=hc.RegExp,Pc=kc.prototype,Ic=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,Cc=/a/g,Mc=/a/g,Fc=new kc(Cc)!==Cc,Nc=xc.UNSUPPORTED_Y,Uc=pc&&(!Fc||Nc||_c||jc||Sc((function(){return Mc[Lc]=!1,kc(Cc)!=Cc||kc(Mc)==Mc||"/a/i"!=kc(Cc,"i")})));if(yc("RegExp",Uc)){for(var Dc=function(t,r){var e,n,o,i,a,c,u=this instanceof Dc,f=mc(t),s=void 0===r,l=[],p=t;if(!u&&f&&s&&t.constructor===Dc)return t;if((f||t instanceof Dc)&&(t=t.source,s&&(r="flags"in p?p.flags:Ac.call(p))),t=void 0===t?"":wc(t),r=void 0===r?"":wc(r),p=t,_c&&"dotAll"in Cc&&(n=!!r&&r.indexOf("s")>-1)&&(r=r.replace(/s/g,"")),e=r,Nc&&"sticky"in Cc&&(o=!!r&&r.indexOf("y")>-1)&&(r=r.replace(/y/g,"")),jc&&(i=function(t){for(var r,e=t.length,n=0,o="",i=[],a={},c=!1,u=!1,f=0,s="";n<=e;n++){if("\\"===(r=t.charAt(n)))r+=t.charAt(++n);else if("]"===r)c=!1;else if(!c)switch(!0){case"["===r:c=!0;break;case"("===r:Ic.test(t.slice(n+1))&&(n+=2,u=!0),o+=r,f++;continue;case">"===r&&u:if(""===s||Ec(a,s))throw new SyntaxError("Invalid capture group name");a[s]=!0,i.push([s,f]),u=!1,s="";continue}u?s+=r:o+=r}return[o,i]}(t),t=i[0],l=i[1]),a=dc(kc(t,r),u?this:Pc,Dc),(n||o||l.length)&&(c=Tc(a),n&&(c.dotAll=!0,c.raw=Dc(function(t){for(var r,e=t.length,n=0,o="",i=!1;n<=e;n++)"\\"!==(r=t.charAt(n))?i||"."!==r?("["===r?i=!0:"]"===r&&(i=!1),o+=r):o+="[\\s\\S]":o+=r+t.charAt(++n);return o}(t),e)),o&&(c.sticky=!0),l.length&&(c.groups=l)),t!==p)try{vc(a,"source",""===p?"(?:)":p)}catch(t){}return a},Hc=function(t){t in Dc||gc(Dc,t,{configurable:!0,get:function(){return kc[t]},set:function(r){kc[t]=r}})},Bc=bc(kc),$c=0;Bc.length>$c;)Hc(Bc[$c++]);Pc.constructor=Dc,Dc.prototype=Pc,Oc(hc,"RegExp",Dc)}Rc("RegExp");var Gc=zr.PROPER,Yc=sr.exports,Vc=rr,Wc=gi,zc=p,Kc=mi,qc="toString",Jc=RegExp.prototype,Xc=Jc.toString,Qc=zc((function(){return"/a/b"!=Xc.call({source:"a",flags:"b"})})),Zc=Gc&&Xc.name!=qc;(Qc||Zc)&&Yc(RegExp.prototype,qc,(function(){var t=Vc(this),r=Wc(t.source),e=t.flags;return"/"+r+"/"+Wc(void 0===e&&t instanceof RegExp&&!("flags"in Jc)?Kc.call(t):e)}),{unsafe:!0});var tu=Xn.map;en({target:"Array",proto:!0,forced:!go("map")},{map:function(t){return tu(this,t,arguments.length>1?arguments[1]:void 0)}});var ru=rr,eu=nt,nu=rr,ou=function(t,r,e){var n,o;ru(t);try{if(!(n=eu(t,"return"))){if("throw"===r)throw e;return e}n=n.call(t)}catch(t){o=!0,n=t}if("throw"===r)throw e;if(o)throw n;return ru(n),e},iu={},au=iu,cu=Lt("iterator"),uu=Array.prototype,fu=function(t){return void 0!==t&&(au.Array===t||uu[cu]===t)},su=gn,lu=nt,pu=iu,hu=Lt("iterator"),yu=function(t){if(null!=t)return lu(t,hu)||lu(t,"@@iterator")||pu[su(t)]},du=rt,vu=rr,gu=yu,bu=function(t,r){var e=arguments.length<2?gu(t):r;if(du(e))return vu(e.call(t));throw TypeError(String(t)+" is not iterable")},mu=Sn,wu=yt,Au=function(t,r,e,n){try{return n?r(nu(e)[0],e[1]):r(e)}catch(r){ou(t,"throw",r)}},xu=fu,Ou=Nn,Su=ve,Eu=xo,Tu=bu,Ru=yu,_u=Lt("iterator"),ju=!1;try{var Lu=0,ku={next:function(){return{done:!!Lu++}},return:function(){ju=!0}};ku[_u]=function(){return this},Array.from(ku,(function(){throw 2}))}catch(t){}var Pu=function(t,r){if(!r&&!ju)return!1;var e=!1;try{var n={};n[_u]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e},Iu=function(t){var r=wu(t),e=Ou(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=mu(o,n>2?arguments[2]:void 0,2));var a,c,u,f,s,l,p=Ru(r),h=0;if(!p||this==Array&&xu(p))for(a=Su(r),c=e?new this(a):Array(a);a>h;h++)l=i?o(r[h],h):r[h],Eu(c,h,l);else for(s=(f=Tu(r,p)).next,c=e?new this:[];!(u=s.call(f)).done;h++)l=i?Au(f,o,[u.value,h],!0):u.value,Eu(c,h,l);return c.length=h,c};en({target:"Array",stat:!0,forced:!Pu((function(t){Array.from(t)}))},{from:Iu});var Cu,Mu,Fu,Nu=!p((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Uu=gt,Du=L,Hu=yt,Bu=Nu,$u=Er("IE_PROTO"),Gu=Object.prototype,Yu=Bu?Object.getPrototypeOf:function(t){var r=Hu(t);if(Uu(r,$u))return r[$u];var e=r.constructor;return Du(e)&&r instanceof e?e.prototype:r instanceof Object?Gu:null},Vu=p,Wu=L,zu=Yu,Ku=sr.exports,qu=Lt("iterator"),Ju=!1;[].keys&&("next"in(Fu=[].keys())?(Mu=zu(zu(Fu)))!==Object.prototype&&(Cu=Mu):Ju=!0);var Xu=null==Cu||Vu((function(){var t={};return Cu[qu].call(t)!==t}));Xu&&(Cu={}),Wu(Cu[qu])||Ku(Cu,qu,(function(){return this}));var Qu={IteratorPrototype:Cu,BUGGY_SAFARI_ITERATORS:Ju},Zu=Zt.f,tf=gt,rf=Lt("toStringTag"),ef=function(t,r,e){t&&!tf(t=e?t:t.prototype,rf)&&Zu(t,rf,{configurable:!0,value:r})},nf=Qu.IteratorPrototype,of=Gi,af=w,cf=ef,uf=iu,ff=function(){return this},sf=en,lf=zr,pf=L,hf=function(t,r,e){var n=r+" Iterator";return t.prototype=of(nf,{next:af(1,e)}),cf(t,n,!1),uf[n]=ff,t},yf=Yu,df=Za,vf=ef,gf=fr,bf=sr.exports,mf=iu,wf=lf.PROPER,Af=lf.CONFIGURABLE,xf=Qu.IteratorPrototype,Of=Qu.BUGGY_SAFARI_ITERATORS,Sf=Lt("iterator"),Ef="keys",Tf="values",Rf="entries",_f=function(){return this},jf=function(t,r,e,n,o,i,a){hf(e,r,n);var c,u,f,s=function(t){if(t===o&&d)return d;if(!Of&&t in h)return h[t];switch(t){case Ef:case Tf:case Rf:return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",p=!1,h=t.prototype,y=h[Sf]||h["@@iterator"]||o&&h[o],d=!Of&&y||s(o),v="Array"==r&&h.entries||y;if(v&&(c=yf(v.call(new t)))!==Object.prototype&&c.next&&(yf(c)!==xf&&(df?df(c,xf):pf(c[Sf])||bf(c,Sf,_f)),vf(c,l,!0)),wf&&o==Tf&&y&&y.name!==Tf&&(Af?gf(h,"name",Tf):(p=!0,d=function(){return y.call(this)})),o)if(u={values:s(Tf),keys:i?d:s(Ef),entries:s(Rf)},a)for(f in u)(Of||p||!(f in h))&&bf(h,f,u[f]);else sf({target:r,proto:!0,forced:Of||p},u);return h[Sf]!==d&&bf(h,Sf,d,{name:o}),mf[r]=d,u},Lf=xa.charAt,kf=gi,Pf=Br,If=jf,Cf="String Iterator",Mf=Pf.set,Ff=Pf.getterFor(Cf);If(String,"String",(function(t){Mf(this,{type:Cf,string:kf(t),index:0})}),(function(){var t,r=Ff(this),e=r.string,n=r.index;return n>=e.length?{value:void 0,done:!0}:(t=Lf(e,n),r.index+=t.length,{value:t,done:!1})}));var Nf=Gi,Uf=Zt,Df=Lt("unscopables"),Hf=Array.prototype;null==Hf[Df]&&Uf.f(Hf,Df,{configurable:!0,value:Nf(null)});var Bf=function(t){Hf[Df][t]=!0},$f=Ae.includes,Gf=Bf;en({target:"Array",proto:!0},{includes:function(t){return $f(this,t,arguments.length>1?arguments[1]:void 0)}}),Gf("includes");var Yf=yt,Vf=Ti;en({target:"Object",stat:!0,forced:p((function(){Vf(1)}))},{keys:function(t){return Vf(Yf(t))}});var Wf=h,zf=Ti,Kf=j,qf=y.f,Jf=function(t){return function(r){for(var e,n=Kf(r),o=zf(n),i=o.length,a=0,c=[];i>a;)e=o[a++],Wf&&!qf.call(n,e)||c.push(t?[e,n[e]]:n[e]);return c}},Xf={entries:Jf(!0),values:Jf(!1)}.values;function Qf(t,r){var e={origin:window.location.origin,cssScope:!1,proxy:!1,activeRoute:"",prefix:"",pathRewrite:{"":""}},n=(e=Object.assign(e,r)).proxy?t:e.origin;return fetch(n).then((function(t){return t.text()})).then((function(r){var n=(new DOMParser).parseFromString(r,"text/html");return n.head.children,function(t,r,e){var n={scripts:[],styles:[],template:null,preLoads:[]};return function(t,r,e,n){var o=r.querySelectorAll("script"),i=window.location.origin.replace(/\//g,"\\/"),a=new RegExp("(".concat(i,")*(.*)"));e.scripts=Array.from(o).map((function(r){return r.remove(),{src:Zf(r.src.replace(a,"$2"),t,n),defer:r.defer,async:r.async,innerHTML:r.innerHTML}}))}(t,r,n,e),function(t,r,e,n){var o=Array.from(r.head.children).filter((function(t){return["LINK","STYLE"].includes(t.tagName)})),i=window.location.origin.replace(/\//g,"\\/"),a=new RegExp("(".concat(i,")*(.*)"));o.map((function(r){if("LINK"===r.tagName){var o=r.href.replace(a,"$2");"stylesheet"===r.rel?e.styles.push({href:Zf(o,t,n),rel:r.rel}):e.preLoads.push({href:Zf(o,t,n),rel:r.rel,as:r.as,sizes:r.sizes.value})}else e.styles.push(r.innerHTML);r.remove()}))}(t,r,n,e),function(t,r){var e=Array.from(t.body.childNodes);r.template=e}(r,n),n}(t,n,e)}))}function Zf(t,r,e){if(t){if(/^http(s){0,1}/.test(t))return t;var n=void 0===e.prefix||null===e.prefix?r:e.prefix,o=Object.keys(e.pathRewrite)[0]||"",i=Object.values(e.pathRewrite)[0]||"";return e.proxy?n+t:e.origin+t.replace(o,i)}return null}en({target:"Object",stat:!0},{values:function(t){return Xf(t)}});var ts=j,rs=Bf,es=iu,ns=Br,os=jf,is="Array Iterator",as=ns.set,cs=ns.getterFor(is),us=os(Array,"Array",(function(t,r){as(this,{type:is,target:ts(t),index:0,kind:r})}),(function(){var t=cs(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values");es.Arguments=es.Array,rs("keys"),rs("values"),rs("entries");var fs=s,ss=eo,ls=io,ps=us,hs=fr,ys=Lt,ds=ys("iterator"),vs=ys("toStringTag"),gs=ps.values,bs=function(t,r){if(t){if(t[ds]!==gs)try{hs(t,ds,gs)}catch(r){t[ds]=gs}if(t[vs]||hs(t,vs,r),ss[r])for(var e in ps)if(t[e]!==ps[e])try{hs(t,e,ps[e])}catch(r){t[e]=ps[e]}}};for(var ms in ss)bs(fs[ms]&&fs[ms].prototype,ms);bs(ls,"DOMTokenList");var ws=en,As=j,xs=[].join,Os=E!=Object,Ss=Zn("join",",");ws({target:"Array",proto:!0,forced:Os||!Ss},{join:function(t){return xs.call(As(this),void 0===t?",":t)}});var Es=sr.exports,Ts=Date.prototype,Rs="Invalid Date",_s="toString",js=Ts.toString,Ls=Ts.getTime;String(new Date(NaN))!=Rs&&Es(Ts,_s,(function(){var t=Ls.call(this);return t==t?js.call(this):Rs}));var ks,Ps,Is,Cs={exports:{}},Ms="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,Fs=Ms,Ns=h,Us=s,Ds=L,Hs=P,Bs=gt,$s=gn,Gs=Q,Ys=fr,Vs=sr.exports,Ws=Zt.f,zs=Yu,Ks=Za,qs=Lt,Js=wt,Xs=Us.Int8Array,Qs=Xs&&Xs.prototype,Zs=Us.Uint8ClampedArray,tl=Zs&&Zs.prototype,rl=Xs&&zs(Xs),el=Qs&&zs(Qs),nl=Object.prototype,ol=nl.isPrototypeOf,il=qs("toStringTag"),al=Js("TYPED_ARRAY_TAG"),cl=Js("TYPED_ARRAY_CONSTRUCTOR"),ul=Fs&&!!Ks&&"Opera"!==$s(Us.opera),fl=!1,sl={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},ll={BigInt64Array:8,BigUint64Array:8},pl=function(t){if(!Hs(t))return!1;var r=$s(t);return Bs(sl,r)||Bs(ll,r)};for(ks in sl)(Is=(Ps=Us[ks])&&Ps.prototype)?Ys(Is,cl,Ps):ul=!1;for(ks in ll)(Is=(Ps=Us[ks])&&Ps.prototype)&&Ys(Is,cl,Ps);if((!ul||!Ds(rl)||rl===Function.prototype)&&(rl=function(){throw TypeError("Incorrect invocation")},ul))for(ks in sl)Us[ks]&&Ks(Us[ks],rl);if((!ul||!el||el===nl)&&(el=rl.prototype,ul))for(ks in sl)Us[ks]&&Ks(Us[ks].prototype,el);if(ul&&zs(tl)!==el&&Ks(tl,el),Ns&&!Bs(el,il))for(ks in fl=!0,Ws(el,il,{get:function(){return Hs(this)?this[al]:void 0}}),sl)Us[ks]&&Ys(Us[ks],al,ks);var hl={NATIVE_ARRAY_BUFFER_VIEWS:ul,TYPED_ARRAY_CONSTRUCTOR:cl,TYPED_ARRAY_TAG:fl&&al,aTypedArray:function(t){if(pl(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(Ds(t)&&(!Ks||ol.call(rl,t)))return t;throw TypeError(Gs(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e){if(Ns){if(e)for(var n in sl){var o=Us[n];if(o&&Bs(o.prototype,t))try{delete o.prototype[t]}catch(t){}}el[t]&&!e||Vs(el,t,e?r:ul&&Qs[t]||r)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(Ns){if(Ks){if(e)for(n in sl)if((o=Us[n])&&Bs(o,t))try{delete o[t]}catch(t){}if(rl[t]&&!e)return;try{return Vs(rl,t,e?r:ul&&rl[t]||r)}catch(t){}}for(n in sl)!(o=Us[n])||o[t]&&!e||Vs(o,t,r)}},isView:function(t){if(!Hs(t))return!1;var r=$s(t);return"DataView"===r||Bs(sl,r)||Bs(ll,r)},isTypedArray:pl,TypedArray:rl,TypedArrayPrototype:el},yl=s,dl=p,vl=Pu,gl=hl.NATIVE_ARRAY_BUFFER_VIEWS,bl=yl.ArrayBuffer,ml=yl.Int8Array,wl=!gl||!dl((function(){ml(1)}))||!dl((function(){new ml(-1)}))||!vl((function(t){new ml,new ml(null),new ml(1.5),new ml(t)}),!0)||dl((function(){return 1!==new ml(new bl(2),1,void 0).length})),Al=sr.exports,xl=function(t,r,e){if(t instanceof r)return t;throw TypeError("Incorrect "+(e?e+" ":"")+"invocation")},Ol=ce,Sl=ye,El=function(t){if(void 0===t)return 0;var r=Ol(t),e=Sl(r);if(r!==e)throw RangeError("Wrong length or index");return e},Tl=Math.abs,Rl=Math.pow,_l=Math.floor,jl=Math.log,Ll=Math.LN2,kl={pack:function(t,r,e){var n,o,i,a=new Array(e),c=8*e-r-1,u=(1<<c)-1,f=u>>1,s=23===r?Rl(2,-24)-Rl(2,-77):0,l=t<0||0===t&&1/t<0?1:0,p=0;for((t=Tl(t))!=t||t===1/0?(o=t!=t?1:0,n=u):(n=_l(jl(t)/Ll),t*(i=Rl(2,-n))<1&&(n--,i*=2),(t+=n+f>=1?s/i:s*Rl(2,1-f))*i>=2&&(n++,i/=2),n+f>=u?(o=0,n=u):n+f>=1?(o=(t*i-1)*Rl(2,r),n+=f):(o=t*Rl(2,f-1)*Rl(2,r),n=0));r>=8;a[p++]=255&o,o/=256,r-=8);for(n=n<<r|o,c+=r;c>0;a[p++]=255&n,n/=256,c-=8);return a[--p]|=128*l,a},unpack:function(t,r){var e,n=t.length,o=8*n-r-1,i=(1<<o)-1,a=i>>1,c=o-7,u=n-1,f=t[u--],s=127&f;for(f>>=7;c>0;s=256*s+t[u],u--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=r;c>0;e=256*e+t[u],u--,c-=8);if(0===s)s=1-a;else{if(s===i)return e?NaN:f?-1/0:1/0;e+=Rl(2,r),s-=a}return(f?-1:1)*e*Rl(2,s-r)}},Pl=yt,Il=le,Cl=ve,Ml=function(t){for(var r=Pl(this),e=Cl(r),n=arguments.length,o=Il(n>1?arguments[1]:void 0,e),i=n>2?arguments[2]:void 0,a=void 0===i?e:Il(i,e);a>o;)r[o++]=t;return r},Fl=s,Nl=h,Ul=Ms,Dl=zr,Hl=fr,Bl=function(t,r,e){for(var n in r)Al(t,n,r[n],e);return t},$l=p,Gl=xl,Yl=ce,Vl=ye,Wl=El,zl=kl,Kl=Yu,ql=Za,Jl=oe.f,Xl=Zt.f,Ql=Ml,Zl=ef,tp=Dl.PROPER,rp=Dl.CONFIGURABLE,ep=Br.get,np=Br.set,op="ArrayBuffer",ip="DataView",ap="Wrong index",cp=Fl.ArrayBuffer,up=cp,fp=Fl.DataView,sp=fp&&fp.prototype,lp=Object.prototype,pp=Fl.RangeError,hp=zl.pack,yp=zl.unpack,dp=function(t){return[255&t]},vp=function(t){return[255&t,t>>8&255]},gp=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},bp=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},mp=function(t){return hp(t,23,4)},wp=function(t){return hp(t,52,8)},Ap=function(t,r){Xl(t.prototype,r,{get:function(){return ep(this)[r]}})},xp=function(t,r,e,n){var o=Wl(e),i=ep(t);if(o+r>i.byteLength)throw pp(ap);var a=ep(i.buffer).bytes,c=o+i.byteOffset,u=a.slice(c,c+r);return n?u:u.reverse()},Op=function(t,r,e,n,o,i){var a=Wl(e),c=ep(t);if(a+r>c.byteLength)throw pp(ap);for(var u=ep(c.buffer).bytes,f=a+c.byteOffset,s=n(+o),l=0;l<r;l++)u[f+l]=s[i?l:r-l-1]};if(Ul){var Sp=tp&&cp.name!==op;if($l((function(){cp(1)}))&&$l((function(){new cp(-1)}))&&!$l((function(){return new cp,new cp(1.5),new cp(NaN),Sp&&!rp})))Sp&&rp&&Hl(cp,"name",op);else{for(var Ep,Tp=(up=function(t){return Gl(this,up),new cp(Wl(t))}).prototype=cp.prototype,Rp=Jl(cp),_p=0;Rp.length>_p;)(Ep=Rp[_p++])in up||Hl(up,Ep,cp[Ep]);Tp.constructor=up}ql&&Kl(sp)!==lp&&ql(sp,lp);var jp=new fp(new up(2)),Lp=sp.setInt8;jp.setInt8(0,2147483648),jp.setInt8(1,2147483649),!jp.getInt8(0)&&jp.getInt8(1)||Bl(sp,{setInt8:function(t,r){Lp.call(this,t,r<<24>>24)},setUint8:function(t,r){Lp.call(this,t,r<<24>>24)}},{unsafe:!0})}else up=function(t){Gl(this,up,op);var r=Wl(t);np(this,{bytes:Ql.call(new Array(r),0),byteLength:r}),Nl||(this.byteLength=r)},fp=function(t,r,e){Gl(this,fp,ip),Gl(t,up,ip);var n=ep(t).byteLength,o=Yl(r);if(o<0||o>n)throw pp("Wrong offset");if(o+(e=void 0===e?n-o:Vl(e))>n)throw pp("Wrong length");np(this,{buffer:t,byteLength:e,byteOffset:o}),Nl||(this.buffer=t,this.byteLength=e,this.byteOffset=o)},Nl&&(Ap(up,"byteLength"),Ap(fp,"buffer"),Ap(fp,"byteLength"),Ap(fp,"byteOffset")),Bl(fp.prototype,{getInt8:function(t){return xp(this,1,t)[0]<<24>>24},getUint8:function(t){return xp(this,1,t)[0]},getInt16:function(t){var r=xp(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=xp(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return bp(xp(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return bp(xp(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return yp(xp(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return yp(xp(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){Op(this,1,t,dp,r)},setUint8:function(t,r){Op(this,1,t,dp,r)},setInt16:function(t,r){Op(this,2,t,vp,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){Op(this,2,t,vp,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){Op(this,4,t,gp,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){Op(this,4,t,gp,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){Op(this,4,t,mp,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){Op(this,8,t,wp,r,arguments.length>2?arguments[2]:void 0)}});Zl(up,op),Zl(fp,ip);var kp={ArrayBuffer:up,DataView:fp},Pp=P,Ip=Math.floor,Cp=Number.isInteger||function(t){return!Pp(t)&&isFinite(t)&&Ip(t)===t},Mp=ce,Fp=function(t){var r=Mp(t);if(r<0)throw RangeError("The argument can't be less than 0");return r},Np=function(t,r){var e=Fp(t);if(e%r)throw RangeError("Wrong offset");return e},Up=Nn,Dp=Q,Hp=function(t){if(Up(t))return t;throw TypeError(Dp(t)+" is not a constructor")},Bp=Hp,$p=yt,Gp=ve,Yp=bu,Vp=yu,Wp=fu,zp=Sn,Kp=hl.aTypedArrayConstructor,qp=en,Jp=s,Xp=h,Qp=wl,Zp=hl,th=kp,rh=xl,eh=w,nh=fr,oh=Cp,ih=ye,ah=El,ch=Np,uh=Ut,fh=gt,sh=gn,lh=P,ph=X,hh=Gi,yh=Za,dh=oe.f,vh=function(t){var r,e,n,o,i,a,c=Bp(this),u=$p(t),f=arguments.length,s=f>1?arguments[1]:void 0,l=void 0!==s,p=Vp(u);if(p&&!Wp(p))for(a=(i=Yp(u,p)).next,u=[];!(o=a.call(i)).done;)u.push(o.value);for(l&&f>2&&(s=zp(s,arguments[2],2)),e=Gp(u),n=new(Kp(c))(e),r=0;e>r;r++)n[r]=l?s(u[r],r):u[r];return n},gh=Xn.forEach,bh=lc,mh=Zt,wh=l,Ah=nc,xh=Br.get,Oh=Br.set,Sh=mh.f,Eh=wh.f,Th=Math.round,Rh=Jp.RangeError,_h=th.ArrayBuffer,jh=th.DataView,Lh=Zp.NATIVE_ARRAY_BUFFER_VIEWS,kh=Zp.TYPED_ARRAY_CONSTRUCTOR,Ph=Zp.TYPED_ARRAY_TAG,Ih=Zp.TypedArray,Ch=Zp.TypedArrayPrototype,Mh=Zp.aTypedArrayConstructor,Fh=Zp.isTypedArray,Nh="BYTES_PER_ELEMENT",Uh="Wrong length",Dh=function(t,r){for(var e=0,n=r.length,o=new(Mh(t))(n);n>e;)o[e]=r[e++];return o},Hh=function(t,r){Sh(t,r,{get:function(){return xh(this)[r]}})},Bh=function(t){var r;return t instanceof _h||"ArrayBuffer"==(r=sh(t))||"SharedArrayBuffer"==r},$h=function(t,r){return Fh(t)&&!ph(r)&&r in t&&oh(+r)&&r>=0},Gh=function(t,r){return r=uh(r),$h(t,r)?eh(2,t[r]):Eh(t,r)},Yh=function(t,r,e){return r=uh(r),!($h(t,r)&&lh(e)&&fh(e,"value"))||fh(e,"get")||fh(e,"set")||e.configurable||fh(e,"writable")&&!e.writable||fh(e,"enumerable")&&!e.enumerable?Sh(t,r,e):(t[r]=e.value,t)};Xp?(Lh||(wh.f=Gh,mh.f=Yh,Hh(Ch,"buffer"),Hh(Ch,"byteOffset"),Hh(Ch,"byteLength"),Hh(Ch,"length")),qp({target:"Object",stat:!0,forced:!Lh},{getOwnPropertyDescriptor:Gh,defineProperty:Yh}),Cs.exports=function(t,r,e){var n=t.match(/\d+$/)[0]/8,o=t+(e?"Clamped":"")+"Array",i="get"+t,a="set"+t,c=Jp[o],u=c,f=u&&u.prototype,s={},l=function(t,r){Sh(t,r,{get:function(){return function(t,r){var e=xh(t);return e.view[i](r*n+e.byteOffset,!0)}(this,r)},set:function(t){return function(t,r,o){var i=xh(t);e&&(o=(o=Th(o))<0?0:o>255?255:255&o),i.view[a](r*n+i.byteOffset,o,!0)}(this,r,t)},enumerable:!0})};Lh?Qp&&(u=r((function(t,r,e,i){return rh(t,u,o),Ah(lh(r)?Bh(r)?void 0!==i?new c(r,ch(e,n),i):void 0!==e?new c(r,ch(e,n)):new c(r):Fh(r)?Dh(u,r):vh.call(u,r):new c(ah(r)),t,u)})),yh&&yh(u,Ih),gh(dh(c),(function(t){t in u||nh(u,t,c[t])})),u.prototype=f):(u=r((function(t,r,e,i){rh(t,u,o);var a,c,f,s=0,p=0;if(lh(r)){if(!Bh(r))return Fh(r)?Dh(u,r):vh.call(u,r);a=r,p=ch(e,n);var h=r.byteLength;if(void 0===i){if(h%n)throw Rh(Uh);if((c=h-p)<0)throw Rh(Uh)}else if((c=ih(i)*n)+p>h)throw Rh(Uh);f=c/n}else f=ah(r),a=new _h(c=f*n);for(Oh(t,{buffer:a,byteOffset:p,byteLength:c,length:f,view:new jh(a)});s<f;)l(t,s++)})),yh&&yh(u,Ih),f=u.prototype=hh(Ch)),f.constructor!==u&&nh(f,"constructor",u),nh(f,kh,u),Ph&&nh(f,Ph,o),s[o]=u,qp({global:!0,forced:u!=c,sham:!Lh},s),Nh in u||nh(u,Nh,n),Nh in f||nh(f,Nh,n),bh(o)}):Cs.exports=function(){},(0,Cs.exports)("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}));var Vh=yt,Wh=le,zh=ve,Kh=Math.min,qh=[].copyWithin||function(t,r){var e=Vh(this),n=zh(e),o=Wh(t,n),i=Wh(r,n),a=arguments.length>2?arguments[2]:void 0,c=Kh((void 0===a?n:Wh(a,n))-i,n-o),u=1;for(i<o&&o<i+c&&(u=-1,i+=c-1,o+=c-1);c-- >0;)i in e?e[o]=e[i]:delete e[o],o+=u,i+=u;return e},Jh=qh,Xh=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("copyWithin",(function(t,r){return Jh.call(Xh(this),t,r,arguments.length>2?arguments[2]:void 0)}));var Qh=Xn.every,Zh=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("every",(function(t){return Qh(Zh(this),t,arguments.length>1?arguments[1]:void 0)}));var ty=Ml,ry=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("fill",(function(t){return ty.apply(ry(this),arguments)}));var ey=rr,ny=Hp,oy=Lt("species"),iy=function(t,r){var e,n=ey(t).constructor;return void 0===n||null==(e=ey(n)[oy])?r:ny(e)},ay=iy,cy=hl.TYPED_ARRAY_CONSTRUCTOR,uy=hl.aTypedArrayConstructor,fy=function(t){return uy(ay(t,t[cy]))},sy=function(t,r){for(var e=0,n=r.length,o=new t(n);n>e;)o[e]=r[e++];return o},ly=fy,py=Xn.filter,hy=function(t,r){return sy(ly(t),r)},yy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("filter",(function(t){var r=py(yy(this),t,arguments.length>1?arguments[1]:void 0);return hy(this,r)}));var dy=Xn.find,vy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("find",(function(t){return dy(vy(this),t,arguments.length>1?arguments[1]:void 0)}));var gy=Xn.findIndex,by=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("findIndex",(function(t){return gy(by(this),t,arguments.length>1?arguments[1]:void 0)}));var my=Xn.forEach,wy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("forEach",(function(t){my(wy(this),t,arguments.length>1?arguments[1]:void 0)}));var Ay=Ae.includes,xy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("includes",(function(t){return Ay(xy(this),t,arguments.length>1?arguments[1]:void 0)}));var Oy=Ae.indexOf,Sy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("indexOf",(function(t){return Oy(Sy(this),t,arguments.length>1?arguments[1]:void 0)}));var Ey=s,Ty=zr.PROPER,Ry=hl,_y=us,jy=Lt("iterator"),Ly=Ey.Uint8Array,ky=_y.values,Py=_y.keys,Iy=_y.entries,Cy=Ry.aTypedArray,My=Ry.exportTypedArrayMethod,Fy=Ly&&Ly.prototype[jy],Ny=!!Fy&&"values"===Fy.name,Uy=function(){return ky.call(Cy(this))};My("entries",(function(){return Iy.call(Cy(this))})),My("keys",(function(){return Py.call(Cy(this))})),My("values",Uy,Ty&&!Ny),My(jy,Uy,Ty&&!Ny);var Dy=hl.aTypedArray,Hy=[].join;(0,hl.exportTypedArrayMethod)("join",(function(t){return Hy.apply(Dy(this),arguments)}));var By=j,$y=ce,Gy=ve,Yy=Zn,Vy=Math.min,Wy=[].lastIndexOf,zy=!!Wy&&1/[1].lastIndexOf(1,-0)<0,Ky=Yy("lastIndexOf"),qy=zy||!Ky?function(t){if(zy)return Wy.apply(this,arguments)||0;var r=By(this),e=Gy(r),n=e-1;for(arguments.length>1&&(n=Vy(n,$y(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return-1}:Wy,Jy=qy,Xy=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("lastIndexOf",(function(t){return Jy.apply(Xy(this),arguments)}));var Qy=Xn.map,Zy=fy,td=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("map",(function(t){return Qy(td(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(Zy(t))(r)}))}));var rd=rt,ed=yt,nd=E,od=ve,id=function(t){return function(r,e,n,o){rd(e);var i=ed(r),a=nd(i),c=od(i),u=t?c-1:0,f=t?-1:1;if(n<2)for(;;){if(u in a){o=a[u],u+=f;break}if(u+=f,t?u<0:c<=u)throw TypeError("Reduce of empty array with no initial value")}for(;t?u>=0:c>u;u+=f)u in a&&(o=e(o,a[u],u,i));return o}},ad={left:id(!1),right:id(!0)},cd=ad.left,ud=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("reduce",(function(t){return cd(ud(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}));var fd=ad.right,sd=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("reduceRight",(function(t){return fd(sd(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}));var ld=hl.aTypedArray,pd=hl.exportTypedArrayMethod,hd=Math.floor;pd("reverse",(function(){for(var t,r=this,e=ld(r).length,n=hd(e/2),o=0;o<n;)t=r[o],r[o++]=r[--e],r[e]=t;return r}));var yd=ve,dd=Np,vd=yt,gd=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("set",(function(t){gd(this);var r=dd(arguments.length>1?arguments[1]:void 0,1),e=this.length,n=vd(t),o=yd(n),i=0;if(o+r>e)throw RangeError("Wrong length");for(;i<o;)this[r+i]=n[i++]}),p((function(){new Int8Array(1).set({})})));var bd=fy,md=hl.aTypedArray,wd=[].slice;(0,hl.exportTypedArrayMethod)("slice",(function(t,r){for(var e=wd.call(md(this),t,r),n=bd(this),o=0,i=e.length,a=new n(i);i>o;)a[o]=e[o++];return a}),p((function(){new Int8Array(1).slice()})));var Ad=Xn.some,xd=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("some",(function(t){return Ad(xd(this),t,arguments.length>1?arguments[1]:void 0)}));var Od=Math.floor,Sd=function(t,r){var e=t.length,n=Od(e/2);return e<8?Ed(t,r):Td(Sd(t.slice(0,n),r),Sd(t.slice(n),r),r)},Ed=function(t,r){for(var e,n,o=t.length,i=1;i<o;){for(n=i,e=t[i];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==i++&&(t[n]=e)}return t},Td=function(t,r,e){for(var n=t.length,o=r.length,i=0,a=0,c=[];i<n||a<o;)i<n&&a<o?c.push(e(t[i],r[a])<=0?t[i++]:r[a++]):c.push(i<n?t[i++]:r[a++]);return c},Rd=Sd,_d=N.match(/firefox\/(\d+)/i),jd=!!_d&&+_d[1],Ld=/MSIE|Trident/.test(N),kd=N.match(/AppleWebKit\/(\d+)\./),Pd=!!kd&&+kd[1],Id=p,Cd=rt,Md=ve,Fd=Rd,Nd=jd,Ud=Ld,Dd=Y,Hd=Pd,Bd=hl.aTypedArray,$d=hl.exportTypedArrayMethod,Gd=s.Uint16Array,Yd=Gd&&Gd.prototype.sort,Vd=!!Yd&&!Id((function(){var t=new Gd(2);t.sort(null),t.sort({})})),Wd=!!Yd&&!Id((function(){if(Dd)return Dd<74;if(Nd)return Nd<67;if(Ud)return!0;if(Hd)return Hd<602;var t,r,e=new Gd(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(e.sort((function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(e[t]!==n[t])return!0}));$d("sort",(function(t){var r=this;if(void 0!==t&&Cd(t),Wd)return Yd.call(r,t);Bd(r);var e,n=Md(r),o=Array(n);for(e=0;e<n;e++)o[e]=r[e];for(o=Fd(r,function(t){return function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e}}(t)),e=0;e<n;e++)r[e]=o[e];return r}),!Wd||Vd);var zd=ye,Kd=le,qd=fy,Jd=hl.aTypedArray;(0,hl.exportTypedArrayMethod)("subarray",(function(t,r){var e=Jd(this),n=e.length,o=Kd(t,n);return new(qd(e))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,zd((void 0===r?n:Kd(r,n))-o))}));var Xd=hl,Qd=p,Zd=s.Int8Array,tv=Xd.aTypedArray,rv=Xd.exportTypedArrayMethod,ev=[].toLocaleString,nv=[].slice,ov=!!Zd&&Qd((function(){ev.call(new Zd(1))}));rv("toLocaleString",(function(){return ev.apply(ov?nv.call(tv(this)):tv(this),arguments)}),Qd((function(){return[1,2].toLocaleString()!=new Zd([1,2]).toLocaleString()}))||!Qd((function(){Zd.prototype.toLocaleString.call([1,2])})));var iv=hl.exportTypedArrayMethod,av=p,cv=s.Uint8Array,uv=cv&&cv.prototype||{},fv=[].toString,sv=[].join;av((function(){fv.call({})}))&&(fv=function(){return sv.call(this)});var lv=uv.toString!=fv;iv("toString",fv,lv);var pv=en,hv=p,yv=rr,dv=le,vv=ye,gv=iy,bv=kp.ArrayBuffer,mv=kp.DataView,wv=bv.prototype.slice;function Av(t,r,e,n,o){return xv.apply(this,arguments)}function xv(){return(xv=r(u.mark((function t(r,e,n,o,i){var a,c,f,s;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r.preLoads.filter((function(t){return/.*\.js$/.test(t.href)})),a=Ev(r.preLoads),t.next=4,Sv(r.styles,n,o);case 4:return c=t.sent,t.next=7,Ov([].concat(Ho(s),Ho(r.scripts)));case 7:return f=t.sent,t.abrupt("return",{preLoads:a,styles:c,template:r.template,scripts:f});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ov(t){var r=[];return t.forEach((function(t){r.push(t.innerHTML?t.innerHTML:fetch(t.src||t.href).then((function(t){return t.text()})).then((function(t){return t})).catch((function(t){throw new Error("dealScripts error:",t)})))})),Promise.all(r).then((function(t){return t.join(";\n")}))}function Sv(t,r,e){if(r.cssScope){var n=[];return t.forEach((function(t){n.push("string"==typeof t?t:fetch(t.href).then((function(t){return t.text()})).then((function(t){return t})).catch((function(t){throw new Error("dealStyles error:",t)})))})),Promise.all(n).then((function(t){var n,o,i;o="string"==typeof r.cssScope?r.cssScope:"u"+([1e3]+-1e3+-4e3+-8e3).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})),e.classList.add(o),n=t.join(""),i=document.createElement("style");return n=n.replace(/(\s*)([\.|#]?.*?)(\s*{\s*[^\}]*?\s*\})/g,(function(t,r,e,n){return"body"===e&&(e=""),"".concat(r," .").concat(o," ").concat(e," ").concat(n)})),i.innerHTML=n,[i]}))}return t.forEach((function(t){var r;"string"==typeof t?(r=document.createElement("style")).innerHTML=t:(r=document.createElement("link"),r=Object.assign(r,t))})),[]}function Ev(t){var r=document.createDocumentFragment(),e=[];return t.forEach((function(t){var n=document.createElement("link");n=Object.assign(n,t),t.__mounted__=!0,e.push(n),r.appendChild(n)})),document.head.appendChild(r),e}pv({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:hv((function(){return!new bv(2).slice(1,void 0).byteLength}))},{slice:function(t,r){if(void 0!==wv&&void 0===r)return wv.call(yv(this),t);for(var e=yv(this).byteLength,n=dv(t,e),o=dv(void 0===r?e:r,e),i=new(gv(this,bv))(vv(o-n)),a=new mv(this),c=new mv(i),u=0;n<o;)c.setUint8(u++,a.getUint8(n++));return i}});var Tv={registerApp:function(t,r,e){var n=e.activeRoute?e.activeRoute:r;window.location.hash.slice(1)!==n&&t.$router.push(n)},initLifecycle:function(t,e,n,o){var i=t.created,a=t.mounted,c=t.destroyed;t.beforeCreate.push((function(){var t=this;this.$nextTick((function(){o.call("bootstrap",e,n,t.$el,t)})),o.call("beforeCreateCb",this,e)})),t.created=r(u.mark((function t(){return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i&&i.call(this),o.call("createdCb",this,e);case 2:case"end":return t.stop()}}),t,this)}))),t.mounted=function(){a&&a.call(this),o.call("mountedCb",this,e)},t.destroyed=function(){c&&c.call(this),o.call("unmountedCb",this,e)}}},Rv=s,_v={},jv=Lt;_v.f=jv;var Lv=Rv,kv=gt,Pv=_v,Iv=Zt.f,Cv=function(t){var r=Lv.Symbol||(Lv.Symbol={});kv(r,t)||Iv(r,t,{value:Pv.f(t)})};Cv("unscopables");var Mv={},Fv=j,Nv=oe.f,Uv={}.toString,Dv="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Mv.f=function(t){return Dv&&"[object Window]"==Uv.call(t)?function(t){try{return Nv(t)}catch(t){return Dv.slice()}}(t):Nv(Fv(t))};var Hv=en,Bv=s,$v=F,Gv=h,Yv=z,Vv=p,Wv=gt,zv=Tn,Kv=L,qv=P,Jv=X,Xv=rr,Qv=yt,Zv=j,tg=Ut,rg=gi,eg=w,ng=Gi,og=Ti,ig=oe,ag=Mv,cg=Le,ug=l,fg=Zt,sg=y,lg=sr.exports,pg=at.exports,hg=Tr,yg=wt,dg=Lt,vg=_v,gg=Cv,bg=ef,mg=Br,wg=Xn.forEach,Ag=Er("hidden"),xg="Symbol",Og=dg("toPrimitive"),Sg=mg.set,Eg=mg.getterFor(xg),Tg=Object.prototype,Rg=Bv.Symbol,_g=$v("JSON","stringify"),jg=ug.f,Lg=fg.f,kg=ag.f,Pg=sg.f,Ig=pg("symbols"),Cg=pg("op-symbols"),Mg=pg("string-to-symbol-registry"),Fg=pg("symbol-to-string-registry"),Ng=pg("wks"),Ug=Bv.QObject,Dg=!Ug||!Ug.prototype||!Ug.prototype.findChild,Hg=Gv&&Vv((function(){return 7!=ng(Lg({},"a",{get:function(){return Lg(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=jg(Tg,r);n&&delete Tg[r],Lg(t,r,e),n&&t!==Tg&&Lg(Tg,r,n)}:Lg,Bg=function(t,r){var e=Ig[t]=ng(Rg.prototype);return Sg(e,{type:xg,tag:t,description:r}),Gv||(e.description=r),e},$g=function(t,r,e){t===Tg&&$g(Cg,r,e),Xv(t);var n=tg(r);return Xv(e),Wv(Ig,n)?(e.enumerable?(Wv(t,Ag)&&t[Ag][n]&&(t[Ag][n]=!1),e=ng(e,{enumerable:eg(0,!1)})):(Wv(t,Ag)||Lg(t,Ag,eg(1,{})),t[Ag][n]=!0),Hg(t,n,e)):Lg(t,n,e)},Gg=function(t,r){Xv(t);var e=Zv(r),n=og(e).concat(zg(e));return wg(n,(function(r){Gv&&!Yg.call(e,r)||$g(t,r,e[r])})),t},Yg=function(t){var r=tg(t),e=Pg.call(this,r);return!(this===Tg&&Wv(Ig,r)&&!Wv(Cg,r))&&(!(e||!Wv(this,r)||!Wv(Ig,r)||Wv(this,Ag)&&this[Ag][r])||e)},Vg=function(t,r){var e=Zv(t),n=tg(r);if(e!==Tg||!Wv(Ig,n)||Wv(Cg,n)){var o=jg(e,n);return!o||!Wv(Ig,n)||Wv(e,Ag)&&e[Ag][n]||(o.enumerable=!0),o}},Wg=function(t){var r=kg(Zv(t)),e=[];return wg(r,(function(t){Wv(Ig,t)||Wv(hg,t)||e.push(t)})),e},zg=function(t){var r=t===Tg,e=kg(r?Cg:Zv(t)),n=[];return wg(e,(function(t){!Wv(Ig,t)||r&&!Wv(Tg,t)||n.push(Ig[t])})),n};(Yv||(Rg=function(){if(this instanceof Rg)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?rg(arguments[0]):void 0,r=yg(t),e=function(t){this===Tg&&e.call(Cg,t),Wv(this,Ag)&&Wv(this[Ag],r)&&(this[Ag][r]=!1),Hg(this,r,eg(1,t))};return Gv&&Dg&&Hg(Tg,r,{configurable:!0,set:e}),Bg(r,t)},lg(Rg.prototype,"toString",(function(){return Eg(this).tag})),lg(Rg,"withoutSetter",(function(t){return Bg(yg(t),t)})),sg.f=Yg,fg.f=$g,ug.f=Vg,ig.f=ag.f=Wg,cg.f=zg,vg.f=function(t){return Bg(dg(t),t)},Gv&&(Lg(Rg.prototype,"description",{configurable:!0,get:function(){return Eg(this).description}}),lg(Tg,"propertyIsEnumerable",Yg,{unsafe:!0}))),Hv({global:!0,wrap:!0,forced:!Yv,sham:!Yv},{Symbol:Rg}),wg(og(Ng),(function(t){gg(t)})),Hv({target:xg,stat:!0,forced:!Yv},{for:function(t){var r=rg(t);if(Wv(Mg,r))return Mg[r];var e=Rg(r);return Mg[r]=e,Fg[e]=r,e},keyFor:function(t){if(!Jv(t))throw TypeError(t+" is not a symbol");if(Wv(Fg,t))return Fg[t]},useSetter:function(){Dg=!0},useSimple:function(){Dg=!1}}),Hv({target:"Object",stat:!0,forced:!Yv,sham:!Gv},{create:function(t,r){return void 0===r?ng(t):Gg(ng(t),r)},defineProperty:$g,defineProperties:Gg,getOwnPropertyDescriptor:Vg}),Hv({target:"Object",stat:!0,forced:!Yv},{getOwnPropertyNames:Wg,getOwnPropertySymbols:zg}),Hv({target:"Object",stat:!0,forced:Vv((function(){cg.f(1)}))},{getOwnPropertySymbols:function(t){return cg.f(Qv(t))}}),_g)&&Hv({target:"JSON",stat:!0,forced:!Yv||Vv((function(){var t=Rg();return"[null]"!=_g([t])||"{}"!=_g({a:t})||"{}"!=_g(Object(t))}))},{stringify:function(t,r,e){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=r,(qv(r)||void 0!==t)&&!Jv(t))return zv(r)||(r=function(t,r){if(Kv(n)&&(r=n.call(this,t,r)),!Jv(r))return r}),o[1]=r,_g.apply(null,o)}});if(!Rg.prototype[Og]){var Kg=Rg.prototype.valueOf;lg(Rg.prototype,Og,(function(){return Kg.apply(this,arguments)}))}bg(Rg,xg),hg[Ag]=!0;var qg=en,Jg=h,Xg=s,Qg=gt,Zg=L,tb=P,rb=Zt.f,eb=De,nb=Xg.Symbol;if(Jg&&Zg(nb)&&(!("description"in nb.prototype)||void 0!==nb().description)){var ob={},ib=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof ib?new nb(t):void 0===t?nb():nb(t);return""===t&&(ob[r]=!0),r};eb(ib,nb);var ab=ib.prototype=nb.prototype;ab.constructor=ib;var cb=ab.toString,ub="Symbol(test)"==String(nb("test")),fb=/^Symbol\((.*)\)[^)]+$/;rb(ab,"description",{configurable:!0,get:function(){var t=tb(this)?this.valueOf():this,r=cb.call(t);if(Qg(ob,t))return"";var e=ub?r.slice(7,-1):r.replace(fb,"$1");return""===e?void 0:e}}),qg({global:!0,forced:!0},{Symbol:ib})}var sb=gt,lb=function(t){return void 0!==t&&(sb(t,"value")||sb(t,"writable"))},pb=P,hb=rr,yb=lb,db=l,vb=Yu;en({target:"Reflect",stat:!0},{get:function t(r,e){var n,o,i=arguments.length<3?r:arguments[2];return hb(r)===i?r[e]:(n=db.f(r,e))?yb(n)?n.value:void 0===n.get?void 0:n.get.call(i):pb(o=vb(r))?t(o,e,i):void 0}});var gb=en,bb=rr,mb=P,wb=lb,Ab=Zt,xb=l,Ob=Yu,Sb=w;var Eb=p((function(){var t=function(){},r=Ab.f(new t,"a",{configurable:!0});return!1!==Reflect.set(t.prototype,"a",1,r)}));gb({target:"Reflect",stat:!0,forced:Eb},{set:function t(r,e,n){var o,i,a,c=arguments.length<4?r:arguments[3],u=xb.f(bb(r),e);if(!u){if(mb(i=Ob(r)))return t(i,e,n,c);u=Sb(0)}if(wb(u)){if(!1===u.writable||!mb(c))return!1;if(o=xb.f(c,e)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,Ab.f(c,e,o)}else Ab.f(c,e,Sb(0,n))}else{if(void 0===(a=u.set))return!1;a.call(c,n)}return!0}});var Tb=h,Rb=rr,_b=Ut,jb=Zt;en({target:"Reflect",stat:!0,forced:p((function(){Reflect.defineProperty(jb.f({},1,{value:1}),1,{value:2})})),sham:!Tb},{defineProperty:function(t,r,e){Rb(t);var n=_b(r);Rb(e);try{return jb.f(t,n,e),!0}catch(t){return!1}}});var Lb=RegExp("^".concat(Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),"$"));function kb(t){return function(t){var r=oi(t);return null!=t&&"function"===r}(t)&&Lb.test(t)}function Pb(t){return t="with (proxyTarget){\n ".concat("const window = this;const self = this;","\n").concat(t,"\n}"),new Function("proxyTarget",t)}function Ib(t,r,e,n,o){var i={webpackJsonp:null,webpackHotUpdate:null,__BaseApp__:r,__isSandBox__:!0,registerApp:function(t){o.call("registerApp",t,e,n)}},a=["Object","eval","String","Number","Function","Array","Promise","Date","RegExp"],c=new Proxy(t,{get:function(t,r){if(r!==Symbol.unscopables){if(a.includes(r))return Reflect.get(t,r);var e=Reflect.get(t,r);return kb(e)?e.bind(null):"window"===r||"self"===r?i:"WINDOW"===r?t:"webpackJsonp"===r?Reflect.get(i,r):"webpackHotUpdate"===r?Reflect.get(t,r):Reflect.get(i,r)||Reflect.get(t,r)}},has:function(t,r){return!0},set:function(t,r,e){return Reflect.set(i,r,e),!0},defineProperty:function(t,r,e){return Reflect.defineProperty(i,r,e)}});return c}function Cb(t,r,e,n,o,i){var a=document.createDocumentFragment(),c=document.createDocumentFragment();t.template.forEach((function(t){c.appendChild(t)})),r.appendChild(c),t.styles.filter((function(t){return!t.__mounted__})).forEach((function(t){t.__mounted__=!0,a.appendChild(t)})),t.preLoads.filter((function(t){return!t.__mounted__})).forEach((function(t){t.__mounted__=!0,a.appendChild(t)})),document.head.appendChild(a),function(t){var r=Ib(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window||this||self,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},arguments.length>3?arguments[3]:void 0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},arguments.length>5?arguments[5]:void 0);Pb(t).call(r,r)}(t.scripts,window,e,n,o,i)}var Mb=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),i(this,"syncHook",new di),i(this,"initLifecycle",null),i(this,"mountedCb",null),i(this,"unmountedCb",null),i(this,"beforeCreateCb",null),i(this,"createdCb",null),i(this,"sourcesCache",{}),i(this,"Import",function(t,r,e){var n=this;return r?t instanceof Promise?t.then((function(t){return n.initLifecycle(t.default||t,r,e,n.syncHook),t})):(this.initLifecycle(t,r,e,this.syncHook),t):t}.bind(this));var n=Object.assign(Tv,r);this.init(n)}return o(t,[{key:"init",value:function(t){var e=this;this.initLifecycle=t.initLifecycle,this.syncHook.tap("registerApp",t.registerApp),this.syncHook.tap("bootstrap",function(){var t=r(u.mark((function t(r,n,o,i){var a,c;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.sourcesCache[r])){t.next=5;break}Cb(a,o,i,r,n,e.syncHook),t.next=11;break;case 5:return t.next=7,Qf(r,n);case 7:c=t.sent,document.head.children.forEach((function(t){t.isMain=!0})),Av(c,r,n,o,e).then((function(t){Cb(t,o,i,r,n,e.syncHook),e.sourcesCache[r]=t}));case 11:case"end":return t.stop()}}),t)})));return function(r,e,n,o){return t.apply(this,arguments)}}()),this.syncHook.tap("beforeCreateCb",(function(t,r){e.beforeCreateCb&&e.beforeCreateCb(t,r)})),this.syncHook.tap("createdCb",(function(t,r){e.createdCb&&e.createdCb(t,r)})),this.syncHook.tap("mountedCb",(function(t,r){e.mountedCb&&e.mountedCb(t,r)})),this.syncHook.tap("unmountedCb",(function(t,r){e.rollBcak(r),e.unmountedCb&&e.unmountedCb(t,r)})),this.syncHook.tap("beforeCreate",(function(t){e.beforeCreateCb=t})),this.syncHook.tap("created",(function(t){e.createdCb=t})),this.syncHook.tap("mounted",(function(t){e.mountedCb=t})),this.syncHook.tap("unmounted",(function(t){e.unmountedCb=t}))}},{key:"rollBcak",value:function(t){var r=this.sourcesCache[t]||{};(r.styles||[]).filter((function(t){return t.__mounted__})).forEach((function(t){t.__mounted__=!1,t.remove()})),(r.preLoads||[]).filter((function(t){return t.__mounted__})).forEach((function(t){t.__mounted__=!1,t.remove()})),Ho(document.head.children).filter((function(t){return!t.isMain})).forEach((function(t){t.isMain||t.remove()}))}},{key:"on",value:function(t){for(var r,e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return(r=this.syncHook).call.apply(r,[t].concat(n)),this}}]),t}();return Mb}));
=======
/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:48:51
 * @Last Modified by:   caiwu
 * @Last Modified time: 2021-04-10 22:48:51
 */
class customError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:49:03
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-10-22 01:13:39
 */
class SyncHook {
  constructor(args) {
    this.args = args;
    this.tasks = {};
  }
  tap(hookName, task) {
    if (!this.tasks[hookName]) {
      this.tasks[hookName] = task;
    } else {
      throw customError(
        'SyncHookTapError',
        `A SyncHook named ${hookName} already exists, But you can run Instance.remove(hookName) before defining it `
      )
    }
  }
  call(hookName, ...args) {
    if (!this.tasks[hookName]) {
      throw new customError('SyncHookCallError', `The SyncHook named ${hookName} not exists;`)
    }
    if (this.args) {
      if (args.length < this.args.length) {
        throw new customError(
          'SyncHookCallError',
          `${this.args.length} arguments required;but ${args.length} provided`
        )
      }
      args = args.slice(0, this.args.length);
    }
    this.tasks[hookName](...args);
  }
  remove(hookName) {
    if (!this.tasks[hookName]) {
      throw new customError('SyncHookCallError', `The SyncHook named ${hookName} not exists;`)
    }
    this.tasks[hookName] = null;
  }
}

/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:48:13
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-29 23:58:39
 */
function htmlLoader(entry, option) {
  let defaultOpt = {
    origin: window.location.origin,
    cssScope: false,
    proxy: false,
    activeRoute: '',
    prefix: '',
    pathRewrite: {
      '': '',
    },
  };
  defaultOpt = Object.assign(defaultOpt, option);
  let entryUrl = defaultOpt.proxy ? entry : defaultOpt.origin;
  return fetch(entryUrl)
    .then((res) => res.text())
    .then((data) => {
      let parser = new DOMParser();
      let dom = parser.parseFromString(data, 'text/html');
      console.log(dom.head.children);
      return domAnalysis(entry, dom, defaultOpt)
    })
}
// dom analysis
function domAnalysis(entry, dom, defaultOpt) {
  let result = { scripts: [], styles: [], template: null, preLoads: [] };
  scriptPicker(entry, dom, result, defaultOpt);
  stylePicker(entry, dom, result, defaultOpt);
  templatePicker(dom, result);
  return result
}
// pcik scripts from htmlEntry
function scriptPicker(entry, dom, result, defaultOpt) {
  let scripts = dom.querySelectorAll('script');
  let origin = window.location.origin.replace(/\//g, '\\/');
  let reg = new RegExp(`(${origin})*(.*)`);
  result.scripts = Array.from(scripts).map((ele) => {
    ele.remove();
    let src = ele.src.replace(reg, '$2');
    return {
      src: markPath(src, entry, defaultOpt),
      defer: ele.defer,
      async: ele.async,
      innerHTML: ele.innerHTML,
    }
  });
}
// pcik styles from htmlEntry
function stylePicker(entry, dom, result, defaultOpt) {
  let styles = Array.from(dom.head.children).filter((ele) => ['LINK', 'STYLE'].includes(ele.tagName));
  let origin = window.location.origin.replace(/\//g, '\\/');
  let reg = new RegExp(`(${origin})*(.*)`);
  styles.map((ele) => {
    if (ele.tagName === 'LINK') {
      let href = ele.href.replace(reg, '$2');
      if (ele.rel === 'stylesheet') {
        result.styles.push({
          href: markPath(href, entry, defaultOpt),
          rel: ele.rel,
        });
      } else {
        result.preLoads.push({
          href: markPath(href, entry, defaultOpt),
          rel: ele.rel,
          as: ele.as,
          sizes: ele.sizes.value,
        });
      }
    } else {
      result.styles.push(ele.innerHTML);
    }
    ele.remove();
  });
}
// pcik template from htmlEntry
function templatePicker(dom, result) {
  let childNodes = Array.from(dom.body.childNodes);
  result.template = childNodes;
}

function markPath(src, entry, defaultOpt) {
  if (src) {
    if (/^http(s){0,1}/.test(src)) {
      return src
    } else {
      const prefix = defaultOpt.prefix === undefined || defaultOpt.prefix === null ? entry : defaultOpt.prefix;
      const replaceKey = Object.keys(defaultOpt.pathRewrite)[0] || '',
        replaceValue = Object.values(defaultOpt.pathRewrite)[0] || '';
      return defaultOpt.proxy ? prefix + src : defaultOpt.origin + src.replace(replaceKey, replaceValue)
    }
  } else {
    return null
  }
}

/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-16 16:36:52
 */
function uuid() {
  return  ([1e3] + -1e3 + -4e3 + -8e3).replace(/[018]/g, c =>(c ^(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-07-16 17:10:43
 */
async function resourceParser(resources, entry, option, el, ctx) {
  let preLoads, styles, scripts;
  const preLoadScript = resources.preLoads.filter((ele) => /.*\.js$/.test(ele.href));
  preLoads = dealPreloads(resources.preLoads);
  styles = await dealStyles(resources.styles, option, el);
  scripts = await dealScripts([...preLoadScript, ...resources.scripts]);
  return { preLoads, styles, template: resources.template, scripts }
}
function dealScripts(scripts) {
  let promiseList = [];
  scripts.forEach((ele) => {
    promiseList.push(
      ele.innerHTML
        ? ele.innerHTML
        : fetch(ele.src || ele.href)
            .then((res) => res.text())
            .then((data) => data)
            .catch((error) => {
              throw new Error('dealScripts error:', error)
            })
    );
  });

  return Promise.all(promiseList).then((res) => {
    let code;
    code = res.join(';\n');
    return code
  })
}
function dealStyles(styles, option, el) {
  let styleList = [];
  if (!option.cssScope) {
    styles.forEach((ele) => {
      let style;
      if (typeof ele === 'string') {
        style = document.createElement('style');
        style.innerHTML = ele;
      } else {
        style = document.createElement('link');
        style = Object.assign(style, ele);
      }
    });
    return styleList
  } else {
    let promiseList = [];
    styles.forEach((ele) => {
      promiseList.push(
        typeof ele === 'string'
          ? ele
          : fetch(ele.href)
              .then((res) => res.text())
              .then((data) => data)
              .catch((error) => {
                throw new Error('dealStyles error:', error)
              })
      );
    });

    return Promise.all(promiseList).then((res) => {
      let innerHTML, className, style;
      className = typeof option.cssScope === 'string' ? option.cssScope : 'u' + uuid();
      el.classList.add(className);
      innerHTML = res.join('');
      style = document.createElement('style');
      const reg = /(\s*)([\.|#]?.*?)(\s*{\s*[^\}]*?\s*\})/g;
      innerHTML = innerHTML.replace(reg, (match, $1, $2, $3) => {
        if ($2 === 'body') $2 = '';
        return `${$1} .${className} ${$2} ${$3}`
      });
      style.innerHTML = innerHTML;
      return [style]
    })
  }
}
function dealPreloads(preLoads) {
  let fragment = document.createDocumentFragment();
  let links = [];
  preLoads.forEach((ele) => {
    let link = document.createElement('link');
    link = Object.assign(link, ele);
    ele.__mounted__ = true;
    links.push(link);
    fragment.appendChild(link);
  });
  document.head.appendChild(fragment);
  return links
}

/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-26 17:12:52
 */
function registerApp(app, entry, option) {
  const activeRoute = option.activeRoute ? option.activeRoute : entry;
  const prevRoute = window.location.hash.slice(1);
  if (prevRoute !== activeRoute) {
    app.$router.push(activeRoute);
  }
}

/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:47:07
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-27 01:17:56
 */
function initLifecycle(vueOptions, entry, option, hook) {
  let { created, mounted, destroyed } = vueOptions;
  vueOptions.beforeCreate.push(function() {
    this.$nextTick(() => {
      hook.call('bootstrap', entry, option, this.$el, this);
    });
    hook.call('beforeCreateCb', this, entry);
  });
  vueOptions.created = async function() {
    created && created.call(this);
    hook.call('createdCb', this, entry);
  };
  vueOptions.mounted = function() {
    mounted && mounted.call(this);
    hook.call('mountedCb', this, entry);
  };
  vueOptions.destroyed = function() {
    destroyed && destroyed.call(this);
    hook.call('unmountedCb', this, entry);
  };
}

/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-07-27 14:19:15
 */
var defaultConfig = {
    registerApp,
    initLifecycle
};

/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-20 11:20:17
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reIsNative = RegExp(`^${
  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
}$`);
function isFunction(value) {
  const type = typeof value;
  return value != null && type === 'function'
}
function isNative(value) {
  return isFunction(value) && reIsNative.test(value)
}

/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-26 16:30:13
 */

const initCode = `const window = this;const self = this;`;
function execCode(code) {
  code = `with (proxyTarget){\n ${initCode}\n${code}\n}`;
  return new Function('proxyTarget', code)
}

function proxyTarget(target, app, entry, option, hook) {
  let window = {
    webpackJsonp: null,
    webpackHotUpdate: null,
    __BaseApp__: app,
    __isSandBox__: true,
    registerApp: (childApp) => {
      hook.call('registerApp', childApp, entry, option);
    },
  };
  let ignoreList = ['Object', 'eval', 'String', 'Number', 'Function', 'Array', 'Promise', 'Date', 'RegExp'];
  let proxyTarget = new Proxy(target, {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return undefined
      }
      if (ignoreList.includes(key)) {
        return Reflect.get(target, key)
      }
      const value = Reflect.get(target, key);
      if (isNative(value)) {
        return value.bind(null)
      }
      if (key === 'window' || key === 'self') {
        return window
      }
      if (key === 'WINDOW') {
        return target
      }
      if (key === 'webpackJsonp') {
        return Reflect.get(window, key)
      }
      if (key === 'webpackHotUpdate') {
        return Reflect.get(target, key)
      }
      return Reflect.get(window, key) || Reflect.get(target, key)
    },
    has(target, key) {
      return true
    },
    set(target, key, value) {
      Reflect.set(window, key, value);
      return true
    },
    defineProperty: function(target, prop, descriptor) {
      return Reflect.defineProperty(window, prop, descriptor)
    },
  });
  return proxyTarget
}
function createSandbox(code, target = window || this || self, app = {}, entry, option = {}, hook) {
  let proxy = proxyTarget(target, app, entry, option, hook);
  execCode(code).call(proxy, proxy);
}

function exec(parseredResources, el, app, entry, option, hook) {
  console.log(parseredResources);
  let fragment = document.createDocumentFragment(),
    templateFragment = document.createDocumentFragment();
  parseredResources.template.forEach((childNode) => {
    templateFragment.appendChild(childNode);
  });
  el.appendChild(templateFragment);
  parseredResources.styles
    .filter((ele) => !ele.__mounted__)
    .forEach((style) => {
      style.__mounted__ = true;
      fragment.appendChild(style);
    });
  parseredResources.preLoads
    .filter((ele) => !ele.__mounted__)
    .forEach((preLoad) => {
      preLoad.__mounted__ = true;
      fragment.appendChild(preLoad);
    });
  document.head.appendChild(fragment);
  createSandbox(parseredResources.scripts, window, app, entry, option, hook);
}

function markHeader() {
  document.head.children.forEach((ele) => {
    ele.isMain = true;
  });
}
function clearExtra() {
[...document.head.children]
    .filter((ele) => !ele.isMain)
    .forEach((i) => {
      if (!i.isMain) {
        console.log(i);
        i.remove();
      }
    });
}

/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:45:01
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-27 23:24:46
 */

class ComponentImport {
  syncHook = new SyncHook();
  initLifecycle = null;
  mountedCb = null;
  unmountedCb = null;
  beforeCreateCb = null;
  createdCb = null;
  sourcesCache = {};
  constructor(config = {}) {
    let conf = Object.assign(defaultConfig, config);
    this.init(conf);
  }
  init(conf) {
    // 注入生命周期
    this.initLifecycle = conf.initLifecycle;
    this.syncHook.tap('registerApp', conf.registerApp);
    this.syncHook.tap('bootstrap', async (entry, option, el, app) => {
      let parseredResources = this.sourcesCache[entry];
      if (parseredResources) {
        exec(parseredResources, el, app, entry, option, this.syncHook);
      } else {
        let resources = await htmlLoader(entry, option);
        console.log(resources);
        markHeader();
        resourceParser(resources, entry, option, el).then((parseredResources) => {
          exec(parseredResources, el, app, entry, option, this.syncHook);
          this.sourcesCache[entry] = parseredResources;
        });
      }
    });
    this.syncHook.tap('beforeCreateCb', (app, entry) => {
      this.beforeCreateCb && this.beforeCreateCb(app, entry);
    });
    this.syncHook.tap('createdCb', (app, entry) => {
      this.createdCb && this.createdCb(app, entry);
    });
    this.syncHook.tap('mountedCb', (app, entry) => {
      this.mountedCb && this.mountedCb(app, entry);
    });
    this.syncHook.tap('unmountedCb', (app, entry) => {
      this.rollBcak(entry);
      this.unmountedCb && this.unmountedCb(app, entry);
    });
    // 微应用创建之前
    this.syncHook.tap('beforeCreate', (fn) => {
      this.beforeCreateCb = fn;
    });
    // 微应用创建但未挂载
    this.syncHook.tap('created', (fn) => {
      this.createdCb = fn;
    });
    // 微应用已经挂载
    this.syncHook.tap('mounted', (fn) => {
      this.mountedCb = fn;
    });
    // 微应用卸载
    this.syncHook.tap('unmounted', (fn) => {
      this.unmountedCb = fn;
    });
  }
  rollBcak(entry) {
    let parseredResources = this.sourcesCache[entry] || {};
    (parseredResources.styles || [])
      .filter((ele) => ele.__mounted__)
      .forEach((style) => {
        style.__mounted__ = false;
        style.remove();
      });
    (parseredResources.preLoads || [])
      .filter((ele) => ele.__mounted__)
      .forEach((preLoad) => {
        preLoad.__mounted__ = false;
        preLoad.remove();
      });
    clearExtra();
  }
  on(targetName, ...args) {
    this.syncHook.call(targetName, ...args);
    return this;
  }
  Import = function(component, entry, option) {
    // Return import without side effects if no entry is passed in
    if (!entry) {
      return component;
    }
    if (component instanceof Promise) {
      return component.then((data) => {
        this.initLifecycle(data.default || data, entry, option, this.syncHook);
        return data;
      });
    } else {
      this.initLifecycle(component, entry, option, this.syncHook);
      return component;
    }
  }.bind(this);
}

export { ComponentImport as default };
>>>>>>> 2af651c4e55f0f8ee8b65138bb4f45c1868a7e46
