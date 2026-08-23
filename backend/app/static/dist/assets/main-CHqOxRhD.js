(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Ym(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Dc={exports:{}},Oo={},Ic={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function c0(){if(pp)return et;pp=1;var u=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function _(C,O,K){this.props=C,this.context=O,this.refs=y,this.updater=K||S}_.prototype.isReactComponent={},_.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},_.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function T(){}T.prototype=_.prototype;function A(C,O,K){this.props=C,this.context=O,this.refs=y,this.updater=K||S}var k=A.prototype=new T;k.constructor=A,E(k,_.prototype),k.isPureReactComponent=!0;var L=Array.isArray,b=Object.prototype.hasOwnProperty,F={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function M(C,O,K){var de,ge={},X=null,_e=null;if(O!=null)for(de in O.ref!==void 0&&(_e=O.ref),O.key!==void 0&&(X=""+O.key),O)b.call(O,de)&&!j.hasOwnProperty(de)&&(ge[de]=O[de]);var ye=arguments.length-2;if(ye===1)ge.children=K;else if(1<ye){for(var we=Array(ye),Se=0;Se<ye;Se++)we[Se]=arguments[Se+2];ge.children=we}if(C&&C.defaultProps)for(de in ye=C.defaultProps,ye)ge[de]===void 0&&(ge[de]=ye[de]);return{$$typeof:u,type:C,key:X,ref:_e,props:ge,_owner:F.current}}function z(C,O){return{$$typeof:u,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function Y(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function B(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(K){return O[K]})}var fe=/\/+/g;function se(C,O){return typeof C=="object"&&C!==null&&C.key!=null?B(""+C.key):O.toString(36)}function q(C,O,K,de,ge){var X=typeof C;(X==="undefined"||X==="boolean")&&(C=null);var _e=!1;if(C===null)_e=!0;else switch(X){case"string":case"number":_e=!0;break;case"object":switch(C.$$typeof){case u:case e:_e=!0}}if(_e)return _e=C,ge=ge(_e),C=de===""?"."+se(_e,0):de,L(ge)?(K="",C!=null&&(K=C.replace(fe,"$&/")+"/"),q(ge,O,K,"",function(Se){return Se})):ge!=null&&(Y(ge)&&(ge=z(ge,K+(!ge.key||_e&&_e.key===ge.key?"":(""+ge.key).replace(fe,"$&/")+"/")+C)),O.push(ge)),1;if(_e=0,de=de===""?".":de+":",L(C))for(var ye=0;ye<C.length;ye++){X=C[ye];var we=de+se(X,ye);_e+=q(X,O,K,we,ge)}else if(we=x(C),typeof we=="function")for(C=we.call(C),ye=0;!(X=C.next()).done;)X=X.value,we=de+se(X,ye++),_e+=q(X,O,K,we,ge);else if(X==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return _e}function ae(C,O,K){if(C==null)return C;var de=[],ge=0;return q(C,de,"","",function(X){return O.call(K,X,ge++)}),de}function te(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(K){(C._status===0||C._status===-1)&&(C._status=1,C._result=K)},function(K){(C._status===0||C._status===-1)&&(C._status=2,C._result=K)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var ee={current:null},G={transition:null},V={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function H(){throw Error("act(...) is not supported in production builds of React.")}return et.Children={map:ae,forEach:function(C,O,K){ae(C,function(){O.apply(this,arguments)},K)},count:function(C){var O=0;return ae(C,function(){O++}),O},toArray:function(C){return ae(C,function(O){return O})||[]},only:function(C){if(!Y(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},et.Component=_,et.Fragment=n,et.Profiler=o,et.PureComponent=A,et.StrictMode=r,et.Suspense=m,et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,et.act=H,et.cloneElement=function(C,O,K){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var de=E({},C.props),ge=C.key,X=C.ref,_e=C._owner;if(O!=null){if(O.ref!==void 0&&(X=O.ref,_e=F.current),O.key!==void 0&&(ge=""+O.key),C.type&&C.type.defaultProps)var ye=C.type.defaultProps;for(we in O)b.call(O,we)&&!j.hasOwnProperty(we)&&(de[we]=O[we]===void 0&&ye!==void 0?ye[we]:O[we])}var we=arguments.length-2;if(we===1)de.children=K;else if(1<we){ye=Array(we);for(var Se=0;Se<we;Se++)ye[Se]=arguments[Se+2];de.children=ye}return{$$typeof:u,type:C.type,key:ge,ref:X,props:de,_owner:_e}},et.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:a,_context:C},C.Consumer=C},et.createElement=M,et.createFactory=function(C){var O=M.bind(null,C);return O.type=C,O},et.createRef=function(){return{current:null}},et.forwardRef=function(C){return{$$typeof:c,render:C}},et.isValidElement=Y,et.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:te}},et.memo=function(C,O){return{$$typeof:h,type:C,compare:O===void 0?null:O}},et.startTransition=function(C){var O=G.transition;G.transition={};try{C()}finally{G.transition=O}},et.unstable_act=H,et.useCallback=function(C,O){return ee.current.useCallback(C,O)},et.useContext=function(C){return ee.current.useContext(C)},et.useDebugValue=function(){},et.useDeferredValue=function(C){return ee.current.useDeferredValue(C)},et.useEffect=function(C,O){return ee.current.useEffect(C,O)},et.useId=function(){return ee.current.useId()},et.useImperativeHandle=function(C,O,K){return ee.current.useImperativeHandle(C,O,K)},et.useInsertionEffect=function(C,O){return ee.current.useInsertionEffect(C,O)},et.useLayoutEffect=function(C,O){return ee.current.useLayoutEffect(C,O)},et.useMemo=function(C,O){return ee.current.useMemo(C,O)},et.useReducer=function(C,O,K){return ee.current.useReducer(C,O,K)},et.useRef=function(C){return ee.current.useRef(C)},et.useState=function(C){return ee.current.useState(C)},et.useSyncExternalStore=function(C,O,K){return ee.current.useSyncExternalStore(C,O,K)},et.useTransition=function(){return ee.current.useTransition()},et.version="18.3.1",et}var mp;function Pf(){return mp||(mp=1,Ic.exports=c0()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function f0(){if(gp)return Oo;gp=1;var u=Pf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(c,m,h){var v,g={},x=null,S=null;h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)r.call(m,v)&&!a.hasOwnProperty(v)&&(g[v]=m[v]);if(c&&c.defaultProps)for(v in m=c.defaultProps,m)g[v]===void 0&&(g[v]=m[v]);return{$$typeof:e,type:c,key:x,ref:S,props:g,_owner:o.current}}return Oo.Fragment=n,Oo.jsx=f,Oo.jsxs=f,Oo}var vp;function d0(){return vp||(vp=1,Dc.exports=f0()),Dc.exports}var D=d0(),ue=Pf();const h0=Ym(ue);var dl={},Nc={exports:{}},Mn={},kc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function p0(){return xp||(xp=1,(function(u){function e(G,V){var H=G.length;G.push(V);e:for(;0<H;){var C=H-1>>>1,O=G[C];if(0<o(O,V))G[C]=V,G[H]=O,H=C;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var V=G[0],H=G.pop();if(H!==V){G[0]=H;e:for(var C=0,O=G.length,K=O>>>1;C<K;){var de=2*(C+1)-1,ge=G[de],X=de+1,_e=G[X];if(0>o(ge,H))X<O&&0>o(_e,ge)?(G[C]=_e,G[X]=H,C=X):(G[C]=ge,G[de]=H,C=de);else if(X<O&&0>o(_e,H))G[C]=_e,G[X]=H,C=X;else break e}}return V}function o(G,V){var H=G.sortIndex-V.sortIndex;return H!==0?H:G.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;u.unstable_now=function(){return a.now()}}else{var f=Date,c=f.now();u.unstable_now=function(){return f.now()-c}}var m=[],h=[],v=1,g=null,x=3,S=!1,E=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(G){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=G)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(h)}}function L(G){if(y=!1,k(G),!E)if(n(m)!==null)E=!0,te(b);else{var V=n(h);V!==null&&ee(L,V.startTime-G)}}function b(G,V){E=!1,y&&(y=!1,T(M),M=-1),S=!0;var H=x;try{for(k(V),g=n(m);g!==null&&(!(g.expirationTime>V)||G&&!B());){var C=g.callback;if(typeof C=="function"){g.callback=null,x=g.priorityLevel;var O=C(g.expirationTime<=V);V=u.unstable_now(),typeof O=="function"?g.callback=O:g===n(m)&&r(m),k(V)}else r(m);g=n(m)}if(g!==null)var K=!0;else{var de=n(h);de!==null&&ee(L,de.startTime-V),K=!1}return K}finally{g=null,x=H,S=!1}}var F=!1,j=null,M=-1,z=5,Y=-1;function B(){return!(u.unstable_now()-Y<z)}function fe(){if(j!==null){var G=u.unstable_now();Y=G;var V=!0;try{V=j(!0,G)}finally{V?se():(F=!1,j=null)}}else F=!1}var se;if(typeof A=="function")se=function(){A(fe)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ae=q.port2;q.port1.onmessage=fe,se=function(){ae.postMessage(null)}}else se=function(){_(fe,0)};function te(G){j=G,F||(F=!0,se())}function ee(G,V){M=_(function(){G(u.unstable_now())},V)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(G){G.callback=null},u.unstable_continueExecution=function(){E||S||(E=!0,te(b))},u.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<G?Math.floor(1e3/G):5},u.unstable_getCurrentPriorityLevel=function(){return x},u.unstable_getFirstCallbackNode=function(){return n(m)},u.unstable_next=function(G){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var H=x;x=V;try{return G()}finally{x=H}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(G,V){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var H=x;x=G;try{return V()}finally{x=H}},u.unstable_scheduleCallback=function(G,V,H){var C=u.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,G={id:v++,callback:V,priorityLevel:G,startTime:H,expirationTime:O,sortIndex:-1},H>C?(G.sortIndex=H,e(h,G),n(m)===null&&G===n(h)&&(y?(T(M),M=-1):y=!0,ee(L,H-C))):(G.sortIndex=O,e(m,G),E||S||(E=!0,te(b))),G},u.unstable_shouldYield=B,u.unstable_wrapCallback=function(G){var V=x;return function(){var H=x;x=V;try{return G.apply(this,arguments)}finally{x=H}}}})(Fc)),Fc}var _p;function m0(){return _p||(_p=1,kc.exports=p0()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function g0(){if(yp)return Mn;yp=1;var u=Pf(),e=m0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return m.call(g,t)?!0:m.call(v,t)?!1:h.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,s,l,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,s,l){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,s,d,l)&&(s=null),l||d===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,l=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var L=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),F=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),B=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),G=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,C;function O(t){if(C===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var K=!1;function de(t,i){if(!t||K)return"";K=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=l.stack.split(`
`),w=d.length-1,I=p.length-1;1<=w&&0<=I&&d[w]!==p[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==p[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==p[I]){var U=`
`+d[w].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=w&&0<=I);break}}}finally{K=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?O(t):""}function ge(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=de(t.type,!1),t;case 11:return t=de(t.type.render,!1),t;case 1:return t=de(t.type,!0),t;default:return""}}function X(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case F:return"Portal";case z:return"Profiler";case M:return"StrictMode";case se:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case Y:return(t._context.displayName||"Context")+".Provider";case fe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:X(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return X(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Se(t){var i=we(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function je(t){t._valueTracker||(t._valueTracker=Se(t))}function Ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ie(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var s=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function kt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=ye(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function Lt(t,i){xt(t,i);var s=ye(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,s):i.hasOwnProperty("defaultValue")&&rt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ht(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function rt(t,i,s){(i!=="number"||Ie(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Bt=Array.isArray;function Pt(t,i,s,l){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ye(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function N(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Bt(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ye(s)}}function he(t,i){var s=ye(i.value),l=ye(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Te(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Te(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ue(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function ke(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Ye(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,d=ke(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,d):t[s]=d}}var ot=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(t,i){if(i){if(ot[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function $(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ce(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,be=null,Je=null;function Ft(t){if(t=Mo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),Re(t.stateNode,t.type,i))}}function Et(t){be?Je?Je.push(t):Je=[t]:be=t}function Yn(){if(be){var t=be,i=Je;if(Je=be=null,Ft(t),i)for(t=0;t<i.length;t++)Ft(i[t])}}function yt(t,i){return t(i)}function Nn(){}var tn=!1;function ua(t,i,s){if(tn)return t(i,s);tn=!0;try{return yt(t,i,s)}finally{tn=!1,(be!==null||Je!==null)&&(Nn(),Yn())}}function yi(t,i){var s=t.stateNode;if(s===null)return null;var l=Ca(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var ns=!1;if(c)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{ns=!1}function Zl(t,i,s,l,d,p,w,I,U){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(s,ie)}catch(ve){this.onError(ve)}}var wr=!1,P=null,ne=!1,oe=null,re={onError:function(t){wr=!0,P=t}};function pe(t,i,s,l,d,p,w,I,U){wr=!1,P=null,Zl.apply(re,arguments)}function Xe(t,i,s,l,d,p,w,I,U){if(pe.apply(this,arguments),wr){if(wr){var ie=P;wr=!1,P=null}else throw Error(n(198));ne||(ne=!0,oe=ie)}}function He(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Ze(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ke(t){if(He(t)!==t)throw Error(n(188))}function ct(t){var i=t.alternate;if(!i){if(i=He(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return Ke(d),t;if(p===l)return Ke(d),i;p=p.sibling}throw Error(n(188))}if(s.return!==l.return)s=d,l=p;else{for(var w=!1,I=d.child;I;){if(I===s){w=!0,s=d,l=p;break}if(I===l){w=!0,l=d,s=p;break}I=I.sibling}if(!w){for(I=p.child;I;){if(I===s){w=!0,s=p,l=d;break}if(I===l){w=!0,l=p,s=d;break}I=I.sibling}if(!w)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function nt(t){return t=ct(t),t!==null?it(t):null}function it(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=it(t);if(i!==null)return i;t=t.sibling}return null}var St=e.unstable_scheduleCallback,fi=e.unstable_cancelCallback,Ui=e.unstable_shouldYield,Bi=e.unstable_requestPaint,at=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,di=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,Zt=e.unstable_NormalPriority,hi=e.unstable_LowPriority,Gi=e.unstable_IdlePriority,Vi=null,mt=null;function Mr(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Ql,fn=Math.log,io=Math.LN2;function Ql(t){return t>>>=0,t===0?32:31-(fn(t)/io|0)|0}var Er=64,ca=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fa(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,w=s&268435455;if(w!==0){var I=w&~d;I!==0?l=ro(I):(p&=w,p!==0&&(l=ro(p)))}else w=s&~d,w!==0?l=ro(w):p!==0&&(l=ro(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-cn(i),d=1<<s,l|=t[s],i&=~d;return l}function Rg(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lg(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-cn(p),I=1<<w,U=d[w];U===-1?((I&s)===0||(I&l)!==0)&&(d[w]=Rg(I,i)):U<=i&&(t.expiredLanes|=I),p&=~I}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jf(){var t=Er;return Er<<=1,(Er&4194240)===0&&(Er=64),t}function eu(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function so(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-cn(i),t[i]=s}function Pg(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-cn(s),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,s&=~p}}function tu(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-cn(s),d=1<<l;d&i|t[l]&i&&(t[l]|=i),s&=~d}}var pt=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Xf,nu,$f,Yf,Kf,iu=!1,da=[],Wi=null,Hi=null,ji=null,oo=new Map,ao=new Map,qi=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(t,i,s,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&nu(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Ig(t,i,s,l,d){switch(i){case"focusin":return Wi=lo(Wi,t,i,s,l,d),!0;case"dragenter":return Hi=lo(Hi,t,i,s,l,d),!0;case"mouseover":return ji=lo(ji,t,i,s,l,d),!0;case"pointerover":var p=d.pointerId;return oo.set(p,lo(oo.get(p)||null,t,i,s,l,d)),!0;case"gotpointercapture":return p=d.pointerId,ao.set(p,lo(ao.get(p)||null,t,i,s,l,d)),!0}return!1}function Qf(t){var i=Tr(t.target);if(i!==null){var s=He(i);if(s!==null){if(i=s.tag,i===13){if(i=Ze(s),i!==null){t.blockedOn=i,Kf(t.priority,function(){$f(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ha(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=su(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Le=l,s.target.dispatchEvent(l),Le=null}else return i=Mo(s),i!==null&&nu(i),t.blockedOn=s,!1;i.shift()}return!0}function Jf(t,i,s){ha(t)&&s.delete(i)}function Ng(){iu=!1,Wi!==null&&ha(Wi)&&(Wi=null),Hi!==null&&ha(Hi)&&(Hi=null),ji!==null&&ha(ji)&&(ji=null),oo.forEach(Jf),ao.forEach(Jf)}function uo(t,i){t.blockedOn===i&&(t.blockedOn=null,iu||(iu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function co(t){function i(d){return uo(d,t)}if(0<da.length){uo(da[0],t);for(var s=1;s<da.length;s++){var l=da[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&uo(Wi,t),Hi!==null&&uo(Hi,t),ji!==null&&uo(ji,t),oo.forEach(i),ao.forEach(i),s=0;s<qi.length;s++)l=qi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(s=qi[0],s.blockedOn===null);)Qf(s),s.blockedOn===null&&qi.shift()}var is=L.ReactCurrentBatchConfig,pa=!0;function kg(t,i,s,l){var d=pt,p=is.transition;is.transition=null;try{pt=1,ru(t,i,s,l)}finally{pt=d,is.transition=p}}function Fg(t,i,s,l){var d=pt,p=is.transition;is.transition=null;try{pt=4,ru(t,i,s,l)}finally{pt=d,is.transition=p}}function ru(t,i,s,l){if(pa){var d=su(t,i,s,l);if(d===null)wu(t,i,l,ma,s),Zf(t,l);else if(Ig(d,t,i,s,l))l.stopPropagation();else if(Zf(t,l),i&4&&-1<Dg.indexOf(t)){for(;d!==null;){var p=Mo(d);if(p!==null&&Xf(p),p=su(t,i,s,l),p===null&&wu(t,i,l,ma,s),p===d)break;d=p}d!==null&&l.stopPropagation()}else wu(t,i,l,null,s)}}var ma=null;function su(t,i,s,l){if(ma=null,t=ce(l),t=Tr(t),t!==null)if(i=He(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Ze(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ma=t,null}function ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case di:return 1;case Ct:return 4;case Zt:case hi:return 16;case Gi:return 536870912;default:return 16}default:return 16}}var Xi=null,ou=null,ga=null;function td(){if(ga)return ga;var t,i=ou,s=i.length,l,d="value"in Xi?Xi.value:Xi.textContent,p=d.length;for(t=0;t<s&&i[t]===d[t];t++);var w=s-t;for(l=1;l<=w&&i[s-l]===d[p-l];l++);return ga=d.slice(t,1<l?1-l:void 0)}function va(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function nd(){return!1}function bn(t){function i(s,l,d,p,w){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xa:nd,this.isPropagationStopped=nd,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=bn(rs),fo=H({},rs,{view:0,detail:0}),zg=bn(fo),lu,uu,ho,_a=H({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(lu=t.screenX-ho.screenX,uu=t.screenY-ho.screenY):uu=lu=0,ho=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),id=bn(_a),Og=H({},_a,{dataTransfer:0}),Ug=bn(Og),Bg=H({},fo,{relatedTarget:0}),cu=bn(Bg),Gg=H({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=bn(Gg),Wg=H({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hg=bn(Wg),jg=H({},rs,{data:0}),rd=bn(jg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function fu(){return Yg}var Kg=H({},fo,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=bn(Kg),Qg=H({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=bn(Qg),Jg=H({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),ev=bn(Jg),tv=H({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=bn(tv),iv=H({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=bn(iv),sv=[9,13,27,32],du=c&&"CompositionEvent"in window,po=null;c&&"documentMode"in document&&(po=document.documentMode);var ov=c&&"TextEvent"in window&&!po,od=c&&(!du||po&&8<po&&11>=po),ad=" ",ld=!1;function ud(t,i){switch(t){case"keyup":return sv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function av(t,i){switch(t){case"compositionend":return cd(i);case"keypress":return i.which!==32?null:(ld=!0,ad);case"textInput":return t=i.data,t===ad&&ld?null:t;default:return null}}function lv(t,i){if(ss)return t==="compositionend"||!du&&ud(t,i)?(t=td(),ga=ou=Xi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return od&&i.locale!=="ko"?null:i.data;default:return null}}var uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!uv[t.type]:i==="textarea"}function dd(t,i,s,l){Et(l),i=Ea(i,"onChange"),0<i.length&&(s=new au("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var mo=null,go=null;function cv(t){Ld(t,0)}function ya(t){var i=cs(t);if(Ge(i))return t}function fv(t,i){if(t==="change")return i}var hd=!1;if(c){var hu;if(c){var pu="oninput"in document;if(!pu){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),pu=typeof pd.oninput=="function"}hu=pu}else hu=!1;hd=hu&&(!document.documentMode||9<document.documentMode)}function md(){mo&&(mo.detachEvent("onpropertychange",gd),go=mo=null)}function gd(t){if(t.propertyName==="value"&&ya(go)){var i=[];dd(i,go,t,ce(t)),ua(cv,i)}}function dv(t,i,s){t==="focusin"?(md(),mo=i,go=s,mo.attachEvent("onpropertychange",gd)):t==="focusout"&&md()}function hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ya(go)}function pv(t,i){if(t==="click")return ya(i)}function mv(t,i){if(t==="input"||t==="change")return ya(i)}function gv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:gv;function vo(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!m.call(i,d)||!Kn(t[d],i[d]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var s=vd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vd(s)}}function _d(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?_d(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=Ie();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ie(t.document)}return i}function mu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function vv(t){var i=yd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&_d(s.ownerDocument.documentElement,s)){if(l!==null&&mu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=xd(s,p);var w=xd(s,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xv=c&&"documentMode"in document&&11>=document.documentMode,os=null,gu=null,xo=null,vu=!1;function Sd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||os==null||os!==Ie(l)||(l=os,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&vo(xo,l)||(xo=l,l=Ea(gu,"onSelect"),0<l.length&&(i=new au("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=os)))}function Sa(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var as={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},xu={},wd={};c&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function wa(t){if(xu[t])return xu[t];if(!as[t])return t;var i=as[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in wd)return xu[t]=i[s];return t}var Md=wa("animationend"),Ed=wa("animationiteration"),Td=wa("animationstart"),bd=wa("transitionend"),Cd=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Cd.set(t,i),a(i,[t])}for(var _u=0;_u<Ad.length;_u++){var yu=Ad[_u],_v=yu.toLowerCase(),yv=yu[0].toUpperCase()+yu.slice(1);$i(_v,"on"+yv)}$i(Md,"onAnimationEnd"),$i(Ed,"onAnimationIteration"),$i(Td,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(bd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Rd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Xe(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],U=I.instance,ie=I.currentTarget;if(I=I.listener,U!==p&&d.isPropagationStopped())break e;Rd(d,I,ie),p=U}else for(w=0;w<l.length;w++){if(I=l[w],U=I.instance,ie=I.currentTarget,I=I.listener,U!==p&&d.isPropagationStopped())break e;Rd(d,I,ie),p=U}}}if(ne)throw t=oe,ne=!1,oe=null,t}function wt(t,i){var s=i[Au];s===void 0&&(s=i[Au]=new Set);var l=t+"__bubble";s.has(l)||(Pd(i,t,2,!1),s.add(l))}function Su(t,i,s){var l=0;i&&(l|=4),Pd(s,t,l,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ma]){t[Ma]=!0,r.forEach(function(s){s!=="selectionchange"&&(Sv.has(s)||Su(s,!1,t),Su(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,Su("selectionchange",!1,i))}}function Pd(t,i,s,l){switch(ed(i)){case 1:var d=kg;break;case 4:d=Fg;break;default:d=ru}s=d.bind(null,i,s,t),d=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function wu(t,i,s,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var U=w.tag;if((U===3||U===4)&&(U=w.stateNode.containerInfo,U===d||U.nodeType===8&&U.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Tr(I),w===null)return;if(U=w.tag,U===5||U===6){l=p=w;continue e}I=I.parentNode}}l=l.return}ua(function(){var ie=p,ve=ce(s),xe=[];e:{var me=Cd.get(t);if(me!==void 0){var Pe=au,Fe=t;switch(t){case"keypress":if(va(s)===0)break e;case"keydown":case"keyup":Pe=Zg;break;case"focusin":Fe="focus",Pe=cu;break;case"focusout":Fe="blur",Pe=cu;break;case"beforeblur":case"afterblur":Pe=cu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=ev;break;case Md:case Ed:case Td:Pe=Vg;break;case bd:Pe=nv;break;case"scroll":Pe=zg;break;case"wheel":Pe=rv;break;case"copy":case"cut":case"paste":Pe=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=sd}var ze=(i&4)!==0,zt=!ze&&t==="scroll",Z=ze?me!==null?me+"Capture":null:me;ze=[];for(var W=ie,J;W!==null;){J=W;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Z!==null&&(Ee=yi(W,Z),Ee!=null&&ze.push(So(W,Ee,J)))),zt)break;W=W.return}0<ze.length&&(me=new Pe(me,Fe,null,s,ve),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Pe=t==="mouseout"||t==="pointerout",me&&s!==Le&&(Fe=s.relatedTarget||s.fromElement)&&(Tr(Fe)||Fe[Si]))break e;if((Pe||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Pe?(Fe=s.relatedTarget||s.toElement,Pe=ie,Fe=Fe?Tr(Fe):null,Fe!==null&&(zt=He(Fe),Fe!==zt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Pe=null,Fe=ie),Pe!==Fe)){if(ze=id,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ze=sd,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),zt=Pe==null?me:cs(Pe),J=Fe==null?me:cs(Fe),me=new ze(Ee,W+"leave",Pe,s,ve),me.target=zt,me.relatedTarget=J,Ee=null,Tr(ve)===ie&&(ze=new ze(Z,W+"enter",Fe,s,ve),ze.target=J,ze.relatedTarget=zt,Ee=ze),zt=Ee,Pe&&Fe)t:{for(ze=Pe,Z=Fe,W=0,J=ze;J;J=ls(J))W++;for(J=0,Ee=Z;Ee;Ee=ls(Ee))J++;for(;0<W-J;)ze=ls(ze),W--;for(;0<J-W;)Z=ls(Z),J--;for(;W--;){if(ze===Z||Z!==null&&ze===Z.alternate)break t;ze=ls(ze),Z=ls(Z)}ze=null}else ze=null;Pe!==null&&Dd(xe,me,Pe,ze,!1),Fe!==null&&zt!==null&&Dd(xe,zt,Fe,ze,!0)}}e:{if(me=ie?cs(ie):window,Pe=me.nodeName&&me.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&me.type==="file")var Oe=fv;else if(fd(me))if(hd)Oe=mv;else{Oe=hv;var Ve=dv}else(Pe=me.nodeName)&&Pe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Oe=pv);if(Oe&&(Oe=Oe(t,ie))){dd(xe,Oe,s,ve);break e}Ve&&Ve(t,me,ie),t==="focusout"&&(Ve=me._wrapperState)&&Ve.controlled&&me.type==="number"&&rt(me,"number",me.value)}switch(Ve=ie?cs(ie):window,t){case"focusin":(fd(Ve)||Ve.contentEditable==="true")&&(os=Ve,gu=ie,xo=null);break;case"focusout":xo=gu=os=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Sd(xe,s,ve);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Sd(xe,s,ve)}var We;if(du)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else ss?ud(t,s)&&($e="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&($e="onCompositionStart");$e&&(od&&s.locale!=="ko"&&(ss||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&ss&&(We=td()):(Xi=ve,ou="value"in Xi?Xi.value:Xi.textContent,ss=!0)),Ve=Ea(ie,$e),0<Ve.length&&($e=new rd($e,t,null,s,ve),xe.push({event:$e,listeners:Ve}),We?$e.data=We:(We=cd(s),We!==null&&($e.data=We)))),(We=ov?av(t,s):lv(t,s))&&(ie=Ea(ie,"onBeforeInput"),0<ie.length&&(ve=new rd("onBeforeInput","beforeinput",null,s,ve),xe.push({event:ve,listeners:ie}),ve.data=We))}Ld(xe,i)})}function So(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ea(t,i){for(var s=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=yi(t,s),p!=null&&l.unshift(So(t,p,d)),p=yi(t,i),p!=null&&l.push(So(t,p,d))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,i,s,l,d){for(var p=i._reactName,w=[];s!==null&&s!==l;){var I=s,U=I.alternate,ie=I.stateNode;if(U!==null&&U===l)break;I.tag===5&&ie!==null&&(I=ie,d?(U=yi(s,p),U!=null&&w.unshift(So(s,U,I))):d||(U=yi(s,p),U!=null&&w.push(So(s,U,I)))),s=s.return}w.length!==0&&t.push({event:i,listeners:w})}var wv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(Mv,"")}function Ta(t,i,s){if(i=Id(i),Id(t)!==i&&s)throw Error(n(425))}function ba(){}var Mu=null,Eu=null;function Tu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(bv)}:bu;function bv(t){setTimeout(function(){throw t})}function Cu(t,i){var s=i,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(l===0){t.removeChild(d),co(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=d}while(s);co(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function kd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),pi="__reactFiber$"+us,wo="__reactProps$"+us,Si="__reactContainer$"+us,Au="__reactEvents$"+us,Cv="__reactListeners$"+us,Av="__reactHandles$"+us;function Tr(t){var i=t[pi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[pi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=kd(t);t!==null;){if(s=t[pi])return s;t=kd(t)}return i}t=s,s=t.parentNode}return null}function Mo(t){return t=t[pi]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[wo]||null}var Ru=[],fs=-1;function Ki(t){return{current:t}}function Mt(t){0>fs||(t.current=Ru[fs],Ru[fs]=null,fs--)}function gt(t,i){fs++,Ru[fs]=t.current,t.current=i}var Zi={},nn=Ki(Zi),xn=Ki(!1),br=Zi;function ds(t,i){var s=t.type.contextTypes;if(!s)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in s)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function _n(t){return t=t.childContextTypes,t!=null}function Aa(){Mt(xn),Mt(nn)}function Fd(t,i,s){if(nn.current!==Zi)throw Error(n(168));gt(nn,i),gt(xn,s)}function zd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,_e(t)||"Unknown",d));return H({},s,l)}function Ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,br=nn.current,gt(nn,t),gt(xn,xn.current),!0}function Od(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=zd(t,i,br),l.__reactInternalMemoizedMergedChildContext=t,Mt(xn),Mt(nn),gt(nn,t)):Mt(xn),gt(xn,s)}var wi=null,La=!1,Lu=!1;function Ud(t){wi===null?wi=[t]:wi.push(t)}function Rv(t){La=!0,Ud(t)}function Qi(){if(!Lu&&wi!==null){Lu=!0;var t=0,i=pt;try{var s=wi;for(pt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}wi=null,La=!1}catch(d){throw wi!==null&&(wi=wi.slice(t+1)),St(di,Qi),d}finally{pt=i,Lu=!1}}return null}var hs=[],ps=0,Pa=null,Da=0,kn=[],Fn=0,Cr=null,Mi=1,Ei="";function Ar(t,i){hs[ps++]=Da,hs[ps++]=Pa,Pa=t,Da=i}function Bd(t,i,s){kn[Fn++]=Mi,kn[Fn++]=Ei,kn[Fn++]=Cr,Cr=t;var l=Mi;t=Ei;var d=32-cn(l)-1;l&=~(1<<d),s+=1;var p=32-cn(i)+d;if(30<p){var w=d-d%5;p=(l&(1<<w)-1).toString(32),l>>=w,d-=w,Mi=1<<32-cn(i)+d|s<<d|l,Ei=p+t}else Mi=1<<p|s<<d|l,Ei=t}function Pu(t){t.return!==null&&(Ar(t,1),Bd(t,1,0))}function Du(t){for(;t===Pa;)Pa=hs[--ps],hs[ps]=null,Da=hs[--ps],hs[ps]=null;for(;t===Cr;)Cr=kn[--Fn],kn[Fn]=null,Ei=kn[--Fn],kn[Fn]=null,Mi=kn[--Fn],kn[Fn]=null}var Cn=null,An=null,Tt=!1,Zn=null;function Gd(t,i){var s=Bn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Vd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Cn=t,An=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Cn=t,An=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Cr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Cn=t,An=null,!0):!1;default:return!1}}function Iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(Tt){var i=An;if(i){var s=i;if(!Vd(t,i)){if(Iu(t))throw Error(n(418));i=Yi(s.nextSibling);var l=Cn;i&&Vd(t,i)?Gd(l,s):(t.flags=t.flags&-4097|2,Tt=!1,Cn=t)}}else{if(Iu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Tt=!1,Cn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Ia(t){if(t!==Cn)return!1;if(!Tt)return Wd(t),Tt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Tu(t.type,t.memoizedProps)),i&&(i=An)){if(Iu(t))throw Hd(),Error(n(418));for(;i;)Gd(t,i),i=Yi(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){An=Yi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}An=null}}else An=Cn?Yi(t.stateNode.nextSibling):null;return!0}function Hd(){for(var t=An;t;)t=Yi(t.nextSibling)}function ms(){An=Cn=null,Tt=!1}function ku(t){Zn===null?Zn=[t]:Zn.push(t)}var Lv=L.ReactCurrentBatchConfig;function Eo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var I=d.refs;w===null?delete I[p]:I[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jd(t){var i=t._init;return i(t._payload)}function qd(t){function i(Z,W){if(t){var J=Z.deletions;J===null?(Z.deletions=[W],Z.flags|=16):J.push(W)}}function s(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=or(Z,W),Z.index=0,Z.sibling=null,Z}function p(Z,W,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<W?(Z.flags|=2,W):J):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function w(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,W,J,Ee){return W===null||W.tag!==6?(W=bc(J,Z.mode,Ee),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function U(Z,W,J,Ee){var Oe=J.type;return Oe===j?ve(Z,W,J.props.children,Ee,J.key):W!==null&&(W.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===te&&jd(Oe)===W.type)?(Ee=d(W,J.props),Ee.ref=Eo(Z,W,J),Ee.return=Z,Ee):(Ee=rl(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Eo(Z,W,J),Ee.return=Z,Ee)}function ie(Z,W,J,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Cc(J,Z.mode,Ee),W.return=Z,W):(W=d(W,J.children||[]),W.return=Z,W)}function ve(Z,W,J,Ee,Oe){return W===null||W.tag!==7?(W=Fr(J,Z.mode,Ee,Oe),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function xe(Z,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=bc(""+W,Z.mode,J),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return J=rl(W.type,W.key,W.props,null,Z.mode,J),J.ref=Eo(Z,null,W),J.return=Z,J;case F:return W=Cc(W,Z.mode,J),W.return=Z,W;case te:var Ee=W._init;return xe(Z,Ee(W._payload),J)}if(Bt(W)||V(W))return W=Fr(W,Z.mode,J,null),W.return=Z,W;Na(Z,W)}return null}function me(Z,W,J,Ee){var Oe=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Oe!==null?null:I(Z,W,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Oe?U(Z,W,J,Ee):null;case F:return J.key===Oe?ie(Z,W,J,Ee):null;case te:return Oe=J._init,me(Z,W,Oe(J._payload),Ee)}if(Bt(J)||V(J))return Oe!==null?null:ve(Z,W,J,Ee,null);Na(Z,J)}return null}function Pe(Z,W,J,Ee,Oe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(J)||null,I(W,Z,""+Ee,Oe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case b:return Z=Z.get(Ee.key===null?J:Ee.key)||null,U(W,Z,Ee,Oe);case F:return Z=Z.get(Ee.key===null?J:Ee.key)||null,ie(W,Z,Ee,Oe);case te:var Ve=Ee._init;return Pe(Z,W,J,Ve(Ee._payload),Oe)}if(Bt(Ee)||V(Ee))return Z=Z.get(J)||null,ve(W,Z,Ee,Oe,null);Na(W,Ee)}return null}function Fe(Z,W,J,Ee){for(var Oe=null,Ve=null,We=W,$e=W=0,Xt=null;We!==null&&$e<J.length;$e++){We.index>$e?(Xt=We,We=null):Xt=We.sibling;var ut=me(Z,We,J[$e],Ee);if(ut===null){We===null&&(We=Xt);break}t&&We&&ut.alternate===null&&i(Z,We),W=p(ut,W,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut,We=Xt}if($e===J.length)return s(Z,We),Tt&&Ar(Z,$e),Oe;if(We===null){for(;$e<J.length;$e++)We=xe(Z,J[$e],Ee),We!==null&&(W=p(We,W,$e),Ve===null?Oe=We:Ve.sibling=We,Ve=We);return Tt&&Ar(Z,$e),Oe}for(We=l(Z,We);$e<J.length;$e++)Xt=Pe(We,Z,$e,J[$e],Ee),Xt!==null&&(t&&Xt.alternate!==null&&We.delete(Xt.key===null?$e:Xt.key),W=p(Xt,W,$e),Ve===null?Oe=Xt:Ve.sibling=Xt,Ve=Xt);return t&&We.forEach(function(ar){return i(Z,ar)}),Tt&&Ar(Z,$e),Oe}function ze(Z,W,J,Ee){var Oe=V(J);if(typeof Oe!="function")throw Error(n(150));if(J=Oe.call(J),J==null)throw Error(n(151));for(var Ve=Oe=null,We=W,$e=W=0,Xt=null,ut=J.next();We!==null&&!ut.done;$e++,ut=J.next()){We.index>$e?(Xt=We,We=null):Xt=We.sibling;var ar=me(Z,We,ut.value,Ee);if(ar===null){We===null&&(We=Xt);break}t&&We&&ar.alternate===null&&i(Z,We),W=p(ar,W,$e),Ve===null?Oe=ar:Ve.sibling=ar,Ve=ar,We=Xt}if(ut.done)return s(Z,We),Tt&&Ar(Z,$e),Oe;if(We===null){for(;!ut.done;$e++,ut=J.next())ut=xe(Z,ut.value,Ee),ut!==null&&(W=p(ut,W,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut);return Tt&&Ar(Z,$e),Oe}for(We=l(Z,We);!ut.done;$e++,ut=J.next())ut=Pe(We,Z,$e,ut.value,Ee),ut!==null&&(t&&ut.alternate!==null&&We.delete(ut.key===null?$e:ut.key),W=p(ut,W,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut);return t&&We.forEach(function(u0){return i(Z,u0)}),Tt&&Ar(Z,$e),Oe}function zt(Z,W,J,Ee){if(typeof J=="object"&&J!==null&&J.type===j&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var Oe=J.key,Ve=W;Ve!==null;){if(Ve.key===Oe){if(Oe=J.type,Oe===j){if(Ve.tag===7){s(Z,Ve.sibling),W=d(Ve,J.props.children),W.return=Z,Z=W;break e}}else if(Ve.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===te&&jd(Oe)===Ve.type){s(Z,Ve.sibling),W=d(Ve,J.props),W.ref=Eo(Z,Ve,J),W.return=Z,Z=W;break e}s(Z,Ve);break}else i(Z,Ve);Ve=Ve.sibling}J.type===j?(W=Fr(J.props.children,Z.mode,Ee,J.key),W.return=Z,Z=W):(Ee=rl(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Eo(Z,W,J),Ee.return=Z,Z=Ee)}return w(Z);case F:e:{for(Ve=J.key;W!==null;){if(W.key===Ve)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){s(Z,W.sibling),W=d(W,J.children||[]),W.return=Z,Z=W;break e}else{s(Z,W);break}else i(Z,W);W=W.sibling}W=Cc(J,Z.mode,Ee),W.return=Z,Z=W}return w(Z);case te:return Ve=J._init,zt(Z,W,Ve(J._payload),Ee)}if(Bt(J))return Fe(Z,W,J,Ee);if(V(J))return ze(Z,W,J,Ee);Na(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(s(Z,W.sibling),W=d(W,J),W.return=Z,Z=W):(s(Z,W),W=bc(J,Z.mode,Ee),W.return=Z,Z=W),w(Z)):s(Z,W)}return zt}var gs=qd(!0),Xd=qd(!1),ka=Ki(null),Fa=null,vs=null,Fu=null;function zu(){Fu=vs=Fa=null}function Ou(t){var i=ka.current;Mt(ka),t._currentValue=i}function Uu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function xs(t,i){Fa=t,Fu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(Fu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Fa===null)throw Error(n(308));vs=t,Fa.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Rr=null;function Bu(t){Rr===null?Rr=[t]:Rr.push(t)}function $d(t,i,s,l){var d=i.interleaved;return d===null?(s.next=s,Bu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Ji=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(st&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ti(t,s)}return d=l.interleaved,d===null?(i.next=i,Bu(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ti(t,s)}function za(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,tu(t,s)}}function Kd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?d=p=w:p=p.next=w,s=s.next}while(s!==null);p===null?d=p=i:p=p.next=i}else d=p=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Oa(t,i,s,l){var d=t.updateQueue;Ji=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var U=I,ie=U.next;U.next=null,w===null?p=ie:w.next=ie,w=U;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==w&&(I===null?ve.firstBaseUpdate=ie:I.next=ie,ve.lastBaseUpdate=U))}if(p!==null){var xe=d.baseState;w=0,ve=ie=U=null,I=p;do{var me=I.lane,Pe=I.eventTime;if((l&me)===me){ve!==null&&(ve=ve.next={eventTime:Pe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Fe=t,ze=I;switch(me=i,Pe=s,ze.tag){case 1:if(Fe=ze.payload,typeof Fe=="function"){xe=Fe.call(Pe,xe,me);break e}xe=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ze.payload,me=typeof Fe=="function"?Fe.call(Pe,xe,me):Fe,me==null)break e;xe=H({},xe,me);break e;case 2:Ji=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,me=d.effects,me===null?d.effects=[I]:me.push(I))}else Pe={eventTime:Pe,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ie=ve=Pe,U=xe):ve=ve.next=Pe,w|=me;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;me=I,I=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ve===null&&(U=xe),d.baseState=U,d.firstBaseUpdate=ie,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Dr|=w,t.lanes=w,t.memoizedState=xe}}function Zd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=s,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var To={},mi=Ki(To),bo=Ki(To),Co=Ki(To);function Lr(t){if(t===To)throw Error(n(174));return t}function Vu(t,i){switch(gt(Co,i),gt(bo,t),gt(mi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Mt(mi),gt(mi,i)}function _s(){Mt(mi),Mt(bo),Mt(Co)}function Qd(t){Lr(Co.current);var i=Lr(mi.current),s=Ae(i,t.type);i!==s&&(gt(bo,t),gt(mi,s))}function Wu(t){bo.current===t&&(Mt(mi),Mt(bo))}var At=Ki(0);function Ua(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function ju(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Ba=L.ReactCurrentDispatcher,qu=L.ReactCurrentBatchConfig,Pr=0,Rt=null,Gt=null,jt=null,Ga=!1,Ao=!1,Ro=0,Pv=0;function rn(){throw Error(n(321))}function Xu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function $u(t,i,s,l,d,p){if(Pr=p,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=t===null||t.memoizedState===null?kv:Fv,t=s(l,d),Ao){p=0;do{if(Ao=!1,Ro=0,25<=p)throw Error(n(301));p+=1,jt=Gt=null,i.updateQueue=null,Ba.current=zv,t=s(l,d)}while(Ao)}if(Ba.current=Ha,i=Gt!==null&&Gt.next!==null,Pr=0,jt=Gt=Rt=null,Ga=!1,i)throw Error(n(300));return t}function Yu(){var t=Ro!==0;return Ro=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Rt.memoizedState=jt=t:jt=jt.next=t,jt}function On(){if(Gt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=jt===null?Rt.memoizedState:jt.next;if(i!==null)jt=i,Gt=t;else{if(t===null)throw Error(n(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},jt===null?Rt.memoizedState=jt=t:jt=jt.next=t}return jt}function Lo(t,i){return typeof i=="function"?i(t):i}function Ku(t){var i=On(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Gt,d=l.baseQueue,p=s.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}l.baseQueue=d=p,s.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=w=null,U=null,ie=p;do{var ve=ie.lane;if((Pr&ve)===ve)U!==null&&(U=U.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var xe={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};U===null?(I=U=xe,w=l):U=U.next=xe,Rt.lanes|=ve,Dr|=ve}ie=ie.next}while(ie!==null&&ie!==p);U===null?w=l:U.next=I,Kn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=U,s.lastRenderedState=l}if(t=s.interleaved,t!==null){d=t;do p=d.lane,Rt.lanes|=p,Dr|=p,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Zu(t){var i=On(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,p=i.memoizedState;if(d!==null){s.pending=null;var w=d=d.next;do p=t(p,w.action),w=w.next;while(w!==d);Kn(p,i.memoizedState)||(yn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Jd(){}function eh(t,i){var s=Rt,l=On(),d=i(),p=!Kn(l.memoizedState,d);if(p&&(l.memoizedState=d,yn=!0),l=l.queue,Qu(ih.bind(null,s,l,t),[t]),l.getSnapshot!==i||p||jt!==null&&jt.memoizedState.tag&1){if(s.flags|=2048,Po(9,nh.bind(null,s,l,d,i),void 0,null),qt===null)throw Error(n(349));(Pr&30)!==0||th(s,i,d)}return d}function th(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function nh(t,i,s,l){i.value=s,i.getSnapshot=l,rh(i)&&sh(t)}function ih(t,i,s){return s(function(){rh(i)&&sh(t)})}function rh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function sh(t){var i=Ti(t,1);i!==null&&ti(i,t,1,-1)}function oh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},i.queue=t,t=t.dispatch=Nv.bind(null,Rt,t),[i.memoizedState,t]}function Po(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function ah(){return On().memoizedState}function Va(t,i,s,l){var d=gi();Rt.flags|=t,d.memoizedState=Po(1|i,s,void 0,l===void 0?null:l)}function Wa(t,i,s,l){var d=On();l=l===void 0?null:l;var p=void 0;if(Gt!==null){var w=Gt.memoizedState;if(p=w.destroy,l!==null&&Xu(l,w.deps)){d.memoizedState=Po(i,s,p,l);return}}Rt.flags|=t,d.memoizedState=Po(1|i,s,p,l)}function lh(t,i){return Va(8390656,8,t,i)}function Qu(t,i){return Wa(2048,8,t,i)}function uh(t,i){return Wa(4,2,t,i)}function ch(t,i){return Wa(4,4,t,i)}function fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dh(t,i,s){return s=s!=null?s.concat([t]):null,Wa(4,4,fh.bind(null,i,t),s)}function Ju(){}function hh(t,i){var s=On();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Xu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function ph(t,i){var s=On();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Xu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function mh(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(Kn(s,i)||(s=jf(),Rt.lanes|=s,Dr|=s,t.baseState=!0),i)}function Dv(t,i){var s=pt;pt=s!==0&&4>s?s:4,t(!0);var l=qu.transition;qu.transition={};try{t(!1),i()}finally{pt=s,qu.transition=l}}function gh(){return On().memoizedState}function Iv(t,i,s){var l=rr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,s);else if(s=$d(t,i,s,l),s!==null){var d=hn();ti(s,t,l,d),_h(s,i,l)}}function Nv(t,i,s){var l=rr(t),d={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,I=p(w,s);if(d.hasEagerState=!0,d.eagerState=I,Kn(I,w)){var U=i.interleaved;U===null?(d.next=d,Bu(i)):(d.next=U.next,U.next=d),i.interleaved=d;return}}catch{}finally{}s=$d(t,i,d,l),s!==null&&(d=hn(),ti(s,t,l,d),_h(s,i,l))}}function vh(t){var i=t.alternate;return t===Rt||i!==null&&i===Rt}function xh(t,i){Ao=Ga=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function _h(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,tu(t,s)}}var Ha={readContext:zn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},kv={readContext:zn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:lh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Va(4194308,4,fh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Va(4194308,4,t,i)},useInsertionEffect:function(t,i){return Va(4,2,t,i)},useMemo:function(t,i){var s=gi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=gi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Iv.bind(null,Rt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:oh,useDebugValue:Ju,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=oh(!1),i=t[0];return t=Dv.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Rt,d=gi();if(Tt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),qt===null)throw Error(n(349));(Pr&30)!==0||th(l,i,s)}d.memoizedState=s;var p={value:s,getSnapshot:i};return d.queue=p,lh(ih.bind(null,l,p,t),[t]),l.flags|=2048,Po(9,nh.bind(null,l,p,s,i),void 0,null),s},useId:function(){var t=gi(),i=qt.identifierPrefix;if(Tt){var s=Ei,l=Mi;s=(l&~(1<<32-cn(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ro++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Pv++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Fv={readContext:zn,useCallback:hh,useContext:zn,useEffect:Qu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Ku,useRef:ah,useState:function(){return Ku(Lo)},useDebugValue:Ju,useDeferredValue:function(t){var i=On();return mh(i,Gt.memoizedState,t)},useTransition:function(){var t=Ku(Lo)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1},zv={readContext:zn,useCallback:hh,useContext:zn,useEffect:Qu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Zu,useRef:ah,useState:function(){return Zu(Lo)},useDebugValue:Ju,useDeferredValue:function(t){var i=On();return Gt===null?i.memoizedState=t:mh(i,Gt.memoizedState,t)},useTransition:function(){var t=Zu(Lo)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ec(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:H({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ja={isMounted:function(t){return(t=t._reactInternals)?He(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hn(),d=rr(t),p=bi(l,d);p.payload=i,s!=null&&(p.callback=s),i=er(t,p,d),i!==null&&(ti(i,t,d,l),za(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hn(),d=rr(t),p=bi(l,d);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=er(t,p,d),i!==null&&(ti(i,t,d,l),za(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hn(),l=rr(t),d=bi(s,l);d.tag=2,i!=null&&(d.callback=i),i=er(t,d,l),i!==null&&(ti(i,t,l,s),za(i,t,l))}};function yh(t,i,s,l,d,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!vo(s,l)||!vo(d,p):!0}function Sh(t,i,s){var l=!1,d=Zi,p=i.contextType;return typeof p=="object"&&p!==null?p=zn(p):(d=_n(i)?br:nn.current,l=i.contextTypes,p=(l=l!=null)?ds(t,d):Zi),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function wh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ja.enqueueReplaceState(i,i.state,null)}function tc(t,i,s,l){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},Gu(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=zn(p):(p=_n(i)?br:nn.current,d.context=ds(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(ec(t,i,p,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),Oa(t,s,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var s="",l=i;do s+=ge(l),l=l.return;while(l);var d=s}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function nc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function ic(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Mh(t,i,s){s=bi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Qa||(Qa=!0,xc=l),ic(t,i)},s}function Eh(t,i,s){s=bi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;s.payload=function(){return l(d)},s.callback=function(){ic(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){ic(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function Th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ov;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(d.add(s),t=Qv.bind(null,t,i,s),i.then(t,t))}function bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ch(t,i,s,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=bi(-1,1),i.tag=2,er(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Uv=L.ReactCurrentOwner,yn=!1;function dn(t,i,s,l){i.child=t===null?Xd(i,null,s,l):gs(i,t.child,s,l)}function Ah(t,i,s,l,d){s=s.render;var p=i.ref;return xs(i,d),l=$u(t,i,s,l,p,d),s=Yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Tt&&s&&Pu(i),i.flags|=1,dn(t,i,l,d),i.child)}function Rh(t,i,s,l,d){if(t===null){var p=s.type;return typeof p=="function"&&!Tc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Lh(t,i,p,l,d)):(t=rl(s.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var w=p.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(w,l)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=or(p,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,s,l,d){if(t!==null){var p=t.memoizedProps;if(vo(p,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return rc(t,i,s,l,d)}function Ph(t,i,s){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ws,Rn),Rn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,gt(ws,Rn),Rn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,gt(ws,Rn),Rn|=l}else p!==null?(l=p.baseLanes|s,i.memoizedState=null):l=s,gt(ws,Rn),Rn|=l;return dn(t,i,d,s),i.child}function Dh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function rc(t,i,s,l,d){var p=_n(s)?br:nn.current;return p=ds(i,p),xs(i,d),s=$u(t,i,s,l,p,d),l=Yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Tt&&l&&Pu(i),i.flags|=1,dn(t,i,s,d),i.child)}function Ih(t,i,s,l,d){if(_n(s)){var p=!0;Ra(i)}else p=!1;if(xs(i,d),i.stateNode===null)Xa(t,i),Sh(i,s,l),tc(i,s,l,d),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var U=w.context,ie=s.contextType;typeof ie=="object"&&ie!==null?ie=zn(ie):(ie=_n(s)?br:nn.current,ie=ds(i,ie));var ve=s.getDerivedStateFromProps,xe=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";xe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||U!==ie)&&wh(i,w,l,ie),Ji=!1;var me=i.memoizedState;w.state=me,Oa(i,l,w,d),U=i.memoizedState,I!==l||me!==U||xn.current||Ji?(typeof ve=="function"&&(ec(i,s,ve,l),U=i.memoizedState),(I=Ji||yh(i,s,I,l,me,U,ie))?(xe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),w.props=l,w.state=U,w.context=ie,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Yd(t,i),I=i.memoizedProps,ie=i.type===i.elementType?I:Qn(i.type,I),w.props=ie,xe=i.pendingProps,me=w.context,U=s.contextType,typeof U=="object"&&U!==null?U=zn(U):(U=_n(s)?br:nn.current,U=ds(i,U));var Pe=s.getDerivedStateFromProps;(ve=typeof Pe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==xe||me!==U)&&wh(i,w,l,U),Ji=!1,me=i.memoizedState,w.state=me,Oa(i,l,w,d);var Fe=i.memoizedState;I!==xe||me!==Fe||xn.current||Ji?(typeof Pe=="function"&&(ec(i,s,Pe,l),Fe=i.memoizedState),(ie=Ji||yh(i,s,ie,l,me,Fe,U)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Fe,U),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Fe,U)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Fe),w.props=l,w.state=Fe,w.context=U,l=ie):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return sc(t,i,s,l,p,d)}function sc(t,i,s,l,d,p){Dh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&Od(i,s,!1),Ci(t,i,p);l=i.stateNode,Uv.current=i;var I=w&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,I,p)):dn(t,i,I,p),i.memoizedState=l.state,d&&Od(i,s,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Fd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Fd(t,i.context,!1),Vu(t,i.containerInfo)}function kh(t,i,s,l,d){return ms(),ku(d),i.flags|=256,dn(t,i,s,l),i.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,s){var l=i.pendingProps,d=At.current,p=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),gt(At,d&1),t===null)return Nu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=sl(w,l,0,null),t=Fr(t,l,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ac(s),i.memoizedState=oc,t):lc(i,w));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Bv(t,i,w,l,I,d,s);if(p){p=l.fallback,w=i.mode,d=t.child,I=d.sibling;var U={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=U,i.deletions=null):(l=or(d,U),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=or(I,p):(p=Fr(p,w,s,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?ac(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~s,i.memoizedState=oc,l}return p=t.child,t=p.sibling,l=or(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function lc(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function qa(t,i,s,l){return l!==null&&ku(l),gs(i,t.child,null,s),t=lc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Bv(t,i,s,l,d,p,w){if(s)return i.flags&256?(i.flags&=-257,l=nc(Error(n(422))),qa(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=sl({mode:"visible",children:l.children},d,0,null),p=Fr(p,d,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,w),i.child.memoizedState=ac(w),i.memoizedState=oc,p);if((i.mode&1)===0)return qa(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=nc(p,l,void 0),qa(t,i,w,l)}if(I=(w&t.childLanes)!==0,yn||I){if(l=qt,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ti(t,d),ti(l,t,d,-1))}return Ec(),l=nc(Error(n(421))),qa(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Jv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,An=Yi(d.nextSibling),Cn=i,Tt=!0,Zn=null,t!==null&&(kn[Fn++]=Mi,kn[Fn++]=Ei,kn[Fn++]=Cr,Mi=t.id,Ei=t.overflow,Cr=i),i=lc(i,l.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Uu(t.return,i,s)}function uc(t,i,s,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=d)}function Oh(t,i,s){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(dn(t,i,l.children,s),l=At.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(gt(At,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Ua(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),uc(i,!1,d,s,p);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ua(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}uc(i,!0,s,null,p);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=or(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=or(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Gv(t,i,s){switch(i.tag){case 3:Nh(i),ms();break;case 5:Qd(i);break;case 1:_n(i.type)&&Ra(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;gt(ka,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(gt(At,At.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Fh(t,i,s):(gt(At,At.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);gt(At,At.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Oh(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),gt(At,At.current),l)break;return null;case 22:case 23:return i.lanes=0,Ph(t,i,s)}return Ci(t,i,s)}var Uh,cc,Bh,Gh;Uh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},cc=function(){},Bh=function(t,i,s,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Lr(mi.current);var p=null;switch(s){case"input":d=dt(t,d),l=dt(t,l),p=[];break;case"select":d=H({},d,{value:void 0}),l=H({},l,{value:void 0}),p=[];break;case"textarea":d=N(t,d),l=N(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ba)}_t(s,l);var w;s=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(w in I)I.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var U=l[ie];if(I=d!=null?d[ie]:void 0,l.hasOwnProperty(ie)&&U!==I&&(U!=null||I!=null))if(ie==="style")if(I){for(w in I)!I.hasOwnProperty(w)||U&&U.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in U)U.hasOwnProperty(w)&&I[w]!==U[w]&&(s||(s={}),s[w]=U[w])}else s||(p||(p=[]),p.push(ie,s)),s=U;else ie==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,I=I?I.__html:void 0,U!=null&&I!==U&&(p=p||[]).push(ie,U)):ie==="children"?typeof U!="string"&&typeof U!="number"||(p=p||[]).push(ie,""+U):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(U!=null&&ie==="onScroll"&&wt("scroll",t),p||I===U||(p=[])):(p=p||[]).push(ie,U))}s&&(p=p||[]).push("style",s);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},Gh=function(t,i,s,l){s!==l&&(i.flags|=4)};function Do(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Vv(t,i,s){var l=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(i),null;case 1:return _n(i.type)&&Aa(),sn(i),null;case 3:return l=i.stateNode,_s(),Mt(xn),Mt(nn),ju(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ia(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zn!==null&&(Sc(Zn),Zn=null))),cc(t,i),sn(i),null;case 5:Wu(i);var d=Lr(Co.current);if(s=i.type,t!==null&&i.stateNode!=null)Bh(t,i,s,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return sn(i),null}if(t=Lr(mi.current),Ia(i)){l=i.stateNode,s=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[wo]=p,t=(i.mode&1)!==0,s){case"dialog":wt("cancel",l),wt("close",l);break;case"iframe":case"object":case"embed":wt("load",l);break;case"video":case"audio":for(d=0;d<_o.length;d++)wt(_o[d],l);break;case"source":wt("error",l);break;case"img":case"image":case"link":wt("error",l),wt("load",l);break;case"details":wt("toggle",l);break;case"input":kt(l,p),wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},wt("invalid",l);break;case"textarea":R(l,p),wt("invalid",l)}_t(s,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var I=p[w];w==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&Ta(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Ta(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&wt("scroll",l)}switch(s){case"input":je(l),ht(l,p,!0);break;case"textarea":je(l),Me(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ba)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Te(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(s,{is:l.is}):(t=w.createElement(s),s==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,s),t[pi]=i,t[wo]=l,Uh(t,i,!1,!1),i.stateNode=t;e:{switch(w=$(s,l),s){case"dialog":wt("cancel",t),wt("close",t),d=l;break;case"iframe":case"object":case"embed":wt("load",t),d=l;break;case"video":case"audio":for(d=0;d<_o.length;d++)wt(_o[d],t);d=l;break;case"source":wt("error",t),d=l;break;case"img":case"image":case"link":wt("error",t),wt("load",t),d=l;break;case"details":wt("toggle",t),d=l;break;case"input":kt(t,l),d=dt(t,l),wt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=H({},l,{value:void 0}),wt("invalid",t);break;case"textarea":R(t,l),d=N(t,l),wt("invalid",t);break;default:d=l}_t(s,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var U=I[p];p==="style"?Ye(t,U):p==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&le(t,U)):p==="children"?typeof U=="string"?(s!=="textarea"||U!=="")&&Ue(t,U):typeof U=="number"&&Ue(t,""+U):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?U!=null&&p==="onScroll"&&wt("scroll",t):U!=null&&k(t,p,U,w))}switch(s){case"input":je(t),ht(t,l,!1);break;case"textarea":je(t),Me(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Pt(t,!!l.multiple,p,!1):l.defaultValue!=null&&Pt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ba)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return sn(i),null;case 6:if(t&&i.stateNode!=null)Gh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Lr(Co.current),Lr(mi.current),Ia(i)){if(l=i.stateNode,s=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==s)&&(t=Cn,t!==null))switch(t.tag){case 3:Ta(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(l.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return sn(i),null;case 13:if(Mt(At),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&An!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hd(),ms(),i.flags|=98560,p=!1;else if(p=Ia(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),p=!1}else Zn!==null&&(Sc(Zn),Zn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(At.current&1)!==0?Vt===0&&(Vt=3):Ec())),i.updateQueue!==null&&(i.flags|=4),sn(i),null);case 4:return _s(),cc(t,i),t===null&&yo(i.stateNode.containerInfo),sn(i),null;case 10:return Ou(i.type._context),sn(i),null;case 17:return _n(i.type)&&Aa(),sn(i),null;case 19:if(Mt(At),p=i.memoizedState,p===null)return sn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Do(p,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ua(t),w!==null){for(i.flags|=128,Do(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)p=s,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return gt(At,At.current&1|2),i.child}t=t.sibling}p.tail!==null&&at()>Ms&&(i.flags|=128,l=!0,Do(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ua(w),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Do(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Tt)return sn(i),null}else 2*at()-p.renderingStartTime>Ms&&s!==1073741824&&(i.flags|=128,l=!0,Do(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(s=p.last,s!==null?s.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=at(),i.sibling=null,s=At.current,gt(At,l?s&1|2:s&1),i):(sn(i),null);case 22:case 23:return Mc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Rn&1073741824)!==0&&(sn(i),i.subtreeFlags&6&&(i.flags|=8192)):sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Wv(t,i){switch(Du(i),i.tag){case 1:return _n(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Mt(xn),Mt(nn),ju(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Wu(i),null;case 13:if(Mt(At),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Mt(At),null;case 4:return _s(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var $a=!1,on=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ss(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Dt(t,i,l)}else s.current=null}function fc(t,i,s){try{s()}catch(l){Dt(t,i,l)}}var Vh=!1;function jv(t,i){if(Mu=pa,t=yd(),mu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var w=0,I=-1,U=-1,ie=0,ve=0,xe=t,me=null;t:for(;;){for(var Pe;xe!==s||d!==0&&xe.nodeType!==3||(I=w+d),xe!==p||l!==0&&xe.nodeType!==3||(U=w+l),xe.nodeType===3&&(w+=xe.nodeValue.length),(Pe=xe.firstChild)!==null;)me=xe,xe=Pe;for(;;){if(xe===t)break t;if(me===s&&++ie===d&&(I=w),me===p&&++ve===l&&(U=w),(Pe=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Pe}s=I===-1||U===-1?null:{start:I,end:U}}else s=null}s=s||{start:0,end:0}}else s=null;for(Eu={focusedElem:t,selectionRange:s},pa=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ze=Fe.memoizedProps,zt=Fe.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?ze:Qn(i.type,ze),zt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Dt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return Fe=Vh,Vh=!1,Fe}function Io(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&fc(i,s,p)}d=d.next}while(d!==l)}}function Ya(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function dc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[wo],delete i[Au],delete i[Cv],delete i[Av])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ba));else if(l!==4&&(t=t.child,t!==null))for(hc(t,i,s),t=t.sibling;t!==null;)hc(t,i,s),t=t.sibling}function pc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(pc(t,i,s),t=t.sibling;t!==null;)pc(t,i,s),t=t.sibling}var Qt=null,Jn=!1;function tr(t,i,s){for(s=s.child;s!==null;)qh(t,i,s),s=s.sibling}function qh(t,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Vi,s)}catch{}switch(s.tag){case 5:on||Ss(s,i);case 6:var l=Qt,d=Jn;Qt=null,tr(t,i,s),Qt=l,Jn=d,Qt!==null&&(Jn?(t=Qt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):Qt.removeChild(s.stateNode));break;case 18:Qt!==null&&(Jn?(t=Qt,s=s.stateNode,t.nodeType===8?Cu(t.parentNode,s):t.nodeType===1&&Cu(t,s),co(t)):Cu(Qt,s.stateNode));break;case 4:l=Qt,d=Jn,Qt=s.stateNode.containerInfo,Jn=!0,tr(t,i,s),Qt=l,Jn=d;break;case 0:case 11:case 14:case 15:if(!on&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&fc(s,i,w),d=d.next}while(d!==l)}tr(t,i,s);break;case 1:if(!on&&(Ss(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(I){Dt(s,i,I)}tr(t,i,s);break;case 21:tr(t,i,s);break;case 22:s.mode&1?(on=(l=on)||s.memoizedState!==null,tr(t,i,s),on=l):tr(t,i,s);break;default:tr(t,i,s)}}function Xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Hv),i.forEach(function(l){var d=e0.bind(null,t,l);s.has(l)||(s.add(l),l.then(d,d))})}}function ei(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l];try{var p=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:Qt=I.stateNode,Jn=!1;break e;case 3:Qt=I.stateNode.containerInfo,Jn=!0;break e;case 4:Qt=I.stateNode.containerInfo,Jn=!0;break e}I=I.return}if(Qt===null)throw Error(n(160));qh(p,w,d),Qt=null,Jn=!1;var U=d.alternate;U!==null&&(U.return=null),d.return=null}catch(ie){Dt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),vi(t),l&4){try{Io(3,t,t.return),Ya(3,t)}catch(ze){Dt(t,t.return,ze)}try{Io(5,t,t.return)}catch(ze){Dt(t,t.return,ze)}}break;case 1:ei(i,t),vi(t),l&512&&s!==null&&Ss(s,s.return);break;case 5:if(ei(i,t),vi(t),l&512&&s!==null&&Ss(s,s.return),t.flags&32){var d=t.stateNode;try{Ue(d,"")}catch(ze){Dt(t,t.return,ze)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,w=s!==null?s.memoizedProps:p,I=t.type,U=t.updateQueue;if(t.updateQueue=null,U!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&xt(d,p),$(I,w);var ie=$(I,p);for(w=0;w<U.length;w+=2){var ve=U[w],xe=U[w+1];ve==="style"?Ye(d,xe):ve==="dangerouslySetInnerHTML"?le(d,xe):ve==="children"?Ue(d,xe):k(d,ve,xe,ie)}switch(I){case"input":Lt(d,p);break;case"textarea":he(d,p);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Pe=p.value;Pe!=null?Pt(d,!!p.multiple,Pe,!1):me!==!!p.multiple&&(p.defaultValue!=null?Pt(d,!!p.multiple,p.defaultValue,!0):Pt(d,!!p.multiple,p.multiple?[]:"",!1))}d[wo]=p}catch(ze){Dt(t,t.return,ze)}}break;case 6:if(ei(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(ze){Dt(t,t.return,ze)}}break;case 3:if(ei(i,t),vi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(ze){Dt(t,t.return,ze)}break;case 4:ei(i,t),vi(t);break;case 13:ei(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(vc=at())),l&4&&Xh(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(on=(ie=on)||ve,ei(i,t),on=ie):ei(i,t),vi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Ne=t,ve=t.child;ve!==null;){for(xe=Ne=ve;Ne!==null;){switch(me=Ne,Pe=me.child,me.tag){case 0:case 11:case 14:case 15:Io(4,me,me.return);break;case 1:Ss(me,me.return);var Fe=me.stateNode;if(typeof Fe.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(ze){Dt(l,s,ze)}}break;case 5:Ss(me,me.return);break;case 22:if(me.memoizedState!==null){Zh(xe);continue}}Pe!==null?(Pe.return=me,Ne=Pe):Zh(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{d=xe.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=xe.stateNode,U=xe.memoizedProps.style,w=U!=null&&U.hasOwnProperty("display")?U.display:null,I.style.display=ke("display",w))}catch(ze){Dt(t,t.return,ze)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(ze){Dt(t,t.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ei(i,t),vi(t),l&4&&Xh(t);break;case 21:break;default:ei(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Hh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Ue(d,""),l.flags&=-33);var p=jh(t);pc(t,p,d);break;case 3:case 4:var w=l.stateNode.containerInfo,I=jh(t);hc(t,I,w);break;default:throw Error(n(161))}}catch(U){Dt(t,t.return,U)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qv(t,i,s){Ne=t,Yh(t)}function Yh(t,i,s){for(var l=(t.mode&1)!==0;Ne!==null;){var d=Ne,p=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||$a;if(!w){var I=d.alternate,U=I!==null&&I.memoizedState!==null||on;I=$a;var ie=on;if($a=w,(on=U)&&!ie)for(Ne=d;Ne!==null;)w=Ne,U=w.child,w.tag===22&&w.memoizedState!==null?Qh(d):U!==null?(U.return=w,Ne=U):Qh(d);for(;p!==null;)Ne=p,Yh(p),p=p.sibling;Ne=d,$a=I,on=ie}Kh(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ne=p):Kh(t)}}function Kh(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:on||Ya(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!on)if(s===null)l.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:Qn(i.type,s.memoizedProps);l.componentDidUpdate(d,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Zd(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Zd(i,w,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var U=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&s.focus();break;case"img":U.src&&(s.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&co(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}on||i.flags&512&&dc(i)}catch(me){Dt(i,i.return,me)}}if(i===t){Ne=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Zh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Qh(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ya(4,i)}catch(U){Dt(i,s,U)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(U){Dt(i,d,U)}}var p=i.return;try{dc(i)}catch(U){Dt(i,p,U)}break;case 5:var w=i.return;try{dc(i)}catch(U){Dt(i,w,U)}}}catch(U){Dt(i,i.return,U)}if(i===t){Ne=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ne=I;break}Ne=i.return}}var Xv=Math.ceil,Ka=L.ReactCurrentDispatcher,mc=L.ReactCurrentOwner,Un=L.ReactCurrentBatchConfig,st=0,qt=null,Ot=null,Jt=0,Rn=0,ws=Ki(0),Vt=0,No=null,Dr=0,Za=0,gc=0,ko=null,Sn=null,vc=0,Ms=1/0,Ai=null,Qa=!1,xc=null,nr=null,Ja=!1,ir=null,el=0,Fo=0,_c=null,tl=-1,nl=0;function hn(){return(st&6)!==0?at():tl!==-1?tl:tl=at()}function rr(t){return(t.mode&1)===0?1:(st&2)!==0&&Jt!==0?Jt&-Jt:Lv.transition!==null?(nl===0&&(nl=jf()),nl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:ed(t.type)),t)}function ti(t,i,s,l){if(50<Fo)throw Fo=0,_c=null,Error(n(185));so(t,s,l),((st&2)===0||t!==qt)&&(t===qt&&((st&2)===0&&(Za|=s),Vt===4&&sr(t,Jt)),wn(t,l),s===1&&st===0&&(i.mode&1)===0&&(Ms=at()+500,La&&Qi()))}function wn(t,i){var s=t.callbackNode;Lg(t,i);var l=fa(t,t===qt?Jt:0);if(l===0)s!==null&&fi(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&fi(s),i===1)t.tag===0?Rv(ep.bind(null,t)):Ud(ep.bind(null,t)),Tv(function(){(st&6)===0&&Qi()}),s=null;else{switch(qf(l)){case 1:s=di;break;case 4:s=Ct;break;case 16:s=Zt;break;case 536870912:s=Gi;break;default:s=Zt}s=lp(s,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Jh(t,i){if(tl=-1,nl=0,(st&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Es()&&t.callbackNode!==s)return null;var l=fa(t,t===qt?Jt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=il(t,l);else{i=l;var d=st;st|=2;var p=np();(qt!==t||Jt!==i)&&(Ai=null,Ms=at()+500,Nr(t,i));do try{Kv();break}catch(I){tp(t,I)}while(!0);zu(),Ka.current=p,st=d,Ot!==null?i=0:(qt=null,Jt=0,i=Vt)}if(i!==0){if(i===2&&(d=Jl(t),d!==0&&(l=d,i=yc(t,d))),i===1)throw s=No,Nr(t,0),sr(t,l),wn(t,at()),s;if(i===6)sr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!$v(d)&&(i=il(t,l),i===2&&(p=Jl(t),p!==0&&(l=p,i=yc(t,p))),i===1))throw s=No,Nr(t,0),sr(t,l),wn(t,at()),s;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Sn,Ai);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=vc+500-at(),10<i)){if(fa(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){hn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=bu(kr.bind(null,t,Sn,Ai),i);break}kr(t,Sn,Ai);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-cn(l);p=1<<w,w=i[w],w>d&&(d=w),l&=~p}if(l=d,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Xv(l/1960))-l,10<l){t.timeoutHandle=bu(kr.bind(null,t,Sn,Ai),l);break}kr(t,Sn,Ai);break;case 5:kr(t,Sn,Ai);break;default:throw Error(n(329))}}}return wn(t,at()),t.callbackNode===s?Jh.bind(null,t):null}function yc(t,i){var s=ko;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=il(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Sc(i)),t}function Sc(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function $v(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var d=s[l],p=d.getSnapshot;d=d.value;try{if(!Kn(p(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~gc,i&=~Za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-cn(i),l=1<<s;t[s]=-1,i&=~l}}function ep(t){if((st&6)!==0)throw Error(n(327));Es();var i=fa(t,0);if((i&1)===0)return wn(t,at()),null;var s=il(t,i);if(t.tag!==0&&s===2){var l=Jl(t);l!==0&&(i=l,s=yc(t,l))}if(s===1)throw s=No,Nr(t,0),sr(t,i),wn(t,at()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Sn,Ai),wn(t,at()),null}function wc(t,i){var s=st;st|=1;try{return t(i)}finally{st=s,st===0&&(Ms=at()+500,La&&Qi())}}function Ir(t){ir!==null&&ir.tag===0&&(st&6)===0&&Es();var i=st;st|=1;var s=Un.transition,l=pt;try{if(Un.transition=null,pt=1,t)return t()}finally{pt=l,Un.transition=s,st=i,(st&6)===0&&Qi()}}function Mc(){Rn=ws.current,Mt(ws)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Ev(s)),Ot!==null)for(s=Ot.return;s!==null;){var l=s;switch(Du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Aa();break;case 3:_s(),Mt(xn),Mt(nn),ju();break;case 5:Wu(l);break;case 4:_s();break;case 13:Mt(At);break;case 19:Mt(At);break;case 10:Ou(l.type._context);break;case 22:case 23:Mc()}s=s.return}if(qt=t,Ot=t=or(t.current,null),Jt=Rn=i,Vt=0,No=null,gc=Za=Dr=0,Sn=ko=null,Rr!==null){for(i=0;i<Rr.length;i++)if(s=Rr[i],l=s.interleaved,l!==null){s.interleaved=null;var d=l.next,p=s.pending;if(p!==null){var w=p.next;p.next=d,l.next=w}s.pending=l}Rr=null}return t}function tp(t,i){do{var s=Ot;try{if(zu(),Ba.current=Ha,Ga){for(var l=Rt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ga=!1}if(Pr=0,jt=Gt=Rt=null,Ao=!1,Ro=0,mc.current=null,s===null||s.return===null){Vt=1,No=i,Ot=null;break}e:{var p=t,w=s.return,I=s,U=i;if(i=Jt,I.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var ie=U,ve=I,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Pe=bh(w);if(Pe!==null){Pe.flags&=-257,Ch(Pe,w,I,p,i),Pe.mode&1&&Th(p,ie,i),i=Pe,U=ie;var Fe=i.updateQueue;if(Fe===null){var ze=new Set;ze.add(U),i.updateQueue=ze}else Fe.add(U);break e}else{if((i&1)===0){Th(p,ie,i),Ec();break e}U=Error(n(426))}}else if(Tt&&I.mode&1){var zt=bh(w);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Ch(zt,w,I,p,i),ku(ys(U,I));break e}}p=U=ys(U,I),Vt!==4&&(Vt=2),ko===null?ko=[p]:ko.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=Mh(p,U,i);Kd(p,Z);break e;case 1:I=U;var W=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(nr===null||!nr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Eh(p,I,i);Kd(p,Ee);break e}}p=p.return}while(p!==null)}rp(s)}catch(Oe){i=Oe,Ot===s&&s!==null&&(Ot=s=s.return);continue}break}while(!0)}function np(){var t=Ka.current;return Ka.current=Ha,t===null?Ha:t}function Ec(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||(Dr&268435455)===0&&(Za&268435455)===0||sr(qt,Jt)}function il(t,i){var s=st;st|=2;var l=np();(qt!==t||Jt!==i)&&(Ai=null,Nr(t,i));do try{Yv();break}catch(d){tp(t,d)}while(!0);if(zu(),st=s,Ka.current=l,Ot!==null)throw Error(n(261));return qt=null,Jt=0,Vt}function Yv(){for(;Ot!==null;)ip(Ot)}function Kv(){for(;Ot!==null&&!Ui();)ip(Ot)}function ip(t){var i=ap(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,i===null?rp(t):Ot=i,mc.current=null}function rp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=Vv(s,i,Rn),s!==null){Ot=s;return}}else{if(s=Wv(s,i),s!==null){s.flags&=32767,Ot=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=t}while(i!==null);Vt===0&&(Vt=5)}function kr(t,i,s){var l=pt,d=Un.transition;try{Un.transition=null,pt=1,Zv(t,i,s,l)}finally{Un.transition=d,pt=l}return null}function Zv(t,i,s,l){do Es();while(ir!==null);if((st&6)!==0)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Pg(t,p),t===qt&&(Ot=qt=null,Jt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ja||(Ja=!0,lp(Zt,function(){return Es(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Un.transition,Un.transition=null;var w=pt;pt=1;var I=st;st|=4,mc.current=null,jv(t,s),$h(s,t),vv(Eu),pa=!!Mu,Eu=Mu=null,t.current=s,qv(s),Bi(),st=I,pt=w,Un.transition=p}else t.current=s;if(Ja&&(Ja=!1,ir=t,el=d),p=t.pendingLanes,p===0&&(nr=null),Mr(s.stateNode),wn(t,at()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],l(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,t=xc,xc=null,t;return(el&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===_c?Fo++:(Fo=0,_c=t):Fo=0,Qi(),null}function Es(){if(ir!==null){var t=qf(el),i=Un.transition,s=pt;try{if(Un.transition=null,pt=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,el=0,(st&6)!==0)throw Error(n(331));var d=st;for(st|=4,Ne=t.current;Ne!==null;){var p=Ne,w=p.child;if((Ne.flags&16)!==0){var I=p.deletions;if(I!==null){for(var U=0;U<I.length;U++){var ie=I[U];for(Ne=ie;Ne!==null;){var ve=Ne;switch(ve.tag){case 0:case 11:case 15:Io(8,ve,p)}var xe=ve.child;if(xe!==null)xe.return=ve,Ne=xe;else for(;Ne!==null;){ve=Ne;var me=ve.sibling,Pe=ve.return;if(Wh(ve),ve===ie){Ne=null;break}if(me!==null){me.return=Pe,Ne=me;break}Ne=Pe}}}var Fe=p.alternate;if(Fe!==null){var ze=Fe.child;if(ze!==null){Fe.child=null;do{var zt=ze.sibling;ze.sibling=null,ze=zt}while(ze!==null)}}Ne=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Ne=w;else e:for(;Ne!==null;){if(p=Ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Io(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Ne=Z;break e}Ne=p.return}}var W=t.current;for(Ne=W;Ne!==null;){w=Ne;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,Ne=J;else e:for(w=W;Ne!==null;){if(I=Ne,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ya(9,I)}}catch(Oe){Dt(I,I.return,Oe)}if(I===w){Ne=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ne=Ee;break e}Ne=I.return}}if(st=d,Qi(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Vi,t)}catch{}l=!0}return l}finally{pt=s,Un.transition=i}}return!1}function sp(t,i,s){i=ys(s,i),i=Mh(t,i,1),t=er(t,i,1),i=hn(),t!==null&&(so(t,1,i),wn(t,i))}function Dt(t,i,s){if(t.tag===3)sp(t,t,s);else for(;i!==null;){if(i.tag===3){sp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=ys(s,t),t=Eh(i,t,1),i=er(i,t,1),t=hn(),i!==null&&(so(i,1,t),wn(i,t));break}}i=i.return}}function Qv(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=hn(),t.pingedLanes|=t.suspendedLanes&s,qt===t&&(Jt&s)===s&&(Vt===4||Vt===3&&(Jt&130023424)===Jt&&500>at()-vc?Nr(t,0):gc|=s),wn(t,i)}function op(t,i){i===0&&((t.mode&1)===0?i=1:(i=ca,ca<<=1,(ca&130023424)===0&&(ca=4194304)));var s=hn();t=Ti(t,i),t!==null&&(so(t,i,s),wn(t,s))}function Jv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),op(t,s)}function e0(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),op(t,s)}var ap;ap=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,Gv(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Tt&&(i.flags&1048576)!==0&&Bd(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Xa(t,i),t=i.pendingProps;var d=ds(i,nn.current);xs(i,s),d=$u(null,i,l,t,d,s);var p=Yu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_n(l)?(p=!0,Ra(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gu(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,tc(i,l,t,s),i=sc(null,i,l,!0,p,s)):(i.tag=0,Tt&&p&&Pu(i),dn(null,i,d,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Xa(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=n0(l),t=Qn(l,t),d){case 0:i=rc(null,i,l,t,s);break e;case 1:i=Ih(null,i,l,t,s);break e;case 11:i=Ah(null,i,l,t,s);break e;case 14:i=Rh(null,i,l,Qn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),rc(t,i,l,d,s);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),Ih(t,i,l,d,s);case 3:e:{if(Nh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Yd(t,i),Oa(i,l,null,s);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ys(Error(n(423)),i),i=kh(t,i,l,s,d);break e}else if(l!==d){d=ys(Error(n(424)),i),i=kh(t,i,l,s,d);break e}else for(An=Yi(i.stateNode.containerInfo.firstChild),Cn=i,Tt=!0,Zn=null,s=Xd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),l===d){i=Ci(t,i,s);break e}dn(t,i,l,s)}i=i.child}return i;case 5:return Qd(i),t===null&&Nu(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,w=d.children,Tu(l,d)?w=null:p!==null&&Tu(l,p)&&(i.flags|=32),Dh(t,i),dn(t,i,w,s),i.child;case 6:return t===null&&Nu(i),null;case 13:return Fh(t,i,s);case 4:return Vu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,s):dn(t,i,l,s),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),Ah(t,i,l,d,s);case 7:return dn(t,i,i.pendingProps,s),i.child;case 8:return dn(t,i,i.pendingProps.children,s),i.child;case 12:return dn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,gt(ka,l._currentValue),l._currentValue=w,p!==null)if(Kn(p.value,w)){if(p.children===d.children&&!xn.current){i=Ci(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){w=p.child;for(var U=I.firstContext;U!==null;){if(U.context===l){if(p.tag===1){U=bi(-1,s&-s),U.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?U.next=U:(U.next=ve.next,ve.next=U),ie.pending=U}}p.lanes|=s,U=p.alternate,U!==null&&(U.lanes|=s),Uu(p.return,s,i),I.lanes|=s;break}U=U.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=s,I=w.alternate,I!==null&&(I.lanes|=s),Uu(w,s,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}dn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,xs(i,s),d=zn(d),l=l(d),i.flags|=1,dn(t,i,l,s),i.child;case 14:return l=i.type,d=Qn(l,i.pendingProps),d=Qn(l.type,d),Rh(t,i,l,d,s);case 15:return Lh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),Xa(t,i),i.tag=1,_n(l)?(t=!0,Ra(i)):t=!1,xs(i,s),Sh(i,l,d),tc(i,l,d,s),sc(null,i,l,!0,t,s);case 19:return Oh(t,i,s);case 22:return Ph(t,i,s)}throw Error(n(156,i.tag))};function lp(t,i){return St(t,i)}function t0(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,s,l){return new t0(t,i,s,l)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n0(t){if(typeof t=="function")return Tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fe)return 11;if(t===ae)return 14}return 2}function or(t,i){var s=t.alternate;return s===null?(s=Bn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function rl(t,i,s,l,d,p){var w=2;if(l=t,typeof t=="function")Tc(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case j:return Fr(s.children,d,p,i);case M:w=8,d|=8;break;case z:return t=Bn(12,s,i,d|2),t.elementType=z,t.lanes=p,t;case se:return t=Bn(13,s,i,d),t.elementType=se,t.lanes=p,t;case q:return t=Bn(19,s,i,d),t.elementType=q,t.lanes=p,t;case ee:return sl(s,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:w=10;break e;case B:w=9;break e;case fe:w=11;break e;case ae:w=14;break e;case te:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(w,s,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,s,l){return t=Bn(7,t,l,i),t.lanes=s,t}function sl(t,i,s,l){return t=Bn(22,t,l,i),t.elementType=ee,t.lanes=s,t.stateNode={isHidden:!1},t}function bc(t,i,s){return t=Bn(6,t,null,i),t.lanes=s,t}function Cc(t,i,s){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function i0(t,i,s,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ac(t,i,s,l,d,p,w,I,U){return t=new i0(t,i,s,I,U),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Bn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(p),t}function r0(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function up(t){if(!t)return Zi;t=t._reactInternals;e:{if(He(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(_n(s))return zd(t,s,i)}return i}function cp(t,i,s,l,d,p,w,I,U){return t=Ac(s,l,!0,t,d,p,w,I,U),t.context=up(null),s=t.current,l=hn(),d=rr(s),p=bi(l,d),p.callback=i??null,er(s,p,d),t.current.lanes=d,so(t,d,l),wn(t,l),t}function ol(t,i,s,l){var d=i.current,p=hn(),w=rr(d);return s=up(s),i.context===null?i.context=s:i.pendingContext=s,i=bi(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(d,i,w),t!==null&&(ti(t,d,w,p),za(t,d,w)),w}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Rc(t,i){fp(t,i),(t=t.alternate)&&fp(t,i)}function s0(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lc(t){this._internalRoot=t}ll.prototype.render=Lc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},ll.prototype.unmount=Lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){ol(null,t,null,null)}),i[Si]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<qi.length&&i!==0&&i<qi[s].priority;s++);qi.splice(s,0,t),s===0&&Qf(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function o0(t,i,s,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ie=al(w);p.call(ie)}}var w=cp(i,l,t,0,null,!1,!1,"",hp);return t._reactRootContainer=w,t[Si]=w.current,yo(t.nodeType===8?t.parentNode:t),Ir(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ie=al(U);I.call(ie)}}var U=Ac(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=U,t[Si]=U.current,yo(t.nodeType===8?t.parentNode:t),Ir(function(){ol(i,U,s,l)}),U}function cl(t,i,s,l,d){var p=s._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var I=d;d=function(){var U=al(w);I.call(U)}}ol(i,w,t,d)}else w=o0(s,i,t,d,l);return al(w)}Xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=ro(i.pendingLanes);s!==0&&(tu(i,s|1),wn(i,at()),(st&6)===0&&(Ms=at()+500,Qi()))}break;case 13:Ir(function(){var l=Ti(t,1);if(l!==null){var d=hn();ti(l,t,1,d)}}),Rc(t,1)}},nu=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=hn();ti(i,t,134217728,s)}Rc(t,134217728)}},$f=function(t){if(t.tag===13){var i=rr(t),s=Ti(t,i);if(s!==null){var l=hn();ti(s,t,i,l)}Rc(t,i)}},Yf=function(){return pt},Kf=function(t,i){var s=pt;try{return pt=t,i()}finally{pt=s}},Re=function(t,i,s){switch(i){case"input":if(Lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var d=Ca(l);if(!d)throw Error(n(90));Ge(l),Lt(l,d)}}}break;case"textarea":he(t,s);break;case"select":i=s.value,i!=null&&Pt(t,!!s.multiple,i,!1)}},yt=wc,Nn=Ir;var a0={usingClientEntryPoint:!1,Events:[Mo,cs,Ca,Et,Yn,wc]},zo={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l0={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nt(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||s0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Vi=fl.inject(l0),mt=fl}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0,Mn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(n(200));return r0(t,i,null,s)},Mn.createRoot=function(t,i){if(!Pc(t))throw Error(n(299));var s=!1,l="",d=dp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ac(t,1,!1,null,null,s,!1,l,d),t[Si]=i.current,yo(t.nodeType===8?t.parentNode:t),new Lc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=nt(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return Ir(t)},Mn.hydrate=function(t,i,s){if(!ul(i))throw Error(n(200));return cl(null,t,i,!0,s)},Mn.hydrateRoot=function(t,i,s){if(!Pc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,d=!1,p="",w=dp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=cp(i,null,t,1,s??null,d,!1,p,w),t[Si]=i.current,yo(t),l)for(t=0;t<l.length;t++)s=l[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new ll(i)},Mn.render=function(t,i,s){if(!ul(i))throw Error(n(200));return cl(null,t,i,!1,s)},Mn.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Mn.unstable_batchedUpdates=wc,Mn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!ul(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,s,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var Sp;function v0(){if(Sp)return Nc.exports;Sp=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(e){console.error(e)}}return u(),Nc.exports=g0(),Nc.exports}var wp;function x0(){if(wp)return dl;wp=1;var u=v0();return dl.createRoot=u.createRoot,dl.hydrateRoot=u.hydrateRoot,dl}var _0=x0();const y0=Ym(_0);function S0({active:u}){const[e,n]=ue.useState(""),[r,o]=ue.useState("");return ue.useEffect(()=>{const a=()=>{const c=new Date;n(c.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),o(c.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"}))};a();const f=setInterval(a,1e3);return()=>clearInterval(f)},[]),D.jsxs("div",{className:`clock-screen ${u?"active":""}`,"aria-live":"polite",children:[D.jsx("div",{className:"clock-time",children:e}),D.jsx("div",{className:"clock-date",children:r}),D.jsxs("div",{className:"clock-comfort-card",children:[D.jsx("div",{className:"clock-comfort-title",children:"You are home, safe and loved."}),D.jsx("div",{className:"clock-comfort-subtitle",children:"Anchor is keeping watch. When a loved one walks in, we will remind you who they are."}),D.jsxs("div",{style:{marginTop:"14px",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(39,82,61,0.25)",border:"1px solid rgba(52,211,153,0.35)",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",color:"var(--primary-accent, #34d399)",fontWeight:500},children:[D.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981"}}),"🎙️ Voice & Vision Ready"]})]})]})}const w0={rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null,enabled:!0};let _i={...w0},Gs=null,M0=[];function ta(){return typeof window>"u"?null:window.speechSynthesis||null}function E0(){return ta()!==null}function Vs(u,e=""){console.log(`[TTS] ${u}${e?": "+e:""}`)}function T0(){const u=ta();if(!u)return null;const e=u.getVoices();if(!e||e.length===0)return null;if(_i.voiceName){const c=e.find(m=>m.name===_i.voiceName);if(c)return c}const n=_i.language||"en-US",r=n.split("-")[0],o=["Google US English","Google UK English Female","Microsoft Zira","Samantha","Karen","Daniel","Google हिन्दी"];for(const c of o){const m=e.find(h=>h.name.includes(c)&&h.lang.startsWith(r));if(m)return m}const a=e.find(c=>c.lang===n);if(a)return a;const f=e.find(c=>c.lang.startsWith(r));return f||e[0]||null}function Ho(u){for(const e of M0)try{e(u)}catch(n){console.error("[TTS] Speaking change listener error:",n)}}function hl(u,e={}){return new Promise(n=>{if(!_i.enabled||!E0()||!u||!u.trim()){n();return}const r=ta(),o=new SpeechSynthesisUtterance(u.trim());o.rate=e.rate??_i.rate,o.pitch=e.pitch??_i.pitch,o.volume=e.volume??_i.volume,o.lang=e.language??_i.language;const a=T0();a&&(o.voice=a),Gs=o,Ho(!0),Vs("TTS_STARTED",u.substring(0,60)+(u.length>60?"...":"")),o.onend=()=>{Gs=null,Ho(!1),Vs("TTS_COMPLETED"),n()},o.onerror=f=>{Gs=null,Ho(!1),f.error!=="interrupted"&&f.error!=="canceled"&&Vs("TTS_ERROR",f.error),n()};try{r.speak(o)}catch(f){Gs=null,Ho(!1),Vs("TTS_ERROR",f.message),n()}})}function pl(){const u=ta();if(u)try{u.cancel()}catch(e){Vs("TTS_ERROR","cancel failed: "+e.message)}Gs&&(Gs=null,Ho(!1),Vs("TTS_INTERRUPTED"))}function b0(u){_i={..._i,...u}}function C0(){const u=ta();return u?u.getVoices().map(e=>({name:e.name,lang:e.lang,default:e.default})):[]}const Mp="https://remindly-2-tqcx.onrender.com";function Df(){return typeof window>"u"?Mp:window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?window.location.port==="3000"?"http://localhost:8000":window.location.origin:window.location.hostname.includes("vercel.app")?Mp:window.location.origin}function A0(){const u=Df(),e=u.startsWith("https")?"wss:":"ws:",n=u.replace(/^https?:\/\//,"");return`${e}//${n}/ws`}function R0(){const u=Df(),e=u.startsWith("https")?"wss:":"ws:",n=u.replace(/^https?:\/\//,"");return`${e}//${n}/ws/remote_frame`}function Nt(u){const e=Df(),n=u.startsWith("/")?u:`/${u}`;return typeof window<"u"&&window.location.origin===e?n:`${e}${n}`}const L0={language:"en-US",silenceTimeoutMs:1800,maxListeningDurationMs:16e3,fallbackSliceMs:3500},mn={IDLE:"IDLE",LISTENING:"LISTENING",MUTED:"MUTED",PROCESSING:"PROCESSING",RESTARTING:"RESTARTING"};let En=mn.IDLE,vr=null,Kr=!1,Wr=null,zl=null,Hr=null,Ys={...L0},Zr=null,Qr=null,yr="",Vn=null,$o=null,Ol=null,Us=[];function If(){return typeof window>"u"?null:window.SpeechRecognition||window.webkitSpeechRecognition||null}function Ht(u,e=""){console.log(`[STT-Loop] ${u}${e?": "+e:""}`)}function P0(u={}){Ys={...Ys,...u}}function D0(){const u=If()!==null,e=typeof window<"u"&&!!window.MediaRecorder;return u||e}function Km(u,e){if(Zr=u||(()=>{}),Qr=e||(()=>{}),yr="",Kr){Ht("MUTED","Listening queued — muted for TTS"),En=mn.MUTED;return}ql(),En=mn.LISTENING;const n=If();n?Zm(n):(Ht("FALLBACK_MODE","Web Speech API not available — using Groq Whisper fallback"),Vl()),zl=setTimeout(()=>{Ht("MAX_DURATION_REACHED"),Nf()},Ys.maxListeningDurationMs)}function Uo(){Ht("STOP_REQUESTED"),ql(),En=mn.IDLE,yr=""}function zc(){Kr=!0,En===mn.LISTENING&&(Ht("MUTED_FOR_TTS"),ql(),En=mn.MUTED)}function Bo(){Kr=!1,En===mn.MUTED&&(Ht("UNMUTED","Resuming speech listening loop"),Zr||Qr?Km(Zr,Qr):En=mn.IDLE)}function Zm(u){try{const e=new u;vr=e,e.continuous=!0,e.interimResults=!0,e.lang=Ys.language,e.maxAlternatives=1;let n="";e.onstart=()=>{Ht("WEB_SPEECH_STARTED"),En=mn.LISTENING},e.onresult=r=>{if(En!==mn.LISTENING||Kr)return;I0();let o="";for(let f=r.resultIndex;f<r.results.length;f++){const c=r.results[f],m=c[0].transcript;c.isFinal?n+=m+" ":o+=m}const a=(n+o).trim();a&&(yr=a,Zr&&Zr(a,!1))},e.onerror=r=>{Ht("WEB_SPEECH_ERROR",r.error),r.error==="not-allowed"||r.error==="service-not-allowed"?(Ht("FALLBACK_TRIGGERED","Switching to Groq Whisper engine"),kf(),Vl()):r.error==="no-speech"||r.error==="network"&&(Ht("NETWORK_ERROR","Retrying speech recognition"),Ep(600))},e.onend=()=>{Ht("WEB_SPEECH_ENDED"),En===mn.LISTENING&&!Kr&&(yr.trim()?Nf():Ep(300))},e.start()}catch(e){Ht("WEB_SPEECH_INIT_FAILED",e.message),Vl()}}function Ep(u=300){Hr&&clearTimeout(Hr),!(En!==mn.LISTENING||Kr)&&(Hr=setTimeout(()=>{if(Hr=null,En===mn.LISTENING&&!Kr){kf();const e=If();e?Zm(e):Vl()}},u))}async function Vl(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Ht("MIC_UNAVAILABLE","No getUserMedia support");return}try{$o=await navigator.mediaDevices.getUserMedia({audio:!0}),Vn=new MediaRecorder($o),Us=[],Vn.ondataavailable=u=>{u.data&&u.data.size>0&&Us.push(u.data)},Vn.onstop=async()=>{if(Us.length===0)return;const u=new Blob(Us,{type:Vn.mimeType||"audio/webm"});if(Us=[],!(u.size<400||En!==mn.LISTENING))try{Ht("SENDING_TO_WHISPER",`${u.size} bytes`);const e=await fetch(Nt("/api/transcribe"),{method:"POST",headers:{"Content-Type":u.type||"audio/webm"},body:u});if(e.ok){const n=await e.json();if(n.success&&n.transcript){const r=n.transcript.trim();Ht("WHISPER_RESULT",r),yr=r,Zr&&Zr(r,!0),Qr&&Qr(r)}}}catch(e){Ht("WHISPER_FALLBACK_ERROR",e.message)}},Vn.start(),Ht("WHISPER_FALLBACK_RECORDING"),Ol=setTimeout(()=>{Vn&&Vn.state==="recording"&&Vn.stop()},Ys.fallbackSliceMs)}catch(u){Ht("MIC_PERMISSION_DENIED",u.message)}}function I0(){Wr&&clearTimeout(Wr),Wr=setTimeout(()=>{Wr=null,Ht("SILENCE_DETECTED",yr),yr.trim()&&Nf()},Ys.silenceTimeoutMs)}function Nf(){const u=yr.trim();ql(),En=mn.IDLE,u&&Qr&&Qr(u)}function kf(){if(vr){try{vr.onstart=null,vr.onresult=null,vr.onerror=null,vr.onend=null,vr.abort()}catch{}vr=null}}function N0(){if(Ol&&(clearTimeout(Ol),Ol=null),Vn&&Vn.state!=="inactive"){try{Vn.stop()}catch{}Vn=null}$o&&($o.getTracks().forEach(u=>u.stop()),$o=null),Us=[]}function ql(){Wr&&(clearTimeout(Wr),Wr=null),zl&&(clearTimeout(zl),zl=null),Hr&&(clearTimeout(Hr),Hr=null),kf(),N0()}const xr={IDENTITY:"IDENTITY",LAST_CONVERSATION:"LAST_CONVERSATION",MEMORY_QUERY:"MEMORY_QUERY",RELATIONSHIP:"RELATIONSHIP",REMINDER:"REMINDER",GENERAL:"GENERAL",UNKNOWN:"UNKNOWN"},k0=[{intent:xr.IDENTITY,patterns:[/who\s+is\s+(this|here|that)/i,/who('s| is)\s+this/i,/who\s+are\s+you/i,/do\s+i\s+know\s+(you|them|this)/i,/what('s| is)\s+(your|their|his|her)\s+name/i]},{intent:xr.LAST_CONVERSATION,patterns:[/what\s+did\s+\w+\s+tell\s+me/i,/what\s+did\s+we\s+talk\s+about/i,/what\s+did\s+(she|he|they)\s+(say|tell|mention)/i,/last\s+time/i,/last\s+visit/i,/what\s+happened\s+(last|before)/i,/what\s+were\s+we\s+(talking|discussing)/i]},{intent:xr.MEMORY_QUERY,patterns:[/when\s+did\s+i\s+(last\s+)?(see|meet|talk)/i,/tell\s+me\s+about/i,/what\s+about/i,/what\s+do\s+i\s+know\s+about/i,/do\s+you\s+(know|remember)\s+about/i]},{intent:xr.RELATIONSHIP,patterns:[/how\s+do\s+i\s+know/i,/is\s+\w+\s+my/i,/are\s+(they|you)\s+my/i,/what('s| is)\s+(my|our)\s+relationship/i,/(my|our)\s+(daughter|son|wife|husband|friend|sister|brother)/i]},{intent:xr.REMINDER,patterns:[/remind\s+me/i,/what('s| is)\s+next/i,/when\s+is/i,/what\s+do\s+i\s+(need|have)\s+to\s+do/i,/any\s+(plans|appointments)/i]}];function F0(u,e=null){if(!u||!u.trim())return{intent:xr.UNKNOWN,entities:{}};const n=u.trim().toLowerCase();for(const{intent:o,patterns:a}of k0)for(const f of a)if(f.test(n))return{intent:o,entities:Tp(n,e)};return n.split(/\s+/).filter(Boolean).length<2?{intent:xr.UNKNOWN,entities:{}}:{intent:xr.GENERAL,entities:Tp(n,e)}}function Tp(u,e){const n={};if(e&&e.name){const r=e.name.toLowerCase();u.includes(r)&&(n.personName=e.name,n.personId=e.person_id)}return n}const vt={IDLE:"IDLE",RECOGNIZED:"RECOGNIZED",INTRODUCING:"INTRODUCING",LISTENING:"LISTENING",THINKING:"THINKING",SPEAKING:"SPEAKING",VISITOR_LEFT:"VISITOR_LEFT"},z0=300*1e3,O0=500,U0=15e3,B0=20;function G0({recognizedPerson:u=null,ttsEnabled:e=!0,interactionEnabled:n=!0,autoListenEnabled:r=!0}={}){const[o,a]=ue.useState(vt.IDLE),[f,c]=ue.useState(""),[m,h]=ue.useState(""),v=ue.useRef({personId:null,timestamp:0}),g=ue.useRef(0),x=ue.useRef(null),S=ue.useRef(null),E=ue.useRef(!0),y=ue.useRef(null);ue.useEffect(()=>{y.current=u},[u]),ue.useEffect(()=>(E.current=!0,()=>{E.current=!1,pl(),Uo(),Bo(),_()}),[]);function _(){x.current&&(clearTimeout(x.current),x.current=null),S.current&&(clearTimeout(S.current),S.current=null)}ue.useEffect(()=>{if(!u){o!==vt.IDLE&&F();return}const M=(u.person_id||u.name||"").toLowerCase(),z=(u.name||"").toLowerCase(),Y=v.current,B=Y.key&&(Y.key===M||Y.name===z||Y.key===z),fe=Date.now()-Y.timestamp<z0;if(B&&fe){o===vt.IDLE&&a(vt.RECOGNIZED);return}v.current={key:M,name:z,timestamp:Date.now()},(o===vt.INTRODUCING||o===vt.SPEAKING)&&(pl(),Uo()),a(vt.RECOGNIZED),g.current=0,e&&T(u)},[u]);async function T(M){var se,q;if(!E.current)return;a(vt.INTRODUCING),zc();const z=M.name||"A loved one",Y=(M.relationship||"").trim().toLowerCase(),B=M.note||null;let fe;if(Y&&Y!=="visitor"&&Y!=="loved one"?fe=`${z} is here. They are your ${Y}.`:fe=`${z} is here.`,c(fe),await hl(fe),!(!E.current||((se=y.current)==null?void 0:se.person_id)!==M.person_id)){if(B&&!B.toLowerCase().includes("processing audio")&&!B.toLowerCase().includes("no speech detected")&&!B.toLowerCase().includes("no audio captured")){const ae=B.length>120?B.substring(0,120)+".":B;c(ae),await hl(ae)}!E.current||((q=y.current)==null?void 0:q.person_id)!==M.person_id||A()}}function A(){if(!n||!r){a(vt.RECOGNIZED),Bo();return}S.current=setTimeout(()=>{S.current=null,E.current&&y.current&&(Bo(),k())},O0)}function k(){if(!(!E.current||!y.current)){if(!D0()){a(vt.RECOGNIZED);return}if(g.current>=B0){a(vt.RECOGNIZED);return}a(vt.LISTENING),h(""),c(""),x.current=setTimeout(()=>{x.current=null,E.current&&o===vt.LISTENING&&(Uo(),a(vt.RECOGNIZED))},U0),Km((M,z)=>{E.current&&h(M)},M=>{x.current&&(clearTimeout(x.current),x.current=null),E.current&&M&&y.current?L(M,y.current):E.current&&a(vt.RECOGNIZED)})}}async function L(M,z){if(!E.current)return;a(vt.THINKING),h(M),g.current++;const{intent:Y}=F0(M,z);console.log(`[Interaction] PATIENT_QUERY: "${M}" → intent: ${Y}`);try{const B=await fetch(Nt("/api/patient/ask"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:M,person_id:z.person_id,patient_id:"00000000-0000-0000-0000-000000000001"})});if(!B.ok)throw new Error(`API error: ${B.status}`);const se=(await B.json()).answer||b(z);if(!E.current||!y.current||(a(vt.SPEAKING),c(se),zc(),await hl(se),!E.current||!y.current))return;A()}catch(B){if(console.error("[Interaction] Error processing patient question:",B),!E.current||!y.current)return;const fe=b(z);if(a(vt.SPEAKING),c(fe),zc(),await hl(fe),!E.current||!y.current)return;A()}}function b(M){const z=(M==null?void 0:M.name)||"Your visitor",Y=(M==null?void 0:M.relationship)||"";return Y&&Y.toLowerCase()!=="visitor"&&Y.toLowerCase()!=="loved one"?`${z} is here. They are your ${Y.toLowerCase()}.`:`${z} is here with you.`}function F(){_(),pl(),Uo(),Bo(),a(vt.VISITOR_LEFT),c(""),h(""),g.current=0,setTimeout(()=>{E.current&&a(vt.IDLE)},500)}const j=ue.useCallback(()=>{_(),pl(),Uo(),Bo(),a(vt.RECOGNIZED),c(""),h("")},[]);return{state:o,systemResponse:f,patientTranscript:m,stopInteraction:j}}function V0({person:u,active:e,interactionState:n=vt.RECOGNIZED,systemResponse:r="",patientTranscript:o=""}){if(!u)return null;const a=u.name||"A loved one",f=(u.relationship||"Loved One").trim(),c=/^(daughter|son|grandson|granddaughter|sister|brother|husband|wife|friend|caregiver|nurse)/i.test(f)?`Your ${f.toLowerCase()} 🌿`:`${f} 🌿`,m=u.note?`"${u.note}"`:"This is the start of your time together today.",h=(a[0]||"A").toUpperCase(),v=u.avatar_color||"var(--primary)";let g="Anchor is keeping watch",x="Remembering your conversation gently.",S="interaction-idle";switch(n){case vt.INTRODUCING:case vt.SPEAKING:g="Anchor is speaking",x="",S="interaction-speaking";break;case vt.LISTENING:g="Anchor is listening",x="You can ask me anything.",S="interaction-listening";break;case vt.THINKING:g="Let me think",x="",S="interaction-thinking";break;default:g="Anchor is listening with care",x="Remembering your conversation gently.",S="interaction-idle"}return D.jsxs("div",{className:`recognition-card ${e?"active":""}`,"aria-live":"assertive",children:[D.jsxs("div",{className:"visitor-header",children:[D.jsx("div",{className:"visitor-avatar-large",style:{background:v},children:h}),D.jsxs("div",{className:"visitor-meta",children:[D.jsx("h2",{children:a}),D.jsx("div",{className:"relationship-badge",children:c})]})]}),D.jsxs("div",{className:"memory-anchor-card",children:[D.jsx("div",{className:"memory-header-row",children:D.jsx("span",{children:"✨ Last Visit Memory"})}),D.jsx("div",{className:"memory-text",children:m})]}),r&&D.jsx("div",{className:"system-response-card","aria-live":"polite",children:D.jsx("div",{className:"system-response-text",children:r})}),o&&D.jsxs("div",{className:"patient-transcript-card","aria-live":"polite",children:[D.jsx("div",{className:"patient-transcript-label",children:"🗣️ You said:"}),D.jsxs("div",{className:"patient-transcript-text",children:['"',o,'"']})]}),D.jsx("div",{className:`listening-indicator-row ${S}`,children:D.jsxs("div",{className:"listening-left",children:[D.jsxs("div",{className:"soundwave-anim",children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]}),D.jsxs("div",{children:[D.jsx("div",{className:"listening-text",children:g}),x&&D.jsx("div",{className:"listening-subtext",children:x})]})]})})]})}const W0=700;function H0({recognizedPerson:u=null,speakAloud:e=!0,ttsSettings:n={},interactionEnabled:r=!0,autoListenEnabled:o=!0}){const[a,f]=ue.useState(null),[c,m]=ue.useState(!1),h=ue.useRef(null),v=a===null||!c;ue.useEffect(()=>{n&&(b0({rate:n.rate,pitch:n.pitch,volume:n.volume,language:n.language,voiceName:n.voiceName,enabled:n.ttsEnabled!==!1&&e!==!1}),P0({language:n.language}))},[n,e]);const{state:g,systemResponse:x,patientTranscript:S}=G0({recognizedPerson:u,ttsEnabled:e,interactionEnabled:r,autoListenEnabled:o});return ue.useEffect(()=>{h.current&&(clearTimeout(h.current),h.current=null),u?a===null?(f(u),m(!1),requestAnimationFrame(()=>m(!0))):(f(u),m(!0)):a!==null&&(m(!1),h.current=setTimeout(()=>{h.current=null,f(null)},W0))},[u]),ue.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]),D.jsx("section",{className:"patient-view-wrapper",children:D.jsxs("div",{className:"pv-root",children:[D.jsx(S0,{active:v}),a&&D.jsx(V0,{person:a,active:c,interactionState:g,systemResponse:x,patientTranscript:S})]})})}function j0({isVisitorPresent:u,visitorName:e}){const[n,r]=ue.useState("mjpeg"),[o,a]=ue.useState(Date.now()),[f,c]=ue.useState(Nt(`/api/camera_snapshot?t=${Date.now()}`)),[m,h]=ue.useState(!0),[v,g]=ue.useState(!1),[x,S]=ue.useState(!1),[E,y]=ue.useState(0),_=ue.useRef(null),T=ue.useRef(null),A=ue.useRef(null),k=ue.useRef(null),L=ue.useRef(null),[b,F]=ue.useState([]),[j,M]=ue.useState(0),[z,Y]=ue.useState(!1),B=ue.useRef(null),fe=ue.useCallback(async()=>{try{const ee=await fetch(Nt("/api/cameras"));if(ee.ok){const G=await ee.json();G.cameras&&Array.isArray(G.cameras)&&(F(G.cameras),G.active_camera!==void 0&&M(G.active_camera))}}catch(ee){console.warn("Failed to probe camera devices:",ee)}},[]);ue.useEffect(()=>{fe()},[fe]);const se=async ee=>{const G=parseInt(ee.target.value,10);if(!isNaN(G)){Y(!0);try{(await fetch(Nt("/api/camera_select"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_index:G})})).ok&&(M(G),setTimeout(()=>{a(Date.now()),c(Nt(`/api/camera_snapshot?t=${Date.now()}`)),h(!0),g(!1),Y(!1)},400))}catch(V){console.error("Camera switch error:",V),Y(!1)}}},q=async()=>{if(x){L.current&&clearInterval(L.current),k.current&&k.current.close(),A.current&&A.current.getTracks().forEach(ee=>ee.stop()),S(!1),y(0);return}try{const ee=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:15}},audio:!1});A.current=ee,_.current&&(_.current.srcObject=ee,_.current.play());const G=R0(),V=new WebSocket(G);V.binaryType="arraybuffer",k.current=V;let H=0,C=Date.now();const O=T.current||document.createElement("canvas");O.width=640,O.height=480;const K=O.getContext("2d");L.current=setInterval(()=>{!_.current||_.current.readyState<2||(K.drawImage(_.current,0,0,640,480),O.toBlob(de=>{de&&V.readyState===WebSocket.OPEN&&de.arrayBuffer().then(ge=>{V.send(ge),H++;const X=Date.now();X-C>=1e3&&(y(H),H=0,C=X)})},"image/jpeg",.65))},70),S(!0),h(!0),g(!1)}catch(ee){console.error("Failed to access browser camera:",ee),alert("Could not access camera: "+ee.message)}};ue.useEffect(()=>(n==="snapshot"?B.current=setInterval(()=>{c(Nt(`/api/camera_snapshot?t=${Date.now()}`))},100):B.current&&(clearInterval(B.current),B.current=null),()=>{B.current&&clearInterval(B.current)}),[n]);const ae=()=>{g(!1),h(!0),a(Date.now()),c(`/api/camera_snapshot?t=${Date.now()}`),fe()},te=()=>{g(!0),h(!1),setTimeout(()=>{g(!1),a(Date.now())},2500)};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[D.jsx("span",{children:"Live Camera Feed"}),D.jsx("span",{className:"badge",style:{background:u?"var(--primary-subtle)":m?"#e6f4ea":"#fef3c7",color:u?"var(--primary)":m?"#137333":"#d97706"},children:u?`Visitor: ${e}`:m?"🟢 Camera Active":"🟡 Connecting…"})]}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[D.jsx("label",{htmlFor:"cam-select",style:{fontSize:"11px",color:"var(--text-muted)",fontWeight:500},children:"📹"}),D.jsx("select",{id:"cam-select",className:"form-control",value:j,onChange:se,disabled:z,style:{padding:"3px 8px",fontSize:"11px",height:"26px",borderRadius:"var(--radius-sm)",background:"var(--surface-raised)",color:"var(--text)",borderColor:"var(--border)",cursor:"pointer"},title:"Select active camera device",children:b.length>0?b.map(ee=>D.jsx("option",{value:ee.index,children:ee.name},ee.index)):D.jsx("option",{value:0,children:"Camera 0 (Default)"})}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 6px",fontSize:"11px",height:"26px"},onClick:fe,title:"Rescan camera devices",children:"🔍"}),D.jsx("button",{type:"button",className:"btn",style:{padding:"3px 10px",fontSize:"11px",height:"26px",fontWeight:600,background:x?"var(--primary)":"var(--surface-raised)",color:x?"#0a1f14":"var(--primary)",border:"1px solid var(--primary)"},onClick:q,title:"Stream your device / browser webcam directly to Anchor cloud backend",children:x?`🟢 Streaming (${E} FPS)`:"📱 Stream Browser Cam"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:()=>r(n==="mjpeg"?"snapshot":"mjpeg"),title:"Switch streaming protocol if video is stuttering",children:n==="mjpeg"?"⚡ Live Stream":"📸 Snapshot Mode"}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:ae,title:"Reconnect video feed",children:"🔄 Reconnect"})]})]}),D.jsxs("div",{style:{background:"#0f1712",borderRadius:"var(--radius-sm)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"240px",position:"relative"},children:[D.jsx("video",{ref:_,playsInline:!0,muted:!0,style:{display:x?"block":"none",width:"100%",maxHeight:"280px",objectFit:"contain",transform:"scaleX(-1)"}}),!x&&(n==="mjpeg"?D.jsx("img",{src:Nt(`/video_feed?t=${o}`),alt:"Live Webcam Stream",onError:te,onLoad:()=>{h(!0),g(!1)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"280px"}},o):D.jsx("img",{src:f,alt:"Live Webcam Snapshot",onError:te,onLoad:()=>{h(!0),g(!1)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"280px"}})),z&&D.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(15, 23, 18, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",fontWeight:600,fontSize:"13px"},children:"📹 Switching Camera…"}),v&&!x&&D.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(15, 23, 18, 0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",color:"#f87171",fontSize:"12px",padding:"16px",textAlign:"center"},children:[D.jsx("span",{children:"⚠️ No server camera attached."}),D.jsx("button",{className:"btn btn-primary",style:{fontSize:"11px",padding:"4px 12px"},onClick:q,children:"📱 Enable Browser / Device Camera"})]})]}),D.jsxs("div",{style:{marginTop:"10px",fontSize:"11px",color:"var(--text-muted)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"6px"},children:[D.jsx("span",{children:x?"🟢 Live Video Streaming to Render Backend":"Face alignment & EAR liveness analysis active on backend."}),D.jsx("a",{href:"/capture",target:"_blank",rel:"noreferrer",style:{color:"var(--primary)",textDecoration:"none",fontWeight:500},children:"📱 Open Mobile Glasses / Cam Streamer →"})]})]})}function q0({transcript:u,isCapturing:e,onToggleListening:n,onAppendSpeech:r,onClearSpeech:o,statusBadgeText:a,liveSegments:f=[],partialSegment:c=null,visitDuration:m="00:00",statusState:h="idle"}){const[v,g]=ue.useState(""),x=ue.useRef(null),S=ue.useRef(!0),E=f.reduce((b,F)=>b+(F.text?F.text.split(/\s+/).filter(Boolean).length:0),0),y=()=>{const b=x.current;if(!b)return;const F=Math.abs(b.scrollHeight-b.clientHeight-b.scrollTop)<15;S.current=F};ue.useEffect(()=>{const b=x.current;b&&S.current&&(b.scrollTop=b.scrollHeight)},[f,c]);const _=()=>{v.trim()&&(r(v),g(""))},T=b=>{try{return new Date(b).toTimeString().split(" ")[0]}catch{return""}};let A="badge-gray",k="Standby";e||h==="listening"?(A="badge-green",k="🟢 Live Mic Listening"):h==="processing"?(A="badge-yellow",k="🟡 Transcribing Speech..."):h==="disconnected"?(A="badge-red",k="🔴 Speech Reconnecting..."):h==="denied"&&(A="badge-red",k="🔴 Microphone Denied");const L=f.length>0||c!==null;return D.jsxs("div",{className:"panel-card",children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Live Visit Monitor"}),D.jsx("span",{className:`badge ${A}`,style:{marginLeft:"8px"},children:a||k})]}),n&&D.jsx("button",{className:`btn ${e?"btn-danger":"btn-primary"}`,style:{padding:"6px 12px",fontSize:"12px",borderRadius:"8px"},onClick:n,children:e?"🛑 Stop Mic":"🎙️ Enable Live Mic"})]}),D.jsxs("div",{className:"transcript-stats",style:{display:"flex",gap:"16px",marginBottom:"10px",fontSize:"12px",color:"var(--text-muted)"},children:[D.jsxs("span",{children:["Words Transcribed: ",D.jsx("strong",{style:{color:"var(--text)"},children:E})]}),D.jsxs("span",{children:["Duration: ",D.jsx("strong",{style:{color:"var(--text)"},children:m})]}),D.jsxs("span",{children:["Engine: ",D.jsx("strong",{style:{color:"var(--primary-accent, #34d399)"},children:"Dual (WebSpeech + Groq Whisper)"})]})]}),D.jsx("label",{children:"Real-Time Speech Transcript"}),D.jsx("div",{className:"transcript-box",ref:x,onScroll:y,style:{scrollBehavior:"smooth",minHeight:"180px",maxHeight:"280px",overflowY:"auto",background:"var(--surface-raised, #18261f)",border:"1px solid var(--border)",borderRadius:"10px",padding:"12px",marginBottom:"14px"},children:L?D.jsxs("div",{className:"transcript-list",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[f.map(b=>D.jsxs("div",{className:"transcript-segment",style:{background:"rgba(39, 82, 61, 0.2)",borderLeft:"3px solid var(--primary-accent, #34d399)",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",lineHeight:"1.4"},children:[b.timestamp&&D.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",T(b.timestamp),"]"]}),D.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,color:"var(--primary-accent, #34d399)",marginRight:"6px"},children:[b.speaker,":"]}),D.jsx("span",{className:"transcript-text",style:{color:"var(--text)"},children:b.text})]},b.segment_id)),c&&D.jsxs("div",{className:"transcript-segment partial-line",style:{background:"rgba(245, 158, 11, 0.15)",borderLeft:"3px solid #f59e0b",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",fontStyle:"italic",color:"#fbbf24"},children:[c.timestamp&&D.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",T(c.timestamp),"]"]}),D.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,marginRight:"6px"},children:[c.speaker,":"]}),D.jsxs("span",{className:"transcript-text partial-text",children:[c.text,"…"]})]},"partial")]}):D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"140px",color:"var(--text-muted)",textAlign:"center",gap:"8px"},children:[D.jsx("span",{style:{fontSize:"24px"},children:"🎙️"}),D.jsx("span",{className:"transcript-empty",style:{fontSize:"13px"},children:e?"Listening... Speak into your microphone now.":"Microphone is on standby. Speak or click 'Enable Live Mic' / simulate arrival above."})]})}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"typedSpeechInput",children:"Add Spoken Line (Demo & Testing)"}),D.jsxs("div",{style:{display:"flex",gap:"8px"},children:[D.jsx("input",{id:"typedSpeechInput",type:"text",value:v,onChange:b=>g(b.target.value),onKeyDown:b=>{b.key==="Enter"&&_()},placeholder:"e.g. Priya: I brought some fresh strawberries from the farmer's market!",style:{flex:1,padding:"9px 12px",background:"var(--bg, #0b120e)",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text)",fontSize:"13px",outline:"none"}}),D.jsx("button",{className:"btn btn-primary",style:{padding:"8px 16px",whiteSpace:"nowrap"},onClick:_,children:"Add Line"}),D.jsx("button",{className:"btn btn-secondary",style:{padding:"8px 12px"},onClick:o,children:"Clear"})]})]})]})}function X0({onSimulateArrive:u,onSimulateLeave:e,onForceSummarize:n}){return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Visit Simulator"}),D.jsx("span",{className:"badge",children:"Demo Mode"})]}),D.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Simulate face detection events instantly without requiring a physical camera."}),D.jsxs("div",{className:"btn-row",style:{marginBottom:"12px"},children:[D.jsx("button",{className:"btn btn-primary",onClick:()=>u("priya"),children:"Simulate Priya Arriving"}),D.jsx("button",{className:"btn btn-secondary",onClick:()=>u("tom"),children:"Simulate Tom Arriving"}),D.jsx("button",{className:"btn btn-secondary",onClick:()=>u("maya"),children:"Simulate Maya Arriving"})]}),D.jsxs("div",{className:"btn-row",style:{borderTop:"1px solid var(--border)",paddingTop:"12px"},children:[D.jsx("button",{className:"btn btn-amber",onClick:e,children:"Person Leaves (Summarize & Save)"}),D.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Force Summarize Now"})]})]})}function $0({profiles:u,onAddPerson:e,onDeletePerson:n,onRegisterFace:r,onClearEncodings:o}){const[a,f]=ue.useState(!1),[c,m]=ue.useState(""),[h,v]=ue.useState(""),[g,x]=ue.useState(""),[S,E]=ue.useState(""),[y,_]=ue.useState(!0),[T,A]=ue.useState(null),[k,L]=ue.useState(null),[b,F]=ue.useState("info");ue.useRef({});const j=(B,fe="info")=>{L(B),F(fe),setTimeout(()=>{L(null)},4500)},M=async(B,fe)=>{A(B),j(`Scanning webcam frame for ${fe}…`,"info");try{const se=await r(B,null);se.success?j(`✅ ${se.message}`,"success"):j(`⚠️ ${se.error}`,"error")}catch(se){j(`❌ Error registering face: ${se.message}`,"error")}finally{A(null)}},z=async(B,fe,se)=>{if(!se)return;A(B),j(`Processing photo for ${fe}…`,"info");const q=new FileReader;q.onload=async ae=>{try{const te=ae.target.result,ee=await r(B,te);ee.success?j(`✅ ${ee.message}`,"success"):j(`⚠️ ${ee.error}`,"error")}catch(te){j(`❌ Error: ${te.message}`,"error")}finally{A(null)}},q.readAsDataURL(se)},Y=async B=>{if(B.preventDefault(),!h.trim())return;const fe=(c||h).trim().toLowerCase().replace(/\s+/g,"_");try{await e({person_id:fe,name:h.trim(),relationship:g.trim()||"Loved One",note:S.trim()||null}),y?await M(fe,h.trim()):j(`✅ Profile for ${h} created.`,"success"),f(!1),m(""),v(""),x(""),E("")}catch(se){j(`❌ Failed to save profile: ${se.message}`,"error")}};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Registered Loved Ones"}),D.jsx("button",{className:"btn btn-primary",style:{padding:"5px 12px",fontSize:"12px"},onClick:()=>f(!0),children:"+ Add Person"})]}),k&&D.jsx("div",{style:{padding:"10px 14px",borderRadius:"var(--radius-sm)",marginBottom:"14px",fontSize:"13px",fontWeight:500,background:b==="success"?"#e6f4ea":b==="error"?"#fce8e6":"#e8f0fe",color:b==="success"?"#137333":b==="error"?"#c5221f":"#1a73e8",border:`1px solid ${b==="success"?"#ceead6":b==="error"?"#fad2cf":"#d2e3fc"}`},children:k}),D.jsx("div",{className:"roster-grid",children:u.map(B=>{const fe=(B.name||"A")[0].toUpperCase(),se=B.avatar_color||"var(--primary)",q=B.encodings_count||0,ae=T===B.person_id;return D.jsxs("div",{className:"profile-card",children:[D.jsxs("div",{className:"profile-card-header",children:[D.jsx("div",{className:"profile-avatar",style:{background:se},children:fe}),D.jsxs("div",{className:"profile-info",children:[D.jsx("h3",{children:B.name}),D.jsx("p",{children:B.relationship})]})]}),D.jsxs("div",{className:"profile-note-preview",children:['"',B.note||"No memory recorded yet.",'"']}),D.jsxs("div",{style:{background:"var(--surface-raised)",padding:"10px",borderRadius:"var(--radius-sm)",marginBottom:"10px",border:"1px solid var(--border)"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",fontSize:"12px"},children:[D.jsx("span",{style:{fontWeight:600,color:q>0?"#137333":"var(--amber-warm)"},children:q>0?`🟢 ${q} Face Snapshot${q>1?"s":""} Enrolled`:"⚠️ 0 Encodings (Webcam won't recognize)"}),q>0&&D.jsx("button",{type:"button",style:{background:"none",border:"none",color:"var(--text-light)",cursor:"pointer",fontSize:"11px",textDecoration:"underline"},onClick:()=>o(B.person_id),children:"Clear"})]}),D.jsxs("div",{className:"btn-row",style:{gap:"6px"},children:[D.jsx("button",{className:"btn btn-primary",style:{padding:"5px 10px",fontSize:"11px",flex:1},disabled:ae,onClick:()=>M(B.person_id,B.name),title:"Face the camera and click to record your face",children:ae?"Scanning…":"📸 Capture Face"}),D.jsxs("label",{className:"btn btn-secondary",style:{padding:"5px 10px",fontSize:"11px",cursor:"pointer",margin:0},title:"Upload a clear photo with the person's face",children:["📁 Photo",D.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:te=>{var ee;(ee=te.target.files)!=null&&ee[0]&&(z(B.person_id,B.name,te.target.files[0]),te.target.value="")}})]})]})]}),D.jsxs("div",{className:"profile-card-actions",children:[D.jsxs("span",{style:{color:"var(--text-light)",fontSize:"11px"},children:["ID: ",B.person_id]}),D.jsx("button",{className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px"},onClick:()=>{confirm(`Remove ${B.name} from the loved ones roster?`)&&n(B.person_id)},children:"Delete"})]})]},B.person_id)})}),a&&D.jsx("div",{className:"modal-overlay",children:D.jsxs("div",{className:"panel-card",style:{width:"100%",maxWidth:"480px",boxShadow:"var(--shadow-lg)"},children:[D.jsx("h2",{children:"Register Loved One"}),D.jsxs("form",{onSubmit:Y,children:[D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpPersonId",children:"Unique ID (e.g. sarah)"}),D.jsx("input",{type:"text",id:"inpPersonId",value:c,onChange:B=>m(B.target.value),placeholder:"sarah",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpName",children:"Full Name"}),D.jsx("input",{type:"text",id:"inpName",value:h,onChange:B=>v(B.target.value),placeholder:"Sarah Jenkins",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpRelationship",children:"Relationship to Patient"}),D.jsx("input",{type:"text",id:"inpRelationship",value:g,onChange:B=>x(B.target.value),placeholder:"Sister / Niece / Neighbor",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpInitialNote",children:"Initial Memory Note (Optional)"}),D.jsx("textarea",{id:"inpInitialNote",value:S,onChange:B=>E(B.target.value),placeholder:"Sarah came over for lunch and brought blueberry muffins."})]}),D.jsxs("div",{style:{background:"var(--primary-subtle)",padding:"10px 12px",borderRadius:"var(--radius-sm)",marginBottom:"14px"},children:[D.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",fontWeight:600,margin:0},children:[D.jsx("input",{type:"checkbox",checked:y,onChange:B=>_(B.target.checked)}),"📸 Take face snapshot from webcam now"]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-muted)",marginTop:"4px",paddingLeft:"22px"},children:"Make sure the person is facing the camera when clicking Save."})]}),D.jsxs("div",{className:"btn-row",style:{justifyContent:"flex-end",marginTop:"18px"},children:[D.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>f(!1),children:"Cancel"}),D.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save Profile"})]})]})]})})]})}const jo={apiKey:"",endpoint:Nt("/api/groq"),model:"groq/compound-mini",maxTokens:60,temperature:.7},Y0=3;function K0(u){const e=(u||"").trim().match(/\S+/g);return e?e.length:0}function Qm(u){return u&&(u.name||u.person_id)||"someone"}function Z0(u){return`You had a visit with ${Qm(u)}.`}function Q0(){return"You are the memory writer for Anchor, a dementia-care companion. You write a single warm, gentle sentence that reminds the patient of the visit they just had. You never write clinical notes, meeting minutes, bullet lists, or evaluations, and you never mention that you are an AI."}function J0(u,e){return[`${Qm(u)} just finished a visit with the patient. Here is a rough, imperfect speech-to-text transcript of their conversation:`,"",'"""',e,'"""',"","Write ONE short, warm sentence (roughly 15-25 words) that gently reminds the patient of this visit — what they did or talked about together. It should feel like a caring note from the visit, not a recap, a report, or a list.","Respond with ONLY that single sentence. No quotes, no prefixes, no explanations, no extra text."].join(`
`)}function ex(u){var o;if(!u||!Array.isArray(u.choices)||u.choices.length===0)return"";let n=(((o=u.choices[0].message)==null?void 0:o.content)||"").trim();(n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'"))&&(n=n.slice(1,-1).trim());const r=n.match(/^[^.!?]*[.!?]["']?/);return r&&(n=r[0]),n.trim().replace(/^["']+|["']+$/g,"")}async function tx(u,e){const{apiKey:n,endpoint:r,model:o,maxTokens:a,temperature:f}=jo,c={"Content-Type":"application/json"};n&&(c.Authorization=`Bearer ${n}`);let m;try{m=await fetch(r||"/api/groq",{method:"POST",headers:c,body:JSON.stringify({model:o||"groq/compound-mini",max_tokens:a||60,temperature:f??.7,messages:[{role:"system",content:Q0()},{role:"user",content:J0(u,e)}]})})}catch{return""}if(!m.ok)return"";let h;try{h=await m.json()}catch{return""}return ex(h)}async function nx(u,e){const n=(e||"").trim();return K0(n)<Y0?null:await tx(u,n)||Z0(u)}function ix({ttsSettings:u={},onTtsSettingsChange:e}){const[n,r]=ue.useState(jo.apiKey||""),[o,a]=ue.useState(jo.model||"llama-3.3-70b-versatile"),[f,c]=ue.useState([]);ue.useEffect(()=>{const g=()=>{const x=C0();c(x)};g(),typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=g)},[]);const m=g=>{const x=g.target.value;r(x),jo.apiKey=x.trim()},h=g=>{const x=g.target.value;a(x),jo.model=x},v=(g,x)=>{e&&e(S=>({...S,[g]:x}))};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"AI Summarizer Settings"}),D.jsx("span",{className:"badge",children:"Groq LLaMA 3.3"})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgApiKey",children:"Custom Groq API Key (Optional)"}),D.jsx("input",{type:"password",id:"cfgApiKey",value:n,onChange:m,placeholder:"Leave empty to use server-side backend key"}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Server has a built-in proxy key. Entering a key here overrides it for this browser."})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgModel",children:"Summarizer Model"}),D.jsxs("select",{id:"cfgModel",value:o,onChange:h,children:[D.jsx("option",{value:"llama-3.3-70b-versatile",children:"LLaMA 3.3 70B Versatile (Recommended)"}),D.jsx("option",{value:"llama-3.1-8b-instant",children:"LLaMA 3.1 8B Instant (Ultra Fast)"}),D.jsx("option",{value:"mixtral-8x7b-32768",children:"Mixtral 8x7B"})]})]}),D.jsxs("h2",{style:{marginTop:"24px"},children:[D.jsx("span",{children:"Voice & Interaction"}),D.jsx("span",{className:"badge",children:"Patient TTS"})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.ttsEnabled!==!1,onChange:g=>v("ttsEnabled",g.target.checked)}),D.jsx("span",{children:"Text-to-Speech Enabled"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"When enabled, Anchor speaks visitor introductions and answers aloud."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.interactionEnabled!==!1,onChange:g=>v("interactionEnabled",g.target.checked)}),D.jsx("span",{children:"Patient Voice Interaction"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Allow the patient to ask questions using their voice."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.autoListenEnabled!==!1,onChange:g=>v("autoListenEnabled",g.target.checked)}),D.jsx("span",{children:"Auto-Listen After Speaking"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Automatically listen for patient questions after Anchor speaks."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgRate",children:["Speech Speed: ",(u.rate||.85).toFixed(2),"×"]}),D.jsx("input",{type:"range",id:"cfgRate",min:"0.5",max:"1.5",step:"0.05",value:u.rate||.85,onChange:g=>v("rate",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgVolume",children:["Volume: ",Math.round((u.volume||1)*100),"%"]}),D.jsx("input",{type:"range",id:"cfgVolume",min:"0.1",max:"1.0",step:"0.05",value:u.volume||1,onChange:g=>v("volume",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgPitch",children:["Pitch: ",(u.pitch||1).toFixed(2)]}),D.jsx("input",{type:"range",id:"cfgPitch",min:"0.5",max:"1.5",step:"0.05",value:u.pitch||1,onChange:g=>v("pitch",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgLanguage",children:"Language"}),D.jsxs("select",{id:"cfgLanguage",value:u.language||"en-US",onChange:g=>v("language",g.target.value),children:[D.jsx("option",{value:"en-US",children:"English (US)"}),D.jsx("option",{value:"en-GB",children:"English (UK)"}),D.jsx("option",{value:"en-IN",children:"English (India)"}),D.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी)"})]})]}),f.length>0&&D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgVoice",children:"Voice"}),D.jsxs("select",{id:"cfgVoice",value:u.voiceName||"",onChange:g=>v("voiceName",g.target.value||null),children:[D.jsx("option",{value:"",children:"Auto-select best voice"}),f.map(g=>D.jsxs("option",{value:g.name,children:[g.name," (",g.lang,")",g.default?" ★":""]},g.name))]})]}),D.jsxs("div",{className:"status-pill",style:{width:"100%",justifyContent:"center"},children:[D.jsx("span",{className:"status-dot active"}),D.jsx("span",{children:"AI Summarizer Ready"})]})]})}let en=null,Yo=null,Ul=null,Ko=null,bt=null,oi=null,Wl=null,Sf=null,Jm=null;const rx=12,sx=.7;function eg(){return typeof window<"u"&&window.Peer?window.Peer:null}function ox(u={}){if(Sf=u.onStatusChange||(()=>{}),Jm=u.onPeerIdReady||(()=>{}),Ko="anchor-"+Math.random().toString(36).slice(2,8),Fi("initializing","Setting up pairing…"),en&&!en.destroyed&&en.destroy(),!eg()){const n=document.createElement("script");n.src="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",n.onload=()=>{bp(Ko)},n.onerror=()=>{Fi("error","Failed to load PeerJS library")},document.head.appendChild(n);return}bp(Ko)}function bp(u){const e=eg();if(!e){Fi("error","PeerJS unavailable");return}en=new e(u),en.on("open",n=>{console.log("[WearablePairing] Peer open with ID:",n),Ko=n,Fi("waiting","Waiting for capture device…"),Jm(n)}),en.on("call",n=>{console.log("[WearablePairing] Incoming call from:",n.peer),ax(n)}),en.on("error",n=>{console.error("[WearablePairing] Peer error:",n),n.type==="network"?Fi("error","Network error — will retry"):Fi("error",`Error: ${n.type}`)}),en.on("disconnected",()=>{console.log("[WearablePairing] Disconnected from signaling server"),en&&!en.destroyed&&setTimeout(()=>{en&&!en.destroyed&&en.reconnect()},2e3)})}function Cp(){Ff(),Yo&&(Yo.close(),Yo=null),en&&!en.destroyed&&en.destroy(),en=null,Ko=null,tg(),Fi("idle","Pairing stopped")}function ax(u){Yo=u,u.answer(),u.on("stream",e=>{console.log("[WearablePairing] Received remote media stream"),Fi("connected","Wearable camera connected ✓"),lx(e)}),u.on("close",()=>{console.log("[WearablePairing] Call closed"),Oc()}),u.on("error",e=>{console.error("[WearablePairing] Call error:",e),Oc()}),u.peerConnection&&u.peerConnection.addEventListener("connectionstatechange",()=>{const e=u.peerConnection.connectionState;(e==="disconnected"||e==="failed")&&Oc()})}function Oc(){Ff(),Yo=null,Fi("waiting","Capture device disconnected — waiting for reconnect…")}function lx(u){Ff(),bt=document.createElement("video"),bt.srcObject=u,bt.autoplay=!0,bt.playsInline=!0,bt.muted=!0,bt.style.cssText="position:fixed;top:0;left:0;width:320px;height:240px;opacity:0.01;pointer-events:none;z-index:-999;",document.body.appendChild(bt),oi=document.createElement("canvas"),oi.width=640,oi.height=480,Wl=oi.getContext("2d");const e=()=>{bt.play().catch(r=>console.warn("[WearablePairing] relayVideo.play error:",r))};bt.addEventListener("loadedmetadata",()=>{bt.videoWidth>0&&bt.videoHeight>0&&(oi.width=bt.videoWidth,oi.height=bt.videoHeight),e()}),e();const n=Math.round(1e3/rx);Ul=setInterval(()=>ux(),n)}function Ff(){Ul&&(clearInterval(Ul),Ul=null),tg()}function tg(){bt&&(bt.srcObject=null,bt.remove(),bt=null),oi=null,Wl=null}async function ux(){if(!(!bt||bt.readyState<2||!Wl)){oi.width!==bt.videoWidth&&bt.videoWidth>0&&(oi.width=bt.videoWidth,oi.height=bt.videoHeight),Wl.drawImage(bt,0,0);try{const u=await new Promise(e=>{oi.toBlob(e,"image/jpeg",sx)});if(!u||u.size<100)return;fetch(Nt("/api/remote_frame"),{method:"POST",headers:{"Content-Type":"image/jpeg"},body:u}).catch(e=>{console.warn("[WearablePairing] Frame relay POST failed:",e.message)})}catch(u){console.warn("[WearablePairing] Frame extraction error:",u)}}}function Fi(u,e){console.log(`[WearablePairing] Status: ${u} — ${e}`),Sf&&Sf(u,e)}function cx(){const[u,e]=ue.useState("idle"),[n,r]=ue.useState(""),[o,a]=ue.useState(""),f=ue.useRef(null);ue.useEffect(()=>()=>{Cp()},[]);const c=()=>{ox({onPeerIdReady:h=>{r(h),window.QRCode&&f.current&&window.QRCode.toCanvas(f.current,h,{width:160,margin:2,color:{dark:"#163024",light:"#ffffff"}},v=>{v&&console.error("QR Code generation error:",v)})},onStatusChange:(h,v)=>{e(h),a(v)}})},m=()=>{Cp(),e("idle"),r(""),a("")};return D.jsxs("div",{className:`panel-card wearable-panel ${u==="connected"?"paired":""}`,children:[D.jsxs("h2",{children:[D.jsx("span",{children:"📷 Wearable Camera"}),D.jsx("span",{className:"badge",style:{background:u==="connected"?"var(--primary)":void 0,color:u==="connected"?"white":void 0},children:u==="connected"?"Connected ✓":u==="waiting"?"Pairing…":"Not Connected"})]}),D.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Pair a phone or wearable camera to stream video for face recognition instead of the built-in webcam."}),u==="idle"&&D.jsx("div",{children:D.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"100%"},onClick:c,children:"Connect Wearable Camera"})}),(u==="waiting"||u==="initializing")&&D.jsxs("div",{children:[D.jsx("div",{className:"qr-container",children:D.jsx("canvas",{ref:f,style:{width:160,height:160}})}),D.jsxs("div",{className:"pairing-code-display",children:[D.jsx("label",{style:{textAlign:"center",display:"block"},children:"Pairing Code"}),D.jsx("div",{className:"pairing-code",children:n||"------"})]}),D.jsxs("div",{className:"wearable-status",children:[D.jsx("span",{className:"wearable-status-dot waiting"}),D.jsx("span",{children:o||"Waiting for capture device…"})]}),D.jsxs("p",{style:{fontSize:"11px",color:"var(--text-light)",textAlign:"center",marginTop:"10px"},children:["On the capture device, open ",D.jsx("strong",{children:"http://<this-ip>:8000/capture"})," and enter the code above."]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Cancel Pairing"})]}),u==="connected"&&D.jsxs("div",{children:[D.jsxs("div",{className:"wearable-status connected",children:[D.jsx("span",{className:"wearable-status-dot connected"}),D.jsx("span",{children:"Wearable camera streaming ✓"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Disconnect Wearable"})]}),u==="error"&&D.jsxs("div",{children:[D.jsxs("div",{className:"wearable-status",children:[D.jsx("span",{className:"wearable-status-dot error"}),D.jsx("span",{children:o||"Pairing error"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Retry Pairing"})]})]})}function fx({isVisitorPresent:u,activePerson:e,transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:f,onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E,ttsSettings:y,onTtsSettingsChange:_,liveSegments:T=[],partialSegment:A=null,visitDuration:k="00:00",statusState:L="idle"}){const b=(e==null?void 0:e.name)||"None";return D.jsxs("section",{className:"caregiver-view",children:[D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[D.jsx(j0,{isVisitorPresent:u,visitorName:b}),D.jsx(q0,{transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:f,statusBadgeText:u?`In Visit with ${b}`:null,liveSegments:T,partialSegment:A,visitDuration:k,statusState:L}),D.jsx(X0,{onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h})]}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[D.jsx($0,{profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E}),D.jsx(cx,{}),D.jsx(ix,{ttsSettings:y,onTtsSettingsChange:_})]})]})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="143",dx=0,Ap=1,hx=2,ng=1,px=2,Ws=3,Zo=0,ui=1,Ks=2,mx=1,_r=0,qs=1,Qo=2,Rp=3,Lp=4,gx=5,Bs=100,vx=101,xx=102,Pp=103,Dp=104,_x=200,yx=201,Sx=202,wx=203,ig=204,rg=205,Mx=206,Ex=207,Tx=208,bx=209,Cx=210,Ax=0,Rx=1,Lx=2,wf=3,Px=4,Dx=5,Ix=6,Nx=7,sg=0,kx=1,Fx=2,Oi=0,zx=1,Ox=2,Ux=3,Bx=4,Gx=5,og=300,Zs=301,Qs=302,Mf=303,Ef=304,Xl=306,Tf=1e3,ai=1001,bf=1002,un=1003,Ip=1004,Np=1005,Wn=1006,Vx=1007,$l=1008,Jr=1009,Wx=1010,Hx=1011,ag=1012,jx=1013,jr=1014,qr=1015,Jo=1016,qx=1017,Xx=1018,Xs=1020,$x=1021,Yx=1022,li=1023,Kx=1024,Zx=1025,$r=1026,Js=1027,Qx=1028,Jx=1029,e_=1030,t_=1031,n_=1033,Uc=33776,Bc=33777,Gc=33778,Vc=33779,kp=35840,Fp=35841,zp=35842,Op=35843,i_=36196,Up=37492,Bp=37496,Gp=37808,Vp=37809,Wp=37810,Hp=37811,jp=37812,qp=37813,Xp=37814,$p=37815,Yp=37816,Kp=37817,Zp=37818,Qp=37819,Jp=37820,em=37821,tm=36492,es=3e3,It=3001,r_=3200,s_=3201,o_=0,a_=1,Ni="srgb",Xr="srgb-linear",Wc=7680,l_=519,nm=35044,im="300 es",Cf=1035;class to{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,f=o.length;a<f;a++)o[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,rm=180/Math.PI;function na(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(an[u&255]+an[u>>8&255]+an[u>>16&255]+an[u>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]).toLowerCase()}function Dn(u,e,n){return Math.max(e,Math.min(n,u))}function u_(u,e){return(u%e+e)%e}function jc(u,e,n){return(1-n)*u+n*e}function sm(u){return(u&u-1)===0&&u!==0}function Af(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),a=this.x-e.x,f=this.y-e.y;return this.x=a*r-f*o+e.x,this.y=a*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(){jn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,r,o,a,f,c,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=c,v[3]=n,v[4]=a,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,f=r[0],c=r[3],m=r[6],h=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],y=o[0],_=o[3],T=o[6],A=o[1],k=o[4],L=o[7],b=o[2],F=o[5],j=o[8];return a[0]=f*y+c*A+m*b,a[3]=f*_+c*k+m*F,a[6]=f*T+c*L+m*j,a[1]=h*y+v*A+g*b,a[4]=h*_+v*k+g*F,a[7]=h*T+v*L+g*j,a[2]=x*y+S*A+E*b,a[5]=x*_+S*k+E*F,a[8]=x*T+S*L+E*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8];return n*f*v-n*c*h-r*a*v+r*c*m+o*a*h-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=v*f-c*h,x=c*m-v*a,S=h*a-f*m,E=n*g+r*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=g*y,e[1]=(o*h-v*r)*y,e[2]=(c*r-o*f)*y,e[3]=x*y,e[4]=(v*n-o*m)*y,e[5]=(o*a-c*n)*y,e[6]=S*y,e[7]=(r*m-h*n)*y,e[8]=(f*n-r*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,a,f,c){const m=Math.cos(a),h=Math.sin(a);return this.set(r*m,r*h,-r*(m*f+h*c)+f+e,-o*h,o*m,-o*(-h*f+m*c)+c+n,0,0,1),this}scale(e,n){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=n,r[4]*=n,r[7]*=n,this}rotate(e){const n=Math.cos(e),r=Math.sin(e),o=this.elements,a=o[0],f=o[3],c=o[6],m=o[1],h=o[4],v=o[7];return o[0]=n*a+r*m,o[3]=n*f+r*h,o[6]=n*c+r*v,o[1]=-r*a+n*m,o[4]=-r*f+n*h,o[7]=-r*c+n*v,this}translate(e,n){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=n*r[2],r[4]+=n*r[5],r[7]+=n*r[8],this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function lg(u){for(let e=u.length-1;e>=0;--e)if(u[e]>65535)return!0;return!1}function Hl(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function Yr(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function Bl(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const qc={[Ni]:{[Xr]:Yr},[Xr]:{[Ni]:Bl}},ni={legacyMode:!0,get workingColorSpace(){return Xr},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,n){if(this.legacyMode||e===n||!e||!n)return u;if(qc[e]&&qc[e][n]!==void 0){const r=qc[e][n];return u.r=r(u.r),u.g=r(u.g),u.b=r(u.b),u}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}},ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={r:0,g:0,b:0},ii={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Xc(u,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?u+(e-u)*6*n:n<1/2?e:n<2/3?u+(e-u)*6*(2/3-n):u}function gl(u,e){return e.r=u.r,e.g=u.g,e.b=u.b,e}class ft{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&r===void 0?this.set(e):this.setRGB(e,n,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ni.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Xr){return this.r=e,this.g=n,this.b=r,ni.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Xr){if(e=u_(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,f=2*r-a;this.r=Xc(f,a,e+1/3),this.g=Xc(f,a,e),this.b=Xc(f,a,e-1/3)}return ni.toWorkingColorSpace(this,o),this}setStyle(e,n=Ni){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const f=o[1],c=o[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ni.toWorkingColorSpace(this,n),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ni.toWorkingColorSpace(this,n),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(a[1])/360,h=parseInt(a[2],10)/100,v=parseInt(a[3],10)/100;return r(a[4]),this.setHSL(m,h,v,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],f=a.length;if(f===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ni.toWorkingColorSpace(this,n),this;if(f===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ni.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Ni){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return ni.fromWorkingColorSpace(gl(this,Wt),e),Dn(Wt.r*255,0,255)<<16^Dn(Wt.g*255,0,255)<<8^Dn(Wt.b*255,0,255)<<0}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xr){ni.fromWorkingColorSpace(gl(this,Wt),n);const r=Wt.r,o=Wt.g,a=Wt.b,f=Math.max(r,o,a),c=Math.min(r,o,a);let m,h;const v=(c+f)/2;if(c===f)m=0,h=0;else{const g=f-c;switch(h=v<=.5?g/(f+c):g/(2-f-c),f){case r:m=(o-a)/g+(o<a?6:0);break;case o:m=(a-r)/g+2;break;case a:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=Xr){return ni.fromWorkingColorSpace(gl(this,Wt),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ni){return ni.fromWorkingColorSpace(gl(this,Wt),e),e!==Ni?`color(${e} ${Wt.r} ${Wt.g} ${Wt.b})`:`rgb(${Wt.r*255|0},${Wt.g*255|0},${Wt.b*255|0})`}offsetHSL(e,n,r){return this.getHSL(ii),ii.h+=e,ii.s+=n,ii.l+=r,this.setHSL(ii.h,ii.s,ii.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ii),e.getHSL(ml);const r=jc(ii.h,ml.h,n),o=jc(ii.s,ml.s,n),a=jc(ii.l,ml.l,n);return this.setHSL(r,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ft.NAMES=ug;let Ts;class cg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Hl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let f=0;f<a.length;f++)a[f]=Yr(a[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Yr(n[r]/255)*255):n[r]=Yr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class fg{constructor(e=null){this.isSource=!0,this.uuid=na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let f=0,c=o.length;f<c;f++)o[f].isDataTexture?a.push($c(o[f].image)):a.push($c(o[f]))}else a=$c(o);r.url=a}return n||(e.images[this.uuid]=r),r}}function $c(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?cg.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class qn extends to{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=ai,o=ai,a=Wn,f=$l,c=li,m=Jr,h=1,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=na(),this.name="",this.source=new fg(e),this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=f,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=m,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=og;class Yt{constructor(e=0,n=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*a,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*a,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*a,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,a;const m=e.elements,h=m[0],v=m[4],g=m[8],x=m[1],S=m[5],E=m[9],y=m[2],_=m[6],T=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-y)<.01&&Math.abs(E-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+y)<.1&&Math.abs(E+_)<.1&&Math.abs(h+S+T-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(h+1)/2,L=(S+1)/2,b=(T+1)/2,F=(v+x)/4,j=(g+y)/4,M=(E+_)/4;return k>L&&k>b?k<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(k),o=F/r,a=j/r):L>b?L<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),r=F/o,a=M/o):b<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(b),r=j/a,o=M/a),this.set(r,o,a,n),this}let A=Math.sqrt((_-E)*(_-E)+(g-y)*(g-y)+(x-v)*(x-v));return Math.abs(A)<.001&&(A=1),this.x=(_-E)/A,this.y=(g-y)/A,this.z=(x-v)/A,this.w=Math.acos((h+S+T-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends to{constructor(e,n,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new qn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Wn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f_ extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,a,f,c){let m=r[o+0],h=r[o+1],v=r[o+2],g=r[o+3];const x=a[f+0],S=a[f+1],E=a[f+2],y=a[f+3];if(c===0){e[n+0]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(c===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=y;return}if(g!==y||m!==x||h!==S||v!==E){let _=1-c;const T=m*x+h*S+v*E+g*y,A=T>=0?1:-1,k=1-T*T;if(k>Number.EPSILON){const b=Math.sqrt(k),F=Math.atan2(b,T*A);_=Math.sin(_*F)/b,c=Math.sin(c*F)/b}const L=c*A;if(m=m*_+x*L,h=h*_+S*L,v=v*_+E*L,g=g*_+y*L,_===1-c){const b=1/Math.sqrt(m*m+h*h+v*v+g*g);m*=b,h*=b,v*=b,g*=b}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,a,f){const c=r[o],m=r[o+1],h=r[o+2],v=r[o+3],g=a[f],x=a[f+1],S=a[f+2],E=a[f+3];return e[n]=c*E+v*g+m*S-h*x,e[n+1]=m*E+v*x+h*g-c*S,e[n+2]=h*E+v*S+c*x-m*g,e[n+3]=v*E-c*g-m*x-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,o=e._y,a=e._z,f=e._order,c=Math.cos,m=Math.sin,h=c(r/2),v=c(o/2),g=c(a/2),x=m(r/2),S=m(o/2),E=m(a/2);switch(f){case"XYZ":this._x=x*v*g+h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g+x*S*E;break;case"YZX":this._x=x*v*g+h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g-x*S*E;break;case"XZY":this._x=x*v*g-h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],a=n[8],f=n[1],c=n[5],m=n[9],h=n[2],v=n[6],g=n[10],x=r+c+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(a-h)*S,this._z=(f-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(v-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(a-h)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-o)/S,this._x=(a+h)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,a=e._z,f=e._w,c=n._x,m=n._y,h=n._z,v=n._w;return this._x=r*v+f*c+o*h-a*m,this._y=o*v+f*m+a*c-r*h,this._z=a*v+f*h+r*m-o*c,this._w=f*v-r*c-o*m-a*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,f=this._w;let c=f*e._w+r*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=o,this._z=a,this;const m=1-c*c;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(m),v=Math.atan2(h,c),g=Math.sin((1-n)*v)/h,x=Math.sin(n*v)/h;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=o*g+this._y*x,this._z=a*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(o),r*Math.sin(a),r*Math.cos(a),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*o,this.y=a[1]*n+a[4]*r+a[7]*o,this.z=a[2]*n+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=e.elements,f=1/(a[3]*n+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*o+a[12])*f,this.y=(a[1]*n+a[5]*r+a[9]*o+a[13])*f,this.z=(a[2]*n+a[6]*r+a[10]*o+a[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,a=e.x,f=e.y,c=e.z,m=e.w,h=m*n+f*o-c*r,v=m*r+c*n-a*o,g=m*o+a*r-f*n,x=-a*n-f*r-c*o;return this.x=h*m+x*-a+v*-c-g*-f,this.y=v*m+x*-f+g*-a-h*-c,this.z=g*m+x*-c+h*-f-v*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*o,this.y=a[1]*n+a[5]*r+a[9]*o,this.z=a[2]*n+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,a=e.z,f=n.x,c=n.y,m=n.z;return this.x=o*m-a*c,this.y=a*f-r*m,this.z=r*c-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new Q,om=new ia;class ra{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,r=1/0,o=1/0,a=-1/0,f=-1/0,c=-1/0;for(let m=0,h=e.length;m<h;m+=3){const v=e[m],g=e[m+1],x=e[m+2];v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>f&&(f=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,f,c),this}setFromBufferAttribute(e){let n=1/0,r=1/0,o=1/0,a=-1/0,f=-1/0,c=-1/0;for(let m=0,h=e.count;m<h;m++){const v=e.getX(m),g=e.getY(m),x=e.getZ(m);v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>f&&(f=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,f,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=zr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(n&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let f=0,c=a.count;f<c;f++)zr.fromBufferAttribute(a,f).applyMatrix4(e.matrixWorld),this.expandByPoint(zr)}else r.boundingBox===null&&r.computeBoundingBox(),Kc.copy(r.boundingBox),Kc.applyMatrix4(e.matrixWorld),this.union(Kc);const o=e.children;for(let a=0,f=o.length;a<f;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zr),zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),vl.subVectors(this.max,Go),bs.subVectors(e.a,Go),Cs.subVectors(e.b,Go),As.subVectors(e.c,Go),lr.subVectors(Cs,bs),ur.subVectors(As,Cs),Or.subVectors(bs,As);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Or.z,Or.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Or.z,0,-Or.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Or.y,Or.x,0];return!Zc(n,bs,Cs,As,vl)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,bs,Cs,As,vl))?!1:(xl.crossVectors(lr,ur),n=[xl.x,xl.y,xl.z],Zc(n,bs,Cs,As,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zr=new Q,Kc=new ra,bs=new Q,Cs=new Q,As=new Q,lr=new Q,ur=new Q,Or=new Q,Go=new Q,vl=new Q,xl=new Q,Ur=new Q;function Zc(u,e,n,r,o){for(let a=0,f=u.length-3;a<=f;a+=3){Ur.fromArray(u,a);const c=o.x*Math.abs(Ur.x)+o.y*Math.abs(Ur.y)+o.z*Math.abs(Ur.z),m=e.dot(Ur),h=n.dot(Ur),v=r.dot(Ur);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>c)return!1}return!0}const d_=new ra,am=new Q,_l=new Q,Qc=new Q;class Yl{constructor(e=new Q,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):d_.setFromPoints(e).getCenter(r);let o=0;for(let a=0,f=e.length;a<f;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qc.subVectors(e,this.center);const n=Qc.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.add(Qc.multiplyScalar(o/r)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?_l.set(0,0,1).multiplyScalar(e.radius):_l.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(am.copy(e.center).add(_l)),this.expandByPoint(am.copy(e.center).sub(_l)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Q,Jc=new Q,yl=new Q,cr=new Q,ef=new Q,Sl=new Q,tf=new Q;class hg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.direction).multiplyScalar(n).add(this.origin),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Jc.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Jc);const a=e.distanceTo(n)*.5,f=-this.direction.dot(yl),c=cr.dot(this.direction),m=-cr.dot(yl),h=cr.lengthSq(),v=Math.abs(1-f*f);let g,x,S,E;if(v>0)if(g=f*m-c,x=f*c-m,E=a*v,g>=0)if(x>=-E)if(x<=E){const y=1/v;g*=y,x*=y,S=g*(g+f*x+2*c)+x*(f*g+x+2*m)+h}else x=a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;else x=-a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;else x<=-E?(g=Math.max(0,-(-f*a+c)),x=g>0?-a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h):x<=E?(g=0,x=Math.min(Math.max(-a,-m),a),S=x*(x+2*m)+h):(g=Math.max(0,-(f*a+c)),x=g>0?a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h);else x=f>0?-a:a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;return r&&r.copy(this.direction).multiplyScalar(g).add(this.origin),o&&o.copy(yl).multiplyScalar(x).add(Jc),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),o=Li.dot(Li)-r*r,a=e.radius*e.radius;if(o>a)return null;const f=Math.sqrt(a-o),c=r-f,m=r+f;return c<0&&m<0?null:c<0?this.at(m,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,a,f,c,m;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),v>=0?(a=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||a>o||((a>r||r!==r)&&(r=a),(f<o||o!==o)&&(o=f),g>=0?(c=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(c=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||c>o)||((c>r||r!==r)&&(r=c),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,o,a){ef.subVectors(n,e),Sl.subVectors(r,e),tf.crossVectors(ef,Sl);let f=this.direction.dot(tf),c;if(f>0){if(o)return null;c=1}else if(f<0)c=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=c*this.direction.dot(Sl.crossVectors(cr,Sl));if(m<0)return null;const h=c*this.direction.dot(ef.cross(cr));if(h<0||m+h>f)return null;const v=-c*cr.dot(tf);return v<0?null:this.at(v/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,r,o,a,f,c,m,h,v,g,x,S,E,y,_){const T=this.elements;return T[0]=e,T[4]=n,T[8]=r,T[12]=o,T[1]=a,T[5]=f,T[9]=c,T[13]=m,T[2]=h,T[6]=v,T[10]=g,T[14]=x,T[3]=S,T[7]=E,T[11]=y,T[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),a=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,a=e.z,f=Math.cos(r),c=Math.sin(r),m=Math.cos(o),h=Math.sin(o),v=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const x=f*v,S=f*g,E=c*v,y=c*g;n[0]=m*v,n[4]=-m*g,n[8]=h,n[1]=S+E*h,n[5]=x-y*h,n[9]=-c*m,n[2]=y-x*h,n[6]=E+S*h,n[10]=f*m}else if(e.order==="YXZ"){const x=m*v,S=m*g,E=h*v,y=h*g;n[0]=x+y*c,n[4]=E*c-S,n[8]=f*h,n[1]=f*g,n[5]=f*v,n[9]=-c,n[2]=S*c-E,n[6]=y+x*c,n[10]=f*m}else if(e.order==="ZXY"){const x=m*v,S=m*g,E=h*v,y=h*g;n[0]=x-y*c,n[4]=-f*g,n[8]=E+S*c,n[1]=S+E*c,n[5]=f*v,n[9]=y-x*c,n[2]=-f*h,n[6]=c,n[10]=f*m}else if(e.order==="ZYX"){const x=f*v,S=f*g,E=c*v,y=c*g;n[0]=m*v,n[4]=E*h-S,n[8]=x*h+y,n[1]=m*g,n[5]=y*h+x,n[9]=S*h-E,n[2]=-h,n[6]=c*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,S=f*h,E=c*m,y=c*h;n[0]=m*v,n[4]=y-x*g,n[8]=E*g+S,n[1]=g,n[5]=f*v,n[9]=-c*v,n[2]=-h*v,n[6]=S*g+E,n[10]=x-y*g}else if(e.order==="XZY"){const x=f*m,S=f*h,E=c*m,y=c*h;n[0]=m*v,n[4]=-g,n[8]=h*v,n[1]=x*g+y,n[5]=f*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=c*v,n[10]=y*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,p_)}lookAt(e,n,r){const o=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),fr.crossVectors(r,Ln),fr.lengthSq()===0&&(Math.abs(r.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),fr.crossVectors(r,Ln)),fr.normalize(),wl.crossVectors(Ln,fr),o[0]=fr.x,o[4]=wl.x,o[8]=Ln.x,o[1]=fr.y,o[5]=wl.y,o[9]=Ln.y,o[2]=fr.z,o[6]=wl.z,o[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,f=r[0],c=r[4],m=r[8],h=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],y=r[6],_=r[10],T=r[14],A=r[3],k=r[7],L=r[11],b=r[15],F=o[0],j=o[4],M=o[8],z=o[12],Y=o[1],B=o[5],fe=o[9],se=o[13],q=o[2],ae=o[6],te=o[10],ee=o[14],G=o[3],V=o[7],H=o[11],C=o[15];return a[0]=f*F+c*Y+m*q+h*G,a[4]=f*j+c*B+m*ae+h*V,a[8]=f*M+c*fe+m*te+h*H,a[12]=f*z+c*se+m*ee+h*C,a[1]=v*F+g*Y+x*q+S*G,a[5]=v*j+g*B+x*ae+S*V,a[9]=v*M+g*fe+x*te+S*H,a[13]=v*z+g*se+x*ee+S*C,a[2]=E*F+y*Y+_*q+T*G,a[6]=E*j+y*B+_*ae+T*V,a[10]=E*M+y*fe+_*te+T*H,a[14]=E*z+y*se+_*ee+T*C,a[3]=A*F+k*Y+L*q+b*G,a[7]=A*j+k*B+L*ae+b*V,a[11]=A*M+k*fe+L*te+b*H,a[15]=A*z+k*se+L*ee+b*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],a=e[12],f=e[1],c=e[5],m=e[9],h=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],y=e[7],_=e[11],T=e[15];return E*(+a*m*g-o*h*g-a*c*x+r*h*x+o*c*S-r*m*S)+y*(+n*m*S-n*h*x+a*f*x-o*f*S+o*h*v-a*m*v)+_*(+n*h*g-n*c*S-a*f*g+r*f*S+a*c*v-r*h*v)+T*(-o*c*v-n*m*g+n*c*x+o*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],y=e[13],_=e[14],T=e[15],A=g*_*h-y*x*h+y*m*S-c*_*S-g*m*T+c*x*T,k=E*x*h-v*_*h-E*m*S+f*_*S+v*m*T-f*x*T,L=v*y*h-E*g*h+E*c*S-f*y*S-v*c*T+f*g*T,b=E*g*m-v*y*m-E*c*x+f*y*x+v*c*_-f*g*_,F=n*A+r*k+o*L+a*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/F;return e[0]=A*j,e[1]=(y*x*a-g*_*a-y*o*S+r*_*S+g*o*T-r*x*T)*j,e[2]=(c*_*a-y*m*a+y*o*h-r*_*h-c*o*T+r*m*T)*j,e[3]=(g*m*a-c*x*a-g*o*h+r*x*h+c*o*S-r*m*S)*j,e[4]=k*j,e[5]=(v*_*a-E*x*a+E*o*S-n*_*S-v*o*T+n*x*T)*j,e[6]=(E*m*a-f*_*a-E*o*h+n*_*h+f*o*T-n*m*T)*j,e[7]=(f*x*a-v*m*a+v*o*h-n*x*h-f*o*S+n*m*S)*j,e[8]=L*j,e[9]=(E*g*a-v*y*a-E*r*S+n*y*S+v*r*T-n*g*T)*j,e[10]=(f*y*a-E*c*a+E*r*h-n*y*h-f*r*T+n*c*T)*j,e[11]=(v*c*a-f*g*a-v*r*h+n*g*h+f*r*S-n*c*S)*j,e[12]=b*j,e[13]=(v*y*o-E*g*o+E*r*x-n*y*x-v*r*_+n*g*_)*j,e[14]=(E*c*o-f*y*o-E*r*m+n*y*m+f*r*_-n*c*_)*j,e[15]=(f*g*o-v*c*o+v*r*m-n*g*m-f*r*x+n*c*x)*j,this}scale(e){const n=this.elements,r=e.x,o=e.y,a=e.z;return n[0]*=r,n[4]*=o,n[8]*=a,n[1]*=r,n[5]*=o,n[9]*=a,n[2]*=r,n[6]*=o,n[10]*=a,n[3]*=r,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),a=1-r,f=e.x,c=e.y,m=e.z,h=a*f,v=a*c;return this.set(h*f+r,h*c-o*m,h*m+o*c,0,h*c+o*m,v*c+r,v*m-o*f,0,h*m-o*c,v*m+o*f,a*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,a,f){return this.set(1,r,a,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,a=n._x,f=n._y,c=n._z,m=n._w,h=a+a,v=f+f,g=c+c,x=a*h,S=a*v,E=a*g,y=f*v,_=f*g,T=c*g,A=m*h,k=m*v,L=m*g,b=r.x,F=r.y,j=r.z;return o[0]=(1-(y+T))*b,o[1]=(S+L)*b,o[2]=(E-k)*b,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(x+T))*F,o[6]=(_+A)*F,o[7]=0,o[8]=(E+k)*j,o[9]=(_-A)*j,o[10]=(1-(x+y))*j,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let a=Rs.set(o[0],o[1],o[2]).length();const f=Rs.set(o[4],o[5],o[6]).length(),c=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const h=1/a,v=1/f,g=1/c;return ri.elements[0]*=h,ri.elements[1]*=h,ri.elements[2]*=h,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=g,ri.elements[9]*=g,ri.elements[10]*=g,n.setFromRotationMatrix(ri),r.x=a,r.y=f,r.z=c,this}makePerspective(e,n,r,o,a,f){const c=this.elements,m=2*a/(n-e),h=2*a/(r-o),v=(n+e)/(n-e),g=(r+o)/(r-o),x=-(f+a)/(f-a),S=-2*f*a/(f-a);return c[0]=m,c[4]=0,c[8]=v,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,o,a,f){const c=this.elements,m=1/(n-e),h=1/(r-o),v=1/(f-a),g=(n+e)*m,x=(r+o)*h,S=(f+a)*v;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=-2*v,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new Q,ri=new Kt,h_=new Q(0,0,0),p_=new Q(1,1,1),fr=new Q,wl=new Q,Ln=new Q,lm=new Kt,um=new ia;class sa{constructor(e=0,n=0,r=0,o=sa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,a=o[0],f=o[4],c=o[8],m=o[1],h=o[5],v=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,a));break;case"ZYX":this._y=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,a)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}sa.DefaultOrder="XYZ";sa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const cm=new Q,Ls=new ia,Pi=new Kt,Ml=new Q,Vo=new Q,g_=new Q,v_=new ia,fm=new Q(1,0,0),dm=new Q(0,1,0),hm=new Q(0,0,1),x_={type:"added"},pm={type:"removed"};class Xn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DefaultUp.clone();const e=new Q,n=new sa,r=new ia,o=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new jn}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Xn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ml.copy(e):Ml.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Vo,Ml,this.up):Pi.lookAt(Ml,Vo,this.up),this.quaternion.setFromRotationMatrix(Pi),o&&(Pi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(pm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let a=0,f=o.length;a<f;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const g=m[h];a(e.shapes,g)}else a(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,h=this.material.length;m<h;m++)c.push(a(e.materials,this.material[m]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];o.animations.push(a(e.animations,m))}}if(n){const c=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(c){const m=[];for(const h in c){const v=c[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DefaultUp=new Q(0,1,0);Xn.DefaultMatrixAutoUpdate=!0;const si=new Q,Di=new Q,nf=new Q,Ii=new Q,Ps=new Q,Ds=new Q,mm=new Q,rf=new Q,sf=new Q,of=new Q;class ki{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,r,o,a){si.subVectors(o,n),Di.subVectors(r,n),nf.subVectors(e,n);const f=si.dot(si),c=si.dot(Di),m=si.dot(nf),h=Di.dot(Di),v=Di.dot(nf),g=f*h-c*c;if(g===0)return a.set(-2,-1,-1);const x=1/g,S=(h*m-c*v)*x,E=(f*v-c*m)*x;return a.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,n,r,o,a,f,c,m){return this.getBarycoord(e,n,r,o,Ii),m.set(0,0),m.addScaledVector(a,Ii.x),m.addScaledVector(f,Ii.y),m.addScaledVector(c,Ii.z),m}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ki.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,o,a){return ki.getUV(e,this.a,this.b,this.c,n,r,o,a)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,a=this.c;let f,c;Ps.subVectors(o,r),Ds.subVectors(a,r),rf.subVectors(e,r);const m=Ps.dot(rf),h=Ds.dot(rf);if(m<=0&&h<=0)return n.copy(r);sf.subVectors(e,o);const v=Ps.dot(sf),g=Ds.dot(sf);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*h;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(Ps,f);of.subVectors(e,a);const S=Ps.dot(of),E=Ds.dot(of);if(E>=0&&S<=E)return n.copy(a);const y=S*h-m*E;if(y<=0&&h>=0&&E<=0)return c=h/(h-E),n.copy(r).addScaledVector(Ds,c);const _=v*E-S*g;if(_<=0&&g-v>=0&&S-E>=0)return mm.subVectors(a,o),c=(g-v)/(g-v+(S-E)),n.copy(o).addScaledVector(mm,c);const T=1/(_+y+x);return f=y*T,c=x*T,n.copy(r).addScaledVector(Ps,f).addScaledVector(Ds,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let __=0;class oa extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=na(),this.name="",this.type="Material",this.blending=qs,this.side=Zo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ig,this.blendDst=rg,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===mx;continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Zo&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(a){const f=[];for(const c in a){const m=a[c];delete m.metadata,f.push(m)}return f}if(n){const a=o(e.textures),f=o(e.images);a.length>0&&(r.textures=a),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Of extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new Q,El=new Qe;class In{constructor(e,n,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r===!0,this.usage=nm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),f=new ft),n[r++]=f.r,n[r++]=f.g,n[r++]=f.b}return this}copyVector2sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),f=new Qe),n[r++]=f.x,n[r++]=f.y}return this}copyVector3sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),f=new Q),n[r++]=f.x,n[r++]=f.y,n[r++]=f.z}return this}copyVector4sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),f=new Yt),n[r++]=f.x,n[r++]=f.y,n[r++]=f.z,n[r++]=f.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,a){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mg extends In{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gg extends In{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Tn extends In{constructor(e,n,r){super(new Float32Array(e),n,r)}}let y_=0;const Gn=new Kt,af=new Xn,Is=new Q,Pn=new ra,Wo=new ra,$t=new Q;class $n extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?gg:mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new jn().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Tn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let a=0,f=n.length;a<f;a++){const c=n[a];Wo.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(Pn.min,Wo.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,Wo.max),Pn.expandByPoint($t)):(Pn.expandByPoint(Wo.min),Pn.expandByPoint(Wo.max))}Pn.getCenter(r);let o=0;for(let a=0,f=e.count;a<f;a++)$t.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared($t));if(n)for(let a=0,f=n.length;a<f;a++){const c=n[a],m=this.morphTargetsRelative;for(let h=0,v=c.count;h<v;h++)$t.fromBufferAttribute(c,h),m&&(Is.fromBufferAttribute(e,h),$t.add(Is)),o=Math.max(o,r.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=n.position.array,a=n.normal.array,f=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,h=[],v=[];for(let Y=0;Y<c;Y++)h[Y]=new Q,v[Y]=new Q;const g=new Q,x=new Q,S=new Q,E=new Qe,y=new Qe,_=new Qe,T=new Q,A=new Q;function k(Y,B,fe){g.fromArray(o,Y*3),x.fromArray(o,B*3),S.fromArray(o,fe*3),E.fromArray(f,Y*2),y.fromArray(f,B*2),_.fromArray(f,fe*2),x.sub(g),S.sub(g),y.sub(E),_.sub(E);const se=1/(y.x*_.y-_.x*y.y);isFinite(se)&&(T.copy(x).multiplyScalar(_.y).addScaledVector(S,-y.y).multiplyScalar(se),A.copy(S).multiplyScalar(y.x).addScaledVector(x,-_.x).multiplyScalar(se),h[Y].add(T),h[B].add(T),h[fe].add(T),v[Y].add(A),v[B].add(A),v[fe].add(A))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let Y=0,B=L.length;Y<B;++Y){const fe=L[Y],se=fe.start,q=fe.count;for(let ae=se,te=se+q;ae<te;ae+=3)k(r[ae+0],r[ae+1],r[ae+2])}const b=new Q,F=new Q,j=new Q,M=new Q;function z(Y){j.fromArray(a,Y*3),M.copy(j);const B=h[Y];b.copy(B),b.sub(j.multiplyScalar(j.dot(B))).normalize(),F.crossVectors(M,B);const se=F.dot(v[Y])<0?-1:1;m[Y*4]=b.x,m[Y*4+1]=b.y,m[Y*4+2]=b.z,m[Y*4+3]=se}for(let Y=0,B=L.length;Y<B;++Y){const fe=L[Y],se=fe.start,q=fe.count;for(let ae=se,te=se+q;ae<te;ae+=3)z(r[ae+0]),z(r[ae+1]),z(r[ae+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new Q,a=new Q,f=new Q,c=new Q,m=new Q,h=new Q,v=new Q,g=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),y=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(n,E),a.fromBufferAttribute(n,y),f.fromBufferAttribute(n,_),v.subVectors(f,a),g.subVectors(o,a),v.cross(g),c.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),h.fromBufferAttribute(r,_),c.add(v),m.add(v),h.add(v),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(y,m.x,m.y,m.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),a.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,a),g.subVectors(o,a),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(e.attributes[o]===void 0)continue;const f=r[o].array,c=e.attributes[o],m=c.array,h=c.itemSize*n,v=Math.min(m.length,f.length-h);for(let g=0,x=h;g<v;g++,x++)f[x]=m[g]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,m){const h=c.array,v=c.itemSize,g=c.normalized,x=new h.constructor(m.length*v);let S=0,E=0;for(let y=0,_=m.length;y<_;y++){c.isInterleavedBufferAttribute?S=m[y]*c.data.stride+c.offset:S=m[y]*v;for(let T=0;T<v;T++)x[E++]=h[S++]}return new In(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,r=this.index.array,o=this.attributes;for(const c in o){const m=o[c],h=e(m,r);n.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const m=[],h=a[c];for(let v=0,g=h.length;v<g;v++){const x=h[v],S=e(x,r);m.push(S)}n.morphAttributes[c]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,m=f.length;c<m;c++){const h=f[c];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let a=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let g=0,x=h.length;g<x;g++){const S=h[g];v.push(S.toJSON(e.data))}v.length>0&&(o[m]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const a=e.morphAttributes;for(const h in a){const v=[],g=a[h];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const g=f[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Kt,Ns=new hg,lf=new Yl,dr=new Q,hr=new Q,pr=new Q,uf=new Q,cf=new Q,ff=new Q,Tl=new Q,bl=new Q,Cl=new Q,Al=new Qe,Rl=new Qe,Ll=new Qe,df=new Q,Pl=new Q;class zi extends Xn{constructor(e=new $n,n=new Of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=o.length;a<f;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(e,n){const r=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),lf.copy(r.boundingSphere),lf.applyMatrix4(a),e.ray.intersectsSphere(lf)===!1)||(gm.copy(a).invert(),Ns.copy(e.ray).applyMatrix4(gm),r.boundingBox!==null&&Ns.intersectsBox(r.boundingBox)===!1))return;let f;const c=r.index,m=r.attributes.position,h=r.morphAttributes.position,v=r.morphTargetsRelative,g=r.attributes.uv,x=r.attributes.uv2,S=r.groups,E=r.drawRange;if(c!==null)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const T=S[y],A=o[T.materialIndex],k=Math.max(T.start,E.start),L=Math.min(c.count,Math.min(T.start+T.count,E.start+E.count));for(let b=k,F=L;b<F;b+=3){const j=c.getX(b),M=c.getX(b+1),z=c.getX(b+2);f=Dl(this,A,e,Ns,m,h,v,g,x,j,M,z),f&&(f.faceIndex=Math.floor(b/3),f.face.materialIndex=T.materialIndex,n.push(f))}}else{const y=Math.max(0,E.start),_=Math.min(c.count,E.start+E.count);for(let T=y,A=_;T<A;T+=3){const k=c.getX(T),L=c.getX(T+1),b=c.getX(T+2);f=Dl(this,o,e,Ns,m,h,v,g,x,k,L,b),f&&(f.faceIndex=Math.floor(T/3),n.push(f))}}else if(m!==void 0)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const T=S[y],A=o[T.materialIndex],k=Math.max(T.start,E.start),L=Math.min(m.count,Math.min(T.start+T.count,E.start+E.count));for(let b=k,F=L;b<F;b+=3){const j=b,M=b+1,z=b+2;f=Dl(this,A,e,Ns,m,h,v,g,x,j,M,z),f&&(f.faceIndex=Math.floor(b/3),f.face.materialIndex=T.materialIndex,n.push(f))}}else{const y=Math.max(0,E.start),_=Math.min(m.count,E.start+E.count);for(let T=y,A=_;T<A;T+=3){const k=T,L=T+1,b=T+2;f=Dl(this,o,e,Ns,m,h,v,g,x,k,L,b),f&&(f.faceIndex=Math.floor(T/3),n.push(f))}}}}function S_(u,e,n,r,o,a,f,c){let m;if(e.side===ui?m=r.intersectTriangle(f,a,o,!0,c):m=r.intersectTriangle(o,a,f,e.side!==Ks,c),m===null)return null;Pl.copy(c),Pl.applyMatrix4(u.matrixWorld);const h=n.ray.origin.distanceTo(Pl);return h<n.near||h>n.far?null:{distance:h,point:Pl.clone(),object:u}}function Dl(u,e,n,r,o,a,f,c,m,h,v,g){dr.fromBufferAttribute(o,h),hr.fromBufferAttribute(o,v),pr.fromBufferAttribute(o,g);const x=u.morphTargetInfluences;if(a&&x){Tl.set(0,0,0),bl.set(0,0,0),Cl.set(0,0,0);for(let E=0,y=a.length;E<y;E++){const _=x[E],T=a[E];_!==0&&(uf.fromBufferAttribute(T,h),cf.fromBufferAttribute(T,v),ff.fromBufferAttribute(T,g),f?(Tl.addScaledVector(uf,_),bl.addScaledVector(cf,_),Cl.addScaledVector(ff,_)):(Tl.addScaledVector(uf.sub(dr),_),bl.addScaledVector(cf.sub(hr),_),Cl.addScaledVector(ff.sub(pr),_)))}dr.add(Tl),hr.add(bl),pr.add(Cl)}u.isSkinnedMesh&&(u.boneTransform(h,dr),u.boneTransform(v,hr),u.boneTransform(g,pr));const S=S_(u,e,n,r,dr,hr,pr,df);if(S){c&&(Al.fromBufferAttribute(c,h),Rl.fromBufferAttribute(c,v),Ll.fromBufferAttribute(c,g),S.uv=ki.getUV(df,dr,hr,pr,Al,Rl,Ll,new Qe)),m&&(Al.fromBufferAttribute(m,h),Rl.fromBufferAttribute(m,v),Ll.fromBufferAttribute(m,g),S.uv2=ki.getUV(df,dr,hr,pr,Al,Rl,Ll,new Qe));const E={a:h,b:v,c:g,normal:new Q,materialIndex:0};ki.getNormal(dr,hr,pr,E.normal),S.face=E}return S}class aa extends $n{constructor(e=1,n=1,r=1,o=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:a,depthSegments:f};const c=this;o=Math.floor(o),a=Math.floor(a),f=Math.floor(f);const m=[],h=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,a,0),E("z","y","x",1,-1,r,n,-e,f,a,1),E("x","z","y",1,1,e,r,n,o,f,2),E("x","z","y",1,-1,e,r,-n,o,f,3),E("x","y","z",1,-1,e,n,r,o,a,4),E("x","y","z",-1,-1,e,n,-r,o,a,5),this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(g,2));function E(y,_,T,A,k,L,b,F,j,M,z){const Y=L/j,B=b/M,fe=L/2,se=b/2,q=F/2,ae=j+1,te=M+1;let ee=0,G=0;const V=new Q;for(let H=0;H<te;H++){const C=H*B-se;for(let O=0;O<ae;O++){const K=O*Y-fe;V[y]=K*A,V[_]=C*k,V[T]=q,h.push(V.x,V.y,V.z),V[y]=0,V[_]=0,V[T]=F>0?1:-1,v.push(V.x,V.y,V.z),g.push(O/j),g.push(1-H/M),ee+=1}}for(let H=0;H<M;H++)for(let C=0;C<j;C++){const O=x+C+ae*H,K=x+C+ae*(H+1),de=x+(C+1)+ae*(H+1),ge=x+(C+1)+ae*H;m.push(O,K,ge),m.push(K,de,ge),G+=6}c.addGroup(S,G,z),S+=G,x+=ee}}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(u){const e={};for(const n in u){e[n]={};for(const r in u[n]){const o=u[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ln(u){const e={};for(let n=0;n<u.length;n++){const r=eo(u[n]);for(const o in r)e[o]=r[o]}return e}function w_(u){const e=[];for(let n=0;n<u.length;n++)e.push(u[n].clone());return e}const jl={clone:eo,merge:ln};var M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class vg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends vg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,o,a,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,a=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;a+=f.offsetX*o/m,n-=f.offsetY*r/h,o*=f.width/m,r*=f.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=90,Fs=1;class T_ extends Xn{constructor(e,n,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new Hn(ks,Fs,e,n);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new Q(1,0,0)),this.add(o);const a=new Hn(ks,Fs,e,n);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Q(-1,0,0)),this.add(a);const f=new Hn(ks,Fs,e,n);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new Q(0,1,0)),this.add(f);const c=new Hn(ks,Fs,e,n);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new Q(0,-1,0)),this.add(c);const m=new Hn(ks,Fs,e,n);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new Q(0,0,1)),this.add(m);const h=new Hn(ks,Fs,e,n);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new Q(0,0,-1)),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,a,f,c,m,h]=this.children,v=e.getRenderTarget(),g=e.toneMapping,x=e.xr.enabled;e.toneMapping=Oi,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,o),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,f),e.setRenderTarget(r,3),e.render(n,c),e.setRenderTarget(r,4),e.render(n,m),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(n,h),e.setRenderTarget(v),e.toneMapping=g,e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class xg extends qn{constructor(e,n,r,o,a,f,c,m,h,v){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,r,o,a,f,c,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends ci{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new aa(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ui,blending:_r});a.uniforms.tEquirect.value=n;const f=new zi(o,a),c=n.minFilter;return n.minFilter===$l&&(n.minFilter=Wn),new T_(1,10,this).update(e,f),n.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,o){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(a)}}const hf=new Q,C_=new Q,A_=new jn;class Br{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=hf.subVectors(r,n).cross(C_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const r=e.delta(hf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(r).multiplyScalar(a).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||A_.getNormalMatrix(e),o=this.coplanarPoint(hf).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Yl,Il=new Q;class _g{constructor(e=new Br,n=new Br,r=new Br,o=new Br,a=new Br,f=new Br){this.planes=[e,n,r,o,a,f]}set(e,n,r,o,a,f){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const n=this.planes,r=e.elements,o=r[0],a=r[1],f=r[2],c=r[3],m=r[4],h=r[5],v=r[6],g=r[7],x=r[8],S=r[9],E=r[10],y=r[11],_=r[12],T=r[13],A=r[14],k=r[15];return n[0].setComponents(c-o,g-m,y-x,k-_).normalize(),n[1].setComponents(c+o,g+m,y+x,k+_).normalize(),n[2].setComponents(c+a,g+h,y+S,k+T).normalize(),n[3].setComponents(c-a,g-h,y-S,k-T).normalize(),n[4].setComponents(c-f,g-v,y-E,k-A).normalize(),n[5].setComponents(c+f,g+v,y+E,k+A).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Il.x=o.normal.x>0?e.max.x:e.min.x,Il.y=o.normal.y>0?e.max.y:e.min.y,Il.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yg(){let u=null,e=!1,n=null,r=null;function o(a,f){n(a,f),r=u.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=u.requestAnimationFrame(o),e=!0)},stop:function(){u.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){u=a}}}function R_(u,e){const n=e.isWebGL2,r=new WeakMap;function o(h,v){const g=h.array,x=h.usage,S=u.createBuffer();u.bindBuffer(v,S),u.bufferData(v,g,x),h.onUploadCallback();let E;if(g instanceof Float32Array)E=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(g instanceof Int16Array)E=5122;else if(g instanceof Uint32Array)E=5125;else if(g instanceof Int32Array)E=5124;else if(g instanceof Int8Array)E=5120;else if(g instanceof Uint8Array)E=5121;else if(g instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function a(h,v,g){const x=v.array,S=v.updateRange;u.bindBuffer(g,h),S.count===-1?u.bufferSubData(g,0,x):(n?u.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):u.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=r.get(h);v&&(u.deleteBuffer(v.buffer),r.delete(h))}function m(h,v){if(h.isGLBufferAttribute){const x=r.get(h);(!x||x.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=r.get(h);g===void 0?r.set(h,o(h,v)):g.version<h.version&&(a(g.buffer,h,v),g.version=h.version)}return{get:f,remove:c,update:m}}class Uf extends $n{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const a=e/2,f=n/2,c=Math.floor(r),m=Math.floor(o),h=c+1,v=m+1,g=e/c,x=n/m,S=[],E=[],y=[],_=[];for(let T=0;T<v;T++){const A=T*x-f;for(let k=0;k<h;k++){const L=k*g-a;E.push(L,-A,0),y.push(0,0,1),_.push(k/c),_.push(1-T/m)}}for(let T=0;T<m;T++)for(let A=0;A<c;A++){const k=A+h*T,L=A+h*(T+1),b=A+1+h*(T+1),F=A+1+h*T;S.push(k,L,F),S.push(L,b,F)}this.setIndex(S),this.setAttribute("position",new Tn(E,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(_,2))}static fromJSON(e){return new Uf(e.width,e.height,e.widthSegments,e.heightSegments)}}var L_=`#ifdef USE_ALPHAMAP
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
#endif`,fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
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
}`,Ty=`
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,dS=`#ifdef USE_SKINNING
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
#endif`,TS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
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
}`,tt={alphamap_fragment:L_,alphamap_pars_fragment:P_,alphatest_fragment:D_,alphatest_pars_fragment:I_,aomap_fragment:N_,aomap_pars_fragment:k_,begin_vertex:F_,beginnormal_vertex:z_,bsdfs:O_,iridescence_fragment:U_,bumpmap_pars_fragment:B_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:H_,color_fragment:j_,color_pars_fragment:q_,color_pars_vertex:X_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:Q_,displacementmap_vertex:J_,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,encodings_fragment:ny,encodings_pars_fragment:iy,envmap_fragment:ry,envmap_common_pars_fragment:sy,envmap_pars_fragment:oy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:xy,envmap_vertex:ly,fog_vertex:uy,fog_pars_vertex:cy,fog_fragment:fy,fog_pars_fragment:dy,gradientmap_pars_fragment:hy,lightmap_fragment:py,lightmap_pars_fragment:my,lights_lambert_vertex:gy,lights_pars_begin:vy,lights_toon_fragment:_y,lights_toon_pars_fragment:yy,lights_phong_fragment:Sy,lights_phong_pars_fragment:wy,lights_physical_fragment:My,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Cy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Ly,logdepthbuf_vertex:Py,map_fragment:Dy,map_pars_fragment:Iy,map_particle_fragment:Ny,map_particle_pars_fragment:ky,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:zy,morphcolor_vertex:Oy,morphnormal_vertex:Uy,morphtarget_pars_vertex:By,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:Wy,normal_pars_fragment:Hy,normal_pars_vertex:jy,normal_vertex:qy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Zy,output_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:aS,shadowmap_vertex:lS,shadowmask_pars_fragment:uS,skinbase_vertex:cS,skinning_pars_vertex:fS,skinning_vertex:dS,skinnormal_vertex:hS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:vS,transmission_fragment:xS,transmission_pars_fragment:_S,uv_pars_fragment:yS,uv_pars_vertex:SS,uv_vertex:wS,uv2_pars_fragment:MS,uv2_pars_vertex:ES,uv2_vertex:TS,worldpos_vertex:bS,background_vert:CS,background_frag:AS,cube_vert:RS,cube_frag:LS,depth_vert:PS,depth_frag:DS,distanceRGBA_vert:IS,distanceRGBA_frag:NS,equirect_vert:kS,equirect_frag:FS,linedashed_vert:zS,linedashed_frag:OS,meshbasic_vert:US,meshbasic_frag:BS,meshlambert_vert:GS,meshlambert_frag:VS,meshmatcap_vert:WS,meshmatcap_frag:HS,meshnormal_vert:jS,meshnormal_frag:qS,meshphong_vert:XS,meshphong_frag:$S,meshphysical_vert:YS,meshphysical_frag:KS,meshtoon_vert:ZS,meshtoon_frag:QS,points_vert:JS,points_frag:ew,shadow_vert:tw,shadow_frag:nw,sprite_vert:iw,sprite_frag:rw},Ce={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jn},uv2Transform:{value:new jn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jn}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jn}}},xi={basic:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ln([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ln([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ln([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new jn},t2D:{value:null}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},cube:{uniforms:ln([Ce.envmap,{opacity:{value:1}}]),vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:ln([Ce.lights,Ce.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};function sw(u,e,n,r,o,a){const f=new ft(0);let c=o===!0?0:1,m,h,v=null,g=0,x=null;function S(y,_){let T=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=e.get(A));const k=u.xr,L=k.getSession&&k.getSession();L&&L.environmentBlendMode==="additive"&&(A=null),A===null?E(f,c):A&&A.isColor&&(E(A,1),T=!0),(u.autoClear||T)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Xl)?(h===void 0&&(h=new zi(new aa(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:eo(xi.cube.uniforms),vertexShader:xi.cube.vertexShader,fragmentShader:xi.cube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(v!==A||g!==A.version||x!==u.toneMapping)&&(h.material.needsUpdate=!0,v=A,g=A.version,x=u.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new zi(new Uf(2,2),new pn({name:"BackgroundMaterial",uniforms:eo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Zo,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||g!==A.version||x!==u.toneMapping)&&(m.material.needsUpdate=!0,v=A,g=A.version,x=u.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function E(y,_){n.buffers.color.setClear(y.r,y.g,y.b,_,a)}return{getClearColor:function(){return f},setClearColor:function(y,_=1){f.set(y),c=_,E(f,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,E(f,c)},render:S}}function ow(u,e,n,r){const o=u.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||a!==null,c={},m=_(null);let h=m,v=!1;function g(q,ae,te,ee,G){let V=!1;if(f){const H=y(ee,te,ae);h!==H&&(h=H,S(h.object)),V=T(q,ee,te,G),V&&A(q,ee,te,G)}else{const H=ae.wireframe===!0;(h.geometry!==ee.id||h.program!==te.id||h.wireframe!==H)&&(h.geometry=ee.id,h.program=te.id,h.wireframe=H,V=!0)}G!==null&&n.update(G,34963),(V||v)&&(v=!1,M(q,ae,te,ee),G!==null&&u.bindBuffer(34963,n.get(G).buffer))}function x(){return r.isWebGL2?u.createVertexArray():a.createVertexArrayOES()}function S(q){return r.isWebGL2?u.bindVertexArray(q):a.bindVertexArrayOES(q)}function E(q){return r.isWebGL2?u.deleteVertexArray(q):a.deleteVertexArrayOES(q)}function y(q,ae,te){const ee=te.wireframe===!0;let G=c[q.id];G===void 0&&(G={},c[q.id]=G);let V=G[ae.id];V===void 0&&(V={},G[ae.id]=V);let H=V[ee];return H===void 0&&(H=_(x()),V[ee]=H),H}function _(q){const ae=[],te=[],ee=[];for(let G=0;G<o;G++)ae[G]=0,te[G]=0,ee[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:te,attributeDivisors:ee,object:q,attributes:{},index:null}}function T(q,ae,te,ee){const G=h.attributes,V=ae.attributes;let H=0;const C=te.getAttributes();for(const O in C)if(C[O].location>=0){const de=G[O];let ge=V[O];if(ge===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(ge=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(ge=q.instanceColor)),de===void 0||de.attribute!==ge||ge&&de.data!==ge.data)return!0;H++}return h.attributesNum!==H||h.index!==ee}function A(q,ae,te,ee){const G={},V=ae.attributes;let H=0;const C=te.getAttributes();for(const O in C)if(C[O].location>=0){let de=V[O];de===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(de=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(de=q.instanceColor));const ge={};ge.attribute=de,de&&de.data&&(ge.data=de.data),G[O]=ge,H++}h.attributes=G,h.attributesNum=H,h.index=ee}function k(){const q=h.newAttributes;for(let ae=0,te=q.length;ae<te;ae++)q[ae]=0}function L(q){b(q,0)}function b(q,ae){const te=h.newAttributes,ee=h.enabledAttributes,G=h.attributeDivisors;te[q]=1,ee[q]===0&&(u.enableVertexAttribArray(q),ee[q]=1),G[q]!==ae&&((r.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,ae),G[q]=ae)}function F(){const q=h.newAttributes,ae=h.enabledAttributes;for(let te=0,ee=ae.length;te<ee;te++)ae[te]!==q[te]&&(u.disableVertexAttribArray(te),ae[te]=0)}function j(q,ae,te,ee,G,V){r.isWebGL2===!0&&(te===5124||te===5125)?u.vertexAttribIPointer(q,ae,te,G,V):u.vertexAttribPointer(q,ae,te,ee,G,V)}function M(q,ae,te,ee){if(r.isWebGL2===!1&&(q.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;k();const G=ee.attributes,V=te.getAttributes(),H=ae.defaultAttributeValues;for(const C in V){const O=V[C];if(O.location>=0){let K=G[C];if(K===void 0&&(C==="instanceMatrix"&&q.instanceMatrix&&(K=q.instanceMatrix),C==="instanceColor"&&q.instanceColor&&(K=q.instanceColor)),K!==void 0){const de=K.normalized,ge=K.itemSize,X=n.get(K);if(X===void 0)continue;const _e=X.buffer,ye=X.type,we=X.bytesPerElement;if(K.isInterleavedBufferAttribute){const Se=K.data,je=Se.stride,Ge=K.offset;if(Se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<O.locationSize;Ie++)b(O.location+Ie,Se.meshPerAttribute);q.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)L(O.location+Ie);u.bindBuffer(34962,_e);for(let Ie=0;Ie<O.locationSize;Ie++)j(O.location+Ie,ge/O.locationSize,ye,de,je*we,(Ge+ge/O.locationSize*Ie)*we)}else{if(K.isInstancedBufferAttribute){for(let Se=0;Se<O.locationSize;Se++)b(O.location+Se,K.meshPerAttribute);q.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<O.locationSize;Se++)L(O.location+Se);u.bindBuffer(34962,_e);for(let Se=0;Se<O.locationSize;Se++)j(O.location+Se,ge/O.locationSize,ye,de,ge*we,ge/O.locationSize*Se*we)}}else if(H!==void 0){const de=H[C];if(de!==void 0)switch(de.length){case 2:u.vertexAttrib2fv(O.location,de);break;case 3:u.vertexAttrib3fv(O.location,de);break;case 4:u.vertexAttrib4fv(O.location,de);break;default:u.vertexAttrib1fv(O.location,de)}}}}F()}function z(){fe();for(const q in c){const ae=c[q];for(const te in ae){const ee=ae[te];for(const G in ee)E(ee[G].object),delete ee[G];delete ae[te]}delete c[q]}}function Y(q){if(c[q.id]===void 0)return;const ae=c[q.id];for(const te in ae){const ee=ae[te];for(const G in ee)E(ee[G].object),delete ee[G];delete ae[te]}delete c[q.id]}function B(q){for(const ae in c){const te=c[ae];if(te[q.id]===void 0)continue;const ee=te[q.id];for(const G in ee)E(ee[G].object),delete ee[G];delete te[q.id]}}function fe(){se(),v=!0,h!==m&&(h=m,S(h.object))}function se(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:g,reset:fe,resetDefaultState:se,dispose:z,releaseStatesOfGeometry:Y,releaseStatesOfProgram:B,initAttributes:k,enableAttribute:L,disableUnusedAttributes:F}}function aw(u,e,n,r){const o=r.isWebGL2;let a;function f(h){a=h}function c(h,v){u.drawArrays(a,h,v),n.update(v,a,1)}function m(h,v,g){if(g===0)return;let x,S;if(o)x=u,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](a,h,v,g),n.update(v,a,g)}this.setMode=f,this.render=c,this.renderInstances=m}function lw(u,e,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");r=u.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(j){if(j==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";j="mediump"}return j==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&u instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&u instanceof WebGL2ComputeRenderingContext;let c=n.precision!==void 0?n.precision:"highp";const m=a(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const h=f||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,g=u.getParameter(34930),x=u.getParameter(35660),S=u.getParameter(3379),E=u.getParameter(34076),y=u.getParameter(34921),_=u.getParameter(36347),T=u.getParameter(36348),A=u.getParameter(36349),k=x>0,L=f||e.has("OES_texture_float"),b=k&&L,F=f?u.getParameter(36183):0;return{isWebGL2:f,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:v,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:k,floatFragmentTextures:L,floatVertexTextures:b,maxSamples:F}}function uw(u){const e=this;let n=null,r=0,o=!1,a=!1;const f=new Br,c=new jn,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x,S){const E=g.length!==0||x||r!==0||o;return o=x,n=v(g,S,0),r=g.length,E},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1,h()},this.setState=function(g,x,S){const E=g.clippingPlanes,y=g.clipIntersection,_=g.clipShadows,T=u.get(g);if(!o||E===null||E.length===0||a&&!_)a?v(null):h();else{const A=a?0:r,k=A*4;let L=T.clippingState||null;m.value=L,L=v(E,x,k,S);for(let b=0;b!==k;++b)L[b]=n[b];T.clippingState=L,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const y=g!==null?g.length:0;let _=null;if(y!==0){if(_=m.value,E!==!0||_===null){const T=S+y*4,A=x.matrixWorldInverse;c.getNormalMatrix(A),(_===null||_.length<T)&&(_=new Float32Array(T));for(let k=0,L=S;k!==y;++k,L+=4)f.copy(g[k]).applyMatrix4(A,c),f.normal.toArray(_,L),_[L+3]=f.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function cw(u){let e=new WeakMap;function n(f,c){return c===Mf?f.mapping=Zs:c===Ef&&(f.mapping=Qs),f}function r(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===Mf||c===Ef)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new b_(m.height/2);return h.fromEquirectangularTexture(u,f),e.set(f,h),f.addEventListener("dispose",o),n(h.texture,f.mapping)}else return null}}return f}function o(f){const c=f.target;c.removeEventListener("dispose",o);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Bf extends vg{constructor(e=-1,n=1,r=1,o=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,f=r+e,c=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,f=a+h*this.view.width,c-=v*this.view.offsetY,m=c-v*this.view.height}this.projectionMatrix.makeOrthographic(a,f,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,vm=[.125,.215,.35,.446,.526,.582],Vr=20,pf=new Bf,xm=new ft;let mf=null;const Gr=(1+Math.sqrt(5))/2,Os=1/Gr,_m=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Gr,Os),new Q(0,Gr,-Os),new Q(Os,0,Gr),new Q(-Os,0,Gr),new Q(Gr,Os,0),new Q(-Gr,Os,0)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){mf=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Jo,format:li,encoding:es,depthBuffer:!1},o=Sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fw(a)),this._blurMaterial=dw(a,e,n)}return o}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,pf)}_sceneToCubeUV(e,n,r,o){const c=new Hn(90,1,n,r),m=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(xm),v.toneMapping=Oi,v.autoClear=!1;const S=new Of({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),E=new zi(new aa,S);let y=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,y=!0):(S.color.copy(xm),y=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(c.up.set(0,m[T],0),c.lookAt(h[T],0,0)):A===1?(c.up.set(0,0,m[T]),c.lookAt(0,h[T],0)):(c.up.set(0,m[T],0),c.lookAt(0,0,h[T]));const k=this._cubeSize;Nl(o,A*k,T>2?k:0,k,k),v.setRenderTarget(o),y&&v.render(E,c),v.render(e,c)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Zs||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const a=o?this._cubemapMaterial:this._equirectMaterial,f=new zi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const m=this._cubeSize;Nl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,pf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=_m[(o-1)%_m.length];this._blur(e,o-1,o,a,f)}n.autoClear=r}_blur(e,n,r,o,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",a),this._halfBlur(f,e,r,r,o,"longitudinal",a)}_halfBlur(e,n,r,o,a,f,c){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new zi(this._lodPlanes[o],h),x=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),y=a/E,_=isFinite(a)?1+Math.floor(v*y):Vr;_>Vr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vr}`);const T=[];let A=0;for(let j=0;j<Vr;++j){const M=j/y,z=Math.exp(-M*M/2);T.push(z),j===0?A+=z:j<_&&(A+=2*z)}for(let j=0;j<T.length;j++)T[j]=T[j]/A;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=T,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:k}=this;x.dTheta.value=E,x.mipInt.value=k-r;const L=this._sizeLods[o],b=3*L*(o>k-Hs?o-k+Hs:0),F=4*(this._cubeSize-L);Nl(n,b,F,3*L,2*L),m.setRenderTarget(n),m.render(g,pf)}}function fw(u){const e=[],n=[],r=[];let o=u;const a=u-Hs+1+vm.length;for(let f=0;f<a;f++){const c=Math.pow(2,o);n.push(c);let m=1/c;f>u-Hs?m=vm[f-u+Hs-1]:f===0&&(m=0),r.push(m);const h=1/(c-2),v=-h,g=1+h,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,y=3,_=2,T=1,A=new Float32Array(y*E*S),k=new Float32Array(_*E*S),L=new Float32Array(T*E*S);for(let F=0;F<S;F++){const j=F%3*2/3-1,M=F>2?0:-1,z=[j,M,0,j+2/3,M,0,j+2/3,M+1,0,j,M,0,j+2/3,M+1,0,j,M+1,0];A.set(z,y*E*F),k.set(x,_*E*F);const Y=[F,F,F,F,F,F];L.set(Y,T*E*F)}const b=new $n;b.setAttribute("position",new In(A,y)),b.setAttribute("uv",new In(k,_)),b.setAttribute("faceIndex",new In(L,T)),e.push(b),o>Hs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Sm(u,e,n){const r=new ci(u,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(u,e,n,r,o){u.viewport.set(e,n,r,o),u.scissor.set(e,n,r,o)}function dw(u,e,n){const r=new Float32Array(Vr),o=new Q(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function wm(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Mm(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Gf(){return`

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
	`}function hw(u){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const m=c.mapping,h=m===Mf||m===Ef,v=m===Zs||m===Qs;if(h||v)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return n===null&&(n=new ym(u)),g=h?n.fromEquirectangular(c,g):n.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||v&&g&&o(g)){n===null&&(n=new ym(u));const x=h?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",a),x.texture}else return null}}}return c}function o(c){let m=0;const h=6;for(let v=0;v<h;v++)c[v]!==void 0&&m++;return m===h}function a(c){const m=c.target;m.removeEventListener("dispose",a);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function pw(u){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function mw(u,e,n,r){const o={},a=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete o[x.id];const S=a.get(x);S&&(e.remove(S),a.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function c(g,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)e.update(x[E],34962);const S=g.morphAttributes;for(const E in S){const y=S[E];for(let _=0,T=y.length;_<T;_++)e.update(y[_],34962)}}function h(g){const x=[],S=g.index,E=g.attributes.position;let y=0;if(S!==null){const A=S.array;y=S.version;for(let k=0,L=A.length;k<L;k+=3){const b=A[k+0],F=A[k+1],j=A[k+2];x.push(b,F,F,j,j,b)}}else{const A=E.array;y=E.version;for(let k=0,L=A.length/3-1;k<L;k+=3){const b=k+0,F=k+1,j=k+2;x.push(b,F,F,j,j,b)}}const _=new(lg(x)?gg:mg)(x,1);_.version=y;const T=a.get(g);T&&e.remove(T),a.set(g,_)}function v(g){const x=a.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:m,getWireframeAttribute:v}}function gw(u,e,n,r){const o=r.isWebGL2;let a;function f(x){a=x}let c,m;function h(x){c=x.type,m=x.bytesPerElement}function v(x,S){u.drawElements(a,S,c,x*m),n.update(S,a,1)}function g(x,S,E){if(E===0)return;let y,_;if(o)y=u,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](a,S,c,x*m,E),n.update(S,a,E)}this.setMode=f,this.setIndex=h,this.render=v,this.renderInstances=g}function vw(u){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,f,c){switch(n.calls++,f){case 4:n.triangles+=c*(a/3);break;case 1:n.lines+=c*(a/2);break;case 3:n.lines+=c*(a-1);break;case 2:n.lines+=c*a;break;case 0:n.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function xw(u,e){return u[0]-e[0]}function _w(u,e){return Math.abs(e[1])-Math.abs(u[1])}function gf(u,e){let n=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?n=127:r instanceof Uint8Array?n=255:r instanceof Uint16Array?n=65535:r instanceof Int16Array?n=32767:r instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),u.divideScalar(n)}function yw(u,e,n){const r={},o=new Float32Array(8),a=new WeakMap,f=new Yt,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function m(h,v,g,x){const S=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,_=y!==void 0?y.length:0;let T=a.get(v);if(T===void 0||T.count!==_){let te=function(){q.dispose(),a.delete(v),v.removeEventListener("dispose",te)};var E=te;T!==void 0&&T.texture.dispose();const L=v.morphAttributes.position!==void 0,b=v.morphAttributes.normal!==void 0,F=v.morphAttributes.color!==void 0,j=v.morphAttributes.position||[],M=v.morphAttributes.normal||[],z=v.morphAttributes.color||[];let Y=0;L===!0&&(Y=1),b===!0&&(Y=2),F===!0&&(Y=3);let B=v.attributes.position.count*Y,fe=1;B>e.maxTextureSize&&(fe=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const se=new Float32Array(B*fe*4*_),q=new dg(se,B,fe,_);q.type=qr,q.needsUpdate=!0;const ae=Y*4;for(let ee=0;ee<_;ee++){const G=j[ee],V=M[ee],H=z[ee],C=B*fe*4*ee;for(let O=0;O<G.count;O++){const K=O*ae;L===!0&&(f.fromBufferAttribute(G,O),G.normalized===!0&&gf(f,G),se[C+K+0]=f.x,se[C+K+1]=f.y,se[C+K+2]=f.z,se[C+K+3]=0),b===!0&&(f.fromBufferAttribute(V,O),V.normalized===!0&&gf(f,V),se[C+K+4]=f.x,se[C+K+5]=f.y,se[C+K+6]=f.z,se[C+K+7]=0),F===!0&&(f.fromBufferAttribute(H,O),H.normalized===!0&&gf(f,H),se[C+K+8]=f.x,se[C+K+9]=f.y,se[C+K+10]=f.z,se[C+K+11]=H.itemSize===4?f.w:1)}}T={count:_,texture:q,size:new Qe(B,fe)},a.set(v,T),v.addEventListener("dispose",te)}let A=0;for(let L=0;L<S.length;L++)A+=S[L];const k=v.morphTargetsRelative?1:1-A;x.getUniforms().setValue(u,"morphTargetBaseInfluence",k),x.getUniforms().setValue(u,"morphTargetInfluences",S),x.getUniforms().setValue(u,"morphTargetsTexture",T.texture,n),x.getUniforms().setValue(u,"morphTargetsTextureSize",T.size)}else{const y=S===void 0?0:S.length;let _=r[v.id];if(_===void 0||_.length!==y){_=[];for(let b=0;b<y;b++)_[b]=[b,0];r[v.id]=_}for(let b=0;b<y;b++){const F=_[b];F[0]=b,F[1]=S[b]}_.sort(_w);for(let b=0;b<8;b++)b<y&&_[b][1]?(c[b][0]=_[b][0],c[b][1]=_[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(xw);const T=v.morphAttributes.position,A=v.morphAttributes.normal;let k=0;for(let b=0;b<8;b++){const F=c[b],j=F[0],M=F[1];j!==Number.MAX_SAFE_INTEGER&&M?(T&&v.getAttribute("morphTarget"+b)!==T[j]&&v.setAttribute("morphTarget"+b,T[j]),A&&v.getAttribute("morphNormal"+b)!==A[j]&&v.setAttribute("morphNormal"+b,A[j]),o[b]=M,k+=M):(T&&v.hasAttribute("morphTarget"+b)===!0&&v.deleteAttribute("morphTarget"+b),A&&v.hasAttribute("morphNormal"+b)===!0&&v.deleteAttribute("morphNormal"+b),o[b]=0)}const L=v.morphTargetsRelative?1:1-k;x.getUniforms().setValue(u,"morphTargetBaseInfluence",L),x.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:m}}function Sw(u,e,n,r){let o=new WeakMap;function a(m){const h=r.render.frame,v=m.geometry,g=e.get(m,v);return o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),g}function f(){o=new WeakMap}function c(m){const h=m.target;h.removeEventListener("dispose",c),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:f}}const Sg=new qn,wg=new dg,Mg=new f_,Eg=new xg,Em=[],Tm=[],bm=new Float32Array(16),Cm=new Float32Array(9),Am=new Float32Array(4);function no(u,e,n){const r=u[0];if(r<=0||r>0)return u;const o=e*n;let a=Em[o];if(a===void 0&&(a=new Float32Array(o),Em[o]=a),e!==0){r.toArray(a,0);for(let f=1,c=0;f!==e;++f)c+=n,u[f].toArray(a,c)}return a}function gn(u,e){if(u.length!==e.length)return!1;for(let n=0,r=u.length;n<r;n++)if(u[n]!==e[n])return!1;return!0}function vn(u,e){for(let n=0,r=e.length;n<r;n++)u[n]=e[n]}function Kl(u,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=u.allocateTextureUnit();return n}function ww(u,e){const n=this.cache;n[0]!==e&&(u.uniform1f(this.addr,e),n[0]=e)}function Mw(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;u.uniform2fv(this.addr,e),vn(n,e)}}function Ew(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;u.uniform3fv(this.addr,e),vn(n,e)}}function Tw(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;u.uniform4fv(this.addr,e),vn(n,e)}}function bw(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;u.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Am.set(r),u.uniformMatrix2fv(this.addr,!1,Am),vn(n,r)}}function Cw(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;u.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Cm.set(r),u.uniformMatrix3fv(this.addr,!1,Cm),vn(n,r)}}function Aw(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;u.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;bm.set(r),u.uniformMatrix4fv(this.addr,!1,bm),vn(n,r)}}function Rw(u,e){const n=this.cache;n[0]!==e&&(u.uniform1i(this.addr,e),n[0]=e)}function Lw(u,e){const n=this.cache;gn(n,e)||(u.uniform2iv(this.addr,e),vn(n,e))}function Pw(u,e){const n=this.cache;gn(n,e)||(u.uniform3iv(this.addr,e),vn(n,e))}function Dw(u,e){const n=this.cache;gn(n,e)||(u.uniform4iv(this.addr,e),vn(n,e))}function Iw(u,e){const n=this.cache;n[0]!==e&&(u.uniform1ui(this.addr,e),n[0]=e)}function Nw(u,e){const n=this.cache;gn(n,e)||(u.uniform2uiv(this.addr,e),vn(n,e))}function kw(u,e){const n=this.cache;gn(n,e)||(u.uniform3uiv(this.addr,e),vn(n,e))}function Fw(u,e){const n=this.cache;gn(n,e)||(u.uniform4uiv(this.addr,e),vn(n,e))}function zw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture2D(e||Sg,o)}function Ow(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Mg,o)}function Uw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Eg,o)}function Bw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||wg,o)}function Gw(u){switch(u){case 5126:return ww;case 35664:return Mw;case 35665:return Ew;case 35666:return Tw;case 35674:return bw;case 35675:return Cw;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Lw;case 35668:case 35672:return Pw;case 35669:case 35673:return Dw;case 5125:return Iw;case 36294:return Nw;case 36295:return kw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Vw(u,e){u.uniform1fv(this.addr,e)}function Ww(u,e){const n=no(e,this.size,2);u.uniform2fv(this.addr,n)}function Hw(u,e){const n=no(e,this.size,3);u.uniform3fv(this.addr,n)}function jw(u,e){const n=no(e,this.size,4);u.uniform4fv(this.addr,n)}function qw(u,e){const n=no(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,n)}function Xw(u,e){const n=no(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,n)}function $w(u,e){const n=no(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,n)}function Yw(u,e){u.uniform1iv(this.addr,e)}function Kw(u,e){u.uniform2iv(this.addr,e)}function Zw(u,e){u.uniform3iv(this.addr,e)}function Qw(u,e){u.uniform4iv(this.addr,e)}function Jw(u,e){u.uniform1uiv(this.addr,e)}function e1(u,e){u.uniform2uiv(this.addr,e)}function t1(u,e){u.uniform3uiv(this.addr,e)}function n1(u,e){u.uniform4uiv(this.addr,e)}function i1(u,e,n){const r=e.length,o=Kl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Sg,o[a])}function r1(u,e,n){const r=e.length,o=Kl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Mg,o[a])}function s1(u,e,n){const r=e.length,o=Kl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Eg,o[a])}function o1(u,e,n){const r=e.length,o=Kl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||wg,o[a])}function a1(u){switch(u){case 5126:return Vw;case 35664:return Ww;case 35665:return Hw;case 35666:return jw;case 35674:return qw;case 35675:return Xw;case 35676:return $w;case 5124:case 35670:return Yw;case 35667:case 35671:return Kw;case 35668:case 35672:return Zw;case 35669:case 35673:return Qw;case 5125:return Jw;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}class l1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Gw(n.type)}}class u1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=a1(n.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let a=0,f=o.length;a!==f;++a){const c=o[a];c.setValue(e,n[c.id],r)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Rm(u,e){u.seq.push(e),u.map[e.id]=e}function f1(u,e,n){const r=u.name,o=r.length;for(vf.lastIndex=0;;){const a=vf.exec(r),f=vf.lastIndex;let c=a[1];const m=a[2]==="]",h=a[3];if(m&&(c=c|0),h===void 0||h==="["&&f+2===o){Rm(n,h===void 0?new l1(c,u,e):new u1(c,u,e));break}else{let g=n.map[c];g===void 0&&(g=new c1(c),Rm(n,g)),n=g}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,35718);for(let o=0;o<r;++o){const a=e.getActiveUniform(n,o),f=e.getUniformLocation(n,a.name);f1(a,f,this)}}setValue(e,n,r,o){const a=this.map[n];a!==void 0&&a.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let a=0,f=n.length;a!==f;++a){const c=n[a],m=r[c.id];m.needsUpdate!==!1&&c.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,a=e.length;o!==a;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Lm(u,e,n){const r=u.createShader(e);return u.shaderSource(r,n),u.compileShader(r),r}let d1=0;function h1(u,e){const n=u.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let f=o;f<a;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${n[f]}`)}return r.join(`
`)}function p1(u){switch(u){case es:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Pm(u,e,n){const r=u.getShaderParameter(e,35713),o=u.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const f=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+h1(u.getShaderSource(e),f)}else return o}function m1(u,e){const n=p1(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function g1(u,e){let n;switch(e){case zx:n="Linear";break;case Ox:n="Reinhard";break;case Ux:n="OptimizedCineon";break;case Bx:n="ACESFilmic";break;case Gx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+u+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function v1(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qo).join(`
`)}function x1(u){const e=[];for(const n in u){const r=u[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function _1(u,e){const n={},r=u.getProgramParameter(e,35721);for(let o=0;o<r;o++){const a=u.getActiveAttrib(e,o),f=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),n[f]={type:a.type,location:u.getAttribLocation(e,f),locationSize:c}}return n}function qo(u){return u!==""}function Dm(u,e){return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(u){return u.replace(y1,S1)}function S1(u,e){const n=tt[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Rf(n)}const w1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(u){return u.replace(M1,Tg).replace(w1,E1)}function E1(u,e,n,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Tg(u,e,n,r)}function Tg(u,e,n,r){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function km(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T1(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===Ws&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case sg:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Fx:e="ENVMAP_BLENDING_ADD";break}return e}function R1(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function L1(u,e,n,r){const o=u.getContext(),a=n.defines;let f=n.vertexShader,c=n.fragmentShader;const m=T1(n),h=b1(n),v=C1(n),g=A1(n),x=R1(n),S=n.isWebGL2?"":v1(n),E=x1(a),y=o.createProgram();let _,T,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[E].filter(qo).join(`
`),_.length>0&&(_+=`
`),T=[S,E].filter(qo).join(`
`),T.length>0&&(T+=`
`)):(_=[km(n),"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),T=[S,km(n),"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?tt.tonemapping_pars_fragment:"",n.toneMapping!==Oi?g1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.encodings_pars_fragment,m1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),f=Rf(f),f=Dm(f,n),f=Im(f,n),c=Rf(c),c=Dm(c,n),c=Im(c,n),f=Nm(f),c=Nm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,T=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const k=A+_+f,L=A+T+c,b=Lm(o,35633,k),F=Lm(o,35632,L);if(o.attachShader(y,b),o.attachShader(y,F),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),u.debug.checkShaderErrors){const z=o.getProgramInfoLog(y).trim(),Y=o.getShaderInfoLog(b).trim(),B=o.getShaderInfoLog(F).trim();let fe=!0,se=!0;if(o.getProgramParameter(y,35714)===!1){fe=!1;const q=Pm(o,b,"vertex"),ae=Pm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+z+`
`+q+`
`+ae)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||B==="")&&(se=!1);se&&(this.diagnostics={runnable:fe,programLog:z,vertexShader:{log:Y,prefix:_},fragmentShader:{log:B,prefix:T}})}o.deleteShader(b),o.deleteShader(F);let j;this.getUniforms=function(){return j===void 0&&(j=new Gl(o,y)),j};let M;return this.getAttributes=function(){return M===void 0&&(M=_1(o,y)),M},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=F,this}let P1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const r=new I1(e);n.set(e,r)}return n.get(e)}}class I1{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}}function N1(u,e,n,r,o,a,f){const c=new pg,m=new D1,h=[],v=o.isWebGL2,g=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M,z,Y,B,fe){const se=B.fog,q=fe.geometry,ae=M.isMeshStandardMaterial?B.environment:null,te=(M.isMeshStandardMaterial?n:e).get(M.envMap||ae),ee=te&&te.mapping===Xl?te.image.height:null,G=E[M.type];M.precision!==null&&(S=o.getMaxPrecision(M.precision),S!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",S,"instead."));const V=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,H=V!==void 0?V.length:0;let C=0;q.morphAttributes.position!==void 0&&(C=1),q.morphAttributes.normal!==void 0&&(C=2),q.morphAttributes.color!==void 0&&(C=3);let O,K,de,ge;if(G){const je=xi[G];O=je.vertexShader,K=je.fragmentShader}else O=M.vertexShader,K=M.fragmentShader,m.update(M),de=m.getVertexShaderID(M),ge=m.getFragmentShaderID(M);const X=u.getRenderTarget(),_e=M.alphaTest>0,ye=M.clearcoat>0,we=M.iridescence>0;return{isWebGL2:v,shaderID:G,shaderName:M.type,vertexShader:O,fragmentShader:K,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:S,instancing:fe.isInstancedMesh===!0,instancingColor:fe.isInstancedMesh===!0&&fe.instanceColor!==null,supportsVertexTextures:x,outputEncoding:X===null?u.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:es,map:!!M.map,matcap:!!M.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:ee,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===a_,tangentSpaceNormalMap:M.normalMapType===o_,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===It,clearcoat:ye,clearcoatMap:ye&&!!M.clearcoatMap,clearcoatRoughnessMap:ye&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!M.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!M.iridescenceMap,iridescenceThicknessMap:we&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===qs,alphaMap:!!M.alphaMap,alphaTest:_e,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!q.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!se,useFog:M.fog===!0,fogExp2:se&&se.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:g,skinning:fe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:C,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:M.dithering,shadowMapEnabled:u.shadowMap.enabled&&Y.length>0,shadowMapType:u.shadowMap.type,toneMapping:M.toneMapped?u.toneMapping:Oi,physicallyCorrectLights:u.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ks,flipSided:M.side===ui,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const z=[];if(M.shaderID?z.push(M.shaderID):(z.push(M.customVertexShaderID),z.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)z.push(Y),z.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(T(z,M),A(z,M),z.push(u.outputEncoding)),z.push(M.customProgramCacheKey),z.join()}function T(M,z){M.push(z.precision),M.push(z.outputEncoding),M.push(z.envMapMode),M.push(z.envMapCubeUVHeight),M.push(z.combine),M.push(z.vertexUvs),M.push(z.fogExp2),M.push(z.sizeAttenuation),M.push(z.morphTargetsCount),M.push(z.morphAttributeCount),M.push(z.numDirLights),M.push(z.numPointLights),M.push(z.numSpotLights),M.push(z.numHemiLights),M.push(z.numRectAreaLights),M.push(z.numDirLightShadows),M.push(z.numPointLightShadows),M.push(z.numSpotLightShadows),M.push(z.shadowMapType),M.push(z.toneMapping),M.push(z.numClippingPlanes),M.push(z.numClipIntersection),M.push(z.depthPacking)}function A(M,z){c.disableAll(),z.isWebGL2&&c.enable(0),z.supportsVertexTextures&&c.enable(1),z.instancing&&c.enable(2),z.instancingColor&&c.enable(3),z.map&&c.enable(4),z.matcap&&c.enable(5),z.envMap&&c.enable(6),z.lightMap&&c.enable(7),z.aoMap&&c.enable(8),z.emissiveMap&&c.enable(9),z.bumpMap&&c.enable(10),z.normalMap&&c.enable(11),z.objectSpaceNormalMap&&c.enable(12),z.tangentSpaceNormalMap&&c.enable(13),z.clearcoat&&c.enable(14),z.clearcoatMap&&c.enable(15),z.clearcoatRoughnessMap&&c.enable(16),z.clearcoatNormalMap&&c.enable(17),z.iridescence&&c.enable(18),z.iridescenceMap&&c.enable(19),z.iridescenceThicknessMap&&c.enable(20),z.displacementMap&&c.enable(21),z.specularMap&&c.enable(22),z.roughnessMap&&c.enable(23),z.metalnessMap&&c.enable(24),z.gradientMap&&c.enable(25),z.alphaMap&&c.enable(26),z.alphaTest&&c.enable(27),z.vertexColors&&c.enable(28),z.vertexAlphas&&c.enable(29),z.vertexUvs&&c.enable(30),z.vertexTangents&&c.enable(31),z.uvsVertexOnly&&c.enable(32),z.fog&&c.enable(33),M.push(c.mask),c.disableAll(),z.useFog&&c.enable(0),z.flatShading&&c.enable(1),z.logarithmicDepthBuffer&&c.enable(2),z.skinning&&c.enable(3),z.morphTargets&&c.enable(4),z.morphNormals&&c.enable(5),z.morphColors&&c.enable(6),z.premultipliedAlpha&&c.enable(7),z.shadowMapEnabled&&c.enable(8),z.physicallyCorrectLights&&c.enable(9),z.doubleSided&&c.enable(10),z.flipSided&&c.enable(11),z.useDepthPacking&&c.enable(12),z.dithering&&c.enable(13),z.specularIntensityMap&&c.enable(14),z.specularColorMap&&c.enable(15),z.transmission&&c.enable(16),z.transmissionMap&&c.enable(17),z.thicknessMap&&c.enable(18),z.sheen&&c.enable(19),z.sheenColorMap&&c.enable(20),z.sheenRoughnessMap&&c.enable(21),z.decodeVideoTexture&&c.enable(22),z.opaque&&c.enable(23),M.push(c.mask)}function k(M){const z=E[M.type];let Y;if(z){const B=xi[z];Y=jl.clone(B.uniforms)}else Y=M.uniforms;return Y}function L(M,z){let Y;for(let B=0,fe=h.length;B<fe;B++){const se=h[B];if(se.cacheKey===z){Y=se,++Y.usedTimes;break}}return Y===void 0&&(Y=new L1(u,z,M,a),h.push(Y)),Y}function b(M){if(--M.usedTimes===0){const z=h.indexOf(M);h[z]=h[h.length-1],h.pop(),M.destroy()}}function F(M){m.remove(M)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:k,acquireProgram:L,releaseProgram:b,releaseShaderCache:F,programs:h,dispose:j}}function k1(){let u=new WeakMap;function e(a){let f=u.get(a);return f===void 0&&(f={},u.set(a,f)),f}function n(a){u.delete(a)}function r(a,f,c){u.get(a)[f]=c}function o(){u=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function F1(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Fm(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function zm(){const u=[];let e=0;const n=[],r=[],o=[];function a(){e=0,n.length=0,r.length=0,o.length=0}function f(g,x,S,E,y,_){let T=u[e];return T===void 0?(T={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:y,group:_},u[e]=T):(T.id=g.id,T.object=g,T.geometry=x,T.material=S,T.groupOrder=E,T.renderOrder=g.renderOrder,T.z=y,T.group=_),e++,T}function c(g,x,S,E,y,_){const T=f(g,x,S,E,y,_);S.transmission>0?r.push(T):S.transparent===!0?o.push(T):n.push(T)}function m(g,x,S,E,y,_){const T=f(g,x,S,E,y,_);S.transmission>0?r.unshift(T):S.transparent===!0?o.unshift(T):n.unshift(T)}function h(g,x){n.length>1&&n.sort(g||F1),r.length>1&&r.sort(x||Fm),o.length>1&&o.sort(x||Fm)}function v(){for(let g=e,x=u.length;g<x;g++){const S=u[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:a,push:c,unshift:m,finish:v,sort:h}}function z1(){let u=new WeakMap;function e(r,o){let a;return u.has(r)===!1?(a=new zm,u.set(r,[a])):o>=u.get(r).length?(a=new zm,u.get(r).push(a)):a=u.get(r)[o],a}function n(){u=new WeakMap}return{get:e,dispose:n}}function O1(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new ft};break;case"SpotLight":n={position:new Q,direction:new Q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return u[e.id]=n,n}}}function U1(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=n,n}}}let B1=0;function G1(u,e){return(e.castShadow?1:0)-(u.castShadow?1:0)}function V1(u,e){const n=new O1,r=U1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let v=0;v<9;v++)o.probe.push(new Q);const a=new Q,f=new Kt,c=new Kt;function m(v,g){let x=0,S=0,E=0;for(let z=0;z<9;z++)o.probe[z].set(0,0,0);let y=0,_=0,T=0,A=0,k=0,L=0,b=0,F=0;v.sort(G1);const j=g!==!0?Math.PI:1;for(let z=0,Y=v.length;z<Y;z++){const B=v[z],fe=B.color,se=B.intensity,q=B.distance,ae=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=fe.r*se*j,S+=fe.g*se*j,E+=fe.b*se*j;else if(B.isLightProbe)for(let te=0;te<9;te++)o.probe[te].addScaledVector(B.sh.coefficients[te],se);else if(B.isDirectionalLight){const te=n.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*j),B.castShadow){const ee=B.shadow,G=r.get(B);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,o.directionalShadow[y]=G,o.directionalShadowMap[y]=ae,o.directionalShadowMatrix[y]=B.shadow.matrix,L++}o.directional[y]=te,y++}else if(B.isSpotLight){const te=n.get(B);if(te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(fe).multiplyScalar(se*j),te.distance=q,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,B.castShadow){const ee=B.shadow,G=r.get(B);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,o.spotShadow[T]=G,o.spotShadowMap[T]=ae,o.spotShadowMatrix[T]=B.shadow.matrix,F++}o.spot[T]=te,T++}else if(B.isRectAreaLight){const te=n.get(B);te.color.copy(fe).multiplyScalar(se),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),o.rectArea[A]=te,A++}else if(B.isPointLight){const te=n.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*j),te.distance=B.distance,te.decay=B.decay,B.castShadow){const ee=B.shadow,G=r.get(B);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,o.pointShadow[_]=G,o.pointShadowMap[_]=ae,o.pointShadowMatrix[_]=B.shadow.matrix,b++}o.point[_]=te,_++}else if(B.isHemisphereLight){const te=n.get(B);te.skyColor.copy(B.color).multiplyScalar(se*j),te.groundColor.copy(B.groundColor).multiplyScalar(se*j),o.hemi[k]=te,k++}}A>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_FLOAT_1,o.rectAreaLTC2=Ce.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_HALF_1,o.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=x,o.ambient[1]=S,o.ambient[2]=E;const M=o.hash;(M.directionalLength!==y||M.pointLength!==_||M.spotLength!==T||M.rectAreaLength!==A||M.hemiLength!==k||M.numDirectionalShadows!==L||M.numPointShadows!==b||M.numSpotShadows!==F)&&(o.directional.length=y,o.spot.length=T,o.rectArea.length=A,o.point.length=_,o.hemi.length=k,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=b,o.pointShadowMap.length=b,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=b,o.spotShadowMatrix.length=F,M.directionalLength=y,M.pointLength=_,M.spotLength=T,M.rectAreaLength=A,M.hemiLength=k,M.numDirectionalShadows=L,M.numPointShadows=b,M.numSpotShadows=F,o.version=B1++)}function h(v,g){let x=0,S=0,E=0,y=0,_=0;const T=g.matrixWorldInverse;for(let A=0,k=v.length;A<k;A++){const L=v[A];if(L.isDirectionalLight){const b=o.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(T),x++}else if(L.isSpotLight){const b=o.spot[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(T),E++}else if(L.isRectAreaLight){const b=o.rectArea[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),c.identity(),f.copy(L.matrixWorld),f.premultiply(T),c.extractRotation(f),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const b=o.point[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),S++}else if(L.isHemisphereLight){const b=o.hemi[_];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(T),_++}}}return{setup:m,setupView:h,state:o}}function Om(u,e){const n=new V1(u,e),r=[],o=[];function a(){r.length=0,o.length=0}function f(g){r.push(g)}function c(g){o.push(g)}function m(g){n.setup(r,g)}function h(g){n.setupView(r,g)}return{init:a,state:{lightsArray:r,shadowsArray:o,lights:n},setupLights:m,setupLightsView:h,pushLight:f,pushShadow:c}}function W1(u,e){let n=new WeakMap;function r(a,f=0){let c;return n.has(a)===!1?(c=new Om(u,e),n.set(a,[c])):f>=n.get(a).length?(c=new Om(u,e),n.get(a).push(c)):c=n.get(a)[f],c}function o(){n=new WeakMap}return{get:r,dispose:o}}class H1 extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q1=`void main() {
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
}`;function $1(u,e,n){let r=new _g;const o=new Qe,a=new Qe,f=new Yt,c=new H1({depthPacking:s_}),m=new j1,h={},v=n.maxTextureSize,g={0:ui,1:Zo,2:Ks},x=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:q1,fragmentShader:X1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zi(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng,this.render=function(L,b,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const j=u.getRenderTarget(),M=u.getActiveCubeFace(),z=u.getActiveMipmapLevel(),Y=u.state;Y.setBlending(_r),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let B=0,fe=L.length;B<fe;B++){const se=L[B],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ae=q.getFrameExtents();if(o.multiply(ae),a.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/ae.x),o.x=a.x*ae.x,q.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/ae.y),o.y=a.y*ae.y,q.mapSize.y=a.y)),q.map===null){const ee=this.type!==Ws?{minFilter:un,magFilter:un}:{};q.map=new ci(o.x,o.y,ee),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}u.setRenderTarget(q.map),u.clear();const te=q.getViewportCount();for(let ee=0;ee<te;ee++){const G=q.getViewport(ee);f.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),Y.viewport(f),q.updateMatrices(se,ee),r=q.getFrustum(),k(b,F,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Ws&&T(q,F),q.needsUpdate=!1}_.needsUpdate=!1,u.setRenderTarget(j,M,z)};function T(L,b){const F=e.update(y);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ci(o.x,o.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,u.setRenderTarget(L.mapPass),u.clear(),u.renderBufferDirect(b,null,F,x,y,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,u.setRenderTarget(L.map),u.clear(),u.renderBufferDirect(b,null,F,S,y,null)}function A(L,b,F,j,M,z){let Y=null;const B=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0?Y=B:Y=F.isPointLight===!0?m:c,u.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const fe=Y.uuid,se=b.uuid;let q=h[fe];q===void 0&&(q={},h[fe]=q);let ae=q[se];ae===void 0&&(ae=Y.clone(),q[se]=ae),Y=ae}return Y.visible=b.visible,Y.wireframe=b.wireframe,z===Ws?Y.side=b.shadowSide!==null?b.shadowSide:b.side:Y.side=b.shadowSide!==null?b.shadowSide:g[b.side],Y.alphaMap=b.alphaMap,Y.alphaTest=b.alphaTest,Y.clipShadows=b.clipShadows,Y.clippingPlanes=b.clippingPlanes,Y.clipIntersection=b.clipIntersection,Y.displacementMap=b.displacementMap,Y.displacementScale=b.displacementScale,Y.displacementBias=b.displacementBias,Y.wireframeLinewidth=b.wireframeLinewidth,Y.linewidth=b.linewidth,F.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(F.matrixWorld),Y.nearDistance=j,Y.farDistance=M),Y}function k(L,b,F,j,M){if(L.visible===!1)return;if(L.layers.test(b.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Ws)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const B=e.update(L),fe=L.material;if(Array.isArray(fe)){const se=B.groups;for(let q=0,ae=se.length;q<ae;q++){const te=se[q],ee=fe[te.materialIndex];if(ee&&ee.visible){const G=A(L,ee,j,F.near,F.far,M);u.renderBufferDirect(F,null,B,G,L,te)}}}else if(fe.visible){const se=A(L,fe,j,F.near,F.far,M);u.renderBufferDirect(F,null,B,se,L,null)}}const Y=L.children;for(let B=0,fe=Y.length;B<fe;B++)k(Y[B],b,F,j,M)}}function Y1(u,e,n){const r=n.isWebGL2;function o(){let $=!1;const Le=new Yt;let ce=null;const Re=new Yt(0,0,0,0);return{setMask:function(be){ce!==be&&!$&&(u.colorMask(be,be,be,be),ce=be)},setLocked:function(be){$=be},setClear:function(be,Je,Ft,Et,Yn){Yn===!0&&(be*=Et,Je*=Et,Ft*=Et),Le.set(be,Je,Ft,Et),Re.equals(Le)===!1&&(u.clearColor(be,Je,Ft,Et),Re.copy(Le))},reset:function(){$=!1,ce=null,Re.set(-1,0,0,0)}}}function a(){let $=!1,Le=null,ce=null,Re=null;return{setTest:function(be){be?_e(2929):ye(2929)},setMask:function(be){Le!==be&&!$&&(u.depthMask(be),Le=be)},setFunc:function(be){if(ce!==be){if(be)switch(be){case Ax:u.depthFunc(512);break;case Rx:u.depthFunc(519);break;case Lx:u.depthFunc(513);break;case wf:u.depthFunc(515);break;case Px:u.depthFunc(514);break;case Dx:u.depthFunc(518);break;case Ix:u.depthFunc(516);break;case Nx:u.depthFunc(517);break;default:u.depthFunc(515)}else u.depthFunc(515);ce=be}},setLocked:function(be){$=be},setClear:function(be){Re!==be&&(u.clearDepth(be),Re=be)},reset:function(){$=!1,Le=null,ce=null,Re=null}}}function f(){let $=!1,Le=null,ce=null,Re=null,be=null,Je=null,Ft=null,Et=null,Yn=null;return{setTest:function(yt){$||(yt?_e(2960):ye(2960))},setMask:function(yt){Le!==yt&&!$&&(u.stencilMask(yt),Le=yt)},setFunc:function(yt,Nn,tn){(ce!==yt||Re!==Nn||be!==tn)&&(u.stencilFunc(yt,Nn,tn),ce=yt,Re=Nn,be=tn)},setOp:function(yt,Nn,tn){(Je!==yt||Ft!==Nn||Et!==tn)&&(u.stencilOp(yt,Nn,tn),Je=yt,Ft=Nn,Et=tn)},setLocked:function(yt){$=yt},setClear:function(yt){Yn!==yt&&(u.clearStencil(yt),Yn=yt)},reset:function(){$=!1,Le=null,ce=null,Re=null,be=null,Je=null,Ft=null,Et=null,Yn=null}}}const c=new o,m=new a,h=new f,v=new WeakMap,g=new WeakMap;let x={},S={},E=new WeakMap,y=[],_=null,T=!1,A=null,k=null,L=null,b=null,F=null,j=null,M=null,z=!1,Y=null,B=null,fe=null,se=null,q=null;const ae=u.getParameter(35661);let te=!1,ee=0;const G=u.getParameter(7938);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),te=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),te=ee>=2);let V=null,H={};const C=u.getParameter(3088),O=u.getParameter(2978),K=new Yt().fromArray(C),de=new Yt().fromArray(O);function ge($,Le,ce){const Re=new Uint8Array(4),be=u.createTexture();u.bindTexture($,be),u.texParameteri($,10241,9728),u.texParameteri($,10240,9728);for(let Je=0;Je<ce;Je++)u.texImage2D(Le+Je,0,6408,1,1,0,6408,5121,Re);return be}const X={};X[3553]=ge(3553,3553,1),X[34067]=ge(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),h.setClear(0),_e(2929),m.setFunc(wf),xt(!1),Lt(Ap),_e(2884),dt(_r);function _e($){x[$]!==!0&&(u.enable($),x[$]=!0)}function ye($){x[$]!==!1&&(u.disable($),x[$]=!1)}function we($,Le){return S[$]!==Le?(u.bindFramebuffer($,Le),S[$]=Le,r&&($===36009&&(S[36160]=Le),$===36160&&(S[36009]=Le)),!0):!1}function Se($,Le){let ce=y,Re=!1;if($)if(ce=E.get(Le),ce===void 0&&(ce=[],E.set(Le,ce)),$.isWebGLMultipleRenderTargets){const be=$.texture;if(ce.length!==be.length||ce[0]!==36064){for(let Je=0,Ft=be.length;Je<Ft;Je++)ce[Je]=36064+Je;ce.length=be.length,Re=!0}}else ce[0]!==36064&&(ce[0]=36064,Re=!0);else ce[0]!==1029&&(ce[0]=1029,Re=!0);Re&&(n.isWebGL2?u.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function je($){return _!==$?(u.useProgram($),_=$,!0):!1}const Ge={[Bs]:32774,[vx]:32778,[xx]:32779};if(r)Ge[Pp]=32775,Ge[Dp]=32776;else{const $=e.get("EXT_blend_minmax");$!==null&&(Ge[Pp]=$.MIN_EXT,Ge[Dp]=$.MAX_EXT)}const Ie={[_x]:0,[yx]:1,[Sx]:768,[ig]:770,[Cx]:776,[Tx]:774,[Mx]:772,[wx]:769,[rg]:771,[bx]:775,[Ex]:773};function dt($,Le,ce,Re,be,Je,Ft,Et){if($===_r){T===!0&&(ye(3042),T=!1);return}if(T===!1&&(_e(3042),T=!0),$!==gx){if($!==A||Et!==z){if((k!==Bs||F!==Bs)&&(u.blendEquation(32774),k=Bs,F=Bs),Et)switch($){case qs:u.blendFuncSeparate(1,771,1,771);break;case Qo:u.blendFunc(1,1);break;case Rp:u.blendFuncSeparate(0,769,0,1);break;case Lp:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case qs:u.blendFuncSeparate(770,771,1,771);break;case Qo:u.blendFunc(770,1);break;case Rp:u.blendFuncSeparate(0,769,0,1);break;case Lp:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}L=null,b=null,j=null,M=null,A=$,z=Et}return}be=be||Le,Je=Je||ce,Ft=Ft||Re,(Le!==k||be!==F)&&(u.blendEquationSeparate(Ge[Le],Ge[be]),k=Le,F=be),(ce!==L||Re!==b||Je!==j||Ft!==M)&&(u.blendFuncSeparate(Ie[ce],Ie[Re],Ie[Je],Ie[Ft]),L=ce,b=Re,j=Je,M=Ft),A=$,z=null}function kt($,Le){$.side===Ks?ye(2884):_e(2884);let ce=$.side===ui;Le&&(ce=!ce),xt(ce),$.blending===qs&&$.transparent===!1?dt(_r):dt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),m.setFunc($.depthFunc),m.setTest($.depthTest),m.setMask($.depthWrite),c.setMask($.colorWrite);const Re=$.stencilWrite;h.setTest(Re),Re&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),rt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?_e(32926):ye(32926)}function xt($){Y!==$&&($?u.frontFace(2304):u.frontFace(2305),Y=$)}function Lt($){$!==dx?(_e(2884),$!==B&&($===Ap?u.cullFace(1029):$===hx?u.cullFace(1028):u.cullFace(1032))):ye(2884),B=$}function ht($){$!==fe&&(te&&u.lineWidth($),fe=$)}function rt($,Le,ce){$?(_e(32823),(se!==Le||q!==ce)&&(u.polygonOffset(Le,ce),se=Le,q=ce)):ye(32823)}function Bt($){$?_e(3089):ye(3089)}function Pt($){$===void 0&&($=33984+ae-1),V!==$&&(u.activeTexture($),V=$)}function N($,Le){V===null&&Pt();let ce=H[V];ce===void 0&&(ce={type:void 0,texture:void 0},H[V]=ce),(ce.type!==$||ce.texture!==Le)&&(u.bindTexture($,Le||X[$]),ce.type=$,ce.texture=Le)}function R(){const $=H[V];$!==void 0&&$.type!==void 0&&(u.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function he(){try{u.compressedTexImage2D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{u.texSubImage2D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Te(){try{u.texSubImage3D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ae(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function qe(){try{u.texStorage2D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function le(){try{u.texStorage3D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ue(){try{u.texImage2D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{u.texImage3D.apply(u,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be($){K.equals($)===!1&&(u.scissor($.x,$.y,$.z,$.w),K.copy($))}function ke($){de.equals($)===!1&&(u.viewport($.x,$.y,$.z,$.w),de.copy($))}function Ye($,Le){let ce=g.get(Le);ce===void 0&&(ce=new WeakMap,g.set(Le,ce));let Re=ce.get($);Re===void 0&&(Re=u.getUniformBlockIndex(Le,$.name),ce.set($,Re))}function ot($,Le){const Re=g.get(Le).get($);v.get($)!==Re&&(u.uniformBlockBinding(Le,Re,$.__bindingPointIndex),v.set($,Re))}function _t(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),r===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),x={},V=null,H={},S={},E=new WeakMap,y=[],_=null,T=!1,A=null,k=null,L=null,b=null,F=null,j=null,M=null,z=!1,Y=null,B=null,fe=null,se=null,q=null,K.set(0,0,u.canvas.width,u.canvas.height),de.set(0,0,u.canvas.width,u.canvas.height),c.reset(),m.reset(),h.reset()}return{buffers:{color:c,depth:m,stencil:h},enable:_e,disable:ye,bindFramebuffer:we,drawBuffers:Se,useProgram:je,setBlending:dt,setMaterial:kt,setFlipSided:xt,setCullFace:Lt,setLineWidth:ht,setPolygonOffset:rt,setScissorTest:Bt,activeTexture:Pt,bindTexture:N,unbindTexture:R,compressedTexImage2D:he,texImage2D:Ue,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:ot,texStorage2D:qe,texStorage3D:le,texSubImage2D:Me,texSubImage3D:Te,compressedTexSubImage2D:Ae,scissor:Be,viewport:ke,reset:_t}}function K1(u,e,n,r,o,a,f){const c=o.isWebGL2,m=o.maxTextures,h=o.maxCubemapSize,v=o.maxTextureSize,g=o.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let y;const _=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,R){return T?new OffscreenCanvas(N,R):Hl("canvas")}function k(N,R,he,Me){let Te=1;if((N.width>Me||N.height>Me)&&(Te=Me/Math.max(N.width,N.height)),Te<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Ae=R?Af:Math.floor,qe=Ae(Te*N.width),le=Ae(Te*N.height);y===void 0&&(y=A(qe,le));const Ue=he?A(qe,le):y;return Ue.width=qe,Ue.height=le,Ue.getContext("2d").drawImage(N,0,0,qe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+qe+"x"+le+")."),Ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function L(N){return sm(N.width)&&sm(N.height)}function b(N){return c?!1:N.wrapS!==ai||N.wrapT!==ai||N.minFilter!==un&&N.minFilter!==Wn}function F(N,R){return N.generateMipmaps&&R&&N.minFilter!==un&&N.minFilter!==Wn}function j(N){u.generateMipmap(N)}function M(N,R,he,Me,Te=!1){if(c===!1)return R;if(N!==null){if(u[N]!==void 0)return u[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ae=R;return R===6403&&(he===5126&&(Ae=33326),he===5131&&(Ae=33325),he===5121&&(Ae=33321)),R===33319&&(he===5126&&(Ae=33328),he===5131&&(Ae=33327),he===5121&&(Ae=33323)),R===6408&&(he===5126&&(Ae=34836),he===5131&&(Ae=34842),he===5121&&(Ae=Me===It&&Te===!1?35907:32856),he===32819&&(Ae=32854),he===32820&&(Ae=32855)),(Ae===33325||Ae===33326||Ae===33327||Ae===33328||Ae===34842||Ae===34836)&&e.get("EXT_color_buffer_float"),Ae}function z(N,R,he){return F(N,he)===!0||N.isFramebufferTexture&&N.minFilter!==un&&N.minFilter!==Wn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function Y(N){return N===un||N===Ip||N===Np?9728:9729}function B(N){const R=N.target;R.removeEventListener("dispose",B),se(R),R.isVideoTexture&&E.delete(R)}function fe(N){const R=N.target;R.removeEventListener("dispose",fe),ae(R)}function se(N){const R=r.get(N);if(R.__webglInit===void 0)return;const he=N.source,Me=_.get(he);if(Me){const Te=Me[R.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&q(N),Object.keys(Me).length===0&&_.delete(he)}r.remove(N)}function q(N){const R=r.get(N);u.deleteTexture(R.__webglTexture);const he=N.source,Me=_.get(he);delete Me[R.__cacheKey],f.memory.textures--}function ae(N){const R=N.texture,he=r.get(N),Me=r.get(R);if(Me.__webglTexture!==void 0&&(u.deleteTexture(Me.__webglTexture),f.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Te=0;Te<6;Te++)u.deleteFramebuffer(he.__webglFramebuffer[Te]),he.__webglDepthbuffer&&u.deleteRenderbuffer(he.__webglDepthbuffer[Te]);else{if(u.deleteFramebuffer(he.__webglFramebuffer),he.__webglDepthbuffer&&u.deleteRenderbuffer(he.__webglDepthbuffer),he.__webglMultisampledFramebuffer&&u.deleteFramebuffer(he.__webglMultisampledFramebuffer),he.__webglColorRenderbuffer)for(let Te=0;Te<he.__webglColorRenderbuffer.length;Te++)he.__webglColorRenderbuffer[Te]&&u.deleteRenderbuffer(he.__webglColorRenderbuffer[Te]);he.__webglDepthRenderbuffer&&u.deleteRenderbuffer(he.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Te=0,Ae=R.length;Te<Ae;Te++){const qe=r.get(R[Te]);qe.__webglTexture&&(u.deleteTexture(qe.__webglTexture),f.memory.textures--),r.remove(R[Te])}r.remove(R),r.remove(N)}let te=0;function ee(){te=0}function G(){const N=te;return N>=m&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+m),te+=1,N}function V(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.encoding),R.join()}function H(N,R){const he=r.get(N);if(N.isVideoTexture&&Bt(N),N.isRenderTargetTexture===!1&&N.version>0&&he.__version!==N.version){const Me=N.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(he,N,R);return}}n.activeTexture(33984+R),n.bindTexture(3553,he.__webglTexture)}function C(N,R){const he=r.get(N);if(N.version>0&&he.__version!==N.version){ye(he,N,R);return}n.activeTexture(33984+R),n.bindTexture(35866,he.__webglTexture)}function O(N,R){const he=r.get(N);if(N.version>0&&he.__version!==N.version){ye(he,N,R);return}n.activeTexture(33984+R),n.bindTexture(32879,he.__webglTexture)}function K(N,R){const he=r.get(N);if(N.version>0&&he.__version!==N.version){we(he,N,R);return}n.activeTexture(33984+R),n.bindTexture(34067,he.__webglTexture)}const de={[Tf]:10497,[ai]:33071,[bf]:33648},ge={[un]:9728,[Ip]:9984,[Np]:9986,[Wn]:9729,[Vx]:9985,[$l]:9987};function X(N,R,he){if(he?(u.texParameteri(N,10242,de[R.wrapS]),u.texParameteri(N,10243,de[R.wrapT]),(N===32879||N===35866)&&u.texParameteri(N,32882,de[R.wrapR]),u.texParameteri(N,10240,ge[R.magFilter]),u.texParameteri(N,10241,ge[R.minFilter])):(u.texParameteri(N,10242,33071),u.texParameteri(N,10243,33071),(N===32879||N===35866)&&u.texParameteri(N,32882,33071),(R.wrapS!==ai||R.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(N,10240,Y(R.magFilter)),u.texParameteri(N,10241,Y(R.minFilter)),R.minFilter!==un&&R.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(R.type===qr&&e.has("OES_texture_float_linear")===!1||c===!1&&R.type===Jo&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(u.texParameterf(N,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function _e(N,R){let he=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",B));const Me=R.source;let Te=_.get(Me);Te===void 0&&(Te={},_.set(Me,Te));const Ae=V(R);if(Ae!==N.__cacheKey){Te[Ae]===void 0&&(Te[Ae]={texture:u.createTexture(),usedTimes:0},f.memory.textures++,he=!0),Te[Ae].usedTimes++;const qe=Te[N.__cacheKey];qe!==void 0&&(Te[N.__cacheKey].usedTimes--,qe.usedTimes===0&&q(R)),N.__cacheKey=Ae,N.__webglTexture=Te[Ae].texture}return he}function ye(N,R,he){let Me=3553;R.isDataArrayTexture&&(Me=35866),R.isData3DTexture&&(Me=32879);const Te=_e(N,R),Ae=R.source;if(n.activeTexture(33984+he),n.bindTexture(Me,N.__webglTexture),Ae.version!==Ae.__currentVersion||Te===!0){u.pixelStorei(37440,R.flipY),u.pixelStorei(37441,R.premultiplyAlpha),u.pixelStorei(3317,R.unpackAlignment),u.pixelStorei(37443,0);const qe=b(R)&&L(R.image)===!1;let le=k(R.image,qe,!1,v);le=Pt(R,le);const Ue=L(le)||c,De=a.convert(R.format,R.encoding);let Be=a.convert(R.type),ke=M(R.internalFormat,De,Be,R.encoding,R.isVideoTexture);X(Me,R,Ue);let Ye;const ot=R.mipmaps,_t=c&&R.isVideoTexture!==!0,$=Ae.__currentVersion===void 0||Te===!0,Le=z(R,le,Ue);if(R.isDepthTexture)ke=6402,c?R.type===qr?ke=36012:R.type===jr?ke=33190:R.type===Xs?ke=35056:ke=33189:R.type===qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===$r&&ke===6402&&R.type!==ag&&R.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=jr,Be=a.convert(R.type)),R.format===Js&&ke===6402&&(ke=34041,R.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Xs,Be=a.convert(R.type))),$&&(_t?n.texStorage2D(3553,1,ke,le.width,le.height):n.texImage2D(3553,0,ke,le.width,le.height,0,De,Be,null));else if(R.isDataTexture)if(ot.length>0&&Ue){_t&&$&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ce=0,Re=ot.length;ce<Re;ce++)Ye=ot[ce],_t?n.texSubImage2D(3553,ce,0,0,Ye.width,Ye.height,De,Be,Ye.data):n.texImage2D(3553,ce,ke,Ye.width,Ye.height,0,De,Be,Ye.data);R.generateMipmaps=!1}else _t?($&&n.texStorage2D(3553,Le,ke,le.width,le.height),n.texSubImage2D(3553,0,0,0,le.width,le.height,De,Be,le.data)):n.texImage2D(3553,0,ke,le.width,le.height,0,De,Be,le.data);else if(R.isCompressedTexture){_t&&$&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ce=0,Re=ot.length;ce<Re;ce++)Ye=ot[ce],R.format!==li?De!==null?_t?n.compressedTexSubImage2D(3553,ce,0,0,Ye.width,Ye.height,De,Ye.data):n.compressedTexImage2D(3553,ce,ke,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage2D(3553,ce,0,0,Ye.width,Ye.height,De,Be,Ye.data):n.texImage2D(3553,ce,ke,Ye.width,Ye.height,0,De,Be,Ye.data)}else if(R.isDataArrayTexture)_t?($&&n.texStorage3D(35866,Le,ke,le.width,le.height,le.depth),n.texSubImage3D(35866,0,0,0,0,le.width,le.height,le.depth,De,Be,le.data)):n.texImage3D(35866,0,ke,le.width,le.height,le.depth,0,De,Be,le.data);else if(R.isData3DTexture)_t?($&&n.texStorage3D(32879,Le,ke,le.width,le.height,le.depth),n.texSubImage3D(32879,0,0,0,0,le.width,le.height,le.depth,De,Be,le.data)):n.texImage3D(32879,0,ke,le.width,le.height,le.depth,0,De,Be,le.data);else if(R.isFramebufferTexture){if($)if(_t)n.texStorage2D(3553,Le,ke,le.width,le.height);else{let ce=le.width,Re=le.height;for(let be=0;be<Le;be++)n.texImage2D(3553,be,ke,ce,Re,0,De,Be,null),ce>>=1,Re>>=1}}else if(ot.length>0&&Ue){_t&&$&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ce=0,Re=ot.length;ce<Re;ce++)Ye=ot[ce],_t?n.texSubImage2D(3553,ce,0,0,De,Be,Ye):n.texImage2D(3553,ce,ke,De,Be,Ye);R.generateMipmaps=!1}else _t?($&&n.texStorage2D(3553,Le,ke,le.width,le.height),n.texSubImage2D(3553,0,0,0,De,Be,le)):n.texImage2D(3553,0,ke,De,Be,le);F(R,Ue)&&j(Me),Ae.__currentVersion=Ae.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function we(N,R,he){if(R.image.length!==6)return;const Me=_e(N,R),Te=R.source;if(n.activeTexture(33984+he),n.bindTexture(34067,N.__webglTexture),Te.version!==Te.__currentVersion||Me===!0){u.pixelStorei(37440,R.flipY),u.pixelStorei(37441,R.premultiplyAlpha),u.pixelStorei(3317,R.unpackAlignment),u.pixelStorei(37443,0);const Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,qe=R.image[0]&&R.image[0].isDataTexture,le=[];for(let ce=0;ce<6;ce++)!Ae&&!qe?le[ce]=k(R.image[ce],!1,!0,h):le[ce]=qe?R.image[ce].image:R.image[ce],le[ce]=Pt(R,le[ce]);const Ue=le[0],De=L(Ue)||c,Be=a.convert(R.format,R.encoding),ke=a.convert(R.type),Ye=M(R.internalFormat,Be,ke,R.encoding),ot=c&&R.isVideoTexture!==!0,_t=Te.__currentVersion===void 0||Me===!0;let $=z(R,Ue,De);X(34067,R,De);let Le;if(Ae){ot&&_t&&n.texStorage2D(34067,$,Ye,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){Le=le[ce].mipmaps;for(let Re=0;Re<Le.length;Re++){const be=Le[Re];R.format!==li?Be!==null?ot?n.compressedTexSubImage2D(34069+ce,Re,0,0,be.width,be.height,Be,be.data):n.compressedTexImage2D(34069+ce,Re,Ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?n.texSubImage2D(34069+ce,Re,0,0,be.width,be.height,Be,ke,be.data):n.texImage2D(34069+ce,Re,Ye,be.width,be.height,0,Be,ke,be.data)}}}else{Le=R.mipmaps,ot&&_t&&(Le.length>0&&$++,n.texStorage2D(34067,$,Ye,le[0].width,le[0].height));for(let ce=0;ce<6;ce++)if(qe){ot?n.texSubImage2D(34069+ce,0,0,0,le[ce].width,le[ce].height,Be,ke,le[ce].data):n.texImage2D(34069+ce,0,Ye,le[ce].width,le[ce].height,0,Be,ke,le[ce].data);for(let Re=0;Re<Le.length;Re++){const Je=Le[Re].image[ce].image;ot?n.texSubImage2D(34069+ce,Re+1,0,0,Je.width,Je.height,Be,ke,Je.data):n.texImage2D(34069+ce,Re+1,Ye,Je.width,Je.height,0,Be,ke,Je.data)}}else{ot?n.texSubImage2D(34069+ce,0,0,0,Be,ke,le[ce]):n.texImage2D(34069+ce,0,Ye,Be,ke,le[ce]);for(let Re=0;Re<Le.length;Re++){const be=Le[Re];ot?n.texSubImage2D(34069+ce,Re+1,0,0,Be,ke,be.image[ce]):n.texImage2D(34069+ce,Re+1,Ye,Be,ke,be.image[ce])}}}F(R,De)&&j(34067),Te.__currentVersion=Te.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Se(N,R,he,Me,Te){const Ae=a.convert(he.format,he.encoding),qe=a.convert(he.type),le=M(he.internalFormat,Ae,qe,he.encoding);r.get(R).__hasExternalTextures||(Te===32879||Te===35866?n.texImage3D(Te,0,le,R.width,R.height,R.depth,0,Ae,qe,null):n.texImage2D(Te,0,le,R.width,R.height,0,Ae,qe,null)),n.bindFramebuffer(36160,N),rt(R)?x.framebufferTexture2DMultisampleEXT(36160,Me,Te,r.get(he).__webglTexture,0,ht(R)):u.framebufferTexture2D(36160,Me,Te,r.get(he).__webglTexture,0),n.bindFramebuffer(36160,null)}function je(N,R,he){if(u.bindRenderbuffer(36161,N),R.depthBuffer&&!R.stencilBuffer){let Me=33189;if(he||rt(R)){const Te=R.depthTexture;Te&&Te.isDepthTexture&&(Te.type===qr?Me=36012:Te.type===jr&&(Me=33190));const Ae=ht(R);rt(R)?x.renderbufferStorageMultisampleEXT(36161,Ae,Me,R.width,R.height):u.renderbufferStorageMultisample(36161,Ae,Me,R.width,R.height)}else u.renderbufferStorage(36161,Me,R.width,R.height);u.framebufferRenderbuffer(36160,36096,36161,N)}else if(R.depthBuffer&&R.stencilBuffer){const Me=ht(R);he&&rt(R)===!1?u.renderbufferStorageMultisample(36161,Me,35056,R.width,R.height):rt(R)?x.renderbufferStorageMultisampleEXT(36161,Me,35056,R.width,R.height):u.renderbufferStorage(36161,34041,R.width,R.height),u.framebufferRenderbuffer(36160,33306,36161,N)}else{const Me=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Te=0;Te<Me.length;Te++){const Ae=Me[Te],qe=a.convert(Ae.format,Ae.encoding),le=a.convert(Ae.type),Ue=M(Ae.internalFormat,qe,le,Ae.encoding),De=ht(R);he&&rt(R)===!1?u.renderbufferStorageMultisample(36161,De,Ue,R.width,R.height):rt(R)?x.renderbufferStorageMultisampleEXT(36161,De,Ue,R.width,R.height):u.renderbufferStorage(36161,Ue,R.width,R.height)}}u.bindRenderbuffer(36161,null)}function Ge(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const Me=r.get(R.depthTexture).__webglTexture,Te=ht(R);if(R.depthTexture.format===$r)rt(R)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,Me,0,Te):u.framebufferTexture2D(36160,36096,3553,Me,0);else if(R.depthTexture.format===Js)rt(R)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,Me,0,Te):u.framebufferTexture2D(36160,33306,3553,Me,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const R=r.get(N),he=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(he)throw new Error("target.depthTexture not supported in Cube render targets");Ge(R.__webglFramebuffer,N)}else if(he){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(36160,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]=u.createRenderbuffer(),je(R.__webglDepthbuffer[Me],N,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=u.createRenderbuffer(),je(R.__webglDepthbuffer,N,!1);n.bindFramebuffer(36160,null)}function dt(N,R,he){const Me=r.get(N);R!==void 0&&Se(Me.__webglFramebuffer,N,N.texture,36064,3553),he!==void 0&&Ie(N)}function kt(N){const R=N.texture,he=r.get(N),Me=r.get(R);N.addEventListener("dispose",fe),N.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=u.createTexture()),Me.__version=R.version,f.memory.textures++);const Te=N.isWebGLCubeRenderTarget===!0,Ae=N.isWebGLMultipleRenderTargets===!0,qe=L(N)||c;if(Te){he.__webglFramebuffer=[];for(let le=0;le<6;le++)he.__webglFramebuffer[le]=u.createFramebuffer()}else{if(he.__webglFramebuffer=u.createFramebuffer(),Ae)if(o.drawBuffers){const le=N.texture;for(let Ue=0,De=le.length;Ue<De;Ue++){const Be=r.get(le[Ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=u.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&rt(N)===!1){const le=Ae?R:[R];he.__webglMultisampledFramebuffer=u.createFramebuffer(),he.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,he.__webglMultisampledFramebuffer);for(let Ue=0;Ue<le.length;Ue++){const De=le[Ue];he.__webglColorRenderbuffer[Ue]=u.createRenderbuffer(),u.bindRenderbuffer(36161,he.__webglColorRenderbuffer[Ue]);const Be=a.convert(De.format,De.encoding),ke=a.convert(De.type),Ye=M(De.internalFormat,Be,ke,De.encoding),ot=ht(N);u.renderbufferStorageMultisample(36161,ot,Ye,N.width,N.height),u.framebufferRenderbuffer(36160,36064+Ue,36161,he.__webglColorRenderbuffer[Ue])}u.bindRenderbuffer(36161,null),N.depthBuffer&&(he.__webglDepthRenderbuffer=u.createRenderbuffer(),je(he.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(36160,null)}}if(Te){n.bindTexture(34067,Me.__webglTexture),X(34067,R,qe);for(let le=0;le<6;le++)Se(he.__webglFramebuffer[le],N,R,36064,34069+le);F(R,qe)&&j(34067),n.unbindTexture()}else if(Ae){const le=N.texture;for(let Ue=0,De=le.length;Ue<De;Ue++){const Be=le[Ue],ke=r.get(Be);n.bindTexture(3553,ke.__webglTexture),X(3553,Be,qe),Se(he.__webglFramebuffer,N,Be,36064+Ue,3553),F(Be,qe)&&j(3553)}n.unbindTexture()}else{let le=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?le=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,Me.__webglTexture),X(le,R,qe),Se(he.__webglFramebuffer,N,R,36064,le),F(R,qe)&&j(le),n.unbindTexture()}N.depthBuffer&&Ie(N)}function xt(N){const R=L(N)||c,he=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Me=0,Te=he.length;Me<Te;Me++){const Ae=he[Me];if(F(Ae,R)){const qe=N.isWebGLCubeRenderTarget?34067:3553,le=r.get(Ae).__webglTexture;n.bindTexture(qe,le),j(qe),n.unbindTexture()}}}function Lt(N){if(c&&N.samples>0&&rt(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],he=N.width,Me=N.height;let Te=16384;const Ae=[],qe=N.stencilBuffer?33306:36096,le=r.get(N),Ue=N.isWebGLMultipleRenderTargets===!0;if(Ue)for(let De=0;De<R.length;De++)n.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+De,36161,null),n.bindFramebuffer(36160,le.__webglFramebuffer),u.framebufferTexture2D(36009,36064+De,3553,null,0);n.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,le.__webglFramebuffer);for(let De=0;De<R.length;De++){Ae.push(36064+De),N.depthBuffer&&Ae.push(qe);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(N.depthBuffer&&(Te|=256),N.stencilBuffer&&(Te|=1024)),Ue&&u.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[De]),Be===!0&&(u.invalidateFramebuffer(36008,[qe]),u.invalidateFramebuffer(36009,[qe])),Ue){const ke=r.get(R[De]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,ke,0)}u.blitFramebuffer(0,0,he,Me,0,0,he,Me,Te,9728),S&&u.invalidateFramebuffer(36008,Ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ue)for(let De=0;De<R.length;De++){n.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+De,36161,le.__webglColorRenderbuffer[De]);const Be=r.get(R[De]).__webglTexture;n.bindFramebuffer(36160,le.__webglFramebuffer),u.framebufferTexture2D(36009,36064+De,3553,Be,0)}n.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function ht(N){return Math.min(g,N.samples)}function rt(N){const R=r.get(N);return c&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Bt(N){const R=f.render.frame;E.get(N)!==R&&(E.set(N,R),N.update())}function Pt(N,R){const he=N.encoding,Me=N.format,Te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Cf||he!==es&&(he===It?c===!1?e.has("EXT_sRGB")===!0&&Me===li?(N.format=Cf,N.minFilter=Wn,N.generateMipmaps=!1):R=cg.sRGBToLinear(R):(Me!==li||Te!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",he)),R}this.allocateTextureUnit=G,this.resetTextureUnits=ee,this.setTexture2D=H,this.setTexture2DArray=C,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=dt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=rt}function Z1(u,e,n){const r=n.isWebGL2;function o(a,f=null){let c;if(a===Jr)return 5121;if(a===qx)return 32819;if(a===Xx)return 32820;if(a===Wx)return 5120;if(a===Hx)return 5122;if(a===ag)return 5123;if(a===jx)return 5124;if(a===jr)return 5125;if(a===qr)return 5126;if(a===Jo)return r?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===$x)return 6406;if(a===li)return 6408;if(a===Kx)return 6409;if(a===Zx)return 6410;if(a===$r)return 6402;if(a===Js)return 34041;if(a===Qx)return 6403;if(a===Yx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Cf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Jx)return 36244;if(a===e_)return 33319;if(a===t_)return 33320;if(a===n_)return 36249;if(a===Uc||a===Bc||a===Gc||a===Vc)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===kp||a===Fp||a===zp||a===Op)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===kp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===i_)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Up||a===Bp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Up)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Bp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Gp||a===Vp||a===Wp||a===Hp||a===jp||a===qp||a===Xp||a===$p||a===Yp||a===Kp||a===Zp||a===Qp||a===Jp||a===em)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Gp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Wp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$p)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Kp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Qp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===em)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===tm)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Xs?r?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[a]!==void 0?u[a]:null}return{convert:o}}class Q1 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xo extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,a=null,f=null;const c=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const y of e.hand.values()){const _=n.getJointPose(y,r);if(h.joints[y.jointName]===void 0){const A=new Xo;A.matrixAutoUpdate=!1,A.visible=!1,h.joints[y.jointName]=A,h.add(A)}const T=h.joints[y.jointName];_!==null&&(T.matrix.fromArray(_.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=_.radius),T.visible=_!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&x>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(m.matrix.fromArray(a.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),a.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(a.linearVelocity)):m.hasLinearVelocity=!1,a.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(a.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return c!==null&&(c.visible=o!==null),m!==null&&(m.visible=a!==null),h!==null&&(h.visible=f!==null),this}}class eM extends qn{constructor(e,n,r,o,a,f,c,m,h,v){if(v=v!==void 0?v:$r,v!==$r&&v!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===$r&&(r=jr),r===void 0&&v===Js&&(r=Xs),super(null,o,a,f,c,m,v,r,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:un,this.minFilter=m!==void 0?m:un,this.flipY=!1,this.generateMipmaps=!1}}class tM extends to{constructor(e,n){super();const r=this;let o=null,a=1,f=null,c="local-floor",m=null,h=null,v=null,g=null,x=null,S=null;const E=n.getContextAttributes();let y=null,_=null;const T=[],A=[],k=new Hn;k.layers.enable(1),k.viewport=new Yt;const L=new Hn;L.layers.enable(2),L.viewport=new Yt;const b=[k,L],F=new Q1;F.layers.enable(1),F.layers.enable(2);let j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=T[V];return H===void 0&&(H=new xf,T[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=T[V];return H===void 0&&(H=new xf,T[V]=H),H.getGripSpace()},this.getHand=function(V){let H=T[V];return H===void 0&&(H=new xf,T[V]=H),H.getHandSpace()};function z(V){const H=A.indexOf(V.inputSource);if(H===-1)return;const C=T[H];C!==void 0&&C.dispatchEvent({type:V.type,data:V.inputSource})}function Y(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",B);for(let V=0;V<T.length;V++){const H=A[V];H!==null&&(A[V]=null,T[V].disconnect(H))}j=null,M=null,e.setRenderTarget(y),x=null,g=null,v=null,o=null,_=null,G.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){c=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(V){if(o=V,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:o.renderState.layers===void 0?E.antialias:!0,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,n,H),o.updateRenderState({baseLayer:x}),_=new ci(x.framebufferWidth,x.framebufferHeight,{format:li,type:Jr,encoding:e.outputEncoding})}else{let H=null,C=null,O=null;E.depth&&(O=E.stencil?35056:33190,H=E.stencil?Js:$r,C=E.stencil?Xs:jr);const K={colorFormat:32856,depthFormat:O,scaleFactor:a};v=new XRWebGLBinding(o,n),g=v.createProjectionLayer(K),o.updateRenderState({layers:[g]}),_=new ci(g.textureWidth,g.textureHeight,{format:li,type:Jr,depthTexture:new eM(g.textureWidth,g.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:E.stencil,encoding:e.outputEncoding,samples:E.antialias?4:0});const de=e.properties.get(_);de.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),m=null,f=await o.requestReferenceSpace(c),G.setContext(o),G.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function B(V){for(let H=0;H<V.removed.length;H++){const C=V.removed[H],O=A.indexOf(C);O>=0&&(A[O]=null,T[O].dispatchEvent({type:"disconnected",data:C}))}for(let H=0;H<V.added.length;H++){const C=V.added[H];let O=A.indexOf(C);if(O===-1){for(let de=0;de<T.length;de++)if(de>=A.length){A.push(C),O=de;break}else if(A[de]===null){A[de]=C,O=de;break}if(O===-1)break}const K=T[O];K&&K.dispatchEvent({type:"connected",data:C})}}const fe=new Q,se=new Q;function q(V,H,C){fe.setFromMatrixPosition(H.matrixWorld),se.setFromMatrixPosition(C.matrixWorld);const O=fe.distanceTo(se),K=H.projectionMatrix.elements,de=C.projectionMatrix.elements,ge=K[14]/(K[10]-1),X=K[14]/(K[10]+1),_e=(K[9]+1)/K[5],ye=(K[9]-1)/K[5],we=(K[8]-1)/K[0],Se=(de[8]+1)/de[0],je=ge*we,Ge=ge*Se,Ie=O/(-we+Se),dt=Ie*-we;H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const kt=ge+Ie,xt=X+Ie,Lt=je-dt,ht=Ge+(O-dt),rt=_e*X/xt*kt,Bt=ye*X/xt*kt;V.projectionMatrix.makePerspective(Lt,ht,rt,Bt,kt,xt)}function ae(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(o===null)return;F.near=L.near=k.near=V.near,F.far=L.far=k.far=V.far,(j!==F.near||M!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,M=F.far);const H=V.parent,C=F.cameras;ae(F,H);for(let K=0;K<C.length;K++)ae(C[K],H);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),V.position.copy(F.position),V.quaternion.copy(F.quaternion),V.scale.copy(F.scale),V.matrix.copy(F.matrix),V.matrixWorld.copy(F.matrixWorld);const O=V.children;for(let K=0,de=O.length;K<de;K++)O[K].updateMatrixWorld(!0);C.length===2?q(F,k,L):F.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(V){g!==null&&(g.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)};let te=null;function ee(V,H){if(h=H.getViewerPose(m||f),S=H,h!==null){const C=h.views;x!==null&&(e.setRenderTargetFramebuffer(_,x.framebuffer),e.setRenderTarget(_));let O=!1;C.length!==F.cameras.length&&(F.cameras.length=0,O=!0);for(let K=0;K<C.length;K++){const de=C[K];let ge=null;if(x!==null)ge=x.getViewport(de);else{const _e=v.getViewSubImage(g,de);ge=_e.viewport,K===0&&(e.setRenderTargetTextures(_,_e.colorTexture,g.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(_))}let X=b[K];X===void 0&&(X=new Hn,X.layers.enable(K),X.viewport=new Yt,b[K]=X),X.matrix.fromArray(de.transform.matrix),X.projectionMatrix.fromArray(de.projectionMatrix),X.viewport.set(ge.x,ge.y,ge.width,ge.height),K===0&&F.matrix.copy(X.matrix),O===!0&&F.cameras.push(X)}}for(let C=0;C<T.length;C++){const O=A[C],K=T[C];O!==null&&K!==void 0&&K.update(O,H,m||f)}te&&te(V,H),S=null}const G=new yg;G.setAnimationLoop(ee),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}}function nM(u,e){function n(y,_){y.fogColor.value.copy(_.color),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,T,A,k){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(y,_):_.isMeshToonMaterial?(o(y,_),v(y,_)):_.isMeshPhongMaterial?(o(y,_),h(y,_)):_.isMeshStandardMaterial?(o(y,_),g(y,_),_.isMeshPhysicalMaterial&&x(y,_,k)):_.isMeshMatcapMaterial?(o(y,_),S(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),E(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?c(y,_,T,A):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.bumpMap&&(y.bumpMap.value=_.bumpMap,y.bumpScale.value=_.bumpScale,_.side===ui&&(y.bumpScale.value*=-1)),_.displacementMap&&(y.displacementMap.value=_.displacementMap,y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap),_.normalMap&&(y.normalMap.value=_.normalMap,y.normalScale.value.copy(_.normalScale),_.side===ui&&y.normalScale.value.negate()),_.specularMap&&(y.specularMap.value=_.specularMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const T=e.get(_).envMap;if(T&&(y.envMap.value=T,y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const L=u.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*L}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity);let A;_.map?A=_.map:_.specularMap?A=_.specularMap:_.displacementMap?A=_.displacementMap:_.normalMap?A=_.normalMap:_.bumpMap?A=_.bumpMap:_.roughnessMap?A=_.roughnessMap:_.metalnessMap?A=_.metalnessMap:_.alphaMap?A=_.alphaMap:_.emissiveMap?A=_.emissiveMap:_.clearcoatMap?A=_.clearcoatMap:_.clearcoatNormalMap?A=_.clearcoatNormalMap:_.clearcoatRoughnessMap?A=_.clearcoatRoughnessMap:_.iridescenceMap?A=_.iridescenceMap:_.iridescenceThicknessMap?A=_.iridescenceThicknessMap:_.specularIntensityMap?A=_.specularIntensityMap:_.specularColorMap?A=_.specularColorMap:_.transmissionMap?A=_.transmissionMap:_.thicknessMap?A=_.thicknessMap:_.sheenColorMap?A=_.sheenColorMap:_.sheenRoughnessMap&&(A=_.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uvTransform.value.copy(A.matrix));let k;_.aoMap?k=_.aoMap:_.lightMap&&(k=_.lightMap),k!==void 0&&(k.isWebGLRenderTarget&&(k=k.texture),k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uv2Transform.value.copy(k.matrix))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,T,A){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=A*.5,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let k;_.map?k=_.map:_.alphaMap&&(k=_.alphaMap),k!==void 0&&(k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uvTransform.value.copy(k.matrix))}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let T;_.map?T=_.map:_.alphaMap&&(T=_.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),y.uvTransform.value.copy(T.matrix))}function h(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.roughness.value=_.roughness,y.metalness.value=_.metalness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),y.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===ui&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap)}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){y.referencePosition.value.copy(_.referencePosition),y.nearDistance.value=_.nearDistance,y.farDistance.value=_.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iM(u,e,n,r){let o={},a={},f=[];const c=n.isWebGL2?u.getParameter(35375):0;function m(A,k){const L=k.program;r.uniformBlockBinding(A,L)}function h(A,k){let L=o[A.id];L===void 0&&(E(A),L=v(A),o[A.id]=L,A.addEventListener("dispose",_));const b=k.program;r.updateUBOMapping(A,b);const F=e.render.frame;a[A.id]!==F&&(x(A),a[A.id]=F)}function v(A){const k=g();A.__bindingPointIndex=k;const L=u.createBuffer(),b=A.__size,F=A.usage;return u.bindBuffer(35345,L),u.bufferData(35345,b,F),u.bindBuffer(35345,null),u.bindBufferBase(35345,k,L),L}function g(){for(let A=0;A<c;A++)if(f.indexOf(A)===-1)return f.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const k=o[A.id],L=A.uniforms,b=A.__cache;u.bindBuffer(35345,k);for(let F=0,j=L.length;F<j;F++){const M=L[F];if(S(M,F,b)===!0){const z=M.value,Y=M.__offset;typeof z=="number"?(M.__data[0]=z,u.bufferSubData(35345,Y,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):z.toArray(M.__data),u.bufferSubData(35345,Y,M.__data))}}u.bindBuffer(35345,null)}function S(A,k,L){const b=A.value;if(L[k]===void 0)return typeof b=="number"?L[k]=b:L[k]=b.clone(),!0;if(typeof b=="number"){if(L[k]!==b)return L[k]=b,!0}else{const F=L[k];if(F.equals(b)===!1)return F.copy(b),!0}return!1}function E(A){const k=A.uniforms;let L=0;const b=16;let F=0;for(let j=0,M=k.length;j<M;j++){const z=k[j],Y=y(z);if(z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=L,j>0){F=L%b;const B=b-F;F!==0&&B-Y.boundary<0&&(L+=b-F,z.__offset=L)}L+=Y.storage}return F=L%b,F>0&&(L+=b-F),A.__size=L,A.__cache={},this}function y(A){const k=A.value,L={boundary:0,storage:0};return typeof k=="number"?(L.boundary=4,L.storage=4):k.isVector2?(L.boundary=8,L.storage=8):k.isVector3||k.isColor?(L.boundary=16,L.storage=12):k.isVector4?(L.boundary=16,L.storage=16):k.isMatrix3?(L.boundary=48,L.storage=48):k.isMatrix4?(L.boundary=64,L.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),L}function _(A){const k=A.target;k.removeEventListener("dispose",_);const L=f.indexOf(k.__bindingPointIndex);f.splice(L,1),u.deleteBuffer(o[k.id]),delete o[k.id],delete a[k.id]}function T(){for(const A in o)u.deleteBuffer(o[A]);f=[],o={},a={}}return{bind:m,update:h,dispose:T}}function rM(){const u=Hl("canvas");return u.style.display="block",u}function sM(u={}){this.isWebGLRenderer=!0;const e=u.canvas!==void 0?u.canvas:rM(),n=u.context!==void 0?u.context:null,r=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,a=u.antialias!==void 0?u.antialias:!1,f=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,m=u.powerPreference!==void 0?u.powerPreference:"default",h=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let v;n!==null?v=n.getContextAttributes().alpha:v=u.alpha!==void 0?u.alpha:!1;let g=null,x=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=es,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const y=this;let _=!1,T=0,A=0,k=null,L=-1,b=null;const F=new Yt,j=new Yt;let M=null,z=e.width,Y=e.height,B=1,fe=null,se=null;const q=new Yt(0,0,z,Y),ae=new Yt(0,0,z,Y);let te=!1;const ee=new _g;let G=!1,V=!1,H=null;const C=new Kt,O=new Qe,K=new Q,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return k===null?B:1}let X=n;function _e(P,ne){for(let oe=0;oe<P.length;oe++){const re=P[oe],pe=e.getContext(re,ne);if(pe!==null)return pe}return null}try{const P={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zf}`),e.addEventListener("webglcontextlost",Ye,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",_t,!1),X===null){const ne=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&ne.shift(),X=_e(ne,P),X===null)throw _e(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ye,we,Se,je,Ge,Ie,dt,kt,xt,Lt,ht,rt,Bt,Pt,N,R,he,Me,Te,Ae,qe,le,Ue,De;function Be(){ye=new pw(X),we=new lw(X,ye,u),ye.init(we),le=new Z1(X,ye,we),Se=new Y1(X,ye,we),je=new vw,Ge=new k1,Ie=new K1(X,ye,Se,Ge,we,le,je),dt=new cw(y),kt=new hw(y),xt=new R_(X,we),Ue=new ow(X,ye,xt,we),Lt=new mw(X,xt,je,Ue),ht=new Sw(X,Lt,xt,je),Te=new yw(X,we,Ie),R=new uw(Ge),rt=new N1(y,dt,kt,ye,we,Ue,R),Bt=new nM(y,Ge),Pt=new z1,N=new W1(ye,we),Me=new sw(y,dt,Se,ht,v,f),he=new $1(y,ht,we),De=new iM(X,je,we,Se),Ae=new aw(X,ye,je,we),qe=new gw(X,ye,je,we),je.programs=rt.programs,y.capabilities=we,y.extensions=ye,y.properties=Ge,y.renderLists=Pt,y.shadowMap=he,y.state=Se,y.info=je}Be();const ke=new tM(y,X);this.xr=ke,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const P=ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(z,Y,!1))},this.getSize=function(P){return P.set(z,Y)},this.setSize=function(P,ne,oe){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,Y=ne,e.width=Math.floor(P*B),e.height=Math.floor(ne*B),oe!==!1&&(e.style.width=P+"px",e.style.height=ne+"px"),this.setViewport(0,0,P,ne)},this.getDrawingBufferSize=function(P){return P.set(z*B,Y*B).floor()},this.setDrawingBufferSize=function(P,ne,oe){z=P,Y=ne,B=oe,e.width=Math.floor(P*oe),e.height=Math.floor(ne*oe),this.setViewport(0,0,P,ne)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,ne,oe,re){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,ne,oe,re),Se.viewport(F.copy(q).multiplyScalar(B).floor())},this.getScissor=function(P){return P.copy(ae)},this.setScissor=function(P,ne,oe,re){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,ne,oe,re),Se.scissor(j.copy(ae).multiplyScalar(B).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(P){Se.setScissorTest(te=P)},this.setOpaqueSort=function(P){fe=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(P=!0,ne=!0,oe=!0){let re=0;P&&(re|=16384),ne&&(re|=256),oe&&(re|=1024),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ye,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Pt.dispose(),N.dispose(),Ge.dispose(),dt.dispose(),kt.dispose(),ht.dispose(),Ue.dispose(),De.dispose(),rt.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Je),ke.removeEventListener("sessionend",Ft),H&&(H.dispose(),H=null),Et.stop()};function Ye(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=je.autoReset,ne=he.enabled,oe=he.autoUpdate,re=he.needsUpdate,pe=he.type;Be(),je.autoReset=P,he.enabled=ne,he.autoUpdate=oe,he.needsUpdate=re,he.type=pe}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $(P){const ne=P.target;ne.removeEventListener("dispose",$),Le(ne)}function Le(P){ce(P),Ge.remove(P)}function ce(P){const ne=Ge.get(P).programs;ne!==void 0&&(ne.forEach(function(oe){rt.releaseProgram(oe)}),P.isShaderMaterial&&rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,ne,oe,re,pe,Xe){ne===null&&(ne=de);const He=pe.isMesh&&pe.matrixWorld.determinant()<0,Ze=Sr(P,ne,oe,re,pe);Se.setMaterial(re,He);let Ke=oe.index;const ct=oe.attributes.position;if(Ke===null){if(ct===void 0||ct.count===0)return}else if(Ke.count===0)return;let nt=1;re.wireframe===!0&&(Ke=Lt.getWireframeAttribute(oe),nt=2),Ue.setup(pe,re,Ze,oe,Ke);let it,St=Ae;Ke!==null&&(it=xt.get(Ke),St=qe,St.setIndex(it));const fi=Ke!==null?Ke.count:ct.count,Ui=oe.drawRange.start*nt,Bi=oe.drawRange.count*nt,at=Xe!==null?Xe.start*nt:0,lt=Xe!==null?Xe.count*nt:1/0,di=Math.max(Ui,at),Ct=Math.min(fi,Ui+Bi,at+lt)-1,Zt=Math.max(0,Ct-di+1);if(Zt!==0){if(pe.isMesh)re.wireframe===!0?(Se.setLineWidth(re.wireframeLinewidth*ge()),St.setMode(1)):St.setMode(4);else if(pe.isLine){let hi=re.linewidth;hi===void 0&&(hi=1),Se.setLineWidth(hi*ge()),pe.isLineSegments?St.setMode(1):pe.isLineLoop?St.setMode(2):St.setMode(3)}else pe.isPoints?St.setMode(0):pe.isSprite&&St.setMode(4);if(pe.isInstancedMesh)St.renderInstances(di,Zt,pe.count);else if(oe.isInstancedBufferGeometry){const hi=Math.min(oe.instanceCount,oe._maxInstanceCount);St.renderInstances(di,Zt,hi)}else St.render(di,Zt)}},this.compile=function(P,ne){x=N.get(P),x.init(),E.push(x),P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ne.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),x.setupLights(y.physicallyCorrectLights),P.traverse(function(oe){const re=oe.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const Xe=re[pe];yi(Xe,P,oe)}else yi(re,P,oe)}),E.pop(),x=null};let Re=null;function be(P){Re&&Re(P)}function Je(){Et.stop()}function Ft(){Et.start()}const Et=new yg;Et.setAnimationLoop(be),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(P){Re=P,ke.setAnimationLoop(P),P===null?Et.stop():Et.start()},ke.addEventListener("sessionstart",Je),ke.addEventListener("sessionend",Ft),this.render=function(P,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),ne.parent===null&&ne.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ne),ne=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,ne,k),x=N.get(P,E.length),x.init(),E.push(x),C.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ee.setFromProjectionMatrix(C),V=this.localClippingEnabled,G=R.init(this.clippingPlanes,V,ne),g=Pt.get(P,S.length),g.init(),S.push(g),Yn(P,ne,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(fe,se),G===!0&&R.beginShadows();const oe=x.state.shadowsArray;if(he.render(oe,P,ne),G===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(g,P),x.setupLights(y.physicallyCorrectLights),ne.isArrayCamera){const re=ne.cameras;for(let pe=0,Xe=re.length;pe<Xe;pe++){const He=re[pe];yt(g,P,He,He.viewport)}}else yt(g,P,ne);k!==null&&(Ie.updateMultisampleRenderTarget(k),Ie.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(y,P,ne),Ue.resetDefaultState(),L=-1,b=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Yn(P,ne,oe,re){if(P.visible===!1)return;if(P.layers.test(ne.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ne);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ee.intersectsSprite(P)){re&&K.setFromMatrixPosition(P.matrixWorld).applyMatrix4(C);const He=ht.update(P),Ze=P.material;Ze.visible&&g.push(P,He,Ze,oe,K.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==je.render.frame&&(P.skeleton.update(),P.skeleton.frame=je.render.frame),!P.frustumCulled||ee.intersectsObject(P))){re&&K.setFromMatrixPosition(P.matrixWorld).applyMatrix4(C);const He=ht.update(P),Ze=P.material;if(Array.isArray(Ze)){const Ke=He.groups;for(let ct=0,nt=Ke.length;ct<nt;ct++){const it=Ke[ct],St=Ze[it.materialIndex];St&&St.visible&&g.push(P,He,St,oe,K.z,it)}}else Ze.visible&&g.push(P,He,Ze,oe,K.z,null)}}const Xe=P.children;for(let He=0,Ze=Xe.length;He<Ze;He++)Yn(Xe[He],ne,oe,re)}function yt(P,ne,oe,re){const pe=P.opaque,Xe=P.transmissive,He=P.transparent;x.setupLightsView(oe),Xe.length>0&&Nn(pe,ne,oe),re&&Se.viewport(F.copy(re)),pe.length>0&&tn(pe,ne,oe),Xe.length>0&&tn(Xe,ne,oe),He.length>0&&tn(He,ne,oe),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Nn(P,ne,oe){const re=we.isWebGL2;H===null&&(H=new ci(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Jo:Jr,minFilter:$l,samples:re&&a===!0?4:0})),y.getDrawingBufferSize(O),re?H.setSize(O.x,O.y):H.setSize(Af(O.x),Af(O.y));const pe=y.getRenderTarget();y.setRenderTarget(H),y.clear();const Xe=y.toneMapping;y.toneMapping=Oi,tn(P,ne,oe),y.toneMapping=Xe,Ie.updateMultisampleRenderTarget(H),Ie.updateRenderTargetMipmap(H),y.setRenderTarget(pe)}function tn(P,ne,oe){const re=ne.isScene===!0?ne.overrideMaterial:null;for(let pe=0,Xe=P.length;pe<Xe;pe++){const He=P[pe],Ze=He.object,Ke=He.geometry,ct=re===null?He.material:re,nt=He.group;Ze.layers.test(oe.layers)&&ua(Ze,ne,oe,Ke,ct,nt)}}function ua(P,ne,oe,re,pe,Xe){P.onBeforeRender(y,ne,oe,re,pe,Xe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),pe.onBeforeRender(y,ne,oe,re,P,Xe),pe.transparent===!0&&pe.side===Ks?(pe.side=ui,pe.needsUpdate=!0,y.renderBufferDirect(oe,ne,re,pe,P,Xe),pe.side=Zo,pe.needsUpdate=!0,y.renderBufferDirect(oe,ne,re,pe,P,Xe),pe.side=Ks):y.renderBufferDirect(oe,ne,re,pe,P,Xe),P.onAfterRender(y,ne,oe,re,pe,Xe)}function yi(P,ne,oe){ne.isScene!==!0&&(ne=de);const re=Ge.get(P),pe=x.state.lights,Xe=x.state.shadowsArray,He=pe.state.version,Ze=rt.getParameters(P,pe.state,Xe,ne,oe),Ke=rt.getProgramCacheKey(Ze);let ct=re.programs;re.environment=P.isMeshStandardMaterial?ne.environment:null,re.fog=ne.fog,re.envMap=(P.isMeshStandardMaterial?kt:dt).get(P.envMap||re.environment),ct===void 0&&(P.addEventListener("dispose",$),ct=new Map,re.programs=ct);let nt=ct.get(Ke);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===He)return ns(P,Ze),nt}else Ze.uniforms=rt.getUniforms(P),P.onBuild(oe,Ze,y),P.onBeforeCompile(Ze,y),nt=rt.acquireProgram(Ze,Ke),ct.set(Ke,nt),re.uniforms=Ze.uniforms;const it=re.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=R.uniform),ns(P,Ze),re.needsLights=wr(P),re.lightsStateVersion=He,re.needsLights&&(it.ambientLightColor.value=pe.state.ambient,it.lightProbe.value=pe.state.probe,it.directionalLights.value=pe.state.directional,it.directionalLightShadows.value=pe.state.directionalShadow,it.spotLights.value=pe.state.spot,it.spotLightShadows.value=pe.state.spotShadow,it.rectAreaLights.value=pe.state.rectArea,it.ltc_1.value=pe.state.rectAreaLTC1,it.ltc_2.value=pe.state.rectAreaLTC2,it.pointLights.value=pe.state.point,it.pointLightShadows.value=pe.state.pointShadow,it.hemisphereLights.value=pe.state.hemi,it.directionalShadowMap.value=pe.state.directionalShadowMap,it.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,it.spotShadowMap.value=pe.state.spotShadowMap,it.spotShadowMatrix.value=pe.state.spotShadowMatrix,it.pointShadowMap.value=pe.state.pointShadowMap,it.pointShadowMatrix.value=pe.state.pointShadowMatrix);const St=nt.getUniforms(),fi=Gl.seqWithValue(St.seq,it);return re.currentProgram=nt,re.uniformsList=fi,nt}function ns(P,ne){const oe=Ge.get(P);oe.outputEncoding=ne.outputEncoding,oe.instancing=ne.instancing,oe.skinning=ne.skinning,oe.morphTargets=ne.morphTargets,oe.morphNormals=ne.morphNormals,oe.morphColors=ne.morphColors,oe.morphTargetsCount=ne.morphTargetsCount,oe.numClippingPlanes=ne.numClippingPlanes,oe.numIntersection=ne.numClipIntersection,oe.vertexAlphas=ne.vertexAlphas,oe.vertexTangents=ne.vertexTangents,oe.toneMapping=ne.toneMapping}function Sr(P,ne,oe,re,pe){ne.isScene!==!0&&(ne=de),Ie.resetTextureUnits();const Xe=ne.fog,He=re.isMeshStandardMaterial?ne.environment:null,Ze=k===null?y.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:es,Ke=(re.isMeshStandardMaterial?kt:dt).get(re.envMap||He),ct=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!re.normalMap&&!!oe.attributes.tangent,it=!!oe.morphAttributes.position,St=!!oe.morphAttributes.normal,fi=!!oe.morphAttributes.color,Ui=re.toneMapped?y.toneMapping:Oi,Bi=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,at=Bi!==void 0?Bi.length:0,lt=Ge.get(re),di=x.state.lights;if(G===!0&&(V===!0||P!==b)){const fn=P===b&&re.id===L;R.setState(re,P,fn)}let Ct=!1;re.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==di.state.version||lt.outputEncoding!==Ze||pe.isInstancedMesh&&lt.instancing===!1||!pe.isInstancedMesh&&lt.instancing===!0||pe.isSkinnedMesh&&lt.skinning===!1||!pe.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==Ke||re.fog===!0&&lt.fog!==Xe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==R.numPlanes||lt.numIntersection!==R.numIntersection)||lt.vertexAlphas!==ct||lt.vertexTangents!==nt||lt.morphTargets!==it||lt.morphNormals!==St||lt.morphColors!==fi||lt.toneMapping!==Ui||we.isWebGL2===!0&&lt.morphTargetsCount!==at)&&(Ct=!0):(Ct=!0,lt.__version=re.version);let Zt=lt.currentProgram;Ct===!0&&(Zt=yi(re,ne,pe));let hi=!1,Gi=!1,Vi=!1;const mt=Zt.getUniforms(),Mr=lt.uniforms;if(Se.useProgram(Zt.program)&&(hi=!0,Gi=!0,Vi=!0),re.id!==L&&(L=re.id,Gi=!0),hi||b!==P){if(mt.setValue(X,"projectionMatrix",P.projectionMatrix),we.logarithmicDepthBuffer&&mt.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),b!==P&&(b=P,Gi=!0,Vi=!0),re.isShaderMaterial||re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshStandardMaterial||re.envMap){const fn=mt.map.cameraPosition;fn!==void 0&&fn.setValue(X,K.setFromMatrixPosition(P.matrixWorld))}(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&mt.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial||re.isShadowMaterial||pe.isSkinnedMesh)&&mt.setValue(X,"viewMatrix",P.matrixWorldInverse)}if(pe.isSkinnedMesh){mt.setOptional(X,pe,"bindMatrix"),mt.setOptional(X,pe,"bindMatrixInverse");const fn=pe.skeleton;fn&&(we.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),mt.setValue(X,"boneTexture",fn.boneTexture,Ie),mt.setValue(X,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cn=oe.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0&&we.isWebGL2===!0)&&Te.update(pe,oe,re,Zt),(Gi||lt.receiveShadow!==pe.receiveShadow)&&(lt.receiveShadow=pe.receiveShadow,mt.setValue(X,"receiveShadow",pe.receiveShadow)),Gi&&(mt.setValue(X,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&Zl(Mr,Vi),Xe&&re.fog===!0&&Bt.refreshFogUniforms(Mr,Xe),Bt.refreshMaterialUniforms(Mr,re,B,Y,H),Gl.upload(X,lt.uniformsList,Mr,Ie)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Gl.upload(X,lt.uniformsList,Mr,Ie),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&mt.setValue(X,"center",pe.center),mt.setValue(X,"modelViewMatrix",pe.modelViewMatrix),mt.setValue(X,"normalMatrix",pe.normalMatrix),mt.setValue(X,"modelMatrix",pe.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const fn=re.uniformsGroups;for(let io=0,Ql=fn.length;io<Ql;io++)if(we.isWebGL2){const Er=fn[io];De.update(Er,Zt),De.bind(Er,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Zl(P,ne){P.ambientLightColor.needsUpdate=ne,P.lightProbe.needsUpdate=ne,P.directionalLights.needsUpdate=ne,P.directionalLightShadows.needsUpdate=ne,P.pointLights.needsUpdate=ne,P.pointLightShadows.needsUpdate=ne,P.spotLights.needsUpdate=ne,P.spotLightShadows.needsUpdate=ne,P.rectAreaLights.needsUpdate=ne,P.hemisphereLights.needsUpdate=ne}function wr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,ne,oe){Ge.get(P.texture).__webglTexture=ne,Ge.get(P.depthTexture).__webglTexture=oe;const re=Ge.get(P);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=oe===void 0,re.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,ne){const oe=Ge.get(P);oe.__webglFramebuffer=ne,oe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(P,ne=0,oe=0){k=P,T=ne,A=oe;let re=!0;if(P){const Ke=Ge.get(P);Ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),re=!1):Ke.__webglFramebuffer===void 0?Ie.setupRenderTarget(P):Ke.__hasExternalTextures&&Ie.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture)}let pe=null,Xe=!1,He=!1;if(P){const Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture)&&(He=!0);const ct=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(pe=ct[ne],Xe=!0):we.isWebGL2&&P.samples>0&&Ie.useMultisampledRTT(P)===!1?pe=Ge.get(P).__webglMultisampledFramebuffer:pe=ct,F.copy(P.viewport),j.copy(P.scissor),M=P.scissorTest}else F.copy(q).multiplyScalar(B).floor(),j.copy(ae).multiplyScalar(B).floor(),M=te;if(Se.bindFramebuffer(36160,pe)&&we.drawBuffers&&re&&Se.drawBuffers(P,pe),Se.viewport(F),Se.scissor(j),Se.setScissorTest(M),Xe){const Ke=Ge.get(P.texture);X.framebufferTexture2D(36160,36064,34069+ne,Ke.__webglTexture,oe)}else if(He){const Ke=Ge.get(P.texture),ct=ne||0;X.framebufferTextureLayer(36160,36064,Ke.__webglTexture,oe||0,ct)}L=-1},this.readRenderTargetPixels=function(P,ne,oe,re,pe,Xe,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){Se.bindFramebuffer(36160,Ze);try{const Ke=P.texture,ct=Ke.format,nt=Ke.type;if(ct!==li&&le.convert(ct)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=nt===Jo&&(ye.has("EXT_color_buffer_half_float")||we.isWebGL2&&ye.has("EXT_color_buffer_float"));if(nt!==Jr&&le.convert(nt)!==X.getParameter(35738)&&!(nt===qr&&(we.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=P.width-re&&oe>=0&&oe<=P.height-pe&&X.readPixels(ne,oe,re,pe,le.convert(ct),le.convert(nt),Xe)}finally{const Ke=k!==null?Ge.get(k).__webglFramebuffer:null;Se.bindFramebuffer(36160,Ke)}}},this.copyFramebufferToTexture=function(P,ne,oe=0){const re=Math.pow(2,-oe),pe=Math.floor(ne.image.width*re),Xe=Math.floor(ne.image.height*re);Ie.setTexture2D(ne,0),X.copyTexSubImage2D(3553,oe,0,0,P.x,P.y,pe,Xe),Se.unbindTexture()},this.copyTextureToTexture=function(P,ne,oe,re=0){const pe=ne.image.width,Xe=ne.image.height,He=le.convert(oe.format),Ze=le.convert(oe.type);Ie.setTexture2D(oe,0),X.pixelStorei(37440,oe.flipY),X.pixelStorei(37441,oe.premultiplyAlpha),X.pixelStorei(3317,oe.unpackAlignment),ne.isDataTexture?X.texSubImage2D(3553,re,P.x,P.y,pe,Xe,He,Ze,ne.image.data):ne.isCompressedTexture?X.compressedTexSubImage2D(3553,re,P.x,P.y,ne.mipmaps[0].width,ne.mipmaps[0].height,He,ne.mipmaps[0].data):X.texSubImage2D(3553,re,P.x,P.y,He,Ze,ne.image),re===0&&oe.generateMipmaps&&X.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(P,ne,oe,re,pe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=P.max.x-P.min.x+1,He=P.max.y-P.min.y+1,Ze=P.max.z-P.min.z+1,Ke=le.convert(re.format),ct=le.convert(re.type);let nt;if(re.isData3DTexture)Ie.setTexture3D(re,0),nt=32879;else if(re.isDataArrayTexture)Ie.setTexture2DArray(re,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,re.flipY),X.pixelStorei(37441,re.premultiplyAlpha),X.pixelStorei(3317,re.unpackAlignment);const it=X.getParameter(3314),St=X.getParameter(32878),fi=X.getParameter(3316),Ui=X.getParameter(3315),Bi=X.getParameter(32877),at=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;X.pixelStorei(3314,at.width),X.pixelStorei(32878,at.height),X.pixelStorei(3316,P.min.x),X.pixelStorei(3315,P.min.y),X.pixelStorei(32877,P.min.z),oe.isDataTexture||oe.isData3DTexture?X.texSubImage3D(nt,pe,ne.x,ne.y,ne.z,Xe,He,Ze,Ke,ct,at.data):oe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(nt,pe,ne.x,ne.y,ne.z,Xe,He,Ze,Ke,at.data)):X.texSubImage3D(nt,pe,ne.x,ne.y,ne.z,Xe,He,Ze,Ke,ct,at),X.pixelStorei(3314,it),X.pixelStorei(32878,St),X.pixelStorei(3316,fi),X.pixelStorei(3315,Ui),X.pixelStorei(32877,Bi),pe===0&&re.generateMipmaps&&X.generateMipmap(nt),Se.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ie.setTextureCube(P,0):P.isData3DTexture?Ie.setTexture3D(P,0):P.isDataArrayTexture?Ie.setTexture2DArray(P,0):Ie.setTexture2D(P,0),Se.unbindTexture()},this.resetState=function(){T=0,A=0,k=null,Se.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bg extends sM{}bg.prototype.isWebGL1Renderer=!0;class Vf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=n,this.far=r}clone(){return new Vf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class oM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class aM extends qn{constructor(e=null,n=1,r=1,o,a,f,c,m,h=un,v=un,g,x){super(null,f,c,m,h,v,o,a,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lM extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Kt,Lf=new hg,kl=new Yl,Fl=new Q;class Bm extends Xn{constructor(e=new $n,n=new lM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=a,e.ray.intersectsSphere(kl)===!1)return;Um.copy(o).invert(),Lf.copy(e.ray).applyMatrix4(Um);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),m=c*c,h=r.index,g=r.attributes.position;if(h!==null){const x=Math.max(0,f.start),S=Math.min(h.count,f.start+f.count);for(let E=x,y=S;E<y;E++){const _=h.getX(E);Fl.fromBufferAttribute(g,_),Gm(Fl,_,m,o,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=x,y=S;E<y;E++)Fl.fromBufferAttribute(g,E),Gm(Fl,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=o.length;a<f;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Gm(u,e,n,r,o,a,f){const c=Lf.distanceSqToPoint(u);if(c<n){const m=new Q;Lf.closestPointToPoint(u,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:m,index:e,face:null,object:f})}}class Wf extends $n{constructor(e=1,n=32,r=16,o=0,a=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:a,thetaStart:f,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+c,Math.PI);let h=0;const v=[],g=new Q,x=new Q,S=[],E=[],y=[],_=[];for(let T=0;T<=r;T++){const A=[],k=T/r;let L=0;T==0&&f==0?L=.5/n:T==r&&m==Math.PI&&(L=-.5/n);for(let b=0;b<=n;b++){const F=b/n;g.x=-e*Math.cos(o+F*a)*Math.sin(f+k*c),g.y=e*Math.cos(f+k*c),g.z=e*Math.sin(o+F*a)*Math.sin(f+k*c),E.push(g.x,g.y,g.z),x.copy(g).normalize(),y.push(x.x,x.y,x.z),_.push(F+L,1-k),A.push(h++)}v.push(A)}for(let T=0;T<r;T++)for(let A=0;A<n;A++){const k=v[T][A+1],L=v[T][A],b=v[T+1][A],F=v[T+1][A+1];(T!==0||f>0)&&S.push(k,L,F),(T!==r-1||m<Math.PI)&&S.push(L,b,F)}this.setIndex(S),this.setAttribute("position",new Tn(E,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(_,2))}static fromJSON(e){return new Wf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Vm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Vm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);const ea={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class la{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const cM=new Bf(-1,1,1,-1,0,1),Hf=new $n;Hf.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3));Hf.setAttribute("uv",new Tn([0,2,0,0,2,0],2));class Cg{constructor(e){this._mesh=new zi(Hf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class js extends la{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jl.clone(e.uniforms),this.material=new pn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cg(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Wm extends la{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let f,c;this.inverse?(f=0,c=1):(f=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class fM extends la{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _f{constructor(e,n){if(this.renderer=e,n===void 0){const r=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ea===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),js===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new js(ea),this.clock=new uM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let o=0,a=this.passes.length;o<a;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const c=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Wm!==void 0&&(f instanceof Wm?r=!0:f instanceof fM&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Bf(-1,1,1,-1,0,1);const Ag=new $n;Ag.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3));Ag.setAttribute("uv",new Tn([0,2,0,0,2,0],2));class dM extends la{constructor(e,n,r,o,a){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(e,n,r){const o=e.autoClear;e.autoClear=!1;let a,f;this.overrideMaterial!==void 0&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=f),e.autoClear=o}}const Hm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ts extends la{constructor(e,n,r,o){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(a,f),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new ci(a,f);x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const S=new ci(a,f);S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),a=Math.round(a/2),f=Math.round(f/2)}Hm===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const c=Hm;this.highPassUniforms=jl.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Qe(a,f),a=Math.round(a/2),f=Math.round(f/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ea===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const v=ea;this.copyUniforms=jl.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new pn({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Qo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new Of,this.fsQuad=new Cg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,n){let r=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(r,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,o),this.renderTargetsVertical[a].setSize(r,o),this.separableBlurMaterials[a].uniforms.texSize.value=new Qe(r,o),r=Math.round(r/2),o=Math.round(o/2)}render(e,n,r,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this.fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[m].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[m];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=f}getSeperableBlurMaterial(e){return new pn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}ts.BlurDirectionX=new Qe(1,0);ts.BlurDirectionY=new Qe(0,1);const jm={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},hM="#02160c",pM="#0aff7f",mM="#aef0c0",gM=.2,vM="#7affbf",xM=300,_M=24,yM=1,SM="#02160c",wM="#34e89a",MM=.26,EM=5.5,TM=.45,qm=3,Xm=1,bM=.275,CM=1,AM=7,RM=16,LM=.8,PM=-2,DM=2,IM=-16,yf=1.2,NM=7,kM=.9,mr=(u,e,n)=>u+(e-u)*n,$m=(u,e,n)=>Math.max(e,Math.min(n,u));function $s(u){const e=parseInt(u.slice(1),16);return new Q((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)}const FM=`
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
  `};function OM(){const u=ue.useRef(null),e=ue.useRef(null);return ue.useEffect(()=>{const n=u.current;if(!n)return;const r=new bg({canvas:n,antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Ws;const o=new oM;o.background=new ft(0),o.fog=new Vf(0,0,15);const a=new Hn(45,window.innerWidth/window.innerHeight,.1,400);a.position.set(0,7,16),a.layers.enable(gr.TORUS_SCENE),a.layers.enable(gr.BLOOM_SCENE),a.layers.enable(gr.ENTIRE_SCENE),o.add(a);const f=new Wf(4.2,200,600),c=new pn({transparent:!0,depthWrite:!1,blending:Qo,uniforms:{uTime:{value:0},uStream:{value:0},uAppear:{value:0},uColLow:{value:$s(SM)},uColHigh:{value:$s(wM)},uOpacity:{value:MM},uSize:{value:EM},uBrightness:{value:TM},uWaveHeight:{value:qm},uFlow:{value:Xm},uScale:{value:bM},uCursor:{value:new Q},uRepelRadius:{value:NM},uRepelStrength:{value:kM},uActivity:{value:0}},vertexShader:`
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
      `}),m=new Bm(f,c);m.frustumCulled=!1,m.layers.enable(gr.ENTIRE_SCENE);const h=new Xo;h.add(m),o.add(h);const v=new dM(o,a),g=new _f(r);g.renderToScreen=!1,g.addPass(v),g.addPass(new js(jm)),g.addPass(new ts(new Qe(window.innerWidth,window.innerHeight),.22,.2,0)),g.addPass(new js(ea));const x=new _f(r);x.renderToScreen=!1,x.addPass(v),x.addPass(new ts(new Qe(window.innerWidth,window.innerHeight),.4,.55,0)),x.addPass(new js(jm));const S=new js(zM);S.uniforms.bloomTexture.value=x.renderTarget1.texture,S.uniforms.torusTexture.value=g.renderTarget1.texture;const E=new Uint8Array([0,0,0,255]),y=new aM(E,1,1,li);y.needsUpdate=!0,S.uniforms.haloTexture.value=y;const _=new _f(r);_.addPass(v),_.addPass(S);const T=Math.round(xM),A=new Float32Array(T*3),k=new Float32Array(T),L=new Float32Array(T);for(let _e=0;_e<T;_e++)A[_e*3]=2*Math.random()-1,A[_e*3+1]=2*Math.random()-1,A[_e*3+2]=2*Math.random()-1,k[_e]=_M*(.4+Math.random()),L[_e]=Math.random();const b=new $n;b.setAttribute("position",new In(A,3)),b.setAttribute("size",new In(k,1)),b.setAttribute("seed",new In(L,1));const F=new pn({transparent:!0,blending:Qo,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uColor:{value:$s(vM)},uRes:{value:new Qe(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}},vertexShader:`
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
      `}),j=new Bm(b,F);j.frustumCulled=!1,j.layers.enable(gr.ENTIRE_SCENE),o.add(j);let M=0,z=0,Y=0;const B={x:0,y:0},fe={x:0,y:0},se={world:new Q,activity:0,active:!1,lastMove:performance.now()},q=new Q,ae=new Q,te=new Q;function ee(){if(te.set(0,0,0),se.active){q.set(fe.x,fe.y,.5).unproject(a),ae.copy(q).sub(a.position).normalize();const ye=ae.z;if(Math.abs(ye)>1e-4){const we=-a.position.z/ye;we>0&&Number.isFinite(we)&&te.copy(a.position).addScaledVector(ae,we)}}se.world.lerp(te,.12);const _e=(performance.now()-se.lastMove)/1e3;se.activity+=((se.active&&_e<3?1:0)-se.activity)*.06}const G=()=>{const _e=document.documentElement.scrollHeight-window.innerHeight;M=_e>0?$m(window.scrollY/_e,0,1):0},V=_e=>{B.x=_e.clientX/window.innerWidth*2-1,B.y=-(_e.clientY/window.innerHeight*2-1),se.active=!0,se.lastMove=performance.now()},H=()=>{se.active=!1};window.addEventListener("scroll",G,{passive:!0}),window.addEventListener("mousemove",V,{passive:!0}),window.addEventListener("mouseout",H);let C=0;const O=performance.now();let K=performance.now()/1e3,de=!0;function ge(){if(!de)return;requestAnimationFrame(ge);const _e=performance.now()/1e3,ye=Math.min(.05,_e-K);K=_e,z=mr(z,M,.1),Y=mr(Y,z,.06),fe.x=mr(fe.x,B.x,.06),fe.y=mr(fe.y,B.y,.06),c.uniforms.uTime.value=_e,C+=ye*(Xm*2)*4,c.uniforms.uStream.value=C,c.uniforms.uWaveHeight.value=qm*(1+Y*CM);const we=Math.min(Y/.35,1),Se=we*we*(3-2*we),je=mr(AM,LM,Se),Ge=mr(RM,PM,Se);a.position.set(fe.x*yf,je+fe.y*yf*.3,Ge),a.lookAt(fe.x*yf*.5,mr(0,.6,Se),mr(DM,IM,Se)),h.rotation.x=-0,h.rotation.y=0,ee(),c.uniforms.uCursor.value.copy(se.world),c.uniforms.uActivity.value=se.activity;const Ie=(performance.now()-O)/1e3;c.uniforms.uAppear.value=Math.max(0,Math.min(1,(Ie-.2)/1.4)),F.uniforms.uTime.value=_e*yM*8,j.position.copy(a.position),S.uniforms.iTime.value=_e,a.layers.set(gr.TORUS_SCENE),g.render(),a.layers.set(gr.BLOOM_SCENE),x.render(),a.layers.set(gr.ENTIRE_SCENE),_.render()}const X=()=>{const _e=window.innerWidth,ye=window.innerHeight,we=window.devicePixelRatio;r.setPixelRatio(we),r.setSize(_e,ye,!1),a.aspect=_e/ye,a.updateProjectionMatrix(),g.setPixelRatio(we),g.setSize(_e,ye),x.setPixelRatio(we),x.setSize(_e,ye),_.setPixelRatio(we),_.setSize(_e,ye),F.uniforms.uRes.value.set(_e*we,ye*we);const Se=document.documentElement.scrollHeight-window.innerHeight;M=Se>0?$m(window.scrollY/Se,0,1):0};return window.addEventListener("resize",X),X(),ge(),e.current=()=>{de=!1,window.removeEventListener("scroll",G),window.removeEventListener("mousemove",V),window.removeEventListener("mouseout",H),window.removeEventListener("resize",X),f.dispose(),c.dispose(),b.dispose(),F.dispose(),y.dispose(),r.dispose()},()=>{e.current&&e.current()}},[]),D.jsx("canvas",{ref:u,id:"flow-wave-canvas",style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"block",zIndex:0,pointerEvents:"auto"}})}function UM(u){const[e,n]=ue.useState("connecting"),r=ue.useRef(null),o=ue.useRef(u),a=ue.useRef(null),f=ue.useRef(!1);ue.useEffect(()=>{o.current=u},[u]);const c=ue.useCallback(()=>{if(f.current)return;const h=A0();n("connecting");const v=new WebSocket(h);r.current=v,v.onopen=()=>{n("connected")},v.onmessage=g=>{try{const x=JSON.parse(g.data);o.current&&o.current(x)}catch(x){console.error("WebSocket message parse error:",x)}},v.onclose=()=>{n("disconnected"),f.current||(a.current=setTimeout(()=>{a.current=null,c()},2500))},v.onerror=()=>{v.close()}},[]);ue.useEffect(()=>(f.current=!1,c(),()=>{f.current=!0,a.current&&(clearTimeout(a.current),a.current=null),r.current&&(r.current.close(),r.current=null)}),[c]);const m=ue.useCallback((h,v={})=>{r.current&&r.current.readyState===WebSocket.OPEN&&r.current.send(JSON.stringify({command:h,...v}))},[]);return{connectionStatus:e,sendCommand:m}}function BM({sendCommand:u,connectionStatus:e}={}){const[n,r]=ue.useState(!1),[o,a]=ue.useState("Ready"),[f,c]=ue.useState([]),[m,h]=ue.useState(null),[v,g]=ue.useState("00:00"),[x,S]=ue.useState("idle"),E=ue.useRef(null),y=ue.useRef([]),_=ue.useRef(null),T=ue.useRef(null),A=ue.useRef(null),k=ue.useRef(0),L=ue.useRef(null),b=ue.useRef(!1),F=ue.useRef(null),j=ue.useRef(!1),M=ue.useRef(0),z=ue.useRef({}),Y=ue.useRef(u),B=ue.useRef([]);ue.useEffect(()=>{B.current=f},[f]);const fe=async(C,O)=>{try{await fetch(Nt(`/api/visits/${C}/transcript`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segment_id:O.segment_id,text:O.text,sequence:O.sequence,timestamp:O.timestamp,speaker:O.speaker})})}catch(K){console.warn("Failed to persist transcript segment:",K)}},se=ue.useCallback(C=>{L.current&&C.visit_id&&C.visit_id!==L.current||(C.type==="transcript_partial"?(h({segment_id:C.segment_id,text:C.text,speaker:C.speaker||"Speaker",timestamp:C.timestamp,sequence:C.sequence}),S("processing")):C.type==="transcript_final"&&(h(null),S("listening"),c(O=>O.some(K=>K.segment_id===C.segment_id)?O.map(K=>K.segment_id===C.segment_id?C:K):[...O,C])))},[]),q=ue.useCallback(()=>{if(b.current=!1,j.current=!1,A.current&&(clearInterval(A.current),A.current=null),F.current){try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}F.current=null}if(E.current&&E.current.state!=="inactive")try{E.current.stop()}catch{}_.current&&(_.current.getTracks().forEach(C=>C.stop()),_.current=null),r(!1),S("idle"),h(null)},[]),ae=ue.useCallback(async({name:C,visitId:O,language:K="en-US",sendCommand:de}={})=>{if(b.current)return;de&&(Y.current=de);const ge=O||`visit-${Date.now()}`;if(L.current=ge,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){a("Audio capture not supported in this browser."),S("denied");return}try{const X=await navigator.mediaDevices.getUserMedia({audio:!0});_.current=X;const _e=new MediaRecorder(X);E.current=_e,y.current=[],T.current=new Date().toISOString(),b.current=!0,r(!0),S("listening"),a(`Listening to live speech — ${C||"Visitor"} is active.`);let ye=[];_e.ondataavailable=Se=>{Se.data.size>0&&(y.current.push(Se.data),ye.push(Se.data))},_e.start(1e3),A.current=setInterval(async()=>{if(!b.current)return;if(Date.now()-k.current>4e3&&ye.length>0){const Ge=new Blob(ye,{type:_e.mimeType||"audio/webm"});if(ye=[],Ge.size>1500)try{const Ie=await fetch(Nt("/api/transcribe"),{method:"POST",headers:{"Content-Type":Ge.type||"audio/webm"},body:Ge});if(Ie.ok){const dt=await Ie.json();if(dt.success&&dt.transcript&&dt.transcript.trim()){const kt=dt.transcript.trim(),xt=M.current++,Lt={type:"transcript_final",visit_id:ge,segment_id:`${ge}-whisper-${xt}`,text:kt,is_final:!0,speaker:"Speaker",sequence:xt,timestamp:new Date().toISOString()};se(Lt),fe(ge,Lt);const ht=Y.current||u;ht&&ht("broadcast_transcript",Lt)}}}catch(Ie){console.warn("Whisper fallback slice error:",Ie)}}else ye=[]},4500);const we=window.SpeechRecognition||window.webkitSpeechRecognition||null;if(we){const Se=()=>{if(b.current)try{if(F.current)try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}const je=new we;je.continuous=!0,je.interimResults=!0,je.lang=K,F.current=je,j.current=!0,je.onstart=()=>{S("listening")},je.onresult=Ge=>{k.current=Date.now(),S("processing");for(let Ie=Ge.resultIndex;Ie<Ge.results.length;Ie++){const dt=Ge.results[Ie],kt=dt[0].transcript.trim();if(!kt)continue;const xt=`${ge}-${Ie}`,Lt=dt.isFinal,ht={type:Lt?"transcript_final":"transcript_partial",visit_id:ge,segment_id:xt,text:kt,is_final:Lt,speaker:"Speaker",sequence:Ie,timestamp:new Date().toISOString()};Lt?(h(null),c(Bt=>Bt.some(Pt=>Pt.segment_id===xt)?Bt.map(Pt=>Pt.segment_id===xt?ht:Pt):[...Bt,ht]),S("listening"),fe(ge,ht)):h(ht);const rt=Y.current||u;rt&&rt("broadcast_transcript",ht)}},je.onend=()=>{b.current&&j.current&&setTimeout(()=>{b.current&&j.current&&Se()},250)},je.onerror=Ge=>{Ge.error==="not-allowed"&&(S("denied"),a("Microphone permission required"))},je.start()}catch(je){console.warn("SpeechRecognition start exception:",je)}};Se()}}catch(X){r(!1),S("denied"),a(`Could not start audio capture: ${X.message}`)}},[u,se]),te=ue.useCallback(C=>E.current?(a("Visit ended — summarizing memory with Groq..."),new Promise(O=>{E.current.onstop=async()=>{const K=new Blob(y.current,{type:"audio/webm"});y.current=[];const ge=(B.current||[]).map(X=>`${X.speaker}: ${X.text}`).join(`
`);if(K.size>100){const X=new FormData;X.append("audio",K,"visit_audio.webm"),X.append("person_id",(C==null?void 0:C.person_id)||"unknown"),X.append("started_at",T.current||new Date().toISOString()),X.append("ended_at",new Date().toISOString()),X.append("visit_id",L.current||""),fetch(Nt("/api/visits/audio"),{method:"POST",body:X}).catch(_e=>console.warn("Background audio upload warning:",_e))}if(ge&&ge.trim().length>6)try{const X=await nx(C,ge);if(X&&X.trim()&&!X.toLowerCase().includes("processing")){a(`Memory summarized: "${X}"`),O(X.trim());return}}catch(X){console.warn("Groq visit summarization failed:",X)}O(null)},q()})):Promise.resolve(null),[q]),ee=ue.useCallback((C,O)=>{if(!C||!C.trim())return;L.current||(L.current=`session-${Date.now()}`);const K=L.current;O&&(Y.current=O);let de="Speaker",ge=C.trim();const X=C.indexOf(":");X>0&&X<20&&(de=C.substring(0,X).trim(),ge=C.substring(X+1).trim());const _e=M.current++,ye=`${K}-manual-${_e}-${Date.now()}`,we={type:"transcript_final",visit_id:K,segment_id:ye,text:ge,is_final:!0,speaker:de,sequence:_e,timestamp:new Date().toISOString()};c(je=>[...je,we]),S("listening");const Se=Y.current||u;Se&&Se("broadcast_transcript",we),fe(K,we)},[u]),G=ue.useCallback(()=>{c([]),h(null),z.current={},M.current=0},[]),V=ue.useCallback(C=>{C&&(L.current=C,fetch(Nt(`/api/visits/${C}/transcript`)).then(O=>O.json()).then(O=>{if(O&&O.success&&O.segments){c(O.segments);const K=O.segments.reduce((de,ge)=>Math.max(de,ge.sequence),-1);M.current=K+1}}).catch(O=>console.warn("Error catching up on segments:",O)))},[]);ue.useEffect(()=>{if(!n||!T.current){g("00:00");return}const C=setInterval(()=>{const O=Date.now()-new Date(T.current).getTime(),K=Math.max(0,Math.floor(O/1e3)),de=String(Math.floor(K/60)).padStart(2,"0"),ge=String(K%60).padStart(2,"0");g(`${de}:${ge}`)},1e3);return()=>clearInterval(C)},[n]),ue.useEffect(()=>()=>{q()},[q]);const H=f.map(C=>`${C.speaker}: ${C.text}`).join(`
`);return{isCapturing:n,transcript:H,statusMessage:o,startCapture:ae,stopListening:q,stopCaptureAndSummarize:te,appendTranscript:ee,resetTranscript:G,liveSegments:f,partialSegment:m,visitDuration:v,statusState:x,handleLiveTranscriptEvent:se,catchUpTranscript:V,setStatusState:S}}function GM(){const[u,e]=ue.useState([]),[n,r]=ue.useState(!0),o=ue.useCallback(async()=>{try{const v=await fetch(Nt("/api/roster"));if(!v.ok)throw new Error("Failed to fetch roster");const g=await v.json();e(g)}catch(v){console.error("Roster fetch error:",v)}finally{r(!1)}},[]);ue.useEffect(()=>{o()},[o]);const a=ue.useCallback(async v=>{if(!(await fetch(Nt("/api/roster"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).ok)throw new Error("Failed to create profile");await o()},[o]),f=ue.useCallback(async v=>{if(!(await fetch(Nt(`/api/roster/${v}`),{method:"DELETE"})).ok)throw new Error("Failed to delete profile");await o()},[o]),c=ue.useCallback(async(v,g=null)=>{const S=await(await fetch(Nt("/api/register_face"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,image_base64:g})})).json();return S.success&&await o(),S},[o]),m=ue.useCallback(async v=>{const g=await fetch(Nt(`/api/clear_encodings/${v}`),{method:"POST"}),x=await g.json();return g.ok&&await o(),x},[o]),h=ue.useCallback(async(v,g,x="")=>{try{(await fetch(Nt("/api/update_note"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,note:g,transcript:x})})).ok&&await o()}catch(S){console.error("Failed to save memory note:",S)}},[o]);return{profiles:u,loading:n,reload:o,addProfile:a,deleteProfile:f,registerFace:c,clearFaceEncodings:m,saveUpdatedNote:h}}function VM(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){const e=Math.random()*16|0;return(u==="x"?e:e&3|8).toString(16)})}const WM={ttsEnabled:!0,interactionEnabled:!0,autoListenEnabled:!0,rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null};function HM(){const[u,e]=ue.useState("patient"),[n,r]=ue.useState(null),o=ue.useRef(null),[a,f]=ue.useState(null),[c,m]=ue.useState(WM),h=ue.useRef(null),{profiles:v,addProfile:g,deleteProfile:x,registerFace:S,clearFaceEncodings:E,saveUpdatedNote:y,reload:_}=GM(),{isCapturing:T,transcript:A,startCapture:k,stopListening:L,stopCaptureAndSummarize:b,appendTranscript:F,resetTranscript:j,liveSegments:M,partialSegment:z,visitDuration:Y,statusState:B,handleLiveTranscriptEvent:fe,catchUpTranscript:se,setStatusState:q}=BM(),ae=ue.useCallback(K=>{const de=v.find(X=>X.person_id===K.person_id)||K;o.current=de,r(de),j();const ge=VM();f(ge),k({name:de.name,visitId:ge,language:c.language,sendCommand:h.current})},[v,j,k,c.language]),te=ue.useCallback(async()=>{const K=o.current;if(!K)return;o.current=null,r(null),f(null);const de=await b(K);de&&await y(K.person_id,de,A)},[b,y,A]),ee=ue.useCallback(K=>{switch(K.type){case"recognized":ae(K.person);break;case"unrecognized":te();break;case"memory_updated":_();break;case"transcript_partial":case"transcript_final":fe(K);break}},[ae,te,_,fe]),{connectionStatus:G,sendCommand:V}=UM(ee);h.current=V,ue.useEffect(()=>{G==="disconnected"?q("disconnected"):G==="connected"&&q(T?"listening":"idle")},[G,T,q]),ue.useEffect(()=>{G==="connected"&&a&&se(a)},[G,a,se]);const H=async K=>{try{await fetch(Nt("/api/simulate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"arrive",person_id:K})})}catch(de){console.error("Simulation error:",de)}},C=async()=>{try{await fetch(Nt("/api/simulate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"leave"})})}catch(K){console.error("Simulation error:",K)}},O=async()=>{o.current&&await te()};return D.jsxs(D.Fragment,{children:[D.jsx(OM,{}),D.jsxs("header",{className:"top-nav",children:[D.jsxs("div",{className:"brand-wrapper",children:[D.jsx("div",{className:"brand-icon",children:"⚓"}),D.jsxs("div",{className:"brand-text",children:[D.jsx("h1",{children:"Anchor"}),D.jsx("p",{children:"Dementia Care Companion"})]})]}),D.jsxs("div",{className:"nav-controls",children:[D.jsxs("div",{className:"status-pill",children:[D.jsx("span",{className:`status-dot ${G==="connected"?"active":G==="connecting"?"idle":"warn"}`}),D.jsx("span",{children:G==="connected"?"Live Connected":G==="connecting"?"Connecting...":"Disconnected"})]}),D.jsxs("div",{className:"mode-tab-group",children:[D.jsx("button",{className:`mode-tab ${u==="patient"?"active":""}`,onClick:()=>e("patient"),children:"Patient View"}),D.jsx("button",{className:`mode-tab ${u==="caregiver"?"active":""}`,onClick:()=>e("caregiver"),children:"Caregiver & Controls"})]})]})]}),D.jsx("main",{className:"app-container",children:u==="patient"?D.jsx(H0,{recognizedPerson:n,speakAloud:c.ttsEnabled,ttsSettings:c,interactionEnabled:c.interactionEnabled,autoListenEnabled:c.autoListenEnabled}):D.jsx(fx,{isVisitorPresent:!!n,activePerson:n,transcript:A,isCapturing:T,onToggleListening:()=>{T?L():k({name:(n==null?void 0:n.name)||"Caregiver/Visitor",language:c.language,sendCommand:h.current})},onAppendSpeech:K=>F(K,h.current),onClearSpeech:j,onSimulateArrive:H,onSimulateLeave:C,onForceSummarize:O,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E,ttsSettings:c,onTtsSettingsChange:m,liveSegments:M,partialSegment:z,visitDuration:Y,statusState:B})})]})}const jM=y0.createRoot(document.getElementById("root"));jM.render(D.jsx(h0.StrictMode,{children:D.jsx(HM,{})}));
