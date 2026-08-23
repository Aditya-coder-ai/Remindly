(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Ym(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Dc={exports:{}},Oo={},Ic={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function c0(){if(pp)return rt;pp=1;var l=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=g&&T[g]||T["@@iterator"],typeof T=="function"?T:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function _(T,O,X){this.props=T,this.context=O,this.refs=y,this.updater=X||S}_.prototype.isReactComponent={},_.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function b(){}b.prototype=_.prototype;function L(T,O,X){this.props=T,this.context=O,this.refs=y,this.updater=X||S}var k=L.prototype=new b;k.constructor=L,M(k,_.prototype),k.isPureReactComponent=!0;var D=Array.isArray,C=Object.prototype.hasOwnProperty,F={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(T,O,X){var de,me={},q=null,xe=null;if(O!=null)for(de in O.ref!==void 0&&(xe=O.ref),O.key!==void 0&&(q=""+O.key),O)C.call(O,de)&&!j.hasOwnProperty(de)&&(me[de]=O[de]);var _e=arguments.length-2;if(_e===1)me.children=X;else if(1<_e){for(var Se=Array(_e),ye=0;ye<_e;ye++)Se[ye]=arguments[ye+2];me.children=Se}if(T&&T.defaultProps)for(de in _e=T.defaultProps,_e)me[de]===void 0&&(me[de]=_e[de]);return{$$typeof:l,type:T,key:q,ref:xe,props:me,_owner:F.current}}function z(T,O){return{$$typeof:l,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function Y(T){return typeof T=="object"&&T!==null&&T.$$typeof===l}function K(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(X){return O[X]})}var ne=/\/+/g;function ae(T,O){return typeof T=="object"&&T!==null&&T.key!=null?K(""+T.key):O.toString(36)}function G(T,O,X,de,me){var q=typeof T;(q==="undefined"||q==="boolean")&&(T=null);var xe=!1;if(T===null)xe=!0;else switch(q){case"string":case"number":xe=!0;break;case"object":switch(T.$$typeof){case l:case e:xe=!0}}if(xe)return xe=T,me=me(xe),T=de===""?"."+ae(xe,0):de,D(me)?(X="",T!=null&&(X=T.replace(ne,"$&/")+"/"),G(me,O,X,"",function(ye){return ye})):me!=null&&(Y(me)&&(me=z(me,X+(!me.key||xe&&xe.key===me.key?"":(""+me.key).replace(ne,"$&/")+"/")+T)),O.push(me)),1;if(xe=0,de=de===""?".":de+":",D(T))for(var _e=0;_e<T.length;_e++){q=T[_e];var Se=de+ae(q,_e);xe+=G(q,O,X,Se,me)}else if(Se=x(T),typeof Se=="function")for(T=Se.call(T),_e=0;!(q=T.next()).done;)q=q.value,Se=de+ae(q,_e++),xe+=G(q,O,X,Se,me);else if(q==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return xe}function ie(T,O,X){if(T==null)return T;var de=[],me=0;return G(T,de,"","",function(q){return O.call(X,q,me++)}),de}function ee(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(X){(T._status===0||T._status===-1)&&(T._status=1,T._result=X)},function(X){(T._status===0||T._status===-1)&&(T._status=2,T._result=X)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var se={current:null},B={transition:null},W={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function H(){throw Error("act(...) is not supported in production builds of React.")}return rt.Children={map:ie,forEach:function(T,O,X){ie(T,function(){O.apply(this,arguments)},X)},count:function(T){var O=0;return ie(T,function(){O++}),O},toArray:function(T){return ie(T,function(O){return O})||[]},only:function(T){if(!Y(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},rt.Component=_,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=L,rt.StrictMode=r,rt.Suspense=m,rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,rt.act=H,rt.cloneElement=function(T,O,X){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var de=M({},T.props),me=T.key,q=T.ref,xe=T._owner;if(O!=null){if(O.ref!==void 0&&(q=O.ref,xe=F.current),O.key!==void 0&&(me=""+O.key),T.type&&T.type.defaultProps)var _e=T.type.defaultProps;for(Se in O)C.call(O,Se)&&!j.hasOwnProperty(Se)&&(de[Se]=O[Se]===void 0&&_e!==void 0?_e[Se]:O[Se])}var Se=arguments.length-2;if(Se===1)de.children=X;else if(1<Se){_e=Array(Se);for(var ye=0;ye<Se;ye++)_e[ye]=arguments[ye+2];de.children=_e}return{$$typeof:l,type:T.type,key:me,ref:q,props:de,_owner:xe}},rt.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:a,_context:T},T.Consumer=T},rt.createElement=E,rt.createFactory=function(T){var O=E.bind(null,T);return O.type=T,O},rt.createRef=function(){return{current:null}},rt.forwardRef=function(T){return{$$typeof:c,render:T}},rt.isValidElement=Y,rt.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:ee}},rt.memo=function(T,O){return{$$typeof:h,type:T,compare:O===void 0?null:O}},rt.startTransition=function(T){var O=B.transition;B.transition={};try{T()}finally{B.transition=O}},rt.unstable_act=H,rt.useCallback=function(T,O){return se.current.useCallback(T,O)},rt.useContext=function(T){return se.current.useContext(T)},rt.useDebugValue=function(){},rt.useDeferredValue=function(T){return se.current.useDeferredValue(T)},rt.useEffect=function(T,O){return se.current.useEffect(T,O)},rt.useId=function(){return se.current.useId()},rt.useImperativeHandle=function(T,O,X){return se.current.useImperativeHandle(T,O,X)},rt.useInsertionEffect=function(T,O){return se.current.useInsertionEffect(T,O)},rt.useLayoutEffect=function(T,O){return se.current.useLayoutEffect(T,O)},rt.useMemo=function(T,O){return se.current.useMemo(T,O)},rt.useReducer=function(T,O,X){return se.current.useReducer(T,O,X)},rt.useRef=function(T){return se.current.useRef(T)},rt.useState=function(T){return se.current.useState(T)},rt.useSyncExternalStore=function(T,O,X){return se.current.useSyncExternalStore(T,O,X)},rt.useTransition=function(){return se.current.useTransition()},rt.version="18.3.1",rt}var mp;function Ld(){return mp||(mp=1,Ic.exports=c0()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function d0(){if(gp)return Oo;gp=1;var l=Ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(c,m,h){var v,g={},x=null,S=null;h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)r.call(m,v)&&!a.hasOwnProperty(v)&&(g[v]=m[v]);if(c&&c.defaultProps)for(v in m=c.defaultProps,m)g[v]===void 0&&(g[v]=m[v]);return{$$typeof:e,type:c,key:x,ref:S,props:g,_owner:o.current}}return Oo.Fragment=n,Oo.jsx=d,Oo.jsxs=d,Oo}var vp;function f0(){return vp||(vp=1,Dc.exports=d0()),Dc.exports}var A=f0(),le=Ld();const h0=Ym(le);var fl={},Nc={exports:{}},Mn={},kc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function p0(){return xp||(xp=1,(function(l){function e(B,W){var H=B.length;B.push(W);e:for(;0<H;){var T=H-1>>>1,O=B[T];if(0<o(O,W))B[T]=W,B[H]=O,H=T;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var W=B[0],H=B.pop();if(H!==W){B[0]=H;e:for(var T=0,O=B.length,X=O>>>1;T<X;){var de=2*(T+1)-1,me=B[de],q=de+1,xe=B[q];if(0>o(me,H))q<O&&0>o(xe,me)?(B[T]=xe,B[q]=H,T=q):(B[T]=me,B[de]=H,T=de);else if(q<O&&0>o(xe,H))B[T]=xe,B[q]=H,T=q;else break e}}return W}function o(B,W){var H=B.sortIndex-W.sortIndex;return H!==0?H:B.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;l.unstable_now=function(){return a.now()}}else{var d=Date,c=d.now();l.unstable_now=function(){return d.now()-c}}var m=[],h=[],v=1,g=null,x=3,S=!1,M=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=B)r(h),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(h)}}function D(B){if(y=!1,k(B),!M)if(n(m)!==null)M=!0,ee(C);else{var W=n(h);W!==null&&se(D,W.startTime-B)}}function C(B,W){M=!1,y&&(y=!1,b(E),E=-1),S=!0;var H=x;try{for(k(W),g=n(m);g!==null&&(!(g.expirationTime>W)||B&&!K());){var T=g.callback;if(typeof T=="function"){g.callback=null,x=g.priorityLevel;var O=T(g.expirationTime<=W);W=l.unstable_now(),typeof O=="function"?g.callback=O:g===n(m)&&r(m),k(W)}else r(m);g=n(m)}if(g!==null)var X=!0;else{var de=n(h);de!==null&&se(D,de.startTime-W),X=!1}return X}finally{g=null,x=H,S=!1}}var F=!1,j=null,E=-1,z=5,Y=-1;function K(){return!(l.unstable_now()-Y<z)}function ne(){if(j!==null){var B=l.unstable_now();Y=B;var W=!0;try{W=j(!0,B)}finally{W?ae():(F=!1,j=null)}}else F=!1}var ae;if(typeof L=="function")ae=function(){L(ne)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ie=G.port2;G.port1.onmessage=ne,ae=function(){ie.postMessage(null)}}else ae=function(){_(ne,0)};function ee(B){j=B,F||(F=!0,ae())}function se(B,W){E=_(function(){B(l.unstable_now())},W)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_continueExecution=function(){M||S||(M=!0,ee(C))},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return x},l.unstable_getFirstCallbackNode=function(){return n(m)},l.unstable_next=function(B){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var H=x;x=W;try{return B()}finally{x=H}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=x;x=B;try{return W()}finally{x=H}},l.unstable_scheduleCallback=function(B,W,H){var T=l.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?T+H:T):H=T,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,B={id:v++,callback:W,priorityLevel:B,startTime:H,expirationTime:O,sortIndex:-1},H>T?(B.sortIndex=H,e(h,B),n(m)===null&&B===n(h)&&(y?(b(E),E=-1):y=!0,se(D,H-T))):(B.sortIndex=O,e(m,B),M||S||(M=!0,ee(C))),B},l.unstable_shouldYield=K,l.unstable_wrapCallback=function(B){var W=x;return function(){var H=x;x=W;try{return B.apply(this,arguments)}finally{x=H}}}})(Fc)),Fc}var _p;function m0(){return _p||(_p=1,kc.exports=p0()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function g0(){if(yp)return Mn;yp=1;var l=Ld(),e=m0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return m.call(g,t)?!0:m.call(v,t)?!1:h.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,s,u){if(i===null||typeof i>"u"||S(t,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,s,u,f,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(b,L);_[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(b,L);_[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(b,L);_[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,s,u){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,s,f,u)&&(s=null),u||f===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,u=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,u?t.setAttributeNS(u,i,s):t.setAttribute(i,s))))}var D=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),F=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),K=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),B=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,T;function O(t){if(T===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+t}var X=!1;function de(t,i){if(!t||X)return"";X=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){u=re}t.call(i.prototype)}else{try{throw Error()}catch(re){u=re}t()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),p=u.stack.split(`
`),w=f.length-1,N=p.length-1;1<=w&&0<=N&&f[w]!==p[N];)N--;for(;1<=w&&0<=N;w--,N--)if(f[w]!==p[N]){if(w!==1||N!==1)do if(w--,N--,0>N||f[w]!==p[N]){var U=`
`+f[w].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=w&&0<=N);break}}}finally{X=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?O(t):""}function me(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=de(t.type,!1),t;case 11:return t=de(t.type.render,!1),t;case 1:return t=de(t.type,!0),t;default:return""}}function q(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case F:return"Portal";case z:return"Profiler";case E:return"StrictMode";case ae:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Consumer";case Y:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return i=t.displayName||null,i!==null?i:q(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return q(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ye(t){var i=Se(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qe(t){t._valueTracker||(t._valueTracker=ye(t))}function Ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=Se(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function De(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var s=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Be(t,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=_e(i.value!=null?i.value:s),t._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ve(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function Ye(t,i){Ve(t,i);var s=_e(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?st(t,i.type,s):i.hasOwnProperty("defaultValue")&&st(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function nt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function st(t,i,s){(i!=="number"||De(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var _t=Array.isArray;function lt(t,i,s,u){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&u&&(t[s].defaultSelected=!0)}else{for(s=""+_e(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function I(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(_t(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:_e(s)}}function fe(t,i){var s=_e(i.value),u=_e(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),u!=null&&(t.defaultValue=""+u)}function Me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function be(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?be(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xe,ce=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ue(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(t){We.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ie[i]=Ie[t]})});function ke(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ie.hasOwnProperty(t)&&Ie[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,f=ke(s,i[s],u);s==="float"&&(s="cssFloat"),u?t.setProperty(s,f):t[s]=f}}var ft=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mt(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function $(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function he(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,Te=null,it=null;function zt(t){if(t=Mo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),Re(t.stateNode,t.type,i))}}function At(t){Te?it?it.push(t):it=[t]:Te=t}function Yn(){if(Te){var t=Te,i=it;if(it=Te=null,zt(t),i)for(t=0;t<i.length;t++)zt(i[t])}}function Et(t,i){return t(i)}function Nn(){}var tn=!1;function ua(t,i,s){if(tn)return t(i,s);tn=!0;try{return Et(t,i,s)}finally{tn=!1,(Te!==null||it!==null)&&(Nn(),Yn())}}function yi(t,i){var s=t.stateNode;if(s===null)return null;var u=Ca(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var ns=!1;if(c)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{ns=!1}function Zl(t,i,s,u,f,p,w,N,U){var re=Array.prototype.slice.call(arguments,3);try{i.apply(s,re)}catch(ve){this.onError(ve)}}var wr=!1,P=null,te=!1,ue=null,oe={onError:function(t){wr=!0,P=t}};function pe(t,i,s,u,f,p,w,N,U){wr=!1,P=null,Zl.apply(oe,arguments)}function Ke(t,i,s,u,f,p,w,N,U){if(pe.apply(this,arguments),wr){if(wr){var re=P;wr=!1,P=null}else throw Error(n(198));te||(te=!0,ue=re)}}function $e(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function et(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Je(t){if($e(t)!==t)throw Error(n(188))}function gt(t){var i=t.alternate;if(!i){if(i=$e(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,u=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){s=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return Je(f),t;if(p===u)return Je(f),i;p=p.sibling}throw Error(n(188))}if(s.return!==u.return)s=f,u=p;else{for(var w=!1,N=f.child;N;){if(N===s){w=!0,s=f,u=p;break}if(N===u){w=!0,u=f,s=p;break}N=N.sibling}if(!w){for(N=p.child;N;){if(N===s){w=!0,s=p,u=f;break}if(N===u){w=!0,u=p,s=f;break}N=N.sibling}if(!w)throw Error(n(189))}}if(s.alternate!==u)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function at(t){return t=gt(t),t!==null?ut(t):null}function ut(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ut(t);if(i!==null)return i;t=t.sibling}return null}var bt=e.unstable_scheduleCallback,di=e.unstable_cancelCallback,Ui=e.unstable_shouldYield,Bi=e.unstable_requestPaint,ht=e.unstable_now,pt=e.unstable_getCurrentPriorityLevel,fi=e.unstable_ImmediatePriority,Dt=e.unstable_UserBlockingPriority,Zt=e.unstable_NormalPriority,hi=e.unstable_LowPriority,Gi=e.unstable_IdlePriority,Vi=null,yt=null;function Mr(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Ql,dn=Math.log,io=Math.LN2;function Ql(t){return t>>>=0,t===0?32:31-(dn(t)/io|0)|0}var Er=64,ca=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function da(t,i){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,w=s&268435455;if(w!==0){var N=w&~f;N!==0?u=ro(N):(p&=w,p!==0&&(u=ro(p)))}else w=s&~f,w!==0?u=ro(w):p!==0&&(u=ro(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)s=31-cn(i),f=1<<s,u|=t[s],i&=~f;return u}function Rg(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lg(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-cn(p),N=1<<w,U=f[w];U===-1?((N&s)===0||(N&u)!==0)&&(f[w]=Rg(N,i)):U<=i&&(t.expiredLanes|=N),p&=~N}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hd(){var t=Er;return Er<<=1,(Er&4194240)===0&&(Er=64),t}function eu(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function so(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-cn(i),t[i]=s}function Pg(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-cn(s),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,s&=~p}}function tu(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-cn(s),f=1<<u;f&i|t[u]&i&&(t[u]|=i),s&=~f}}var xt=0;function jd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qd,nu,Xd,$d,Yd,iu=!1,fa=[],Wi=null,Hi=null,ji=null,oo=new Map,ao=new Map,qi=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(t,i,s,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&nu(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ig(t,i,s,u,f){switch(i){case"focusin":return Wi=lo(Wi,t,i,s,u,f),!0;case"dragenter":return Hi=lo(Hi,t,i,s,u,f),!0;case"mouseover":return ji=lo(ji,t,i,s,u,f),!0;case"pointerover":var p=f.pointerId;return oo.set(p,lo(oo.get(p)||null,t,i,s,u,f)),!0;case"gotpointercapture":return p=f.pointerId,ao.set(p,lo(ao.get(p)||null,t,i,s,u,f)),!0}return!1}function Zd(t){var i=br(t.target);if(i!==null){var s=$e(i);if(s!==null){if(i=s.tag,i===13){if(i=et(s),i!==null){t.blockedOn=i,Yd(t.priority,function(){Xd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ha(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=su(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Le=u,s.target.dispatchEvent(u),Le=null}else return i=Mo(s),i!==null&&nu(i),t.blockedOn=s,!1;i.shift()}return!0}function Qd(t,i,s){ha(t)&&s.delete(i)}function Ng(){iu=!1,Wi!==null&&ha(Wi)&&(Wi=null),Hi!==null&&ha(Hi)&&(Hi=null),ji!==null&&ha(ji)&&(ji=null),oo.forEach(Qd),ao.forEach(Qd)}function uo(t,i){t.blockedOn===i&&(t.blockedOn=null,iu||(iu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function co(t){function i(f){return uo(f,t)}if(0<fa.length){uo(fa[0],t);for(var s=1;s<fa.length;s++){var u=fa[s];u.blockedOn===t&&(u.blockedOn=null)}}for(Wi!==null&&uo(Wi,t),Hi!==null&&uo(Hi,t),ji!==null&&uo(ji,t),oo.forEach(i),ao.forEach(i),s=0;s<qi.length;s++)u=qi[s],u.blockedOn===t&&(u.blockedOn=null);for(;0<qi.length&&(s=qi[0],s.blockedOn===null);)Zd(s),s.blockedOn===null&&qi.shift()}var is=D.ReactCurrentBatchConfig,pa=!0;function kg(t,i,s,u){var f=xt,p=is.transition;is.transition=null;try{xt=1,ru(t,i,s,u)}finally{xt=f,is.transition=p}}function Fg(t,i,s,u){var f=xt,p=is.transition;is.transition=null;try{xt=4,ru(t,i,s,u)}finally{xt=f,is.transition=p}}function ru(t,i,s,u){if(pa){var f=su(t,i,s,u);if(f===null)wu(t,i,u,ma,s),Kd(t,u);else if(Ig(f,t,i,s,u))u.stopPropagation();else if(Kd(t,u),i&4&&-1<Dg.indexOf(t)){for(;f!==null;){var p=Mo(f);if(p!==null&&qd(p),p=su(t,i,s,u),p===null&&wu(t,i,u,ma,s),p===f)break;f=p}f!==null&&u.stopPropagation()}else wu(t,i,u,null,s)}}var ma=null;function su(t,i,s,u){if(ma=null,t=he(u),t=br(t),t!==null)if(i=$e(t),i===null)t=null;else if(s=i.tag,s===13){if(t=et(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ma=t,null}function Jd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pt()){case fi:return 1;case Dt:return 4;case Zt:case hi:return 16;case Gi:return 536870912;default:return 16}default:return 16}}var Xi=null,ou=null,ga=null;function ef(){if(ga)return ga;var t,i=ou,s=i.length,u,f="value"in Xi?Xi.value:Xi.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var w=s-t;for(u=1;u<=w&&i[s-u]===f[p-u];u++);return ga=f.slice(t,1<u?1-u:void 0)}function va(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function tf(){return!1}function Tn(t){function i(s,u,f,p,w){this._reactName=s,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xa:tf,this.isPropagationStopped=tf,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Tn(rs),fo=H({},rs,{view:0,detail:0}),zg=Tn(fo),lu,uu,ho,_a=H({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(lu=t.screenX-ho.screenX,uu=t.screenY-ho.screenY):uu=lu=0,ho=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),nf=Tn(_a),Og=H({},_a,{dataTransfer:0}),Ug=Tn(Og),Bg=H({},fo,{relatedTarget:0}),cu=Tn(Bg),Gg=H({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Tn(Gg),Wg=H({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hg=Tn(Wg),jg=H({},rs,{data:0}),rf=Tn(jg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function du(){return Yg}var Kg=H({},fo,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=Tn(Kg),Qg=H({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=Tn(Qg),Jg=H({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),ev=Tn(Jg),tv=H({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=Tn(tv),iv=H({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Tn(iv),sv=[9,13,27,32],fu=c&&"CompositionEvent"in window,po=null;c&&"documentMode"in document&&(po=document.documentMode);var ov=c&&"TextEvent"in window&&!po,of=c&&(!fu||po&&8<po&&11>=po),af=" ",lf=!1;function uf(t,i){switch(t){case"keyup":return sv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function av(t,i){switch(t){case"compositionend":return cf(i);case"keypress":return i.which!==32?null:(lf=!0,af);case"textInput":return t=i.data,t===af&&lf?null:t;default:return null}}function lv(t,i){if(ss)return t==="compositionend"||!fu&&uf(t,i)?(t=ef(),ga=ou=Xi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return of&&i.locale!=="ko"?null:i.data;default:return null}}var uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!uv[t.type]:i==="textarea"}function ff(t,i,s,u){At(u),i=Ea(i,"onChange"),0<i.length&&(s=new au("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var mo=null,go=null;function cv(t){Lf(t,0)}function ya(t){var i=cs(t);if(Ge(i))return t}function dv(t,i){if(t==="change")return i}var hf=!1;if(c){var hu;if(c){var pu="oninput"in document;if(!pu){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),pu=typeof pf.oninput=="function"}hu=pu}else hu=!1;hf=hu&&(!document.documentMode||9<document.documentMode)}function mf(){mo&&(mo.detachEvent("onpropertychange",gf),go=mo=null)}function gf(t){if(t.propertyName==="value"&&ya(go)){var i=[];ff(i,go,t,he(t)),ua(cv,i)}}function fv(t,i,s){t==="focusin"?(mf(),mo=i,go=s,mo.attachEvent("onpropertychange",gf)):t==="focusout"&&mf()}function hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ya(go)}function pv(t,i){if(t==="click")return ya(i)}function mv(t,i){if(t==="input"||t==="change")return ya(i)}function gv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:gv;function vo(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var f=s[u];if(!m.call(i,f)||!Kn(t[f],i[f]))return!1}return!0}function vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xf(t,i){var s=vf(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vf(s)}}function _f(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?_f(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yf(){for(var t=window,i=De();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=De(t.document)}return i}function mu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function vv(t){var i=yf(),s=t.focusedElem,u=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&_f(s.ownerDocument.documentElement,s)){if(u!==null&&mu(s)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=xf(s,p);var w=xf(s,u);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xv=c&&"documentMode"in document&&11>=document.documentMode,os=null,gu=null,xo=null,vu=!1;function Sf(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||os==null||os!==De(u)||(u=os,"selectionStart"in u&&mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&vo(xo,u)||(xo=u,u=Ea(gu,"onSelect"),0<u.length&&(i=new au("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=os)))}function Sa(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var as={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},xu={},wf={};c&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function wa(t){if(xu[t])return xu[t];if(!as[t])return t;var i=as[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in wf)return xu[t]=i[s];return t}var Mf=wa("animationend"),Ef=wa("animationiteration"),bf=wa("animationstart"),Tf=wa("transitionend"),Cf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Cf.set(t,i),a(i,[t])}for(var _u=0;_u<Af.length;_u++){var yu=Af[_u],_v=yu.toLowerCase(),yv=yu[0].toUpperCase()+yu.slice(1);$i(_v,"on"+yv)}$i(Mf,"onAnimationEnd"),$i(Ef,"onAnimationIteration"),$i(bf,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Tf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Rf(t,i,s){var u=t.type||"unknown-event";t.currentTarget=s,Ke(u,i,void 0,t),t.currentTarget=null}function Lf(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var w=u.length-1;0<=w;w--){var N=u[w],U=N.instance,re=N.currentTarget;if(N=N.listener,U!==p&&f.isPropagationStopped())break e;Rf(f,N,re),p=U}else for(w=0;w<u.length;w++){if(N=u[w],U=N.instance,re=N.currentTarget,N=N.listener,U!==p&&f.isPropagationStopped())break e;Rf(f,N,re),p=U}}}if(te)throw t=ue,te=!1,ue=null,t}function Tt(t,i){var s=i[Au];s===void 0&&(s=i[Au]=new Set);var u=t+"__bubble";s.has(u)||(Pf(i,t,2,!1),s.add(u))}function Su(t,i,s){var u=0;i&&(u|=4),Pf(s,t,u,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ma]){t[Ma]=!0,r.forEach(function(s){s!=="selectionchange"&&(Sv.has(s)||Su(s,!1,t),Su(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,Su("selectionchange",!1,i))}}function Pf(t,i,s,u){switch(Jd(i)){case 1:var f=kg;break;case 4:f=Fg;break;default:f=ru}s=f.bind(null,i,s,t),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function wu(t,i,s,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(w===4)for(w=u.return;w!==null;){var U=w.tag;if((U===3||U===4)&&(U=w.stateNode.containerInfo,U===f||U.nodeType===8&&U.parentNode===f))return;w=w.return}for(;N!==null;){if(w=br(N),w===null)return;if(U=w.tag,U===5||U===6){u=p=w;continue e}N=N.parentNode}}u=u.return}ua(function(){var re=p,ve=he(s),we=[];e:{var ge=Cf.get(t);if(ge!==void 0){var Pe=au,Fe=t;switch(t){case"keypress":if(va(s)===0)break e;case"keydown":case"keyup":Pe=Zg;break;case"focusin":Fe="focus",Pe=cu;break;case"focusout":Fe="blur",Pe=cu;break;case"beforeblur":case"afterblur":Pe=cu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=ev;break;case Mf:case Ef:case bf:Pe=Vg;break;case Tf:Pe=nv;break;case"scroll":Pe=zg;break;case"wheel":Pe=rv;break;case"copy":case"cut":case"paste":Pe=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=sf}var ze=(i&4)!==0,Ot=!ze&&t==="scroll",Z=ze?ge!==null?ge+"Capture":null:ge;ze=[];for(var V=re,J;V!==null;){J=V;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Z!==null&&(Ee=yi(V,Z),Ee!=null&&ze.push(So(V,Ee,J)))),Ot)break;V=V.return}0<ze.length&&(ge=new Pe(ge,Fe,null,s,ve),we.push({event:ge,listeners:ze}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Pe=t==="mouseout"||t==="pointerout",ge&&s!==Le&&(Fe=s.relatedTarget||s.fromElement)&&(br(Fe)||Fe[Si]))break e;if((Pe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Pe?(Fe=s.relatedTarget||s.toElement,Pe=re,Fe=Fe?br(Fe):null,Fe!==null&&(Ot=$e(Fe),Fe!==Ot||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Pe=null,Fe=re),Pe!==Fe)){if(ze=nf,Ee="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(ze=sf,Ee="onPointerLeave",Z="onPointerEnter",V="pointer"),Ot=Pe==null?ge:cs(Pe),J=Fe==null?ge:cs(Fe),ge=new ze(Ee,V+"leave",Pe,s,ve),ge.target=Ot,ge.relatedTarget=J,Ee=null,br(ve)===re&&(ze=new ze(Z,V+"enter",Fe,s,ve),ze.target=J,ze.relatedTarget=Ot,Ee=ze),Ot=Ee,Pe&&Fe)t:{for(ze=Pe,Z=Fe,V=0,J=ze;J;J=ls(J))V++;for(J=0,Ee=Z;Ee;Ee=ls(Ee))J++;for(;0<V-J;)ze=ls(ze),V--;for(;0<J-V;)Z=ls(Z),J--;for(;V--;){if(ze===Z||Z!==null&&ze===Z.alternate)break t;ze=ls(ze),Z=ls(Z)}ze=null}else ze=null;Pe!==null&&Df(we,ge,Pe,ze,!1),Fe!==null&&Ot!==null&&Df(we,Ot,Fe,ze,!0)}}e:{if(ge=re?cs(re):window,Pe=ge.nodeName&&ge.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&ge.type==="file")var Oe=dv;else if(df(ge))if(hf)Oe=mv;else{Oe=hv;var He=fv}else(Pe=ge.nodeName)&&Pe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Oe=pv);if(Oe&&(Oe=Oe(t,re))){ff(we,Oe,s,ve);break e}He&&He(t,ge,re),t==="focusout"&&(He=ge._wrapperState)&&He.controlled&&ge.type==="number"&&st(ge,"number",ge.value)}switch(He=re?cs(re):window,t){case"focusin":(df(He)||He.contentEditable==="true")&&(os=He,gu=re,xo=null);break;case"focusout":xo=gu=os=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Sf(we,s,ve);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Sf(we,s,ve)}var je;if(fu)e:{switch(t){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else ss?uf(t,s)&&(Ze="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ze="onCompositionStart");Ze&&(of&&s.locale!=="ko"&&(ss||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&ss&&(je=ef()):(Xi=ve,ou="value"in Xi?Xi.value:Xi.textContent,ss=!0)),He=Ea(re,Ze),0<He.length&&(Ze=new rf(Ze,t,null,s,ve),we.push({event:Ze,listeners:He}),je?Ze.data=je:(je=cf(s),je!==null&&(Ze.data=je)))),(je=ov?av(t,s):lv(t,s))&&(re=Ea(re,"onBeforeInput"),0<re.length&&(ve=new rf("onBeforeInput","beforeinput",null,s,ve),we.push({event:ve,listeners:re}),ve.data=je))}Lf(we,i)})}function So(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ea(t,i){for(var s=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=yi(t,s),p!=null&&u.unshift(So(t,p,f)),p=yi(t,i),p!=null&&u.push(So(t,p,f))),t=t.return}return u}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,i,s,u,f){for(var p=i._reactName,w=[];s!==null&&s!==u;){var N=s,U=N.alternate,re=N.stateNode;if(U!==null&&U===u)break;N.tag===5&&re!==null&&(N=re,f?(U=yi(s,p),U!=null&&w.unshift(So(s,U,N))):f||(U=yi(s,p),U!=null&&w.push(So(s,U,N)))),s=s.return}w.length!==0&&t.push({event:i,listeners:w})}var wv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(Mv,"")}function ba(t,i,s){if(i=If(i),If(t)!==i&&s)throw Error(n(425))}function Ta(){}var Mu=null,Eu=null;function bu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(Tv)}:Tu;function Tv(t){setTimeout(function(){throw t})}function Cu(t,i){var s=i,u=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(u===0){t.removeChild(f),co(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=f}while(s);co(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),pi="__reactFiber$"+us,wo="__reactProps$"+us,Si="__reactContainer$"+us,Au="__reactEvents$"+us,Cv="__reactListeners$"+us,Av="__reactHandles$"+us;function br(t){var i=t[pi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[pi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=kf(t);t!==null;){if(s=t[pi])return s;t=kf(t)}return i}t=s,s=t.parentNode}return null}function Mo(t){return t=t[pi]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[wo]||null}var Ru=[],ds=-1;function Ki(t){return{current:t}}function Ct(t){0>ds||(t.current=Ru[ds],Ru[ds]=null,ds--)}function St(t,i){ds++,Ru[ds]=t.current,t.current=i}var Zi={},nn=Ki(Zi),xn=Ki(!1),Tr=Zi;function fs(t,i){var s=t.type.contextTypes;if(!s)return Zi;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in s)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function _n(t){return t=t.childContextTypes,t!=null}function Aa(){Ct(xn),Ct(nn)}function Ff(t,i,s){if(nn.current!==Zi)throw Error(n(168));St(nn,i),St(xn,s)}function zf(t,i,s){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return H({},s,u)}function Ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=nn.current,St(nn,t),St(xn,xn.current),!0}function Of(t,i,s){var u=t.stateNode;if(!u)throw Error(n(169));s?(t=zf(t,i,Tr),u.__reactInternalMemoizedMergedChildContext=t,Ct(xn),Ct(nn),St(nn,t)):Ct(xn),St(xn,s)}var wi=null,La=!1,Lu=!1;function Uf(t){wi===null?wi=[t]:wi.push(t)}function Rv(t){La=!0,Uf(t)}function Qi(){if(!Lu&&wi!==null){Lu=!0;var t=0,i=xt;try{var s=wi;for(xt=1;t<s.length;t++){var u=s[t];do u=u(!0);while(u!==null)}wi=null,La=!1}catch(f){throw wi!==null&&(wi=wi.slice(t+1)),bt(fi,Qi),f}finally{xt=i,Lu=!1}}return null}var hs=[],ps=0,Pa=null,Da=0,kn=[],Fn=0,Cr=null,Mi=1,Ei="";function Ar(t,i){hs[ps++]=Da,hs[ps++]=Pa,Pa=t,Da=i}function Bf(t,i,s){kn[Fn++]=Mi,kn[Fn++]=Ei,kn[Fn++]=Cr,Cr=t;var u=Mi;t=Ei;var f=32-cn(u)-1;u&=~(1<<f),s+=1;var p=32-cn(i)+f;if(30<p){var w=f-f%5;p=(u&(1<<w)-1).toString(32),u>>=w,f-=w,Mi=1<<32-cn(i)+f|s<<f|u,Ei=p+t}else Mi=1<<p|s<<f|u,Ei=t}function Pu(t){t.return!==null&&(Ar(t,1),Bf(t,1,0))}function Du(t){for(;t===Pa;)Pa=hs[--ps],hs[ps]=null,Da=hs[--ps],hs[ps]=null;for(;t===Cr;)Cr=kn[--Fn],kn[Fn]=null,Ei=kn[--Fn],kn[Fn]=null,Mi=kn[--Fn],kn[Fn]=null}var Cn=null,An=null,Rt=!1,Zn=null;function Gf(t,i){var s=Bn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Vf(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Cn=t,An=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Cn=t,An=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Cr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Cn=t,An=null,!0):!1;default:return!1}}function Iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(Rt){var i=An;if(i){var s=i;if(!Vf(t,i)){if(Iu(t))throw Error(n(418));i=Yi(s.nextSibling);var u=Cn;i&&Vf(t,i)?Gf(u,s):(t.flags=t.flags&-4097|2,Rt=!1,Cn=t)}}else{if(Iu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Rt=!1,Cn=t}}}function Wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Ia(t){if(t!==Cn)return!1;if(!Rt)return Wf(t),Rt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!bu(t.type,t.memoizedProps)),i&&(i=An)){if(Iu(t))throw Hf(),Error(n(418));for(;i;)Gf(t,i),i=Yi(i.nextSibling)}if(Wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){An=Yi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}An=null}}else An=Cn?Yi(t.stateNode.nextSibling):null;return!0}function Hf(){for(var t=An;t;)t=Yi(t.nextSibling)}function ms(){An=Cn=null,Rt=!1}function ku(t){Zn===null?Zn=[t]:Zn.push(t)}var Lv=D.ReactCurrentBatchConfig;function Eo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var u=s.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var N=f.refs;w===null?delete N[p]:N[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jf(t){var i=t._init;return i(t._payload)}function qf(t){function i(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function s(Z,V){if(!t)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function u(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function f(Z,V){return Z=or(Z,V),Z.index=0,Z.sibling=null,Z}function p(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=2,V):J):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function w(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function N(Z,V,J,Ee){return V===null||V.tag!==6?(V=Tc(J,Z.mode,Ee),V.return=Z,V):(V=f(V,J),V.return=Z,V)}function U(Z,V,J,Ee){var Oe=J.type;return Oe===j?ve(Z,V,J.props.children,Ee,J.key):V!==null&&(V.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===ee&&jf(Oe)===V.type)?(Ee=f(V,J.props),Ee.ref=Eo(Z,V,J),Ee.return=Z,Ee):(Ee=rl(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Eo(Z,V,J),Ee.return=Z,Ee)}function re(Z,V,J,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Cc(J,Z.mode,Ee),V.return=Z,V):(V=f(V,J.children||[]),V.return=Z,V)}function ve(Z,V,J,Ee,Oe){return V===null||V.tag!==7?(V=Fr(J,Z.mode,Ee,Oe),V.return=Z,V):(V=f(V,J),V.return=Z,V)}function we(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Tc(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return J=rl(V.type,V.key,V.props,null,Z.mode,J),J.ref=Eo(Z,null,V),J.return=Z,J;case F:return V=Cc(V,Z.mode,J),V.return=Z,V;case ee:var Ee=V._init;return we(Z,Ee(V._payload),J)}if(_t(V)||W(V))return V=Fr(V,Z.mode,J,null),V.return=Z,V;Na(Z,V)}return null}function ge(Z,V,J,Ee){var Oe=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Oe!==null?null:N(Z,V,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case C:return J.key===Oe?U(Z,V,J,Ee):null;case F:return J.key===Oe?re(Z,V,J,Ee):null;case ee:return Oe=J._init,ge(Z,V,Oe(J._payload),Ee)}if(_t(J)||W(J))return Oe!==null?null:ve(Z,V,J,Ee,null);Na(Z,J)}return null}function Pe(Z,V,J,Ee,Oe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(J)||null,N(V,Z,""+Ee,Oe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case C:return Z=Z.get(Ee.key===null?J:Ee.key)||null,U(V,Z,Ee,Oe);case F:return Z=Z.get(Ee.key===null?J:Ee.key)||null,re(V,Z,Ee,Oe);case ee:var He=Ee._init;return Pe(Z,V,J,He(Ee._payload),Oe)}if(_t(Ee)||W(Ee))return Z=Z.get(J)||null,ve(V,Z,Ee,Oe,null);Na(V,Ee)}return null}function Fe(Z,V,J,Ee){for(var Oe=null,He=null,je=V,Ze=V=0,Xt=null;je!==null&&Ze<J.length;Ze++){je.index>Ze?(Xt=je,je=null):Xt=je.sibling;var mt=ge(Z,je,J[Ze],Ee);if(mt===null){je===null&&(je=Xt);break}t&&je&&mt.alternate===null&&i(Z,je),V=p(mt,V,Ze),He===null?Oe=mt:He.sibling=mt,He=mt,je=Xt}if(Ze===J.length)return s(Z,je),Rt&&Ar(Z,Ze),Oe;if(je===null){for(;Ze<J.length;Ze++)je=we(Z,J[Ze],Ee),je!==null&&(V=p(je,V,Ze),He===null?Oe=je:He.sibling=je,He=je);return Rt&&Ar(Z,Ze),Oe}for(je=u(Z,je);Ze<J.length;Ze++)Xt=Pe(je,Z,Ze,J[Ze],Ee),Xt!==null&&(t&&Xt.alternate!==null&&je.delete(Xt.key===null?Ze:Xt.key),V=p(Xt,V,Ze),He===null?Oe=Xt:He.sibling=Xt,He=Xt);return t&&je.forEach(function(ar){return i(Z,ar)}),Rt&&Ar(Z,Ze),Oe}function ze(Z,V,J,Ee){var Oe=W(J);if(typeof Oe!="function")throw Error(n(150));if(J=Oe.call(J),J==null)throw Error(n(151));for(var He=Oe=null,je=V,Ze=V=0,Xt=null,mt=J.next();je!==null&&!mt.done;Ze++,mt=J.next()){je.index>Ze?(Xt=je,je=null):Xt=je.sibling;var ar=ge(Z,je,mt.value,Ee);if(ar===null){je===null&&(je=Xt);break}t&&je&&ar.alternate===null&&i(Z,je),V=p(ar,V,Ze),He===null?Oe=ar:He.sibling=ar,He=ar,je=Xt}if(mt.done)return s(Z,je),Rt&&Ar(Z,Ze),Oe;if(je===null){for(;!mt.done;Ze++,mt=J.next())mt=we(Z,mt.value,Ee),mt!==null&&(V=p(mt,V,Ze),He===null?Oe=mt:He.sibling=mt,He=mt);return Rt&&Ar(Z,Ze),Oe}for(je=u(Z,je);!mt.done;Ze++,mt=J.next())mt=Pe(je,Z,Ze,mt.value,Ee),mt!==null&&(t&&mt.alternate!==null&&je.delete(mt.key===null?Ze:mt.key),V=p(mt,V,Ze),He===null?Oe=mt:He.sibling=mt,He=mt);return t&&je.forEach(function(u0){return i(Z,u0)}),Rt&&Ar(Z,Ze),Oe}function Ot(Z,V,J,Ee){if(typeof J=="object"&&J!==null&&J.type===j&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case C:e:{for(var Oe=J.key,He=V;He!==null;){if(He.key===Oe){if(Oe=J.type,Oe===j){if(He.tag===7){s(Z,He.sibling),V=f(He,J.props.children),V.return=Z,Z=V;break e}}else if(He.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===ee&&jf(Oe)===He.type){s(Z,He.sibling),V=f(He,J.props),V.ref=Eo(Z,He,J),V.return=Z,Z=V;break e}s(Z,He);break}else i(Z,He);He=He.sibling}J.type===j?(V=Fr(J.props.children,Z.mode,Ee,J.key),V.return=Z,Z=V):(Ee=rl(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Eo(Z,V,J),Ee.return=Z,Z=Ee)}return w(Z);case F:e:{for(He=J.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s(Z,V.sibling),V=f(V,J.children||[]),V.return=Z,Z=V;break e}else{s(Z,V);break}else i(Z,V);V=V.sibling}V=Cc(J,Z.mode,Ee),V.return=Z,Z=V}return w(Z);case ee:return He=J._init,Ot(Z,V,He(J._payload),Ee)}if(_t(J))return Fe(Z,V,J,Ee);if(W(J))return ze(Z,V,J,Ee);Na(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(s(Z,V.sibling),V=f(V,J),V.return=Z,Z=V):(s(Z,V),V=Tc(J,Z.mode,Ee),V.return=Z,Z=V),w(Z)):s(Z,V)}return Ot}var gs=qf(!0),Xf=qf(!1),ka=Ki(null),Fa=null,vs=null,Fu=null;function zu(){Fu=vs=Fa=null}function Ou(t){var i=ka.current;Ct(ka),t._currentValue=i}function Uu(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function xs(t,i){Fa=t,Fu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(Fu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Fa===null)throw Error(n(308));vs=t,Fa.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Rr=null;function Bu(t){Rr===null?Rr=[t]:Rr.push(t)}function $f(t,i,s,u){var f=i.interleaved;return f===null?(s.next=s,Bu(i)):(s.next=f.next,f.next=s),i.interleaved=s,bi(t,u)}function bi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Ji=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ct&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,bi(t,s)}return f=u.interleaved,f===null?(i.next=i,Bu(u)):(i.next=f.next,f.next=i),u.interleaved=i,bi(t,s)}function za(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,tu(t,s)}}function Kf(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?f=p=w:p=p.next=w,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Oa(t,i,s,u){var f=t.updateQueue;Ji=!1;var p=f.firstBaseUpdate,w=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var U=N,re=U.next;U.next=null,w===null?p=re:w.next=re,w=U;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==w&&(N===null?ve.firstBaseUpdate=re:N.next=re,ve.lastBaseUpdate=U))}if(p!==null){var we=f.baseState;w=0,ve=re=U=null,N=p;do{var ge=N.lane,Pe=N.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Pe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Fe=t,ze=N;switch(ge=i,Pe=s,ze.tag){case 1:if(Fe=ze.payload,typeof Fe=="function"){we=Fe.call(Pe,we,ge);break e}we=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ze.payload,ge=typeof Fe=="function"?Fe.call(Pe,we,ge):Fe,ge==null)break e;we=H({},we,ge);break e;case 2:Ji=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[N]:ge.push(N))}else Pe={eventTime:Pe,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(re=ve=Pe,U=we):ve=ve.next=Pe,w|=ge;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(ve===null&&(U=we),f.baseState=U,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Dr|=w,t.lanes=w,t.memoizedState=we}}function Zf(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=s,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var bo={},mi=Ki(bo),To=Ki(bo),Co=Ki(bo);function Lr(t){if(t===bo)throw Error(n(174));return t}function Vu(t,i){switch(St(Co,i),St(To,t),St(mi,bo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Ct(mi),St(mi,i)}function _s(){Ct(mi),Ct(To),Ct(Co)}function Qf(t){Lr(Co.current);var i=Lr(mi.current),s=Ae(i,t.type);i!==s&&(St(To,t),St(mi,s))}function Wu(t){To.current===t&&(Ct(mi),Ct(To))}var It=Ki(0);function Ua(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function ju(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Ba=D.ReactCurrentDispatcher,qu=D.ReactCurrentBatchConfig,Pr=0,Nt=null,Gt=null,jt=null,Ga=!1,Ao=!1,Ro=0,Pv=0;function rn(){throw Error(n(321))}function Xu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function $u(t,i,s,u,f,p){if(Pr=p,Nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=t===null||t.memoizedState===null?kv:Fv,t=s(u,f),Ao){p=0;do{if(Ao=!1,Ro=0,25<=p)throw Error(n(301));p+=1,jt=Gt=null,i.updateQueue=null,Ba.current=zv,t=s(u,f)}while(Ao)}if(Ba.current=Ha,i=Gt!==null&&Gt.next!==null,Pr=0,jt=Gt=Nt=null,Ga=!1,i)throw Error(n(300));return t}function Yu(){var t=Ro!==0;return Ro=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Nt.memoizedState=jt=t:jt=jt.next=t,jt}function On(){if(Gt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=jt===null?Nt.memoizedState:jt.next;if(i!==null)jt=i,Gt=t;else{if(t===null)throw Error(n(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},jt===null?Nt.memoizedState=jt=t:jt=jt.next=t}return jt}function Lo(t,i){return typeof i=="function"?i(t):i}function Ku(t){var i=On(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=Gt,f=u.baseQueue,p=s.pending;if(p!==null){if(f!==null){var w=f.next;f.next=p.next,p.next=w}u.baseQueue=f=p,s.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=w=null,U=null,re=p;do{var ve=re.lane;if((Pr&ve)===ve)U!==null&&(U=U.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:t(u,re.action);else{var we={lane:ve,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};U===null?(N=U=we,w=u):U=U.next=we,Nt.lanes|=ve,Dr|=ve}re=re.next}while(re!==null&&re!==p);U===null?w=u:U.next=N,Kn(u,i.memoizedState)||(yn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=U,s.lastRenderedState=u}if(t=s.interleaved,t!==null){f=t;do p=f.lane,Nt.lanes|=p,Dr|=p,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Zu(t){var i=On(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var w=f=f.next;do p=t(p,w.action),w=w.next;while(w!==f);Kn(p,i.memoizedState)||(yn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,u]}function Jf(){}function eh(t,i){var s=Nt,u=On(),f=i(),p=!Kn(u.memoizedState,f);if(p&&(u.memoizedState=f,yn=!0),u=u.queue,Qu(ih.bind(null,s,u,t),[t]),u.getSnapshot!==i||p||jt!==null&&jt.memoizedState.tag&1){if(s.flags|=2048,Po(9,nh.bind(null,s,u,f,i),void 0,null),qt===null)throw Error(n(349));(Pr&30)!==0||th(s,i,f)}return f}function th(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Nt.updateQueue,i===null?(i={lastEffect:null,stores:null},Nt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function nh(t,i,s,u){i.value=s,i.getSnapshot=u,rh(i)&&sh(t)}function ih(t,i,s){return s(function(){rh(i)&&sh(t)})}function rh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function sh(t){var i=bi(t,1);i!==null&&ti(i,t,1,-1)}function oh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},i.queue=t,t=t.dispatch=Nv.bind(null,Nt,t),[i.memoizedState,t]}function Po(t,i,s,u){return t={tag:t,create:i,destroy:s,deps:u,next:null},i=Nt.updateQueue,i===null?(i={lastEffect:null,stores:null},Nt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t)),t}function ah(){return On().memoizedState}function Va(t,i,s,u){var f=gi();Nt.flags|=t,f.memoizedState=Po(1|i,s,void 0,u===void 0?null:u)}function Wa(t,i,s,u){var f=On();u=u===void 0?null:u;var p=void 0;if(Gt!==null){var w=Gt.memoizedState;if(p=w.destroy,u!==null&&Xu(u,w.deps)){f.memoizedState=Po(i,s,p,u);return}}Nt.flags|=t,f.memoizedState=Po(1|i,s,p,u)}function lh(t,i){return Va(8390656,8,t,i)}function Qu(t,i){return Wa(2048,8,t,i)}function uh(t,i){return Wa(4,2,t,i)}function ch(t,i){return Wa(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fh(t,i,s){return s=s!=null?s.concat([t]):null,Wa(4,4,dh.bind(null,i,t),s)}function Ju(){}function hh(t,i){var s=On();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Xu(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function ph(t,i){var s=On();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Xu(i,u[1])?u[0]:(t=t(),s.memoizedState=[t,i],t)}function mh(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(Kn(s,i)||(s=Hd(),Nt.lanes|=s,Dr|=s,t.baseState=!0),i)}function Dv(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var u=qu.transition;qu.transition={};try{t(!1),i()}finally{xt=s,qu.transition=u}}function gh(){return On().memoizedState}function Iv(t,i,s){var u=rr(t);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,s);else if(s=$f(t,i,s,u),s!==null){var f=hn();ti(s,t,u,f),_h(s,i,u)}}function Nv(t,i,s){var u=rr(t),f={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,N=p(w,s);if(f.hasEagerState=!0,f.eagerState=N,Kn(N,w)){var U=i.interleaved;U===null?(f.next=f,Bu(i)):(f.next=U.next,U.next=f),i.interleaved=f;return}}catch{}finally{}s=$f(t,i,f,u),s!==null&&(f=hn(),ti(s,t,u,f),_h(s,i,u))}}function vh(t){var i=t.alternate;return t===Nt||i!==null&&i===Nt}function xh(t,i){Ao=Ga=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function _h(t,i,s){if((s&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,tu(t,s)}}var Ha={readContext:zn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},kv={readContext:zn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:lh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Va(4194308,4,dh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Va(4194308,4,t,i)},useInsertionEffect:function(t,i){return Va(4,2,t,i)},useMemo:function(t,i){var s=gi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var u=gi();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Iv.bind(null,Nt,t),[u.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:oh,useDebugValue:Ju,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=oh(!1),i=t[0];return t=Dv.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var u=Nt,f=gi();if(Rt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),qt===null)throw Error(n(349));(Pr&30)!==0||th(u,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,lh(ih.bind(null,u,p,t),[t]),u.flags|=2048,Po(9,nh.bind(null,u,p,s,i),void 0,null),s},useId:function(){var t=gi(),i=qt.identifierPrefix;if(Rt){var s=Ei,u=Mi;s=(u&~(1<<32-cn(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ro++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Pv++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Fv={readContext:zn,useCallback:hh,useContext:zn,useEffect:Qu,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Ku,useRef:ah,useState:function(){return Ku(Lo)},useDebugValue:Ju,useDeferredValue:function(t){var i=On();return mh(i,Gt.memoizedState,t)},useTransition:function(){var t=Ku(Lo)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1},zv={readContext:zn,useCallback:hh,useContext:zn,useEffect:Qu,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Zu,useRef:ah,useState:function(){return Zu(Lo)},useDebugValue:Ju,useDeferredValue:function(t){var i=On();return Gt===null?i.memoizedState=t:mh(i,Gt.memoizedState,t)},useTransition:function(){var t=Zu(Lo)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ec(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:H({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ja={isMounted:function(t){return(t=t._reactInternals)?$e(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var u=hn(),f=rr(t),p=Ti(u,f);p.payload=i,s!=null&&(p.callback=s),i=er(t,p,f),i!==null&&(ti(i,t,f,u),za(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=hn(),f=rr(t),p=Ti(u,f);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=er(t,p,f),i!==null&&(ti(i,t,f,u),za(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hn(),u=rr(t),f=Ti(s,u);f.tag=2,i!=null&&(f.callback=i),i=er(t,f,u),i!==null&&(ti(i,t,u,s),za(i,t,u))}};function yh(t,i,s,u,f,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,w):i.prototype&&i.prototype.isPureReactComponent?!vo(s,u)||!vo(f,p):!0}function Sh(t,i,s){var u=!1,f=Zi,p=i.contextType;return typeof p=="object"&&p!==null?p=zn(p):(f=_n(i)?Tr:nn.current,u=i.contextTypes,p=(u=u!=null)?fs(t,f):Zi),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function wh(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&ja.enqueueReplaceState(i,i.state,null)}function tc(t,i,s,u){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Gu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=zn(p):(p=_n(i)?Tr:nn.current,f.context=fs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(ec(t,i,p,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ja.enqueueReplaceState(f,f.state,null),Oa(t,s,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var s="",u=i;do s+=me(u),u=u.return;while(u);var f=s}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function nc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function ic(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Mh(t,i,s){s=Ti(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){Qa||(Qa=!0,xc=u),ic(t,i)},s}function Eh(t,i,s){s=Ti(-1,s),s.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;s.payload=function(){return u(f)},s.callback=function(){ic(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){ic(t,i),typeof u!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function bh(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new Ov;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(s)||(f.add(s),t=Qv.bind(null,t,i,s),i.then(t,t))}function Th(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ch(t,i,s,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ti(-1,1),i.tag=2,er(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Uv=D.ReactCurrentOwner,yn=!1;function fn(t,i,s,u){i.child=t===null?Xf(i,null,s,u):gs(i,t.child,s,u)}function Ah(t,i,s,u,f){s=s.render;var p=i.ref;return xs(i,f),u=$u(t,i,s,u,p,f),s=Yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Rt&&s&&Pu(i),i.flags|=1,fn(t,i,u,f),i.child)}function Rh(t,i,s,u,f){if(t===null){var p=s.type;return typeof p=="function"&&!bc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Lh(t,i,p,u,f)):(t=rl(s.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var w=p.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(w,u)&&t.ref===i.ref)return Ci(t,i,f)}return i.flags|=1,t=or(p,u),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,s,u,f){if(t!==null){var p=t.memoizedProps;if(vo(p,u)&&t.ref===i.ref)if(yn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ci(t,i,f)}return rc(t,i,s,u,f)}function Ph(t,i,s){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(ws,Rn),Rn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,St(ws,Rn),Rn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:s,St(ws,Rn),Rn|=u}else p!==null?(u=p.baseLanes|s,i.memoizedState=null):u=s,St(ws,Rn),Rn|=u;return fn(t,i,f,s),i.child}function Dh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function rc(t,i,s,u,f){var p=_n(s)?Tr:nn.current;return p=fs(i,p),xs(i,f),s=$u(t,i,s,u,p,f),u=Yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Rt&&u&&Pu(i),i.flags|=1,fn(t,i,s,f),i.child)}function Ih(t,i,s,u,f){if(_n(s)){var p=!0;Ra(i)}else p=!1;if(xs(i,f),i.stateNode===null)Xa(t,i),Sh(i,s,u),tc(i,s,u,f),u=!0;else if(t===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var U=w.context,re=s.contextType;typeof re=="object"&&re!==null?re=zn(re):(re=_n(s)?Tr:nn.current,re=fs(i,re));var ve=s.getDerivedStateFromProps,we=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||U!==re)&&wh(i,w,u,re),Ji=!1;var ge=i.memoizedState;w.state=ge,Oa(i,u,w,f),U=i.memoizedState,N!==u||ge!==U||xn.current||Ji?(typeof ve=="function"&&(ec(i,s,ve,u),U=i.memoizedState),(N=Ji||yh(i,s,N,u,ge,U,re))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=U),w.props=u,w.state=U,w.context=re,u=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Yf(t,i),N=i.memoizedProps,re=i.type===i.elementType?N:Qn(i.type,N),w.props=re,we=i.pendingProps,ge=w.context,U=s.contextType,typeof U=="object"&&U!==null?U=zn(U):(U=_n(s)?Tr:nn.current,U=fs(i,U));var Pe=s.getDerivedStateFromProps;(ve=typeof Pe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==we||ge!==U)&&wh(i,w,u,U),Ji=!1,ge=i.memoizedState,w.state=ge,Oa(i,u,w,f);var Fe=i.memoizedState;N!==we||ge!==Fe||xn.current||Ji?(typeof Pe=="function"&&(ec(i,s,Pe,u),Fe=i.memoizedState),(re=Ji||yh(i,s,re,u,ge,Fe,U)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Fe,U),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Fe,U)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Fe),w.props=u,w.state=Fe,w.context=U,u=re):(typeof w.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),u=!1)}return sc(t,i,s,u,p,f)}function sc(t,i,s,u,f,p){Dh(t,i);var w=(i.flags&128)!==0;if(!u&&!w)return f&&Of(i,s,!1),Ci(t,i,p);u=i.stateNode,Uv.current=i;var N=w&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&w?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,N,p)):fn(t,i,N,p),i.memoizedState=u.state,f&&Of(i,s,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Ff(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ff(t,i.context,!1),Vu(t,i.containerInfo)}function kh(t,i,s,u,f){return ms(),ku(f),i.flags|=256,fn(t,i,s,u),i.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,s){var u=i.pendingProps,f=It.current,p=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),St(It,f&1),t===null)return Nu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,t=u.fallback,p?(u=i.mode,p=i.child,w={mode:"hidden",children:w},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=sl(w,u,0,null),t=Fr(t,u,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ac(s),i.memoizedState=oc,t):lc(i,w));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return Bv(t,i,w,u,N,f,s);if(p){p=u.fallback,w=i.mode,f=t.child,N=f.sibling;var U={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=U,i.deletions=null):(u=or(f,U),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=or(N,p):(p=Fr(p,w,s,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,w=t.child.memoizedState,w=w===null?ac(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~s,i.memoizedState=oc,u}return p=t.child,t=p.sibling,u=or(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=u,i.memoizedState=null,u}function lc(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function qa(t,i,s,u){return u!==null&&ku(u),gs(i,t.child,null,s),t=lc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Bv(t,i,s,u,f,p,w){if(s)return i.flags&256?(i.flags&=-257,u=nc(Error(n(422))),qa(t,i,w,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=sl({mode:"visible",children:u.children},f,0,null),p=Fr(p,f,w,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&gs(i,t.child,null,w),i.child.memoizedState=ac(w),i.memoizedState=oc,p);if((i.mode&1)===0)return qa(t,i,w,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(n(419)),u=nc(p,u,void 0),qa(t,i,w,u)}if(N=(w&t.childLanes)!==0,yn||N){if(u=qt,u!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|w))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,bi(t,f),ti(u,t,f,-1))}return Ec(),u=nc(Error(n(421))),qa(t,i,w,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Jv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,An=Yi(f.nextSibling),Cn=i,Rt=!0,Zn=null,t!==null&&(kn[Fn++]=Mi,kn[Fn++]=Ei,kn[Fn++]=Cr,Mi=t.id,Ei=t.overflow,Cr=i),i=lc(i,u.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Uu(t.return,i,s)}function uc(t,i,s,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=s,p.tailMode=f)}function Oh(t,i,s){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(fn(t,i,u.children,s),u=It.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(St(It,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Ua(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),uc(i,!1,f,s,p);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ua(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}uc(i,!0,s,null,p);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=or(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=or(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Gv(t,i,s){switch(i.tag){case 3:Nh(i),ms();break;case 5:Qf(i);break;case 1:_n(i.type)&&Ra(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;St(ka,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(St(It,It.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Fh(t,i,s):(St(It,It.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);St(It,It.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Oh(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),St(It,It.current),u)break;return null;case 22:case 23:return i.lanes=0,Ph(t,i,s)}return Ci(t,i,s)}var Uh,cc,Bh,Gh;Uh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},cc=function(){},Bh=function(t,i,s,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Lr(mi.current);var p=null;switch(s){case"input":f=dt(t,f),u=dt(t,u),p=[];break;case"select":f=H({},f,{value:void 0}),u=H({},u,{value:void 0}),p=[];break;case"textarea":f=I(t,f),u=I(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ta)}Mt(s,u);var w;s=null;for(re in f)if(!u.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var N=f[re];for(w in N)N.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in u){var U=u[re];if(N=f!=null?f[re]:void 0,u.hasOwnProperty(re)&&U!==N&&(U!=null||N!=null))if(re==="style")if(N){for(w in N)!N.hasOwnProperty(w)||U&&U.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in U)U.hasOwnProperty(w)&&N[w]!==U[w]&&(s||(s={}),s[w]=U[w])}else s||(p||(p=[]),p.push(re,s)),s=U;else re==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,N=N?N.__html:void 0,U!=null&&N!==U&&(p=p||[]).push(re,U)):re==="children"?typeof U!="string"&&typeof U!="number"||(p=p||[]).push(re,""+U):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(U!=null&&re==="onScroll"&&Tt("scroll",t),p||N===U||(p=[])):(p=p||[]).push(re,U))}s&&(p=p||[]).push("style",s);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},Gh=function(t,i,s,u){s!==u&&(i.flags|=4)};function Do(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function Vv(t,i,s){var u=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(i),null;case 1:return _n(i.type)&&Aa(),sn(i),null;case 3:return u=i.stateNode,_s(),Ct(xn),Ct(nn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ia(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zn!==null&&(Sc(Zn),Zn=null))),cc(t,i),sn(i),null;case 5:Wu(i);var f=Lr(Co.current);if(s=i.type,t!==null&&i.stateNode!=null)Bh(t,i,s,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return sn(i),null}if(t=Lr(mi.current),Ia(i)){u=i.stateNode,s=i.type;var p=i.memoizedProps;switch(u[pi]=i,u[wo]=p,t=(i.mode&1)!==0,s){case"dialog":Tt("cancel",u),Tt("close",u);break;case"iframe":case"object":case"embed":Tt("load",u);break;case"video":case"audio":for(f=0;f<_o.length;f++)Tt(_o[f],u);break;case"source":Tt("error",u);break;case"img":case"image":case"link":Tt("error",u),Tt("load",u);break;case"details":Tt("toggle",u);break;case"input":Be(u,p),Tt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Tt("invalid",u);break;case"textarea":R(u,p),Tt("invalid",u)}Mt(s,p),f=null;for(var w in p)if(p.hasOwnProperty(w)){var N=p[w];w==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&ba(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&ba(u.textContent,N,t),f=["children",""+N]):o.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Tt("scroll",u)}switch(s){case"input":qe(u),nt(u,p,!0);break;case"textarea":qe(u),Me(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ta)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=be(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=w.createElement(s,{is:u.is}):(t=w.createElement(s),s==="select"&&(w=t,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):t=w.createElementNS(t,s),t[pi]=i,t[wo]=u,Uh(t,i,!1,!1),i.stateNode=t;e:{switch(w=$(s,u),s){case"dialog":Tt("cancel",t),Tt("close",t),f=u;break;case"iframe":case"object":case"embed":Tt("load",t),f=u;break;case"video":case"audio":for(f=0;f<_o.length;f++)Tt(_o[f],t);f=u;break;case"source":Tt("error",t),f=u;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),f=u;break;case"details":Tt("toggle",t),f=u;break;case"input":Be(t,u),f=dt(t,u),Tt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=H({},u,{value:void 0}),Tt("invalid",t);break;case"textarea":R(t,u),f=I(t,u),Tt("invalid",t);break;default:f=u}Mt(s,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var U=N[p];p==="style"?Qe(t,U):p==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&ce(t,U)):p==="children"?typeof U=="string"?(s!=="textarea"||U!=="")&&Ue(t,U):typeof U=="number"&&Ue(t,""+U):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?U!=null&&p==="onScroll"&&Tt("scroll",t):U!=null&&k(t,p,U,w))}switch(s){case"input":qe(t),nt(t,u,!1);break;case"textarea":qe(t),Me(t);break;case"option":u.value!=null&&t.setAttribute("value",""+_e(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?lt(t,!!u.multiple,p,!1):u.defaultValue!=null&&lt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return sn(i),null;case 6:if(t&&i.stateNode!=null)Gh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(s=Lr(Co.current),Lr(mi.current),Ia(i)){if(u=i.stateNode,s=i.memoizedProps,u[pi]=i,(p=u.nodeValue!==s)&&(t=Cn,t!==null))switch(t.tag){case 3:ba(u.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(u.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[pi]=i,i.stateNode=u}return sn(i),null;case 13:if(Ct(It),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&An!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hf(),ms(),i.flags|=98560,p=!1;else if(p=Ia(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),p=!1}else Zn!==null&&(Sc(Zn),Zn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(It.current&1)!==0?Vt===0&&(Vt=3):Ec())),i.updateQueue!==null&&(i.flags|=4),sn(i),null);case 4:return _s(),cc(t,i),t===null&&yo(i.stateNode.containerInfo),sn(i),null;case 10:return Ou(i.type._context),sn(i),null;case 17:return _n(i.type)&&Aa(),sn(i),null;case 19:if(Ct(It),p=i.memoizedState,p===null)return sn(i),null;if(u=(i.flags&128)!==0,w=p.rendering,w===null)if(u)Do(p,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ua(t),w!==null){for(i.flags|=128,Do(p,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)p=s,t=u,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return St(It,It.current&1|2),i.child}t=t.sibling}p.tail!==null&&ht()>Ms&&(i.flags|=128,u=!0,Do(p,!1),i.lanes=4194304)}else{if(!u)if(t=Ua(w),t!==null){if(i.flags|=128,u=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Do(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Rt)return sn(i),null}else 2*ht()-p.renderingStartTime>Ms&&s!==1073741824&&(i.flags|=128,u=!0,Do(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(s=p.last,s!==null?s.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=ht(),i.sibling=null,s=It.current,St(It,u?s&1|2:s&1),i):(sn(i),null);case 22:case 23:return Mc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Rn&1073741824)!==0&&(sn(i),i.subtreeFlags&6&&(i.flags|=8192)):sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Wv(t,i){switch(Du(i),i.tag){case 1:return _n(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ct(xn),Ct(nn),ju(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Wu(i),null;case 13:if(Ct(It),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ct(It),null;case 4:return _s(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var $a=!1,on=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ss(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){kt(t,i,u)}else s.current=null}function dc(t,i,s){try{s()}catch(u){kt(t,i,u)}}var Vh=!1;function jv(t,i){if(Mu=pa,t=yf(),mu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var w=0,N=-1,U=-1,re=0,ve=0,we=t,ge=null;t:for(;;){for(var Pe;we!==s||f!==0&&we.nodeType!==3||(N=w+f),we!==p||u!==0&&we.nodeType!==3||(U=w+u),we.nodeType===3&&(w+=we.nodeValue.length),(Pe=we.firstChild)!==null;)ge=we,we=Pe;for(;;){if(we===t)break t;if(ge===s&&++re===f&&(N=w),ge===p&&++ve===u&&(U=w),(Pe=we.nextSibling)!==null)break;we=ge,ge=we.parentNode}we=Pe}s=N===-1||U===-1?null:{start:N,end:U}}else s=null}s=s||{start:0,end:0}}else s=null;for(Eu={focusedElem:t,selectionRange:s},pa=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ze=Fe.memoizedProps,Ot=Fe.memoizedState,Z=i.stateNode,V=Z.getSnapshotBeforeUpdate(i.elementType===i.type?ze:Qn(i.type,ze),Ot);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return Fe=Vh,Vh=!1,Fe}function Io(t,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&dc(i,s,p)}f=f.next}while(f!==u)}}function Ya(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function fc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[wo],delete i[Au],delete i[Cv],delete i[Av])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(t=t.child,t!==null))for(hc(t,i,s),t=t.sibling;t!==null;)hc(t,i,s),t=t.sibling}function pc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(pc(t,i,s),t=t.sibling;t!==null;)pc(t,i,s),t=t.sibling}var Qt=null,Jn=!1;function tr(t,i,s){for(s=s.child;s!==null;)qh(t,i,s),s=s.sibling}function qh(t,i,s){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Vi,s)}catch{}switch(s.tag){case 5:on||Ss(s,i);case 6:var u=Qt,f=Jn;Qt=null,tr(t,i,s),Qt=u,Jn=f,Qt!==null&&(Jn?(t=Qt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):Qt.removeChild(s.stateNode));break;case 18:Qt!==null&&(Jn?(t=Qt,s=s.stateNode,t.nodeType===8?Cu(t.parentNode,s):t.nodeType===1&&Cu(t,s),co(t)):Cu(Qt,s.stateNode));break;case 4:u=Qt,f=Jn,Qt=s.stateNode.containerInfo,Jn=!0,tr(t,i,s),Qt=u,Jn=f;break;case 0:case 11:case 14:case 15:if(!on&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&dc(s,i,w),f=f.next}while(f!==u)}tr(t,i,s);break;case 1:if(!on&&(Ss(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(N){kt(s,i,N)}tr(t,i,s);break;case 21:tr(t,i,s);break;case 22:s.mode&1?(on=(u=on)||s.memoizedState!==null,tr(t,i,s),on=u):tr(t,i,s);break;default:tr(t,i,s)}}function Xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Hv),i.forEach(function(u){var f=e0.bind(null,t,u);s.has(u)||(s.add(u),u.then(f,f))})}}function ei(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u];try{var p=t,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:Qt=N.stateNode,Jn=!1;break e;case 3:Qt=N.stateNode.containerInfo,Jn=!0;break e;case 4:Qt=N.stateNode.containerInfo,Jn=!0;break e}N=N.return}if(Qt===null)throw Error(n(160));qh(p,w,f),Qt=null,Jn=!1;var U=f.alternate;U!==null&&(U.return=null),f.return=null}catch(re){kt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),vi(t),u&4){try{Io(3,t,t.return),Ya(3,t)}catch(ze){kt(t,t.return,ze)}try{Io(5,t,t.return)}catch(ze){kt(t,t.return,ze)}}break;case 1:ei(i,t),vi(t),u&512&&s!==null&&Ss(s,s.return);break;case 5:if(ei(i,t),vi(t),u&512&&s!==null&&Ss(s,s.return),t.flags&32){var f=t.stateNode;try{Ue(f,"")}catch(ze){kt(t,t.return,ze)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,w=s!==null?s.memoizedProps:p,N=t.type,U=t.updateQueue;if(t.updateQueue=null,U!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&Ve(f,p),$(N,w);var re=$(N,p);for(w=0;w<U.length;w+=2){var ve=U[w],we=U[w+1];ve==="style"?Qe(f,we):ve==="dangerouslySetInnerHTML"?ce(f,we):ve==="children"?Ue(f,we):k(f,ve,we,re)}switch(N){case"input":Ye(f,p);break;case"textarea":fe(f,p);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Pe=p.value;Pe!=null?lt(f,!!p.multiple,Pe,!1):ge!==!!p.multiple&&(p.defaultValue!=null?lt(f,!!p.multiple,p.defaultValue,!0):lt(f,!!p.multiple,p.multiple?[]:"",!1))}f[wo]=p}catch(ze){kt(t,t.return,ze)}}break;case 6:if(ei(i,t),vi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(ze){kt(t,t.return,ze)}}break;case 3:if(ei(i,t),vi(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(ze){kt(t,t.return,ze)}break;case 4:ei(i,t),vi(t);break;case 13:ei(i,t),vi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(vc=ht())),u&4&&Xh(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(on=(re=on)||ve,ei(i,t),on=re):ei(i,t),vi(t),u&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!ve&&(t.mode&1)!==0)for(Ne=t,ve=t.child;ve!==null;){for(we=Ne=ve;Ne!==null;){switch(ge=Ne,Pe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Io(4,ge,ge.return);break;case 1:Ss(ge,ge.return);var Fe=ge.stateNode;if(typeof Fe.componentWillUnmount=="function"){u=ge,s=ge.return;try{i=u,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(ze){kt(u,s,ze)}}break;case 5:Ss(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Zh(we);continue}}Pe!==null?(Pe.return=ge,Ne=Pe):Zh(we)}ve=ve.sibling}e:for(ve=null,we=t;;){if(we.tag===5){if(ve===null){ve=we;try{f=we.stateNode,re?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=we.stateNode,U=we.memoizedProps.style,w=U!=null&&U.hasOwnProperty("display")?U.display:null,N.style.display=ke("display",w))}catch(ze){kt(t,t.return,ze)}}}else if(we.tag===6){if(ve===null)try{we.stateNode.nodeValue=re?"":we.memoizedProps}catch(ze){kt(t,t.return,ze)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;ve===we&&(ve=null),we=we.return}ve===we&&(ve=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ei(i,t),vi(t),u&4&&Xh(t);break;case 21:break;default:ei(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Hh(s)){var u=s;break e}s=s.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Ue(f,""),u.flags&=-33);var p=jh(t);pc(t,p,f);break;case 3:case 4:var w=u.stateNode.containerInfo,N=jh(t);hc(t,N,w);break;default:throw Error(n(161))}}catch(U){kt(t,t.return,U)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qv(t,i,s){Ne=t,Yh(t)}function Yh(t,i,s){for(var u=(t.mode&1)!==0;Ne!==null;){var f=Ne,p=f.child;if(f.tag===22&&u){var w=f.memoizedState!==null||$a;if(!w){var N=f.alternate,U=N!==null&&N.memoizedState!==null||on;N=$a;var re=on;if($a=w,(on=U)&&!re)for(Ne=f;Ne!==null;)w=Ne,U=w.child,w.tag===22&&w.memoizedState!==null?Qh(f):U!==null?(U.return=w,Ne=U):Qh(f);for(;p!==null;)Ne=p,Yh(p),p=p.sibling;Ne=f,$a=N,on=re}Kh(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ne=p):Kh(t)}}function Kh(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:on||Ya(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!on)if(s===null)u.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:Qn(i.type,s.memoizedProps);u.componentDidUpdate(f,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Zf(i,p,u);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Zf(i,w,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var U=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&s.focus();break;case"img":U.src&&(s.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ve=re.memoizedState;if(ve!==null){var we=ve.dehydrated;we!==null&&co(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}on||i.flags&512&&fc(i)}catch(ge){kt(i,i.return,ge)}}if(i===t){Ne=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Zh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Qh(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ya(4,i)}catch(U){kt(i,s,U)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(U){kt(i,f,U)}}var p=i.return;try{fc(i)}catch(U){kt(i,p,U)}break;case 5:var w=i.return;try{fc(i)}catch(U){kt(i,w,U)}}}catch(U){kt(i,i.return,U)}if(i===t){Ne=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ne=N;break}Ne=i.return}}var Xv=Math.ceil,Ka=D.ReactCurrentDispatcher,mc=D.ReactCurrentOwner,Un=D.ReactCurrentBatchConfig,ct=0,qt=null,Ut=null,Jt=0,Rn=0,ws=Ki(0),Vt=0,No=null,Dr=0,Za=0,gc=0,ko=null,Sn=null,vc=0,Ms=1/0,Ai=null,Qa=!1,xc=null,nr=null,Ja=!1,ir=null,el=0,Fo=0,_c=null,tl=-1,nl=0;function hn(){return(ct&6)!==0?ht():tl!==-1?tl:tl=ht()}function rr(t){return(t.mode&1)===0?1:(ct&2)!==0&&Jt!==0?Jt&-Jt:Lv.transition!==null?(nl===0&&(nl=Hd()),nl):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Jd(t.type)),t)}function ti(t,i,s,u){if(50<Fo)throw Fo=0,_c=null,Error(n(185));so(t,s,u),((ct&2)===0||t!==qt)&&(t===qt&&((ct&2)===0&&(Za|=s),Vt===4&&sr(t,Jt)),wn(t,u),s===1&&ct===0&&(i.mode&1)===0&&(Ms=ht()+500,La&&Qi()))}function wn(t,i){var s=t.callbackNode;Lg(t,i);var u=da(t,t===qt?Jt:0);if(u===0)s!==null&&di(s),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(s!=null&&di(s),i===1)t.tag===0?Rv(ep.bind(null,t)):Uf(ep.bind(null,t)),bv(function(){(ct&6)===0&&Qi()}),s=null;else{switch(jd(u)){case 1:s=fi;break;case 4:s=Dt;break;case 16:s=Zt;break;case 536870912:s=Gi;break;default:s=Zt}s=lp(s,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Jh(t,i){if(tl=-1,nl=0,(ct&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Es()&&t.callbackNode!==s)return null;var u=da(t,t===qt?Jt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=il(t,u);else{i=u;var f=ct;ct|=2;var p=np();(qt!==t||Jt!==i)&&(Ai=null,Ms=ht()+500,Nr(t,i));do try{Kv();break}catch(N){tp(t,N)}while(!0);zu(),Ka.current=p,ct=f,Ut!==null?i=0:(qt=null,Jt=0,i=Vt)}if(i!==0){if(i===2&&(f=Jl(t),f!==0&&(u=f,i=yc(t,f))),i===1)throw s=No,Nr(t,0),sr(t,u),wn(t,ht()),s;if(i===6)sr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!$v(f)&&(i=il(t,u),i===2&&(p=Jl(t),p!==0&&(u=p,i=yc(t,p))),i===1))throw s=No,Nr(t,0),sr(t,u),wn(t,ht()),s;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Sn,Ai);break;case 3:if(sr(t,u),(u&130023424)===u&&(i=vc+500-ht(),10<i)){if(da(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){hn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Tu(kr.bind(null,t,Sn,Ai),i);break}kr(t,Sn,Ai);break;case 4:if(sr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var w=31-cn(u);p=1<<w,w=i[w],w>f&&(f=w),u&=~p}if(u=f,u=ht()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Xv(u/1960))-u,10<u){t.timeoutHandle=Tu(kr.bind(null,t,Sn,Ai),u);break}kr(t,Sn,Ai);break;case 5:kr(t,Sn,Ai);break;default:throw Error(n(329))}}}return wn(t,ht()),t.callbackNode===s?Jh.bind(null,t):null}function yc(t,i){var s=ko;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=il(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Sc(i)),t}function Sc(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function $v(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var f=s[u],p=f.getSnapshot;f=f.value;try{if(!Kn(p(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~gc,i&=~Za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-cn(i),u=1<<s;t[s]=-1,i&=~u}}function ep(t){if((ct&6)!==0)throw Error(n(327));Es();var i=da(t,0);if((i&1)===0)return wn(t,ht()),null;var s=il(t,i);if(t.tag!==0&&s===2){var u=Jl(t);u!==0&&(i=u,s=yc(t,u))}if(s===1)throw s=No,Nr(t,0),sr(t,i),wn(t,ht()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Sn,Ai),wn(t,ht()),null}function wc(t,i){var s=ct;ct|=1;try{return t(i)}finally{ct=s,ct===0&&(Ms=ht()+500,La&&Qi())}}function Ir(t){ir!==null&&ir.tag===0&&(ct&6)===0&&Es();var i=ct;ct|=1;var s=Un.transition,u=xt;try{if(Un.transition=null,xt=1,t)return t()}finally{xt=u,Un.transition=s,ct=i,(ct&6)===0&&Qi()}}function Mc(){Rn=ws.current,Ct(ws)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Ev(s)),Ut!==null)for(s=Ut.return;s!==null;){var u=s;switch(Du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:_s(),Ct(xn),Ct(nn),ju();break;case 5:Wu(u);break;case 4:_s();break;case 13:Ct(It);break;case 19:Ct(It);break;case 10:Ou(u.type._context);break;case 22:case 23:Mc()}s=s.return}if(qt=t,Ut=t=or(t.current,null),Jt=Rn=i,Vt=0,No=null,gc=Za=Dr=0,Sn=ko=null,Rr!==null){for(i=0;i<Rr.length;i++)if(s=Rr[i],u=s.interleaved,u!==null){s.interleaved=null;var f=u.next,p=s.pending;if(p!==null){var w=p.next;p.next=f,u.next=w}s.pending=u}Rr=null}return t}function tp(t,i){do{var s=Ut;try{if(zu(),Ba.current=Ha,Ga){for(var u=Nt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ga=!1}if(Pr=0,jt=Gt=Nt=null,Ao=!1,Ro=0,mc.current=null,s===null||s.return===null){Vt=1,No=i,Ut=null;break}e:{var p=t,w=s.return,N=s,U=i;if(i=Jt,N.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var re=U,ve=N,we=ve.tag;if((ve.mode&1)===0&&(we===0||we===11||we===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Pe=Th(w);if(Pe!==null){Pe.flags&=-257,Ch(Pe,w,N,p,i),Pe.mode&1&&bh(p,re,i),i=Pe,U=re;var Fe=i.updateQueue;if(Fe===null){var ze=new Set;ze.add(U),i.updateQueue=ze}else Fe.add(U);break e}else{if((i&1)===0){bh(p,re,i),Ec();break e}U=Error(n(426))}}else if(Rt&&N.mode&1){var Ot=Th(w);if(Ot!==null){(Ot.flags&65536)===0&&(Ot.flags|=256),Ch(Ot,w,N,p,i),ku(ys(U,N));break e}}p=U=ys(U,N),Vt!==4&&(Vt=2),ko===null?ko=[p]:ko.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=Mh(p,U,i);Kf(p,Z);break e;case 1:N=U;var V=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(nr===null||!nr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Eh(p,N,i);Kf(p,Ee);break e}}p=p.return}while(p!==null)}rp(s)}catch(Oe){i=Oe,Ut===s&&s!==null&&(Ut=s=s.return);continue}break}while(!0)}function np(){var t=Ka.current;return Ka.current=Ha,t===null?Ha:t}function Ec(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||(Dr&268435455)===0&&(Za&268435455)===0||sr(qt,Jt)}function il(t,i){var s=ct;ct|=2;var u=np();(qt!==t||Jt!==i)&&(Ai=null,Nr(t,i));do try{Yv();break}catch(f){tp(t,f)}while(!0);if(zu(),ct=s,Ka.current=u,Ut!==null)throw Error(n(261));return qt=null,Jt=0,Vt}function Yv(){for(;Ut!==null;)ip(Ut)}function Kv(){for(;Ut!==null&&!Ui();)ip(Ut)}function ip(t){var i=ap(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,i===null?rp(t):Ut=i,mc.current=null}function rp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=Vv(s,i,Rn),s!==null){Ut=s;return}}else{if(s=Wv(s,i),s!==null){s.flags&=32767,Ut=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ut=null;return}}if(i=i.sibling,i!==null){Ut=i;return}Ut=i=t}while(i!==null);Vt===0&&(Vt=5)}function kr(t,i,s){var u=xt,f=Un.transition;try{Un.transition=null,xt=1,Zv(t,i,s,u)}finally{Un.transition=f,xt=u}return null}function Zv(t,i,s,u){do Es();while(ir!==null);if((ct&6)!==0)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Pg(t,p),t===qt&&(Ut=qt=null,Jt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ja||(Ja=!0,lp(Zt,function(){return Es(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Un.transition,Un.transition=null;var w=xt;xt=1;var N=ct;ct|=4,mc.current=null,jv(t,s),$h(s,t),vv(Eu),pa=!!Mu,Eu=Mu=null,t.current=s,qv(s),Bi(),ct=N,xt=w,Un.transition=p}else t.current=s;if(Ja&&(Ja=!1,ir=t,el=f),p=t.pendingLanes,p===0&&(nr=null),Mr(s.stateNode),wn(t,ht()),i!==null)for(u=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],u(f.value,{componentStack:f.stack,digest:f.digest});if(Qa)throw Qa=!1,t=xc,xc=null,t;return(el&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===_c?Fo++:(Fo=0,_c=t):Fo=0,Qi(),null}function Es(){if(ir!==null){var t=jd(el),i=Un.transition,s=xt;try{if(Un.transition=null,xt=16>t?16:t,ir===null)var u=!1;else{if(t=ir,ir=null,el=0,(ct&6)!==0)throw Error(n(331));var f=ct;for(ct|=4,Ne=t.current;Ne!==null;){var p=Ne,w=p.child;if((Ne.flags&16)!==0){var N=p.deletions;if(N!==null){for(var U=0;U<N.length;U++){var re=N[U];for(Ne=re;Ne!==null;){var ve=Ne;switch(ve.tag){case 0:case 11:case 15:Io(8,ve,p)}var we=ve.child;if(we!==null)we.return=ve,Ne=we;else for(;Ne!==null;){ve=Ne;var ge=ve.sibling,Pe=ve.return;if(Wh(ve),ve===re){Ne=null;break}if(ge!==null){ge.return=Pe,Ne=ge;break}Ne=Pe}}}var Fe=p.alternate;if(Fe!==null){var ze=Fe.child;if(ze!==null){Fe.child=null;do{var Ot=ze.sibling;ze.sibling=null,ze=Ot}while(ze!==null)}}Ne=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Ne=w;else e:for(;Ne!==null;){if(p=Ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Io(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Ne=Z;break e}Ne=p.return}}var V=t.current;for(Ne=V;Ne!==null;){w=Ne;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,Ne=J;else e:for(w=V;Ne!==null;){if(N=Ne,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ya(9,N)}}catch(Oe){kt(N,N.return,Oe)}if(N===w){Ne=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Ne=Ee;break e}Ne=N.return}}if(ct=f,Qi(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Vi,t)}catch{}u=!0}return u}finally{xt=s,Un.transition=i}}return!1}function sp(t,i,s){i=ys(s,i),i=Mh(t,i,1),t=er(t,i,1),i=hn(),t!==null&&(so(t,1,i),wn(t,i))}function kt(t,i,s){if(t.tag===3)sp(t,t,s);else for(;i!==null;){if(i.tag===3){sp(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(nr===null||!nr.has(u))){t=ys(s,t),t=Eh(i,t,1),i=er(i,t,1),t=hn(),i!==null&&(so(i,1,t),wn(i,t));break}}i=i.return}}function Qv(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),i=hn(),t.pingedLanes|=t.suspendedLanes&s,qt===t&&(Jt&s)===s&&(Vt===4||Vt===3&&(Jt&130023424)===Jt&&500>ht()-vc?Nr(t,0):gc|=s),wn(t,i)}function op(t,i){i===0&&((t.mode&1)===0?i=1:(i=ca,ca<<=1,(ca&130023424)===0&&(ca=4194304)));var s=hn();t=bi(t,i),t!==null&&(so(t,i,s),wn(t,s))}function Jv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),op(t,s)}function e0(t,i){var s=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),op(t,s)}var ap;ap=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,Gv(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Rt&&(i.flags&1048576)!==0&&Bf(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xa(t,i),t=i.pendingProps;var f=fs(i,nn.current);xs(i,s),f=$u(null,i,u,t,f,s);var p=Yu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_n(u)?(p=!0,Ra(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gu(i),f.updater=ja,i.stateNode=f,f._reactInternals=i,tc(i,u,t,s),i=sc(null,i,u,!0,p,s)):(i.tag=0,Rt&&p&&Pu(i),fn(null,i,f,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Xa(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=n0(u),t=Qn(u,t),f){case 0:i=rc(null,i,u,t,s);break e;case 1:i=Ih(null,i,u,t,s);break e;case 11:i=Ah(null,i,u,t,s);break e;case 14:i=Rh(null,i,u,Qn(u.type,t),s);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Qn(u,f),rc(t,i,u,f,s);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Qn(u,f),Ih(t,i,u,f,s);case 3:e:{if(Nh(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Yf(t,i),Oa(i,u,null,s);var w=i.memoizedState;if(u=w.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ys(Error(n(423)),i),i=kh(t,i,u,s,f);break e}else if(u!==f){f=ys(Error(n(424)),i),i=kh(t,i,u,s,f);break e}else for(An=Yi(i.stateNode.containerInfo.firstChild),Cn=i,Rt=!0,Zn=null,s=Xf(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),u===f){i=Ci(t,i,s);break e}fn(t,i,u,s)}i=i.child}return i;case 5:return Qf(i),t===null&&Nu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,w=f.children,bu(u,f)?w=null:p!==null&&bu(u,p)&&(i.flags|=32),Dh(t,i),fn(t,i,w,s),i.child;case 6:return t===null&&Nu(i),null;case 13:return Fh(t,i,s);case 4:return Vu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=gs(i,null,u,s):fn(t,i,u,s),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Qn(u,f),Ah(t,i,u,f,s);case 7:return fn(t,i,i.pendingProps,s),i.child;case 8:return fn(t,i,i.pendingProps.children,s),i.child;case 12:return fn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,w=f.value,St(ka,u._currentValue),u._currentValue=w,p!==null)if(Kn(p.value,w)){if(p.children===f.children&&!xn.current){i=Ci(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){w=p.child;for(var U=N.firstContext;U!==null;){if(U.context===u){if(p.tag===1){U=Ti(-1,s&-s),U.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var ve=re.pending;ve===null?U.next=U:(U.next=ve.next,ve.next=U),re.pending=U}}p.lanes|=s,U=p.alternate,U!==null&&(U.lanes|=s),Uu(p.return,s,i),N.lanes|=s;break}U=U.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=s,N=w.alternate,N!==null&&(N.lanes|=s),Uu(w,s,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}fn(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,xs(i,s),f=zn(f),u=u(f),i.flags|=1,fn(t,i,u,s),i.child;case 14:return u=i.type,f=Qn(u,i.pendingProps),f=Qn(u.type,f),Rh(t,i,u,f,s);case 15:return Lh(t,i,i.type,i.pendingProps,s);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Qn(u,f),Xa(t,i),i.tag=1,_n(u)?(t=!0,Ra(i)):t=!1,xs(i,s),Sh(i,u,f),tc(i,u,f,s),sc(null,i,u,!0,t,s);case 19:return Oh(t,i,s);case 22:return Ph(t,i,s)}throw Error(n(156,i.tag))};function lp(t,i){return bt(t,i)}function t0(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,s,u){return new t0(t,i,s,u)}function bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n0(t){if(typeof t=="function")return bc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ie)return 14}return 2}function or(t,i){var s=t.alternate;return s===null?(s=Bn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function rl(t,i,s,u,f,p){var w=2;if(u=t,typeof t=="function")bc(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case j:return Fr(s.children,f,p,i);case E:w=8,f|=8;break;case z:return t=Bn(12,s,i,f|2),t.elementType=z,t.lanes=p,t;case ae:return t=Bn(13,s,i,f),t.elementType=ae,t.lanes=p,t;case G:return t=Bn(19,s,i,f),t.elementType=G,t.lanes=p,t;case se:return sl(s,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:w=10;break e;case K:w=9;break e;case ne:w=11;break e;case ie:w=14;break e;case ee:w=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(w,s,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Fr(t,i,s,u){return t=Bn(7,t,u,i),t.lanes=s,t}function sl(t,i,s,u){return t=Bn(22,t,u,i),t.elementType=se,t.lanes=s,t.stateNode={isHidden:!1},t}function Tc(t,i,s){return t=Bn(6,t,null,i),t.lanes=s,t}function Cc(t,i,s){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function i0(t,i,s,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Ac(t,i,s,u,f,p,w,N,U){return t=new i0(t,i,s,N,U),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Bn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(p),t}function r0(t,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:t,containerInfo:i,implementation:s}}function up(t){if(!t)return Zi;t=t._reactInternals;e:{if($e(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(_n(s))return zf(t,s,i)}return i}function cp(t,i,s,u,f,p,w,N,U){return t=Ac(s,u,!0,t,f,p,w,N,U),t.context=up(null),s=t.current,u=hn(),f=rr(s),p=Ti(u,f),p.callback=i??null,er(s,p,f),t.current.lanes=f,so(t,f,u),wn(t,u),t}function ol(t,i,s,u){var f=i.current,p=hn(),w=rr(f);return s=up(s),i.context===null?i.context=s:i.pendingContext=s,i=Ti(p,w),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=er(f,i,w),t!==null&&(ti(t,f,w,p),za(t,f,w)),w}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Rc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function s0(){return null}var fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lc(t){this._internalRoot=t}ll.prototype.render=Lc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},ll.prototype.unmount=Lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){ol(null,t,null,null)}),i[Si]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=$d();t={blockedOn:null,target:t,priority:i};for(var s=0;s<qi.length&&i!==0&&i<qi[s].priority;s++);qi.splice(s,0,t),s===0&&Zd(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function o0(t,i,s,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var re=al(w);p.call(re)}}var w=cp(i,u,t,0,null,!1,!1,"",hp);return t._reactRootContainer=w,t[Si]=w.current,yo(t.nodeType===8?t.parentNode:t),Ir(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var re=al(U);N.call(re)}}var U=Ac(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=U,t[Si]=U.current,yo(t.nodeType===8?t.parentNode:t),Ir(function(){ol(i,U,s,u)}),U}function cl(t,i,s,u,f){var p=s._reactRootContainer;if(p){var w=p;if(typeof f=="function"){var N=f;f=function(){var U=al(w);N.call(U)}}ol(i,w,t,f)}else w=o0(s,i,t,f,u);return al(w)}qd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=ro(i.pendingLanes);s!==0&&(tu(i,s|1),wn(i,ht()),(ct&6)===0&&(Ms=ht()+500,Qi()))}break;case 13:Ir(function(){var u=bi(t,1);if(u!==null){var f=hn();ti(u,t,1,f)}}),Rc(t,1)}},nu=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var s=hn();ti(i,t,134217728,s)}Rc(t,134217728)}},Xd=function(t){if(t.tag===13){var i=rr(t),s=bi(t,i);if(s!==null){var u=hn();ti(s,t,i,u)}Rc(t,i)}},$d=function(){return xt},Yd=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Re=function(t,i,s){switch(i){case"input":if(Ye(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var f=Ca(u);if(!f)throw Error(n(90));Ge(u),Ye(u,f)}}}break;case"textarea":fe(t,s);break;case"select":i=s.value,i!=null&&lt(t,!!s.multiple,i,!1)}},Et=wc,Nn=Ir;var a0={usingClientEntryPoint:!1,Events:[Mo,cs,Ca,At,Yn,wc]},zo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l0={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=at(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||s0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Vi=dl.inject(l0),yt=dl}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0,Mn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(n(200));return r0(t,i,null,s)},Mn.createRoot=function(t,i){if(!Pc(t))throw Error(n(299));var s=!1,u="",f=fp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Ac(t,1,!1,null,null,s,!1,u,f),t[Si]=i.current,yo(t.nodeType===8?t.parentNode:t),new Lc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=at(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return Ir(t)},Mn.hydrate=function(t,i,s){if(!ul(i))throw Error(n(200));return cl(null,t,i,!0,s)},Mn.hydrateRoot=function(t,i,s){if(!Pc(t))throw Error(n(405));var u=s!=null&&s.hydratedSources||null,f=!1,p="",w=fp;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=cp(i,null,t,1,s??null,f,!1,p,w),t[Si]=i.current,yo(t),u)for(t=0;t<u.length;t++)s=u[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new ll(i)},Mn.render=function(t,i,s){if(!ul(i))throw Error(n(200));return cl(null,t,i,!1,s)},Mn.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Mn.unstable_batchedUpdates=wc,Mn.unstable_renderSubtreeIntoContainer=function(t,i,s,u){if(!ul(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,s,!1,u)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var Sp;function v0(){if(Sp)return Nc.exports;Sp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),Nc.exports=g0(),Nc.exports}var wp;function x0(){if(wp)return fl;wp=1;var l=v0();return fl.createRoot=l.createRoot,fl.hydrateRoot=l.hydrateRoot,fl}var _0=x0();const y0=Ym(_0);function S0({active:l}){const[e,n]=le.useState(""),[r,o]=le.useState("");return le.useEffect(()=>{const a=()=>{const c=new Date;n(c.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),o(c.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"}))};a();const d=setInterval(a,1e3);return()=>clearInterval(d)},[]),A.jsxs("div",{className:`clock-screen ${l?"active":""}`,"aria-live":"polite",children:[A.jsx("div",{className:"clock-time",children:e}),A.jsx("div",{className:"clock-date",children:r}),A.jsxs("div",{className:"clock-comfort-card",children:[A.jsx("div",{className:"clock-comfort-title",children:"You are home, safe and loved."}),A.jsx("div",{className:"clock-comfort-subtitle",children:"Anchor is keeping watch. When a loved one walks in, we will remind you who they are."}),A.jsxs("div",{style:{marginTop:"14px",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(39,82,61,0.25)",border:"1px solid rgba(52,211,153,0.35)",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",color:"var(--primary-accent, #34d399)",fontWeight:500},children:[A.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981"}}),"🎙️ Voice & Vision Ready"]})]})]})}const w0={rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null,enabled:!0};let _i={...w0},Gs=null,M0=[];function ta(){return typeof window>"u"?null:window.speechSynthesis||null}function E0(){return ta()!==null}function Vs(l,e=""){console.log(`[TTS] ${l}${e?": "+e:""}`)}function b0(){const l=ta();if(!l)return null;const e=l.getVoices();if(!e||e.length===0)return null;if(_i.voiceName){const c=e.find(m=>m.name===_i.voiceName);if(c)return c}const n=_i.language||"en-US",r=n.split("-")[0],o=["Google US English","Google UK English Female","Microsoft Zira","Samantha","Karen","Daniel","Google हिन्दी"];for(const c of o){const m=e.find(h=>h.name.includes(c)&&h.lang.startsWith(r));if(m)return m}const a=e.find(c=>c.lang===n);if(a)return a;const d=e.find(c=>c.lang.startsWith(r));return d||e[0]||null}function Ho(l){for(const e of M0)try{e(l)}catch(n){console.error("[TTS] Speaking change listener error:",n)}}function hl(l,e={}){return new Promise(n=>{if(!_i.enabled||!E0()||!l||!l.trim()){n();return}const r=ta(),o=new SpeechSynthesisUtterance(l.trim());o.rate=e.rate??_i.rate,o.pitch=e.pitch??_i.pitch,o.volume=e.volume??_i.volume,o.lang=e.language??_i.language;const a=b0();a&&(o.voice=a),Gs=o,Ho(!0),Vs("TTS_STARTED",l.substring(0,60)+(l.length>60?"...":"")),o.onend=()=>{Gs=null,Ho(!1),Vs("TTS_COMPLETED"),n()},o.onerror=d=>{Gs=null,Ho(!1),d.error!=="interrupted"&&d.error!=="canceled"&&Vs("TTS_ERROR",d.error),n()};try{r.speak(o)}catch(d){Gs=null,Ho(!1),Vs("TTS_ERROR",d.message),n()}})}function pl(){const l=ta();if(l)try{l.cancel()}catch(e){Vs("TTS_ERROR","cancel failed: "+e.message)}Gs&&(Gs=null,Ho(!1),Vs("TTS_INTERRUPTED"))}function T0(l){_i={..._i,...l}}function C0(){const l=ta();return l?l.getVoices().map(e=>({name:e.name,lang:e.lang,default:e.default})):[]}const Mp="https://remindly-2-tqcx.onrender.com";function Pd(){return typeof window>"u"?Mp:window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?window.location.port!=="8000"?`http://${window.location.hostname}:8000`:window.location.origin:window.location.hostname.includes("vercel.app")?Mp:window.location.origin}function A0(){const l=Pd(),e=l.startsWith("https")?"wss:":"ws:",n=l.replace(/^https?:\/\//,"");return`${e}//${n}/ws`}function R0(){const l=Pd(),e=l.startsWith("https")?"wss:":"ws:",n=l.replace(/^https?:\/\//,"");return`${e}//${n}/ws/remote_frame`}function Pt(l){const e=Pd(),n=l.startsWith("/")?l:`/${l}`;return typeof window<"u"&&window.location.origin===e?n:`${e}${n}`}const L0={language:"en-US",silenceTimeoutMs:1800,maxListeningDurationMs:16e3,fallbackSliceMs:3500},mn={IDLE:"IDLE",LISTENING:"LISTENING",MUTED:"MUTED",PROCESSING:"PROCESSING",RESTARTING:"RESTARTING"};let En=mn.IDLE,vr=null,Kr=!1,Wr=null,zl=null,Hr=null,Ys={...L0},Zr=null,Qr=null,yr="",Vn=null,$o=null,Ol=null,Us=[];function Dd(){return typeof window>"u"?null:window.SpeechRecognition||window.webkitSpeechRecognition||null}function Ht(l,e=""){console.log(`[STT-Loop] ${l}${e?": "+e:""}`)}function P0(l={}){Ys={...Ys,...l}}function D0(){const l=Dd()!==null,e=typeof window<"u"&&!!window.MediaRecorder;return l||e}function Km(l,e){if(Zr=l||(()=>{}),Qr=e||(()=>{}),yr="",Kr){Ht("MUTED","Listening queued — muted for TTS"),En=mn.MUTED;return}ql(),En=mn.LISTENING;const n=Dd();n?Zm(n):(Ht("FALLBACK_MODE","Web Speech API not available — using Groq Whisper fallback"),Vl()),zl=setTimeout(()=>{Ht("MAX_DURATION_REACHED"),Id()},Ys.maxListeningDurationMs)}function Uo(){Ht("STOP_REQUESTED"),ql(),En=mn.IDLE,yr=""}function zc(){Kr=!0,En===mn.LISTENING&&(Ht("MUTED_FOR_TTS"),ql(),En=mn.MUTED)}function Bo(){Kr=!1,En===mn.MUTED&&(Ht("UNMUTED","Resuming speech listening loop"),Zr||Qr?Km(Zr,Qr):En=mn.IDLE)}function Zm(l){try{const e=new l;vr=e,e.continuous=!0,e.interimResults=!0,e.lang=Ys.language,e.maxAlternatives=1;let n="";e.onstart=()=>{Ht("WEB_SPEECH_STARTED"),En=mn.LISTENING},e.onresult=r=>{if(En!==mn.LISTENING||Kr)return;I0();let o="";for(let d=r.resultIndex;d<r.results.length;d++){const c=r.results[d],m=c[0].transcript;c.isFinal?n+=m+" ":o+=m}const a=(n+o).trim();a&&(yr=a,Zr&&Zr(a,!1))},e.onerror=r=>{Ht("WEB_SPEECH_ERROR",r.error),r.error==="not-allowed"||r.error==="service-not-allowed"?(Ht("FALLBACK_TRIGGERED","Switching to Groq Whisper engine"),Nd(),Vl()):r.error==="no-speech"||r.error==="network"&&(Ht("NETWORK_ERROR","Retrying speech recognition"),Ep(600))},e.onend=()=>{Ht("WEB_SPEECH_ENDED"),En===mn.LISTENING&&!Kr&&(yr.trim()?Id():Ep(300))},e.start()}catch(e){Ht("WEB_SPEECH_INIT_FAILED",e.message),Vl()}}function Ep(l=300){Hr&&clearTimeout(Hr),!(En!==mn.LISTENING||Kr)&&(Hr=setTimeout(()=>{if(Hr=null,En===mn.LISTENING&&!Kr){Nd();const e=Dd();e?Zm(e):Vl()}},l))}async function Vl(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Ht("MIC_UNAVAILABLE","No getUserMedia support");return}try{$o=await navigator.mediaDevices.getUserMedia({audio:!0}),Vn=new MediaRecorder($o),Us=[],Vn.ondataavailable=l=>{l.data&&l.data.size>0&&Us.push(l.data)},Vn.onstop=async()=>{if(Us.length===0)return;const l=new Blob(Us,{type:Vn.mimeType||"audio/webm"});if(Us=[],!(l.size<400||En!==mn.LISTENING))try{Ht("SENDING_TO_WHISPER",`${l.size} bytes`);const e=await fetch(Pt("/api/transcribe"),{method:"POST",headers:{"Content-Type":l.type||"audio/webm"},body:l});if(e.ok){const n=await e.json();if(n.success&&n.transcript){const r=n.transcript.trim();Ht("WHISPER_RESULT",r),yr=r,Zr&&Zr(r,!0),Qr&&Qr(r)}}}catch(e){Ht("WHISPER_FALLBACK_ERROR",e.message)}},Vn.start(),Ht("WHISPER_FALLBACK_RECORDING"),Ol=setTimeout(()=>{Vn&&Vn.state==="recording"&&Vn.stop()},Ys.fallbackSliceMs)}catch(l){Ht("MIC_PERMISSION_DENIED",l.message)}}function I0(){Wr&&clearTimeout(Wr),Wr=setTimeout(()=>{Wr=null,Ht("SILENCE_DETECTED",yr),yr.trim()&&Id()},Ys.silenceTimeoutMs)}function Id(){const l=yr.trim();ql(),En=mn.IDLE,l&&Qr&&Qr(l)}function Nd(){if(vr){try{vr.onstart=null,vr.onresult=null,vr.onerror=null,vr.onend=null,vr.abort()}catch{}vr=null}}function N0(){if(Ol&&(clearTimeout(Ol),Ol=null),Vn&&Vn.state!=="inactive"){try{Vn.stop()}catch{}Vn=null}$o&&($o.getTracks().forEach(l=>l.stop()),$o=null),Us=[]}function ql(){Wr&&(clearTimeout(Wr),Wr=null),zl&&(clearTimeout(zl),zl=null),Hr&&(clearTimeout(Hr),Hr=null),Nd(),N0()}const xr={IDENTITY:"IDENTITY",LAST_CONVERSATION:"LAST_CONVERSATION",MEMORY_QUERY:"MEMORY_QUERY",RELATIONSHIP:"RELATIONSHIP",REMINDER:"REMINDER",GENERAL:"GENERAL",UNKNOWN:"UNKNOWN"},k0=[{intent:xr.IDENTITY,patterns:[/who\s+is\s+(this|here|that)/i,/who('s| is)\s+this/i,/who\s+are\s+you/i,/do\s+i\s+know\s+(you|them|this)/i,/what('s| is)\s+(your|their|his|her)\s+name/i]},{intent:xr.LAST_CONVERSATION,patterns:[/what\s+did\s+\w+\s+tell\s+me/i,/what\s+did\s+we\s+talk\s+about/i,/what\s+did\s+(she|he|they)\s+(say|tell|mention)/i,/last\s+time/i,/last\s+visit/i,/what\s+happened\s+(last|before)/i,/what\s+were\s+we\s+(talking|discussing)/i]},{intent:xr.MEMORY_QUERY,patterns:[/when\s+did\s+i\s+(last\s+)?(see|meet|talk)/i,/tell\s+me\s+about/i,/what\s+about/i,/what\s+do\s+i\s+know\s+about/i,/do\s+you\s+(know|remember)\s+about/i]},{intent:xr.RELATIONSHIP,patterns:[/how\s+do\s+i\s+know/i,/is\s+\w+\s+my/i,/are\s+(they|you)\s+my/i,/what('s| is)\s+(my|our)\s+relationship/i,/(my|our)\s+(daughter|son|wife|husband|friend|sister|brother)/i]},{intent:xr.REMINDER,patterns:[/remind\s+me/i,/what('s| is)\s+next/i,/when\s+is/i,/what\s+do\s+i\s+(need|have)\s+to\s+do/i,/any\s+(plans|appointments)/i]}];function F0(l,e=null){if(!l||!l.trim())return{intent:xr.UNKNOWN,entities:{}};const n=l.trim().toLowerCase();for(const{intent:o,patterns:a}of k0)for(const d of a)if(d.test(n))return{intent:o,entities:bp(n,e)};return n.split(/\s+/).filter(Boolean).length<2?{intent:xr.UNKNOWN,entities:{}}:{intent:xr.GENERAL,entities:bp(n,e)}}function bp(l,e){const n={};if(e&&e.name){const r=e.name.toLowerCase();l.includes(r)&&(n.personName=e.name,n.personId=e.person_id)}return n}const wt={IDLE:"IDLE",RECOGNIZED:"RECOGNIZED",INTRODUCING:"INTRODUCING",LISTENING:"LISTENING",THINKING:"THINKING",SPEAKING:"SPEAKING",VISITOR_LEFT:"VISITOR_LEFT"},z0=300*1e3,O0=500,U0=15e3,B0=20;function G0({recognizedPerson:l=null,ttsEnabled:e=!0,interactionEnabled:n=!0,autoListenEnabled:r=!0}={}){const[o,a]=le.useState(wt.IDLE),[d,c]=le.useState(""),[m,h]=le.useState(""),v=le.useRef({personId:null,timestamp:0}),g=le.useRef(0),x=le.useRef(null),S=le.useRef(null),M=le.useRef(!0),y=le.useRef(null);le.useEffect(()=>{y.current=l},[l]),le.useEffect(()=>(M.current=!0,()=>{M.current=!1,pl(),Uo(),Bo(),_()}),[]);function _(){x.current&&(clearTimeout(x.current),x.current=null),S.current&&(clearTimeout(S.current),S.current=null)}le.useEffect(()=>{if(!l){o!==wt.IDLE&&F();return}const E=(l.person_id||l.name||"").toLowerCase(),z=(l.name||"").toLowerCase(),Y=v.current,K=Y.key&&(Y.key===E||Y.name===z||Y.key===z),ne=Date.now()-Y.timestamp<z0;if(K&&ne){o===wt.IDLE&&a(wt.RECOGNIZED);return}v.current={key:E,name:z,timestamp:Date.now()},(o===wt.INTRODUCING||o===wt.SPEAKING)&&(pl(),Uo()),a(wt.RECOGNIZED),g.current=0,e&&b(l)},[l]);async function b(E){var ae,G;if(!M.current)return;a(wt.INTRODUCING),zc();const z=E.name||"A loved one",Y=(E.relationship||"").trim().toLowerCase(),K=E.note||null;let ne;if(Y&&Y!=="visitor"&&Y!=="loved one"?ne=`${z} is here. They are your ${Y}.`:ne=`${z} is here.`,c(ne),await hl(ne),!(!M.current||((ae=y.current)==null?void 0:ae.person_id)!==E.person_id)){if(K&&!K.toLowerCase().includes("processing audio")&&!K.toLowerCase().includes("no speech detected")&&!K.toLowerCase().includes("no audio captured")){const ie=K.length>120?K.substring(0,120)+".":K;c(ie),await hl(ie)}!M.current||((G=y.current)==null?void 0:G.person_id)!==E.person_id||L()}}function L(){if(!n||!r){a(wt.RECOGNIZED),Bo();return}S.current=setTimeout(()=>{S.current=null,M.current&&y.current&&(Bo(),k())},O0)}function k(){if(!(!M.current||!y.current)){if(!D0()){a(wt.RECOGNIZED);return}if(g.current>=B0){a(wt.RECOGNIZED);return}a(wt.LISTENING),h(""),c(""),x.current=setTimeout(()=>{x.current=null,M.current&&o===wt.LISTENING&&(Uo(),a(wt.RECOGNIZED))},U0),Km((E,z)=>{M.current&&h(E)},E=>{x.current&&(clearTimeout(x.current),x.current=null),M.current&&E&&y.current?D(E,y.current):M.current&&a(wt.RECOGNIZED)})}}async function D(E,z){if(!M.current)return;a(wt.THINKING),h(E),g.current++;const{intent:Y}=F0(E,z);console.log(`[Interaction] PATIENT_QUERY: "${E}" → intent: ${Y}`);try{const K=await fetch(Pt("/api/patient/ask"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:E,person_id:z.person_id,patient_id:"00000000-0000-0000-0000-000000000001"})});if(!K.ok)throw new Error(`API error: ${K.status}`);const ae=(await K.json()).answer||C(z);if(!M.current||!y.current||(a(wt.SPEAKING),c(ae),zc(),await hl(ae),!M.current||!y.current))return;L()}catch(K){if(console.error("[Interaction] Error processing patient question:",K),!M.current||!y.current)return;const ne=C(z);if(a(wt.SPEAKING),c(ne),zc(),await hl(ne),!M.current||!y.current)return;L()}}function C(E){const z=(E==null?void 0:E.name)||"Your visitor",Y=(E==null?void 0:E.relationship)||"";return Y&&Y.toLowerCase()!=="visitor"&&Y.toLowerCase()!=="loved one"?`${z} is here. They are your ${Y.toLowerCase()}.`:`${z} is here with you.`}function F(){_(),pl(),Uo(),Bo(),a(wt.VISITOR_LEFT),c(""),h(""),g.current=0,setTimeout(()=>{M.current&&a(wt.IDLE)},500)}const j=le.useCallback(()=>{_(),pl(),Uo(),Bo(),a(wt.RECOGNIZED),c(""),h("")},[]);return{state:o,systemResponse:d,patientTranscript:m,stopInteraction:j}}function V0({person:l,active:e,interactionState:n=wt.RECOGNIZED,systemResponse:r="",patientTranscript:o=""}){if(!l)return null;const a=l.name||"A loved one",d=(l.relationship||"Loved One").trim(),c=/^(daughter|son|grandson|granddaughter|sister|brother|husband|wife|friend|caregiver|nurse)/i.test(d)?`Your ${d.toLowerCase()} 🌿`:`${d} 🌿`,m=l.note?`"${l.note}"`:"This is the start of your time together today.",h=(a[0]||"A").toUpperCase(),v=l.avatar_color||"var(--primary)";let g="Anchor is keeping watch",x="Remembering your conversation gently.",S="interaction-idle";switch(n){case wt.INTRODUCING:case wt.SPEAKING:g="Anchor is speaking",x="",S="interaction-speaking";break;case wt.LISTENING:g="Anchor is listening",x="You can ask me anything.",S="interaction-listening";break;case wt.THINKING:g="Let me think",x="",S="interaction-thinking";break;default:g="Anchor is listening with care",x="Remembering your conversation gently.",S="interaction-idle"}return A.jsxs("div",{className:`recognition-card ${e?"active":""}`,"aria-live":"assertive",children:[A.jsxs("div",{className:"visitor-header",children:[A.jsx("div",{className:"visitor-avatar-large",style:{background:v},children:h}),A.jsxs("div",{className:"visitor-meta",children:[A.jsx("h2",{children:a}),A.jsx("div",{className:"relationship-badge",children:c})]})]}),A.jsxs("div",{className:"memory-anchor-card",children:[A.jsx("div",{className:"memory-header-row",children:A.jsx("span",{children:"✨ Last Visit Memory"})}),A.jsx("div",{className:"memory-text",children:m})]}),r&&A.jsx("div",{className:"system-response-card","aria-live":"polite",children:A.jsx("div",{className:"system-response-text",children:r})}),o&&A.jsxs("div",{className:"patient-transcript-card","aria-live":"polite",children:[A.jsx("div",{className:"patient-transcript-label",children:"🗣️ You said:"}),A.jsxs("div",{className:"patient-transcript-text",children:['"',o,'"']})]}),A.jsx("div",{className:`listening-indicator-row ${S}`,children:A.jsxs("div",{className:"listening-left",children:[A.jsxs("div",{className:"soundwave-anim",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]}),A.jsxs("div",{children:[A.jsx("div",{className:"listening-text",children:g}),x&&A.jsx("div",{className:"listening-subtext",children:x})]})]})})]})}const W0=700;function H0({recognizedPerson:l=null,speakAloud:e=!0,ttsSettings:n={},interactionEnabled:r=!0,autoListenEnabled:o=!0}){const[a,d]=le.useState(null),[c,m]=le.useState(!1),h=le.useRef(null),v=a===null||!c;le.useEffect(()=>{n&&(T0({rate:n.rate,pitch:n.pitch,volume:n.volume,language:n.language,voiceName:n.voiceName,enabled:n.ttsEnabled!==!1&&e!==!1}),P0({language:n.language}))},[n,e]);const{state:g,systemResponse:x,patientTranscript:S}=G0({recognizedPerson:l,ttsEnabled:e,interactionEnabled:r,autoListenEnabled:o});return le.useEffect(()=>{h.current&&(clearTimeout(h.current),h.current=null),l?a===null?(d(l),m(!1),requestAnimationFrame(()=>m(!0))):(d(l),m(!0)):a!==null&&(m(!1),h.current=setTimeout(()=>{h.current=null,d(null)},W0))},[l]),le.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]),A.jsx("section",{className:"patient-view-wrapper",children:A.jsxs("div",{className:"pv-root",children:[A.jsx(S0,{active:v}),a&&A.jsx(V0,{person:a,active:c,interactionState:g,systemResponse:x,patientTranscript:S})]})})}function j0({isVisitorPresent:l,visitorName:e}){const n=typeof window<"u"&&(window.location.hostname.includes("vercel.app")||window.location.hostname.includes("onrender.com")),[r,o]=le.useState("browser"),[a,d]=le.useState(n?"snapshot":"mjpeg"),[c,m]=le.useState(Date.now()),[h,v]=le.useState(Pt(`/api/camera_snapshot?t=${Date.now()}`)),[g,x]=le.useState(!1),[S,M]=le.useState([]),[y,_]=le.useState(""),[b,L]=le.useState(0),[k,D]=le.useState("user"),[C,F]=le.useState(!0),[j,E]=le.useState([]),[z,Y]=le.useState(0),[K,ne]=le.useState(!1),[ae,G]=le.useState(!1),[ie,ee]=le.useState(!0),[se,B]=le.useState(null),[W,H]=le.useState(null),T=le.useRef(null),O=le.useRef(null),X=le.useRef(null),de=le.useRef(null),me=le.useRef(null),q=le.useRef(null);le.useEffect(()=>(window.__captureCurrentWebcamFrame=()=>{const Be=T.current;if(Be&&Be.readyState>=2){const Ve=document.createElement("canvas");Ve.width=Be.videoWidth||640,Ve.height=Be.videoHeight||480;const Ye=Ve.getContext("2d");return C&&(Ye.translate(Ve.width,0),Ye.scale(-1,1)),Ye.drawImage(Be,0,0,Ve.width,Ve.height),Ve.toDataURL("image/jpeg",.9)}return null},()=>{delete window.__captureCurrentWebcamFrame}),[C]);const xe=le.useCallback(async()=>{var Be;if(!(typeof navigator>"u"||!((Be=navigator.mediaDevices)!=null&&Be.enumerateDevices)))try{const Ye=(await navigator.mediaDevices.enumerateDevices()).filter(nt=>nt.kind==="videoinput");M(Ye),Ye.length>0&&!y&&_(Ye[0].deviceId)}catch(Ve){console.warn("Could not enumerate browser media devices:",Ve)}},[y]),_e=le.useCallback(async()=>{try{const Be=await fetch(Pt("/api/cameras"));if(Be.ok){const Ye=await Be.json();Ye.cameras&&Array.isArray(Ye.cameras)&&(E(Ye.cameras),Ye.active_camera!==void 0&&Y(Ye.active_camera))}const Ve=await fetch(Pt("/api/status"));if(Ve.ok){const Ye=await Ve.json();ne(!!Ye.camera_available),!Ye.camera_available&&r==="server"&&o("browser")}}catch(Be){console.warn("Failed to probe backend cameras:",Be)}},[r]);le.useEffect(()=>{xe(),_e()},[xe,_e]),le.useEffect(()=>{const Be=Ve=>{var nt;if(!Ve.detail)return;const Ye=Ve.detail;Ye.type==="recognized"?H({name:((nt=Ye.person)==null?void 0:nt.name)||e||"Loved One",confidence:.94,is_live:!0,ear:.31,blinks:3}):Ye.type==="unrecognized"&&H(null)};return window.addEventListener("anchor-ws-message",Be),()=>window.removeEventListener("anchor-ws-message",Be)},[e]);const Se=le.useCallback(async(Be=null)=>{var st;B(null),me.current&&clearInterval(me.current),de.current&&de.current.close(),X.current&&X.current.getTracks().forEach(_t=>_t.stop());const Ve=Be||y,Ye={audio:!1,video:Ve?{deviceId:{exact:Ve}}:{facingMode:k,width:{ideal:640},height:{ideal:480},frameRate:{ideal:20}}};let nt=null;try{nt=await navigator.mediaDevices.getUserMedia(Ye)}catch{try{nt=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1})}catch(lt){console.error("Camera acquisition failed:",lt);let I="Could not access camera.";lt.name==="NotReadableError"||(st=lt.message)!=null&&st.includes("Could not start video source")?I="Camera is currently open in another app or tab (e.g. Zoom, Teams, or another window). Please close other camera apps and retry.":lt.name==="NotAllowedError"||lt.name==="PermissionDeniedError"?I="Camera permission was denied. Click the lock / camera icon in your address bar to allow access.":(lt.name==="NotFoundError"||lt.name==="DevicesNotFoundError")&&(I="No camera sensor found on this device."),B(I),x(!1);return}}try{X.current=nt,T.current&&(T.current.srcObject=nt,await T.current.play()),xe();const _t=R0(),lt=new WebSocket(_t);lt.binaryType="arraybuffer",de.current=lt;let I=0,R=Date.now();const fe=O.current||document.createElement("canvas");fe.width=640,fe.height=480;const Me=fe.getContext("2d");me.current=setInterval(()=>{!T.current||T.current.readyState<2||(Me.drawImage(T.current,0,0,640,480),fe.toBlob(be=>{be&&lt.readyState===WebSocket.OPEN&&be.arrayBuffer().then(Ae=>{lt.send(Ae),I++;const Xe=Date.now();Xe-R>=1e3&&(L(I),I=0,R=Xe)})},"image/jpeg",.68))},65),x(!0),ee(!0),B(null)}catch(_t){console.error("Failed to start browser streaming pipeline:",_t),B(_t.message||"Failed to initialize video streaming."),x(!1)}},[y,k,xe]),ye=le.useCallback(()=>{me.current&&(clearInterval(me.current),me.current=null),de.current&&(de.current.close(),de.current=null),X.current&&(X.current.getTracks().forEach(Be=>Be.stop()),X.current=null),T.current&&(T.current.srcObject=null),x(!1),L(0)},[]);le.useEffect(()=>(r==="browser"&&Se(),()=>{ye()}),[r]);const qe=Be=>{const Ve=Be.target.value;_(Ve),g&&Se(Ve)},Ge=async Be=>{const Ve=parseInt(Be.target.value,10);if(!isNaN(Ve)){G(!0);try{(await fetch(Pt("/api/camera_select"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_index:Ve})})).ok&&(Y(Ve),setTimeout(()=>{m(Date.now()),v(Pt(`/api/camera_snapshot?t=${Date.now()}`)),ee(!0),B(null),G(!1)},400))}catch(Ye){console.error("Server camera switch error:",Ye),G(!1)}}};le.useEffect(()=>(r==="server"&&a==="snapshot"?q.current=setInterval(()=>{v(Pt(`/api/camera_snapshot?t=${Date.now()}`))},100):q.current&&(clearInterval(q.current),q.current=null),()=>{q.current&&clearInterval(q.current)}),[r,a]);const De=()=>{ee(!1),B("Server webcam feed unavailable. Switch to Browser Camera mode.")},dt=()=>{B(null),ee(!0),m(Date.now()),v(Pt(`/api/camera_snapshot?t=${Date.now()}`)),_e(),r==="browser"&&Se()};return A.jsxs("div",{className:"panel-card",children:[A.jsxs("h2",{children:[A.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[A.jsx("span",{children:"Live Camera Feed"}),A.jsx("span",{className:"badge",style:{background:l?"var(--primary-subtle)":g||ie?"#e6f4ea":"#fef3c7",color:l?"var(--primary)":g||ie?"#137333":"#d97706"},children:l?`Visitor: ${e}`:g?`🟢 Live Cam (${b} FPS)`:ie?"🟢 Server Cam Active":"🟡 Standby"})]}),A.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[A.jsxs("div",{style:{display:"flex",background:"var(--surface-raised)",borderRadius:"var(--radius-sm)",padding:"2px",border:"1px solid var(--border)"},children:[A.jsx("button",{type:"button",onClick:()=>{o("browser"),g||Se()},style:{padding:"2px 8px",fontSize:"11px",fontWeight:600,border:"none",borderRadius:"4px",cursor:"pointer",background:r==="browser"?"var(--primary)":"transparent",color:r==="browser"?"#0a1f14":"var(--text-muted)"},title:"Stream camera directly from your device/browser to Anchor AI",children:"💻 Browser Cam"}),A.jsx("button",{type:"button",onClick:()=>{o("server"),ye()},style:{padding:"2px 8px",fontSize:"11px",fontWeight:600,border:"none",borderRadius:"4px",cursor:"pointer",background:r==="server"?"var(--primary)":"transparent",color:r==="server"?"#0a1f14":"var(--text-muted)"},title:"View hardware webcam attached directly to the Python backend",children:"🖥️ Server Cam"})]}),r==="browser"&&A.jsx("select",{className:"form-control",value:y,onChange:qe,style:{padding:"3px 8px",fontSize:"11px",height:"26px",borderRadius:"var(--radius-sm)",background:"var(--surface-raised)",color:"var(--text)",borderColor:"var(--border)",cursor:"pointer",maxWidth:"140px"},title:"Select camera sensor",children:S.length>0?S.map((Be,Ve)=>A.jsx("option",{value:Be.deviceId,children:Be.label||`Camera ${Ve+1}`},Be.deviceId||Ve)):A.jsx("option",{value:"",children:"Integrated Camera"})}),r==="server"&&A.jsx("select",{className:"form-control",value:z,onChange:Ge,disabled:ae,style:{padding:"3px 8px",fontSize:"11px",height:"26px",borderRadius:"var(--radius-sm)",background:"var(--surface-raised)",color:"var(--text)",borderColor:"var(--border)",cursor:"pointer"},title:"Select active server webcam index",children:j.length>0?j.map(Be=>A.jsx("option",{value:Be.index,children:Be.name},Be.index)):A.jsx("option",{value:0,children:"Camera 0 (Default)"})}),r==="browser"?A.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:()=>g?ye():Se(),title:g?"Pause camera stream":"Start camera stream",children:g?"⏸️ Pause":"▶️ Start"}):A.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:()=>d(a==="mjpeg"?"snapshot":"mjpeg"),title:"Switch between live MJPEG and Snapshot polling",children:a==="mjpeg"?"⚡ Live MJPEG":"📸 Snapshot"}),A.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:dt,title:"Reconnect video feed",children:"🔄"})]})]}),A.jsxs("div",{style:{background:"#0a130e",borderRadius:"var(--radius-sm)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"260px",position:"relative",border:"1px solid var(--border)"},children:[A.jsx("canvas",{ref:O,style:{display:"none"}}),r==="browser"&&A.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[A.jsx("video",{ref:T,playsInline:!0,autoPlay:!0,muted:!0,style:{width:"100%",maxHeight:"300px",objectFit:"contain",display:g?"block":"none",transform:C?"scaleX(-1)":"none"}}),g&&A.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[A.jsx("div",{style:{background:l?"rgba(19, 115, 51, 0.9)":"rgba(20, 31, 25, 0.85)",color:"#ffffff",padding:"4px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:600,backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:l?`🟢 Match: ${e} (Confirmed)`:W?`🟢 Match: ${W.name}`:"🔍 Scanning Frame • Face Alignment Active"}),A.jsx("div",{style:{background:"rgba(20, 31, 25, 0.85)",color:"#34d399",padding:"4px 8px",borderRadius:"6px",fontSize:"11px",fontWeight:600,backdropFilter:"blur(4px)",border:"1px solid rgba(52, 211, 153, 0.3)"},children:"⚡ Passive EAR Liveness: Active"})]}),A.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"160px",height:"200px",border:l?"2px solid #34d399":"1.5px dashed rgba(255,255,255,0.35)",borderRadius:"16px",boxShadow:l?"0 0 16px rgba(52, 211, 153, 0.4)":"none",transition:"all 0.3s ease"}}),A.jsxs("div",{style:{background:"rgba(10, 19, 14, 0.88)",color:"var(--text-muted)",padding:"4px 10px",borderRadius:"6px",fontSize:"10px",display:"flex",justifyContent:"space-between",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.08)"},children:[A.jsxs("span",{children:["📷 Live Vision • Ingest: ",b," FPS"]}),A.jsx("span",{style:{color:"#34d399"},children:"● Connected to Anchor AI"})]})]}),!g&&!se&&A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",padding:"24px",color:"var(--text-muted)",textAlign:"center"},children:[A.jsx("div",{style:{fontSize:"28px"},children:"📹"}),A.jsx("p",{style:{fontSize:"13px",fontWeight:500,color:"var(--text)"},children:"Browser Camera Ready"}),A.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>Se(),style:{padding:"6px 16px",fontSize:"12px"},children:"▶️ Enable Camera Now"})]})]}),r==="server"&&A.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:a==="mjpeg"?A.jsx("img",{src:Pt(`/video_feed?t=${c}`),crossOrigin:"anonymous",alt:"Live Server Stream",onError:De,onLoad:()=>{ee(!0),B(null)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"300px"}},c):A.jsx("img",{src:h,crossOrigin:"anonymous",alt:"Live Server Snapshot",onError:De,onLoad:()=>{ee(!0),B(null)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"300px"}})}),ae&&A.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10, 19, 14, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",fontWeight:600,fontSize:"13px"},children:"📹 Switching Camera Sensor…"}),se&&A.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(12, 20, 15, 0.92)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",color:"#fbbf24",fontSize:"12px",padding:"20px",textAlign:"center"},children:[A.jsx("span",{style:{fontSize:"22px"},children:"⚠️"}),A.jsx("p",{style:{maxWidth:"340px",lineHeight:"1.4",color:"#fef3c7"},children:se}),A.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"4px"},children:[A.jsx("button",{className:"btn btn-primary",style:{fontSize:"11px",padding:"5px 14px"},onClick:()=>{o("browser"),Se()},children:"📱 Switch to Browser Camera"}),A.jsx("button",{className:"btn btn-secondary",style:{fontSize:"11px",padding:"5px 12px"},onClick:dt,children:"🔄 Retry"})]})]})]}),A.jsxs("div",{style:{marginTop:"10px",fontSize:"11px",color:"var(--text-muted)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[A.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[A.jsx("span",{children:r==="browser"?"🟢 In-Browser Camera active • Streamed directly to Anchor AI.":"🖥️ Server-side hardware webcam active."}),r==="browser"&&g&&A.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",fontSize:"11px"},children:[A.jsx("input",{type:"checkbox",checked:C,onChange:Be=>F(Be.target.checked),style:{cursor:"pointer"}}),"Mirror View"]})]}),A.jsx("a",{href:"/capture",target:"_blank",rel:"noreferrer",style:{color:"var(--primary)",textDecoration:"none",fontWeight:600},children:"📱 Open Mobile Glasses / Phone Streamer →"})]})]})}function q0({transcript:l,isCapturing:e,onToggleListening:n,onAppendSpeech:r,onClearSpeech:o,statusBadgeText:a,liveSegments:d=[],partialSegment:c=null,visitDuration:m="00:00",statusState:h="idle"}){const[v,g]=le.useState(""),x=le.useRef(null),S=le.useRef(!0),M=d.reduce((C,F)=>C+(F.text?F.text.split(/\s+/).filter(Boolean).length:0),0),y=()=>{const C=x.current;if(!C)return;const F=Math.abs(C.scrollHeight-C.clientHeight-C.scrollTop)<15;S.current=F};le.useEffect(()=>{const C=x.current;C&&S.current&&(C.scrollTop=C.scrollHeight)},[d,c]);const _=()=>{v.trim()&&(r(v),g(""))},b=C=>{try{return new Date(C).toTimeString().split(" ")[0]}catch{return""}};let L="badge-gray",k="Standby";e||h==="listening"?(L="badge-green",k="🟢 Live Mic Listening"):h==="processing"?(L="badge-yellow",k="🟡 Transcribing Speech..."):h==="disconnected"?(L="badge-red",k="🔴 Speech Reconnecting..."):h==="denied"&&(L="badge-red",k="🔴 Microphone Denied");const D=d.length>0||c!==null;return A.jsxs("div",{className:"panel-card",children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[A.jsxs("h2",{children:[A.jsx("span",{children:"Live Visit Monitor"}),A.jsx("span",{className:`badge ${L}`,style:{marginLeft:"8px"},children:a||k})]}),n&&A.jsx("button",{className:`btn ${e?"btn-danger":"btn-primary"}`,style:{padding:"6px 12px",fontSize:"12px",borderRadius:"8px"},onClick:n,children:e?"🛑 Stop Mic":"🎙️ Enable Live Mic"})]}),A.jsxs("div",{className:"transcript-stats",style:{display:"flex",gap:"16px",marginBottom:"10px",fontSize:"12px",color:"var(--text-muted)"},children:[A.jsxs("span",{children:["Words Transcribed: ",A.jsx("strong",{style:{color:"var(--text)"},children:M})]}),A.jsxs("span",{children:["Duration: ",A.jsx("strong",{style:{color:"var(--text)"},children:m})]}),A.jsxs("span",{children:["Engine: ",A.jsx("strong",{style:{color:"var(--primary-accent, #34d399)"},children:"Dual (WebSpeech + Groq Whisper)"})]})]}),A.jsx("label",{children:"Real-Time Speech Transcript"}),A.jsx("div",{className:"transcript-box",ref:x,onScroll:y,style:{scrollBehavior:"smooth",minHeight:"180px",maxHeight:"280px",overflowY:"auto",background:"var(--surface-raised, #18261f)",border:"1px solid var(--border)",borderRadius:"10px",padding:"12px",marginBottom:"14px"},children:D?A.jsxs("div",{className:"transcript-list",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.map(C=>A.jsxs("div",{className:"transcript-segment",style:{background:"rgba(39, 82, 61, 0.2)",borderLeft:"3px solid var(--primary-accent, #34d399)",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",lineHeight:"1.4"},children:[C.timestamp&&A.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",b(C.timestamp),"]"]}),A.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,color:"var(--primary-accent, #34d399)",marginRight:"6px"},children:[C.speaker,":"]}),A.jsx("span",{className:"transcript-text",style:{color:"var(--text)"},children:C.text})]},C.segment_id)),c&&A.jsxs("div",{className:"transcript-segment partial-line",style:{background:"rgba(245, 158, 11, 0.15)",borderLeft:"3px solid #f59e0b",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",fontStyle:"italic",color:"#fbbf24"},children:[c.timestamp&&A.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",b(c.timestamp),"]"]}),A.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,marginRight:"6px"},children:[c.speaker,":"]}),A.jsxs("span",{className:"transcript-text partial-text",children:[c.text,"…"]})]},"partial")]}):A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"140px",color:"var(--text-muted)",textAlign:"center",gap:"8px"},children:[A.jsx("span",{style:{fontSize:"24px"},children:"🎙️"}),A.jsx("span",{className:"transcript-empty",style:{fontSize:"13px"},children:e?"Listening... Speak into your microphone now.":"Microphone is on standby. Speak or click 'Enable Live Mic' / simulate arrival above."})]})}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"typedSpeechInput",children:"Add Spoken Line (Demo & Testing)"}),A.jsxs("div",{style:{display:"flex",gap:"8px"},children:[A.jsx("input",{id:"typedSpeechInput",type:"text",value:v,onChange:C=>g(C.target.value),onKeyDown:C=>{C.key==="Enter"&&_()},placeholder:"e.g. Priya: I brought some fresh strawberries from the farmer's market!",style:{flex:1,padding:"9px 12px",background:"var(--bg, #0b120e)",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text)",fontSize:"13px",outline:"none"}}),A.jsx("button",{className:"btn btn-primary",style:{padding:"8px 16px",whiteSpace:"nowrap"},onClick:_,children:"Add Line"}),A.jsx("button",{className:"btn btn-secondary",style:{padding:"8px 12px"},onClick:o,children:"Clear"})]})]})]})}function X0({onSimulateArrive:l,onSimulateLeave:e,onForceSummarize:n}){return A.jsxs("div",{className:"panel-card",children:[A.jsxs("h2",{children:[A.jsx("span",{children:"Visit Simulator"}),A.jsx("span",{className:"badge",children:"Demo Mode"})]}),A.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Simulate face detection events instantly without requiring a physical camera."}),A.jsxs("div",{className:"btn-row",style:{marginBottom:"12px"},children:[A.jsx("button",{className:"btn btn-primary",onClick:()=>l("priya"),children:"Simulate Priya Arriving"}),A.jsx("button",{className:"btn btn-secondary",onClick:()=>l("tom"),children:"Simulate Tom Arriving"}),A.jsx("button",{className:"btn btn-secondary",onClick:()=>l("maya"),children:"Simulate Maya Arriving"})]}),A.jsxs("div",{className:"btn-row",style:{borderTop:"1px solid var(--border)",paddingTop:"12px"},children:[A.jsx("button",{className:"btn btn-amber",onClick:e,children:"Person Leaves (Summarize & Save)"}),A.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Force Summarize Now"})]})]})}function $0({profiles:l,onAddPerson:e,onDeletePerson:n,onRegisterFace:r,onClearEncodings:o}){const[a,d]=le.useState(!1),[c,m]=le.useState(""),[h,v]=le.useState(""),[g,x]=le.useState(""),[S,M]=le.useState(""),[y,_]=le.useState(!0),[b,L]=le.useState(null),[k,D]=le.useState(null),[C,F]=le.useState("info");le.useRef({});const j=(ne,ae="info")=>{D(ne),F(ae),setTimeout(()=>{D(null)},4500)},E=async()=>{var ne;if(typeof window<"u"&&typeof window.__captureCurrentWebcamFrame=="function"){const ae=window.__captureCurrentWebcamFrame();if(ae)return ae}if(typeof navigator<"u"&&((ne=navigator.mediaDevices)!=null&&ne.getUserMedia)){let ae=null;try{ae=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});const G=document.createElement("video");G.srcObject=ae,G.muted=!0,G.playsInline=!0,await G.play(),await new Promise(se=>setTimeout(se,200));const ie=document.createElement("canvas");return ie.width=G.videoWidth||640,ie.height=G.videoHeight||480,ie.getContext("2d").drawImage(G,0,0,ie.width,ie.height),ie.toDataURL("image/jpeg",.92)}catch(G){console.warn("Direct webcam acquisition failed, falling back to server buffer:",G)}finally{ae&&ae.getTracks().forEach(G=>G.stop())}}return null},z=async(ne,ae)=>{L(ne),j(`Scanning face snapshot for ${ae}…`,"info");try{const G=await E(),ie=await r(ne,G);ie.success?j(`✅ ${ie.message}`,"success"):j(`⚠️ ${ie.error}`,"error")}catch(G){j(`❌ Error registering face: ${G.message}`,"error")}finally{L(null)}},Y=async(ne,ae,G)=>{if(!G)return;L(ne),j(`Processing photo for ${ae}…`,"info");const ie=new FileReader;ie.onload=async ee=>{try{const se=ee.target.result,B=await r(ne,se);B.success?j(`✅ ${B.message}`,"success"):j(`⚠️ ${B.error}`,"error")}catch(se){j(`❌ Error: ${se.message}`,"error")}finally{L(null)}},ie.readAsDataURL(G)},K=async ne=>{if(ne.preventDefault(),!h.trim())return;const ae=(c||h).trim().toLowerCase().replace(/\s+/g,"_");try{await e({person_id:ae,name:h.trim(),relationship:g.trim()||"Loved One",note:S.trim()||null}),y?await z(ae,h.trim()):j(`✅ Profile for ${h} created.`,"success"),d(!1),m(""),v(""),x(""),M("")}catch(G){j(`❌ Failed to save profile: ${G.message}`,"error")}};return A.jsxs("div",{className:"panel-card",children:[A.jsxs("h2",{children:[A.jsx("span",{children:"Registered Loved Ones"}),A.jsx("button",{className:"btn btn-primary",style:{padding:"5px 12px",fontSize:"12px"},onClick:()=>d(!0),children:"+ Add Person"})]}),k&&A.jsx("div",{style:{padding:"10px 14px",borderRadius:"var(--radius-sm)",marginBottom:"14px",fontSize:"13px",fontWeight:500,background:C==="success"?"#e6f4ea":C==="error"?"#fce8e6":"#e8f0fe",color:C==="success"?"#137333":C==="error"?"#c5221f":"#1a73e8",border:`1px solid ${C==="success"?"#ceead6":C==="error"?"#fad2cf":"#d2e3fc"}`},children:k}),A.jsx("div",{className:"roster-grid",children:l.map(ne=>{const ae=(ne.name||"A")[0].toUpperCase(),G=ne.avatar_color||"var(--primary)",ie=ne.encodings_count||0,ee=b===ne.person_id;return A.jsxs("div",{className:"profile-card",children:[A.jsxs("div",{className:"profile-card-header",children:[A.jsx("div",{className:"profile-avatar",style:{background:G},children:ae}),A.jsxs("div",{className:"profile-info",children:[A.jsx("h3",{children:ne.name}),A.jsx("p",{children:ne.relationship})]})]}),A.jsxs("div",{className:"profile-note-preview",children:['"',ne.note||"No memory recorded yet.",'"']}),A.jsxs("div",{style:{background:"var(--surface-raised)",padding:"10px",borderRadius:"var(--radius-sm)",marginBottom:"10px",border:"1px solid var(--border)"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",fontSize:"12px"},children:[A.jsx("span",{style:{fontWeight:600,color:ie>0?"#137333":"var(--amber-warm)"},children:ie>0?`🟢 ${ie} Face Snapshot${ie>1?"s":""} Enrolled`:"⚠️ 0 Encodings (Webcam won't recognize)"}),ie>0&&A.jsx("button",{type:"button",style:{background:"none",border:"none",color:"var(--text-light)",cursor:"pointer",fontSize:"11px",textDecoration:"underline"},onClick:()=>o(ne.person_id),children:"Clear"})]}),A.jsxs("div",{className:"btn-row",style:{gap:"6px"},children:[A.jsx("button",{className:"btn btn-primary",style:{padding:"5px 10px",fontSize:"11px",flex:1},disabled:ee,onClick:()=>z(ne.person_id,ne.name),title:"Face the camera and click to record your face",children:ee?"Scanning…":"📸 Capture Face"}),A.jsxs("label",{className:"btn btn-secondary",style:{padding:"5px 10px",fontSize:"11px",cursor:"pointer",margin:0},title:"Upload a clear photo with the person's face",children:["📁 Photo",A.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:se=>{var B;(B=se.target.files)!=null&&B[0]&&(Y(ne.person_id,ne.name,se.target.files[0]),se.target.value="")}})]})]})]}),A.jsxs("div",{className:"profile-card-actions",children:[A.jsxs("span",{style:{color:"var(--text-light)",fontSize:"11px"},children:["ID: ",ne.person_id]}),A.jsx("button",{className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px"},onClick:()=>{confirm(`Remove ${ne.name} from the loved ones roster?`)&&n(ne.person_id)},children:"Delete"})]})]},ne.person_id)})}),a&&A.jsx("div",{className:"modal-overlay",children:A.jsxs("div",{className:"panel-card",style:{width:"100%",maxWidth:"480px",boxShadow:"var(--shadow-lg)"},children:[A.jsx("h2",{children:"Register Loved One"}),A.jsxs("form",{onSubmit:K,children:[A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"inpPersonId",children:"Unique ID (e.g. sarah)"}),A.jsx("input",{type:"text",id:"inpPersonId",value:c,onChange:ne=>m(ne.target.value),placeholder:"sarah",required:!0})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"inpName",children:"Full Name"}),A.jsx("input",{type:"text",id:"inpName",value:h,onChange:ne=>v(ne.target.value),placeholder:"Sarah Jenkins",required:!0})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"inpRelationship",children:"Relationship to Patient"}),A.jsx("input",{type:"text",id:"inpRelationship",value:g,onChange:ne=>x(ne.target.value),placeholder:"Sister / Niece / Neighbor",required:!0})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"inpInitialNote",children:"Initial Memory Note (Optional)"}),A.jsx("textarea",{id:"inpInitialNote",value:S,onChange:ne=>M(ne.target.value),placeholder:"Sarah came over for lunch and brought blueberry muffins."})]}),A.jsxs("div",{style:{background:"var(--primary-subtle)",padding:"10px 12px",borderRadius:"var(--radius-sm)",marginBottom:"14px"},children:[A.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",fontWeight:600,margin:0},children:[A.jsx("input",{type:"checkbox",checked:y,onChange:ne=>_(ne.target.checked)}),"📸 Take face snapshot from webcam now"]}),A.jsx("p",{style:{fontSize:"11px",color:"var(--text-muted)",marginTop:"4px",paddingLeft:"22px"},children:"Make sure the person is facing the camera when clicking Save."})]}),A.jsxs("div",{className:"btn-row",style:{justifyContent:"flex-end",marginTop:"18px"},children:[A.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>d(!1),children:"Cancel"}),A.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save Profile"})]})]})]})})]})}const jo={apiKey:"",endpoint:Pt("/api/groq"),model:"groq/compound-mini",maxTokens:60,temperature:.7},Y0=3;function K0(l){const e=(l||"").trim().match(/\S+/g);return e?e.length:0}function Qm(l){return l&&(l.name||l.person_id)||"someone"}function Z0(l){return`You had a visit with ${Qm(l)}.`}function Q0(){return"You are the memory writer for Anchor, a dementia-care companion. You write a single warm, gentle sentence that reminds the patient of the visit they just had. You never write clinical notes, meeting minutes, bullet lists, or evaluations, and you never mention that you are an AI."}function J0(l,e){return[`${Qm(l)} just finished a visit with the patient. Here is a rough, imperfect speech-to-text transcript of their conversation:`,"",'"""',e,'"""',"","Write ONE short, warm sentence (roughly 15-25 words) that gently reminds the patient of this visit — what they did or talked about together. It should feel like a caring note from the visit, not a recap, a report, or a list.","Respond with ONLY that single sentence. No quotes, no prefixes, no explanations, no extra text."].join(`
`)}function ex(l){var o;if(!l||!Array.isArray(l.choices)||l.choices.length===0)return"";let n=(((o=l.choices[0].message)==null?void 0:o.content)||"").trim();(n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'"))&&(n=n.slice(1,-1).trim());const r=n.match(/^[^.!?]*[.!?]["']?/);return r&&(n=r[0]),n.trim().replace(/^["']+|["']+$/g,"")}async function tx(l,e){const{apiKey:n,endpoint:r,model:o,maxTokens:a,temperature:d}=jo,c={"Content-Type":"application/json"};n&&(c.Authorization=`Bearer ${n}`);let m;try{m=await fetch(r||"/api/groq",{method:"POST",headers:c,body:JSON.stringify({model:o||"groq/compound-mini",max_tokens:a||60,temperature:d??.7,messages:[{role:"system",content:Q0()},{role:"user",content:J0(l,e)}]})})}catch{return""}if(!m.ok)return"";let h;try{h=await m.json()}catch{return""}return ex(h)}async function nx(l,e){const n=(e||"").trim();return K0(n)<Y0?null:await tx(l,n)||Z0(l)}function ix({ttsSettings:l={},onTtsSettingsChange:e}){const[n,r]=le.useState(jo.apiKey||""),[o,a]=le.useState(jo.model||"llama-3.3-70b-versatile"),[d,c]=le.useState([]);le.useEffect(()=>{const g=()=>{const x=C0();c(x)};g(),typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=g)},[]);const m=g=>{const x=g.target.value;r(x),jo.apiKey=x.trim()},h=g=>{const x=g.target.value;a(x),jo.model=x},v=(g,x)=>{e&&e(S=>({...S,[g]:x}))};return A.jsxs("div",{className:"panel-card",children:[A.jsxs("h2",{children:[A.jsx("span",{children:"AI Summarizer Settings"}),A.jsx("span",{className:"badge",children:"Groq LLaMA 3.3"})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cfgApiKey",children:"Custom Groq API Key (Optional)"}),A.jsx("input",{type:"password",id:"cfgApiKey",value:n,onChange:m,placeholder:"Leave empty to use server-side backend key"}),A.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Server has a built-in proxy key. Entering a key here overrides it for this browser."})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cfgModel",children:"Summarizer Model"}),A.jsxs("select",{id:"cfgModel",value:o,onChange:h,children:[A.jsx("option",{value:"llama-3.3-70b-versatile",children:"LLaMA 3.3 70B Versatile (Recommended)"}),A.jsx("option",{value:"llama-3.1-8b-instant",children:"LLaMA 3.1 8B Instant (Ultra Fast)"}),A.jsx("option",{value:"mixtral-8x7b-32768",children:"Mixtral 8x7B"})]})]}),A.jsxs("h2",{style:{marginTop:"24px"},children:[A.jsx("span",{children:"Voice & Interaction"}),A.jsx("span",{className:"badge",children:"Patient TTS"})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{className:"toggle-label",children:[A.jsx("input",{type:"checkbox",checked:l.ttsEnabled!==!1,onChange:g=>v("ttsEnabled",g.target.checked)}),A.jsx("span",{children:"Text-to-Speech Enabled"})]}),A.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"When enabled, Anchor speaks visitor introductions and answers aloud."})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{className:"toggle-label",children:[A.jsx("input",{type:"checkbox",checked:l.interactionEnabled!==!1,onChange:g=>v("interactionEnabled",g.target.checked)}),A.jsx("span",{children:"Patient Voice Interaction"})]}),A.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Allow the patient to ask questions using their voice."})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{className:"toggle-label",children:[A.jsx("input",{type:"checkbox",checked:l.autoListenEnabled!==!1,onChange:g=>v("autoListenEnabled",g.target.checked)}),A.jsx("span",{children:"Auto-Listen After Speaking"})]}),A.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Automatically listen for patient questions after Anchor speaks."})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{htmlFor:"cfgRate",children:["Speech Speed: ",(l.rate||.85).toFixed(2),"×"]}),A.jsx("input",{type:"range",id:"cfgRate",min:"0.5",max:"1.5",step:"0.05",value:l.rate||.85,onChange:g=>v("rate",parseFloat(g.target.value))})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{htmlFor:"cfgVolume",children:["Volume: ",Math.round((l.volume||1)*100),"%"]}),A.jsx("input",{type:"range",id:"cfgVolume",min:"0.1",max:"1.0",step:"0.05",value:l.volume||1,onChange:g=>v("volume",parseFloat(g.target.value))})]}),A.jsxs("div",{className:"form-group",children:[A.jsxs("label",{htmlFor:"cfgPitch",children:["Pitch: ",(l.pitch||1).toFixed(2)]}),A.jsx("input",{type:"range",id:"cfgPitch",min:"0.5",max:"1.5",step:"0.05",value:l.pitch||1,onChange:g=>v("pitch",parseFloat(g.target.value))})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cfgLanguage",children:"Language"}),A.jsxs("select",{id:"cfgLanguage",value:l.language||"en-US",onChange:g=>v("language",g.target.value),children:[A.jsx("option",{value:"en-US",children:"English (US)"}),A.jsx("option",{value:"en-GB",children:"English (UK)"}),A.jsx("option",{value:"en-IN",children:"English (India)"}),A.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी)"})]})]}),d.length>0&&A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cfgVoice",children:"Voice"}),A.jsxs("select",{id:"cfgVoice",value:l.voiceName||"",onChange:g=>v("voiceName",g.target.value||null),children:[A.jsx("option",{value:"",children:"Auto-select best voice"}),d.map(g=>A.jsxs("option",{value:g.name,children:[g.name," (",g.lang,")",g.default?" ★":""]},g.name))]})]}),A.jsxs("div",{className:"status-pill",style:{width:"100%",justifyContent:"center"},children:[A.jsx("span",{className:"status-dot active"}),A.jsx("span",{children:"AI Summarizer Ready"})]})]})}let en=null,Yo=null,Ul=null,Ko=null,Lt=null,oi=null,Wl=null,yd=null,Jm=null;const rx=12,sx=.7;function eg(){return typeof window<"u"&&window.Peer?window.Peer:null}function ox(l={}){if(yd=l.onStatusChange||(()=>{}),Jm=l.onPeerIdReady||(()=>{}),Ko="anchor-"+Math.random().toString(36).slice(2,8),Fi("initializing","Setting up pairing…"),en&&!en.destroyed&&en.destroy(),!eg()){const n=document.createElement("script");n.src="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",n.onload=()=>{Tp(Ko)},n.onerror=()=>{Fi("error","Failed to load PeerJS library")},document.head.appendChild(n);return}Tp(Ko)}function Tp(l){const e=eg();if(!e){Fi("error","PeerJS unavailable");return}en=new e(l),en.on("open",n=>{console.log("[WearablePairing] Peer open with ID:",n),Ko=n,Fi("waiting","Waiting for capture device…"),Jm(n)}),en.on("call",n=>{console.log("[WearablePairing] Incoming call from:",n.peer),ax(n)}),en.on("error",n=>{console.error("[WearablePairing] Peer error:",n),n.type==="network"?Fi("error","Network error — will retry"):Fi("error",`Error: ${n.type}`)}),en.on("disconnected",()=>{console.log("[WearablePairing] Disconnected from signaling server"),en&&!en.destroyed&&setTimeout(()=>{en&&!en.destroyed&&en.reconnect()},2e3)})}function Cp(){kd(),Yo&&(Yo.close(),Yo=null),en&&!en.destroyed&&en.destroy(),en=null,Ko=null,tg(),Fi("idle","Pairing stopped")}function ax(l){Yo=l,l.answer(),l.on("stream",e=>{console.log("[WearablePairing] Received remote media stream"),Fi("connected","Wearable camera connected ✓"),lx(e)}),l.on("close",()=>{console.log("[WearablePairing] Call closed"),Oc()}),l.on("error",e=>{console.error("[WearablePairing] Call error:",e),Oc()}),l.peerConnection&&l.peerConnection.addEventListener("connectionstatechange",()=>{const e=l.peerConnection.connectionState;(e==="disconnected"||e==="failed")&&Oc()})}function Oc(){kd(),Yo=null,Fi("waiting","Capture device disconnected — waiting for reconnect…")}function lx(l){kd(),Lt=document.createElement("video"),Lt.srcObject=l,Lt.autoplay=!0,Lt.playsInline=!0,Lt.muted=!0,Lt.style.cssText="position:fixed;top:0;left:0;width:320px;height:240px;opacity:0.01;pointer-events:none;z-index:-999;",document.body.appendChild(Lt),oi=document.createElement("canvas"),oi.width=640,oi.height=480,Wl=oi.getContext("2d");const e=()=>{Lt.play().catch(r=>console.warn("[WearablePairing] relayVideo.play error:",r))};Lt.addEventListener("loadedmetadata",()=>{Lt.videoWidth>0&&Lt.videoHeight>0&&(oi.width=Lt.videoWidth,oi.height=Lt.videoHeight),e()}),e();const n=Math.round(1e3/rx);Ul=setInterval(()=>ux(),n)}function kd(){Ul&&(clearInterval(Ul),Ul=null),tg()}function tg(){Lt&&(Lt.srcObject=null,Lt.remove(),Lt=null),oi=null,Wl=null}async function ux(){if(!(!Lt||Lt.readyState<2||!Wl)){oi.width!==Lt.videoWidth&&Lt.videoWidth>0&&(oi.width=Lt.videoWidth,oi.height=Lt.videoHeight),Wl.drawImage(Lt,0,0);try{const l=await new Promise(e=>{oi.toBlob(e,"image/jpeg",sx)});if(!l||l.size<100)return;fetch(Pt("/api/remote_frame"),{method:"POST",headers:{"Content-Type":"image/jpeg"},body:l}).catch(e=>{console.warn("[WearablePairing] Frame relay POST failed:",e.message)})}catch(l){console.warn("[WearablePairing] Frame extraction error:",l)}}}function Fi(l,e){console.log(`[WearablePairing] Status: ${l} — ${e}`),yd&&yd(l,e)}function cx(){const[l,e]=le.useState("idle"),[n,r]=le.useState(""),[o,a]=le.useState(""),d=le.useRef(null);le.useEffect(()=>()=>{Cp()},[]);const c=()=>{ox({onPeerIdReady:h=>{r(h),window.QRCode&&d.current&&window.QRCode.toCanvas(d.current,h,{width:160,margin:2,color:{dark:"#163024",light:"#ffffff"}},v=>{v&&console.error("QR Code generation error:",v)})},onStatusChange:(h,v)=>{e(h),a(v)}})},m=()=>{Cp(),e("idle"),r(""),a("")};return A.jsxs("div",{className:`panel-card wearable-panel ${l==="connected"?"paired":""}`,children:[A.jsxs("h2",{children:[A.jsx("span",{children:"📷 Wearable Camera"}),A.jsx("span",{className:"badge",style:{background:l==="connected"?"var(--primary)":void 0,color:l==="connected"?"white":void 0},children:l==="connected"?"Connected ✓":l==="waiting"?"Pairing…":"Not Connected"})]}),A.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Pair a phone or wearable camera to stream video for face recognition instead of the built-in webcam."}),l==="idle"&&A.jsx("div",{children:A.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"100%"},onClick:c,children:"Connect Wearable Camera"})}),(l==="waiting"||l==="initializing")&&A.jsxs("div",{children:[A.jsx("div",{className:"qr-container",children:A.jsx("canvas",{ref:d,style:{width:160,height:160}})}),A.jsxs("div",{className:"pairing-code-display",children:[A.jsx("label",{style:{textAlign:"center",display:"block"},children:"Pairing Code"}),A.jsx("div",{className:"pairing-code",children:n||"------"})]}),A.jsxs("div",{className:"wearable-status",children:[A.jsx("span",{className:"wearable-status-dot waiting"}),A.jsx("span",{children:o||"Waiting for capture device…"})]}),A.jsxs("p",{style:{fontSize:"11px",color:"var(--text-light)",textAlign:"center",marginTop:"10px"},children:["On the capture device, open ",A.jsx("strong",{children:"http://<this-ip>:8000/capture"})," and enter the code above."]}),A.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Cancel Pairing"})]}),l==="connected"&&A.jsxs("div",{children:[A.jsxs("div",{className:"wearable-status connected",children:[A.jsx("span",{className:"wearable-status-dot connected"}),A.jsx("span",{children:"Wearable camera streaming ✓"})]}),A.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Disconnect Wearable"})]}),l==="error"&&A.jsxs("div",{children:[A.jsxs("div",{className:"wearable-status",children:[A.jsx("span",{className:"wearable-status-dot error"}),A.jsx("span",{children:o||"Pairing error"})]}),A.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Retry Pairing"})]})]})}function dx({isVisitorPresent:l,activePerson:e,transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:d,onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:M,ttsSettings:y,onTtsSettingsChange:_,liveSegments:b=[],partialSegment:L=null,visitDuration:k="00:00",statusState:D="idle"}){const C=(e==null?void 0:e.name)||"None";return A.jsxs("section",{className:"caregiver-view",children:[A.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[A.jsx(j0,{isVisitorPresent:l,visitorName:C}),A.jsx(q0,{transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:d,statusBadgeText:l?`In Visit with ${C}`:null,liveSegments:b,partialSegment:L,visitDuration:k,statusState:D}),A.jsx(X0,{onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h})]}),A.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[A.jsx($0,{profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:M}),A.jsx(cx,{}),A.jsx(ix,{ttsSettings:y,onTtsSettingsChange:_})]})]})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="143",fx=0,Ap=1,hx=2,ng=1,px=2,Ws=3,Zo=0,ui=1,Ks=2,mx=1,_r=0,qs=1,Qo=2,Rp=3,Lp=4,gx=5,Bs=100,vx=101,xx=102,Pp=103,Dp=104,_x=200,yx=201,Sx=202,wx=203,ig=204,rg=205,Mx=206,Ex=207,bx=208,Tx=209,Cx=210,Ax=0,Rx=1,Lx=2,Sd=3,Px=4,Dx=5,Ix=6,Nx=7,sg=0,kx=1,Fx=2,Oi=0,zx=1,Ox=2,Ux=3,Bx=4,Gx=5,og=300,Zs=301,Qs=302,wd=303,Md=304,Xl=306,Ed=1e3,ai=1001,bd=1002,un=1003,Ip=1004,Np=1005,Wn=1006,Vx=1007,$l=1008,Jr=1009,Wx=1010,Hx=1011,ag=1012,jx=1013,jr=1014,qr=1015,Jo=1016,qx=1017,Xx=1018,Xs=1020,$x=1021,Yx=1022,li=1023,Kx=1024,Zx=1025,$r=1026,Js=1027,Qx=1028,Jx=1029,e_=1030,t_=1031,n_=1033,Uc=33776,Bc=33777,Gc=33778,Vc=33779,kp=35840,Fp=35841,zp=35842,Op=35843,i_=36196,Up=37492,Bp=37496,Gp=37808,Vp=37809,Wp=37810,Hp=37811,jp=37812,qp=37813,Xp=37814,$p=37815,Yp=37816,Kp=37817,Zp=37818,Qp=37819,Jp=37820,em=37821,tm=36492,es=3e3,Ft=3001,r_=3200,s_=3201,o_=0,a_=1,Ni="srgb",Xr="srgb-linear",Wc=7680,l_=519,nm=35044,im="300 es",Td=1035;class to{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,d=o.length;a<d;a++)o[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,rm=180/Math.PI;function na(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(an[l&255]+an[l>>8&255]+an[l>>16&255]+an[l>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]).toLowerCase()}function Dn(l,e,n){return Math.max(e,Math.min(n,l))}function u_(l,e){return(l%e+e)%e}function jc(l,e,n){return(1-n)*l+n*e}function sm(l){return(l&l-1)===0&&l!==0}function Cd(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),a=this.x-e.x,d=this.y-e.y;return this.x=a*r-d*o+e.x,this.y=a*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(){jn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,r,o,a,d,c,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=c,v[3]=n,v[4]=a,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,d=r[0],c=r[3],m=r[6],h=r[1],v=r[4],g=r[7],x=r[2],S=r[5],M=r[8],y=o[0],_=o[3],b=o[6],L=o[1],k=o[4],D=o[7],C=o[2],F=o[5],j=o[8];return a[0]=d*y+c*L+m*C,a[3]=d*_+c*k+m*F,a[6]=d*b+c*D+m*j,a[1]=h*y+v*L+g*C,a[4]=h*_+v*k+g*F,a[7]=h*b+v*D+g*j,a[2]=x*y+S*L+M*C,a[5]=x*_+S*k+M*F,a[8]=x*b+S*D+M*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],d=e[4],c=e[5],m=e[6],h=e[7],v=e[8];return n*d*v-n*c*h-r*a*v+r*c*m+o*a*h-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],d=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=v*d-c*h,x=c*m-v*a,S=h*a-d*m,M=n*g+r*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=g*y,e[1]=(o*h-v*r)*y,e[2]=(c*r-o*d)*y,e[3]=x*y,e[4]=(v*n-o*m)*y,e[5]=(o*a-c*n)*y,e[6]=S*y,e[7]=(r*m-h*n)*y,e[8]=(d*n-r*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,a,d,c){const m=Math.cos(a),h=Math.sin(a);return this.set(r*m,r*h,-r*(m*d+h*c)+d+e,-o*h,o*m,-o*(-h*d+m*c)+c+n,0,0,1),this}scale(e,n){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=n,r[4]*=n,r[7]*=n,this}rotate(e){const n=Math.cos(e),r=Math.sin(e),o=this.elements,a=o[0],d=o[3],c=o[6],m=o[1],h=o[4],v=o[7];return o[0]=n*a+r*m,o[3]=n*d+r*h,o[6]=n*c+r*v,o[1]=-r*a+n*m,o[4]=-r*d+n*h,o[7]=-r*c+n*v,this}translate(e,n){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=n*r[2],r[4]+=n*r[5],r[7]+=n*r[8],this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function lg(l){for(let e=l.length-1;e>=0;--e)if(l[e]>65535)return!0;return!1}function Hl(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Yr(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Bl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const qc={[Ni]:{[Xr]:Yr},[Xr]:{[Ni]:Bl}},ni={legacyMode:!0,get workingColorSpace(){return Xr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,n){if(this.legacyMode||e===n||!e||!n)return l;if(qc[e]&&qc[e][n]!==void 0){const r=qc[e][n];return l.r=r(l.r),l.g=r(l.g),l.b=r(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={r:0,g:0,b:0},ii={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Xc(l,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(e-l)*6*n:n<1/2?e:n<2/3?l+(e-l)*6*(2/3-n):l}function gl(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&r===void 0?this.set(e):this.setRGB(e,n,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ni.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Xr){return this.r=e,this.g=n,this.b=r,ni.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Xr){if(e=u_(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,d=2*r-a;this.r=Xc(d,a,e+1/3),this.g=Xc(d,a,e),this.b=Xc(d,a,e-1/3)}return ni.toWorkingColorSpace(this,o),this}setStyle(e,n=Ni){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const d=o[1],c=o[2];switch(d){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ni.toWorkingColorSpace(this,n),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ni.toWorkingColorSpace(this,n),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(a[1])/360,h=parseInt(a[2],10)/100,v=parseInt(a[3],10)/100;return r(a[4]),this.setHSL(m,h,v,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],d=a.length;if(d===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ni.toWorkingColorSpace(this,n),this;if(d===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ni.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Ni){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return ni.fromWorkingColorSpace(gl(this,Wt),e),Dn(Wt.r*255,0,255)<<16^Dn(Wt.g*255,0,255)<<8^Dn(Wt.b*255,0,255)<<0}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xr){ni.fromWorkingColorSpace(gl(this,Wt),n);const r=Wt.r,o=Wt.g,a=Wt.b,d=Math.max(r,o,a),c=Math.min(r,o,a);let m,h;const v=(c+d)/2;if(c===d)m=0,h=0;else{const g=d-c;switch(h=v<=.5?g/(d+c):g/(2-d-c),d){case r:m=(o-a)/g+(o<a?6:0);break;case o:m=(a-r)/g+2;break;case a:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=Xr){return ni.fromWorkingColorSpace(gl(this,Wt),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ni){return ni.fromWorkingColorSpace(gl(this,Wt),e),e!==Ni?`color(${e} ${Wt.r} ${Wt.g} ${Wt.b})`:`rgb(${Wt.r*255|0},${Wt.g*255|0},${Wt.b*255|0})`}offsetHSL(e,n,r){return this.getHSL(ii),ii.h+=e,ii.s+=n,ii.l+=r,this.setHSL(ii.h,ii.s,ii.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ii),e.getHSL(ml);const r=jc(ii.h,ml.h,n),o=jc(ii.s,ml.s,n),a=jc(ii.l,ml.l,n);return this.setHSL(r,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}vt.NAMES=ug;let bs;class cg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Hl("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let d=0;d<a.length;d++)a[d]=Yr(a[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Yr(n[r]/255)*255):n[r]=Yr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dg{constructor(e=null){this.isSource=!0,this.uuid=na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let d=0,c=o.length;d<c;d++)o[d].isDataTexture?a.push($c(o[d].image)):a.push($c(o[d]))}else a=$c(o);r.url=a}return n||(e.images[this.uuid]=r),r}}function $c(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?cg.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class qn extends to{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=ai,o=ai,a=Wn,d=$l,c=li,m=Jr,h=1,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=na(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=d,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=m,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=og;class Yt{constructor(e=0,n=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*a,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*a,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*a,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,a;const m=e.elements,h=m[0],v=m[4],g=m[8],x=m[1],S=m[5],M=m[9],y=m[2],_=m[6],b=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-y)<.01&&Math.abs(M-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+y)<.1&&Math.abs(M+_)<.1&&Math.abs(h+S+b-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(h+1)/2,D=(S+1)/2,C=(b+1)/2,F=(v+x)/4,j=(g+y)/4,E=(M+_)/4;return k>D&&k>C?k<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(k),o=F/r,a=j/r):D>C?D<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(D),r=F/o,a=E/o):C<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(C),r=j/a,o=E/a),this.set(r,o,a,n),this}let L=Math.sqrt((_-M)*(_-M)+(g-y)*(g-y)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(_-M)/L,this.y=(g-y)/L,this.z=(x-v)/L,this.w=Math.acos((h+S+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends to{constructor(e,n,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new qn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Wn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fg extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d_ extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,a,d,c){let m=r[o+0],h=r[o+1],v=r[o+2],g=r[o+3];const x=a[d+0],S=a[d+1],M=a[d+2],y=a[d+3];if(c===0){e[n+0]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(c===1){e[n+0]=x,e[n+1]=S,e[n+2]=M,e[n+3]=y;return}if(g!==y||m!==x||h!==S||v!==M){let _=1-c;const b=m*x+h*S+v*M+g*y,L=b>=0?1:-1,k=1-b*b;if(k>Number.EPSILON){const C=Math.sqrt(k),F=Math.atan2(C,b*L);_=Math.sin(_*F)/C,c=Math.sin(c*F)/C}const D=c*L;if(m=m*_+x*D,h=h*_+S*D,v=v*_+M*D,g=g*_+y*D,_===1-c){const C=1/Math.sqrt(m*m+h*h+v*v+g*g);m*=C,h*=C,v*=C,g*=C}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,a,d){const c=r[o],m=r[o+1],h=r[o+2],v=r[o+3],g=a[d],x=a[d+1],S=a[d+2],M=a[d+3];return e[n]=c*M+v*g+m*S-h*x,e[n+1]=m*M+v*x+h*g-c*S,e[n+2]=h*M+v*S+c*x-m*g,e[n+3]=v*M-c*g-m*x-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,o=e._y,a=e._z,d=e._order,c=Math.cos,m=Math.sin,h=c(r/2),v=c(o/2),g=c(a/2),x=m(r/2),S=m(o/2),M=m(a/2);switch(d){case"XYZ":this._x=x*v*g+h*S*M,this._y=h*S*g-x*v*M,this._z=h*v*M+x*S*g,this._w=h*v*g-x*S*M;break;case"YXZ":this._x=x*v*g+h*S*M,this._y=h*S*g-x*v*M,this._z=h*v*M-x*S*g,this._w=h*v*g+x*S*M;break;case"ZXY":this._x=x*v*g-h*S*M,this._y=h*S*g+x*v*M,this._z=h*v*M+x*S*g,this._w=h*v*g-x*S*M;break;case"ZYX":this._x=x*v*g-h*S*M,this._y=h*S*g+x*v*M,this._z=h*v*M-x*S*g,this._w=h*v*g+x*S*M;break;case"YZX":this._x=x*v*g+h*S*M,this._y=h*S*g+x*v*M,this._z=h*v*M-x*S*g,this._w=h*v*g-x*S*M;break;case"XZY":this._x=x*v*g-h*S*M,this._y=h*S*g-x*v*M,this._z=h*v*M+x*S*g,this._w=h*v*g+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],a=n[8],d=n[1],c=n[5],m=n[9],h=n[2],v=n[6],g=n[10],x=r+c+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(a-h)*S,this._z=(d-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(v-m)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(a-h)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(d-o)/S,this._x=(a+h)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,a=e._z,d=e._w,c=n._x,m=n._y,h=n._z,v=n._w;return this._x=r*v+d*c+o*h-a*m,this._y=o*v+d*m+a*c-r*h,this._z=a*v+d*h+r*m-o*c,this._w=d*v-r*c-o*m-a*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,d=this._w;let c=d*e._w+r*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=o,this._z=a,this;const m=1-c*c;if(m<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(m),v=Math.atan2(h,c),g=Math.sin((1-n)*v)/h,x=Math.sin(n*v)/h;return this._w=d*g+this._w*x,this._x=r*g+this._x*x,this._y=o*g+this._y*x,this._z=a*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(o),r*Math.sin(a),r*Math.cos(a),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*o,this.y=a[1]*n+a[4]*r+a[7]*o,this.z=a[2]*n+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=e.elements,d=1/(a[3]*n+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*o+a[12])*d,this.y=(a[1]*n+a[5]*r+a[9]*o+a[13])*d,this.z=(a[2]*n+a[6]*r+a[10]*o+a[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,a=e.x,d=e.y,c=e.z,m=e.w,h=m*n+d*o-c*r,v=m*r+c*n-a*o,g=m*o+a*r-d*n,x=-a*n-d*r-c*o;return this.x=h*m+x*-a+v*-c-g*-d,this.y=v*m+x*-d+g*-a-h*-c,this.z=g*m+x*-c+h*-d-v*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*o,this.y=a[1]*n+a[5]*r+a[9]*o,this.z=a[2]*n+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,a=e.z,d=n.x,c=n.y,m=n.z;return this.x=o*m-a*c,this.y=a*d-r*m,this.z=r*c-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new Q,om=new ia;class ra{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,r=1/0,o=1/0,a=-1/0,d=-1/0,c=-1/0;for(let m=0,h=e.length;m<h;m+=3){const v=e[m],g=e[m+1],x=e[m+2];v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>d&&(d=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,d,c),this}setFromBufferAttribute(e){let n=1/0,r=1/0,o=1/0,a=-1/0,d=-1/0,c=-1/0;for(let m=0,h=e.count;m<h;m++){const v=e.getX(m),g=e.getY(m),x=e.getZ(m);v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>d&&(d=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,d,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=zr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(n&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let d=0,c=a.count;d<c;d++)zr.fromBufferAttribute(a,d).applyMatrix4(e.matrixWorld),this.expandByPoint(zr)}else r.boundingBox===null&&r.computeBoundingBox(),Kc.copy(r.boundingBox),Kc.applyMatrix4(e.matrixWorld),this.union(Kc);const o=e.children;for(let a=0,d=o.length;a<d;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zr),zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),vl.subVectors(this.max,Go),Ts.subVectors(e.a,Go),Cs.subVectors(e.b,Go),As.subVectors(e.c,Go),lr.subVectors(Cs,Ts),ur.subVectors(As,Cs),Or.subVectors(Ts,As);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Or.z,Or.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Or.z,0,-Or.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Or.y,Or.x,0];return!Zc(n,Ts,Cs,As,vl)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Ts,Cs,As,vl))?!1:(xl.crossVectors(lr,ur),n=[xl.x,xl.y,xl.z],Zc(n,Ts,Cs,As,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zr=new Q,Kc=new ra,Ts=new Q,Cs=new Q,As=new Q,lr=new Q,ur=new Q,Or=new Q,Go=new Q,vl=new Q,xl=new Q,Ur=new Q;function Zc(l,e,n,r,o){for(let a=0,d=l.length-3;a<=d;a+=3){Ur.fromArray(l,a);const c=o.x*Math.abs(Ur.x)+o.y*Math.abs(Ur.y)+o.z*Math.abs(Ur.z),m=e.dot(Ur),h=n.dot(Ur),v=r.dot(Ur);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>c)return!1}return!0}const f_=new ra,am=new Q,_l=new Q,Qc=new Q;class Yl{constructor(e=new Q,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):f_.setFromPoints(e).getCenter(r);let o=0;for(let a=0,d=e.length;a<d;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qc.subVectors(e,this.center);const n=Qc.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.add(Qc.multiplyScalar(o/r)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?_l.set(0,0,1).multiplyScalar(e.radius):_l.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(am.copy(e.center).add(_l)),this.expandByPoint(am.copy(e.center).sub(_l)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Q,Jc=new Q,yl=new Q,cr=new Q,ed=new Q,Sl=new Q,td=new Q;class hg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.direction).multiplyScalar(n).add(this.origin),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Jc.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Jc);const a=e.distanceTo(n)*.5,d=-this.direction.dot(yl),c=cr.dot(this.direction),m=-cr.dot(yl),h=cr.lengthSq(),v=Math.abs(1-d*d);let g,x,S,M;if(v>0)if(g=d*m-c,x=d*c-m,M=a*v,g>=0)if(x>=-M)if(x<=M){const y=1/v;g*=y,x*=y,S=g*(g+d*x+2*c)+x*(d*g+x+2*m)+h}else x=a,g=Math.max(0,-(d*x+c)),S=-g*g+x*(x+2*m)+h;else x=-a,g=Math.max(0,-(d*x+c)),S=-g*g+x*(x+2*m)+h;else x<=-M?(g=Math.max(0,-(-d*a+c)),x=g>0?-a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h):x<=M?(g=0,x=Math.min(Math.max(-a,-m),a),S=x*(x+2*m)+h):(g=Math.max(0,-(d*a+c)),x=g>0?a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h);else x=d>0?-a:a,g=Math.max(0,-(d*x+c)),S=-g*g+x*(x+2*m)+h;return r&&r.copy(this.direction).multiplyScalar(g).add(this.origin),o&&o.copy(yl).multiplyScalar(x).add(Jc),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),o=Li.dot(Li)-r*r,a=e.radius*e.radius;if(o>a)return null;const d=Math.sqrt(a-o),c=r-d,m=r+d;return c<0&&m<0?null:c<0?this.at(m,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,a,d,c,m;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),v>=0?(a=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||a>o||((a>r||r!==r)&&(r=a),(d<o||o!==o)&&(o=d),g>=0?(c=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(c=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||c>o)||((c>r||r!==r)&&(r=c),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,o,a){ed.subVectors(n,e),Sl.subVectors(r,e),td.crossVectors(ed,Sl);let d=this.direction.dot(td),c;if(d>0){if(o)return null;c=1}else if(d<0)c=-1,d=-d;else return null;cr.subVectors(this.origin,e);const m=c*this.direction.dot(Sl.crossVectors(cr,Sl));if(m<0)return null;const h=c*this.direction.dot(ed.cross(cr));if(h<0||m+h>d)return null;const v=-c*cr.dot(td);return v<0?null:this.at(v/d,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,r,o,a,d,c,m,h,v,g,x,S,M,y,_){const b=this.elements;return b[0]=e,b[4]=n,b[8]=r,b[12]=o,b[1]=a,b[5]=d,b[9]=c,b[13]=m,b[2]=h,b[6]=v,b[10]=g,b[14]=x,b[3]=S,b[7]=M,b[11]=y,b[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),a=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,a=e.z,d=Math.cos(r),c=Math.sin(r),m=Math.cos(o),h=Math.sin(o),v=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const x=d*v,S=d*g,M=c*v,y=c*g;n[0]=m*v,n[4]=-m*g,n[8]=h,n[1]=S+M*h,n[5]=x-y*h,n[9]=-c*m,n[2]=y-x*h,n[6]=M+S*h,n[10]=d*m}else if(e.order==="YXZ"){const x=m*v,S=m*g,M=h*v,y=h*g;n[0]=x+y*c,n[4]=M*c-S,n[8]=d*h,n[1]=d*g,n[5]=d*v,n[9]=-c,n[2]=S*c-M,n[6]=y+x*c,n[10]=d*m}else if(e.order==="ZXY"){const x=m*v,S=m*g,M=h*v,y=h*g;n[0]=x-y*c,n[4]=-d*g,n[8]=M+S*c,n[1]=S+M*c,n[5]=d*v,n[9]=y-x*c,n[2]=-d*h,n[6]=c,n[10]=d*m}else if(e.order==="ZYX"){const x=d*v,S=d*g,M=c*v,y=c*g;n[0]=m*v,n[4]=M*h-S,n[8]=x*h+y,n[1]=m*g,n[5]=y*h+x,n[9]=S*h-M,n[2]=-h,n[6]=c*m,n[10]=d*m}else if(e.order==="YZX"){const x=d*m,S=d*h,M=c*m,y=c*h;n[0]=m*v,n[4]=y-x*g,n[8]=M*g+S,n[1]=g,n[5]=d*v,n[9]=-c*v,n[2]=-h*v,n[6]=S*g+M,n[10]=x-y*g}else if(e.order==="XZY"){const x=d*m,S=d*h,M=c*m,y=c*h;n[0]=m*v,n[4]=-g,n[8]=h*v,n[1]=x*g+y,n[5]=d*v,n[9]=S*g-M,n[2]=M*g-S,n[6]=c*v,n[10]=y*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,p_)}lookAt(e,n,r){const o=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),dr.crossVectors(r,Ln),dr.lengthSq()===0&&(Math.abs(r.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),dr.crossVectors(r,Ln)),dr.normalize(),wl.crossVectors(Ln,dr),o[0]=dr.x,o[4]=wl.x,o[8]=Ln.x,o[1]=dr.y,o[5]=wl.y,o[9]=Ln.y,o[2]=dr.z,o[6]=wl.z,o[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,d=r[0],c=r[4],m=r[8],h=r[12],v=r[1],g=r[5],x=r[9],S=r[13],M=r[2],y=r[6],_=r[10],b=r[14],L=r[3],k=r[7],D=r[11],C=r[15],F=o[0],j=o[4],E=o[8],z=o[12],Y=o[1],K=o[5],ne=o[9],ae=o[13],G=o[2],ie=o[6],ee=o[10],se=o[14],B=o[3],W=o[7],H=o[11],T=o[15];return a[0]=d*F+c*Y+m*G+h*B,a[4]=d*j+c*K+m*ie+h*W,a[8]=d*E+c*ne+m*ee+h*H,a[12]=d*z+c*ae+m*se+h*T,a[1]=v*F+g*Y+x*G+S*B,a[5]=v*j+g*K+x*ie+S*W,a[9]=v*E+g*ne+x*ee+S*H,a[13]=v*z+g*ae+x*se+S*T,a[2]=M*F+y*Y+_*G+b*B,a[6]=M*j+y*K+_*ie+b*W,a[10]=M*E+y*ne+_*ee+b*H,a[14]=M*z+y*ae+_*se+b*T,a[3]=L*F+k*Y+D*G+C*B,a[7]=L*j+k*K+D*ie+C*W,a[11]=L*E+k*ne+D*ee+C*H,a[15]=L*z+k*ae+D*se+C*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],a=e[12],d=e[1],c=e[5],m=e[9],h=e[13],v=e[2],g=e[6],x=e[10],S=e[14],M=e[3],y=e[7],_=e[11],b=e[15];return M*(+a*m*g-o*h*g-a*c*x+r*h*x+o*c*S-r*m*S)+y*(+n*m*S-n*h*x+a*d*x-o*d*S+o*h*v-a*m*v)+_*(+n*h*g-n*c*S-a*d*g+r*d*S+a*c*v-r*h*v)+b*(-o*c*v-n*m*g+n*c*x+o*d*g-r*d*x+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],d=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=e[9],x=e[10],S=e[11],M=e[12],y=e[13],_=e[14],b=e[15],L=g*_*h-y*x*h+y*m*S-c*_*S-g*m*b+c*x*b,k=M*x*h-v*_*h-M*m*S+d*_*S+v*m*b-d*x*b,D=v*y*h-M*g*h+M*c*S-d*y*S-v*c*b+d*g*b,C=M*g*m-v*y*m-M*c*x+d*y*x+v*c*_-d*g*_,F=n*L+r*k+o*D+a*C;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/F;return e[0]=L*j,e[1]=(y*x*a-g*_*a-y*o*S+r*_*S+g*o*b-r*x*b)*j,e[2]=(c*_*a-y*m*a+y*o*h-r*_*h-c*o*b+r*m*b)*j,e[3]=(g*m*a-c*x*a-g*o*h+r*x*h+c*o*S-r*m*S)*j,e[4]=k*j,e[5]=(v*_*a-M*x*a+M*o*S-n*_*S-v*o*b+n*x*b)*j,e[6]=(M*m*a-d*_*a-M*o*h+n*_*h+d*o*b-n*m*b)*j,e[7]=(d*x*a-v*m*a+v*o*h-n*x*h-d*o*S+n*m*S)*j,e[8]=D*j,e[9]=(M*g*a-v*y*a-M*r*S+n*y*S+v*r*b-n*g*b)*j,e[10]=(d*y*a-M*c*a+M*r*h-n*y*h-d*r*b+n*c*b)*j,e[11]=(v*c*a-d*g*a-v*r*h+n*g*h+d*r*S-n*c*S)*j,e[12]=C*j,e[13]=(v*y*o-M*g*o+M*r*x-n*y*x-v*r*_+n*g*_)*j,e[14]=(M*c*o-d*y*o-M*r*m+n*y*m+d*r*_-n*c*_)*j,e[15]=(d*g*o-v*c*o+v*r*m-n*g*m-d*r*x+n*c*x)*j,this}scale(e){const n=this.elements,r=e.x,o=e.y,a=e.z;return n[0]*=r,n[4]*=o,n[8]*=a,n[1]*=r,n[5]*=o,n[9]*=a,n[2]*=r,n[6]*=o,n[10]*=a,n[3]*=r,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),a=1-r,d=e.x,c=e.y,m=e.z,h=a*d,v=a*c;return this.set(h*d+r,h*c-o*m,h*m+o*c,0,h*c+o*m,v*c+r,v*m-o*d,0,h*m-o*c,v*m+o*d,a*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,a,d){return this.set(1,r,a,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,a=n._x,d=n._y,c=n._z,m=n._w,h=a+a,v=d+d,g=c+c,x=a*h,S=a*v,M=a*g,y=d*v,_=d*g,b=c*g,L=m*h,k=m*v,D=m*g,C=r.x,F=r.y,j=r.z;return o[0]=(1-(y+b))*C,o[1]=(S+D)*C,o[2]=(M-k)*C,o[3]=0,o[4]=(S-D)*F,o[5]=(1-(x+b))*F,o[6]=(_+L)*F,o[7]=0,o[8]=(M+k)*j,o[9]=(_-L)*j,o[10]=(1-(x+y))*j,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let a=Rs.set(o[0],o[1],o[2]).length();const d=Rs.set(o[4],o[5],o[6]).length(),c=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const h=1/a,v=1/d,g=1/c;return ri.elements[0]*=h,ri.elements[1]*=h,ri.elements[2]*=h,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=g,ri.elements[9]*=g,ri.elements[10]*=g,n.setFromRotationMatrix(ri),r.x=a,r.y=d,r.z=c,this}makePerspective(e,n,r,o,a,d){const c=this.elements,m=2*a/(n-e),h=2*a/(r-o),v=(n+e)/(n-e),g=(r+o)/(r-o),x=-(d+a)/(d-a),S=-2*d*a/(d-a);return c[0]=m,c[4]=0,c[8]=v,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,o,a,d){const c=this.elements,m=1/(n-e),h=1/(r-o),v=1/(d-a),g=(n+e)*m,x=(r+o)*h,S=(d+a)*v;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=-2*v,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new Q,ri=new Kt,h_=new Q(0,0,0),p_=new Q(1,1,1),dr=new Q,wl=new Q,Ln=new Q,lm=new Kt,um=new ia;class sa{constructor(e=0,n=0,r=0,o=sa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,a=o[0],d=o[4],c=o[8],m=o[1],h=o[5],v=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,a));break;case"ZYX":this._y=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,a)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}sa.DefaultOrder="XYZ";sa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const cm=new Q,Ls=new ia,Pi=new Kt,Ml=new Q,Vo=new Q,g_=new Q,v_=new ia,dm=new Q(1,0,0),fm=new Q(0,1,0),hm=new Q(0,0,1),x_={type:"added"},pm={type:"removed"};class Xn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DefaultUp.clone();const e=new Q,n=new sa,r=new ia,o=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new jn}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Xn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ml.copy(e):Ml.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Vo,Ml,this.up):Pi.lookAt(Ml,Vo,this.up),this.quaternion.setFromRotationMatrix(Pi),o&&(Pi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(pm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let a=0,d=o.length;a<d;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const g=m[h];a(e.shapes,g)}else a(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,h=this.material.length;m<h;m++)c.push(a(e.materials,this.material[m]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];o.animations.push(a(e.animations,m))}}if(n){const c=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),g=d(e.shapes),x=d(e.skeletons),S=d(e.animations),M=d(e.nodes);c.length>0&&(r.geometries=c),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function d(c){const m=[];for(const h in c){const v=c[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DefaultUp=new Q(0,1,0);Xn.DefaultMatrixAutoUpdate=!0;const si=new Q,Di=new Q,nd=new Q,Ii=new Q,Ps=new Q,Ds=new Q,mm=new Q,id=new Q,rd=new Q,sd=new Q;class ki{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,r,o,a){si.subVectors(o,n),Di.subVectors(r,n),nd.subVectors(e,n);const d=si.dot(si),c=si.dot(Di),m=si.dot(nd),h=Di.dot(Di),v=Di.dot(nd),g=d*h-c*c;if(g===0)return a.set(-2,-1,-1);const x=1/g,S=(h*m-c*v)*x,M=(d*v-c*m)*x;return a.set(1-S-M,M,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,n,r,o,a,d,c,m){return this.getBarycoord(e,n,r,o,Ii),m.set(0,0),m.addScaledVector(a,Ii.x),m.addScaledVector(d,Ii.y),m.addScaledVector(c,Ii.z),m}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ki.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,o,a){return ki.getUV(e,this.a,this.b,this.c,n,r,o,a)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,a=this.c;let d,c;Ps.subVectors(o,r),Ds.subVectors(a,r),id.subVectors(e,r);const m=Ps.dot(id),h=Ds.dot(id);if(m<=0&&h<=0)return n.copy(r);rd.subVectors(e,o);const v=Ps.dot(rd),g=Ds.dot(rd);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*h;if(x<=0&&m>=0&&v<=0)return d=m/(m-v),n.copy(r).addScaledVector(Ps,d);sd.subVectors(e,a);const S=Ps.dot(sd),M=Ds.dot(sd);if(M>=0&&S<=M)return n.copy(a);const y=S*h-m*M;if(y<=0&&h>=0&&M<=0)return c=h/(h-M),n.copy(r).addScaledVector(Ds,c);const _=v*M-S*g;if(_<=0&&g-v>=0&&S-M>=0)return mm.subVectors(a,o),c=(g-v)/(g-v+(S-M)),n.copy(o).addScaledVector(mm,c);const b=1/(_+y+x);return d=y*b,c=x*b,n.copy(r).addScaledVector(Ps,d).addScaledVector(Ds,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let __=0;class oa extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=na(),this.name="",this.type="Material",this.blending=qs,this.side=Zo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ig,this.blendDst=rg,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===mx;continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Zo&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(a){const d=[];for(const c in a){const m=a[c];delete m.metadata,d.push(m)}return d}if(n){const a=o(e.textures),d=o(e.images);a.length>0&&(r.textures=a),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Q,El=new tt;class In{constructor(e,n,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r===!0,this.usage=nm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let d=e[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),d=new vt),n[r++]=d.r,n[r++]=d.g,n[r++]=d.b}return this}copyVector2sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let d=e[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),d=new tt),n[r++]=d.x,n[r++]=d.y}return this}copyVector3sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let d=e[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),d=new Q),n[r++]=d.x,n[r++]=d.y,n[r++]=d.z}return this}copyVector4sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let d=e[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),d=new Yt),n[r++]=d.x,n[r++]=d.y,n[r++]=d.z,n[r++]=d.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,a){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mg extends In{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gg extends In{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class bn extends In{constructor(e,n,r){super(new Float32Array(e),n,r)}}let y_=0;const Gn=new Kt,od=new Xn,Is=new Q,Pn=new ra,Wo=new ra,$t=new Q;class $n extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?gg:mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new jn().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let a=0,d=n.length;a<d;a++){const c=n[a];Wo.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(Pn.min,Wo.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,Wo.max),Pn.expandByPoint($t)):(Pn.expandByPoint(Wo.min),Pn.expandByPoint(Wo.max))}Pn.getCenter(r);let o=0;for(let a=0,d=e.count;a<d;a++)$t.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared($t));if(n)for(let a=0,d=n.length;a<d;a++){const c=n[a],m=this.morphTargetsRelative;for(let h=0,v=c.count;h<v;h++)$t.fromBufferAttribute(c,h),m&&(Is.fromBufferAttribute(e,h),$t.add(Is)),o=Math.max(o,r.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=n.position.array,a=n.normal.array,d=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,h=[],v=[];for(let Y=0;Y<c;Y++)h[Y]=new Q,v[Y]=new Q;const g=new Q,x=new Q,S=new Q,M=new tt,y=new tt,_=new tt,b=new Q,L=new Q;function k(Y,K,ne){g.fromArray(o,Y*3),x.fromArray(o,K*3),S.fromArray(o,ne*3),M.fromArray(d,Y*2),y.fromArray(d,K*2),_.fromArray(d,ne*2),x.sub(g),S.sub(g),y.sub(M),_.sub(M);const ae=1/(y.x*_.y-_.x*y.y);isFinite(ae)&&(b.copy(x).multiplyScalar(_.y).addScaledVector(S,-y.y).multiplyScalar(ae),L.copy(S).multiplyScalar(y.x).addScaledVector(x,-_.x).multiplyScalar(ae),h[Y].add(b),h[K].add(b),h[ne].add(b),v[Y].add(L),v[K].add(L),v[ne].add(L))}let D=this.groups;D.length===0&&(D=[{start:0,count:r.length}]);for(let Y=0,K=D.length;Y<K;++Y){const ne=D[Y],ae=ne.start,G=ne.count;for(let ie=ae,ee=ae+G;ie<ee;ie+=3)k(r[ie+0],r[ie+1],r[ie+2])}const C=new Q,F=new Q,j=new Q,E=new Q;function z(Y){j.fromArray(a,Y*3),E.copy(j);const K=h[Y];C.copy(K),C.sub(j.multiplyScalar(j.dot(K))).normalize(),F.crossVectors(E,K);const ae=F.dot(v[Y])<0?-1:1;m[Y*4]=C.x,m[Y*4+1]=C.y,m[Y*4+2]=C.z,m[Y*4+3]=ae}for(let Y=0,K=D.length;Y<K;++Y){const ne=D[Y],ae=ne.start,G=ne.count;for(let ie=ae,ee=ae+G;ie<ee;ie+=3)z(r[ie+0]),z(r[ie+1]),z(r[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new Q,a=new Q,d=new Q,c=new Q,m=new Q,h=new Q,v=new Q,g=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),y=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(n,M),a.fromBufferAttribute(n,y),d.fromBufferAttribute(n,_),v.subVectors(d,a),g.subVectors(o,a),v.cross(g),c.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.fromBufferAttribute(r,_),c.add(v),m.add(v),h.add(v),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(y,m.x,m.y,m.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),a.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),v.subVectors(d,a),g.subVectors(o,a),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(e.attributes[o]===void 0)continue;const d=r[o].array,c=e.attributes[o],m=c.array,h=c.itemSize*n,v=Math.min(m.length,d.length-h);for(let g=0,x=h;g<v;g++,x++)d[x]=m[g]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,m){const h=c.array,v=c.itemSize,g=c.normalized,x=new h.constructor(m.length*v);let S=0,M=0;for(let y=0,_=m.length;y<_;y++){c.isInterleavedBufferAttribute?S=m[y]*c.data.stride+c.offset:S=m[y]*v;for(let b=0;b<v;b++)x[M++]=h[S++]}return new In(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,r=this.index.array,o=this.attributes;for(const c in o){const m=o[c],h=e(m,r);n.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const m=[],h=a[c];for(let v=0,g=h.length;v<g;v++){const x=h[v],S=e(x,r);m.push(S)}n.morphAttributes[c]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,m=d.length;c<m;c++){const h=d[c];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let a=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let g=0,x=h.length;g<x;g++){const S=h[g];v.push(S.toJSON(e.data))}v.length>0&&(o[m]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const a=e.morphAttributes;for(const h in a){const v=[],g=a[h];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Kt,Ns=new hg,ad=new Yl,fr=new Q,hr=new Q,pr=new Q,ld=new Q,ud=new Q,cd=new Q,bl=new Q,Tl=new Q,Cl=new Q,Al=new tt,Rl=new tt,Ll=new tt,dd=new Q,Pl=new Q;class zi extends Xn{constructor(e=new $n,n=new zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,d=o.length;a<d;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(e,n){const r=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),ad.copy(r.boundingSphere),ad.applyMatrix4(a),e.ray.intersectsSphere(ad)===!1)||(gm.copy(a).invert(),Ns.copy(e.ray).applyMatrix4(gm),r.boundingBox!==null&&Ns.intersectsBox(r.boundingBox)===!1))return;let d;const c=r.index,m=r.attributes.position,h=r.morphAttributes.position,v=r.morphTargetsRelative,g=r.attributes.uv,x=r.attributes.uv2,S=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const b=S[y],L=o[b.materialIndex],k=Math.max(b.start,M.start),D=Math.min(c.count,Math.min(b.start+b.count,M.start+M.count));for(let C=k,F=D;C<F;C+=3){const j=c.getX(C),E=c.getX(C+1),z=c.getX(C+2);d=Dl(this,L,e,Ns,m,h,v,g,x,j,E,z),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,n.push(d))}}else{const y=Math.max(0,M.start),_=Math.min(c.count,M.start+M.count);for(let b=y,L=_;b<L;b+=3){const k=c.getX(b),D=c.getX(b+1),C=c.getX(b+2);d=Dl(this,o,e,Ns,m,h,v,g,x,k,D,C),d&&(d.faceIndex=Math.floor(b/3),n.push(d))}}else if(m!==void 0)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const b=S[y],L=o[b.materialIndex],k=Math.max(b.start,M.start),D=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let C=k,F=D;C<F;C+=3){const j=C,E=C+1,z=C+2;d=Dl(this,L,e,Ns,m,h,v,g,x,j,E,z),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,n.push(d))}}else{const y=Math.max(0,M.start),_=Math.min(m.count,M.start+M.count);for(let b=y,L=_;b<L;b+=3){const k=b,D=b+1,C=b+2;d=Dl(this,o,e,Ns,m,h,v,g,x,k,D,C),d&&(d.faceIndex=Math.floor(b/3),n.push(d))}}}}function S_(l,e,n,r,o,a,d,c){let m;if(e.side===ui?m=r.intersectTriangle(d,a,o,!0,c):m=r.intersectTriangle(o,a,d,e.side!==Ks,c),m===null)return null;Pl.copy(c),Pl.applyMatrix4(l.matrixWorld);const h=n.ray.origin.distanceTo(Pl);return h<n.near||h>n.far?null:{distance:h,point:Pl.clone(),object:l}}function Dl(l,e,n,r,o,a,d,c,m,h,v,g){fr.fromBufferAttribute(o,h),hr.fromBufferAttribute(o,v),pr.fromBufferAttribute(o,g);const x=l.morphTargetInfluences;if(a&&x){bl.set(0,0,0),Tl.set(0,0,0),Cl.set(0,0,0);for(let M=0,y=a.length;M<y;M++){const _=x[M],b=a[M];_!==0&&(ld.fromBufferAttribute(b,h),ud.fromBufferAttribute(b,v),cd.fromBufferAttribute(b,g),d?(bl.addScaledVector(ld,_),Tl.addScaledVector(ud,_),Cl.addScaledVector(cd,_)):(bl.addScaledVector(ld.sub(fr),_),Tl.addScaledVector(ud.sub(hr),_),Cl.addScaledVector(cd.sub(pr),_)))}fr.add(bl),hr.add(Tl),pr.add(Cl)}l.isSkinnedMesh&&(l.boneTransform(h,fr),l.boneTransform(v,hr),l.boneTransform(g,pr));const S=S_(l,e,n,r,fr,hr,pr,dd);if(S){c&&(Al.fromBufferAttribute(c,h),Rl.fromBufferAttribute(c,v),Ll.fromBufferAttribute(c,g),S.uv=ki.getUV(dd,fr,hr,pr,Al,Rl,Ll,new tt)),m&&(Al.fromBufferAttribute(m,h),Rl.fromBufferAttribute(m,v),Ll.fromBufferAttribute(m,g),S.uv2=ki.getUV(dd,fr,hr,pr,Al,Rl,Ll,new tt));const M={a:h,b:v,c:g,normal:new Q,materialIndex:0};ki.getNormal(fr,hr,pr,M.normal),S.face=M}return S}class aa extends $n{constructor(e=1,n=1,r=1,o=1,a=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:a,depthSegments:d};const c=this;o=Math.floor(o),a=Math.floor(a),d=Math.floor(d);const m=[],h=[],v=[],g=[];let x=0,S=0;M("z","y","x",-1,-1,r,n,e,d,a,0),M("z","y","x",1,-1,r,n,-e,d,a,1),M("x","z","y",1,1,e,r,n,o,d,2),M("x","z","y",1,-1,e,r,-n,o,d,3),M("x","y","z",1,-1,e,n,r,o,a,4),M("x","y","z",-1,-1,e,n,-r,o,a,5),this.setIndex(m),this.setAttribute("position",new bn(h,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(g,2));function M(y,_,b,L,k,D,C,F,j,E,z){const Y=D/j,K=C/E,ne=D/2,ae=C/2,G=F/2,ie=j+1,ee=E+1;let se=0,B=0;const W=new Q;for(let H=0;H<ee;H++){const T=H*K-ae;for(let O=0;O<ie;O++){const X=O*Y-ne;W[y]=X*L,W[_]=T*k,W[b]=G,h.push(W.x,W.y,W.z),W[y]=0,W[_]=0,W[b]=F>0?1:-1,v.push(W.x,W.y,W.z),g.push(O/j),g.push(1-H/E),se+=1}}for(let H=0;H<E;H++)for(let T=0;T<j;T++){const O=x+T+ie*H,X=x+T+ie*(H+1),de=x+(T+1)+ie*(H+1),me=x+(T+1)+ie*H;m.push(O,X,me),m.push(X,de,me),B+=6}c.addGroup(S,B,z),S+=B,x+=se}}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(l){const e={};for(const n in l){e[n]={};for(const r in l[n]){const o=l[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ln(l){const e={};for(let n=0;n<l.length;n++){const r=eo(l[n]);for(const o in r)e[o]=r[o]}return e}function w_(l){const e=[];for(let n=0;n<l.length;n++)e.push(l[n].clone());return e}const jl={clone:eo,merge:ln};var M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class vg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends vg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,o,a,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,a=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;a+=d.offsetX*o/m,n-=d.offsetY*r/h,o*=d.width/m,r*=d.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=90,Fs=1;class b_ extends Xn{constructor(e,n,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new Hn(ks,Fs,e,n);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new Q(1,0,0)),this.add(o);const a=new Hn(ks,Fs,e,n);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Q(-1,0,0)),this.add(a);const d=new Hn(ks,Fs,e,n);d.layers=this.layers,d.up.set(0,0,1),d.lookAt(new Q(0,1,0)),this.add(d);const c=new Hn(ks,Fs,e,n);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new Q(0,-1,0)),this.add(c);const m=new Hn(ks,Fs,e,n);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new Q(0,0,1)),this.add(m);const h=new Hn(ks,Fs,e,n);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new Q(0,0,-1)),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,a,d,c,m,h]=this.children,v=e.getRenderTarget(),g=e.toneMapping,x=e.xr.enabled;e.toneMapping=Oi,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,o),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,d),e.setRenderTarget(r,3),e.render(n,c),e.setRenderTarget(r,4),e.render(n,m),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(n,h),e.setRenderTarget(v),e.toneMapping=g,e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class xg extends qn{constructor(e,n,r,o,a,d,c,m,h,v){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,r,o,a,d,c,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T_ extends ci{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new aa(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ui,blending:_r});a.uniforms.tEquirect.value=n;const d=new zi(o,a),c=n.minFilter;return n.minFilter===$l&&(n.minFilter=Wn),new b_(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const a=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(a)}}const fd=new Q,C_=new Q,A_=new jn;class Br{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=fd.subVectors(r,n).cross(C_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(r).multiplyScalar(a).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||A_.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Yl,Il=new Q;class _g{constructor(e=new Br,n=new Br,r=new Br,o=new Br,a=new Br,d=new Br){this.planes=[e,n,r,o,a,d]}set(e,n,r,o,a,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const n=this.planes,r=e.elements,o=r[0],a=r[1],d=r[2],c=r[3],m=r[4],h=r[5],v=r[6],g=r[7],x=r[8],S=r[9],M=r[10],y=r[11],_=r[12],b=r[13],L=r[14],k=r[15];return n[0].setComponents(c-o,g-m,y-x,k-_).normalize(),n[1].setComponents(c+o,g+m,y+x,k+_).normalize(),n[2].setComponents(c+a,g+h,y+S,k+b).normalize(),n[3].setComponents(c-a,g-h,y-S,k-b).normalize(),n[4].setComponents(c-d,g-v,y-M,k-L).normalize(),n[5].setComponents(c+d,g+v,y+M,k+L).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Il.x=o.normal.x>0?e.max.x:e.min.x,Il.y=o.normal.y>0?e.max.y:e.min.y,Il.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yg(){let l=null,e=!1,n=null,r=null;function o(a,d){n(a,d),r=l.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=l.requestAnimationFrame(o),e=!0)},stop:function(){l.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){l=a}}}function R_(l,e){const n=e.isWebGL2,r=new WeakMap;function o(h,v){const g=h.array,x=h.usage,S=l.createBuffer();l.bindBuffer(v,S),l.bufferData(v,g,x),h.onUploadCallback();let M;if(g instanceof Float32Array)M=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(g instanceof Int16Array)M=5122;else if(g instanceof Uint32Array)M=5125;else if(g instanceof Int32Array)M=5124;else if(g instanceof Int8Array)M=5120;else if(g instanceof Uint8Array)M=5121;else if(g instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function a(h,v,g){const x=v.array,S=v.updateRange;l.bindBuffer(g,h),S.count===-1?l.bufferSubData(g,0,x):(n?l.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):l.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1)}function d(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=r.get(h);v&&(l.deleteBuffer(v.buffer),r.delete(h))}function m(h,v){if(h.isGLBufferAttribute){const x=r.get(h);(!x||x.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=r.get(h);g===void 0?r.set(h,o(h,v)):g.version<h.version&&(a(g.buffer,h,v),g.version=h.version)}return{get:d,remove:c,update:m}}class Od extends $n{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const a=e/2,d=n/2,c=Math.floor(r),m=Math.floor(o),h=c+1,v=m+1,g=e/c,x=n/m,S=[],M=[],y=[],_=[];for(let b=0;b<v;b++){const L=b*x-d;for(let k=0;k<h;k++){const D=k*g-a;M.push(D,-L,0),y.push(0,0,1),_.push(k/c),_.push(1-b/m)}}for(let b=0;b<m;b++)for(let L=0;L<c;L++){const k=L+h*b,D=L+h*(b+1),C=L+1+h*(b+1),F=L+1+h*b;S.push(k,D,F),S.push(D,C,F)}this.setIndex(S),this.setAttribute("position",new bn(M,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(_,2))}static fromJSON(e){return new Od(e.width,e.height,e.widthSegments,e.heightSegments)}}var L_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,P_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_="vec3 transformed = vec3( position );",z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,U_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,K_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,py=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,My=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,by=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,By=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Wy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xS=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,_S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,SS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,MS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ES=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,IS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,US=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ot={alphamap_fragment:L_,alphamap_pars_fragment:P_,alphatest_fragment:D_,alphatest_pars_fragment:I_,aomap_fragment:N_,aomap_pars_fragment:k_,begin_vertex:F_,beginnormal_vertex:z_,bsdfs:O_,iridescence_fragment:U_,bumpmap_pars_fragment:B_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:H_,color_fragment:j_,color_pars_fragment:q_,color_pars_vertex:X_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:Q_,displacementmap_vertex:J_,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,encodings_fragment:ny,encodings_pars_fragment:iy,envmap_fragment:ry,envmap_common_pars_fragment:sy,envmap_pars_fragment:oy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:xy,envmap_vertex:ly,fog_vertex:uy,fog_pars_vertex:cy,fog_fragment:dy,fog_pars_fragment:fy,gradientmap_pars_fragment:hy,lightmap_fragment:py,lightmap_pars_fragment:my,lights_lambert_vertex:gy,lights_pars_begin:vy,lights_toon_fragment:_y,lights_toon_pars_fragment:yy,lights_phong_fragment:Sy,lights_phong_pars_fragment:wy,lights_physical_fragment:My,lights_physical_pars_fragment:Ey,lights_fragment_begin:by,lights_fragment_maps:Ty,lights_fragment_end:Cy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Ly,logdepthbuf_vertex:Py,map_fragment:Dy,map_pars_fragment:Iy,map_particle_fragment:Ny,map_particle_pars_fragment:ky,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:zy,morphcolor_vertex:Oy,morphnormal_vertex:Uy,morphtarget_pars_vertex:By,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:Wy,normal_pars_fragment:Hy,normal_pars_vertex:jy,normal_vertex:qy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Zy,output_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:aS,shadowmap_vertex:lS,shadowmask_pars_fragment:uS,skinbase_vertex:cS,skinning_pars_vertex:dS,skinning_vertex:fS,skinnormal_vertex:hS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:vS,transmission_fragment:xS,transmission_pars_fragment:_S,uv_pars_fragment:yS,uv_pars_vertex:SS,uv_vertex:wS,uv2_pars_fragment:MS,uv2_pars_vertex:ES,uv2_vertex:bS,worldpos_vertex:TS,background_vert:CS,background_frag:AS,cube_vert:RS,cube_frag:LS,depth_vert:PS,depth_frag:DS,distanceRGBA_vert:IS,distanceRGBA_frag:NS,equirect_vert:kS,equirect_frag:FS,linedashed_vert:zS,linedashed_frag:OS,meshbasic_vert:US,meshbasic_frag:BS,meshlambert_vert:GS,meshlambert_frag:VS,meshmatcap_vert:WS,meshmatcap_frag:HS,meshnormal_vert:jS,meshnormal_frag:qS,meshphong_vert:XS,meshphong_frag:$S,meshphysical_vert:YS,meshphysical_frag:KS,meshtoon_vert:ZS,meshtoon_frag:QS,points_vert:JS,points_frag:ew,shadow_vert:tw,shadow_frag:nw,sprite_vert:iw,sprite_frag:rw},Ce={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jn},uv2Transform:{value:new jn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jn}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jn}}},xi={basic:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new vt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:ln([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:ln([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:ln([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new jn},t2D:{value:null}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},cube:{uniforms:ln([Ce.envmap,{opacity:{value:1}}]),vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:ln([Ce.lights,Ce.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};function sw(l,e,n,r,o,a){const d=new vt(0);let c=o===!0?0:1,m,h,v=null,g=0,x=null;function S(y,_){let b=!1,L=_.isScene===!0?_.background:null;L&&L.isTexture&&(L=e.get(L));const k=l.xr,D=k.getSession&&k.getSession();D&&D.environmentBlendMode==="additive"&&(L=null),L===null?M(d,c):L&&L.isColor&&(M(L,1),b=!0),(l.autoClear||b)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Xl)?(h===void 0&&(h=new zi(new aa(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:eo(xi.cube.uniforms),vertexShader:xi.cube.vertexShader,fragmentShader:xi.cube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,(v!==L||g!==L.version||x!==l.toneMapping)&&(h.material.needsUpdate=!0,v=L,g=L.version,x=l.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new zi(new Od(2,2),new pn({name:"BackgroundMaterial",uniforms:eo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Zo,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||g!==L.version||x!==l.toneMapping)&&(m.material.needsUpdate=!0,v=L,g=L.version,x=l.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function M(y,_){n.buffers.color.setClear(y.r,y.g,y.b,_,a)}return{getClearColor:function(){return d},setClearColor:function(y,_=1){d.set(y),c=_,M(d,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,M(d,c)},render:S}}function ow(l,e,n,r){const o=l.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||a!==null,c={},m=_(null);let h=m,v=!1;function g(G,ie,ee,se,B){let W=!1;if(d){const H=y(se,ee,ie);h!==H&&(h=H,S(h.object)),W=b(G,se,ee,B),W&&L(G,se,ee,B)}else{const H=ie.wireframe===!0;(h.geometry!==se.id||h.program!==ee.id||h.wireframe!==H)&&(h.geometry=se.id,h.program=ee.id,h.wireframe=H,W=!0)}B!==null&&n.update(B,34963),(W||v)&&(v=!1,E(G,ie,ee,se),B!==null&&l.bindBuffer(34963,n.get(B).buffer))}function x(){return r.isWebGL2?l.createVertexArray():a.createVertexArrayOES()}function S(G){return r.isWebGL2?l.bindVertexArray(G):a.bindVertexArrayOES(G)}function M(G){return r.isWebGL2?l.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function y(G,ie,ee){const se=ee.wireframe===!0;let B=c[G.id];B===void 0&&(B={},c[G.id]=B);let W=B[ie.id];W===void 0&&(W={},B[ie.id]=W);let H=W[se];return H===void 0&&(H=_(x()),W[se]=H),H}function _(G){const ie=[],ee=[],se=[];for(let B=0;B<o;B++)ie[B]=0,ee[B]=0,se[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:ee,attributeDivisors:se,object:G,attributes:{},index:null}}function b(G,ie,ee,se){const B=h.attributes,W=ie.attributes;let H=0;const T=ee.getAttributes();for(const O in T)if(T[O].location>=0){const de=B[O];let me=W[O];if(me===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(me=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(me=G.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;H++}return h.attributesNum!==H||h.index!==se}function L(G,ie,ee,se){const B={},W=ie.attributes;let H=0;const T=ee.getAttributes();for(const O in T)if(T[O].location>=0){let de=W[O];de===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(de=G.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),B[O]=me,H++}h.attributes=B,h.attributesNum=H,h.index=se}function k(){const G=h.newAttributes;for(let ie=0,ee=G.length;ie<ee;ie++)G[ie]=0}function D(G){C(G,0)}function C(G,ie){const ee=h.newAttributes,se=h.enabledAttributes,B=h.attributeDivisors;ee[G]=1,se[G]===0&&(l.enableVertexAttribArray(G),se[G]=1),B[G]!==ie&&((r.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,ie),B[G]=ie)}function F(){const G=h.newAttributes,ie=h.enabledAttributes;for(let ee=0,se=ie.length;ee<se;ee++)ie[ee]!==G[ee]&&(l.disableVertexAttribArray(ee),ie[ee]=0)}function j(G,ie,ee,se,B,W){r.isWebGL2===!0&&(ee===5124||ee===5125)?l.vertexAttribIPointer(G,ie,ee,B,W):l.vertexAttribPointer(G,ie,ee,se,B,W)}function E(G,ie,ee,se){if(r.isWebGL2===!1&&(G.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;k();const B=se.attributes,W=ee.getAttributes(),H=ie.defaultAttributeValues;for(const T in W){const O=W[T];if(O.location>=0){let X=B[T];if(X===void 0&&(T==="instanceMatrix"&&G.instanceMatrix&&(X=G.instanceMatrix),T==="instanceColor"&&G.instanceColor&&(X=G.instanceColor)),X!==void 0){const de=X.normalized,me=X.itemSize,q=n.get(X);if(q===void 0)continue;const xe=q.buffer,_e=q.type,Se=q.bytesPerElement;if(X.isInterleavedBufferAttribute){const ye=X.data,qe=ye.stride,Ge=X.offset;if(ye.isInstancedInterleavedBuffer){for(let De=0;De<O.locationSize;De++)C(O.location+De,ye.meshPerAttribute);G.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let De=0;De<O.locationSize;De++)D(O.location+De);l.bindBuffer(34962,xe);for(let De=0;De<O.locationSize;De++)j(O.location+De,me/O.locationSize,_e,de,qe*Se,(Ge+me/O.locationSize*De)*Se)}else{if(X.isInstancedBufferAttribute){for(let ye=0;ye<O.locationSize;ye++)C(O.location+ye,X.meshPerAttribute);G.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ye=0;ye<O.locationSize;ye++)D(O.location+ye);l.bindBuffer(34962,xe);for(let ye=0;ye<O.locationSize;ye++)j(O.location+ye,me/O.locationSize,_e,de,me*Se,me/O.locationSize*ye*Se)}}else if(H!==void 0){const de=H[T];if(de!==void 0)switch(de.length){case 2:l.vertexAttrib2fv(O.location,de);break;case 3:l.vertexAttrib3fv(O.location,de);break;case 4:l.vertexAttrib4fv(O.location,de);break;default:l.vertexAttrib1fv(O.location,de)}}}}F()}function z(){ne();for(const G in c){const ie=c[G];for(const ee in ie){const se=ie[ee];for(const B in se)M(se[B].object),delete se[B];delete ie[ee]}delete c[G]}}function Y(G){if(c[G.id]===void 0)return;const ie=c[G.id];for(const ee in ie){const se=ie[ee];for(const B in se)M(se[B].object),delete se[B];delete ie[ee]}delete c[G.id]}function K(G){for(const ie in c){const ee=c[ie];if(ee[G.id]===void 0)continue;const se=ee[G.id];for(const B in se)M(se[B].object),delete se[B];delete ee[G.id]}}function ne(){ae(),v=!0,h!==m&&(h=m,S(h.object))}function ae(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:g,reset:ne,resetDefaultState:ae,dispose:z,releaseStatesOfGeometry:Y,releaseStatesOfProgram:K,initAttributes:k,enableAttribute:D,disableUnusedAttributes:F}}function aw(l,e,n,r){const o=r.isWebGL2;let a;function d(h){a=h}function c(h,v){l.drawArrays(a,h,v),n.update(v,a,1)}function m(h,v,g){if(g===0)return;let x,S;if(o)x=l,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](a,h,v,g),n.update(v,a,g)}this.setMode=d,this.render=c,this.renderInstances=m}function lw(l,e,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");r=l.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(j){if(j==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";j="mediump"}return j==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let c=n.precision!==void 0?n.precision:"highp";const m=a(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const h=d||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,g=l.getParameter(34930),x=l.getParameter(35660),S=l.getParameter(3379),M=l.getParameter(34076),y=l.getParameter(34921),_=l.getParameter(36347),b=l.getParameter(36348),L=l.getParameter(36349),k=x>0,D=d||e.has("OES_texture_float"),C=k&&D,F=d?l.getParameter(36183):0;return{isWebGL2:d,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:v,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:L,vertexTextures:k,floatFragmentTextures:D,floatVertexTextures:C,maxSamples:F}}function uw(l){const e=this;let n=null,r=0,o=!1,a=!1;const d=new Br,c=new jn,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x,S){const M=g.length!==0||x||r!==0||o;return o=x,n=v(g,S,0),r=g.length,M},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1,h()},this.setState=function(g,x,S){const M=g.clippingPlanes,y=g.clipIntersection,_=g.clipShadows,b=l.get(g);if(!o||M===null||M.length===0||a&&!_)a?v(null):h();else{const L=a?0:r,k=L*4;let D=b.clippingState||null;m.value=D,D=v(M,x,k,S);for(let C=0;C!==k;++C)D[C]=n[C];b.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,M){const y=g!==null?g.length:0;let _=null;if(y!==0){if(_=m.value,M!==!0||_===null){const b=S+y*4,L=x.matrixWorldInverse;c.getNormalMatrix(L),(_===null||_.length<b)&&(_=new Float32Array(b));for(let k=0,D=S;k!==y;++k,D+=4)d.copy(g[k]).applyMatrix4(L,c),d.normal.toArray(_,D),_[D+3]=d.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function cw(l){let e=new WeakMap;function n(d,c){return c===wd?d.mapping=Zs:c===Md&&(d.mapping=Qs),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const c=d.mapping;if(c===wd||c===Md)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new T_(m.height/2);return h.fromEquirectangularTexture(l,d),e.set(d,h),d.addEventListener("dispose",o),n(h.texture,d.mapping)}else return null}}return d}function o(d){const c=d.target;c.removeEventListener("dispose",o);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Ud extends vg{constructor(e=-1,n=1,r=1,o=-1,a=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=a,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,a,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,d=r+e,c=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,d=a+h*this.view.width,c-=v*this.view.offsetY,m=c-v*this.view.height}this.projectionMatrix.makeOrthographic(a,d,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,vm=[.125,.215,.35,.446,.526,.582],Vr=20,hd=new Ud,xm=new vt;let pd=null;const Gr=(1+Math.sqrt(5))/2,Os=1/Gr,_m=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Gr,Os),new Q(0,Gr,-Os),new Q(Os,0,Gr),new Q(-Os,0,Gr),new Q(Gr,Os,0),new Q(-Gr,Os,0)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){pd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Jo,format:li,encoding:es,depthBuffer:!1},o=Sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(a)),this._blurMaterial=fw(a,e,n)}return o}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,hd)}_sceneToCubeUV(e,n,r,o){const c=new Hn(90,1,n,r),m=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(xm),v.toneMapping=Oi,v.autoClear=!1;const S=new zd({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),M=new zi(new aa,S);let y=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,y=!0):(S.color.copy(xm),y=!0);for(let b=0;b<6;b++){const L=b%3;L===0?(c.up.set(0,m[b],0),c.lookAt(h[b],0,0)):L===1?(c.up.set(0,0,m[b]),c.lookAt(0,h[b],0)):(c.up.set(0,m[b],0),c.lookAt(0,0,h[b]));const k=this._cubeSize;Nl(o,L*k,b>2?k:0,k,k),v.setRenderTarget(o),y&&v.render(M,c),v.render(e,c)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Zs||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const a=o?this._cubemapMaterial:this._equirectMaterial,d=new zi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const m=this._cubeSize;Nl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,hd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=_m[(o-1)%_m.length];this._blur(e,o-1,o,a,d)}n.autoClear=r}_blur(e,n,r,o,a){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",a),this._halfBlur(d,e,r,r,o,"longitudinal",a)}_halfBlur(e,n,r,o,a,d,c){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new zi(this._lodPlanes[o],h),x=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),y=a/M,_=isFinite(a)?1+Math.floor(v*y):Vr;_>Vr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vr}`);const b=[];let L=0;for(let j=0;j<Vr;++j){const E=j/y,z=Math.exp(-E*E/2);b.push(z),j===0?L+=z:j<_&&(L+=2*z)}for(let j=0;j<b.length;j++)b[j]=b[j]/L;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=b,x.latitudinal.value=d==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:k}=this;x.dTheta.value=M,x.mipInt.value=k-r;const D=this._sizeLods[o],C=3*D*(o>k-Hs?o-k+Hs:0),F=4*(this._cubeSize-D);Nl(n,C,F,3*D,2*D),m.setRenderTarget(n),m.render(g,hd)}}function dw(l){const e=[],n=[],r=[];let o=l;const a=l-Hs+1+vm.length;for(let d=0;d<a;d++){const c=Math.pow(2,o);n.push(c);let m=1/c;d>l-Hs?m=vm[d-l+Hs-1]:d===0&&(m=0),r.push(m);const h=1/(c-2),v=-h,g=1+h,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,M=6,y=3,_=2,b=1,L=new Float32Array(y*M*S),k=new Float32Array(_*M*S),D=new Float32Array(b*M*S);for(let F=0;F<S;F++){const j=F%3*2/3-1,E=F>2?0:-1,z=[j,E,0,j+2/3,E,0,j+2/3,E+1,0,j,E,0,j+2/3,E+1,0,j,E+1,0];L.set(z,y*M*F),k.set(x,_*M*F);const Y=[F,F,F,F,F,F];D.set(Y,b*M*F)}const C=new $n;C.setAttribute("position",new In(L,y)),C.setAttribute("uv",new In(k,_)),C.setAttribute("faceIndex",new In(D,b)),e.push(C),o>Hs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Sm(l,e,n){const r=new ci(l,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(l,e,n,r,o){l.viewport.set(e,n,r,o),l.scissor.set(e,n,r,o)}function fw(l,e,n){const r=new Float32Array(Vr),o=new Q(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function wm(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Mm(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hw(l){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const m=c.mapping,h=m===wd||m===Md,v=m===Zs||m===Qs;if(h||v)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return n===null&&(n=new ym(l)),g=h?n.fromEquirectangular(c,g):n.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||v&&g&&o(g)){n===null&&(n=new ym(l));const x=h?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",a),x.texture}else return null}}}return c}function o(c){let m=0;const h=6;for(let v=0;v<h;v++)c[v]!==void 0&&m++;return m===h}function a(c){const m=c.target;m.removeEventListener("dispose",a);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function pw(l){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=l.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function mw(l,e,n,r){const o={},a=new WeakMap;function d(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",d),delete o[x.id];const S=a.get(x);S&&(e.remove(S),a.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function c(g,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],34962);const S=g.morphAttributes;for(const M in S){const y=S[M];for(let _=0,b=y.length;_<b;_++)e.update(y[_],34962)}}function h(g){const x=[],S=g.index,M=g.attributes.position;let y=0;if(S!==null){const L=S.array;y=S.version;for(let k=0,D=L.length;k<D;k+=3){const C=L[k+0],F=L[k+1],j=L[k+2];x.push(C,F,F,j,j,C)}}else{const L=M.array;y=M.version;for(let k=0,D=L.length/3-1;k<D;k+=3){const C=k+0,F=k+1,j=k+2;x.push(C,F,F,j,j,C)}}const _=new(lg(x)?gg:mg)(x,1);_.version=y;const b=a.get(g);b&&e.remove(b),a.set(g,_)}function v(g){const x=a.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:m,getWireframeAttribute:v}}function gw(l,e,n,r){const o=r.isWebGL2;let a;function d(x){a=x}let c,m;function h(x){c=x.type,m=x.bytesPerElement}function v(x,S){l.drawElements(a,S,c,x*m),n.update(S,a,1)}function g(x,S,M){if(M===0)return;let y,_;if(o)y=l,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](a,S,c,x*m,M),n.update(S,a,M)}this.setMode=d,this.setIndex=h,this.render=v,this.renderInstances=g}function vw(l){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,d,c){switch(n.calls++,d){case 4:n.triangles+=c*(a/3);break;case 1:n.lines+=c*(a/2);break;case 3:n.lines+=c*(a-1);break;case 2:n.lines+=c*a;break;case 0:n.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function xw(l,e){return l[0]-e[0]}function _w(l,e){return Math.abs(e[1])-Math.abs(l[1])}function md(l,e){let n=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?n=127:r instanceof Uint8Array?n=255:r instanceof Uint16Array?n=65535:r instanceof Int16Array?n=32767:r instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),l.divideScalar(n)}function yw(l,e,n){const r={},o=new Float32Array(8),a=new WeakMap,d=new Yt,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function m(h,v,g,x){const S=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,_=y!==void 0?y.length:0;let b=a.get(v);if(b===void 0||b.count!==_){let ee=function(){G.dispose(),a.delete(v),v.removeEventListener("dispose",ee)};var M=ee;b!==void 0&&b.texture.dispose();const D=v.morphAttributes.position!==void 0,C=v.morphAttributes.normal!==void 0,F=v.morphAttributes.color!==void 0,j=v.morphAttributes.position||[],E=v.morphAttributes.normal||[],z=v.morphAttributes.color||[];let Y=0;D===!0&&(Y=1),C===!0&&(Y=2),F===!0&&(Y=3);let K=v.attributes.position.count*Y,ne=1;K>e.maxTextureSize&&(ne=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const ae=new Float32Array(K*ne*4*_),G=new fg(ae,K,ne,_);G.type=qr,G.needsUpdate=!0;const ie=Y*4;for(let se=0;se<_;se++){const B=j[se],W=E[se],H=z[se],T=K*ne*4*se;for(let O=0;O<B.count;O++){const X=O*ie;D===!0&&(d.fromBufferAttribute(B,O),B.normalized===!0&&md(d,B),ae[T+X+0]=d.x,ae[T+X+1]=d.y,ae[T+X+2]=d.z,ae[T+X+3]=0),C===!0&&(d.fromBufferAttribute(W,O),W.normalized===!0&&md(d,W),ae[T+X+4]=d.x,ae[T+X+5]=d.y,ae[T+X+6]=d.z,ae[T+X+7]=0),F===!0&&(d.fromBufferAttribute(H,O),H.normalized===!0&&md(d,H),ae[T+X+8]=d.x,ae[T+X+9]=d.y,ae[T+X+10]=d.z,ae[T+X+11]=H.itemSize===4?d.w:1)}}b={count:_,texture:G,size:new tt(K,ne)},a.set(v,b),v.addEventListener("dispose",ee)}let L=0;for(let D=0;D<S.length;D++)L+=S[D];const k=v.morphTargetsRelative?1:1-L;x.getUniforms().setValue(l,"morphTargetBaseInfluence",k),x.getUniforms().setValue(l,"morphTargetInfluences",S),x.getUniforms().setValue(l,"morphTargetsTexture",b.texture,n),x.getUniforms().setValue(l,"morphTargetsTextureSize",b.size)}else{const y=S===void 0?0:S.length;let _=r[v.id];if(_===void 0||_.length!==y){_=[];for(let C=0;C<y;C++)_[C]=[C,0];r[v.id]=_}for(let C=0;C<y;C++){const F=_[C];F[0]=C,F[1]=S[C]}_.sort(_w);for(let C=0;C<8;C++)C<y&&_[C][1]?(c[C][0]=_[C][0],c[C][1]=_[C][1]):(c[C][0]=Number.MAX_SAFE_INTEGER,c[C][1]=0);c.sort(xw);const b=v.morphAttributes.position,L=v.morphAttributes.normal;let k=0;for(let C=0;C<8;C++){const F=c[C],j=F[0],E=F[1];j!==Number.MAX_SAFE_INTEGER&&E?(b&&v.getAttribute("morphTarget"+C)!==b[j]&&v.setAttribute("morphTarget"+C,b[j]),L&&v.getAttribute("morphNormal"+C)!==L[j]&&v.setAttribute("morphNormal"+C,L[j]),o[C]=E,k+=E):(b&&v.hasAttribute("morphTarget"+C)===!0&&v.deleteAttribute("morphTarget"+C),L&&v.hasAttribute("morphNormal"+C)===!0&&v.deleteAttribute("morphNormal"+C),o[C]=0)}const D=v.morphTargetsRelative?1:1-k;x.getUniforms().setValue(l,"morphTargetBaseInfluence",D),x.getUniforms().setValue(l,"morphTargetInfluences",o)}}return{update:m}}function Sw(l,e,n,r){let o=new WeakMap;function a(m){const h=r.render.frame,v=m.geometry,g=e.get(m,v);return o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),g}function d(){o=new WeakMap}function c(m){const h=m.target;h.removeEventListener("dispose",c),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:d}}const Sg=new qn,wg=new fg,Mg=new d_,Eg=new xg,Em=[],bm=[],Tm=new Float32Array(16),Cm=new Float32Array(9),Am=new Float32Array(4);function no(l,e,n){const r=l[0];if(r<=0||r>0)return l;const o=e*n;let a=Em[o];if(a===void 0&&(a=new Float32Array(o),Em[o]=a),e!==0){r.toArray(a,0);for(let d=1,c=0;d!==e;++d)c+=n,l[d].toArray(a,c)}return a}function gn(l,e){if(l.length!==e.length)return!1;for(let n=0,r=l.length;n<r;n++)if(l[n]!==e[n])return!1;return!0}function vn(l,e){for(let n=0,r=e.length;n<r;n++)l[n]=e[n]}function Kl(l,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let r=0;r!==e;++r)n[r]=l.allocateTextureUnit();return n}function ww(l,e){const n=this.cache;n[0]!==e&&(l.uniform1f(this.addr,e),n[0]=e)}function Mw(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;l.uniform2fv(this.addr,e),vn(n,e)}}function Ew(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;l.uniform3fv(this.addr,e),vn(n,e)}}function bw(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;l.uniform4fv(this.addr,e),vn(n,e)}}function Tw(l,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;l.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Am.set(r),l.uniformMatrix2fv(this.addr,!1,Am),vn(n,r)}}function Cw(l,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;l.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Cm.set(r),l.uniformMatrix3fv(this.addr,!1,Cm),vn(n,r)}}function Aw(l,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;l.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Tm.set(r),l.uniformMatrix4fv(this.addr,!1,Tm),vn(n,r)}}function Rw(l,e){const n=this.cache;n[0]!==e&&(l.uniform1i(this.addr,e),n[0]=e)}function Lw(l,e){const n=this.cache;gn(n,e)||(l.uniform2iv(this.addr,e),vn(n,e))}function Pw(l,e){const n=this.cache;gn(n,e)||(l.uniform3iv(this.addr,e),vn(n,e))}function Dw(l,e){const n=this.cache;gn(n,e)||(l.uniform4iv(this.addr,e),vn(n,e))}function Iw(l,e){const n=this.cache;n[0]!==e&&(l.uniform1ui(this.addr,e),n[0]=e)}function Nw(l,e){const n=this.cache;gn(n,e)||(l.uniform2uiv(this.addr,e),vn(n,e))}function kw(l,e){const n=this.cache;gn(n,e)||(l.uniform3uiv(this.addr,e),vn(n,e))}function Fw(l,e){const n=this.cache;gn(n,e)||(l.uniform4uiv(this.addr,e),vn(n,e))}function zw(l,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(l.uniform1i(this.addr,o),r[0]=o),n.setTexture2D(e||Sg,o)}function Ow(l,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(l.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Mg,o)}function Uw(l,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(l.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Eg,o)}function Bw(l,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(l.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||wg,o)}function Gw(l){switch(l){case 5126:return ww;case 35664:return Mw;case 35665:return Ew;case 35666:return bw;case 35674:return Tw;case 35675:return Cw;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Lw;case 35668:case 35672:return Pw;case 35669:case 35673:return Dw;case 5125:return Iw;case 36294:return Nw;case 36295:return kw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Vw(l,e){l.uniform1fv(this.addr,e)}function Ww(l,e){const n=no(e,this.size,2);l.uniform2fv(this.addr,n)}function Hw(l,e){const n=no(e,this.size,3);l.uniform3fv(this.addr,n)}function jw(l,e){const n=no(e,this.size,4);l.uniform4fv(this.addr,n)}function qw(l,e){const n=no(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function Xw(l,e){const n=no(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function $w(l,e){const n=no(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function Yw(l,e){l.uniform1iv(this.addr,e)}function Kw(l,e){l.uniform2iv(this.addr,e)}function Zw(l,e){l.uniform3iv(this.addr,e)}function Qw(l,e){l.uniform4iv(this.addr,e)}function Jw(l,e){l.uniform1uiv(this.addr,e)}function e1(l,e){l.uniform2uiv(this.addr,e)}function t1(l,e){l.uniform3uiv(this.addr,e)}function n1(l,e){l.uniform4uiv(this.addr,e)}function i1(l,e,n){const r=e.length,o=Kl(n,r);l.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Sg,o[a])}function r1(l,e,n){const r=e.length,o=Kl(n,r);l.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Mg,o[a])}function s1(l,e,n){const r=e.length,o=Kl(n,r);l.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Eg,o[a])}function o1(l,e,n){const r=e.length,o=Kl(n,r);l.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||wg,o[a])}function a1(l){switch(l){case 5126:return Vw;case 35664:return Ww;case 35665:return Hw;case 35666:return jw;case 35674:return qw;case 35675:return Xw;case 35676:return $w;case 5124:case 35670:return Yw;case 35667:case 35671:return Kw;case 35668:case 35672:return Zw;case 35669:case 35673:return Qw;case 5125:return Jw;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}class l1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Gw(n.type)}}class u1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=a1(n.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let a=0,d=o.length;a!==d;++a){const c=o[a];c.setValue(e,n[c.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Rm(l,e){l.seq.push(e),l.map[e.id]=e}function d1(l,e,n){const r=l.name,o=r.length;for(gd.lastIndex=0;;){const a=gd.exec(r),d=gd.lastIndex;let c=a[1];const m=a[2]==="]",h=a[3];if(m&&(c=c|0),h===void 0||h==="["&&d+2===o){Rm(n,h===void 0?new l1(c,l,e):new u1(c,l,e));break}else{let g=n.map[c];g===void 0&&(g=new c1(c),Rm(n,g)),n=g}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,35718);for(let o=0;o<r;++o){const a=e.getActiveUniform(n,o),d=e.getUniformLocation(n,a.name);d1(a,d,this)}}setValue(e,n,r,o){const a=this.map[n];a!==void 0&&a.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let a=0,d=n.length;a!==d;++a){const c=n[a],m=r[c.id];m.needsUpdate!==!1&&c.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,a=e.length;o!==a;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Lm(l,e,n){const r=l.createShader(e);return l.shaderSource(r,n),l.compileShader(r),r}let f1=0;function h1(l,e){const n=l.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let d=o;d<a;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function p1(l){switch(l){case es:return["Linear","( value )"];case Ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Pm(l,e,n){const r=l.getShaderParameter(e,35713),o=l.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const d=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+h1(l.getShaderSource(e),d)}else return o}function m1(l,e){const n=p1(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function g1(l,e){let n;switch(e){case zx:n="Linear";break;case Ox:n="Reinhard";break;case Ux:n="OptimizedCineon";break;case Bx:n="ACESFilmic";break;case Gx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function v1(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qo).join(`
`)}function x1(l){const e=[];for(const n in l){const r=l[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function _1(l,e){const n={},r=l.getProgramParameter(e,35721);for(let o=0;o<r;o++){const a=l.getActiveAttrib(e,o),d=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),n[d]={type:a.type,location:l.getAttribLocation(e,d),locationSize:c}}return n}function qo(l){return l!==""}function Dm(l,e){return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(l){return l.replace(y1,S1)}function S1(l,e){const n=ot[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ad(n)}const w1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(l){return l.replace(M1,bg).replace(w1,E1)}function E1(l,e,n,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),bg(l,e,n,r)}function bg(l,e,n,r){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function km(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ws&&(e="SHADOWMAP_TYPE_VSM"),e}function T1(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case sg:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Fx:e="ENVMAP_BLENDING_ADD";break}return e}function R1(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function L1(l,e,n,r){const o=l.getContext(),a=n.defines;let d=n.vertexShader,c=n.fragmentShader;const m=b1(n),h=T1(n),v=C1(n),g=A1(n),x=R1(n),S=n.isWebGL2?"":v1(n),M=x1(a),y=o.createProgram();let _,b,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[M].filter(qo).join(`
`),_.length>0&&(_+=`
`),b=[S,M].filter(qo).join(`
`),b.length>0&&(b+=`
`)):(_=[km(n),"#define SHADER_NAME "+n.shaderName,M,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),b=[S,km(n),"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?ot.tonemapping_pars_fragment:"",n.toneMapping!==Oi?g1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,m1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),d=Ad(d),d=Dm(d,n),d=Im(d,n),c=Ad(c),c=Dm(c,n),c=Im(c,n),d=Nm(d),c=Nm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const k=L+_+d,D=L+b+c,C=Lm(o,35633,k),F=Lm(o,35632,D);if(o.attachShader(y,C),o.attachShader(y,F),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),l.debug.checkShaderErrors){const z=o.getProgramInfoLog(y).trim(),Y=o.getShaderInfoLog(C).trim(),K=o.getShaderInfoLog(F).trim();let ne=!0,ae=!0;if(o.getProgramParameter(y,35714)===!1){ne=!1;const G=Pm(o,C,"vertex"),ie=Pm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+z+`
`+G+`
`+ie)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||K==="")&&(ae=!1);ae&&(this.diagnostics={runnable:ne,programLog:z,vertexShader:{log:Y,prefix:_},fragmentShader:{log:K,prefix:b}})}o.deleteShader(C),o.deleteShader(F);let j;this.getUniforms=function(){return j===void 0&&(j=new Gl(o,y)),j};let E;return this.getAttributes=function(){return E===void 0&&(E=_1(o,y)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=F,this}let P1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(a)===!1&&(d.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const r=new I1(e);n.set(e,r)}return n.get(e)}}class I1{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}}function N1(l,e,n,r,o,a,d){const c=new pg,m=new D1,h=[],v=o.isWebGL2,g=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E,z,Y,K,ne){const ae=K.fog,G=ne.geometry,ie=E.isMeshStandardMaterial?K.environment:null,ee=(E.isMeshStandardMaterial?n:e).get(E.envMap||ie),se=ee&&ee.mapping===Xl?ee.image.height:null,B=M[E.type];E.precision!==null&&(S=o.getMaxPrecision(E.precision),S!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",S,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,H=W!==void 0?W.length:0;let T=0;G.morphAttributes.position!==void 0&&(T=1),G.morphAttributes.normal!==void 0&&(T=2),G.morphAttributes.color!==void 0&&(T=3);let O,X,de,me;if(B){const qe=xi[B];O=qe.vertexShader,X=qe.fragmentShader}else O=E.vertexShader,X=E.fragmentShader,m.update(E),de=m.getVertexShaderID(E),me=m.getFragmentShaderID(E);const q=l.getRenderTarget(),xe=E.alphaTest>0,_e=E.clearcoat>0,Se=E.iridescence>0;return{isWebGL2:v,shaderID:B,shaderName:E.type,vertexShader:O,fragmentShader:X,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:S,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:x,outputEncoding:q===null?l.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:es,map:!!E.map,matcap:!!E.matcap,envMap:!!ee,envMapMode:ee&&ee.mapping,envMapCubeUVHeight:se,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===a_,tangentSpaceNormalMap:E.normalMapType===o_,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===Ft,clearcoat:_e,clearcoatMap:_e&&!!E.clearcoatMap,clearcoatRoughnessMap:_e&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!E.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!E.iridescenceMap,iridescenceThicknessMap:Se&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===qs,alphaMap:!!E.alphaMap,alphaTest:xe,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!G.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!ae,useFog:E.fog===!0,fogExp2:ae&&ae.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ne.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:T,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:l.shadowMap.enabled&&Y.length>0,shadowMapType:l.shadowMap.type,toneMapping:E.toneMapped?l.toneMapping:Oi,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ks,flipSided:E.side===ui,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function _(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)z.push(Y),z.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(b(z,E),L(z,E),z.push(l.outputEncoding)),z.push(E.customProgramCacheKey),z.join()}function b(E,z){E.push(z.precision),E.push(z.outputEncoding),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.combine),E.push(z.vertexUvs),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function L(E,z){c.disableAll(),z.isWebGL2&&c.enable(0),z.supportsVertexTextures&&c.enable(1),z.instancing&&c.enable(2),z.instancingColor&&c.enable(3),z.map&&c.enable(4),z.matcap&&c.enable(5),z.envMap&&c.enable(6),z.lightMap&&c.enable(7),z.aoMap&&c.enable(8),z.emissiveMap&&c.enable(9),z.bumpMap&&c.enable(10),z.normalMap&&c.enable(11),z.objectSpaceNormalMap&&c.enable(12),z.tangentSpaceNormalMap&&c.enable(13),z.clearcoat&&c.enable(14),z.clearcoatMap&&c.enable(15),z.clearcoatRoughnessMap&&c.enable(16),z.clearcoatNormalMap&&c.enable(17),z.iridescence&&c.enable(18),z.iridescenceMap&&c.enable(19),z.iridescenceThicknessMap&&c.enable(20),z.displacementMap&&c.enable(21),z.specularMap&&c.enable(22),z.roughnessMap&&c.enable(23),z.metalnessMap&&c.enable(24),z.gradientMap&&c.enable(25),z.alphaMap&&c.enable(26),z.alphaTest&&c.enable(27),z.vertexColors&&c.enable(28),z.vertexAlphas&&c.enable(29),z.vertexUvs&&c.enable(30),z.vertexTangents&&c.enable(31),z.uvsVertexOnly&&c.enable(32),z.fog&&c.enable(33),E.push(c.mask),c.disableAll(),z.useFog&&c.enable(0),z.flatShading&&c.enable(1),z.logarithmicDepthBuffer&&c.enable(2),z.skinning&&c.enable(3),z.morphTargets&&c.enable(4),z.morphNormals&&c.enable(5),z.morphColors&&c.enable(6),z.premultipliedAlpha&&c.enable(7),z.shadowMapEnabled&&c.enable(8),z.physicallyCorrectLights&&c.enable(9),z.doubleSided&&c.enable(10),z.flipSided&&c.enable(11),z.useDepthPacking&&c.enable(12),z.dithering&&c.enable(13),z.specularIntensityMap&&c.enable(14),z.specularColorMap&&c.enable(15),z.transmission&&c.enable(16),z.transmissionMap&&c.enable(17),z.thicknessMap&&c.enable(18),z.sheen&&c.enable(19),z.sheenColorMap&&c.enable(20),z.sheenRoughnessMap&&c.enable(21),z.decodeVideoTexture&&c.enable(22),z.opaque&&c.enable(23),E.push(c.mask)}function k(E){const z=M[E.type];let Y;if(z){const K=xi[z];Y=jl.clone(K.uniforms)}else Y=E.uniforms;return Y}function D(E,z){let Y;for(let K=0,ne=h.length;K<ne;K++){const ae=h[K];if(ae.cacheKey===z){Y=ae,++Y.usedTimes;break}}return Y===void 0&&(Y=new L1(l,z,E,a),h.push(Y)),Y}function C(E){if(--E.usedTimes===0){const z=h.indexOf(E);h[z]=h[h.length-1],h.pop(),E.destroy()}}function F(E){m.remove(E)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:k,acquireProgram:D,releaseProgram:C,releaseShaderCache:F,programs:h,dispose:j}}function k1(){let l=new WeakMap;function e(a){let d=l.get(a);return d===void 0&&(d={},l.set(a,d)),d}function n(a){l.delete(a)}function r(a,d,c){l.get(a)[d]=c}function o(){l=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function F1(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function Fm(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function zm(){const l=[];let e=0;const n=[],r=[],o=[];function a(){e=0,n.length=0,r.length=0,o.length=0}function d(g,x,S,M,y,_){let b=l[e];return b===void 0?(b={id:g.id,object:g,geometry:x,material:S,groupOrder:M,renderOrder:g.renderOrder,z:y,group:_},l[e]=b):(b.id=g.id,b.object=g,b.geometry=x,b.material=S,b.groupOrder=M,b.renderOrder=g.renderOrder,b.z=y,b.group=_),e++,b}function c(g,x,S,M,y,_){const b=d(g,x,S,M,y,_);S.transmission>0?r.push(b):S.transparent===!0?o.push(b):n.push(b)}function m(g,x,S,M,y,_){const b=d(g,x,S,M,y,_);S.transmission>0?r.unshift(b):S.transparent===!0?o.unshift(b):n.unshift(b)}function h(g,x){n.length>1&&n.sort(g||F1),r.length>1&&r.sort(x||Fm),o.length>1&&o.sort(x||Fm)}function v(){for(let g=e,x=l.length;g<x;g++){const S=l[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:a,push:c,unshift:m,finish:v,sort:h}}function z1(){let l=new WeakMap;function e(r,o){let a;return l.has(r)===!1?(a=new zm,l.set(r,[a])):o>=l.get(r).length?(a=new zm,l.get(r).push(a)):a=l.get(r)[o],a}function n(){l=new WeakMap}return{get:e,dispose:n}}function O1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new vt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return l[e.id]=n,n}}}function U1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=n,n}}}let B1=0;function G1(l,e){return(e.castShadow?1:0)-(l.castShadow?1:0)}function V1(l,e){const n=new O1,r=U1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let v=0;v<9;v++)o.probe.push(new Q);const a=new Q,d=new Kt,c=new Kt;function m(v,g){let x=0,S=0,M=0;for(let z=0;z<9;z++)o.probe[z].set(0,0,0);let y=0,_=0,b=0,L=0,k=0,D=0,C=0,F=0;v.sort(G1);const j=g!==!0?Math.PI:1;for(let z=0,Y=v.length;z<Y;z++){const K=v[z],ne=K.color,ae=K.intensity,G=K.distance,ie=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)x+=ne.r*ae*j,S+=ne.g*ae*j,M+=ne.b*ae*j;else if(K.isLightProbe)for(let ee=0;ee<9;ee++)o.probe[ee].addScaledVector(K.sh.coefficients[ee],ae);else if(K.isDirectionalLight){const ee=n.get(K);if(ee.color.copy(K.color).multiplyScalar(K.intensity*j),K.castShadow){const se=K.shadow,B=r.get(K);B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,o.directionalShadow[y]=B,o.directionalShadowMap[y]=ie,o.directionalShadowMatrix[y]=K.shadow.matrix,D++}o.directional[y]=ee,y++}else if(K.isSpotLight){const ee=n.get(K);if(ee.position.setFromMatrixPosition(K.matrixWorld),ee.color.copy(ne).multiplyScalar(ae*j),ee.distance=G,ee.coneCos=Math.cos(K.angle),ee.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ee.decay=K.decay,K.castShadow){const se=K.shadow,B=r.get(K);B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,o.spotShadow[b]=B,o.spotShadowMap[b]=ie,o.spotShadowMatrix[b]=K.shadow.matrix,F++}o.spot[b]=ee,b++}else if(K.isRectAreaLight){const ee=n.get(K);ee.color.copy(ne).multiplyScalar(ae),ee.halfWidth.set(K.width*.5,0,0),ee.halfHeight.set(0,K.height*.5,0),o.rectArea[L]=ee,L++}else if(K.isPointLight){const ee=n.get(K);if(ee.color.copy(K.color).multiplyScalar(K.intensity*j),ee.distance=K.distance,ee.decay=K.decay,K.castShadow){const se=K.shadow,B=r.get(K);B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,B.shadowCameraNear=se.camera.near,B.shadowCameraFar=se.camera.far,o.pointShadow[_]=B,o.pointShadowMap[_]=ie,o.pointShadowMatrix[_]=K.shadow.matrix,C++}o.point[_]=ee,_++}else if(K.isHemisphereLight){const ee=n.get(K);ee.skyColor.copy(K.color).multiplyScalar(ae*j),ee.groundColor.copy(K.groundColor).multiplyScalar(ae*j),o.hemi[k]=ee,k++}}L>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_FLOAT_1,o.rectAreaLTC2=Ce.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_HALF_1,o.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=x,o.ambient[1]=S,o.ambient[2]=M;const E=o.hash;(E.directionalLength!==y||E.pointLength!==_||E.spotLength!==b||E.rectAreaLength!==L||E.hemiLength!==k||E.numDirectionalShadows!==D||E.numPointShadows!==C||E.numSpotShadows!==F)&&(o.directional.length=y,o.spot.length=b,o.rectArea.length=L,o.point.length=_,o.hemi.length=k,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=C,o.pointShadowMap.length=C,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=C,o.spotShadowMatrix.length=F,E.directionalLength=y,E.pointLength=_,E.spotLength=b,E.rectAreaLength=L,E.hemiLength=k,E.numDirectionalShadows=D,E.numPointShadows=C,E.numSpotShadows=F,o.version=B1++)}function h(v,g){let x=0,S=0,M=0,y=0,_=0;const b=g.matrixWorldInverse;for(let L=0,k=v.length;L<k;L++){const D=v[L];if(D.isDirectionalLight){const C=o.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(b),x++}else if(D.isSpotLight){const C=o.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(b),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(b),M++}else if(D.isRectAreaLight){const C=o.rectArea[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(b),c.identity(),d.copy(D.matrixWorld),d.premultiply(b),c.extractRotation(d),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),y++}else if(D.isPointLight){const C=o.point[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(b),S++}else if(D.isHemisphereLight){const C=o.hemi[_];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(b),_++}}}return{setup:m,setupView:h,state:o}}function Om(l,e){const n=new V1(l,e),r=[],o=[];function a(){r.length=0,o.length=0}function d(g){r.push(g)}function c(g){o.push(g)}function m(g){n.setup(r,g)}function h(g){n.setupView(r,g)}return{init:a,state:{lightsArray:r,shadowsArray:o,lights:n},setupLights:m,setupLightsView:h,pushLight:d,pushShadow:c}}function W1(l,e){let n=new WeakMap;function r(a,d=0){let c;return n.has(a)===!1?(c=new Om(l,e),n.set(a,[c])):d>=n.get(a).length?(c=new Om(l,e),n.get(a).push(c)):c=n.get(a)[d],c}function o(){n=new WeakMap}return{get:r,dispose:o}}class H1 extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $1(l,e,n){let r=new _g;const o=new tt,a=new tt,d=new Yt,c=new H1({depthPacking:s_}),m=new j1,h={},v=n.maxTextureSize,g={0:ui,1:Zo,2:Ks},x=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:q1,fragmentShader:X1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new $n;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zi(M,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng,this.render=function(D,C,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const j=l.getRenderTarget(),E=l.getActiveCubeFace(),z=l.getActiveMipmapLevel(),Y=l.state;Y.setBlending(_r),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let K=0,ne=D.length;K<ne;K++){const ae=D[K],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ie=G.getFrameExtents();if(o.multiply(ie),a.copy(G.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/ie.x),o.x=a.x*ie.x,G.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/ie.y),o.y=a.y*ie.y,G.mapSize.y=a.y)),G.map===null){const se=this.type!==Ws?{minFilter:un,magFilter:un}:{};G.map=new ci(o.x,o.y,se),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}l.setRenderTarget(G.map),l.clear();const ee=G.getViewportCount();for(let se=0;se<ee;se++){const B=G.getViewport(se);d.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),Y.viewport(d),G.updateMatrices(ae,se),r=G.getFrustum(),k(C,F,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===Ws&&b(G,F),G.needsUpdate=!1}_.needsUpdate=!1,l.setRenderTarget(j,E,z)};function b(D,C){const F=e.update(y);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ci(o.x,o.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,l.setRenderTarget(D.mapPass),l.clear(),l.renderBufferDirect(C,null,F,x,y,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,l.setRenderTarget(D.map),l.clear(),l.renderBufferDirect(C,null,F,S,y,null)}function L(D,C,F,j,E,z){let Y=null;const K=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(K!==void 0?Y=K:Y=F.isPointLight===!0?m:c,l.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const ne=Y.uuid,ae=C.uuid;let G=h[ne];G===void 0&&(G={},h[ne]=G);let ie=G[ae];ie===void 0&&(ie=Y.clone(),G[ae]=ie),Y=ie}return Y.visible=C.visible,Y.wireframe=C.wireframe,z===Ws?Y.side=C.shadowSide!==null?C.shadowSide:C.side:Y.side=C.shadowSide!==null?C.shadowSide:g[C.side],Y.alphaMap=C.alphaMap,Y.alphaTest=C.alphaTest,Y.clipShadows=C.clipShadows,Y.clippingPlanes=C.clippingPlanes,Y.clipIntersection=C.clipIntersection,Y.displacementMap=C.displacementMap,Y.displacementScale=C.displacementScale,Y.displacementBias=C.displacementBias,Y.wireframeLinewidth=C.wireframeLinewidth,Y.linewidth=C.linewidth,F.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(F.matrixWorld),Y.nearDistance=j,Y.farDistance=E),Y}function k(D,C,F,j,E){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Ws)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const K=e.update(D),ne=D.material;if(Array.isArray(ne)){const ae=K.groups;for(let G=0,ie=ae.length;G<ie;G++){const ee=ae[G],se=ne[ee.materialIndex];if(se&&se.visible){const B=L(D,se,j,F.near,F.far,E);l.renderBufferDirect(F,null,K,B,D,ee)}}}else if(ne.visible){const ae=L(D,ne,j,F.near,F.far,E);l.renderBufferDirect(F,null,K,ae,D,null)}}const Y=D.children;for(let K=0,ne=Y.length;K<ne;K++)k(Y[K],C,F,j,E)}}function Y1(l,e,n){const r=n.isWebGL2;function o(){let $=!1;const Le=new Yt;let he=null;const Re=new Yt(0,0,0,0);return{setMask:function(Te){he!==Te&&!$&&(l.colorMask(Te,Te,Te,Te),he=Te)},setLocked:function(Te){$=Te},setClear:function(Te,it,zt,At,Yn){Yn===!0&&(Te*=At,it*=At,zt*=At),Le.set(Te,it,zt,At),Re.equals(Le)===!1&&(l.clearColor(Te,it,zt,At),Re.copy(Le))},reset:function(){$=!1,he=null,Re.set(-1,0,0,0)}}}function a(){let $=!1,Le=null,he=null,Re=null;return{setTest:function(Te){Te?xe(2929):_e(2929)},setMask:function(Te){Le!==Te&&!$&&(l.depthMask(Te),Le=Te)},setFunc:function(Te){if(he!==Te){if(Te)switch(Te){case Ax:l.depthFunc(512);break;case Rx:l.depthFunc(519);break;case Lx:l.depthFunc(513);break;case Sd:l.depthFunc(515);break;case Px:l.depthFunc(514);break;case Dx:l.depthFunc(518);break;case Ix:l.depthFunc(516);break;case Nx:l.depthFunc(517);break;default:l.depthFunc(515)}else l.depthFunc(515);he=Te}},setLocked:function(Te){$=Te},setClear:function(Te){Re!==Te&&(l.clearDepth(Te),Re=Te)},reset:function(){$=!1,Le=null,he=null,Re=null}}}function d(){let $=!1,Le=null,he=null,Re=null,Te=null,it=null,zt=null,At=null,Yn=null;return{setTest:function(Et){$||(Et?xe(2960):_e(2960))},setMask:function(Et){Le!==Et&&!$&&(l.stencilMask(Et),Le=Et)},setFunc:function(Et,Nn,tn){(he!==Et||Re!==Nn||Te!==tn)&&(l.stencilFunc(Et,Nn,tn),he=Et,Re=Nn,Te=tn)},setOp:function(Et,Nn,tn){(it!==Et||zt!==Nn||At!==tn)&&(l.stencilOp(Et,Nn,tn),it=Et,zt=Nn,At=tn)},setLocked:function(Et){$=Et},setClear:function(Et){Yn!==Et&&(l.clearStencil(Et),Yn=Et)},reset:function(){$=!1,Le=null,he=null,Re=null,Te=null,it=null,zt=null,At=null,Yn=null}}}const c=new o,m=new a,h=new d,v=new WeakMap,g=new WeakMap;let x={},S={},M=new WeakMap,y=[],_=null,b=!1,L=null,k=null,D=null,C=null,F=null,j=null,E=null,z=!1,Y=null,K=null,ne=null,ae=null,G=null;const ie=l.getParameter(35661);let ee=!1,se=0;const B=l.getParameter(7938);B.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(B)[1]),ee=se>=1):B.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ee=se>=2);let W=null,H={};const T=l.getParameter(3088),O=l.getParameter(2978),X=new Yt().fromArray(T),de=new Yt().fromArray(O);function me($,Le,he){const Re=new Uint8Array(4),Te=l.createTexture();l.bindTexture($,Te),l.texParameteri($,10241,9728),l.texParameteri($,10240,9728);for(let it=0;it<he;it++)l.texImage2D(Le+it,0,6408,1,1,0,6408,5121,Re);return Te}const q={};q[3553]=me(3553,3553,1),q[34067]=me(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),h.setClear(0),xe(2929),m.setFunc(Sd),Ve(!1),Ye(Ap),xe(2884),dt(_r);function xe($){x[$]!==!0&&(l.enable($),x[$]=!0)}function _e($){x[$]!==!1&&(l.disable($),x[$]=!1)}function Se($,Le){return S[$]!==Le?(l.bindFramebuffer($,Le),S[$]=Le,r&&($===36009&&(S[36160]=Le),$===36160&&(S[36009]=Le)),!0):!1}function ye($,Le){let he=y,Re=!1;if($)if(he=M.get(Le),he===void 0&&(he=[],M.set(Le,he)),$.isWebGLMultipleRenderTargets){const Te=$.texture;if(he.length!==Te.length||he[0]!==36064){for(let it=0,zt=Te.length;it<zt;it++)he[it]=36064+it;he.length=Te.length,Re=!0}}else he[0]!==36064&&(he[0]=36064,Re=!0);else he[0]!==1029&&(he[0]=1029,Re=!0);Re&&(n.isWebGL2?l.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function qe($){return _!==$?(l.useProgram($),_=$,!0):!1}const Ge={[Bs]:32774,[vx]:32778,[xx]:32779};if(r)Ge[Pp]=32775,Ge[Dp]=32776;else{const $=e.get("EXT_blend_minmax");$!==null&&(Ge[Pp]=$.MIN_EXT,Ge[Dp]=$.MAX_EXT)}const De={[_x]:0,[yx]:1,[Sx]:768,[ig]:770,[Cx]:776,[bx]:774,[Mx]:772,[wx]:769,[rg]:771,[Tx]:775,[Ex]:773};function dt($,Le,he,Re,Te,it,zt,At){if($===_r){b===!0&&(_e(3042),b=!1);return}if(b===!1&&(xe(3042),b=!0),$!==gx){if($!==L||At!==z){if((k!==Bs||F!==Bs)&&(l.blendEquation(32774),k=Bs,F=Bs),At)switch($){case qs:l.blendFuncSeparate(1,771,1,771);break;case Qo:l.blendFunc(1,1);break;case Rp:l.blendFuncSeparate(0,769,0,1);break;case Lp:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case qs:l.blendFuncSeparate(770,771,1,771);break;case Qo:l.blendFunc(770,1);break;case Rp:l.blendFuncSeparate(0,769,0,1);break;case Lp:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}D=null,C=null,j=null,E=null,L=$,z=At}return}Te=Te||Le,it=it||he,zt=zt||Re,(Le!==k||Te!==F)&&(l.blendEquationSeparate(Ge[Le],Ge[Te]),k=Le,F=Te),(he!==D||Re!==C||it!==j||zt!==E)&&(l.blendFuncSeparate(De[he],De[Re],De[it],De[zt]),D=he,C=Re,j=it,E=zt),L=$,z=null}function Be($,Le){$.side===Ks?_e(2884):xe(2884);let he=$.side===ui;Le&&(he=!he),Ve(he),$.blending===qs&&$.transparent===!1?dt(_r):dt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),m.setFunc($.depthFunc),m.setTest($.depthTest),m.setMask($.depthWrite),c.setMask($.colorWrite);const Re=$.stencilWrite;h.setTest(Re),Re&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),st($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(32926):_e(32926)}function Ve($){Y!==$&&($?l.frontFace(2304):l.frontFace(2305),Y=$)}function Ye($){$!==fx?(xe(2884),$!==K&&($===Ap?l.cullFace(1029):$===hx?l.cullFace(1028):l.cullFace(1032))):_e(2884),K=$}function nt($){$!==ne&&(ee&&l.lineWidth($),ne=$)}function st($,Le,he){$?(xe(32823),(ae!==Le||G!==he)&&(l.polygonOffset(Le,he),ae=Le,G=he)):_e(32823)}function _t($){$?xe(3089):_e(3089)}function lt($){$===void 0&&($=33984+ie-1),W!==$&&(l.activeTexture($),W=$)}function I($,Le){W===null&&lt();let he=H[W];he===void 0&&(he={type:void 0,texture:void 0},H[W]=he),(he.type!==$||he.texture!==Le)&&(l.bindTexture($,Le||q[$]),he.type=$,he.texture=Le)}function R(){const $=H[W];$!==void 0&&$.type!==void 0&&(l.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function fe(){try{l.compressedTexImage2D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{l.texSubImage2D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{l.texSubImage3D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ae(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{l.texStorage2D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ce(){try{l.texStorage3D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ue(){try{l.texImage2D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ie(){try{l.texImage3D.apply(l,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function We($){X.equals($)===!1&&(l.scissor($.x,$.y,$.z,$.w),X.copy($))}function ke($){de.equals($)===!1&&(l.viewport($.x,$.y,$.z,$.w),de.copy($))}function Qe($,Le){let he=g.get(Le);he===void 0&&(he=new WeakMap,g.set(Le,he));let Re=he.get($);Re===void 0&&(Re=l.getUniformBlockIndex(Le,$.name),he.set($,Re))}function ft($,Le){const Re=g.get(Le).get($);v.get($)!==Re&&(l.uniformBlockBinding(Le,Re,$.__bindingPointIndex),v.set($,Re))}function Mt(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),r===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),x={},W=null,H={},S={},M=new WeakMap,y=[],_=null,b=!1,L=null,k=null,D=null,C=null,F=null,j=null,E=null,z=!1,Y=null,K=null,ne=null,ae=null,G=null,X.set(0,0,l.canvas.width,l.canvas.height),de.set(0,0,l.canvas.width,l.canvas.height),c.reset(),m.reset(),h.reset()}return{buffers:{color:c,depth:m,stencil:h},enable:xe,disable:_e,bindFramebuffer:Se,drawBuffers:ye,useProgram:qe,setBlending:dt,setMaterial:Be,setFlipSided:Ve,setCullFace:Ye,setLineWidth:nt,setPolygonOffset:st,setScissorTest:_t,activeTexture:lt,bindTexture:I,unbindTexture:R,compressedTexImage2D:fe,texImage2D:Ue,texImage3D:Ie,updateUBOMapping:Qe,uniformBlockBinding:ft,texStorage2D:Xe,texStorage3D:ce,texSubImage2D:Me,texSubImage3D:be,compressedTexSubImage2D:Ae,scissor:We,viewport:ke,reset:Mt}}function K1(l,e,n,r,o,a,d){const c=o.isWebGL2,m=o.maxTextures,h=o.maxCubemapSize,v=o.maxTextureSize,g=o.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let y;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(I,R){return b?new OffscreenCanvas(I,R):Hl("canvas")}function k(I,R,fe,Me){let be=1;if((I.width>Me||I.height>Me)&&(be=Me/Math.max(I.width,I.height)),be<1||R===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Ae=R?Cd:Math.floor,Xe=Ae(be*I.width),ce=Ae(be*I.height);y===void 0&&(y=L(Xe,ce));const Ue=fe?L(Xe,ce):y;return Ue.width=Xe,Ue.height=ce,Ue.getContext("2d").drawImage(I,0,0,Xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Xe+"x"+ce+")."),Ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function D(I){return sm(I.width)&&sm(I.height)}function C(I){return c?!1:I.wrapS!==ai||I.wrapT!==ai||I.minFilter!==un&&I.minFilter!==Wn}function F(I,R){return I.generateMipmaps&&R&&I.minFilter!==un&&I.minFilter!==Wn}function j(I){l.generateMipmap(I)}function E(I,R,fe,Me,be=!1){if(c===!1)return R;if(I!==null){if(l[I]!==void 0)return l[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ae=R;return R===6403&&(fe===5126&&(Ae=33326),fe===5131&&(Ae=33325),fe===5121&&(Ae=33321)),R===33319&&(fe===5126&&(Ae=33328),fe===5131&&(Ae=33327),fe===5121&&(Ae=33323)),R===6408&&(fe===5126&&(Ae=34836),fe===5131&&(Ae=34842),fe===5121&&(Ae=Me===Ft&&be===!1?35907:32856),fe===32819&&(Ae=32854),fe===32820&&(Ae=32855)),(Ae===33325||Ae===33326||Ae===33327||Ae===33328||Ae===34842||Ae===34836)&&e.get("EXT_color_buffer_float"),Ae}function z(I,R,fe){return F(I,fe)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==Wn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function Y(I){return I===un||I===Ip||I===Np?9728:9729}function K(I){const R=I.target;R.removeEventListener("dispose",K),ae(R),R.isVideoTexture&&M.delete(R)}function ne(I){const R=I.target;R.removeEventListener("dispose",ne),ie(R)}function ae(I){const R=r.get(I);if(R.__webglInit===void 0)return;const fe=I.source,Me=_.get(fe);if(Me){const be=Me[R.__cacheKey];be.usedTimes--,be.usedTimes===0&&G(I),Object.keys(Me).length===0&&_.delete(fe)}r.remove(I)}function G(I){const R=r.get(I);l.deleteTexture(R.__webglTexture);const fe=I.source,Me=_.get(fe);delete Me[R.__cacheKey],d.memory.textures--}function ie(I){const R=I.texture,fe=r.get(I),Me=r.get(R);if(Me.__webglTexture!==void 0&&(l.deleteTexture(Me.__webglTexture),d.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let be=0;be<6;be++)l.deleteFramebuffer(fe.__webglFramebuffer[be]),fe.__webglDepthbuffer&&l.deleteRenderbuffer(fe.__webglDepthbuffer[be]);else{if(l.deleteFramebuffer(fe.__webglFramebuffer),fe.__webglDepthbuffer&&l.deleteRenderbuffer(fe.__webglDepthbuffer),fe.__webglMultisampledFramebuffer&&l.deleteFramebuffer(fe.__webglMultisampledFramebuffer),fe.__webglColorRenderbuffer)for(let be=0;be<fe.__webglColorRenderbuffer.length;be++)fe.__webglColorRenderbuffer[be]&&l.deleteRenderbuffer(fe.__webglColorRenderbuffer[be]);fe.__webglDepthRenderbuffer&&l.deleteRenderbuffer(fe.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let be=0,Ae=R.length;be<Ae;be++){const Xe=r.get(R[be]);Xe.__webglTexture&&(l.deleteTexture(Xe.__webglTexture),d.memory.textures--),r.remove(R[be])}r.remove(R),r.remove(I)}let ee=0;function se(){ee=0}function B(){const I=ee;return I>=m&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+m),ee+=1,I}function W(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.encoding),R.join()}function H(I,R){const fe=r.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.version>0&&fe.__version!==I.version){const Me=I.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(fe,I,R);return}}n.activeTexture(33984+R),n.bindTexture(3553,fe.__webglTexture)}function T(I,R){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){_e(fe,I,R);return}n.activeTexture(33984+R),n.bindTexture(35866,fe.__webglTexture)}function O(I,R){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){_e(fe,I,R);return}n.activeTexture(33984+R),n.bindTexture(32879,fe.__webglTexture)}function X(I,R){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){Se(fe,I,R);return}n.activeTexture(33984+R),n.bindTexture(34067,fe.__webglTexture)}const de={[Ed]:10497,[ai]:33071,[bd]:33648},me={[un]:9728,[Ip]:9984,[Np]:9986,[Wn]:9729,[Vx]:9985,[$l]:9987};function q(I,R,fe){if(fe?(l.texParameteri(I,10242,de[R.wrapS]),l.texParameteri(I,10243,de[R.wrapT]),(I===32879||I===35866)&&l.texParameteri(I,32882,de[R.wrapR]),l.texParameteri(I,10240,me[R.magFilter]),l.texParameteri(I,10241,me[R.minFilter])):(l.texParameteri(I,10242,33071),l.texParameteri(I,10243,33071),(I===32879||I===35866)&&l.texParameteri(I,32882,33071),(R.wrapS!==ai||R.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(I,10240,Y(R.magFilter)),l.texParameteri(I,10241,Y(R.minFilter)),R.minFilter!==un&&R.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(R.type===qr&&e.has("OES_texture_float_linear")===!1||c===!1&&R.type===Jo&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(l.texParameterf(I,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function xe(I,R){let fe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",K));const Me=R.source;let be=_.get(Me);be===void 0&&(be={},_.set(Me,be));const Ae=W(R);if(Ae!==I.__cacheKey){be[Ae]===void 0&&(be[Ae]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,fe=!0),be[Ae].usedTimes++;const Xe=be[I.__cacheKey];Xe!==void 0&&(be[I.__cacheKey].usedTimes--,Xe.usedTimes===0&&G(R)),I.__cacheKey=Ae,I.__webglTexture=be[Ae].texture}return fe}function _e(I,R,fe){let Me=3553;R.isDataArrayTexture&&(Me=35866),R.isData3DTexture&&(Me=32879);const be=xe(I,R),Ae=R.source;if(n.activeTexture(33984+fe),n.bindTexture(Me,I.__webglTexture),Ae.version!==Ae.__currentVersion||be===!0){l.pixelStorei(37440,R.flipY),l.pixelStorei(37441,R.premultiplyAlpha),l.pixelStorei(3317,R.unpackAlignment),l.pixelStorei(37443,0);const Xe=C(R)&&D(R.image)===!1;let ce=k(R.image,Xe,!1,v);ce=lt(R,ce);const Ue=D(ce)||c,Ie=a.convert(R.format,R.encoding);let We=a.convert(R.type),ke=E(R.internalFormat,Ie,We,R.encoding,R.isVideoTexture);q(Me,R,Ue);let Qe;const ft=R.mipmaps,Mt=c&&R.isVideoTexture!==!0,$=Ae.__currentVersion===void 0||be===!0,Le=z(R,ce,Ue);if(R.isDepthTexture)ke=6402,c?R.type===qr?ke=36012:R.type===jr?ke=33190:R.type===Xs?ke=35056:ke=33189:R.type===qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===$r&&ke===6402&&R.type!==ag&&R.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=jr,We=a.convert(R.type)),R.format===Js&&ke===6402&&(ke=34041,R.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Xs,We=a.convert(R.type))),$&&(Mt?n.texStorage2D(3553,1,ke,ce.width,ce.height):n.texImage2D(3553,0,ke,ce.width,ce.height,0,Ie,We,null));else if(R.isDataTexture)if(ft.length>0&&Ue){Mt&&$&&n.texStorage2D(3553,Le,ke,ft[0].width,ft[0].height);for(let he=0,Re=ft.length;he<Re;he++)Qe=ft[he],Mt?n.texSubImage2D(3553,he,0,0,Qe.width,Qe.height,Ie,We,Qe.data):n.texImage2D(3553,he,ke,Qe.width,Qe.height,0,Ie,We,Qe.data);R.generateMipmaps=!1}else Mt?($&&n.texStorage2D(3553,Le,ke,ce.width,ce.height),n.texSubImage2D(3553,0,0,0,ce.width,ce.height,Ie,We,ce.data)):n.texImage2D(3553,0,ke,ce.width,ce.height,0,Ie,We,ce.data);else if(R.isCompressedTexture){Mt&&$&&n.texStorage2D(3553,Le,ke,ft[0].width,ft[0].height);for(let he=0,Re=ft.length;he<Re;he++)Qe=ft[he],R.format!==li?Ie!==null?Mt?n.compressedTexSubImage2D(3553,he,0,0,Qe.width,Qe.height,Ie,Qe.data):n.compressedTexImage2D(3553,he,ke,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?n.texSubImage2D(3553,he,0,0,Qe.width,Qe.height,Ie,We,Qe.data):n.texImage2D(3553,he,ke,Qe.width,Qe.height,0,Ie,We,Qe.data)}else if(R.isDataArrayTexture)Mt?($&&n.texStorage3D(35866,Le,ke,ce.width,ce.height,ce.depth),n.texSubImage3D(35866,0,0,0,0,ce.width,ce.height,ce.depth,Ie,We,ce.data)):n.texImage3D(35866,0,ke,ce.width,ce.height,ce.depth,0,Ie,We,ce.data);else if(R.isData3DTexture)Mt?($&&n.texStorage3D(32879,Le,ke,ce.width,ce.height,ce.depth),n.texSubImage3D(32879,0,0,0,0,ce.width,ce.height,ce.depth,Ie,We,ce.data)):n.texImage3D(32879,0,ke,ce.width,ce.height,ce.depth,0,Ie,We,ce.data);else if(R.isFramebufferTexture){if($)if(Mt)n.texStorage2D(3553,Le,ke,ce.width,ce.height);else{let he=ce.width,Re=ce.height;for(let Te=0;Te<Le;Te++)n.texImage2D(3553,Te,ke,he,Re,0,Ie,We,null),he>>=1,Re>>=1}}else if(ft.length>0&&Ue){Mt&&$&&n.texStorage2D(3553,Le,ke,ft[0].width,ft[0].height);for(let he=0,Re=ft.length;he<Re;he++)Qe=ft[he],Mt?n.texSubImage2D(3553,he,0,0,Ie,We,Qe):n.texImage2D(3553,he,ke,Ie,We,Qe);R.generateMipmaps=!1}else Mt?($&&n.texStorage2D(3553,Le,ke,ce.width,ce.height),n.texSubImage2D(3553,0,0,0,Ie,We,ce)):n.texImage2D(3553,0,ke,Ie,We,ce);F(R,Ue)&&j(Me),Ae.__currentVersion=Ae.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Se(I,R,fe){if(R.image.length!==6)return;const Me=xe(I,R),be=R.source;if(n.activeTexture(33984+fe),n.bindTexture(34067,I.__webglTexture),be.version!==be.__currentVersion||Me===!0){l.pixelStorei(37440,R.flipY),l.pixelStorei(37441,R.premultiplyAlpha),l.pixelStorei(3317,R.unpackAlignment),l.pixelStorei(37443,0);const Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,Xe=R.image[0]&&R.image[0].isDataTexture,ce=[];for(let he=0;he<6;he++)!Ae&&!Xe?ce[he]=k(R.image[he],!1,!0,h):ce[he]=Xe?R.image[he].image:R.image[he],ce[he]=lt(R,ce[he]);const Ue=ce[0],Ie=D(Ue)||c,We=a.convert(R.format,R.encoding),ke=a.convert(R.type),Qe=E(R.internalFormat,We,ke,R.encoding),ft=c&&R.isVideoTexture!==!0,Mt=be.__currentVersion===void 0||Me===!0;let $=z(R,Ue,Ie);q(34067,R,Ie);let Le;if(Ae){ft&&Mt&&n.texStorage2D(34067,$,Qe,Ue.width,Ue.height);for(let he=0;he<6;he++){Le=ce[he].mipmaps;for(let Re=0;Re<Le.length;Re++){const Te=Le[Re];R.format!==li?We!==null?ft?n.compressedTexSubImage2D(34069+he,Re,0,0,Te.width,Te.height,We,Te.data):n.compressedTexImage2D(34069+he,Re,Qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?n.texSubImage2D(34069+he,Re,0,0,Te.width,Te.height,We,ke,Te.data):n.texImage2D(34069+he,Re,Qe,Te.width,Te.height,0,We,ke,Te.data)}}}else{Le=R.mipmaps,ft&&Mt&&(Le.length>0&&$++,n.texStorage2D(34067,$,Qe,ce[0].width,ce[0].height));for(let he=0;he<6;he++)if(Xe){ft?n.texSubImage2D(34069+he,0,0,0,ce[he].width,ce[he].height,We,ke,ce[he].data):n.texImage2D(34069+he,0,Qe,ce[he].width,ce[he].height,0,We,ke,ce[he].data);for(let Re=0;Re<Le.length;Re++){const it=Le[Re].image[he].image;ft?n.texSubImage2D(34069+he,Re+1,0,0,it.width,it.height,We,ke,it.data):n.texImage2D(34069+he,Re+1,Qe,it.width,it.height,0,We,ke,it.data)}}else{ft?n.texSubImage2D(34069+he,0,0,0,We,ke,ce[he]):n.texImage2D(34069+he,0,Qe,We,ke,ce[he]);for(let Re=0;Re<Le.length;Re++){const Te=Le[Re];ft?n.texSubImage2D(34069+he,Re+1,0,0,We,ke,Te.image[he]):n.texImage2D(34069+he,Re+1,Qe,We,ke,Te.image[he])}}}F(R,Ie)&&j(34067),be.__currentVersion=be.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ye(I,R,fe,Me,be){const Ae=a.convert(fe.format,fe.encoding),Xe=a.convert(fe.type),ce=E(fe.internalFormat,Ae,Xe,fe.encoding);r.get(R).__hasExternalTextures||(be===32879||be===35866?n.texImage3D(be,0,ce,R.width,R.height,R.depth,0,Ae,Xe,null):n.texImage2D(be,0,ce,R.width,R.height,0,Ae,Xe,null)),n.bindFramebuffer(36160,I),st(R)?x.framebufferTexture2DMultisampleEXT(36160,Me,be,r.get(fe).__webglTexture,0,nt(R)):l.framebufferTexture2D(36160,Me,be,r.get(fe).__webglTexture,0),n.bindFramebuffer(36160,null)}function qe(I,R,fe){if(l.bindRenderbuffer(36161,I),R.depthBuffer&&!R.stencilBuffer){let Me=33189;if(fe||st(R)){const be=R.depthTexture;be&&be.isDepthTexture&&(be.type===qr?Me=36012:be.type===jr&&(Me=33190));const Ae=nt(R);st(R)?x.renderbufferStorageMultisampleEXT(36161,Ae,Me,R.width,R.height):l.renderbufferStorageMultisample(36161,Ae,Me,R.width,R.height)}else l.renderbufferStorage(36161,Me,R.width,R.height);l.framebufferRenderbuffer(36160,36096,36161,I)}else if(R.depthBuffer&&R.stencilBuffer){const Me=nt(R);fe&&st(R)===!1?l.renderbufferStorageMultisample(36161,Me,35056,R.width,R.height):st(R)?x.renderbufferStorageMultisampleEXT(36161,Me,35056,R.width,R.height):l.renderbufferStorage(36161,34041,R.width,R.height),l.framebufferRenderbuffer(36160,33306,36161,I)}else{const Me=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let be=0;be<Me.length;be++){const Ae=Me[be],Xe=a.convert(Ae.format,Ae.encoding),ce=a.convert(Ae.type),Ue=E(Ae.internalFormat,Xe,ce,Ae.encoding),Ie=nt(R);fe&&st(R)===!1?l.renderbufferStorageMultisample(36161,Ie,Ue,R.width,R.height):st(R)?x.renderbufferStorageMultisampleEXT(36161,Ie,Ue,R.width,R.height):l.renderbufferStorage(36161,Ue,R.width,R.height)}}l.bindRenderbuffer(36161,null)}function Ge(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const Me=r.get(R.depthTexture).__webglTexture,be=nt(R);if(R.depthTexture.format===$r)st(R)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,Me,0,be):l.framebufferTexture2D(36160,36096,3553,Me,0);else if(R.depthTexture.format===Js)st(R)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,Me,0,be):l.framebufferTexture2D(36160,33306,3553,Me,0);else throw new Error("Unknown depthTexture format")}function De(I){const R=r.get(I),fe=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");Ge(R.__webglFramebuffer,I)}else if(fe){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(36160,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]=l.createRenderbuffer(),qe(R.__webglDepthbuffer[Me],I,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=l.createRenderbuffer(),qe(R.__webglDepthbuffer,I,!1);n.bindFramebuffer(36160,null)}function dt(I,R,fe){const Me=r.get(I);R!==void 0&&ye(Me.__webglFramebuffer,I,I.texture,36064,3553),fe!==void 0&&De(I)}function Be(I){const R=I.texture,fe=r.get(I),Me=r.get(R);I.addEventListener("dispose",ne),I.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=l.createTexture()),Me.__version=R.version,d.memory.textures++);const be=I.isWebGLCubeRenderTarget===!0,Ae=I.isWebGLMultipleRenderTargets===!0,Xe=D(I)||c;if(be){fe.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)fe.__webglFramebuffer[ce]=l.createFramebuffer()}else{if(fe.__webglFramebuffer=l.createFramebuffer(),Ae)if(o.drawBuffers){const ce=I.texture;for(let Ue=0,Ie=ce.length;Ue<Ie;Ue++){const We=r.get(ce[Ue]);We.__webglTexture===void 0&&(We.__webglTexture=l.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&I.samples>0&&st(I)===!1){const ce=Ae?R:[R];fe.__webglMultisampledFramebuffer=l.createFramebuffer(),fe.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ce.length;Ue++){const Ie=ce[Ue];fe.__webglColorRenderbuffer[Ue]=l.createRenderbuffer(),l.bindRenderbuffer(36161,fe.__webglColorRenderbuffer[Ue]);const We=a.convert(Ie.format,Ie.encoding),ke=a.convert(Ie.type),Qe=E(Ie.internalFormat,We,ke,Ie.encoding),ft=nt(I);l.renderbufferStorageMultisample(36161,ft,Qe,I.width,I.height),l.framebufferRenderbuffer(36160,36064+Ue,36161,fe.__webglColorRenderbuffer[Ue])}l.bindRenderbuffer(36161,null),I.depthBuffer&&(fe.__webglDepthRenderbuffer=l.createRenderbuffer(),qe(fe.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(36160,null)}}if(be){n.bindTexture(34067,Me.__webglTexture),q(34067,R,Xe);for(let ce=0;ce<6;ce++)ye(fe.__webglFramebuffer[ce],I,R,36064,34069+ce);F(R,Xe)&&j(34067),n.unbindTexture()}else if(Ae){const ce=I.texture;for(let Ue=0,Ie=ce.length;Ue<Ie;Ue++){const We=ce[Ue],ke=r.get(We);n.bindTexture(3553,ke.__webglTexture),q(3553,We,Xe),ye(fe.__webglFramebuffer,I,We,36064+Ue,3553),F(We,Xe)&&j(3553)}n.unbindTexture()}else{let ce=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(c?ce=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,Me.__webglTexture),q(ce,R,Xe),ye(fe.__webglFramebuffer,I,R,36064,ce),F(R,Xe)&&j(ce),n.unbindTexture()}I.depthBuffer&&De(I)}function Ve(I){const R=D(I)||c,fe=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Me=0,be=fe.length;Me<be;Me++){const Ae=fe[Me];if(F(Ae,R)){const Xe=I.isWebGLCubeRenderTarget?34067:3553,ce=r.get(Ae).__webglTexture;n.bindTexture(Xe,ce),j(Xe),n.unbindTexture()}}}function Ye(I){if(c&&I.samples>0&&st(I)===!1){const R=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],fe=I.width,Me=I.height;let be=16384;const Ae=[],Xe=I.stencilBuffer?33306:36096,ce=r.get(I),Ue=I.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Ie=0;Ie<R.length;Ie++)n.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ie,36161,null),n.bindFramebuffer(36160,ce.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ie,3553,null,0);n.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,ce.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){Ae.push(36064+Ie),I.depthBuffer&&Ae.push(Xe);const We=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(We===!1&&(I.depthBuffer&&(be|=256),I.stencilBuffer&&(be|=1024)),Ue&&l.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[Ie]),We===!0&&(l.invalidateFramebuffer(36008,[Xe]),l.invalidateFramebuffer(36009,[Xe])),Ue){const ke=r.get(R[Ie]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,ke,0)}l.blitFramebuffer(0,0,fe,Me,0,0,fe,Me,be,9728),S&&l.invalidateFramebuffer(36008,Ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ue)for(let Ie=0;Ie<R.length;Ie++){n.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ie,36161,ce.__webglColorRenderbuffer[Ie]);const We=r.get(R[Ie]).__webglTexture;n.bindFramebuffer(36160,ce.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ie,3553,We,0)}n.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function nt(I){return Math.min(g,I.samples)}function st(I){const R=r.get(I);return c&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function _t(I){const R=d.render.frame;M.get(I)!==R&&(M.set(I,R),I.update())}function lt(I,R){const fe=I.encoding,Me=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Td||fe!==es&&(fe===Ft?c===!1?e.has("EXT_sRGB")===!0&&Me===li?(I.format=Td,I.minFilter=Wn,I.generateMipmaps=!1):R=cg.sRGBToLinear(R):(Me!==li||be!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",fe)),R}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=H,this.setTexture2DArray=T,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=dt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=st}function Z1(l,e,n){const r=n.isWebGL2;function o(a,d=null){let c;if(a===Jr)return 5121;if(a===qx)return 32819;if(a===Xx)return 32820;if(a===Wx)return 5120;if(a===Hx)return 5122;if(a===ag)return 5123;if(a===jx)return 5124;if(a===jr)return 5125;if(a===qr)return 5126;if(a===Jo)return r?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===$x)return 6406;if(a===li)return 6408;if(a===Kx)return 6409;if(a===Zx)return 6410;if(a===$r)return 6402;if(a===Js)return 34041;if(a===Qx)return 6403;if(a===Yx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Td)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Jx)return 36244;if(a===e_)return 33319;if(a===t_)return 33320;if(a===n_)return 36249;if(a===Uc||a===Bc||a===Gc||a===Vc)if(d===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===kp||a===Fp||a===zp||a===Op)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===kp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===i_)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Up||a===Bp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Up)return d===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Bp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Gp||a===Vp||a===Wp||a===Hp||a===jp||a===qp||a===Xp||a===$p||a===Yp||a===Kp||a===Zp||a===Qp||a===Jp||a===em)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Gp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Wp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$p)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Kp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Qp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jp)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===em)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===tm)return d===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Xs?r?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):l[a]!==void 0?l[a]:null}return{convert:o}}class Q1 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xo extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,a=null,d=null;const c=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const y of e.hand.values()){const _=n.getJointPose(y,r);if(h.joints[y.jointName]===void 0){const L=new Xo;L.matrixAutoUpdate=!1,L.visible=!1,h.joints[y.jointName]=L,h.add(L)}const b=h.joints[y.jointName];_!==null&&(b.matrix.fromArray(_.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=_.radius),b.visible=_!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&x>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(m.matrix.fromArray(a.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),a.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(a.linearVelocity)):m.hasLinearVelocity=!1,a.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(a.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return c!==null&&(c.visible=o!==null),m!==null&&(m.visible=a!==null),h!==null&&(h.visible=d!==null),this}}class eM extends qn{constructor(e,n,r,o,a,d,c,m,h,v){if(v=v!==void 0?v:$r,v!==$r&&v!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===$r&&(r=jr),r===void 0&&v===Js&&(r=Xs),super(null,o,a,d,c,m,v,r,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:un,this.minFilter=m!==void 0?m:un,this.flipY=!1,this.generateMipmaps=!1}}class tM extends to{constructor(e,n){super();const r=this;let o=null,a=1,d=null,c="local-floor",m=null,h=null,v=null,g=null,x=null,S=null;const M=n.getContextAttributes();let y=null,_=null;const b=[],L=[],k=new Hn;k.layers.enable(1),k.viewport=new Yt;const D=new Hn;D.layers.enable(2),D.viewport=new Yt;const C=[k,D],F=new Q1;F.layers.enable(1),F.layers.enable(2);let j=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let H=b[W];return H===void 0&&(H=new vd,b[W]=H),H.getTargetRaySpace()},this.getControllerGrip=function(W){let H=b[W];return H===void 0&&(H=new vd,b[W]=H),H.getGripSpace()},this.getHand=function(W){let H=b[W];return H===void 0&&(H=new vd,b[W]=H),H.getHandSpace()};function z(W){const H=L.indexOf(W.inputSource);if(H===-1)return;const T=b[H];T!==void 0&&T.dispatchEvent({type:W.type,data:W.inputSource})}function Y(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",K);for(let W=0;W<b.length;W++){const H=L[W];H!==null&&(L[W]=null,b[W].disconnect(H))}j=null,E=null,e.setRenderTarget(y),x=null,g=null,v=null,o=null,_=null,B.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,n,H),o.updateRenderState({baseLayer:x}),_=new ci(x.framebufferWidth,x.framebufferHeight,{format:li,type:Jr,encoding:e.outputEncoding})}else{let H=null,T=null,O=null;M.depth&&(O=M.stencil?35056:33190,H=M.stencil?Js:$r,T=M.stencil?Xs:jr);const X={colorFormat:32856,depthFormat:O,scaleFactor:a};v=new XRWebGLBinding(o,n),g=v.createProjectionLayer(X),o.updateRenderState({layers:[g]}),_=new ci(g.textureWidth,g.textureHeight,{format:li,type:Jr,depthTexture:new eM(g.textureWidth,g.textureHeight,T,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const de=e.properties.get(_);de.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),m=null,d=await o.requestReferenceSpace(c),B.setContext(o),B.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function K(W){for(let H=0;H<W.removed.length;H++){const T=W.removed[H],O=L.indexOf(T);O>=0&&(L[O]=null,b[O].dispatchEvent({type:"disconnected",data:T}))}for(let H=0;H<W.added.length;H++){const T=W.added[H];let O=L.indexOf(T);if(O===-1){for(let de=0;de<b.length;de++)if(de>=L.length){L.push(T),O=de;break}else if(L[de]===null){L[de]=T,O=de;break}if(O===-1)break}const X=b[O];X&&X.dispatchEvent({type:"connected",data:T})}}const ne=new Q,ae=new Q;function G(W,H,T){ne.setFromMatrixPosition(H.matrixWorld),ae.setFromMatrixPosition(T.matrixWorld);const O=ne.distanceTo(ae),X=H.projectionMatrix.elements,de=T.projectionMatrix.elements,me=X[14]/(X[10]-1),q=X[14]/(X[10]+1),xe=(X[9]+1)/X[5],_e=(X[9]-1)/X[5],Se=(X[8]-1)/X[0],ye=(de[8]+1)/de[0],qe=me*Se,Ge=me*ye,De=O/(-Se+ye),dt=De*-Se;H.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(dt),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=me+De,Ve=q+De,Ye=qe-dt,nt=Ge+(O-dt),st=xe*q/Ve*Be,_t=_e*q/Ve*Be;W.projectionMatrix.makePerspective(Ye,nt,st,_t,Be,Ve)}function ie(W,H){H===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(H.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;F.near=D.near=k.near=W.near,F.far=D.far=k.far=W.far,(j!==F.near||E!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,E=F.far);const H=W.parent,T=F.cameras;ie(F,H);for(let X=0;X<T.length;X++)ie(T[X],H);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),W.position.copy(F.position),W.quaternion.copy(F.quaternion),W.scale.copy(F.scale),W.matrix.copy(F.matrix),W.matrixWorld.copy(F.matrixWorld);const O=W.children;for(let X=0,de=O.length;X<de;X++)O[X].updateMatrixWorld(!0);T.length===2?G(F,k,D):F.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(W){g!==null&&(g.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let ee=null;function se(W,H){if(h=H.getViewerPose(m||d),S=H,h!==null){const T=h.views;x!==null&&(e.setRenderTargetFramebuffer(_,x.framebuffer),e.setRenderTarget(_));let O=!1;T.length!==F.cameras.length&&(F.cameras.length=0,O=!0);for(let X=0;X<T.length;X++){const de=T[X];let me=null;if(x!==null)me=x.getViewport(de);else{const xe=v.getViewSubImage(g,de);me=xe.viewport,X===0&&(e.setRenderTargetTextures(_,xe.colorTexture,g.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(_))}let q=C[X];q===void 0&&(q=new Hn,q.layers.enable(X),q.viewport=new Yt,C[X]=q),q.matrix.fromArray(de.transform.matrix),q.projectionMatrix.fromArray(de.projectionMatrix),q.viewport.set(me.x,me.y,me.width,me.height),X===0&&F.matrix.copy(q.matrix),O===!0&&F.cameras.push(q)}}for(let T=0;T<b.length;T++){const O=L[T],X=b[T];O!==null&&X!==void 0&&X.update(O,H,m||d)}ee&&ee(W,H),S=null}const B=new yg;B.setAnimationLoop(se),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}function nM(l,e){function n(y,_){y.fogColor.value.copy(_.color),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,b,L,k){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(y,_):_.isMeshToonMaterial?(o(y,_),v(y,_)):_.isMeshPhongMaterial?(o(y,_),h(y,_)):_.isMeshStandardMaterial?(o(y,_),g(y,_),_.isMeshPhysicalMaterial&&x(y,_,k)):_.isMeshMatcapMaterial?(o(y,_),S(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),M(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?c(y,_,b,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.bumpMap&&(y.bumpMap.value=_.bumpMap,y.bumpScale.value=_.bumpScale,_.side===ui&&(y.bumpScale.value*=-1)),_.displacementMap&&(y.displacementMap.value=_.displacementMap,y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap),_.normalMap&&(y.normalMap.value=_.normalMap,y.normalScale.value.copy(_.normalScale),_.side===ui&&y.normalScale.value.negate()),_.specularMap&&(y.specularMap.value=_.specularMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(y.envMap.value=b,y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const D=l.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*D}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity);let L;_.map?L=_.map:_.specularMap?L=_.specularMap:_.displacementMap?L=_.displacementMap:_.normalMap?L=_.normalMap:_.bumpMap?L=_.bumpMap:_.roughnessMap?L=_.roughnessMap:_.metalnessMap?L=_.metalnessMap:_.alphaMap?L=_.alphaMap:_.emissiveMap?L=_.emissiveMap:_.clearcoatMap?L=_.clearcoatMap:_.clearcoatNormalMap?L=_.clearcoatNormalMap:_.clearcoatRoughnessMap?L=_.clearcoatRoughnessMap:_.iridescenceMap?L=_.iridescenceMap:_.iridescenceThicknessMap?L=_.iridescenceThicknessMap:_.specularIntensityMap?L=_.specularIntensityMap:_.specularColorMap?L=_.specularColorMap:_.transmissionMap?L=_.transmissionMap:_.thicknessMap?L=_.thicknessMap:_.sheenColorMap?L=_.sheenColorMap:_.sheenRoughnessMap&&(L=_.sheenRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),y.uvTransform.value.copy(L.matrix));let k;_.aoMap?k=_.aoMap:_.lightMap&&(k=_.lightMap),k!==void 0&&(k.isWebGLRenderTarget&&(k=k.texture),k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uv2Transform.value.copy(k.matrix))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,b,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=L*.5,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let k;_.map?k=_.map:_.alphaMap&&(k=_.alphaMap),k!==void 0&&(k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uvTransform.value.copy(k.matrix))}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let b;_.map?b=_.map:_.alphaMap&&(b=_.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),y.uvTransform.value.copy(b.matrix))}function h(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.roughness.value=_.roughness,y.metalness.value=_.metalness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),y.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===ui&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap)}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){y.referencePosition.value.copy(_.referencePosition),y.nearDistance.value=_.nearDistance,y.farDistance.value=_.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iM(l,e,n,r){let o={},a={},d=[];const c=n.isWebGL2?l.getParameter(35375):0;function m(L,k){const D=k.program;r.uniformBlockBinding(L,D)}function h(L,k){let D=o[L.id];D===void 0&&(M(L),D=v(L),o[L.id]=D,L.addEventListener("dispose",_));const C=k.program;r.updateUBOMapping(L,C);const F=e.render.frame;a[L.id]!==F&&(x(L),a[L.id]=F)}function v(L){const k=g();L.__bindingPointIndex=k;const D=l.createBuffer(),C=L.__size,F=L.usage;return l.bindBuffer(35345,D),l.bufferData(35345,C,F),l.bindBuffer(35345,null),l.bindBufferBase(35345,k,D),D}function g(){for(let L=0;L<c;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const k=o[L.id],D=L.uniforms,C=L.__cache;l.bindBuffer(35345,k);for(let F=0,j=D.length;F<j;F++){const E=D[F];if(S(E,F,C)===!0){const z=E.value,Y=E.__offset;typeof z=="number"?(E.__data[0]=z,l.bufferSubData(35345,Y,E.__data)):(E.value.isMatrix3?(E.__data[0]=E.value.elements[0],E.__data[1]=E.value.elements[1],E.__data[2]=E.value.elements[2],E.__data[3]=E.value.elements[0],E.__data[4]=E.value.elements[3],E.__data[5]=E.value.elements[4],E.__data[6]=E.value.elements[5],E.__data[7]=E.value.elements[0],E.__data[8]=E.value.elements[6],E.__data[9]=E.value.elements[7],E.__data[10]=E.value.elements[8],E.__data[11]=E.value.elements[0]):z.toArray(E.__data),l.bufferSubData(35345,Y,E.__data))}}l.bindBuffer(35345,null)}function S(L,k,D){const C=L.value;if(D[k]===void 0)return typeof C=="number"?D[k]=C:D[k]=C.clone(),!0;if(typeof C=="number"){if(D[k]!==C)return D[k]=C,!0}else{const F=D[k];if(F.equals(C)===!1)return F.copy(C),!0}return!1}function M(L){const k=L.uniforms;let D=0;const C=16;let F=0;for(let j=0,E=k.length;j<E;j++){const z=k[j],Y=y(z);if(z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=D,j>0){F=D%C;const K=C-F;F!==0&&K-Y.boundary<0&&(D+=C-F,z.__offset=D)}D+=Y.storage}return F=D%C,F>0&&(D+=C-F),L.__size=D,L.__cache={},this}function y(L){const k=L.value,D={boundary:0,storage:0};return typeof k=="number"?(D.boundary=4,D.storage=4):k.isVector2?(D.boundary=8,D.storage=8):k.isVector3||k.isColor?(D.boundary=16,D.storage=12):k.isVector4?(D.boundary=16,D.storage=16):k.isMatrix3?(D.boundary=48,D.storage=48):k.isMatrix4?(D.boundary=64,D.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),D}function _(L){const k=L.target;k.removeEventListener("dispose",_);const D=d.indexOf(k.__bindingPointIndex);d.splice(D,1),l.deleteBuffer(o[k.id]),delete o[k.id],delete a[k.id]}function b(){for(const L in o)l.deleteBuffer(o[L]);d=[],o={},a={}}return{bind:m,update:h,dispose:b}}function rM(){const l=Hl("canvas");return l.style.display="block",l}function sM(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:rM(),n=l.context!==void 0?l.context:null,r=l.depth!==void 0?l.depth:!0,o=l.stencil!==void 0?l.stencil:!0,a=l.antialias!==void 0?l.antialias:!1,d=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,c=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,m=l.powerPreference!==void 0?l.powerPreference:"default",h=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let v;n!==null?v=n.getContextAttributes().alpha:v=l.alpha!==void 0?l.alpha:!1;let g=null,x=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=es,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const y=this;let _=!1,b=0,L=0,k=null,D=-1,C=null;const F=new Yt,j=new Yt;let E=null,z=e.width,Y=e.height,K=1,ne=null,ae=null;const G=new Yt(0,0,z,Y),ie=new Yt(0,0,z,Y);let ee=!1;const se=new _g;let B=!1,W=!1,H=null;const T=new Kt,O=new tt,X=new Q,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return k===null?K:1}let q=n;function xe(P,te){for(let ue=0;ue<P.length;ue++){const oe=P[ue],pe=e.getContext(oe,te);if(pe!==null)return pe}return null}try{const P={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fd}`),e.addEventListener("webglcontextlost",Qe,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),q===null){const te=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&te.shift(),q=xe(te,P),q===null)throw xe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _e,Se,ye,qe,Ge,De,dt,Be,Ve,Ye,nt,st,_t,lt,I,R,fe,Me,be,Ae,Xe,ce,Ue,Ie;function We(){_e=new pw(q),Se=new lw(q,_e,l),_e.init(Se),ce=new Z1(q,_e,Se),ye=new Y1(q,_e,Se),qe=new vw,Ge=new k1,De=new K1(q,_e,ye,Ge,Se,ce,qe),dt=new cw(y),Be=new hw(y),Ve=new R_(q,Se),Ue=new ow(q,_e,Ve,Se),Ye=new mw(q,Ve,qe,Ue),nt=new Sw(q,Ye,Ve,qe),be=new yw(q,Se,De),R=new uw(Ge),st=new N1(y,dt,Be,_e,Se,Ue,R),_t=new nM(y,Ge),lt=new z1,I=new W1(_e,Se),Me=new sw(y,dt,ye,nt,v,d),fe=new $1(y,nt,Se),Ie=new iM(q,qe,Se,ye),Ae=new aw(q,_e,qe,Se),Xe=new gw(q,_e,qe,Se),qe.programs=st.programs,y.capabilities=Se,y.extensions=_e,y.properties=Ge,y.renderLists=lt,y.shadowMap=fe,y.state=ye,y.info=qe}We();const ke=new tM(y,q);this.xr=ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=_e.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_e.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(z,Y,!1))},this.getSize=function(P){return P.set(z,Y)},this.setSize=function(P,te,ue){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,Y=te,e.width=Math.floor(P*K),e.height=Math.floor(te*K),ue!==!1&&(e.style.width=P+"px",e.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(z*K,Y*K).floor()},this.setDrawingBufferSize=function(P,te,ue){z=P,Y=te,K=ue,e.width=Math.floor(P*ue),e.height=Math.floor(te*ue),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,te,ue,oe){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,te,ue,oe),ye.viewport(F.copy(G).multiplyScalar(K).floor())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,te,ue,oe){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,te,ue,oe),ye.scissor(j.copy(ie).multiplyScalar(K).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(P){ye.setScissorTest(ee=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(P=!0,te=!0,ue=!0){let oe=0;P&&(oe|=16384),te&&(oe|=256),ue&&(oe|=1024),q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qe,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),lt.dispose(),I.dispose(),Ge.dispose(),dt.dispose(),Be.dispose(),nt.dispose(),Ue.dispose(),Ie.dispose(),st.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",it),ke.removeEventListener("sessionend",zt),H&&(H.dispose(),H=null),At.stop()};function Qe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=qe.autoReset,te=fe.enabled,ue=fe.autoUpdate,oe=fe.needsUpdate,pe=fe.type;We(),qe.autoReset=P,fe.enabled=te,fe.autoUpdate=ue,fe.needsUpdate=oe,fe.type=pe}function Mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $(P){const te=P.target;te.removeEventListener("dispose",$),Le(te)}function Le(P){he(P),Ge.remove(P)}function he(P){const te=Ge.get(P).programs;te!==void 0&&(te.forEach(function(ue){st.releaseProgram(ue)}),P.isShaderMaterial&&st.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,ue,oe,pe,Ke){te===null&&(te=de);const $e=pe.isMesh&&pe.matrixWorld.determinant()<0,et=Sr(P,te,ue,oe,pe);ye.setMaterial(oe,$e);let Je=ue.index;const gt=ue.attributes.position;if(Je===null){if(gt===void 0||gt.count===0)return}else if(Je.count===0)return;let at=1;oe.wireframe===!0&&(Je=Ye.getWireframeAttribute(ue),at=2),Ue.setup(pe,oe,et,ue,Je);let ut,bt=Ae;Je!==null&&(ut=Ve.get(Je),bt=Xe,bt.setIndex(ut));const di=Je!==null?Je.count:gt.count,Ui=ue.drawRange.start*at,Bi=ue.drawRange.count*at,ht=Ke!==null?Ke.start*at:0,pt=Ke!==null?Ke.count*at:1/0,fi=Math.max(Ui,ht),Dt=Math.min(di,Ui+Bi,ht+pt)-1,Zt=Math.max(0,Dt-fi+1);if(Zt!==0){if(pe.isMesh)oe.wireframe===!0?(ye.setLineWidth(oe.wireframeLinewidth*me()),bt.setMode(1)):bt.setMode(4);else if(pe.isLine){let hi=oe.linewidth;hi===void 0&&(hi=1),ye.setLineWidth(hi*me()),pe.isLineSegments?bt.setMode(1):pe.isLineLoop?bt.setMode(2):bt.setMode(3)}else pe.isPoints?bt.setMode(0):pe.isSprite&&bt.setMode(4);if(pe.isInstancedMesh)bt.renderInstances(fi,Zt,pe.count);else if(ue.isInstancedBufferGeometry){const hi=Math.min(ue.instanceCount,ue._maxInstanceCount);bt.renderInstances(fi,Zt,hi)}else bt.render(fi,Zt)}},this.compile=function(P,te){x=I.get(P),x.init(),M.push(x),P.traverseVisible(function(ue){ue.isLight&&ue.layers.test(te.layers)&&(x.pushLight(ue),ue.castShadow&&x.pushShadow(ue))}),x.setupLights(y.physicallyCorrectLights),P.traverse(function(ue){const oe=ue.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Ke=oe[pe];yi(Ke,P,ue)}else yi(oe,P,ue)}),M.pop(),x=null};let Re=null;function Te(P){Re&&Re(P)}function it(){At.stop()}function zt(){At.start()}const At=new yg;At.setAnimationLoop(Te),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(P){Re=P,ke.setAnimationLoop(P),P===null?At.stop():At.start()},ke.addEventListener("sessionstart",it),ke.addEventListener("sessionend",zt),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(te),te=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,te,k),x=I.get(P,M.length),x.init(),M.push(x),T.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),se.setFromProjectionMatrix(T),W=this.localClippingEnabled,B=R.init(this.clippingPlanes,W,te),g=lt.get(P,S.length),g.init(),S.push(g),Yn(P,te,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ne,ae),B===!0&&R.beginShadows();const ue=x.state.shadowsArray;if(fe.render(ue,P,te),B===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(g,P),x.setupLights(y.physicallyCorrectLights),te.isArrayCamera){const oe=te.cameras;for(let pe=0,Ke=oe.length;pe<Ke;pe++){const $e=oe[pe];Et(g,P,$e,$e.viewport)}}else Et(g,P,te);k!==null&&(De.updateMultisampleRenderTarget(k),De.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(y,P,te),Ue.resetDefaultState(),D=-1,C=null,M.pop(),M.length>0?x=M[M.length-1]:x=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Yn(P,te,ue,oe){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||se.intersectsSprite(P)){oe&&X.setFromMatrixPosition(P.matrixWorld).applyMatrix4(T);const $e=nt.update(P),et=P.material;et.visible&&g.push(P,$e,et,ue,X.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==qe.render.frame&&(P.skeleton.update(),P.skeleton.frame=qe.render.frame),!P.frustumCulled||se.intersectsObject(P))){oe&&X.setFromMatrixPosition(P.matrixWorld).applyMatrix4(T);const $e=nt.update(P),et=P.material;if(Array.isArray(et)){const Je=$e.groups;for(let gt=0,at=Je.length;gt<at;gt++){const ut=Je[gt],bt=et[ut.materialIndex];bt&&bt.visible&&g.push(P,$e,bt,ue,X.z,ut)}}else et.visible&&g.push(P,$e,et,ue,X.z,null)}}const Ke=P.children;for(let $e=0,et=Ke.length;$e<et;$e++)Yn(Ke[$e],te,ue,oe)}function Et(P,te,ue,oe){const pe=P.opaque,Ke=P.transmissive,$e=P.transparent;x.setupLightsView(ue),Ke.length>0&&Nn(pe,te,ue),oe&&ye.viewport(F.copy(oe)),pe.length>0&&tn(pe,te,ue),Ke.length>0&&tn(Ke,te,ue),$e.length>0&&tn($e,te,ue),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Nn(P,te,ue){const oe=Se.isWebGL2;H===null&&(H=new ci(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Jo:Jr,minFilter:$l,samples:oe&&a===!0?4:0})),y.getDrawingBufferSize(O),oe?H.setSize(O.x,O.y):H.setSize(Cd(O.x),Cd(O.y));const pe=y.getRenderTarget();y.setRenderTarget(H),y.clear();const Ke=y.toneMapping;y.toneMapping=Oi,tn(P,te,ue),y.toneMapping=Ke,De.updateMultisampleRenderTarget(H),De.updateRenderTargetMipmap(H),y.setRenderTarget(pe)}function tn(P,te,ue){const oe=te.isScene===!0?te.overrideMaterial:null;for(let pe=0,Ke=P.length;pe<Ke;pe++){const $e=P[pe],et=$e.object,Je=$e.geometry,gt=oe===null?$e.material:oe,at=$e.group;et.layers.test(ue.layers)&&ua(et,te,ue,Je,gt,at)}}function ua(P,te,ue,oe,pe,Ke){P.onBeforeRender(y,te,ue,oe,pe,Ke),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),pe.onBeforeRender(y,te,ue,oe,P,Ke),pe.transparent===!0&&pe.side===Ks?(pe.side=ui,pe.needsUpdate=!0,y.renderBufferDirect(ue,te,oe,pe,P,Ke),pe.side=Zo,pe.needsUpdate=!0,y.renderBufferDirect(ue,te,oe,pe,P,Ke),pe.side=Ks):y.renderBufferDirect(ue,te,oe,pe,P,Ke),P.onAfterRender(y,te,ue,oe,pe,Ke)}function yi(P,te,ue){te.isScene!==!0&&(te=de);const oe=Ge.get(P),pe=x.state.lights,Ke=x.state.shadowsArray,$e=pe.state.version,et=st.getParameters(P,pe.state,Ke,te,ue),Je=st.getProgramCacheKey(et);let gt=oe.programs;oe.environment=P.isMeshStandardMaterial?te.environment:null,oe.fog=te.fog,oe.envMap=(P.isMeshStandardMaterial?Be:dt).get(P.envMap||oe.environment),gt===void 0&&(P.addEventListener("dispose",$),gt=new Map,oe.programs=gt);let at=gt.get(Je);if(at!==void 0){if(oe.currentProgram===at&&oe.lightsStateVersion===$e)return ns(P,et),at}else et.uniforms=st.getUniforms(P),P.onBuild(ue,et,y),P.onBeforeCompile(et,y),at=st.acquireProgram(et,Je),gt.set(Je,at),oe.uniforms=et.uniforms;const ut=oe.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ut.clippingPlanes=R.uniform),ns(P,et),oe.needsLights=wr(P),oe.lightsStateVersion=$e,oe.needsLights&&(ut.ambientLightColor.value=pe.state.ambient,ut.lightProbe.value=pe.state.probe,ut.directionalLights.value=pe.state.directional,ut.directionalLightShadows.value=pe.state.directionalShadow,ut.spotLights.value=pe.state.spot,ut.spotLightShadows.value=pe.state.spotShadow,ut.rectAreaLights.value=pe.state.rectArea,ut.ltc_1.value=pe.state.rectAreaLTC1,ut.ltc_2.value=pe.state.rectAreaLTC2,ut.pointLights.value=pe.state.point,ut.pointLightShadows.value=pe.state.pointShadow,ut.hemisphereLights.value=pe.state.hemi,ut.directionalShadowMap.value=pe.state.directionalShadowMap,ut.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ut.spotShadowMap.value=pe.state.spotShadowMap,ut.spotShadowMatrix.value=pe.state.spotShadowMatrix,ut.pointShadowMap.value=pe.state.pointShadowMap,ut.pointShadowMatrix.value=pe.state.pointShadowMatrix);const bt=at.getUniforms(),di=Gl.seqWithValue(bt.seq,ut);return oe.currentProgram=at,oe.uniformsList=di,at}function ns(P,te){const ue=Ge.get(P);ue.outputEncoding=te.outputEncoding,ue.instancing=te.instancing,ue.skinning=te.skinning,ue.morphTargets=te.morphTargets,ue.morphNormals=te.morphNormals,ue.morphColors=te.morphColors,ue.morphTargetsCount=te.morphTargetsCount,ue.numClippingPlanes=te.numClippingPlanes,ue.numIntersection=te.numClipIntersection,ue.vertexAlphas=te.vertexAlphas,ue.vertexTangents=te.vertexTangents,ue.toneMapping=te.toneMapping}function Sr(P,te,ue,oe,pe){te.isScene!==!0&&(te=de),De.resetTextureUnits();const Ke=te.fog,$e=oe.isMeshStandardMaterial?te.environment:null,et=k===null?y.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:es,Je=(oe.isMeshStandardMaterial?Be:dt).get(oe.envMap||$e),gt=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,at=!!oe.normalMap&&!!ue.attributes.tangent,ut=!!ue.morphAttributes.position,bt=!!ue.morphAttributes.normal,di=!!ue.morphAttributes.color,Ui=oe.toneMapped?y.toneMapping:Oi,Bi=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ht=Bi!==void 0?Bi.length:0,pt=Ge.get(oe),fi=x.state.lights;if(B===!0&&(W===!0||P!==C)){const dn=P===C&&oe.id===D;R.setState(oe,P,dn)}let Dt=!1;oe.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==fi.state.version||pt.outputEncoding!==et||pe.isInstancedMesh&&pt.instancing===!1||!pe.isInstancedMesh&&pt.instancing===!0||pe.isSkinnedMesh&&pt.skinning===!1||!pe.isSkinnedMesh&&pt.skinning===!0||pt.envMap!==Je||oe.fog===!0&&pt.fog!==Ke||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==R.numPlanes||pt.numIntersection!==R.numIntersection)||pt.vertexAlphas!==gt||pt.vertexTangents!==at||pt.morphTargets!==ut||pt.morphNormals!==bt||pt.morphColors!==di||pt.toneMapping!==Ui||Se.isWebGL2===!0&&pt.morphTargetsCount!==ht)&&(Dt=!0):(Dt=!0,pt.__version=oe.version);let Zt=pt.currentProgram;Dt===!0&&(Zt=yi(oe,te,pe));let hi=!1,Gi=!1,Vi=!1;const yt=Zt.getUniforms(),Mr=pt.uniforms;if(ye.useProgram(Zt.program)&&(hi=!0,Gi=!0,Vi=!0),oe.id!==D&&(D=oe.id,Gi=!0),hi||C!==P){if(yt.setValue(q,"projectionMatrix",P.projectionMatrix),Se.logarithmicDepthBuffer&&yt.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),C!==P&&(C=P,Gi=!0,Vi=!0),oe.isShaderMaterial||oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshStandardMaterial||oe.envMap){const dn=yt.map.cameraPosition;dn!==void 0&&dn.setValue(q,X.setFromMatrixPosition(P.matrixWorld))}(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&yt.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial||oe.isShadowMaterial||pe.isSkinnedMesh)&&yt.setValue(q,"viewMatrix",P.matrixWorldInverse)}if(pe.isSkinnedMesh){yt.setOptional(q,pe,"bindMatrix"),yt.setOptional(q,pe,"bindMatrixInverse");const dn=pe.skeleton;dn&&(Se.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),yt.setValue(q,"boneTexture",dn.boneTexture,De),yt.setValue(q,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cn=ue.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0&&Se.isWebGL2===!0)&&be.update(pe,ue,oe,Zt),(Gi||pt.receiveShadow!==pe.receiveShadow)&&(pt.receiveShadow=pe.receiveShadow,yt.setValue(q,"receiveShadow",pe.receiveShadow)),Gi&&(yt.setValue(q,"toneMappingExposure",y.toneMappingExposure),pt.needsLights&&Zl(Mr,Vi),Ke&&oe.fog===!0&&_t.refreshFogUniforms(Mr,Ke),_t.refreshMaterialUniforms(Mr,oe,K,Y,H),Gl.upload(q,pt.uniformsList,Mr,De)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Gl.upload(q,pt.uniformsList,Mr,De),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&yt.setValue(q,"center",pe.center),yt.setValue(q,"modelViewMatrix",pe.modelViewMatrix),yt.setValue(q,"normalMatrix",pe.normalMatrix),yt.setValue(q,"modelMatrix",pe.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const dn=oe.uniformsGroups;for(let io=0,Ql=dn.length;io<Ql;io++)if(Se.isWebGL2){const Er=dn[io];Ie.update(Er,Zt),Ie.bind(Er,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Zl(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function wr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,te,ue){Ge.get(P.texture).__webglTexture=te,Ge.get(P.depthTexture).__webglTexture=ue;const oe=Ge.get(P);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=ue===void 0,oe.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,te){const ue=Ge.get(P);ue.__webglFramebuffer=te,ue.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,ue=0){k=P,b=te,L=ue;let oe=!0;if(P){const Je=Ge.get(P);Je.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),oe=!1):Je.__webglFramebuffer===void 0?De.setupRenderTarget(P):Je.__hasExternalTextures&&De.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture)}let pe=null,Ke=!1,$e=!1;if(P){const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture)&&($e=!0);const gt=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(pe=gt[te],Ke=!0):Se.isWebGL2&&P.samples>0&&De.useMultisampledRTT(P)===!1?pe=Ge.get(P).__webglMultisampledFramebuffer:pe=gt,F.copy(P.viewport),j.copy(P.scissor),E=P.scissorTest}else F.copy(G).multiplyScalar(K).floor(),j.copy(ie).multiplyScalar(K).floor(),E=ee;if(ye.bindFramebuffer(36160,pe)&&Se.drawBuffers&&oe&&ye.drawBuffers(P,pe),ye.viewport(F),ye.scissor(j),ye.setScissorTest(E),Ke){const Je=Ge.get(P.texture);q.framebufferTexture2D(36160,36064,34069+te,Je.__webglTexture,ue)}else if($e){const Je=Ge.get(P.texture),gt=te||0;q.framebufferTextureLayer(36160,36064,Je.__webglTexture,ue||0,gt)}D=-1},this.readRenderTargetPixels=function(P,te,ue,oe,pe,Ke,$e){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$e!==void 0&&(et=et[$e]),et){ye.bindFramebuffer(36160,et);try{const Je=P.texture,gt=Je.format,at=Je.type;if(gt!==li&&ce.convert(gt)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=at===Jo&&(_e.has("EXT_color_buffer_half_float")||Se.isWebGL2&&_e.has("EXT_color_buffer_float"));if(at!==Jr&&ce.convert(at)!==q.getParameter(35738)&&!(at===qr&&(Se.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-oe&&ue>=0&&ue<=P.height-pe&&q.readPixels(te,ue,oe,pe,ce.convert(gt),ce.convert(at),Ke)}finally{const Je=k!==null?Ge.get(k).__webglFramebuffer:null;ye.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(P,te,ue=0){const oe=Math.pow(2,-ue),pe=Math.floor(te.image.width*oe),Ke=Math.floor(te.image.height*oe);De.setTexture2D(te,0),q.copyTexSubImage2D(3553,ue,0,0,P.x,P.y,pe,Ke),ye.unbindTexture()},this.copyTextureToTexture=function(P,te,ue,oe=0){const pe=te.image.width,Ke=te.image.height,$e=ce.convert(ue.format),et=ce.convert(ue.type);De.setTexture2D(ue,0),q.pixelStorei(37440,ue.flipY),q.pixelStorei(37441,ue.premultiplyAlpha),q.pixelStorei(3317,ue.unpackAlignment),te.isDataTexture?q.texSubImage2D(3553,oe,P.x,P.y,pe,Ke,$e,et,te.image.data):te.isCompressedTexture?q.compressedTexSubImage2D(3553,oe,P.x,P.y,te.mipmaps[0].width,te.mipmaps[0].height,$e,te.mipmaps[0].data):q.texSubImage2D(3553,oe,P.x,P.y,$e,et,te.image),oe===0&&ue.generateMipmaps&&q.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(P,te,ue,oe,pe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=P.max.x-P.min.x+1,$e=P.max.y-P.min.y+1,et=P.max.z-P.min.z+1,Je=ce.convert(oe.format),gt=ce.convert(oe.type);let at;if(oe.isData3DTexture)De.setTexture3D(oe,0),at=32879;else if(oe.isDataArrayTexture)De.setTexture2DArray(oe,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,oe.flipY),q.pixelStorei(37441,oe.premultiplyAlpha),q.pixelStorei(3317,oe.unpackAlignment);const ut=q.getParameter(3314),bt=q.getParameter(32878),di=q.getParameter(3316),Ui=q.getParameter(3315),Bi=q.getParameter(32877),ht=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;q.pixelStorei(3314,ht.width),q.pixelStorei(32878,ht.height),q.pixelStorei(3316,P.min.x),q.pixelStorei(3315,P.min.y),q.pixelStorei(32877,P.min.z),ue.isDataTexture||ue.isData3DTexture?q.texSubImage3D(at,pe,te.x,te.y,te.z,Ke,$e,et,Je,gt,ht.data):ue.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(at,pe,te.x,te.y,te.z,Ke,$e,et,Je,ht.data)):q.texSubImage3D(at,pe,te.x,te.y,te.z,Ke,$e,et,Je,gt,ht),q.pixelStorei(3314,ut),q.pixelStorei(32878,bt),q.pixelStorei(3316,di),q.pixelStorei(3315,Ui),q.pixelStorei(32877,Bi),pe===0&&oe.generateMipmaps&&q.generateMipmap(at),ye.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?De.setTextureCube(P,0):P.isData3DTexture?De.setTexture3D(P,0):P.isDataArrayTexture?De.setTexture2DArray(P,0):De.setTexture2D(P,0),ye.unbindTexture()},this.resetState=function(){b=0,L=0,k=null,ye.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tg extends sM{}Tg.prototype.isWebGL1Renderer=!0;class Gd{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=n,this.far=r}clone(){return new Gd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class oM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class aM extends qn{constructor(e=null,n=1,r=1,o,a,d,c,m,h=un,v=un,g,x){super(null,d,c,m,h,v,o,a,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lM extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Kt,Rd=new hg,kl=new Yl,Fl=new Q;class Bm extends Xn{constructor(e=new $n,n=new lM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=a,e.ray.intersectsSphere(kl)===!1)return;Um.copy(o).invert(),Rd.copy(e.ray).applyMatrix4(Um);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),m=c*c,h=r.index,g=r.attributes.position;if(h!==null){const x=Math.max(0,d.start),S=Math.min(h.count,d.start+d.count);for(let M=x,y=S;M<y;M++){const _=h.getX(M);Fl.fromBufferAttribute(g,_),Gm(Fl,_,m,o,e,n,this)}}else{const x=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let M=x,y=S;M<y;M++)Fl.fromBufferAttribute(g,M),Gm(Fl,M,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,d=o.length;a<d;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Gm(l,e,n,r,o,a,d){const c=Rd.distanceSqToPoint(l);if(c<n){const m=new Q;Rd.closestPointToPoint(l,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:m,index:e,face:null,object:d})}}class Vd extends $n{constructor(e=1,n=32,r=16,o=0,a=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:a,thetaStart:d,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(d+c,Math.PI);let h=0;const v=[],g=new Q,x=new Q,S=[],M=[],y=[],_=[];for(let b=0;b<=r;b++){const L=[],k=b/r;let D=0;b==0&&d==0?D=.5/n:b==r&&m==Math.PI&&(D=-.5/n);for(let C=0;C<=n;C++){const F=C/n;g.x=-e*Math.cos(o+F*a)*Math.sin(d+k*c),g.y=e*Math.cos(d+k*c),g.z=e*Math.sin(o+F*a)*Math.sin(d+k*c),M.push(g.x,g.y,g.z),x.copy(g).normalize(),y.push(x.x,x.y,x.z),_.push(F+D,1-k),L.push(h++)}v.push(L)}for(let b=0;b<r;b++)for(let L=0;L<n;L++){const k=v[b][L+1],D=v[b][L],C=v[b+1][L],F=v[b+1][L+1];(b!==0||d>0)&&S.push(k,D,F),(b!==r-1||m<Math.PI)&&S.push(D,C,F)}this.setIndex(S),this.setAttribute("position",new bn(M,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(_,2))}static fromJSON(e){return new Vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Vm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Vm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);const ea={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class la{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const cM=new Ud(-1,1,1,-1,0,1),Wd=new $n;Wd.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3));Wd.setAttribute("uv",new bn([0,2,0,0,2,0],2));class Cg{constructor(e){this._mesh=new zi(Wd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class js extends la{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jl.clone(e.uniforms),this.material=new pn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cg(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Wm extends la{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let d,c;this.inverse?(d=0,c=1):(d=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,d,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class dM extends la{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xd{constructor(e,n){if(this.renderer=e,n===void 0){const r=e.getSize(new tt);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ea===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),js===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new js(ea),this.clock=new uM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let o=0,a=this.passes.length;o<a;o++){const d=this.passes[o];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),d.needsSwap){if(r){const c=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Wm!==void 0&&(d instanceof Wm?r=!0:d instanceof dM&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Ud(-1,1,1,-1,0,1);const Ag=new $n;Ag.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3));Ag.setAttribute("uv",new bn([0,2,0,0,2,0],2));class fM extends la{constructor(e,n,r,o,a){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(e,n,r){const o=e.autoClear;e.autoClear=!1;let a,d;this.overrideMaterial!==void 0&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=d),e.autoClear=o}}const Hm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends la{constructor(e,n,r,o){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new tt(e.x,e.y):new tt(256,256),this.clearColor=new vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(a,d),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new ci(a,d);x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const S=new ci(a,d);S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),a=Math.round(a/2),d=Math.round(d/2)}Hm===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const c=Hm;this.highPassUniforms=jl.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];a=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new tt(a,d),a=Math.round(a/2),d=Math.round(d/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ea===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const v=ea;this.copyUniforms=jl.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new pn({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Qo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new vt,this.oldClearAlpha=1,this.basic=new zd,this.fsQuad=new Cg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,n){let r=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(r,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,o),this.renderTargetsVertical[a].setSize(r,o),this.separableBlurMaterials[a].uniforms.texSize.value=new tt(r,o),r=Math.round(r/2),o=Math.round(o/2)}render(e,n,r,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this.fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[m].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[m];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=d}getSeperableBlurMaterial(e){return new pn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ts.BlurDirectionX=new tt(1,0);ts.BlurDirectionY=new tt(0,1);const jm={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`},hM="#02160c",pM="#0aff7f",mM="#aef0c0",gM=.2,vM="#7affbf",xM=300,_M=24,yM=1,SM="#02160c",wM="#34e89a",MM=.26,EM=5.5,bM=.45,qm=3,Xm=1,TM=.275,CM=1,AM=7,RM=16,LM=.8,PM=-2,DM=2,IM=-16,_d=1.2,NM=7,kM=.9,mr=(l,e,n)=>l+(e-l)*n,$m=(l,e,n)=>Math.max(e,Math.min(n,l));function $s(l){const e=parseInt(l.slice(1),16);return new Q((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)}const FM=`
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,gr={TORUS_SCENE:1,BLOOM_SCENE:2,ENTIRE_SCENE:3},zM={uniforms:{iTime:{value:0},tDiffuse:{value:null},torusTexture:{value:null},bloomTexture:{value:null},haloTexture:{value:null},uBg:{value:$s(hM)},uFlameA:{value:$s(pM)},uFlameB:{value:$s(mM)},uFlameAmt:{value:gM}},vertexShader:`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float iTime;
    uniform sampler2D tDiffuse;
    uniform sampler2D bloomTexture;
    uniform sampler2D torusTexture;
    uniform sampler2D haloTexture;
    uniform vec3 uBg;
    uniform vec3 uFlameA;
    uniform vec3 uFlameB;
    uniform float uFlameAmt;
    varying vec2 vUv;

    vec3 warp3d(vec3 pos, float t){
      float curv = 0.8, a = 1.9, b = 0.7;
      pos *= 2.0;
      pos.x += curv * sin(t + a * pos.y) + t * b;
      pos.y += curv * cos(t + a * pos.x);
      pos.y += curv * sin(t + a * pos.z) + t * b;
      pos.z += curv * cos(t + a * pos.y);
      pos.z += curv * sin(t + a * pos.x) + t * b;
      pos.x += curv * cos(t + a * pos.z);
      return 0.5 + 0.5 * cos(pos.xyz + vec3(1.0, 2.0, 4.0));
    }

    void main(){
      vec2 uv = 2.0 * vUv - 1.0;
      vec3 w = pow(warp3d(vec3(uv.x, sin(uv.y), uv.y), iTime * 1.5), vec3(1.5));
      vec3 flame = 1.5 * uFlameA * w.x;
      flame *= w.y;
      flame += uFlameB * w.z;
      flame *= smoothstep(0.25, 1.0, abs(uv.y));
      float md = smoothstep(-0.7, 1.0, -uv.y * uv.x);
      flame *= md * md;
      vec3 bg = uBg * (1.0 - 0.4 * length(uv));
      vec3 halo = texture2D(haloTexture, vUv).xyz;
      gl_FragColor = vec4(bg + flame * uFlameAmt + texture2D(bloomTexture, vUv).xyz + texture2D(torusTexture, vUv).xyz + texture2D(tDiffuse, vUv).xyz + halo, 1.0);
    }
  `};function OM(){const l=le.useRef(null),e=le.useRef(null);return le.useEffect(()=>{const n=l.current;if(!n)return;const r=new Tg({canvas:n,antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Ws;const o=new oM;o.background=new vt(0),o.fog=new Gd(0,0,15);const a=new Hn(45,window.innerWidth/window.innerHeight,.1,400);a.position.set(0,7,16),a.layers.enable(gr.TORUS_SCENE),a.layers.enable(gr.BLOOM_SCENE),a.layers.enable(gr.ENTIRE_SCENE),o.add(a);const d=new Vd(4.2,200,600),c=new pn({transparent:!0,depthWrite:!1,blending:Qo,uniforms:{uTime:{value:0},uStream:{value:0},uAppear:{value:0},uColLow:{value:$s(SM)},uColHigh:{value:$s(wM)},uOpacity:{value:MM},uSize:{value:EM},uBrightness:{value:bM},uWaveHeight:{value:qm},uFlow:{value:Xm},uScale:{value:TM},uCursor:{value:new Q},uRepelRadius:{value:NM},uRepelStrength:{value:kM},uActivity:{value:0}},vertexShader:`
        uniform float uTime; uniform float uStream; uniform float uSize; uniform float uWaveHeight; uniform float uFlow; uniform float uScale;
        uniform vec3 uColLow; uniform vec3 uColHigh;
        uniform vec3 uCursor; uniform float uRepelRadius; uniform float uRepelStrength; uniform float uActivity;
        varying float vFade; varying vec3 vColor;
        ${FM}
        void main() {
          vec3 wp = vec3(position.x * 13.0, 0.0, position.z * 25.0);
          wp.x += position.y * 6.0;
          float zc = wp.z + uStream;
          float wn = snoise(vec3(wp.x * 0.08, zc * 0.08, uTime * 0.15 * uFlow)) * 2.0;
          wn += snoise(vec3(wp.x * 0.16, zc * 0.16, uTime * 0.3 * uFlow)) * 0.8;
          wp.y += wn * uWaveHeight;

          vec3 finalPos = wp * uScale;
          vec4 modelPosition = modelMatrix * vec4(finalPos, 1.0);
          vec3 toP = modelPosition.xyz - uCursor;
          float cd = length(toP);
          float fall = smoothstep(uRepelRadius, 0.0, cd);
          modelPosition.xyz += normalize(toP + vec3(0.0001)) * fall * uRepelStrength * uActivity;
          vec4 mvPosition = viewMatrix * modelPosition;

          float colMix = smoothstep(-3.0, 3.0, position.y + position.x * 0.5);
          vColor = mix(uColLow, uColHigh, clamp(colMix, 0.0, 1.0));
          vFade = 1.0;

          gl_PointSize = uSize * (10.0 / -mvPosition.z);
          gl_PointSize = max(gl_PointSize, 1.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uOpacity; uniform float uBrightness; uniform float uAppear;
        varying float vFade; varying vec3 vColor;
        void main() {
          vec2 xy = gl_PointCoord - 0.5;
          float ll = length(xy);
          if (ll > 0.5) discard;
          float a = smoothstep(0.5, 0.1, ll);
          gl_FragColor = vec4(vColor * uBrightness, vFade * a * uOpacity * uAppear);
        }
      `}),m=new Bm(d,c);m.frustumCulled=!1,m.layers.enable(gr.ENTIRE_SCENE);const h=new Xo;h.add(m),o.add(h);const v=new fM(o,a),g=new xd(r);g.renderToScreen=!1,g.addPass(v),g.addPass(new js(jm)),g.addPass(new ts(new tt(window.innerWidth,window.innerHeight),.22,.2,0)),g.addPass(new js(ea));const x=new xd(r);x.renderToScreen=!1,x.addPass(v),x.addPass(new ts(new tt(window.innerWidth,window.innerHeight),.4,.55,0)),x.addPass(new js(jm));const S=new js(zM);S.uniforms.bloomTexture.value=x.renderTarget1.texture,S.uniforms.torusTexture.value=g.renderTarget1.texture;const M=new Uint8Array([0,0,0,255]),y=new aM(M,1,1,li);y.needsUpdate=!0,S.uniforms.haloTexture.value=y;const _=new xd(r);_.addPass(v),_.addPass(S);const b=Math.round(xM),L=new Float32Array(b*3),k=new Float32Array(b),D=new Float32Array(b);for(let xe=0;xe<b;xe++)L[xe*3]=2*Math.random()-1,L[xe*3+1]=2*Math.random()-1,L[xe*3+2]=2*Math.random()-1,k[xe]=_M*(.4+Math.random()),D[xe]=Math.random();const C=new $n;C.setAttribute("position",new In(L,3)),C.setAttribute("size",new In(k,1)),C.setAttribute("seed",new In(D,1));const F=new pn({transparent:!0,blending:Qo,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uColor:{value:$s(vM)},uRes:{value:new tt(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}},vertexShader:`
        attribute float size;
        attribute float seed;
        uniform float uTime;
        uniform vec2 uRes;
        varying float vA;

        vec3 warp(vec3 p, float t){
          float c = 0.9, a = 1.9, b = 0.02, s = 0.05;
          p *= 2.0;
          p.x += c * sin(s * t + a * p.y) + t * b;
          p.y += c * cos(s * t + a * p.x);
          p.y += c * sin(s * t + a * p.z) + t * b;
          p.z += c * cos(s * t + a * p.y);
          p.z += c * sin(s * t + a * p.x) + t * b;
          p.x += c * cos(s * t + a * p.z);
          return cos(p + vec3(1.0, 2.0, 4.0));
        }

        void main(){
          vec3 v = position * 4.0 + warp(position, uTime) * 1.2;
          vec4 mv = modelViewMatrix * vec4(v, 1.0);
          float r = length(v);
          float farF = 1.0 - smoothstep(5.0, 6.5, r);
          float nearF = smoothstep(0.0, 0.5, -mv.z);
          vA = farF * nearF;
          gl_PointSize = size * uRes.y / 900.0 / -mv.z;
          gl_PointSize = max(gl_PointSize, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vA;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float l = length(p);
          if (l > 0.5) discard;
          float tex = smoothstep(0.5, 0.0, l);
          gl_FragColor = vec4(uColor * tex, tex * vA * 0.6);
        }
      `}),j=new Bm(C,F);j.frustumCulled=!1,j.layers.enable(gr.ENTIRE_SCENE),o.add(j);let E=0,z=0,Y=0;const K={x:0,y:0},ne={x:0,y:0},ae={world:new Q,activity:0,active:!1,lastMove:performance.now()},G=new Q,ie=new Q,ee=new Q;function se(){if(ee.set(0,0,0),ae.active){G.set(ne.x,ne.y,.5).unproject(a),ie.copy(G).sub(a.position).normalize();const _e=ie.z;if(Math.abs(_e)>1e-4){const Se=-a.position.z/_e;Se>0&&Number.isFinite(Se)&&ee.copy(a.position).addScaledVector(ie,Se)}}ae.world.lerp(ee,.12);const xe=(performance.now()-ae.lastMove)/1e3;ae.activity+=((ae.active&&xe<3?1:0)-ae.activity)*.06}const B=()=>{const xe=document.documentElement.scrollHeight-window.innerHeight;E=xe>0?$m(window.scrollY/xe,0,1):0},W=xe=>{K.x=xe.clientX/window.innerWidth*2-1,K.y=-(xe.clientY/window.innerHeight*2-1),ae.active=!0,ae.lastMove=performance.now()},H=()=>{ae.active=!1};window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("mousemove",W,{passive:!0}),window.addEventListener("mouseout",H);let T=0;const O=performance.now();let X=performance.now()/1e3,de=!0;function me(){if(!de)return;requestAnimationFrame(me);const xe=performance.now()/1e3,_e=Math.min(.05,xe-X);X=xe,z=mr(z,E,.1),Y=mr(Y,z,.06),ne.x=mr(ne.x,K.x,.06),ne.y=mr(ne.y,K.y,.06),c.uniforms.uTime.value=xe,T+=_e*(Xm*2)*4,c.uniforms.uStream.value=T,c.uniforms.uWaveHeight.value=qm*(1+Y*CM);const Se=Math.min(Y/.35,1),ye=Se*Se*(3-2*Se),qe=mr(AM,LM,ye),Ge=mr(RM,PM,ye);a.position.set(ne.x*_d,qe+ne.y*_d*.3,Ge),a.lookAt(ne.x*_d*.5,mr(0,.6,ye),mr(DM,IM,ye)),h.rotation.x=-0,h.rotation.y=0,se(),c.uniforms.uCursor.value.copy(ae.world),c.uniforms.uActivity.value=ae.activity;const De=(performance.now()-O)/1e3;c.uniforms.uAppear.value=Math.max(0,Math.min(1,(De-.2)/1.4)),F.uniforms.uTime.value=xe*yM*8,j.position.copy(a.position),S.uniforms.iTime.value=xe,a.layers.set(gr.TORUS_SCENE),g.render(),a.layers.set(gr.BLOOM_SCENE),x.render(),a.layers.set(gr.ENTIRE_SCENE),_.render()}const q=()=>{const xe=window.innerWidth,_e=window.innerHeight,Se=window.devicePixelRatio;r.setPixelRatio(Se),r.setSize(xe,_e,!1),a.aspect=xe/_e,a.updateProjectionMatrix(),g.setPixelRatio(Se),g.setSize(xe,_e),x.setPixelRatio(Se),x.setSize(xe,_e),_.setPixelRatio(Se),_.setSize(xe,_e),F.uniforms.uRes.value.set(xe*Se,_e*Se);const ye=document.documentElement.scrollHeight-window.innerHeight;E=ye>0?$m(window.scrollY/ye,0,1):0};return window.addEventListener("resize",q),q(),me(),e.current=()=>{de=!1,window.removeEventListener("scroll",B),window.removeEventListener("mousemove",W),window.removeEventListener("mouseout",H),window.removeEventListener("resize",q),d.dispose(),c.dispose(),C.dispose(),F.dispose(),y.dispose(),r.dispose()},()=>{e.current&&e.current()}},[]),A.jsx("canvas",{ref:l,id:"flow-wave-canvas",style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"block",zIndex:0,pointerEvents:"auto"}})}function UM(l){const[e,n]=le.useState("connecting"),r=le.useRef(null),o=le.useRef(l),a=le.useRef(null),d=le.useRef(!1);le.useEffect(()=>{o.current=l},[l]);const c=le.useCallback(()=>{if(d.current)return;const h=A0();n("connecting");const v=new WebSocket(h);r.current=v,v.onopen=()=>{n("connected")},v.onmessage=g=>{try{const x=JSON.parse(g.data);o.current&&o.current(x)}catch(x){console.error("WebSocket message parse error:",x)}},v.onclose=()=>{n("disconnected"),d.current||(a.current=setTimeout(()=>{a.current=null,c()},2500))},v.onerror=()=>{v.close()}},[]);le.useEffect(()=>(d.current=!1,c(),()=>{d.current=!0,a.current&&(clearTimeout(a.current),a.current=null),r.current&&(r.current.close(),r.current=null)}),[c]);const m=le.useCallback((h,v={})=>{r.current&&r.current.readyState===WebSocket.OPEN&&r.current.send(JSON.stringify({command:h,...v}))},[]);return{connectionStatus:e,sendCommand:m}}function BM({sendCommand:l,connectionStatus:e}={}){const[n,r]=le.useState(!1),[o,a]=le.useState("Ready"),[d,c]=le.useState([]),[m,h]=le.useState(null),[v,g]=le.useState("00:00"),[x,S]=le.useState("idle"),M=le.useRef(null),y=le.useRef([]),_=le.useRef(null),b=le.useRef(null),L=le.useRef(null),k=le.useRef(0),D=le.useRef(null),C=le.useRef(!1),F=le.useRef(null),j=le.useRef(!1),E=le.useRef(0),z=le.useRef({}),Y=le.useRef(l),K=le.useRef([]);le.useEffect(()=>{K.current=d},[d]);const ne=async(T,O)=>{try{await fetch(Pt(`/api/visits/${T}/transcript`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segment_id:O.segment_id,text:O.text,sequence:O.sequence,timestamp:O.timestamp,speaker:O.speaker})})}catch(X){console.warn("Failed to persist transcript segment:",X)}},ae=le.useCallback(T=>{D.current&&T.visit_id&&T.visit_id!==D.current||(T.type==="transcript_partial"?(h({segment_id:T.segment_id,text:T.text,speaker:T.speaker||"Speaker",timestamp:T.timestamp,sequence:T.sequence}),S("processing")):T.type==="transcript_final"&&(h(null),S("listening"),c(O=>O.some(X=>X.segment_id===T.segment_id)?O.map(X=>X.segment_id===T.segment_id?T:X):[...O,T])))},[]),G=le.useCallback(()=>{if(C.current=!1,j.current=!1,L.current&&(clearInterval(L.current),L.current=null),F.current){try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}F.current=null}if(M.current&&M.current.state!=="inactive")try{M.current.stop()}catch{}_.current&&(_.current.getTracks().forEach(T=>T.stop()),_.current=null),r(!1),S("idle"),h(null)},[]),ie=le.useCallback(async({name:T,visitId:O,language:X="en-US",sendCommand:de}={})=>{if(C.current)return;de&&(Y.current=de);const me=O||`visit-${Date.now()}`;if(D.current=me,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){a("Audio capture not supported in this browser."),S("denied");return}try{const q=await navigator.mediaDevices.getUserMedia({audio:!0});_.current=q;const xe=new MediaRecorder(q);M.current=xe,y.current=[],b.current=new Date().toISOString(),C.current=!0,r(!0),S("listening"),a(`Listening to live speech — ${T||"Visitor"} is active.`);let _e=[];xe.ondataavailable=ye=>{ye.data.size>0&&(y.current.push(ye.data),_e.push(ye.data))},xe.start(1e3),L.current=setInterval(async()=>{if(!C.current)return;if(Date.now()-k.current>4e3&&_e.length>0){const Ge=new Blob(_e,{type:xe.mimeType||"audio/webm"});if(_e=[],Ge.size>1500)try{const De=await fetch(Pt("/api/transcribe"),{method:"POST",headers:{"Content-Type":Ge.type||"audio/webm"},body:Ge});if(De.ok){const dt=await De.json();if(dt.success&&dt.transcript&&dt.transcript.trim()){const Be=dt.transcript.trim(),Ve=E.current++,Ye={type:"transcript_final",visit_id:me,segment_id:`${me}-whisper-${Ve}`,text:Be,is_final:!0,speaker:"Speaker",sequence:Ve,timestamp:new Date().toISOString()};ae(Ye),ne(me,Ye);const nt=Y.current||l;nt&&nt("broadcast_transcript",Ye)}}}catch(De){console.warn("Whisper fallback slice error:",De)}}else _e=[]},4500);const Se=window.SpeechRecognition||window.webkitSpeechRecognition||null;if(Se){const ye=()=>{if(C.current)try{if(F.current)try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}const qe=new Se;qe.continuous=!0,qe.interimResults=!0,qe.lang=X,F.current=qe,j.current=!0,qe.onstart=()=>{S("listening")},qe.onresult=Ge=>{k.current=Date.now(),S("processing");for(let De=Ge.resultIndex;De<Ge.results.length;De++){const dt=Ge.results[De],Be=dt[0].transcript.trim();if(!Be)continue;const Ve=`${me}-${De}`,Ye=dt.isFinal,nt={type:Ye?"transcript_final":"transcript_partial",visit_id:me,segment_id:Ve,text:Be,is_final:Ye,speaker:"Speaker",sequence:De,timestamp:new Date().toISOString()};Ye?(h(null),c(_t=>_t.some(lt=>lt.segment_id===Ve)?_t.map(lt=>lt.segment_id===Ve?nt:lt):[..._t,nt]),S("listening"),ne(me,nt)):h(nt);const st=Y.current||l;st&&st("broadcast_transcript",nt)}},qe.onend=()=>{C.current&&j.current&&setTimeout(()=>{C.current&&j.current&&ye()},250)},qe.onerror=Ge=>{Ge.error==="not-allowed"&&(S("denied"),a("Microphone permission required"))},qe.start()}catch(qe){console.warn("SpeechRecognition start exception:",qe)}};ye()}}catch(q){r(!1),S("denied"),a(`Could not start audio capture: ${q.message}`)}},[l,ae]),ee=le.useCallback(T=>M.current?(a("Visit ended — summarizing memory with Groq..."),new Promise(O=>{M.current.onstop=async()=>{const X=new Blob(y.current,{type:"audio/webm"});y.current=[];const me=(K.current||[]).map(q=>`${q.speaker}: ${q.text}`).join(`
`);if(X.size>100){const q=new FormData;q.append("audio",X,"visit_audio.webm"),q.append("person_id",(T==null?void 0:T.person_id)||"unknown"),q.append("started_at",b.current||new Date().toISOString()),q.append("ended_at",new Date().toISOString()),q.append("visit_id",D.current||""),fetch(Pt("/api/visits/audio"),{method:"POST",body:q}).catch(xe=>console.warn("Background audio upload warning:",xe))}if(me&&me.trim().length>6)try{const q=await nx(T,me);if(q&&q.trim()&&!q.toLowerCase().includes("processing")){a(`Memory summarized: "${q}"`),O(q.trim());return}}catch(q){console.warn("Groq visit summarization failed:",q)}O(null)},G()})):Promise.resolve(null),[G]),se=le.useCallback((T,O)=>{if(!T||!T.trim())return;D.current||(D.current=`session-${Date.now()}`);const X=D.current;O&&(Y.current=O);let de="Speaker",me=T.trim();const q=T.indexOf(":");q>0&&q<20&&(de=T.substring(0,q).trim(),me=T.substring(q+1).trim());const xe=E.current++,_e=`${X}-manual-${xe}-${Date.now()}`,Se={type:"transcript_final",visit_id:X,segment_id:_e,text:me,is_final:!0,speaker:de,sequence:xe,timestamp:new Date().toISOString()};c(qe=>[...qe,Se]),S("listening");const ye=Y.current||l;ye&&ye("broadcast_transcript",Se),ne(X,Se)},[l]),B=le.useCallback(()=>{c([]),h(null),z.current={},E.current=0},[]),W=le.useCallback(T=>{T&&(D.current=T,fetch(Pt(`/api/visits/${T}/transcript`)).then(O=>O.json()).then(O=>{if(O&&O.success&&O.segments){c(O.segments);const X=O.segments.reduce((de,me)=>Math.max(de,me.sequence),-1);E.current=X+1}}).catch(O=>console.warn("Error catching up on segments:",O)))},[]);le.useEffect(()=>{if(!n||!b.current){g("00:00");return}const T=setInterval(()=>{const O=Date.now()-new Date(b.current).getTime(),X=Math.max(0,Math.floor(O/1e3)),de=String(Math.floor(X/60)).padStart(2,"0"),me=String(X%60).padStart(2,"0");g(`${de}:${me}`)},1e3);return()=>clearInterval(T)},[n]),le.useEffect(()=>()=>{G()},[G]);const H=d.map(T=>`${T.speaker}: ${T.text}`).join(`
`);return{isCapturing:n,transcript:H,statusMessage:o,startCapture:ie,stopListening:G,stopCaptureAndSummarize:ee,appendTranscript:se,resetTranscript:B,liveSegments:d,partialSegment:m,visitDuration:v,statusState:x,handleLiveTranscriptEvent:ae,catchUpTranscript:W,setStatusState:S}}function GM(){const[l,e]=le.useState([]),[n,r]=le.useState(!0),o=le.useCallback(async()=>{try{const v=await fetch(Pt("/api/roster"));if(!v.ok)throw new Error("Failed to fetch roster");const g=await v.json();e(g)}catch(v){console.error("Roster fetch error:",v)}finally{r(!1)}},[]);le.useEffect(()=>{o()},[o]);const a=le.useCallback(async v=>{if(!(await fetch(Pt("/api/roster"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).ok)throw new Error("Failed to create profile");await o()},[o]),d=le.useCallback(async v=>{if(!(await fetch(Pt(`/api/roster/${v}`),{method:"DELETE"})).ok)throw new Error("Failed to delete profile");await o()},[o]),c=le.useCallback(async(v,g=null)=>{const S=await(await fetch(Pt("/api/register_face"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,image_base64:g})})).json();return S.success&&await o(),S},[o]),m=le.useCallback(async v=>{const g=await fetch(Pt(`/api/clear_encodings/${v}`),{method:"POST"}),x=await g.json();return g.ok&&await o(),x},[o]),h=le.useCallback(async(v,g,x="")=>{try{(await fetch(Pt("/api/update_note"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,note:g,transcript:x})})).ok&&await o()}catch(S){console.error("Failed to save memory note:",S)}},[o]);return{profiles:l,loading:n,reload:o,addProfile:a,deleteProfile:d,registerFace:c,clearFaceEncodings:m,saveUpdatedNote:h}}function VM(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){const e=Math.random()*16|0;return(l==="x"?e:e&3|8).toString(16)})}const WM={ttsEnabled:!0,interactionEnabled:!0,autoListenEnabled:!0,rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null};function HM(){const[l,e]=le.useState("patient"),[n,r]=le.useState(null),o=le.useRef(null),[a,d]=le.useState(null),[c,m]=le.useState(WM),h=le.useRef(null),{profiles:v,addProfile:g,deleteProfile:x,registerFace:S,clearFaceEncodings:M,saveUpdatedNote:y,reload:_}=GM(),{isCapturing:b,transcript:L,startCapture:k,stopListening:D,stopCaptureAndSummarize:C,appendTranscript:F,resetTranscript:j,liveSegments:E,partialSegment:z,visitDuration:Y,statusState:K,handleLiveTranscriptEvent:ne,catchUpTranscript:ae,setStatusState:G}=BM(),ie=le.useCallback(X=>{const de=v.find(q=>q.person_id===X.person_id)||X;o.current=de,r(de),j();const me=VM();d(me),k({name:de.name,visitId:me,language:c.language,sendCommand:h.current})},[v,j,k,c.language]),ee=le.useCallback(async()=>{const X=o.current;if(!X)return;o.current=null,r(null),d(null);const de=await C(X);de&&await y(X.person_id,de,L)},[C,y,L]),se=le.useCallback(X=>{if(typeof window<"u")try{window.dispatchEvent(new CustomEvent("anchor-ws-message",{detail:X}))}catch{}switch(X.type){case"recognized":ie(X.person);break;case"unrecognized":ee();break;case"memory_updated":_();break;case"transcript_partial":case"transcript_final":ne(X);break}},[ie,ee,_,ne]),{connectionStatus:B,sendCommand:W}=UM(se);h.current=W,le.useEffect(()=>{B==="disconnected"?G("disconnected"):B==="connected"&&G(b?"listening":"idle")},[B,b,G]),le.useEffect(()=>{B==="connected"&&a&&ae(a)},[B,a,ae]);const H=async X=>{try{await fetch(Pt("/api/simulate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"arrive",person_id:X})})}catch(de){console.error("Simulation error:",de)}},T=async()=>{try{await fetch(Pt("/api/simulate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"leave"})})}catch(X){console.error("Simulation error:",X)}},O=async()=>{o.current&&await ee()};return A.jsxs(A.Fragment,{children:[A.jsx(OM,{}),A.jsxs("header",{className:"top-nav",children:[A.jsxs("div",{className:"brand-wrapper",children:[A.jsx("div",{className:"brand-icon",children:"⚓"}),A.jsxs("div",{className:"brand-text",children:[A.jsx("h1",{children:"Anchor"}),A.jsx("p",{children:"Dementia Care Companion"})]})]}),A.jsxs("div",{className:"nav-controls",children:[A.jsxs("div",{className:"status-pill",children:[A.jsx("span",{className:`status-dot ${B==="connected"?"active":B==="connecting"?"idle":"warn"}`}),A.jsx("span",{children:B==="connected"?"Live Connected":B==="connecting"?"Connecting...":"Disconnected"})]}),A.jsxs("div",{className:"mode-tab-group",children:[A.jsx("button",{className:`mode-tab ${l==="patient"?"active":""}`,onClick:()=>e("patient"),children:"Patient View"}),A.jsx("button",{className:`mode-tab ${l==="caregiver"?"active":""}`,onClick:()=>e("caregiver"),children:"Caregiver & Controls"})]})]})]}),A.jsx("main",{className:"app-container",children:l==="patient"?A.jsx(H0,{recognizedPerson:n,speakAloud:c.ttsEnabled,ttsSettings:c,interactionEnabled:c.interactionEnabled,autoListenEnabled:c.autoListenEnabled}):A.jsx(dx,{isVisitorPresent:!!n,activePerson:n,transcript:L,isCapturing:b,onToggleListening:()=>{b?D():k({name:(n==null?void 0:n.name)||"Caregiver/Visitor",language:c.language,sendCommand:h.current})},onAppendSpeech:X=>F(X,h.current),onClearSpeech:j,onSimulateArrive:H,onSimulateLeave:T,onForceSummarize:O,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:M,ttsSettings:c,onTtsSettingsChange:m,liveSegments:E,partialSegment:z,visitDuration:Y,statusState:K})})]})}const jM=y0.createRoot(document.getElementById("root"));jM.render(A.jsx(h0.StrictMode,{children:A.jsx(HM,{})}));
