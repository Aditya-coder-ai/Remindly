(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function qm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Pc={exports:{}},zo={},Dc={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function a0(){if(dp)return et;dp=1;var u=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function _(C,O,Y){this.props=C,this.context=O,this.refs=y,this.updater=Y||S}_.prototype.isReactComponent={},_.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},_.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function T(){}T.prototype=_.prototype;function A(C,O,Y){this.props=C,this.context=O,this.refs=y,this.updater=Y||S}var k=A.prototype=new T;k.constructor=A,E(k,_.prototype),k.isPureReactComponent=!0;var L=Array.isArray,b=Object.prototype.hasOwnProperty,F={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function M(C,O,Y){var he,ve={},$=null,_e=null;if(O!=null)for(he in O.ref!==void 0&&(_e=O.ref),O.key!==void 0&&($=""+O.key),O)b.call(O,he)&&!G.hasOwnProperty(he)&&(ve[he]=O[he]);var ye=arguments.length-2;if(ye===1)ve.children=Y;else if(1<ye){for(var we=Array(ye),Se=0;Se<ye;Se++)we[Se]=arguments[Se+2];ve.children=we}if(C&&C.defaultProps)for(he in ye=C.defaultProps,ye)ve[he]===void 0&&(ve[he]=ye[he]);return{$$typeof:u,type:C,key:$,ref:_e,props:ve,_owner:F.current}}function z(C,O){return{$$typeof:u,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function K(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function B(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Y){return O[Y]})}var de=/\/+/g;function se(C,O){return typeof C=="object"&&C!==null&&C.key!=null?B(""+C.key):O.toString(36)}function q(C,O,Y,he,ve){var $=typeof C;($==="undefined"||$==="boolean")&&(C=null);var _e=!1;if(C===null)_e=!0;else switch($){case"string":case"number":_e=!0;break;case"object":switch(C.$$typeof){case u:case e:_e=!0}}if(_e)return _e=C,ve=ve(_e),C=he===""?"."+se(_e,0):he,L(ve)?(Y="",C!=null&&(Y=C.replace(de,"$&/")+"/"),q(ve,O,Y,"",function(Se){return Se})):ve!=null&&(K(ve)&&(ve=z(ve,Y+(!ve.key||_e&&_e.key===ve.key?"":(""+ve.key).replace(de,"$&/")+"/")+C)),O.push(ve)),1;if(_e=0,he=he===""?".":he+":",L(C))for(var ye=0;ye<C.length;ye++){$=C[ye];var we=he+se($,ye);_e+=q($,O,Y,we,ve)}else if(we=x(C),typeof we=="function")for(C=we.call(C),ye=0;!($=C.next()).done;)$=$.value,we=he+se($,ye++),_e+=q($,O,Y,we,ve);else if($==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return _e}function le(C,O,Y){if(C==null)return C;var he=[],ve=0;return q(C,he,"","",function($){return O.call(Y,$,ve++)}),he}function te(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(Y){(C._status===0||C._status===-1)&&(C._status=1,C._result=Y)},function(Y){(C._status===0||C._status===-1)&&(C._status=2,C._result=Y)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var re={current:null},W={transition:null},H={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:W,ReactCurrentOwner:F};function j(){throw Error("act(...) is not supported in production builds of React.")}return et.Children={map:le,forEach:function(C,O,Y){le(C,function(){O.apply(this,arguments)},Y)},count:function(C){var O=0;return le(C,function(){O++}),O},toArray:function(C){return le(C,function(O){return O})||[]},only:function(C){if(!K(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},et.Component=_,et.Fragment=n,et.Profiler=o,et.PureComponent=A,et.StrictMode=r,et.Suspense=m,et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,et.act=j,et.cloneElement=function(C,O,Y){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var he=E({},C.props),ve=C.key,$=C.ref,_e=C._owner;if(O!=null){if(O.ref!==void 0&&($=O.ref,_e=F.current),O.key!==void 0&&(ve=""+O.key),C.type&&C.type.defaultProps)var ye=C.type.defaultProps;for(we in O)b.call(O,we)&&!G.hasOwnProperty(we)&&(he[we]=O[we]===void 0&&ye!==void 0?ye[we]:O[we])}var we=arguments.length-2;if(we===1)he.children=Y;else if(1<we){ye=Array(we);for(var Se=0;Se<we;Se++)ye[Se]=arguments[Se+2];he.children=ye}return{$$typeof:u,type:C.type,key:ve,ref:$,props:he,_owner:_e}},et.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:a,_context:C},C.Consumer=C},et.createElement=M,et.createFactory=function(C){var O=M.bind(null,C);return O.type=C,O},et.createRef=function(){return{current:null}},et.forwardRef=function(C){return{$$typeof:c,render:C}},et.isValidElement=K,et.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:te}},et.memo=function(C,O){return{$$typeof:h,type:C,compare:O===void 0?null:O}},et.startTransition=function(C){var O=W.transition;W.transition={};try{C()}finally{W.transition=O}},et.unstable_act=j,et.useCallback=function(C,O){return re.current.useCallback(C,O)},et.useContext=function(C){return re.current.useContext(C)},et.useDebugValue=function(){},et.useDeferredValue=function(C){return re.current.useDeferredValue(C)},et.useEffect=function(C,O){return re.current.useEffect(C,O)},et.useId=function(){return re.current.useId()},et.useImperativeHandle=function(C,O,Y){return re.current.useImperativeHandle(C,O,Y)},et.useInsertionEffect=function(C,O){return re.current.useInsertionEffect(C,O)},et.useLayoutEffect=function(C,O){return re.current.useLayoutEffect(C,O)},et.useMemo=function(C,O){return re.current.useMemo(C,O)},et.useReducer=function(C,O,Y){return re.current.useReducer(C,O,Y)},et.useRef=function(C){return re.current.useRef(C)},et.useState=function(C){return re.current.useState(C)},et.useSyncExternalStore=function(C,O,Y){return re.current.useSyncExternalStore(C,O,Y)},et.useTransition=function(){return re.current.useTransition()},et.version="18.3.1",et}var hp;function Lf(){return hp||(hp=1,Dc.exports=a0()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function l0(){if(pp)return zo;pp=1;var u=Lf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(c,m,h){var v,g={},x=null,S=null;h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)r.call(m,v)&&!a.hasOwnProperty(v)&&(g[v]=m[v]);if(c&&c.defaultProps)for(v in m=c.defaultProps,m)g[v]===void 0&&(g[v]=m[v]);return{$$typeof:e,type:c,key:x,ref:S,props:g,_owner:o.current}}return zo.Fragment=n,zo.jsx=f,zo.jsxs=f,zo}var mp;function u0(){return mp||(mp=1,Pc.exports=l0()),Pc.exports}var D=u0(),fe=Lf();const c0=qm(fe);var fl={},Ic={exports:{}},wn={},Nc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function f0(){return gp||(gp=1,(function(u){function e(W,H){var j=W.length;W.push(H);e:for(;0<j;){var C=j-1>>>1,O=W[C];if(0<o(O,H))W[C]=H,W[j]=O,j=C;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var H=W[0],j=W.pop();if(j!==H){W[0]=j;e:for(var C=0,O=W.length,Y=O>>>1;C<Y;){var he=2*(C+1)-1,ve=W[he],$=he+1,_e=W[$];if(0>o(ve,j))$<O&&0>o(_e,ve)?(W[C]=_e,W[$]=j,C=$):(W[C]=ve,W[he]=j,C=he);else if($<O&&0>o(_e,j))W[C]=_e,W[$]=j,C=$;else break e}}return H}function o(W,H){var j=W.sortIndex-H.sortIndex;return j!==0?j:W.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;u.unstable_now=function(){return a.now()}}else{var f=Date,c=f.now();u.unstable_now=function(){return f.now()-c}}var m=[],h=[],v=1,g=null,x=3,S=!1,E=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(W){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=W)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(h)}}function L(W){if(y=!1,k(W),!E)if(n(m)!==null)E=!0,te(b);else{var H=n(h);H!==null&&re(L,H.startTime-W)}}function b(W,H){E=!1,y&&(y=!1,T(M),M=-1),S=!0;var j=x;try{for(k(H),g=n(m);g!==null&&(!(g.expirationTime>H)||W&&!B());){var C=g.callback;if(typeof C=="function"){g.callback=null,x=g.priorityLevel;var O=C(g.expirationTime<=H);H=u.unstable_now(),typeof O=="function"?g.callback=O:g===n(m)&&r(m),k(H)}else r(m);g=n(m)}if(g!==null)var Y=!0;else{var he=n(h);he!==null&&re(L,he.startTime-H),Y=!1}return Y}finally{g=null,x=j,S=!1}}var F=!1,G=null,M=-1,z=5,K=-1;function B(){return!(u.unstable_now()-K<z)}function de(){if(G!==null){var W=u.unstable_now();K=W;var H=!0;try{H=G(!0,W)}finally{H?se():(F=!1,G=null)}}else F=!1}var se;if(typeof A=="function")se=function(){A(de)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,le=q.port2;q.port1.onmessage=de,se=function(){le.postMessage(null)}}else se=function(){_(de,0)};function te(W){G=W,F||(F=!0,se())}function re(W,H){M=_(function(){W(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(W){W.callback=null},u.unstable_continueExecution=function(){E||S||(E=!0,te(b))},u.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<W?Math.floor(1e3/W):5},u.unstable_getCurrentPriorityLevel=function(){return x},u.unstable_getFirstCallbackNode=function(){return n(m)},u.unstable_next=function(W){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var j=x;x=H;try{return W()}finally{x=j}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(W,H){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=x;x=W;try{return H()}finally{x=j}},u.unstable_scheduleCallback=function(W,H,j){var C=u.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?C+j:C):j=C,W){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=j+O,W={id:v++,callback:H,priorityLevel:W,startTime:j,expirationTime:O,sortIndex:-1},j>C?(W.sortIndex=j,e(h,W),n(m)===null&&W===n(h)&&(y?(T(M),M=-1):y=!0,re(L,j-C))):(W.sortIndex=O,e(m,W),E||S||(E=!0,te(b))),W},u.unstable_shouldYield=B,u.unstable_wrapCallback=function(W){var H=x;return function(){var j=x;x=H;try{return W.apply(this,arguments)}finally{x=j}}}})(kc)),kc}var vp;function d0(){return vp||(vp=1,Nc.exports=f0()),Nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function h0(){if(xp)return wn;xp=1;var u=Lf(),e=d0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return m.call(g,t)?!0:m.call(v,t)?!1:h.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,s,l,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(T,A);_[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,s,l){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,s,d,l)&&(s=null),l||d===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,l=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var L=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),F=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),B=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),W=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,C;function O(t){if(C===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var Y=!1;function he(t,i){if(!t||Y)return"";Y=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=l.stack.split(`
`),w=d.length-1,I=p.length-1;1<=w&&0<=I&&d[w]!==p[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==p[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==p[I]){var U=`
`+d[w].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=w&&0<=I);break}}}finally{Y=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?O(t):""}function ve(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=he(t.type,!1),t;case 11:return t=he(t.type.render,!1),t;case 1:return t=he(t.type,!0),t;default:return""}}function $(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case F:return"Portal";case z:return"Profiler";case M:return"StrictMode";case se:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case K:return(t._context.displayName||"Context")+".Provider";case de:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:$(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return $(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Se(t){var i=we(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function je(t){t._valueTracker||(t._valueTracker=Se(t))}function Ge(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ie(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var s=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Nt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=ye(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function Lt(t,i){xt(t,i);var s=ye(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,s):i.hasOwnProperty("defaultValue")&&rt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ht(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function rt(t,i,s){(i!=="number"||Ie(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ut=Array.isArray;function Pt(t,i,s,l){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ye(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function N(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ut(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ye(s)}}function ce(t,i){var s=ye(i.value),l=ye(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Te(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Te(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,ae=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ue(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function ke(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Ye(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,d=ke(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,d):t[s]=d}}var ot=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(t,i){if(i){if(ot[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function X(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ue(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,be=null,Je=null;function kt(t){if(t=wo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ba(i),Re(t.stateNode,t.type,i))}}function Et(t){be?Je?Je.push(t):Je=[t]:be=t}function $n(){if(be){var t=be,i=Je;if(Je=be=null,kt(t),i)for(t=0;t<i.length;t++)kt(i[t])}}function yt(t,i){return t(i)}function In(){}var en=!1;function la(t,i,s){if(en)return t(i,s);en=!0;try{return yt(t,i,s)}finally{en=!1,(be!==null||Je!==null)&&(In(),$n())}}function _i(t,i){var s=t.stateNode;if(s===null)return null;var l=ba(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var ts=!1;if(c)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ts=!1}function Kl(t,i,s,l,d,p,w,I,U){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(s,ne)}catch(ge){this.onError(ge)}}var Sr=!1,P=null,ee=!1,oe=null,ie={onError:function(t){Sr=!0,P=t}};function pe(t,i,s,l,d,p,w,I,U){Sr=!1,P=null,Kl.apply(ie,arguments)}function Xe(t,i,s,l,d,p,w,I,U){if(pe.apply(this,arguments),Sr){if(Sr){var ne=P;Sr=!1,P=null}else throw Error(n(198));ee||(ee=!0,oe=ne)}}function He(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Ze(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ke(t){if(He(t)!==t)throw Error(n(188))}function ct(t){var i=t.alternate;if(!i){if(i=He(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return Ke(d),t;if(p===l)return Ke(d),i;p=p.sibling}throw Error(n(188))}if(s.return!==l.return)s=d,l=p;else{for(var w=!1,I=d.child;I;){if(I===s){w=!0,s=d,l=p;break}if(I===l){w=!0,l=d,s=p;break}I=I.sibling}if(!w){for(I=p.child;I;){if(I===s){w=!0,s=p,l=d;break}if(I===l){w=!0,l=p,s=d;break}I=I.sibling}if(!w)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function nt(t){return t=ct(t),t!==null?it(t):null}function it(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=it(t);if(i!==null)return i;t=t.sibling}return null}var St=e.unstable_scheduleCallback,ci=e.unstable_cancelCallback,Oi=e.unstable_shouldYield,Ui=e.unstable_requestPaint,at=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,fi=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,Kt=e.unstable_NormalPriority,di=e.unstable_LowPriority,Bi=e.unstable_IdlePriority,Gi=null,mt=null;function wr(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Gi,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:Zl,cn=Math.log,no=Math.LN2;function Zl(t){return t>>>=0,t===0?32:31-(cn(t)/no|0)|0}var Mr=64,ua=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ca(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,w=s&268435455;if(w!==0){var I=w&~d;I!==0?l=io(I):(p&=w,p!==0&&(l=io(p)))}else w=s&~d,w!==0?l=io(w):p!==0&&(l=io(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-un(i),d=1<<s,l|=t[s],i&=~d;return l}function bg(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cg(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-un(p),I=1<<w,U=d[w];U===-1?((I&s)===0||(I&l)!==0)&&(d[w]=bg(I,i)):U<=i&&(t.expiredLanes|=I),p&=~I}}function Ql(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wf(){var t=Mr;return Mr<<=1,(Mr&4194240)===0&&(Mr=64),t}function Jl(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ro(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-un(i),t[i]=s}function Ag(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-un(s),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,s&=~p}}function eu(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-un(s),d=1<<l;d&i|t[l]&i&&(t[l]|=i),s&=~d}}var pt=0;function Hf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jf,tu,qf,Xf,$f,nu=!1,fa=[],Vi=null,Wi=null,Hi=null,so=new Map,oo=new Map,ji=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(t,i,s,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=wo(i),i!==null&&tu(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Lg(t,i,s,l,d){switch(i){case"focusin":return Vi=ao(Vi,t,i,s,l,d),!0;case"dragenter":return Wi=ao(Wi,t,i,s,l,d),!0;case"mouseover":return Hi=ao(Hi,t,i,s,l,d),!0;case"pointerover":var p=d.pointerId;return so.set(p,ao(so.get(p)||null,t,i,s,l,d)),!0;case"gotpointercapture":return p=d.pointerId,oo.set(p,ao(oo.get(p)||null,t,i,s,l,d)),!0}return!1}function Kf(t){var i=Er(t.target);if(i!==null){var s=He(i);if(s!==null){if(i=s.tag,i===13){if(i=Ze(s),i!==null){t.blockedOn=i,$f(t.priority,function(){qf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ru(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Le=l,s.target.dispatchEvent(l),Le=null}else return i=wo(s),i!==null&&tu(i),t.blockedOn=s,!1;i.shift()}return!0}function Zf(t,i,s){da(t)&&s.delete(i)}function Pg(){nu=!1,Vi!==null&&da(Vi)&&(Vi=null),Wi!==null&&da(Wi)&&(Wi=null),Hi!==null&&da(Hi)&&(Hi=null),so.forEach(Zf),oo.forEach(Zf)}function lo(t,i){t.blockedOn===i&&(t.blockedOn=null,nu||(nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pg)))}function uo(t){function i(d){return lo(d,t)}if(0<fa.length){lo(fa[0],t);for(var s=1;s<fa.length;s++){var l=fa[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&lo(Vi,t),Wi!==null&&lo(Wi,t),Hi!==null&&lo(Hi,t),so.forEach(i),oo.forEach(i),s=0;s<ji.length;s++)l=ji[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(s=ji[0],s.blockedOn===null);)Kf(s),s.blockedOn===null&&ji.shift()}var ns=L.ReactCurrentBatchConfig,ha=!0;function Dg(t,i,s,l){var d=pt,p=ns.transition;ns.transition=null;try{pt=1,iu(t,i,s,l)}finally{pt=d,ns.transition=p}}function Ig(t,i,s,l){var d=pt,p=ns.transition;ns.transition=null;try{pt=4,iu(t,i,s,l)}finally{pt=d,ns.transition=p}}function iu(t,i,s,l){if(ha){var d=ru(t,i,s,l);if(d===null)Su(t,i,l,pa,s),Yf(t,l);else if(Lg(d,t,i,s,l))l.stopPropagation();else if(Yf(t,l),i&4&&-1<Rg.indexOf(t)){for(;d!==null;){var p=wo(d);if(p!==null&&jf(p),p=ru(t,i,s,l),p===null&&Su(t,i,l,pa,s),p===d)break;d=p}d!==null&&l.stopPropagation()}else Su(t,i,l,null,s)}}var pa=null;function ru(t,i,s,l){if(pa=null,t=ue(l),t=Er(t),t!==null)if(i=He(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Ze(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return pa=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case fi:return 1;case Ct:return 4;case Kt:case di:return 16;case Bi:return 536870912;default:return 16}default:return 16}}var qi=null,su=null,ma=null;function Jf(){if(ma)return ma;var t,i=su,s=i.length,l,d="value"in qi?qi.value:qi.textContent,p=d.length;for(t=0;t<s&&i[t]===d[t];t++);var w=s-t;for(l=1;l<=w&&i[s-l]===d[p-l];l++);return ma=d.slice(t,1<l?1-l:void 0)}function ga(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function ed(){return!1}function Tn(t){function i(s,l,d,p,w){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?va:ed,this.isPropagationStopped=ed,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Tn(is),co=j({},is,{view:0,detail:0}),Ng=Tn(co),au,lu,fo,xa=j({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(au=t.screenX-fo.screenX,lu=t.screenY-fo.screenY):lu=au=0,fo=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),td=Tn(xa),kg=j({},xa,{dataTransfer:0}),Fg=Tn(kg),zg=j({},co,{relatedTarget:0}),uu=Tn(zg),Og=j({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Tn(Og),Bg=j({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gg=Tn(Bg),Vg=j({},is,{data:0}),nd=Tn(Vg),Wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=jg[t])?!!i[t]:!1}function cu(){return qg}var Xg=j({},co,{key:function(t){if(t.key){var i=Wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$g=Tn(Xg),Yg=j({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=Tn(Yg),Kg=j({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Zg=Tn(Kg),Qg=j({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=Tn(Qg),ev=j({},xa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Tn(ev),nv=[9,13,27,32],fu=c&&"CompositionEvent"in window,ho=null;c&&"documentMode"in document&&(ho=document.documentMode);var iv=c&&"TextEvent"in window&&!ho,rd=c&&(!fu||ho&&8<ho&&11>=ho),sd=" ",od=!1;function ad(t,i){switch(t){case"keyup":return nv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function rv(t,i){switch(t){case"compositionend":return ld(i);case"keypress":return i.which!==32?null:(od=!0,sd);case"textInput":return t=i.data,t===sd&&od?null:t;default:return null}}function sv(t,i){if(rs)return t==="compositionend"||!fu&&ad(t,i)?(t=Jf(),ma=su=qi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rd&&i.locale!=="ko"?null:i.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ov[t.type]:i==="textarea"}function cd(t,i,s,l){Et(l),i=Ma(i,"onChange"),0<i.length&&(s=new ou("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function av(t){Ad(t,0)}function _a(t){var i=us(t);if(Ge(i))return t}function lv(t,i){if(t==="change")return i}var fd=!1;if(c){var du;if(c){var hu="oninput"in document;if(!hu){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),hu=typeof dd.oninput=="function"}du=hu}else du=!1;fd=du&&(!document.documentMode||9<document.documentMode)}function hd(){po&&(po.detachEvent("onpropertychange",pd),mo=po=null)}function pd(t){if(t.propertyName==="value"&&_a(mo)){var i=[];cd(i,mo,t,ue(t)),la(av,i)}}function uv(t,i,s){t==="focusin"?(hd(),po=i,mo=s,po.attachEvent("onpropertychange",pd)):t==="focusout"&&hd()}function cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _a(mo)}function fv(t,i){if(t==="click")return _a(i)}function dv(t,i){if(t==="input"||t==="change")return _a(i)}function hv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Yn=typeof Object.is=="function"?Object.is:hv;function go(t,i){if(Yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!m.call(i,d)||!Yn(t[d],i[d]))return!1}return!0}function md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,i){var s=md(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=md(s)}}function vd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xd(){for(var t=window,i=Ie();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ie(t.document)}return i}function pu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function pv(t){var i=xd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&vd(s.ownerDocument.documentElement,s)){if(l!==null&&pu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=gd(s,p);var w=gd(s,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mv=c&&"documentMode"in document&&11>=document.documentMode,ss=null,mu=null,vo=null,gu=!1;function _d(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gu||ss==null||ss!==Ie(l)||(l=ss,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&go(vo,l)||(vo=l,l=Ma(mu,"onSelect"),0<l.length&&(i=new ou("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ss)))}function ya(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var os={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},vu={},yd={};c&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Sa(t){if(vu[t])return vu[t];if(!os[t])return t;var i=os[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in yd)return vu[t]=i[s];return t}var Sd=Sa("animationend"),wd=Sa("animationiteration"),Md=Sa("animationstart"),Ed=Sa("transitionend"),Td=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,i){Td.set(t,i),a(i,[t])}for(var xu=0;xu<bd.length;xu++){var _u=bd[xu],gv=_u.toLowerCase(),vv=_u[0].toUpperCase()+_u.slice(1);Xi(gv,"on"+vv)}Xi(Sd,"onAnimationEnd"),Xi(wd,"onAnimationIteration"),Xi(Md,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Ed,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Cd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Xe(l,i,void 0,t),t.currentTarget=null}function Ad(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],U=I.instance,ne=I.currentTarget;if(I=I.listener,U!==p&&d.isPropagationStopped())break e;Cd(d,I,ne),p=U}else for(w=0;w<l.length;w++){if(I=l[w],U=I.instance,ne=I.currentTarget,I=I.listener,U!==p&&d.isPropagationStopped())break e;Cd(d,I,ne),p=U}}}if(ee)throw t=oe,ee=!1,oe=null,t}function wt(t,i){var s=i[Cu];s===void 0&&(s=i[Cu]=new Set);var l=t+"__bubble";s.has(l)||(Rd(i,t,2,!1),s.add(l))}function yu(t,i,s){var l=0;i&&(l|=4),Rd(s,t,l,i)}var wa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[wa]){t[wa]=!0,r.forEach(function(s){s!=="selectionchange"&&(xv.has(s)||yu(s,!1,t),yu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wa]||(i[wa]=!0,yu("selectionchange",!1,i))}}function Rd(t,i,s,l){switch(Qf(i)){case 1:var d=Dg;break;case 4:d=Ig;break;default:d=iu}s=d.bind(null,i,s,t),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function Su(t,i,s,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var U=w.tag;if((U===3||U===4)&&(U=w.stateNode.containerInfo,U===d||U.nodeType===8&&U.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Er(I),w===null)return;if(U=w.tag,U===5||U===6){l=p=w;continue e}I=I.parentNode}}l=l.return}la(function(){var ne=p,ge=ue(s),xe=[];e:{var me=Td.get(t);if(me!==void 0){var Pe=ou,Fe=t;switch(t){case"keypress":if(ga(s)===0)break e;case"keydown":case"keyup":Pe=$g;break;case"focusin":Fe="focus",Pe=uu;break;case"focusout":Fe="blur",Pe=uu;break;case"beforeblur":case"afterblur":Pe=uu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=Zg;break;case Sd:case wd:case Md:Pe=Ug;break;case Ed:Pe=Jg;break;case"scroll":Pe=Ng;break;case"wheel":Pe=tv;break;case"copy":case"cut":case"paste":Pe=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=id}var ze=(i&4)!==0,Ft=!ze&&t==="scroll",Z=ze?me!==null?me+"Capture":null:me;ze=[];for(var V=ne,J;V!==null;){J=V;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Z!==null&&(Ee=_i(V,Z),Ee!=null&&ze.push(yo(V,Ee,J)))),Ft)break;V=V.return}0<ze.length&&(me=new Pe(me,Fe,null,s,ge),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Pe=t==="mouseout"||t==="pointerout",me&&s!==Le&&(Fe=s.relatedTarget||s.fromElement)&&(Er(Fe)||Fe[yi]))break e;if((Pe||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Pe?(Fe=s.relatedTarget||s.toElement,Pe=ne,Fe=Fe?Er(Fe):null,Fe!==null&&(Ft=He(Fe),Fe!==Ft||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Pe=null,Fe=ne),Pe!==Fe)){if(ze=td,Ee="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(ze=id,Ee="onPointerLeave",Z="onPointerEnter",V="pointer"),Ft=Pe==null?me:us(Pe),J=Fe==null?me:us(Fe),me=new ze(Ee,V+"leave",Pe,s,ge),me.target=Ft,me.relatedTarget=J,Ee=null,Er(ge)===ne&&(ze=new ze(Z,V+"enter",Fe,s,ge),ze.target=J,ze.relatedTarget=Ft,Ee=ze),Ft=Ee,Pe&&Fe)t:{for(ze=Pe,Z=Fe,V=0,J=ze;J;J=as(J))V++;for(J=0,Ee=Z;Ee;Ee=as(Ee))J++;for(;0<V-J;)ze=as(ze),V--;for(;0<J-V;)Z=as(Z),J--;for(;V--;){if(ze===Z||Z!==null&&ze===Z.alternate)break t;ze=as(ze),Z=as(Z)}ze=null}else ze=null;Pe!==null&&Ld(xe,me,Pe,ze,!1),Fe!==null&&Ft!==null&&Ld(xe,Ft,Fe,ze,!0)}}e:{if(me=ne?us(ne):window,Pe=me.nodeName&&me.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&me.type==="file")var Oe=lv;else if(ud(me))if(fd)Oe=dv;else{Oe=cv;var Ve=uv}else(Pe=me.nodeName)&&Pe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Oe=fv);if(Oe&&(Oe=Oe(t,ne))){cd(xe,Oe,s,ge);break e}Ve&&Ve(t,me,ne),t==="focusout"&&(Ve=me._wrapperState)&&Ve.controlled&&me.type==="number"&&rt(me,"number",me.value)}switch(Ve=ne?us(ne):window,t){case"focusin":(ud(Ve)||Ve.contentEditable==="true")&&(ss=Ve,mu=ne,vo=null);break;case"focusout":vo=mu=ss=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,_d(xe,s,ge);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":_d(xe,s,ge)}var We;if(fu)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else rs?ad(t,s)&&($e="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&($e="onCompositionStart");$e&&(rd&&s.locale!=="ko"&&(rs||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&rs&&(We=Jf()):(qi=ge,su="value"in qi?qi.value:qi.textContent,rs=!0)),Ve=Ma(ne,$e),0<Ve.length&&($e=new nd($e,t,null,s,ge),xe.push({event:$e,listeners:Ve}),We?$e.data=We:(We=ld(s),We!==null&&($e.data=We)))),(We=iv?rv(t,s):sv(t,s))&&(ne=Ma(ne,"onBeforeInput"),0<ne.length&&(ge=new nd("onBeforeInput","beforeinput",null,s,ge),xe.push({event:ge,listeners:ne}),ge.data=We))}Ad(xe,i)})}function yo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ma(t,i){for(var s=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=_i(t,s),p!=null&&l.unshift(yo(t,p,d)),p=_i(t,i),p!=null&&l.push(yo(t,p,d))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ld(t,i,s,l,d){for(var p=i._reactName,w=[];s!==null&&s!==l;){var I=s,U=I.alternate,ne=I.stateNode;if(U!==null&&U===l)break;I.tag===5&&ne!==null&&(I=ne,d?(U=_i(s,p),U!=null&&w.unshift(yo(s,U,I))):d||(U=_i(s,p),U!=null&&w.push(yo(s,U,I)))),s=s.return}w.length!==0&&t.push({event:i,listeners:w})}var _v=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(_v,`
`).replace(yv,"")}function Ea(t,i,s){if(i=Pd(i),Pd(t)!==i&&s)throw Error(n(425))}function Ta(){}var wu=null,Mu=null;function Eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(t){return Dd.resolve(null).then(t).catch(Mv)}:Tu;function Mv(t){setTimeout(function(){throw t})}function bu(t,i){var s=i,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(l===0){t.removeChild(d),uo(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=d}while(s);uo(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Id(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),hi="__reactFiber$"+ls,So="__reactProps$"+ls,yi="__reactContainer$"+ls,Cu="__reactEvents$"+ls,Ev="__reactListeners$"+ls,Tv="__reactHandles$"+ls;function Er(t){var i=t[hi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[hi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Id(t);t!==null;){if(s=t[hi])return s;t=Id(t)}return i}t=s,s=t.parentNode}return null}function wo(t){return t=t[hi]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ba(t){return t[So]||null}var Au=[],cs=-1;function Yi(t){return{current:t}}function Mt(t){0>cs||(t.current=Au[cs],Au[cs]=null,cs--)}function gt(t,i){cs++,Au[cs]=t.current,t.current=i}var Ki={},tn=Yi(Ki),vn=Yi(!1),Tr=Ki;function fs(t,i){var s=t.type.contextTypes;if(!s)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in s)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function xn(t){return t=t.childContextTypes,t!=null}function Ca(){Mt(vn),Mt(tn)}function Nd(t,i,s){if(tn.current!==Ki)throw Error(n(168));gt(tn,i),gt(vn,s)}function kd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,_e(t)||"Unknown",d));return j({},s,l)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=tn.current,gt(tn,t),gt(vn,vn.current),!0}function Fd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=kd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Mt(vn),Mt(tn),gt(tn,t)):Mt(vn),gt(vn,s)}var Si=null,Ra=!1,Ru=!1;function zd(t){Si===null?Si=[t]:Si.push(t)}function bv(t){Ra=!0,zd(t)}function Zi(){if(!Ru&&Si!==null){Ru=!0;var t=0,i=pt;try{var s=Si;for(pt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Si=null,Ra=!1}catch(d){throw Si!==null&&(Si=Si.slice(t+1)),St(fi,Zi),d}finally{pt=i,Ru=!1}}return null}var ds=[],hs=0,La=null,Pa=0,Nn=[],kn=0,br=null,wi=1,Mi="";function Cr(t,i){ds[hs++]=Pa,ds[hs++]=La,La=t,Pa=i}function Od(t,i,s){Nn[kn++]=wi,Nn[kn++]=Mi,Nn[kn++]=br,br=t;var l=wi;t=Mi;var d=32-un(l)-1;l&=~(1<<d),s+=1;var p=32-un(i)+d;if(30<p){var w=d-d%5;p=(l&(1<<w)-1).toString(32),l>>=w,d-=w,wi=1<<32-un(i)+d|s<<d|l,Mi=p+t}else wi=1<<p|s<<d|l,Mi=t}function Lu(t){t.return!==null&&(Cr(t,1),Od(t,1,0))}function Pu(t){for(;t===La;)La=ds[--hs],ds[hs]=null,Pa=ds[--hs],ds[hs]=null;for(;t===br;)br=Nn[--kn],Nn[kn]=null,Mi=Nn[--kn],Nn[kn]=null,wi=Nn[--kn],Nn[kn]=null}var bn=null,Cn=null,Tt=!1,Kn=null;function Ud(t,i){var s=Un(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Bd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Cn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=br!==null?{id:wi,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Un(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,bn=t,Cn=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Iu(t){if(Tt){var i=Cn;if(i){var s=i;if(!Bd(t,i)){if(Du(t))throw Error(n(418));i=$i(s.nextSibling);var l=bn;i&&Bd(t,i)?Ud(l,s):(t.flags=t.flags&-4097|2,Tt=!1,bn=t)}}else{if(Du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Tt=!1,bn=t}}}function Gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Da(t){if(t!==bn)return!1;if(!Tt)return Gd(t),Tt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Eu(t.type,t.memoizedProps)),i&&(i=Cn)){if(Du(t))throw Vd(),Error(n(418));for(;i;)Ud(t,i),i=$i(i.nextSibling)}if(Gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Cn=$i(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Cn=null}}else Cn=bn?$i(t.stateNode.nextSibling):null;return!0}function Vd(){for(var t=Cn;t;)t=$i(t.nextSibling)}function ps(){Cn=bn=null,Tt=!1}function Nu(t){Kn===null?Kn=[t]:Kn.push(t)}var Cv=L.ReactCurrentBatchConfig;function Mo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var I=d.refs;w===null?delete I[p]:I[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Ia(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Wd(t){var i=t._init;return i(t._payload)}function Hd(t){function i(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function s(Z,V){if(!t)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function l(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function d(Z,V){return Z=sr(Z,V),Z.index=0,Z.sibling=null,Z}function p(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=2,V):J):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function w(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,J,Ee){return V===null||V.tag!==6?(V=Tc(J,Z.mode,Ee),V.return=Z,V):(V=d(V,J),V.return=Z,V)}function U(Z,V,J,Ee){var Oe=J.type;return Oe===G?ge(Z,V,J.props.children,Ee,J.key):V!==null&&(V.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===te&&Wd(Oe)===V.type)?(Ee=d(V,J.props),Ee.ref=Mo(Z,V,J),Ee.return=Z,Ee):(Ee=il(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Mo(Z,V,J),Ee.return=Z,Ee)}function ne(Z,V,J,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=bc(J,Z.mode,Ee),V.return=Z,V):(V=d(V,J.children||[]),V.return=Z,V)}function ge(Z,V,J,Ee,Oe){return V===null||V.tag!==7?(V=kr(J,Z.mode,Ee,Oe),V.return=Z,V):(V=d(V,J),V.return=Z,V)}function xe(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Tc(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return J=il(V.type,V.key,V.props,null,Z.mode,J),J.ref=Mo(Z,null,V),J.return=Z,J;case F:return V=bc(V,Z.mode,J),V.return=Z,V;case te:var Ee=V._init;return xe(Z,Ee(V._payload),J)}if(Ut(V)||H(V))return V=kr(V,Z.mode,J,null),V.return=Z,V;Ia(Z,V)}return null}function me(Z,V,J,Ee){var Oe=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Oe!==null?null:I(Z,V,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Oe?U(Z,V,J,Ee):null;case F:return J.key===Oe?ne(Z,V,J,Ee):null;case te:return Oe=J._init,me(Z,V,Oe(J._payload),Ee)}if(Ut(J)||H(J))return Oe!==null?null:ge(Z,V,J,Ee,null);Ia(Z,J)}return null}function Pe(Z,V,J,Ee,Oe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(J)||null,I(V,Z,""+Ee,Oe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case b:return Z=Z.get(Ee.key===null?J:Ee.key)||null,U(V,Z,Ee,Oe);case F:return Z=Z.get(Ee.key===null?J:Ee.key)||null,ne(V,Z,Ee,Oe);case te:var Ve=Ee._init;return Pe(Z,V,J,Ve(Ee._payload),Oe)}if(Ut(Ee)||H(Ee))return Z=Z.get(J)||null,ge(V,Z,Ee,Oe,null);Ia(V,Ee)}return null}function Fe(Z,V,J,Ee){for(var Oe=null,Ve=null,We=V,$e=V=0,qt=null;We!==null&&$e<J.length;$e++){We.index>$e?(qt=We,We=null):qt=We.sibling;var ut=me(Z,We,J[$e],Ee);if(ut===null){We===null&&(We=qt);break}t&&We&&ut.alternate===null&&i(Z,We),V=p(ut,V,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut,We=qt}if($e===J.length)return s(Z,We),Tt&&Cr(Z,$e),Oe;if(We===null){for(;$e<J.length;$e++)We=xe(Z,J[$e],Ee),We!==null&&(V=p(We,V,$e),Ve===null?Oe=We:Ve.sibling=We,Ve=We);return Tt&&Cr(Z,$e),Oe}for(We=l(Z,We);$e<J.length;$e++)qt=Pe(We,Z,$e,J[$e],Ee),qt!==null&&(t&&qt.alternate!==null&&We.delete(qt.key===null?$e:qt.key),V=p(qt,V,$e),Ve===null?Oe=qt:Ve.sibling=qt,Ve=qt);return t&&We.forEach(function(or){return i(Z,or)}),Tt&&Cr(Z,$e),Oe}function ze(Z,V,J,Ee){var Oe=H(J);if(typeof Oe!="function")throw Error(n(150));if(J=Oe.call(J),J==null)throw Error(n(151));for(var Ve=Oe=null,We=V,$e=V=0,qt=null,ut=J.next();We!==null&&!ut.done;$e++,ut=J.next()){We.index>$e?(qt=We,We=null):qt=We.sibling;var or=me(Z,We,ut.value,Ee);if(or===null){We===null&&(We=qt);break}t&&We&&or.alternate===null&&i(Z,We),V=p(or,V,$e),Ve===null?Oe=or:Ve.sibling=or,Ve=or,We=qt}if(ut.done)return s(Z,We),Tt&&Cr(Z,$e),Oe;if(We===null){for(;!ut.done;$e++,ut=J.next())ut=xe(Z,ut.value,Ee),ut!==null&&(V=p(ut,V,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut);return Tt&&Cr(Z,$e),Oe}for(We=l(Z,We);!ut.done;$e++,ut=J.next())ut=Pe(We,Z,$e,ut.value,Ee),ut!==null&&(t&&ut.alternate!==null&&We.delete(ut.key===null?$e:ut.key),V=p(ut,V,$e),Ve===null?Oe=ut:Ve.sibling=ut,Ve=ut);return t&&We.forEach(function(o0){return i(Z,o0)}),Tt&&Cr(Z,$e),Oe}function Ft(Z,V,J,Ee){if(typeof J=="object"&&J!==null&&J.type===G&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var Oe=J.key,Ve=V;Ve!==null;){if(Ve.key===Oe){if(Oe=J.type,Oe===G){if(Ve.tag===7){s(Z,Ve.sibling),V=d(Ve,J.props.children),V.return=Z,Z=V;break e}}else if(Ve.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===te&&Wd(Oe)===Ve.type){s(Z,Ve.sibling),V=d(Ve,J.props),V.ref=Mo(Z,Ve,J),V.return=Z,Z=V;break e}s(Z,Ve);break}else i(Z,Ve);Ve=Ve.sibling}J.type===G?(V=kr(J.props.children,Z.mode,Ee,J.key),V.return=Z,Z=V):(Ee=il(J.type,J.key,J.props,null,Z.mode,Ee),Ee.ref=Mo(Z,V,J),Ee.return=Z,Z=Ee)}return w(Z);case F:e:{for(Ve=J.key;V!==null;){if(V.key===Ve)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s(Z,V.sibling),V=d(V,J.children||[]),V.return=Z,Z=V;break e}else{s(Z,V);break}else i(Z,V);V=V.sibling}V=bc(J,Z.mode,Ee),V.return=Z,Z=V}return w(Z);case te:return Ve=J._init,Ft(Z,V,Ve(J._payload),Ee)}if(Ut(J))return Fe(Z,V,J,Ee);if(H(J))return ze(Z,V,J,Ee);Ia(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(s(Z,V.sibling),V=d(V,J),V.return=Z,Z=V):(s(Z,V),V=Tc(J,Z.mode,Ee),V.return=Z,Z=V),w(Z)):s(Z,V)}return Ft}var ms=Hd(!0),jd=Hd(!1),Na=Yi(null),ka=null,gs=null,ku=null;function Fu(){ku=gs=ka=null}function zu(t){var i=Na.current;Mt(Na),t._currentValue=i}function Ou(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function vs(t,i){ka=t,ku=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_n=!0),t.firstContext=null)}function Fn(t){var i=t._currentValue;if(ku!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(ka===null)throw Error(n(308));gs=t,ka.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Ar=null;function Uu(t){Ar===null?Ar=[t]:Ar.push(t)}function qd(t,i,s,l){var d=i.interleaved;return d===null?(s.next=s,Uu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ei(t,l)}function Ei(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Qi=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(st&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ei(t,s)}return d=l.interleaved,d===null?(i.next=i,Uu(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ei(t,s)}function Fa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,eu(t,s)}}function $d(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?d=p=w:p=p.next=w,s=s.next}while(s!==null);p===null?d=p=i:p=p.next=i}else d=p=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function za(t,i,s,l){var d=t.updateQueue;Qi=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var U=I,ne=U.next;U.next=null,w===null?p=ne:w.next=ne,w=U;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==w&&(I===null?ge.firstBaseUpdate=ne:I.next=ne,ge.lastBaseUpdate=U))}if(p!==null){var xe=d.baseState;w=0,ge=ne=U=null,I=p;do{var me=I.lane,Pe=I.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Pe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Fe=t,ze=I;switch(me=i,Pe=s,ze.tag){case 1:if(Fe=ze.payload,typeof Fe=="function"){xe=Fe.call(Pe,xe,me);break e}xe=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ze.payload,me=typeof Fe=="function"?Fe.call(Pe,xe,me):Fe,me==null)break e;xe=j({},xe,me);break e;case 2:Qi=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,me=d.effects,me===null?d.effects=[I]:me.push(I))}else Pe={eventTime:Pe,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(ne=ge=Pe,U=xe):ge=ge.next=Pe,w|=me;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;me=I,I=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ge===null&&(U=xe),d.baseState=U,d.firstBaseUpdate=ne,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Pr|=w,t.lanes=w,t.memoizedState=xe}}function Yd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=s,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var Eo={},pi=Yi(Eo),To=Yi(Eo),bo=Yi(Eo);function Rr(t){if(t===Eo)throw Error(n(174));return t}function Gu(t,i){switch(gt(bo,i),gt(To,t),gt(pi,Eo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Mt(pi),gt(pi,i)}function xs(){Mt(pi),Mt(To),Mt(bo)}function Kd(t){Rr(bo.current);var i=Rr(pi.current),s=Ae(i,t.type);i!==s&&(gt(To,t),gt(pi,s))}function Vu(t){To.current===t&&(Mt(pi),Mt(To))}var At=Yi(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wu=[];function Hu(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var Ua=L.ReactCurrentDispatcher,ju=L.ReactCurrentBatchConfig,Lr=0,Rt=null,Bt=null,Ht=null,Ba=!1,Co=!1,Ao=0,Av=0;function nn(){throw Error(n(321))}function qu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Yn(t[s],i[s]))return!1;return!0}function Xu(t,i,s,l,d,p){if(Lr=p,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?Dv:Iv,t=s(l,d),Co){p=0;do{if(Co=!1,Ao=0,25<=p)throw Error(n(301));p+=1,Ht=Bt=null,i.updateQueue=null,Ua.current=Nv,t=s(l,d)}while(Co)}if(Ua.current=Wa,i=Bt!==null&&Bt.next!==null,Lr=0,Ht=Bt=Rt=null,Ba=!1,i)throw Error(n(300));return t}function $u(){var t=Ao!==0;return Ao=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Rt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function zn(){if(Bt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var i=Ht===null?Rt.memoizedState:Ht.next;if(i!==null)Ht=i,Bt=t;else{if(t===null)throw Error(n(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Ht===null?Rt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ro(t,i){return typeof i=="function"?i(t):i}function Yu(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Bt,d=l.baseQueue,p=s.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}l.baseQueue=d=p,s.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=w=null,U=null,ne=p;do{var ge=ne.lane;if((Lr&ge)===ge)U!==null&&(U=U.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var xe={lane:ge,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};U===null?(I=U=xe,w=l):U=U.next=xe,Rt.lanes|=ge,Pr|=ge}ne=ne.next}while(ne!==null&&ne!==p);U===null?w=l:U.next=I,Yn(l,i.memoizedState)||(_n=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=U,s.lastRenderedState=l}if(t=s.interleaved,t!==null){d=t;do p=d.lane,Rt.lanes|=p,Pr|=p,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Ku(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,p=i.memoizedState;if(d!==null){s.pending=null;var w=d=d.next;do p=t(p,w.action),w=w.next;while(w!==d);Yn(p,i.memoizedState)||(_n=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Zd(){}function Qd(t,i){var s=Rt,l=zn(),d=i(),p=!Yn(l.memoizedState,d);if(p&&(l.memoizedState=d,_n=!0),l=l.queue,Zu(th.bind(null,s,l,t),[t]),l.getSnapshot!==i||p||Ht!==null&&Ht.memoizedState.tag&1){if(s.flags|=2048,Lo(9,eh.bind(null,s,l,d,i),void 0,null),jt===null)throw Error(n(349));(Lr&30)!==0||Jd(s,i,d)}return d}function Jd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function eh(t,i,s,l){i.value=s,i.getSnapshot=l,nh(i)&&ih(t)}function th(t,i,s){return s(function(){nh(i)&&ih(t)})}function nh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Yn(t,s)}catch{return!0}}function ih(t){var i=Ei(t,1);i!==null&&ei(i,t,1,-1)}function rh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=Pv.bind(null,Rt,t),[i.memoizedState,t]}function Lo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function sh(){return zn().memoizedState}function Ga(t,i,s,l){var d=mi();Rt.flags|=t,d.memoizedState=Lo(1|i,s,void 0,l===void 0?null:l)}function Va(t,i,s,l){var d=zn();l=l===void 0?null:l;var p=void 0;if(Bt!==null){var w=Bt.memoizedState;if(p=w.destroy,l!==null&&qu(l,w.deps)){d.memoizedState=Lo(i,s,p,l);return}}Rt.flags|=t,d.memoizedState=Lo(1|i,s,p,l)}function oh(t,i){return Ga(8390656,8,t,i)}function Zu(t,i){return Va(2048,8,t,i)}function ah(t,i){return Va(4,2,t,i)}function lh(t,i){return Va(4,4,t,i)}function uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ch(t,i,s){return s=s!=null?s.concat([t]):null,Va(4,4,uh.bind(null,i,t),s)}function Qu(){}function fh(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&qu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function dh(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&qu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function hh(t,i,s){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=s):(Yn(s,i)||(s=Wf(),Rt.lanes|=s,Pr|=s,t.baseState=!0),i)}function Rv(t,i){var s=pt;pt=s!==0&&4>s?s:4,t(!0);var l=ju.transition;ju.transition={};try{t(!1),i()}finally{pt=s,ju.transition=l}}function ph(){return zn().memoizedState}function Lv(t,i,s){var l=ir(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},mh(t))gh(i,s);else if(s=qd(t,i,s,l),s!==null){var d=dn();ei(s,t,l,d),vh(s,i,l)}}function Pv(t,i,s){var l=ir(t),d={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(mh(t))gh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,I=p(w,s);if(d.hasEagerState=!0,d.eagerState=I,Yn(I,w)){var U=i.interleaved;U===null?(d.next=d,Uu(i)):(d.next=U.next,U.next=d),i.interleaved=d;return}}catch{}finally{}s=qd(t,i,d,l),s!==null&&(d=dn(),ei(s,t,l,d),vh(s,i,l))}}function mh(t){var i=t.alternate;return t===Rt||i!==null&&i===Rt}function gh(t,i){Co=Ba=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function vh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,eu(t,s)}}var Wa={readContext:Fn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},Dv={readContext:Fn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Fn,useEffect:oh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ga(4194308,4,uh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ga(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ga(4,2,t,i)},useMemo:function(t,i){var s=mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Lv.bind(null,Rt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:rh,useDebugValue:Qu,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=rh(!1),i=t[0];return t=Rv.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Rt,d=mi();if(Tt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),jt===null)throw Error(n(349));(Lr&30)!==0||Jd(l,i,s)}d.memoizedState=s;var p={value:s,getSnapshot:i};return d.queue=p,oh(th.bind(null,l,p,t),[t]),l.flags|=2048,Lo(9,eh.bind(null,l,p,s,i),void 0,null),s},useId:function(){var t=mi(),i=jt.identifierPrefix;if(Tt){var s=Mi,l=wi;s=(l&~(1<<32-un(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ao++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Av++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Iv={readContext:Fn,useCallback:fh,useContext:Fn,useEffect:Zu,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:dh,useReducer:Yu,useRef:sh,useState:function(){return Yu(Ro)},useDebugValue:Qu,useDeferredValue:function(t){var i=zn();return hh(i,Bt.memoizedState,t)},useTransition:function(){var t=Yu(Ro)[0],i=zn().memoizedState;return[t,i]},useMutableSource:Zd,useSyncExternalStore:Qd,useId:ph,unstable_isNewReconciler:!1},Nv={readContext:Fn,useCallback:fh,useContext:Fn,useEffect:Zu,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:dh,useReducer:Ku,useRef:sh,useState:function(){return Ku(Ro)},useDebugValue:Qu,useDeferredValue:function(t){var i=zn();return Bt===null?i.memoizedState=t:hh(i,Bt.memoizedState,t)},useTransition:function(){var t=Ku(Ro)[0],i=zn().memoizedState;return[t,i]},useMutableSource:Zd,useSyncExternalStore:Qd,useId:ph,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=j({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Ju(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:j({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ha={isMounted:function(t){return(t=t._reactInternals)?He(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=dn(),d=ir(t),p=Ti(l,d);p.payload=i,s!=null&&(p.callback=s),i=Ji(t,p,d),i!==null&&(ei(i,t,d,l),Fa(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=dn(),d=ir(t),p=Ti(l,d);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=Ji(t,p,d),i!==null&&(ei(i,t,d,l),Fa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=dn(),l=ir(t),d=Ti(s,l);d.tag=2,i!=null&&(d.callback=i),i=Ji(t,d,l),i!==null&&(ei(i,t,l,s),Fa(i,t,l))}};function xh(t,i,s,l,d,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(d,p):!0}function _h(t,i,s){var l=!1,d=Ki,p=i.contextType;return typeof p=="object"&&p!==null?p=Fn(p):(d=xn(i)?Tr:tn.current,l=i.contextTypes,p=(l=l!=null)?fs(t,d):Ki),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function yh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ha.enqueueReplaceState(i,i.state,null)}function ec(t,i,s,l){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},Bu(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Fn(p):(p=xn(i)?Tr:tn.current,d.context=fs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ju(t,i,p,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ha.enqueueReplaceState(d,d.state,null),za(t,s,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var s="",l=i;do s+=ve(l),l=l.return;while(l);var d=s}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function tc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function nc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var kv=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,i,s){s=Ti(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Za||(Za=!0,vc=l),nc(t,i)},s}function wh(t,i,s){s=Ti(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;s.payload=function(){return l(d)},s.callback=function(){nc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){nc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function Mh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new kv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(d.add(s),t=Yv.bind(null,t,i,s),i.then(t,t))}function Eh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Th(t,i,s,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ti(-1,1),i.tag=2,Ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Fv=L.ReactCurrentOwner,_n=!1;function fn(t,i,s,l){i.child=t===null?jd(i,null,s,l):ms(i,t.child,s,l)}function bh(t,i,s,l,d){s=s.render;var p=i.ref;return vs(i,d),l=Xu(t,i,s,l,p,d),s=$u(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Tt&&s&&Lu(i),i.flags|=1,fn(t,i,l,d),i.child)}function Ch(t,i,s,l,d){if(t===null){var p=s.type;return typeof p=="function"&&!Ec(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Ah(t,i,p,l,d)):(t=il(s.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var w=p.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(w,l)&&t.ref===i.ref)return bi(t,i,d)}return i.flags|=1,t=sr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Ah(t,i,s,l,d){if(t!==null){var p=t.memoizedProps;if(go(p,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,bi(t,i,d)}return ic(t,i,s,l,d)}function Rh(t,i,s){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Ss,An),An|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,gt(Ss,An),An|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,gt(Ss,An),An|=l}else p!==null?(l=p.baseLanes|s,i.memoizedState=null):l=s,gt(Ss,An),An|=l;return fn(t,i,d,s),i.child}function Lh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function ic(t,i,s,l,d){var p=xn(s)?Tr:tn.current;return p=fs(i,p),vs(i,d),s=Xu(t,i,s,l,p,d),l=$u(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Tt&&l&&Lu(i),i.flags|=1,fn(t,i,s,d),i.child)}function Ph(t,i,s,l,d){if(xn(s)){var p=!0;Aa(i)}else p=!1;if(vs(i,d),i.stateNode===null)qa(t,i),_h(i,s,l),ec(i,s,l,d),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var U=w.context,ne=s.contextType;typeof ne=="object"&&ne!==null?ne=Fn(ne):(ne=xn(s)?Tr:tn.current,ne=fs(i,ne));var ge=s.getDerivedStateFromProps,xe=typeof ge=="function"||typeof w.getSnapshotBeforeUpdate=="function";xe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||U!==ne)&&yh(i,w,l,ne),Qi=!1;var me=i.memoizedState;w.state=me,za(i,l,w,d),U=i.memoizedState,I!==l||me!==U||vn.current||Qi?(typeof ge=="function"&&(Ju(i,s,ge,l),U=i.memoizedState),(I=Qi||xh(i,s,I,l,me,U,ne))?(xe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),w.props=l,w.state=U,w.context=ne,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Xd(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:Zn(i.type,I),w.props=ne,xe=i.pendingProps,me=w.context,U=s.contextType,typeof U=="object"&&U!==null?U=Fn(U):(U=xn(s)?Tr:tn.current,U=fs(i,U));var Pe=s.getDerivedStateFromProps;(ge=typeof Pe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==xe||me!==U)&&yh(i,w,l,U),Qi=!1,me=i.memoizedState,w.state=me,za(i,l,w,d);var Fe=i.memoizedState;I!==xe||me!==Fe||vn.current||Qi?(typeof Pe=="function"&&(Ju(i,s,Pe,l),Fe=i.memoizedState),(ne=Qi||xh(i,s,ne,l,me,Fe,U)||!1)?(ge||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Fe,U),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Fe,U)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Fe),w.props=l,w.state=Fe,w.context=U,l=ne):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return rc(t,i,s,l,p,d)}function rc(t,i,s,l,d,p){Lh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&Fd(i,s,!1),bi(t,i,p);l=i.stateNode,Fv.current=i;var I=w&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,I,p)):fn(t,i,I,p),i.memoizedState=l.state,d&&Fd(i,s,!0),i.child}function Dh(t){var i=t.stateNode;i.pendingContext?Nd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Nd(t,i.context,!1),Gu(t,i.containerInfo)}function Ih(t,i,s,l,d){return ps(),Nu(d),i.flags|=256,fn(t,i,s,l),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nh(t,i,s){var l=i.pendingProps,d=At.current,p=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),gt(At,d&1),t===null)return Iu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=rl(w,l,0,null),t=kr(t,l,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=oc(s),i.memoizedState=sc,t):ac(i,w));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return zv(t,i,w,l,I,d,s);if(p){p=l.fallback,w=i.mode,d=t.child,I=d.sibling;var U={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=U,i.deletions=null):(l=sr(d,U),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=sr(I,p):(p=kr(p,w,s,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?oc(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~s,i.memoizedState=sc,l}return p=t.child,t=p.sibling,l=sr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function ac(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ja(t,i,s,l){return l!==null&&Nu(l),ms(i,t.child,null,s),t=ac(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function zv(t,i,s,l,d,p,w){if(s)return i.flags&256?(i.flags&=-257,l=tc(Error(n(422))),ja(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=rl({mode:"visible",children:l.children},d,0,null),p=kr(p,d,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,w),i.child.memoizedState=oc(w),i.memoizedState=sc,p);if((i.mode&1)===0)return ja(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=tc(p,l,void 0),ja(t,i,w,l)}if(I=(w&t.childLanes)!==0,_n||I){if(l=jt,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ei(t,d),ei(l,t,d,-1))}return Mc(),l=tc(Error(n(421))),ja(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Kv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Cn=$i(d.nextSibling),bn=i,Tt=!0,Kn=null,t!==null&&(Nn[kn++]=wi,Nn[kn++]=Mi,Nn[kn++]=br,wi=t.id,Mi=t.overflow,br=i),i=ac(i,l.children),i.flags|=4096,i)}function kh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ou(t.return,i,s)}function lc(t,i,s,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=d)}function Fh(t,i,s){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(fn(t,i,l.children,s),l=At.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,s,i);else if(t.tag===19)kh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(gt(At,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Oa(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),lc(i,!1,d,s,p);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Oa(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}lc(i,!0,s,null,p);break;case"together":lc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ov(t,i,s){switch(i.tag){case 3:Dh(i),ps();break;case 5:Kd(i);break;case 1:xn(i.type)&&Aa(i);break;case 4:Gu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;gt(Na,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(gt(At,At.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Nh(t,i,s):(gt(At,At.current&1),t=bi(t,i,s),t!==null?t.sibling:null);gt(At,At.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Fh(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),gt(At,At.current),l)break;return null;case 22:case 23:return i.lanes=0,Rh(t,i,s)}return bi(t,i,s)}var zh,uc,Oh,Uh;zh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},uc=function(){},Oh=function(t,i,s,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Rr(pi.current);var p=null;switch(s){case"input":d=dt(t,d),l=dt(t,l),p=[];break;case"select":d=j({},d,{value:void 0}),l=j({},l,{value:void 0}),p=[];break;case"textarea":d=N(t,d),l=N(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ta)}_t(s,l);var w;s=null;for(ne in d)if(!l.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var I=d[ne];for(w in I)I.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in l){var U=l[ne];if(I=d!=null?d[ne]:void 0,l.hasOwnProperty(ne)&&U!==I&&(U!=null||I!=null))if(ne==="style")if(I){for(w in I)!I.hasOwnProperty(w)||U&&U.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in U)U.hasOwnProperty(w)&&I[w]!==U[w]&&(s||(s={}),s[w]=U[w])}else s||(p||(p=[]),p.push(ne,s)),s=U;else ne==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,I=I?I.__html:void 0,U!=null&&I!==U&&(p=p||[]).push(ne,U)):ne==="children"?typeof U!="string"&&typeof U!="number"||(p=p||[]).push(ne,""+U):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(U!=null&&ne==="onScroll"&&wt("scroll",t),p||I===U||(p=[])):(p=p||[]).push(ne,U))}s&&(p=p||[]).push("style",s);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},Uh=function(t,i,s,l){s!==l&&(i.flags|=4)};function Po(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Uv(t,i,s){var l=i.pendingProps;switch(Pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return xn(i.type)&&Ca(),rn(i),null;case 3:return l=i.stateNode,xs(),Mt(vn),Mt(tn),Hu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(yc(Kn),Kn=null))),uc(t,i),rn(i),null;case 5:Vu(i);var d=Rr(bo.current);if(s=i.type,t!==null&&i.stateNode!=null)Oh(t,i,s,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return rn(i),null}if(t=Rr(pi.current),Da(i)){l=i.stateNode,s=i.type;var p=i.memoizedProps;switch(l[hi]=i,l[So]=p,t=(i.mode&1)!==0,s){case"dialog":wt("cancel",l),wt("close",l);break;case"iframe":case"object":case"embed":wt("load",l);break;case"video":case"audio":for(d=0;d<xo.length;d++)wt(xo[d],l);break;case"source":wt("error",l);break;case"img":case"image":case"link":wt("error",l),wt("load",l);break;case"details":wt("toggle",l);break;case"input":Nt(l,p),wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},wt("invalid",l);break;case"textarea":R(l,p),wt("invalid",l)}_t(s,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var I=p[w];w==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&Ea(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Ea(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&wt("scroll",l)}switch(s){case"input":je(l),ht(l,p,!0);break;case"textarea":je(l),Me(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=Ta)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Te(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(s,{is:l.is}):(t=w.createElement(s),s==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,s),t[hi]=i,t[So]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(w=X(s,l),s){case"dialog":wt("cancel",t),wt("close",t),d=l;break;case"iframe":case"object":case"embed":wt("load",t),d=l;break;case"video":case"audio":for(d=0;d<xo.length;d++)wt(xo[d],t);d=l;break;case"source":wt("error",t),d=l;break;case"img":case"image":case"link":wt("error",t),wt("load",t),d=l;break;case"details":wt("toggle",t),d=l;break;case"input":Nt(t,l),d=dt(t,l),wt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=j({},l,{value:void 0}),wt("invalid",t);break;case"textarea":R(t,l),d=N(t,l),wt("invalid",t);break;default:d=l}_t(s,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var U=I[p];p==="style"?Ye(t,U):p==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&ae(t,U)):p==="children"?typeof U=="string"?(s!=="textarea"||U!=="")&&Ue(t,U):typeof U=="number"&&Ue(t,""+U):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?U!=null&&p==="onScroll"&&wt("scroll",t):U!=null&&k(t,p,U,w))}switch(s){case"input":je(t),ht(t,l,!1);break;case"textarea":je(t),Me(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Pt(t,!!l.multiple,p,!1):l.defaultValue!=null&&Pt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ta)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return rn(i),null;case 6:if(t&&i.stateNode!=null)Uh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Rr(bo.current),Rr(pi.current),Da(i)){if(l=i.stateNode,s=i.memoizedProps,l[hi]=i,(p=l.nodeValue!==s)&&(t=bn,t!==null))switch(t.tag){case 3:Ea(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(l.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return rn(i),null;case 13:if(Mt(At),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&Cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vd(),ps(),i.flags|=98560,p=!1;else if(p=Da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[hi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),p=!1}else Kn!==null&&(yc(Kn),Kn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(At.current&1)!==0?Gt===0&&(Gt=3):Mc())),i.updateQueue!==null&&(i.flags|=4),rn(i),null);case 4:return xs(),uc(t,i),t===null&&_o(i.stateNode.containerInfo),rn(i),null;case 10:return zu(i.type._context),rn(i),null;case 17:return xn(i.type)&&Ca(),rn(i),null;case 19:if(Mt(At),p=i.memoizedState,p===null)return rn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Po(p,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Oa(t),w!==null){for(i.flags|=128,Po(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)p=s,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return gt(At,At.current&1|2),i.child}t=t.sibling}p.tail!==null&&at()>ws&&(i.flags|=128,l=!0,Po(p,!1),i.lanes=4194304)}else{if(!l)if(t=Oa(w),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Po(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Tt)return rn(i),null}else 2*at()-p.renderingStartTime>ws&&s!==1073741824&&(i.flags|=128,l=!0,Po(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(s=p.last,s!==null?s.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=at(),i.sibling=null,s=At.current,gt(At,l?s&1|2:s&1),i):(rn(i),null);case 22:case 23:return wc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(An&1073741824)!==0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Bv(t,i){switch(Pu(i),i.tag){case 1:return xn(i.type)&&Ca(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Mt(vn),Mt(tn),Hu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Mt(At),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Mt(At),null;case 4:return xs(),null;case 10:return zu(i.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Xa=!1,sn=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ys(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Dt(t,i,l)}else s.current=null}function cc(t,i,s){try{s()}catch(l){Dt(t,i,l)}}var Bh=!1;function Vv(t,i){if(wu=ha,t=xd(),pu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var w=0,I=-1,U=-1,ne=0,ge=0,xe=t,me=null;t:for(;;){for(var Pe;xe!==s||d!==0&&xe.nodeType!==3||(I=w+d),xe!==p||l!==0&&xe.nodeType!==3||(U=w+l),xe.nodeType===3&&(w+=xe.nodeValue.length),(Pe=xe.firstChild)!==null;)me=xe,xe=Pe;for(;;){if(xe===t)break t;if(me===s&&++ne===d&&(I=w),me===p&&++ge===l&&(U=w),(Pe=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Pe}s=I===-1||U===-1?null:{start:I,end:U}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mu={focusedElem:t,selectionRange:s},ha=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ze=Fe.memoizedProps,Ft=Fe.memoizedState,Z=i.stateNode,V=Z.getSnapshotBeforeUpdate(i.elementType===i.type?ze:Zn(i.type,ze),Ft);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Dt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return Fe=Bh,Bh=!1,Fe}function Do(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&cc(i,s,p)}d=d.next}while(d!==l)}}function $a(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function fc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Gh(t){var i=t.alternate;i!==null&&(t.alternate=null,Gh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[So],delete i[Cu],delete i[Ev],delete i[Tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vh(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ta));else if(l!==4&&(t=t.child,t!==null))for(dc(t,i,s),t=t.sibling;t!==null;)dc(t,i,s),t=t.sibling}function hc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(hc(t,i,s),t=t.sibling;t!==null;)hc(t,i,s),t=t.sibling}var Zt=null,Qn=!1;function er(t,i,s){for(s=s.child;s!==null;)Hh(t,i,s),s=s.sibling}function Hh(t,i,s){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Gi,s)}catch{}switch(s.tag){case 5:sn||ys(s,i);case 6:var l=Zt,d=Qn;Zt=null,er(t,i,s),Zt=l,Qn=d,Zt!==null&&(Qn?(t=Zt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):Zt.removeChild(s.stateNode));break;case 18:Zt!==null&&(Qn?(t=Zt,s=s.stateNode,t.nodeType===8?bu(t.parentNode,s):t.nodeType===1&&bu(t,s),uo(t)):bu(Zt,s.stateNode));break;case 4:l=Zt,d=Qn,Zt=s.stateNode.containerInfo,Qn=!0,er(t,i,s),Zt=l,Qn=d;break;case 0:case 11:case 14:case 15:if(!sn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&cc(s,i,w),d=d.next}while(d!==l)}er(t,i,s);break;case 1:if(!sn&&(ys(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(I){Dt(s,i,I)}er(t,i,s);break;case 21:er(t,i,s);break;case 22:s.mode&1?(sn=(l=sn)||s.memoizedState!==null,er(t,i,s),sn=l):er(t,i,s);break;default:er(t,i,s)}}function jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Gv),i.forEach(function(l){var d=Zv.bind(null,t,l);s.has(l)||(s.add(l),l.then(d,d))})}}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l];try{var p=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:Zt=I.stateNode,Qn=!1;break e;case 3:Zt=I.stateNode.containerInfo,Qn=!0;break e;case 4:Zt=I.stateNode.containerInfo,Qn=!0;break e}I=I.return}if(Zt===null)throw Error(n(160));Hh(p,w,d),Zt=null,Qn=!1;var U=d.alternate;U!==null&&(U.return=null),d.return=null}catch(ne){Dt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qh(i,t),i=i.sibling}function qh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),gi(t),l&4){try{Do(3,t,t.return),$a(3,t)}catch(ze){Dt(t,t.return,ze)}try{Do(5,t,t.return)}catch(ze){Dt(t,t.return,ze)}}break;case 1:Jn(i,t),gi(t),l&512&&s!==null&&ys(s,s.return);break;case 5:if(Jn(i,t),gi(t),l&512&&s!==null&&ys(s,s.return),t.flags&32){var d=t.stateNode;try{Ue(d,"")}catch(ze){Dt(t,t.return,ze)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,w=s!==null?s.memoizedProps:p,I=t.type,U=t.updateQueue;if(t.updateQueue=null,U!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&xt(d,p),X(I,w);var ne=X(I,p);for(w=0;w<U.length;w+=2){var ge=U[w],xe=U[w+1];ge==="style"?Ye(d,xe):ge==="dangerouslySetInnerHTML"?ae(d,xe):ge==="children"?Ue(d,xe):k(d,ge,xe,ne)}switch(I){case"input":Lt(d,p);break;case"textarea":ce(d,p);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Pe=p.value;Pe!=null?Pt(d,!!p.multiple,Pe,!1):me!==!!p.multiple&&(p.defaultValue!=null?Pt(d,!!p.multiple,p.defaultValue,!0):Pt(d,!!p.multiple,p.multiple?[]:"",!1))}d[So]=p}catch(ze){Dt(t,t.return,ze)}}break;case 6:if(Jn(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(ze){Dt(t,t.return,ze)}}break;case 3:if(Jn(i,t),gi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(ze){Dt(t,t.return,ze)}break;case 4:Jn(i,t),gi(t);break;case 13:Jn(i,t),gi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(gc=at())),l&4&&jh(t);break;case 22:if(ge=s!==null&&s.memoizedState!==null,t.mode&1?(sn=(ne=sn)||ge,Jn(i,t),sn=ne):Jn(i,t),gi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ge&&(t.mode&1)!==0)for(Ne=t,ge=t.child;ge!==null;){for(xe=Ne=ge;Ne!==null;){switch(me=Ne,Pe=me.child,me.tag){case 0:case 11:case 14:case 15:Do(4,me,me.return);break;case 1:ys(me,me.return);var Fe=me.stateNode;if(typeof Fe.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(ze){Dt(l,s,ze)}}break;case 5:ys(me,me.return);break;case 22:if(me.memoizedState!==null){Yh(xe);continue}}Pe!==null?(Pe.return=me,Ne=Pe):Yh(xe)}ge=ge.sibling}e:for(ge=null,xe=t;;){if(xe.tag===5){if(ge===null){ge=xe;try{d=xe.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=xe.stateNode,U=xe.memoizedProps.style,w=U!=null&&U.hasOwnProperty("display")?U.display:null,I.style.display=ke("display",w))}catch(ze){Dt(t,t.return,ze)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(ze){Dt(t,t.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Jn(i,t),gi(t),l&4&&jh(t);break;case 21:break;default:Jn(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Vh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Ue(d,""),l.flags&=-33);var p=Wh(t);hc(t,p,d);break;case 3:case 4:var w=l.stateNode.containerInfo,I=Wh(t);dc(t,I,w);break;default:throw Error(n(161))}}catch(U){Dt(t,t.return,U)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wv(t,i,s){Ne=t,Xh(t)}function Xh(t,i,s){for(var l=(t.mode&1)!==0;Ne!==null;){var d=Ne,p=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||Xa;if(!w){var I=d.alternate,U=I!==null&&I.memoizedState!==null||sn;I=Xa;var ne=sn;if(Xa=w,(sn=U)&&!ne)for(Ne=d;Ne!==null;)w=Ne,U=w.child,w.tag===22&&w.memoizedState!==null?Kh(d):U!==null?(U.return=w,Ne=U):Kh(d);for(;p!==null;)Ne=p,Xh(p),p=p.sibling;Ne=d,Xa=I,sn=ne}$h(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ne=p):$h(t)}}function $h(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:sn||$a(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!sn)if(s===null)l.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:Zn(i.type,s.memoizedProps);l.componentDidUpdate(d,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Yd(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Yd(i,w,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var U=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&s.focus();break;case"img":U.src&&(s.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ge=ne.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&uo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}sn||i.flags&512&&fc(i)}catch(me){Dt(i,i.return,me)}}if(i===t){Ne=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Yh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function Kh(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{$a(4,i)}catch(U){Dt(i,s,U)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(U){Dt(i,d,U)}}var p=i.return;try{fc(i)}catch(U){Dt(i,p,U)}break;case 5:var w=i.return;try{fc(i)}catch(U){Dt(i,w,U)}}}catch(U){Dt(i,i.return,U)}if(i===t){Ne=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ne=I;break}Ne=i.return}}var Hv=Math.ceil,Ya=L.ReactCurrentDispatcher,pc=L.ReactCurrentOwner,On=L.ReactCurrentBatchConfig,st=0,jt=null,zt=null,Qt=0,An=0,Ss=Yi(0),Gt=0,Io=null,Pr=0,Ka=0,mc=0,No=null,yn=null,gc=0,ws=1/0,Ci=null,Za=!1,vc=null,tr=null,Qa=!1,nr=null,Ja=0,ko=0,xc=null,el=-1,tl=0;function dn(){return(st&6)!==0?at():el!==-1?el:el=at()}function ir(t){return(t.mode&1)===0?1:(st&2)!==0&&Qt!==0?Qt&-Qt:Cv.transition!==null?(tl===0&&(tl=Wf()),tl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t)}function ei(t,i,s,l){if(50<ko)throw ko=0,xc=null,Error(n(185));ro(t,s,l),((st&2)===0||t!==jt)&&(t===jt&&((st&2)===0&&(Ka|=s),Gt===4&&rr(t,Qt)),Sn(t,l),s===1&&st===0&&(i.mode&1)===0&&(ws=at()+500,Ra&&Zi()))}function Sn(t,i){var s=t.callbackNode;Cg(t,i);var l=ca(t,t===jt?Qt:0);if(l===0)s!==null&&ci(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&ci(s),i===1)t.tag===0?bv(Qh.bind(null,t)):zd(Qh.bind(null,t)),wv(function(){(st&6)===0&&Zi()}),s=null;else{switch(Hf(l)){case 1:s=fi;break;case 4:s=Ct;break;case 16:s=Kt;break;case 536870912:s=Bi;break;default:s=Kt}s=op(s,Zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Zh(t,i){if(el=-1,tl=0,(st&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Ms()&&t.callbackNode!==s)return null;var l=ca(t,t===jt?Qt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=nl(t,l);else{i=l;var d=st;st|=2;var p=ep();(jt!==t||Qt!==i)&&(Ci=null,ws=at()+500,Ir(t,i));do try{Xv();break}catch(I){Jh(t,I)}while(!0);Fu(),Ya.current=p,st=d,zt!==null?i=0:(jt=null,Qt=0,i=Gt)}if(i!==0){if(i===2&&(d=Ql(t),d!==0&&(l=d,i=_c(t,d))),i===1)throw s=Io,Ir(t,0),rr(t,l),Sn(t,at()),s;if(i===6)rr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!jv(d)&&(i=nl(t,l),i===2&&(p=Ql(t),p!==0&&(l=p,i=_c(t,p))),i===1))throw s=Io,Ir(t,0),rr(t,l),Sn(t,at()),s;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,yn,Ci);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=gc+500-at(),10<i)){if(ca(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){dn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Tu(Nr.bind(null,t,yn,Ci),i);break}Nr(t,yn,Ci);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-un(l);p=1<<w,w=i[w],w>d&&(d=w),l&=~p}if(l=d,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Hv(l/1960))-l,10<l){t.timeoutHandle=Tu(Nr.bind(null,t,yn,Ci),l);break}Nr(t,yn,Ci);break;case 5:Nr(t,yn,Ci);break;default:throw Error(n(329))}}}return Sn(t,at()),t.callbackNode===s?Zh.bind(null,t):null}function _c(t,i){var s=No;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=nl(t,i),t!==2&&(i=yn,yn=s,i!==null&&yc(i)),t}function yc(t){yn===null?yn=t:yn.push.apply(yn,t)}function jv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var d=s[l],p=d.getSnapshot;d=d.value;try{if(!Yn(p(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~mc,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-un(i),l=1<<s;t[s]=-1,i&=~l}}function Qh(t){if((st&6)!==0)throw Error(n(327));Ms();var i=ca(t,0);if((i&1)===0)return Sn(t,at()),null;var s=nl(t,i);if(t.tag!==0&&s===2){var l=Ql(t);l!==0&&(i=l,s=_c(t,l))}if(s===1)throw s=Io,Ir(t,0),rr(t,i),Sn(t,at()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,yn,Ci),Sn(t,at()),null}function Sc(t,i){var s=st;st|=1;try{return t(i)}finally{st=s,st===0&&(ws=at()+500,Ra&&Zi())}}function Dr(t){nr!==null&&nr.tag===0&&(st&6)===0&&Ms();var i=st;st|=1;var s=On.transition,l=pt;try{if(On.transition=null,pt=1,t)return t()}finally{pt=l,On.transition=s,st=i,(st&6)===0&&Zi()}}function wc(){An=Ss.current,Mt(Ss)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Sv(s)),zt!==null)for(s=zt.return;s!==null;){var l=s;switch(Pu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ca();break;case 3:xs(),Mt(vn),Mt(tn),Hu();break;case 5:Vu(l);break;case 4:xs();break;case 13:Mt(At);break;case 19:Mt(At);break;case 10:zu(l.type._context);break;case 22:case 23:wc()}s=s.return}if(jt=t,zt=t=sr(t.current,null),Qt=An=i,Gt=0,Io=null,mc=Ka=Pr=0,yn=No=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],l=s.interleaved,l!==null){s.interleaved=null;var d=l.next,p=s.pending;if(p!==null){var w=p.next;p.next=d,l.next=w}s.pending=l}Ar=null}return t}function Jh(t,i){do{var s=zt;try{if(Fu(),Ua.current=Wa,Ba){for(var l=Rt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ba=!1}if(Lr=0,Ht=Bt=Rt=null,Co=!1,Ao=0,pc.current=null,s===null||s.return===null){Gt=1,Io=i,zt=null;break}e:{var p=t,w=s.return,I=s,U=i;if(i=Qt,I.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var ne=U,ge=I,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Pe=Eh(w);if(Pe!==null){Pe.flags&=-257,Th(Pe,w,I,p,i),Pe.mode&1&&Mh(p,ne,i),i=Pe,U=ne;var Fe=i.updateQueue;if(Fe===null){var ze=new Set;ze.add(U),i.updateQueue=ze}else Fe.add(U);break e}else{if((i&1)===0){Mh(p,ne,i),Mc();break e}U=Error(n(426))}}else if(Tt&&I.mode&1){var Ft=Eh(w);if(Ft!==null){(Ft.flags&65536)===0&&(Ft.flags|=256),Th(Ft,w,I,p,i),Nu(_s(U,I));break e}}p=U=_s(U,I),Gt!==4&&(Gt=2),No===null?No=[p]:No.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=Sh(p,U,i);$d(p,Z);break e;case 1:I=U;var V=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(tr===null||!tr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=wh(p,I,i);$d(p,Ee);break e}}p=p.return}while(p!==null)}np(s)}catch(Oe){i=Oe,zt===s&&s!==null&&(zt=s=s.return);continue}break}while(!0)}function ep(){var t=Ya.current;return Ya.current=Wa,t===null?Wa:t}function Mc(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),jt===null||(Pr&268435455)===0&&(Ka&268435455)===0||rr(jt,Qt)}function nl(t,i){var s=st;st|=2;var l=ep();(jt!==t||Qt!==i)&&(Ci=null,Ir(t,i));do try{qv();break}catch(d){Jh(t,d)}while(!0);if(Fu(),st=s,Ya.current=l,zt!==null)throw Error(n(261));return jt=null,Qt=0,Gt}function qv(){for(;zt!==null;)tp(zt)}function Xv(){for(;zt!==null&&!Oi();)tp(zt)}function tp(t){var i=sp(t.alternate,t,An);t.memoizedProps=t.pendingProps,i===null?np(t):zt=i,pc.current=null}function np(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=Uv(s,i,An),s!==null){zt=s;return}}else{if(s=Bv(s,i),s!==null){s.flags&=32767,zt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}if(i=i.sibling,i!==null){zt=i;return}zt=i=t}while(i!==null);Gt===0&&(Gt=5)}function Nr(t,i,s){var l=pt,d=On.transition;try{On.transition=null,pt=1,$v(t,i,s,l)}finally{On.transition=d,pt=l}return null}function $v(t,i,s,l){do Ms();while(nr!==null);if((st&6)!==0)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Ag(t,p),t===jt&&(zt=jt=null,Qt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Qa||(Qa=!0,op(Kt,function(){return Ms(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=On.transition,On.transition=null;var w=pt;pt=1;var I=st;st|=4,pc.current=null,Vv(t,s),qh(s,t),pv(Mu),ha=!!wu,Mu=wu=null,t.current=s,Wv(s),Ui(),st=I,pt=w,On.transition=p}else t.current=s;if(Qa&&(Qa=!1,nr=t,Ja=d),p=t.pendingLanes,p===0&&(tr=null),wr(s.stateNode),Sn(t,at()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],l(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,t=vc,vc=null,t;return(Ja&1)!==0&&t.tag!==0&&Ms(),p=t.pendingLanes,(p&1)!==0?t===xc?ko++:(ko=0,xc=t):ko=0,Zi(),null}function Ms(){if(nr!==null){var t=Hf(Ja),i=On.transition,s=pt;try{if(On.transition=null,pt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ja=0,(st&6)!==0)throw Error(n(331));var d=st;for(st|=4,Ne=t.current;Ne!==null;){var p=Ne,w=p.child;if((Ne.flags&16)!==0){var I=p.deletions;if(I!==null){for(var U=0;U<I.length;U++){var ne=I[U];for(Ne=ne;Ne!==null;){var ge=Ne;switch(ge.tag){case 0:case 11:case 15:Do(8,ge,p)}var xe=ge.child;if(xe!==null)xe.return=ge,Ne=xe;else for(;Ne!==null;){ge=Ne;var me=ge.sibling,Pe=ge.return;if(Gh(ge),ge===ne){Ne=null;break}if(me!==null){me.return=Pe,Ne=me;break}Ne=Pe}}}var Fe=p.alternate;if(Fe!==null){var ze=Fe.child;if(ze!==null){Fe.child=null;do{var Ft=ze.sibling;ze.sibling=null,ze=Ft}while(ze!==null)}}Ne=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Ne=w;else e:for(;Ne!==null;){if(p=Ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Ne=Z;break e}Ne=p.return}}var V=t.current;for(Ne=V;Ne!==null;){w=Ne;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,Ne=J;else e:for(w=V;Ne!==null;){if(I=Ne,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:$a(9,I)}}catch(Oe){Dt(I,I.return,Oe)}if(I===w){Ne=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ne=Ee;break e}Ne=I.return}}if(st=d,Zi(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Gi,t)}catch{}l=!0}return l}finally{pt=s,On.transition=i}}return!1}function ip(t,i,s){i=_s(s,i),i=Sh(t,i,1),t=Ji(t,i,1),i=dn(),t!==null&&(ro(t,1,i),Sn(t,i))}function Dt(t,i,s){if(t.tag===3)ip(t,t,s);else for(;i!==null;){if(i.tag===3){ip(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=_s(s,t),t=wh(i,t,1),i=Ji(i,t,1),t=dn(),i!==null&&(ro(i,1,t),Sn(i,t));break}}i=i.return}}function Yv(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=dn(),t.pingedLanes|=t.suspendedLanes&s,jt===t&&(Qt&s)===s&&(Gt===4||Gt===3&&(Qt&130023424)===Qt&&500>at()-gc?Ir(t,0):mc|=s),Sn(t,i)}function rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ua,ua<<=1,(ua&130023424)===0&&(ua=4194304)));var s=dn();t=Ei(t,i),t!==null&&(ro(t,i,s),Sn(t,s))}function Kv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),rp(t,s)}function Zv(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),rp(t,s)}var sp;sp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)_n=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return _n=!1,Ov(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,Tt&&(i.flags&1048576)!==0&&Od(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;qa(t,i),t=i.pendingProps;var d=fs(i,tn.current);vs(i,s),d=Xu(null,i,l,t,d,s);var p=$u();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(p=!0,Aa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bu(i),d.updater=Ha,i.stateNode=d,d._reactInternals=i,ec(i,l,t,s),i=rc(null,i,l,!0,p,s)):(i.tag=0,Tt&&p&&Lu(i),fn(null,i,d,s),i=i.child),i;case 16:l=i.elementType;e:{switch(qa(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Jv(l),t=Zn(l,t),d){case 0:i=ic(null,i,l,t,s);break e;case 1:i=Ph(null,i,l,t,s);break e;case 11:i=bh(null,i,l,t,s);break e;case 14:i=Ch(null,i,l,Zn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),ic(t,i,l,d,s);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),Ph(t,i,l,d,s);case 3:e:{if(Dh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Xd(t,i),za(i,l,null,s);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=_s(Error(n(423)),i),i=Ih(t,i,l,s,d);break e}else if(l!==d){d=_s(Error(n(424)),i),i=Ih(t,i,l,s,d);break e}else for(Cn=$i(i.stateNode.containerInfo.firstChild),bn=i,Tt=!0,Kn=null,s=jd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ps(),l===d){i=bi(t,i,s);break e}fn(t,i,l,s)}i=i.child}return i;case 5:return Kd(i),t===null&&Iu(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,w=d.children,Eu(l,d)?w=null:p!==null&&Eu(l,p)&&(i.flags|=32),Lh(t,i),fn(t,i,w,s),i.child;case 6:return t===null&&Iu(i),null;case 13:return Nh(t,i,s);case 4:return Gu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,s):fn(t,i,l,s),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),bh(t,i,l,d,s);case 7:return fn(t,i,i.pendingProps,s),i.child;case 8:return fn(t,i,i.pendingProps.children,s),i.child;case 12:return fn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,gt(Na,l._currentValue),l._currentValue=w,p!==null)if(Yn(p.value,w)){if(p.children===d.children&&!vn.current){i=bi(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){w=p.child;for(var U=I.firstContext;U!==null;){if(U.context===l){if(p.tag===1){U=Ti(-1,s&-s),U.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var ge=ne.pending;ge===null?U.next=U:(U.next=ge.next,ge.next=U),ne.pending=U}}p.lanes|=s,U=p.alternate,U!==null&&(U.lanes|=s),Ou(p.return,s,i),I.lanes|=s;break}U=U.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=s,I=w.alternate,I!==null&&(I.lanes|=s),Ou(w,s,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}fn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,vs(i,s),d=Fn(d),l=l(d),i.flags|=1,fn(t,i,l,s),i.child;case 14:return l=i.type,d=Zn(l,i.pendingProps),d=Zn(l.type,d),Ch(t,i,l,d,s);case 15:return Ah(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),qa(t,i),i.tag=1,xn(l)?(t=!0,Aa(i)):t=!1,vs(i,s),_h(i,l,d),ec(i,l,d,s),rc(null,i,l,!0,t,s);case 19:return Fh(t,i,s);case 22:return Rh(t,i,s)}throw Error(n(156,i.tag))};function op(t,i){return St(t,i)}function Qv(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,i,s,l){return new Qv(t,i,s,l)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jv(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===le)return 14}return 2}function sr(t,i){var s=t.alternate;return s===null?(s=Un(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function il(t,i,s,l,d,p){var w=2;if(l=t,typeof t=="function")Ec(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case G:return kr(s.children,d,p,i);case M:w=8,d|=8;break;case z:return t=Un(12,s,i,d|2),t.elementType=z,t.lanes=p,t;case se:return t=Un(13,s,i,d),t.elementType=se,t.lanes=p,t;case q:return t=Un(19,s,i,d),t.elementType=q,t.lanes=p,t;case re:return rl(s,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:w=10;break e;case B:w=9;break e;case de:w=11;break e;case le:w=14;break e;case te:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Un(w,s,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function kr(t,i,s,l){return t=Un(7,t,l,i),t.lanes=s,t}function rl(t,i,s,l){return t=Un(22,t,l,i),t.elementType=re,t.lanes=s,t.stateNode={isHidden:!1},t}function Tc(t,i,s){return t=Un(6,t,null,i),t.lanes=s,t}function bc(t,i,s){return i=Un(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function e0(t,i,s,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cc(t,i,s,l,d,p,w,I,U){return t=new e0(t,i,s,I,U),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Un(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(p),t}function t0(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function ap(t){if(!t)return Ki;t=t._reactInternals;e:{if(He(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(xn(s))return kd(t,s,i)}return i}function lp(t,i,s,l,d,p,w,I,U){return t=Cc(s,l,!0,t,d,p,w,I,U),t.context=ap(null),s=t.current,l=dn(),d=ir(s),p=Ti(l,d),p.callback=i??null,Ji(s,p,d),t.current.lanes=d,ro(t,d,l),Sn(t,l),t}function sl(t,i,s,l){var d=i.current,p=dn(),w=ir(d);return s=ap(s),i.context===null?i.context=s:i.pendingContext=s,i=Ti(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(d,i,w),t!==null&&(ei(t,d,w,p),Fa(t,d,w)),w}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Ac(t,i){up(t,i),(t=t.alternate)&&up(t,i)}function n0(){return null}var cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}al.prototype.render=Rc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},al.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){sl(null,t,null,null)}),i[yi]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=Xf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ji.length&&i!==0&&i<ji[s].priority;s++);ji.splice(s,0,t),s===0&&Kf(t)}};function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function i0(t,i,s,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ne=ol(w);p.call(ne)}}var w=lp(i,l,t,0,null,!1,!1,"",fp);return t._reactRootContainer=w,t[yi]=w.current,_o(t.nodeType===8?t.parentNode:t),Dr(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ne=ol(U);I.call(ne)}}var U=Cc(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=U,t[yi]=U.current,_o(t.nodeType===8?t.parentNode:t),Dr(function(){sl(i,U,s,l)}),U}function ul(t,i,s,l,d){var p=s._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var I=d;d=function(){var U=ol(w);I.call(U)}}sl(i,w,t,d)}else w=i0(s,i,t,d,l);return ol(w)}jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=io(i.pendingLanes);s!==0&&(eu(i,s|1),Sn(i,at()),(st&6)===0&&(ws=at()+500,Zi()))}break;case 13:Dr(function(){var l=Ei(t,1);if(l!==null){var d=dn();ei(l,t,1,d)}}),Ac(t,1)}},tu=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var s=dn();ei(i,t,134217728,s)}Ac(t,134217728)}},qf=function(t){if(t.tag===13){var i=ir(t),s=Ei(t,i);if(s!==null){var l=dn();ei(s,t,i,l)}Ac(t,i)}},Xf=function(){return pt},$f=function(t,i){var s=pt;try{return pt=t,i()}finally{pt=s}},Re=function(t,i,s){switch(i){case"input":if(Lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var d=ba(l);if(!d)throw Error(n(90));Ge(l),Lt(l,d)}}}break;case"textarea":ce(t,s);break;case"select":i=s.value,i!=null&&Pt(t,!!s.multiple,i,!1)}},yt=Sc,In=Dr;var r0={usingClientEntryPoint:!1,Events:[wo,us,ba,Et,$n,Sc]},Fo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s0={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nt(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Gi=cl.inject(s0),mt=cl}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0,wn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(i))throw Error(n(200));return t0(t,i,null,s)},wn.createRoot=function(t,i){if(!Lc(t))throw Error(n(299));var s=!1,l="",d=cp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cc(t,1,!1,null,null,s,!1,l,d),t[yi]=i.current,_o(t.nodeType===8?t.parentNode:t),new Rc(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=nt(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Dr(t)},wn.hydrate=function(t,i,s){if(!ll(i))throw Error(n(200));return ul(null,t,i,!0,s)},wn.hydrateRoot=function(t,i,s){if(!Lc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,d=!1,p="",w=cp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=lp(i,null,t,1,s??null,d,!1,p,w),t[yi]=i.current,_o(t),l)for(t=0;t<l.length;t++)s=l[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new al(i)},wn.render=function(t,i,s){if(!ll(i))throw Error(n(200));return ul(null,t,i,!1,s)},wn.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},wn.unstable_batchedUpdates=Sc,wn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!ll(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,s,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var _p;function p0(){if(_p)return Ic.exports;_p=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(e){console.error(e)}}return u(),Ic.exports=h0(),Ic.exports}var yp;function m0(){if(yp)return fl;yp=1;var u=p0();return fl.createRoot=u.createRoot,fl.hydrateRoot=u.hydrateRoot,fl}var g0=m0();const v0=qm(g0);function x0({active:u}){const[e,n]=fe.useState(""),[r,o]=fe.useState("");return fe.useEffect(()=>{const a=()=>{const c=new Date;n(c.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),o(c.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"}))};a();const f=setInterval(a,1e3);return()=>clearInterval(f)},[]),D.jsxs("div",{className:`clock-screen ${u?"active":""}`,"aria-live":"polite",children:[D.jsx("div",{className:"clock-time",children:e}),D.jsx("div",{className:"clock-date",children:r}),D.jsxs("div",{className:"clock-comfort-card",children:[D.jsx("div",{className:"clock-comfort-title",children:"You are home, safe and loved."}),D.jsx("div",{className:"clock-comfort-subtitle",children:"Anchor is keeping watch. When a loved one walks in, we will remind you who they are."}),D.jsxs("div",{style:{marginTop:"14px",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(39,82,61,0.25)",border:"1px solid rgba(52,211,153,0.35)",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",color:"var(--primary-accent, #34d399)",fontWeight:500},children:[D.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981"}}),"🎙️ Voice & Vision Ready"]})]})]})}const _0={rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null,enabled:!0};let xi={..._0},Bs=null,y0=[];function ea(){return typeof window>"u"?null:window.speechSynthesis||null}function S0(){return ea()!==null}function Gs(u,e=""){console.log(`[TTS] ${u}${e?": "+e:""}`)}function w0(){const u=ea();if(!u)return null;const e=u.getVoices();if(!e||e.length===0)return null;if(xi.voiceName){const c=e.find(m=>m.name===xi.voiceName);if(c)return c}const n=xi.language||"en-US",r=n.split("-")[0],o=["Google US English","Google UK English Female","Microsoft Zira","Samantha","Karen","Daniel","Google हिन्दी"];for(const c of o){const m=e.find(h=>h.name.includes(c)&&h.lang.startsWith(r));if(m)return m}const a=e.find(c=>c.lang===n);if(a)return a;const f=e.find(c=>c.lang.startsWith(r));return f||e[0]||null}function Wo(u){for(const e of y0)try{e(u)}catch(n){console.error("[TTS] Speaking change listener error:",n)}}function dl(u,e={}){return new Promise(n=>{if(!xi.enabled||!S0()||!u||!u.trim()){n();return}const r=ea(),o=new SpeechSynthesisUtterance(u.trim());o.rate=e.rate??xi.rate,o.pitch=e.pitch??xi.pitch,o.volume=e.volume??xi.volume,o.lang=e.language??xi.language;const a=w0();a&&(o.voice=a),Bs=o,Wo(!0),Gs("TTS_STARTED",u.substring(0,60)+(u.length>60?"...":"")),o.onend=()=>{Bs=null,Wo(!1),Gs("TTS_COMPLETED"),n()},o.onerror=f=>{Bs=null,Wo(!1),f.error!=="interrupted"&&f.error!=="canceled"&&Gs("TTS_ERROR",f.error),n()};try{r.speak(o)}catch(f){Bs=null,Wo(!1),Gs("TTS_ERROR",f.message),n()}})}function hl(){const u=ea();if(u)try{u.cancel()}catch(e){Gs("TTS_ERROR","cancel failed: "+e.message)}Bs&&(Bs=null,Wo(!1),Gs("TTS_INTERRUPTED"))}function M0(u){xi={...xi,...u}}function E0(){const u=ea();return u?u.getVoices().map(e=>({name:e.name,lang:e.lang,default:e.default})):[]}const T0={language:"en-US",silenceTimeoutMs:1800,maxListeningDurationMs:16e3,fallbackSliceMs:3500},pn={IDLE:"IDLE",LISTENING:"LISTENING",MUTED:"MUTED",PROCESSING:"PROCESSING",RESTARTING:"RESTARTING"};let Mn=pn.IDLE,gr=null,Yr=!1,Vr=null,Fl=null,Wr=null,$s={...T0},Kr=null,Zr=null,_r="",Gn=null,Xo=null,zl=null,Os=[];function Pf(){return typeof window>"u"?null:window.SpeechRecognition||window.webkitSpeechRecognition||null}function Wt(u,e=""){console.log(`[STT-Loop] ${u}${e?": "+e:""}`)}function b0(u={}){$s={...$s,...u}}function C0(){const u=Pf()!==null,e=typeof window<"u"&&!!window.MediaRecorder;return u||e}function Xm(u,e){if(Kr=u||(()=>{}),Zr=e||(()=>{}),_r="",Yr){Wt("MUTED","Listening queued — muted for TTS"),Mn=pn.MUTED;return}jl(),Mn=pn.LISTENING;const n=Pf();n?$m(n):(Wt("FALLBACK_MODE","Web Speech API not available — using Groq Whisper fallback"),Gl()),Fl=setTimeout(()=>{Wt("MAX_DURATION_REACHED"),Df()},$s.maxListeningDurationMs)}function Oo(){Wt("STOP_REQUESTED"),jl(),Mn=pn.IDLE,_r=""}function Fc(){Yr=!0,Mn===pn.LISTENING&&(Wt("MUTED_FOR_TTS"),jl(),Mn=pn.MUTED)}function Uo(){Yr=!1,Mn===pn.MUTED&&(Wt("UNMUTED","Resuming speech listening loop"),Kr||Zr?Xm(Kr,Zr):Mn=pn.IDLE)}function $m(u){try{const e=new u;gr=e,e.continuous=!0,e.interimResults=!0,e.lang=$s.language,e.maxAlternatives=1;let n="";e.onstart=()=>{Wt("WEB_SPEECH_STARTED"),Mn=pn.LISTENING},e.onresult=r=>{if(Mn!==pn.LISTENING||Yr)return;A0();let o="";for(let f=r.resultIndex;f<r.results.length;f++){const c=r.results[f],m=c[0].transcript;c.isFinal?n+=m+" ":o+=m}const a=(n+o).trim();a&&(_r=a,Kr&&Kr(a,!1))},e.onerror=r=>{Wt("WEB_SPEECH_ERROR",r.error),r.error==="not-allowed"||r.error==="service-not-allowed"?(Wt("FALLBACK_TRIGGERED","Switching to Groq Whisper engine"),If(),Gl()):r.error==="no-speech"||r.error==="network"&&(Wt("NETWORK_ERROR","Retrying speech recognition"),Sp(600))},e.onend=()=>{Wt("WEB_SPEECH_ENDED"),Mn===pn.LISTENING&&!Yr&&(_r.trim()?Df():Sp(300))},e.start()}catch(e){Wt("WEB_SPEECH_INIT_FAILED",e.message),Gl()}}function Sp(u=300){Wr&&clearTimeout(Wr),!(Mn!==pn.LISTENING||Yr)&&(Wr=setTimeout(()=>{if(Wr=null,Mn===pn.LISTENING&&!Yr){If();const e=Pf();e?$m(e):Gl()}},u))}async function Gl(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Wt("MIC_UNAVAILABLE","No getUserMedia support");return}try{Xo=await navigator.mediaDevices.getUserMedia({audio:!0}),Gn=new MediaRecorder(Xo),Os=[],Gn.ondataavailable=u=>{u.data&&u.data.size>0&&Os.push(u.data)},Gn.onstop=async()=>{if(Os.length===0)return;const u=new Blob(Os,{type:Gn.mimeType||"audio/webm"});if(Os=[],!(u.size<400||Mn!==pn.LISTENING))try{Wt("SENDING_TO_WHISPER",`${u.size} bytes`);const e=await fetch("/api/transcribe",{method:"POST",headers:{"Content-Type":u.type||"audio/webm"},body:u});if(e.ok){const n=await e.json();if(n.success&&n.transcript){const r=n.transcript.trim();Wt("WHISPER_RESULT",r),_r=r,Kr&&Kr(r,!0),Zr&&Zr(r)}}}catch(e){Wt("WHISPER_FALLBACK_ERROR",e.message)}},Gn.start(),Wt("WHISPER_FALLBACK_RECORDING"),zl=setTimeout(()=>{Gn&&Gn.state==="recording"&&Gn.stop()},$s.fallbackSliceMs)}catch(u){Wt("MIC_PERMISSION_DENIED",u.message)}}function A0(){Vr&&clearTimeout(Vr),Vr=setTimeout(()=>{Vr=null,Wt("SILENCE_DETECTED",_r),_r.trim()&&Df()},$s.silenceTimeoutMs)}function Df(){const u=_r.trim();jl(),Mn=pn.IDLE,u&&Zr&&Zr(u)}function If(){if(gr){try{gr.onstart=null,gr.onresult=null,gr.onerror=null,gr.onend=null,gr.abort()}catch{}gr=null}}function R0(){if(zl&&(clearTimeout(zl),zl=null),Gn&&Gn.state!=="inactive"){try{Gn.stop()}catch{}Gn=null}Xo&&(Xo.getTracks().forEach(u=>u.stop()),Xo=null),Os=[]}function jl(){Vr&&(clearTimeout(Vr),Vr=null),Fl&&(clearTimeout(Fl),Fl=null),Wr&&(clearTimeout(Wr),Wr=null),If(),R0()}const vr={IDENTITY:"IDENTITY",LAST_CONVERSATION:"LAST_CONVERSATION",MEMORY_QUERY:"MEMORY_QUERY",RELATIONSHIP:"RELATIONSHIP",REMINDER:"REMINDER",GENERAL:"GENERAL",UNKNOWN:"UNKNOWN"},L0=[{intent:vr.IDENTITY,patterns:[/who\s+is\s+(this|here|that)/i,/who('s| is)\s+this/i,/who\s+are\s+you/i,/do\s+i\s+know\s+(you|them|this)/i,/what('s| is)\s+(your|their|his|her)\s+name/i]},{intent:vr.LAST_CONVERSATION,patterns:[/what\s+did\s+\w+\s+tell\s+me/i,/what\s+did\s+we\s+talk\s+about/i,/what\s+did\s+(she|he|they)\s+(say|tell|mention)/i,/last\s+time/i,/last\s+visit/i,/what\s+happened\s+(last|before)/i,/what\s+were\s+we\s+(talking|discussing)/i]},{intent:vr.MEMORY_QUERY,patterns:[/when\s+did\s+i\s+(last\s+)?(see|meet|talk)/i,/tell\s+me\s+about/i,/what\s+about/i,/what\s+do\s+i\s+know\s+about/i,/do\s+you\s+(know|remember)\s+about/i]},{intent:vr.RELATIONSHIP,patterns:[/how\s+do\s+i\s+know/i,/is\s+\w+\s+my/i,/are\s+(they|you)\s+my/i,/what('s| is)\s+(my|our)\s+relationship/i,/(my|our)\s+(daughter|son|wife|husband|friend|sister|brother)/i]},{intent:vr.REMINDER,patterns:[/remind\s+me/i,/what('s| is)\s+next/i,/when\s+is/i,/what\s+do\s+i\s+(need|have)\s+to\s+do/i,/any\s+(plans|appointments)/i]}];function P0(u,e=null){if(!u||!u.trim())return{intent:vr.UNKNOWN,entities:{}};const n=u.trim().toLowerCase();for(const{intent:o,patterns:a}of L0)for(const f of a)if(f.test(n))return{intent:o,entities:wp(n,e)};return n.split(/\s+/).filter(Boolean).length<2?{intent:vr.UNKNOWN,entities:{}}:{intent:vr.GENERAL,entities:wp(n,e)}}function wp(u,e){const n={};if(e&&e.name){const r=e.name.toLowerCase();u.includes(r)&&(n.personName=e.name,n.personId=e.person_id)}return n}const vt={IDLE:"IDLE",RECOGNIZED:"RECOGNIZED",INTRODUCING:"INTRODUCING",LISTENING:"LISTENING",THINKING:"THINKING",SPEAKING:"SPEAKING",VISITOR_LEFT:"VISITOR_LEFT"},D0=300*1e3,I0=500,N0=15e3,k0=20;function F0({recognizedPerson:u=null,ttsEnabled:e=!0,interactionEnabled:n=!0,autoListenEnabled:r=!0}={}){const[o,a]=fe.useState(vt.IDLE),[f,c]=fe.useState(""),[m,h]=fe.useState(""),v=fe.useRef({personId:null,timestamp:0}),g=fe.useRef(0),x=fe.useRef(null),S=fe.useRef(null),E=fe.useRef(!0),y=fe.useRef(null);fe.useEffect(()=>{y.current=u},[u]),fe.useEffect(()=>(E.current=!0,()=>{E.current=!1,hl(),Oo(),Uo(),_()}),[]);function _(){x.current&&(clearTimeout(x.current),x.current=null),S.current&&(clearTimeout(S.current),S.current=null)}fe.useEffect(()=>{if(!u){o!==vt.IDLE&&F();return}const M=(u.person_id||u.name||"").toLowerCase(),z=(u.name||"").toLowerCase(),K=v.current,B=K.key&&(K.key===M||K.name===z||K.key===z),de=Date.now()-K.timestamp<D0;if(B&&de){o===vt.IDLE&&a(vt.RECOGNIZED);return}v.current={key:M,name:z,timestamp:Date.now()},(o===vt.INTRODUCING||o===vt.SPEAKING)&&(hl(),Oo()),a(vt.RECOGNIZED),g.current=0,e&&T(u)},[u]);async function T(M){var se,q;if(!E.current)return;a(vt.INTRODUCING),Fc();const z=M.name||"A loved one",K=(M.relationship||"").trim().toLowerCase(),B=M.note||null;let de;if(K&&K!=="visitor"&&K!=="loved one"?de=`${z} is here. They are your ${K}.`:de=`${z} is here.`,c(de),await dl(de),!(!E.current||((se=y.current)==null?void 0:se.person_id)!==M.person_id)){if(B&&!B.toLowerCase().includes("processing audio")&&!B.toLowerCase().includes("no speech detected")&&!B.toLowerCase().includes("no audio captured")){const le=B.length>120?B.substring(0,120)+".":B;c(le),await dl(le)}!E.current||((q=y.current)==null?void 0:q.person_id)!==M.person_id||A()}}function A(){if(!n||!r){a(vt.RECOGNIZED),Uo();return}S.current=setTimeout(()=>{S.current=null,E.current&&y.current&&(Uo(),k())},I0)}function k(){if(!(!E.current||!y.current)){if(!C0()){a(vt.RECOGNIZED);return}if(g.current>=k0){a(vt.RECOGNIZED);return}a(vt.LISTENING),h(""),c(""),x.current=setTimeout(()=>{x.current=null,E.current&&o===vt.LISTENING&&(Oo(),a(vt.RECOGNIZED))},N0),Xm((M,z)=>{E.current&&h(M)},M=>{x.current&&(clearTimeout(x.current),x.current=null),E.current&&M&&y.current?L(M,y.current):E.current&&a(vt.RECOGNIZED)})}}async function L(M,z){if(!E.current)return;a(vt.THINKING),h(M),g.current++;const{intent:K}=P0(M,z);console.log(`[Interaction] PATIENT_QUERY: "${M}" → intent: ${K}`);try{const B=await fetch("/api/patient/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:M,person_id:z.person_id,patient_id:"00000000-0000-0000-0000-000000000001"})});if(!B.ok)throw new Error(`API error: ${B.status}`);const se=(await B.json()).answer||b(z);if(!E.current||!y.current||(a(vt.SPEAKING),c(se),Fc(),await dl(se),!E.current||!y.current))return;A()}catch(B){if(console.error("[Interaction] Error processing patient question:",B),!E.current||!y.current)return;const de=b(z);if(a(vt.SPEAKING),c(de),Fc(),await dl(de),!E.current||!y.current)return;A()}}function b(M){const z=(M==null?void 0:M.name)||"Your visitor",K=(M==null?void 0:M.relationship)||"";return K&&K.toLowerCase()!=="visitor"&&K.toLowerCase()!=="loved one"?`${z} is here. They are your ${K.toLowerCase()}.`:`${z} is here with you.`}function F(){_(),hl(),Oo(),Uo(),a(vt.VISITOR_LEFT),c(""),h(""),g.current=0,setTimeout(()=>{E.current&&a(vt.IDLE)},500)}const G=fe.useCallback(()=>{_(),hl(),Oo(),Uo(),a(vt.RECOGNIZED),c(""),h("")},[]);return{state:o,systemResponse:f,patientTranscript:m,stopInteraction:G}}function z0({person:u,active:e,interactionState:n=vt.RECOGNIZED,systemResponse:r="",patientTranscript:o=""}){if(!u)return null;const a=u.name||"A loved one",f=(u.relationship||"Loved One").trim(),c=/^(daughter|son|grandson|granddaughter|sister|brother|husband|wife|friend|caregiver|nurse)/i.test(f)?`Your ${f.toLowerCase()} 🌿`:`${f} 🌿`,m=u.note?`"${u.note}"`:"This is the start of your time together today.",h=(a[0]||"A").toUpperCase(),v=u.avatar_color||"var(--primary)";let g="Anchor is keeping watch",x="Remembering your conversation gently.",S="interaction-idle";switch(n){case vt.INTRODUCING:case vt.SPEAKING:g="Anchor is speaking",x="",S="interaction-speaking";break;case vt.LISTENING:g="Anchor is listening",x="You can ask me anything.",S="interaction-listening";break;case vt.THINKING:g="Let me think",x="",S="interaction-thinking";break;default:g="Anchor is listening with care",x="Remembering your conversation gently.",S="interaction-idle"}return D.jsxs("div",{className:`recognition-card ${e?"active":""}`,"aria-live":"assertive",children:[D.jsxs("div",{className:"visitor-header",children:[D.jsx("div",{className:"visitor-avatar-large",style:{background:v},children:h}),D.jsxs("div",{className:"visitor-meta",children:[D.jsx("h2",{children:a}),D.jsx("div",{className:"relationship-badge",children:c})]})]}),D.jsxs("div",{className:"memory-anchor-card",children:[D.jsx("div",{className:"memory-header-row",children:D.jsx("span",{children:"✨ Last Visit Memory"})}),D.jsx("div",{className:"memory-text",children:m})]}),r&&D.jsx("div",{className:"system-response-card","aria-live":"polite",children:D.jsx("div",{className:"system-response-text",children:r})}),o&&D.jsxs("div",{className:"patient-transcript-card","aria-live":"polite",children:[D.jsx("div",{className:"patient-transcript-label",children:"🗣️ You said:"}),D.jsxs("div",{className:"patient-transcript-text",children:['"',o,'"']})]}),D.jsx("div",{className:`listening-indicator-row ${S}`,children:D.jsxs("div",{className:"listening-left",children:[D.jsxs("div",{className:"soundwave-anim",children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]}),D.jsxs("div",{children:[D.jsx("div",{className:"listening-text",children:g}),x&&D.jsx("div",{className:"listening-subtext",children:x})]})]})})]})}const O0=700;function U0({recognizedPerson:u=null,speakAloud:e=!0,ttsSettings:n={},interactionEnabled:r=!0,autoListenEnabled:o=!0}){const[a,f]=fe.useState(null),[c,m]=fe.useState(!1),h=fe.useRef(null),v=a===null||!c;fe.useEffect(()=>{n&&(M0({rate:n.rate,pitch:n.pitch,volume:n.volume,language:n.language,voiceName:n.voiceName,enabled:n.ttsEnabled!==!1&&e!==!1}),b0({language:n.language}))},[n,e]);const{state:g,systemResponse:x,patientTranscript:S}=F0({recognizedPerson:u,ttsEnabled:e,interactionEnabled:r,autoListenEnabled:o});return fe.useEffect(()=>{h.current&&(clearTimeout(h.current),h.current=null),u?a===null?(f(u),m(!1),requestAnimationFrame(()=>m(!0))):(f(u),m(!0)):a!==null&&(m(!1),h.current=setTimeout(()=>{h.current=null,f(null)},O0))},[u]),fe.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]),D.jsx("section",{className:"patient-view-wrapper",children:D.jsxs("div",{className:"pv-root",children:[D.jsx(x0,{active:v}),a&&D.jsx(z0,{person:a,active:c,interactionState:g,systemResponse:x,patientTranscript:S})]})})}function B0({isVisitorPresent:u,visitorName:e}){const[n,r]=fe.useState("mjpeg"),[o,a]=fe.useState(Date.now()),[f,c]=fe.useState(`/api/camera_snapshot?t=${Date.now()}`),[m,h]=fe.useState(!0),[v,g]=fe.useState(!1),[x,S]=fe.useState([]),[E,y]=fe.useState(0),[_,T]=fe.useState(!1),A=fe.useRef(null),k=fe.useCallback(async()=>{try{const G=await fetch("/api/cameras");if(G.ok){const M=await G.json();M.cameras&&Array.isArray(M.cameras)&&(S(M.cameras),M.active_camera!==void 0&&y(M.active_camera))}}catch(G){console.warn("Failed to probe camera devices:",G)}},[]);fe.useEffect(()=>{k()},[k]);const L=async G=>{const M=parseInt(G.target.value,10);if(!isNaN(M)){T(!0);try{(await fetch("/api/camera_select",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_index:M})})).ok&&(y(M),setTimeout(()=>{a(Date.now()),c(`/api/camera_snapshot?t=${Date.now()}`),h(!0),g(!1),T(!1)},400))}catch(z){console.error("Camera switch error:",z),T(!1)}}};fe.useEffect(()=>(n==="snapshot"?A.current=setInterval(()=>{c(`/api/camera_snapshot?t=${Date.now()}`)},100):A.current&&(clearInterval(A.current),A.current=null),()=>{A.current&&clearInterval(A.current)}),[n]);const b=()=>{g(!1),h(!0),a(Date.now()),c(`/api/camera_snapshot?t=${Date.now()}`),k()},F=()=>{g(!0),h(!1),setTimeout(()=>{g(!1),a(Date.now())},2500)};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[D.jsx("span",{children:"Live Camera Feed"}),D.jsx("span",{className:"badge",style:{background:u?"var(--primary-subtle)":m?"#e6f4ea":"#fef3c7",color:u?"var(--primary)":m?"#137333":"#d97706"},children:u?`Visitor: ${e}`:m?"🟢 Camera Active":"🟡 Connecting…"})]}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[D.jsx("label",{htmlFor:"cam-select",style:{fontSize:"11px",color:"var(--text-muted)",fontWeight:500},children:"📹"}),D.jsx("select",{id:"cam-select",className:"form-control",value:E,onChange:L,disabled:_,style:{padding:"3px 8px",fontSize:"11px",height:"26px",borderRadius:"var(--radius-sm)",background:"var(--surface-raised)",color:"var(--text)",borderColor:"var(--border)",cursor:"pointer"},title:"Select active camera device",children:x.length>0?x.map(G=>D.jsx("option",{value:G.index,children:G.name},G.index)):D.jsx("option",{value:0,children:"Camera 0 (Default)"})}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 6px",fontSize:"11px",height:"26px"},onClick:k,title:"Rescan camera devices",children:"🔍"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:()=>r(n==="mjpeg"?"snapshot":"mjpeg"),title:"Switch streaming protocol if video is stuttering",children:n==="mjpeg"?"⚡ Live Stream":"📸 Snapshot Mode"}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px",height:"26px"},onClick:b,title:"Reconnect video feed",children:"🔄 Reconnect"})]})]}),D.jsxs("div",{style:{background:"#0f1712",borderRadius:"var(--radius-sm)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"240px",position:"relative"},children:[n==="mjpeg"?D.jsx("img",{src:`/video_feed?t=${o}`,alt:"Live Webcam Stream",onError:F,onLoad:()=>{h(!0),g(!1)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"280px"}},o):D.jsx("img",{src:f,alt:"Live Webcam Snapshot",onError:F,onLoad:()=>{h(!0),g(!1)},style:{width:"100%",height:"auto",display:"block",objectFit:"contain",maxHeight:"280px"}}),_&&D.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(15, 23, 18, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",fontWeight:600,fontSize:"13px"},children:"📹 Switching Camera…"}),v&&D.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(15, 23, 18, 0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",padding:"16px",textAlign:"center"},children:[D.jsx("p",{style:{fontWeight:600,marginBottom:"6px"},children:"Reconnecting to Camera Feed…"}),D.jsx("button",{type:"button",className:"btn btn-primary",style:{fontSize:"12px",padding:"4px 12px",marginTop:"8px"},onClick:b,children:"🔄 Retry Now"})]})]})]})}function G0({transcript:u,isCapturing:e,onToggleListening:n,onAppendSpeech:r,onClearSpeech:o,statusBadgeText:a,liveSegments:f=[],partialSegment:c=null,visitDuration:m="00:00",statusState:h="idle"}){const[v,g]=fe.useState(""),x=fe.useRef(null),S=fe.useRef(!0),E=f.reduce((b,F)=>b+(F.text?F.text.split(/\s+/).filter(Boolean).length:0),0),y=()=>{const b=x.current;if(!b)return;const F=Math.abs(b.scrollHeight-b.clientHeight-b.scrollTop)<15;S.current=F};fe.useEffect(()=>{const b=x.current;b&&S.current&&(b.scrollTop=b.scrollHeight)},[f,c]);const _=()=>{v.trim()&&(r(v),g(""))},T=b=>{try{return new Date(b).toTimeString().split(" ")[0]}catch{return""}};let A="badge-gray",k="Standby";e||h==="listening"?(A="badge-green",k="🟢 Live Mic Listening"):h==="processing"?(A="badge-yellow",k="🟡 Transcribing Speech..."):h==="disconnected"?(A="badge-red",k="🔴 Speech Reconnecting..."):h==="denied"&&(A="badge-red",k="🔴 Microphone Denied");const L=f.length>0||c!==null;return D.jsxs("div",{className:"panel-card",children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Live Visit Monitor"}),D.jsx("span",{className:`badge ${A}`,style:{marginLeft:"8px"},children:a||k})]}),n&&D.jsx("button",{className:`btn ${e?"btn-danger":"btn-primary"}`,style:{padding:"6px 12px",fontSize:"12px",borderRadius:"8px"},onClick:n,children:e?"🛑 Stop Mic":"🎙️ Enable Live Mic"})]}),D.jsxs("div",{className:"transcript-stats",style:{display:"flex",gap:"16px",marginBottom:"10px",fontSize:"12px",color:"var(--text-muted)"},children:[D.jsxs("span",{children:["Words Transcribed: ",D.jsx("strong",{style:{color:"var(--text)"},children:E})]}),D.jsxs("span",{children:["Duration: ",D.jsx("strong",{style:{color:"var(--text)"},children:m})]}),D.jsxs("span",{children:["Engine: ",D.jsx("strong",{style:{color:"var(--primary-accent, #34d399)"},children:"Dual (WebSpeech + Groq Whisper)"})]})]}),D.jsx("label",{children:"Real-Time Speech Transcript"}),D.jsx("div",{className:"transcript-box",ref:x,onScroll:y,style:{scrollBehavior:"smooth",minHeight:"180px",maxHeight:"280px",overflowY:"auto",background:"var(--surface-raised, #18261f)",border:"1px solid var(--border)",borderRadius:"10px",padding:"12px",marginBottom:"14px"},children:L?D.jsxs("div",{className:"transcript-list",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[f.map(b=>D.jsxs("div",{className:"transcript-segment",style:{background:"rgba(39, 82, 61, 0.2)",borderLeft:"3px solid var(--primary-accent, #34d399)",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",lineHeight:"1.4"},children:[b.timestamp&&D.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",T(b.timestamp),"]"]}),D.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,color:"var(--primary-accent, #34d399)",marginRight:"6px"},children:[b.speaker,":"]}),D.jsx("span",{className:"transcript-text",style:{color:"var(--text)"},children:b.text})]},b.segment_id)),c&&D.jsxs("div",{className:"transcript-segment partial-line",style:{background:"rgba(245, 158, 11, 0.15)",borderLeft:"3px solid #f59e0b",padding:"6px 10px",borderRadius:"6px",fontSize:"13px",fontStyle:"italic",color:"#fbbf24"},children:[c.timestamp&&D.jsxs("span",{className:"transcript-timestamp",style:{fontSize:"10px",color:"var(--text-muted)",marginRight:"6px"},children:["[",T(c.timestamp),"]"]}),D.jsxs("span",{className:"transcript-speaker",style:{fontWeight:600,marginRight:"6px"},children:[c.speaker,":"]}),D.jsxs("span",{className:"transcript-text partial-text",children:[c.text,"…"]})]},"partial")]}):D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"140px",color:"var(--text-muted)",textAlign:"center",gap:"8px"},children:[D.jsx("span",{style:{fontSize:"24px"},children:"🎙️"}),D.jsx("span",{className:"transcript-empty",style:{fontSize:"13px"},children:e?"Listening... Speak into your microphone now.":"Microphone is on standby. Speak or click 'Enable Live Mic' / simulate arrival above."})]})}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"typedSpeechInput",children:"Add Spoken Line (Demo & Testing)"}),D.jsxs("div",{style:{display:"flex",gap:"8px"},children:[D.jsx("input",{id:"typedSpeechInput",type:"text",value:v,onChange:b=>g(b.target.value),onKeyDown:b=>{b.key==="Enter"&&_()},placeholder:"e.g. Priya: I brought some fresh strawberries from the farmer's market!",style:{flex:1,padding:"9px 12px",background:"var(--bg, #0b120e)",border:"1px solid var(--border)",borderRadius:"8px",color:"var(--text)",fontSize:"13px",outline:"none"}}),D.jsx("button",{className:"btn btn-primary",style:{padding:"8px 16px",whiteSpace:"nowrap"},onClick:_,children:"Add Line"}),D.jsx("button",{className:"btn btn-secondary",style:{padding:"8px 12px"},onClick:o,children:"Clear"})]})]})]})}function V0({onSimulateArrive:u,onSimulateLeave:e,onForceSummarize:n}){return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Visit Simulator"}),D.jsx("span",{className:"badge",children:"Demo Mode"})]}),D.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Simulate face detection events instantly without requiring a physical camera."}),D.jsxs("div",{className:"btn-row",style:{marginBottom:"12px"},children:[D.jsx("button",{className:"btn btn-primary",onClick:()=>u("priya"),children:"Simulate Priya Arriving"}),D.jsx("button",{className:"btn btn-secondary",onClick:()=>u("tom"),children:"Simulate Tom Arriving"}),D.jsx("button",{className:"btn btn-secondary",onClick:()=>u("maya"),children:"Simulate Maya Arriving"})]}),D.jsxs("div",{className:"btn-row",style:{borderTop:"1px solid var(--border)",paddingTop:"12px"},children:[D.jsx("button",{className:"btn btn-amber",onClick:e,children:"Person Leaves (Summarize & Save)"}),D.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Force Summarize Now"})]})]})}function W0({profiles:u,onAddPerson:e,onDeletePerson:n,onRegisterFace:r,onClearEncodings:o}){const[a,f]=fe.useState(!1),[c,m]=fe.useState(""),[h,v]=fe.useState(""),[g,x]=fe.useState(""),[S,E]=fe.useState(""),[y,_]=fe.useState(!0),[T,A]=fe.useState(null),[k,L]=fe.useState(null),[b,F]=fe.useState("info");fe.useRef({});const G=(B,de="info")=>{L(B),F(de),setTimeout(()=>{L(null)},4500)},M=async(B,de)=>{A(B),G(`Scanning webcam frame for ${de}…`,"info");try{const se=await r(B,null);se.success?G(`✅ ${se.message}`,"success"):G(`⚠️ ${se.error}`,"error")}catch(se){G(`❌ Error registering face: ${se.message}`,"error")}finally{A(null)}},z=async(B,de,se)=>{if(!se)return;A(B),G(`Processing photo for ${de}…`,"info");const q=new FileReader;q.onload=async le=>{try{const te=le.target.result,re=await r(B,te);re.success?G(`✅ ${re.message}`,"success"):G(`⚠️ ${re.error}`,"error")}catch(te){G(`❌ Error: ${te.message}`,"error")}finally{A(null)}},q.readAsDataURL(se)},K=async B=>{if(B.preventDefault(),!h.trim())return;const de=(c||h).trim().toLowerCase().replace(/\s+/g,"_");try{await e({person_id:de,name:h.trim(),relationship:g.trim()||"Loved One",note:S.trim()||null}),y?await M(de,h.trim()):G(`✅ Profile for ${h} created.`,"success"),f(!1),m(""),v(""),x(""),E("")}catch(se){G(`❌ Failed to save profile: ${se.message}`,"error")}};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"Registered Loved Ones"}),D.jsx("button",{className:"btn btn-primary",style:{padding:"5px 12px",fontSize:"12px"},onClick:()=>f(!0),children:"+ Add Person"})]}),k&&D.jsx("div",{style:{padding:"10px 14px",borderRadius:"var(--radius-sm)",marginBottom:"14px",fontSize:"13px",fontWeight:500,background:b==="success"?"#e6f4ea":b==="error"?"#fce8e6":"#e8f0fe",color:b==="success"?"#137333":b==="error"?"#c5221f":"#1a73e8",border:`1px solid ${b==="success"?"#ceead6":b==="error"?"#fad2cf":"#d2e3fc"}`},children:k}),D.jsx("div",{className:"roster-grid",children:u.map(B=>{const de=(B.name||"A")[0].toUpperCase(),se=B.avatar_color||"var(--primary)",q=B.encodings_count||0,le=T===B.person_id;return D.jsxs("div",{className:"profile-card",children:[D.jsxs("div",{className:"profile-card-header",children:[D.jsx("div",{className:"profile-avatar",style:{background:se},children:de}),D.jsxs("div",{className:"profile-info",children:[D.jsx("h3",{children:B.name}),D.jsx("p",{children:B.relationship})]})]}),D.jsxs("div",{className:"profile-note-preview",children:['"',B.note||"No memory recorded yet.",'"']}),D.jsxs("div",{style:{background:"var(--surface-raised)",padding:"10px",borderRadius:"var(--radius-sm)",marginBottom:"10px",border:"1px solid var(--border)"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",fontSize:"12px"},children:[D.jsx("span",{style:{fontWeight:600,color:q>0?"#137333":"var(--amber-warm)"},children:q>0?`🟢 ${q} Face Snapshot${q>1?"s":""} Enrolled`:"⚠️ 0 Encodings (Webcam won't recognize)"}),q>0&&D.jsx("button",{type:"button",style:{background:"none",border:"none",color:"var(--text-light)",cursor:"pointer",fontSize:"11px",textDecoration:"underline"},onClick:()=>o(B.person_id),children:"Clear"})]}),D.jsxs("div",{className:"btn-row",style:{gap:"6px"},children:[D.jsx("button",{className:"btn btn-primary",style:{padding:"5px 10px",fontSize:"11px",flex:1},disabled:le,onClick:()=>M(B.person_id,B.name),title:"Face the camera and click to record your face",children:le?"Scanning…":"📸 Capture Face"}),D.jsxs("label",{className:"btn btn-secondary",style:{padding:"5px 10px",fontSize:"11px",cursor:"pointer",margin:0},title:"Upload a clear photo with the person's face",children:["📁 Photo",D.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:te=>{var re;(re=te.target.files)!=null&&re[0]&&(z(B.person_id,B.name,te.target.files[0]),te.target.value="")}})]})]})]}),D.jsxs("div",{className:"profile-card-actions",children:[D.jsxs("span",{style:{color:"var(--text-light)",fontSize:"11px"},children:["ID: ",B.person_id]}),D.jsx("button",{className:"btn btn-secondary",style:{padding:"3px 8px",fontSize:"11px"},onClick:()=>{confirm(`Remove ${B.name} from the loved ones roster?`)&&n(B.person_id)},children:"Delete"})]})]},B.person_id)})}),a&&D.jsx("div",{className:"modal-overlay",children:D.jsxs("div",{className:"panel-card",style:{width:"100%",maxWidth:"480px",boxShadow:"var(--shadow-lg)"},children:[D.jsx("h2",{children:"Register Loved One"}),D.jsxs("form",{onSubmit:K,children:[D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpPersonId",children:"Unique ID (e.g. sarah)"}),D.jsx("input",{type:"text",id:"inpPersonId",value:c,onChange:B=>m(B.target.value),placeholder:"sarah",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpName",children:"Full Name"}),D.jsx("input",{type:"text",id:"inpName",value:h,onChange:B=>v(B.target.value),placeholder:"Sarah Jenkins",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpRelationship",children:"Relationship to Patient"}),D.jsx("input",{type:"text",id:"inpRelationship",value:g,onChange:B=>x(B.target.value),placeholder:"Sister / Niece / Neighbor",required:!0})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"inpInitialNote",children:"Initial Memory Note (Optional)"}),D.jsx("textarea",{id:"inpInitialNote",value:S,onChange:B=>E(B.target.value),placeholder:"Sarah came over for lunch and brought blueberry muffins."})]}),D.jsxs("div",{style:{background:"var(--primary-subtle)",padding:"10px 12px",borderRadius:"var(--radius-sm)",marginBottom:"14px"},children:[D.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",fontWeight:600,margin:0},children:[D.jsx("input",{type:"checkbox",checked:y,onChange:B=>_(B.target.checked)}),"📸 Take face snapshot from webcam now"]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-muted)",marginTop:"4px",paddingLeft:"22px"},children:"Make sure the person is facing the camera when clicking Save."})]}),D.jsxs("div",{className:"btn-row",style:{justifyContent:"flex-end",marginTop:"18px"},children:[D.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>f(!1),children:"Cancel"}),D.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save Profile"})]})]})]})})]})}const Ho={apiKey:"",endpoint:"/api/groq",model:"groq/compound-mini",maxTokens:60,temperature:.7},H0=3;function j0(u){const e=(u||"").trim().match(/\S+/g);return e?e.length:0}function Ym(u){return u&&(u.name||u.person_id)||"someone"}function q0(u){return`You had a visit with ${Ym(u)}.`}function X0(){return"You are the memory writer for Anchor, a dementia-care companion. You write a single warm, gentle sentence that reminds the patient of the visit they just had. You never write clinical notes, meeting minutes, bullet lists, or evaluations, and you never mention that you are an AI."}function $0(u,e){return[`${Ym(u)} just finished a visit with the patient. Here is a rough, imperfect speech-to-text transcript of their conversation:`,"",'"""',e,'"""',"","Write ONE short, warm sentence (roughly 15-25 words) that gently reminds the patient of this visit — what they did or talked about together. It should feel like a caring note from the visit, not a recap, a report, or a list.","Respond with ONLY that single sentence. No quotes, no prefixes, no explanations, no extra text."].join(`
`)}function Y0(u){var o;if(!u||!Array.isArray(u.choices)||u.choices.length===0)return"";let n=(((o=u.choices[0].message)==null?void 0:o.content)||"").trim();(n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'"))&&(n=n.slice(1,-1).trim());const r=n.match(/^[^.!?]*[.!?]["']?/);return r&&(n=r[0]),n.trim().replace(/^["']+|["']+$/g,"")}async function K0(u,e){const{apiKey:n,endpoint:r,model:o,maxTokens:a,temperature:f}=Ho,c={"Content-Type":"application/json"};n&&(c.Authorization=`Bearer ${n}`);let m;try{m=await fetch(r||"/api/groq",{method:"POST",headers:c,body:JSON.stringify({model:o||"groq/compound-mini",max_tokens:a||60,temperature:f??.7,messages:[{role:"system",content:X0()},{role:"user",content:$0(u,e)}]})})}catch{return""}if(!m.ok)return"";let h;try{h=await m.json()}catch{return""}return Y0(h)}async function Z0(u,e){const n=(e||"").trim();return j0(n)<H0?null:await K0(u,n)||q0(u)}function Q0({ttsSettings:u={},onTtsSettingsChange:e}){const[n,r]=fe.useState(Ho.apiKey||""),[o,a]=fe.useState(Ho.model||"llama-3.3-70b-versatile"),[f,c]=fe.useState([]);fe.useEffect(()=>{const g=()=>{const x=E0();c(x)};g(),typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=g)},[]);const m=g=>{const x=g.target.value;r(x),Ho.apiKey=x.trim()},h=g=>{const x=g.target.value;a(x),Ho.model=x},v=(g,x)=>{e&&e(S=>({...S,[g]:x}))};return D.jsxs("div",{className:"panel-card",children:[D.jsxs("h2",{children:[D.jsx("span",{children:"AI Summarizer Settings"}),D.jsx("span",{className:"badge",children:"Groq LLaMA 3.3"})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgApiKey",children:"Custom Groq API Key (Optional)"}),D.jsx("input",{type:"password",id:"cfgApiKey",value:n,onChange:m,placeholder:"Leave empty to use server-side backend key"}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Server has a built-in proxy key. Entering a key here overrides it for this browser."})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgModel",children:"Summarizer Model"}),D.jsxs("select",{id:"cfgModel",value:o,onChange:h,children:[D.jsx("option",{value:"llama-3.3-70b-versatile",children:"LLaMA 3.3 70B Versatile (Recommended)"}),D.jsx("option",{value:"llama-3.1-8b-instant",children:"LLaMA 3.1 8B Instant (Ultra Fast)"}),D.jsx("option",{value:"mixtral-8x7b-32768",children:"Mixtral 8x7B"})]})]}),D.jsxs("h2",{style:{marginTop:"24px"},children:[D.jsx("span",{children:"Voice & Interaction"}),D.jsx("span",{className:"badge",children:"Patient TTS"})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.ttsEnabled!==!1,onChange:g=>v("ttsEnabled",g.target.checked)}),D.jsx("span",{children:"Text-to-Speech Enabled"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"When enabled, Anchor speaks visitor introductions and answers aloud."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.interactionEnabled!==!1,onChange:g=>v("interactionEnabled",g.target.checked)}),D.jsx("span",{children:"Patient Voice Interaction"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Allow the patient to ask questions using their voice."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{className:"toggle-label",children:[D.jsx("input",{type:"checkbox",checked:u.autoListenEnabled!==!1,onChange:g=>v("autoListenEnabled",g.target.checked)}),D.jsx("span",{children:"Auto-Listen After Speaking"})]}),D.jsx("p",{style:{fontSize:"11px",color:"var(--text-light)",marginTop:"4px"},children:"Automatically listen for patient questions after Anchor speaks."})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgRate",children:["Speech Speed: ",(u.rate||.85).toFixed(2),"×"]}),D.jsx("input",{type:"range",id:"cfgRate",min:"0.5",max:"1.5",step:"0.05",value:u.rate||.85,onChange:g=>v("rate",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgVolume",children:["Volume: ",Math.round((u.volume||1)*100),"%"]}),D.jsx("input",{type:"range",id:"cfgVolume",min:"0.1",max:"1.0",step:"0.05",value:u.volume||1,onChange:g=>v("volume",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsxs("label",{htmlFor:"cfgPitch",children:["Pitch: ",(u.pitch||1).toFixed(2)]}),D.jsx("input",{type:"range",id:"cfgPitch",min:"0.5",max:"1.5",step:"0.05",value:u.pitch||1,onChange:g=>v("pitch",parseFloat(g.target.value))})]}),D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgLanguage",children:"Language"}),D.jsxs("select",{id:"cfgLanguage",value:u.language||"en-US",onChange:g=>v("language",g.target.value),children:[D.jsx("option",{value:"en-US",children:"English (US)"}),D.jsx("option",{value:"en-GB",children:"English (UK)"}),D.jsx("option",{value:"en-IN",children:"English (India)"}),D.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी)"})]})]}),f.length>0&&D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"cfgVoice",children:"Voice"}),D.jsxs("select",{id:"cfgVoice",value:u.voiceName||"",onChange:g=>v("voiceName",g.target.value||null),children:[D.jsx("option",{value:"",children:"Auto-select best voice"}),f.map(g=>D.jsxs("option",{value:g.name,children:[g.name," (",g.lang,")",g.default?" ★":""]},g.name))]})]}),D.jsxs("div",{className:"status-pill",style:{width:"100%",justifyContent:"center"},children:[D.jsx("span",{className:"status-dot active"}),D.jsx("span",{children:"AI Summarizer Ready"})]})]})}let Jt=null,$o=null,Ol=null,Yo=null,bt=null,si=null,Vl=null,yf=null,Km=null;const J0=12,ex=.7;function Zm(){return typeof window<"u"&&window.Peer?window.Peer:null}function tx(u={}){if(yf=u.onStatusChange||(()=>{}),Km=u.onPeerIdReady||(()=>{}),Yo="anchor-"+Math.random().toString(36).slice(2,8),ki("initializing","Setting up pairing…"),Jt&&!Jt.destroyed&&Jt.destroy(),!Zm()){const n=document.createElement("script");n.src="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",n.onload=()=>{Mp(Yo)},n.onerror=()=>{ki("error","Failed to load PeerJS library")},document.head.appendChild(n);return}Mp(Yo)}function Mp(u){const e=Zm();if(!e){ki("error","PeerJS unavailable");return}Jt=new e(u),Jt.on("open",n=>{console.log("[WearablePairing] Peer open with ID:",n),Yo=n,ki("waiting","Waiting for capture device…"),Km(n)}),Jt.on("call",n=>{console.log("[WearablePairing] Incoming call from:",n.peer),nx(n)}),Jt.on("error",n=>{console.error("[WearablePairing] Peer error:",n),n.type==="network"?ki("error","Network error — will retry"):ki("error",`Error: ${n.type}`)}),Jt.on("disconnected",()=>{console.log("[WearablePairing] Disconnected from signaling server"),Jt&&!Jt.destroyed&&setTimeout(()=>{Jt&&!Jt.destroyed&&Jt.reconnect()},2e3)})}function Ep(){Nf(),$o&&($o.close(),$o=null),Jt&&!Jt.destroyed&&Jt.destroy(),Jt=null,Yo=null,Qm(),ki("idle","Pairing stopped")}function nx(u){$o=u,u.answer(),u.on("stream",e=>{console.log("[WearablePairing] Received remote media stream"),ki("connected","Wearable camera connected ✓"),ix(e)}),u.on("close",()=>{console.log("[WearablePairing] Call closed"),zc()}),u.on("error",e=>{console.error("[WearablePairing] Call error:",e),zc()}),u.peerConnection&&u.peerConnection.addEventListener("connectionstatechange",()=>{const e=u.peerConnection.connectionState;(e==="disconnected"||e==="failed")&&zc()})}function zc(){Nf(),$o=null,ki("waiting","Capture device disconnected — waiting for reconnect…")}function ix(u){Nf(),bt=document.createElement("video"),bt.srcObject=u,bt.autoplay=!0,bt.playsInline=!0,bt.muted=!0,bt.style.cssText="position:fixed;top:0;left:0;width:320px;height:240px;opacity:0.01;pointer-events:none;z-index:-999;",document.body.appendChild(bt),si=document.createElement("canvas"),si.width=640,si.height=480,Vl=si.getContext("2d");const e=()=>{bt.play().catch(r=>console.warn("[WearablePairing] relayVideo.play error:",r))};bt.addEventListener("loadedmetadata",()=>{bt.videoWidth>0&&bt.videoHeight>0&&(si.width=bt.videoWidth,si.height=bt.videoHeight),e()}),e();const n=Math.round(1e3/J0);Ol=setInterval(()=>rx(),n)}function Nf(){Ol&&(clearInterval(Ol),Ol=null),Qm()}function Qm(){bt&&(bt.srcObject=null,bt.remove(),bt=null),si=null,Vl=null}async function rx(){if(!(!bt||bt.readyState<2||!Vl)){si.width!==bt.videoWidth&&bt.videoWidth>0&&(si.width=bt.videoWidth,si.height=bt.videoHeight),Vl.drawImage(bt,0,0);try{const u=await new Promise(e=>{si.toBlob(e,"image/jpeg",ex)});if(!u||u.size<100)return;fetch("/api/remote_frame",{method:"POST",headers:{"Content-Type":"image/jpeg"},body:u}).catch(e=>{console.warn("[WearablePairing] Frame relay POST failed:",e.message)})}catch(u){console.warn("[WearablePairing] Frame extraction error:",u)}}}function ki(u,e){console.log(`[WearablePairing] Status: ${u} — ${e}`),yf&&yf(u,e)}function sx(){const[u,e]=fe.useState("idle"),[n,r]=fe.useState(""),[o,a]=fe.useState(""),f=fe.useRef(null);fe.useEffect(()=>()=>{Ep()},[]);const c=()=>{tx({onPeerIdReady:h=>{r(h),window.QRCode&&f.current&&window.QRCode.toCanvas(f.current,h,{width:160,margin:2,color:{dark:"#163024",light:"#ffffff"}},v=>{v&&console.error("QR Code generation error:",v)})},onStatusChange:(h,v)=>{e(h),a(v)}})},m=()=>{Ep(),e("idle"),r(""),a("")};return D.jsxs("div",{className:`panel-card wearable-panel ${u==="connected"?"paired":""}`,children:[D.jsxs("h2",{children:[D.jsx("span",{children:"📷 Wearable Camera"}),D.jsx("span",{className:"badge",style:{background:u==="connected"?"var(--primary)":void 0,color:u==="connected"?"white":void 0},children:u==="connected"?"Connected ✓":u==="waiting"?"Pairing…":"Not Connected"})]}),D.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"14px"},children:"Pair a phone or wearable camera to stream video for face recognition instead of the built-in webcam."}),u==="idle"&&D.jsx("div",{children:D.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"100%"},onClick:c,children:"Connect Wearable Camera"})}),(u==="waiting"||u==="initializing")&&D.jsxs("div",{children:[D.jsx("div",{className:"qr-container",children:D.jsx("canvas",{ref:f,style:{width:160,height:160}})}),D.jsxs("div",{className:"pairing-code-display",children:[D.jsx("label",{style:{textAlign:"center",display:"block"},children:"Pairing Code"}),D.jsx("div",{className:"pairing-code",children:n||"------"})]}),D.jsxs("div",{className:"wearable-status",children:[D.jsx("span",{className:"wearable-status-dot waiting"}),D.jsx("span",{children:o||"Waiting for capture device…"})]}),D.jsxs("p",{style:{fontSize:"11px",color:"var(--text-light)",textAlign:"center",marginTop:"10px"},children:["On the capture device, open ",D.jsx("strong",{children:"http://<this-ip>:8000/capture"})," and enter the code above."]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Cancel Pairing"})]}),u==="connected"&&D.jsxs("div",{children:[D.jsxs("div",{className:"wearable-status connected",children:[D.jsx("span",{className:"wearable-status-dot connected"}),D.jsx("span",{children:"Wearable camera streaming ✓"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Disconnect Wearable"})]}),u==="error"&&D.jsxs("div",{children:[D.jsxs("div",{className:"wearable-status",children:[D.jsx("span",{className:"wearable-status-dot error"}),D.jsx("span",{children:o||"Pairing error"})]}),D.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",marginTop:"12px"},onClick:m,children:"Retry Pairing"})]})]})}function ox({isVisitorPresent:u,activePerson:e,transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:f,onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E,ttsSettings:y,onTtsSettingsChange:_,liveSegments:T=[],partialSegment:A=null,visitDuration:k="00:00",statusState:L="idle"}){const b=(e==null?void 0:e.name)||"None";return D.jsxs("section",{className:"caregiver-view",children:[D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[D.jsx(B0,{isVisitorPresent:u,visitorName:b}),D.jsx(G0,{transcript:n,isCapturing:r,onToggleListening:o,onAppendSpeech:a,onClearSpeech:f,statusBadgeText:u?`In Visit with ${b}`:null,liveSegments:T,partialSegment:A,visitDuration:k,statusState:L}),D.jsx(V0,{onSimulateArrive:c,onSimulateLeave:m,onForceSummarize:h})]}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[D.jsx(W0,{profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E}),D.jsx(sx,{}),D.jsx(Q0,{ttsSettings:y,onTtsSettingsChange:_})]})]})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="143",ax=0,Tp=1,lx=2,Jm=1,ux=2,Vs=3,Ko=0,li=1,Ys=2,cx=1,xr=0,js=1,Zo=2,bp=3,Cp=4,fx=5,Us=100,dx=101,hx=102,Ap=103,Rp=104,px=200,mx=201,gx=202,vx=203,eg=204,tg=205,xx=206,_x=207,yx=208,Sx=209,wx=210,Mx=0,Ex=1,Tx=2,Sf=3,bx=4,Cx=5,Ax=6,Rx=7,ng=0,Lx=1,Px=2,zi=0,Dx=1,Ix=2,Nx=3,kx=4,Fx=5,ig=300,Ks=301,Zs=302,wf=303,Mf=304,ql=306,Ef=1e3,oi=1001,Tf=1002,ln=1003,Lp=1004,Pp=1005,Vn=1006,zx=1007,Xl=1008,Qr=1009,Ox=1010,Ux=1011,rg=1012,Bx=1013,Hr=1014,jr=1015,Qo=1016,Gx=1017,Vx=1018,qs=1020,Wx=1021,Hx=1022,ai=1023,jx=1024,qx=1025,Xr=1026,Qs=1027,Xx=1028,$x=1029,Yx=1030,Kx=1031,Zx=1033,Oc=33776,Uc=33777,Bc=33778,Gc=33779,Dp=35840,Ip=35841,Np=35842,kp=35843,Qx=36196,Fp=37492,zp=37496,Op=37808,Up=37809,Bp=37810,Gp=37811,Vp=37812,Wp=37813,Hp=37814,jp=37815,qp=37816,Xp=37817,$p=37818,Yp=37819,Kp=37820,Zp=37821,Qp=36492,Jr=3e3,It=3001,Jx=3200,e_=3201,t_=0,n_=1,Ii="srgb",qr="srgb-linear",Vc=7680,i_=519,Jp=35044,em="300 es",bf=1035;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,f=o.length;a<f;a++)o[a].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,tm=180/Math.PI;function ta(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(on[u&255]+on[u>>8&255]+on[u>>16&255]+on[u>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]).toLowerCase()}function Pn(u,e,n){return Math.max(e,Math.min(n,u))}function r_(u,e){return(u%e+e)%e}function Hc(u,e,n){return(1-n)*u+n*e}function nm(u){return(u&u-1)===0&&u!==0}function Cf(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),a=this.x-e.x,f=this.y-e.y;return this.x=a*r-f*o+e.x,this.y=a*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(){Hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,r,o,a,f,c,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=c,v[3]=n,v[4]=a,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,f=r[0],c=r[3],m=r[6],h=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],y=o[0],_=o[3],T=o[6],A=o[1],k=o[4],L=o[7],b=o[2],F=o[5],G=o[8];return a[0]=f*y+c*A+m*b,a[3]=f*_+c*k+m*F,a[6]=f*T+c*L+m*G,a[1]=h*y+v*A+g*b,a[4]=h*_+v*k+g*F,a[7]=h*T+v*L+g*G,a[2]=x*y+S*A+E*b,a[5]=x*_+S*k+E*F,a[8]=x*T+S*L+E*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8];return n*f*v-n*c*h-r*a*v+r*c*m+o*a*h-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=v*f-c*h,x=c*m-v*a,S=h*a-f*m,E=n*g+r*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=g*y,e[1]=(o*h-v*r)*y,e[2]=(c*r-o*f)*y,e[3]=x*y,e[4]=(v*n-o*m)*y,e[5]=(o*a-c*n)*y,e[6]=S*y,e[7]=(r*m-h*n)*y,e[8]=(f*n-r*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,a,f,c){const m=Math.cos(a),h=Math.sin(a);return this.set(r*m,r*h,-r*(m*f+h*c)+f+e,-o*h,o*m,-o*(-h*f+m*c)+c+n,0,0,1),this}scale(e,n){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=n,r[4]*=n,r[7]*=n,this}rotate(e){const n=Math.cos(e),r=Math.sin(e),o=this.elements,a=o[0],f=o[3],c=o[6],m=o[1],h=o[4],v=o[7];return o[0]=n*a+r*m,o[3]=n*f+r*h,o[6]=n*c+r*v,o[1]=-r*a+n*m,o[4]=-r*f+n*h,o[7]=-r*c+n*v,this}translate(e,n){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=n*r[2],r[4]+=n*r[5],r[7]+=n*r[8],this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function sg(u){for(let e=u.length-1;e>=0;--e)if(u[e]>65535)return!0;return!1}function Wl(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function $r(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function Ul(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const jc={[Ii]:{[qr]:$r},[qr]:{[Ii]:Ul}},ti={legacyMode:!0,get workingColorSpace(){return qr},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,n){if(this.legacyMode||e===n||!e||!n)return u;if(jc[e]&&jc[e][n]!==void 0){const r=jc[e][n];return u.r=r(u.r),u.g=r(u.g),u.b=r(u.b),u}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}},og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={r:0,g:0,b:0},ni={h:0,s:0,l:0},pl={h:0,s:0,l:0};function qc(u,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?u+(e-u)*6*n:n<1/2?e:n<2/3?u+(e-u)*6*(2/3-n):u}function ml(u,e){return e.r=u.r,e.g=u.g,e.b=u.b,e}class ft{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&r===void 0?this.set(e):this.setRGB(e,n,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ti.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=qr){return this.r=e,this.g=n,this.b=r,ti.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=qr){if(e=r_(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,f=2*r-a;this.r=qc(f,a,e+1/3),this.g=qc(f,a,e),this.b=qc(f,a,e-1/3)}return ti.toWorkingColorSpace(this,o),this}setStyle(e,n=Ii){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const f=o[1],c=o[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ti.toWorkingColorSpace(this,n),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ti.toWorkingColorSpace(this,n),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(a[1])/360,h=parseInt(a[2],10)/100,v=parseInt(a[3],10)/100;return r(a[4]),this.setHSL(m,h,v,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],f=a.length;if(f===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ti.toWorkingColorSpace(this,n),this;if(f===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ti.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Ii){const r=og[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return ti.fromWorkingColorSpace(ml(this,Vt),e),Pn(Vt.r*255,0,255)<<16^Pn(Vt.g*255,0,255)<<8^Pn(Vt.b*255,0,255)<<0}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qr){ti.fromWorkingColorSpace(ml(this,Vt),n);const r=Vt.r,o=Vt.g,a=Vt.b,f=Math.max(r,o,a),c=Math.min(r,o,a);let m,h;const v=(c+f)/2;if(c===f)m=0,h=0;else{const g=f-c;switch(h=v<=.5?g/(f+c):g/(2-f-c),f){case r:m=(o-a)/g+(o<a?6:0);break;case o:m=(a-r)/g+2;break;case a:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=qr){return ti.fromWorkingColorSpace(ml(this,Vt),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ii){return ti.fromWorkingColorSpace(ml(this,Vt),e),e!==Ii?`color(${e} ${Vt.r} ${Vt.g} ${Vt.b})`:`rgb(${Vt.r*255|0},${Vt.g*255|0},${Vt.b*255|0})`}offsetHSL(e,n,r){return this.getHSL(ni),ni.h+=e,ni.s+=n,ni.l+=r,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ni),e.getHSL(pl);const r=Hc(ni.h,pl.h,n),o=Hc(ni.s,pl.s,n),a=Hc(ni.l,pl.l,n);return this.setHSL(r,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ft.NAMES=og;let Es;class ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Wl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let f=0;f<a.length;f++)a[f]=$r(a[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($r(n[r]/255)*255):n[r]=$r(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class lg{constructor(e=null){this.isSource=!0,this.uuid=ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let f=0,c=o.length;f<c;f++)o[f].isDataTexture?a.push(Xc(o[f].image)):a.push(Xc(o[f]))}else a=Xc(o);r.url=a}return n||(e.images[this.uuid]=r),r}}function Xc(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?ag.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s_=0;class jn extends eo{constructor(e=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,r=oi,o=oi,a=Vn,f=Xl,c=ai,m=Qr,h=1,v=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=ta(),this.name="",this.source=new lg(e),this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=f,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=m,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ef:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ef:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=ig;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*a,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*a,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*a,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,a;const m=e.elements,h=m[0],v=m[4],g=m[8],x=m[1],S=m[5],E=m[9],y=m[2],_=m[6],T=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-y)<.01&&Math.abs(E-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+y)<.1&&Math.abs(E+_)<.1&&Math.abs(h+S+T-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(h+1)/2,L=(S+1)/2,b=(T+1)/2,F=(v+x)/4,G=(g+y)/4,M=(E+_)/4;return k>L&&k>b?k<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(k),o=F/r,a=G/r):L>b?L<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),r=F/o,a=M/o):b<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(b),r=G/a,o=M/a),this.set(r,o,a,n),this}let A=Math.sqrt((_-E)*(_-E)+(g-y)*(g-y)+(x-v)*(x-v));return Math.abs(A)<.001&&(A=1),this.x=(_-E)/A,this.y=(g-y)/A,this.z=(x-v)/A,this.w=Math.acos((h+S+T-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends eo{constructor(e,n,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new jn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Vn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new lg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ug extends jn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class o_ extends jn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,a,f,c){let m=r[o+0],h=r[o+1],v=r[o+2],g=r[o+3];const x=a[f+0],S=a[f+1],E=a[f+2],y=a[f+3];if(c===0){e[n+0]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(c===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=y;return}if(g!==y||m!==x||h!==S||v!==E){let _=1-c;const T=m*x+h*S+v*E+g*y,A=T>=0?1:-1,k=1-T*T;if(k>Number.EPSILON){const b=Math.sqrt(k),F=Math.atan2(b,T*A);_=Math.sin(_*F)/b,c=Math.sin(c*F)/b}const L=c*A;if(m=m*_+x*L,h=h*_+S*L,v=v*_+E*L,g=g*_+y*L,_===1-c){const b=1/Math.sqrt(m*m+h*h+v*v+g*g);m*=b,h*=b,v*=b,g*=b}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,a,f){const c=r[o],m=r[o+1],h=r[o+2],v=r[o+3],g=a[f],x=a[f+1],S=a[f+2],E=a[f+3];return e[n]=c*E+v*g+m*S-h*x,e[n+1]=m*E+v*x+h*g-c*S,e[n+2]=h*E+v*S+c*x-m*g,e[n+3]=v*E-c*g-m*x-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,o=e._y,a=e._z,f=e._order,c=Math.cos,m=Math.sin,h=c(r/2),v=c(o/2),g=c(a/2),x=m(r/2),S=m(o/2),E=m(a/2);switch(f){case"XYZ":this._x=x*v*g+h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g+x*S*E;break;case"YZX":this._x=x*v*g+h*S*E,this._y=h*S*g+x*v*E,this._z=h*v*E-x*S*g,this._w=h*v*g-x*S*E;break;case"XZY":this._x=x*v*g-h*S*E,this._y=h*S*g-x*v*E,this._z=h*v*E+x*S*g,this._w=h*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],a=n[8],f=n[1],c=n[5],m=n[9],h=n[2],v=n[6],g=n[10],x=r+c+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(a-h)*S,this._z=(f-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(v-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(a-h)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-o)/S,this._x=(a+h)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,a=e._z,f=e._w,c=n._x,m=n._y,h=n._z,v=n._w;return this._x=r*v+f*c+o*h-a*m,this._y=o*v+f*m+a*c-r*h,this._z=a*v+f*h+r*m-o*c,this._w=f*v-r*c-o*m-a*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,f=this._w;let c=f*e._w+r*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=o,this._z=a,this;const m=1-c*c;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(m),v=Math.atan2(h,c),g=Math.sin((1-n)*v)/h,x=Math.sin(n*v)/h;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=o*g+this._y*x,this._z=a*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(o),r*Math.sin(a),r*Math.cos(a),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*o,this.y=a[1]*n+a[4]*r+a[7]*o,this.z=a[2]*n+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=e.elements,f=1/(a[3]*n+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*o+a[12])*f,this.y=(a[1]*n+a[5]*r+a[9]*o+a[13])*f,this.z=(a[2]*n+a[6]*r+a[10]*o+a[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,a=e.x,f=e.y,c=e.z,m=e.w,h=m*n+f*o-c*r,v=m*r+c*n-a*o,g=m*o+a*r-f*n,x=-a*n-f*r-c*o;return this.x=h*m+x*-a+v*-c-g*-f,this.y=v*m+x*-f+g*-a-h*-c,this.z=g*m+x*-c+h*-f-v*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*o,this.y=a[1]*n+a[5]*r+a[9]*o,this.z=a[2]*n+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,a=e.z,f=n.x,c=n.y,m=n.z;return this.x=o*m-a*c,this.y=a*f-r*m,this.z=r*c-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new Q,im=new na;class ia{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,r=1/0,o=1/0,a=-1/0,f=-1/0,c=-1/0;for(let m=0,h=e.length;m<h;m+=3){const v=e[m],g=e[m+1],x=e[m+2];v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>f&&(f=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,f,c),this}setFromBufferAttribute(e){let n=1/0,r=1/0,o=1/0,a=-1/0,f=-1/0,c=-1/0;for(let m=0,h=e.count;m<h;m++){const v=e.getX(m),g=e.getY(m),x=e.getZ(m);v<n&&(n=v),g<r&&(r=g),x<o&&(o=x),v>a&&(a=v),g>f&&(f=g),x>c&&(c=x)}return this.min.set(n,r,o),this.max.set(a,f,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Fr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(n&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let f=0,c=a.count;f<c;f++)Fr.fromBufferAttribute(a,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Fr)}else r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox),Yc.applyMatrix4(e.matrixWorld),this.union(Yc);const o=e.children;for(let a=0,f=o.length;a<f;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),gl.subVectors(this.max,Bo),Ts.subVectors(e.a,Bo),bs.subVectors(e.b,Bo),Cs.subVectors(e.c,Bo),ar.subVectors(bs,Ts),lr.subVectors(Cs,bs),zr.subVectors(Ts,Cs);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-zr.z,zr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,zr.z,0,-zr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-zr.y,zr.x,0];return!Kc(n,Ts,bs,Cs,gl)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Ts,bs,Cs,gl))?!1:(vl.crossVectors(ar,lr),n=[vl.x,vl.y,vl.z],Kc(n,Ts,bs,Cs,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Fr=new Q,Yc=new ia,Ts=new Q,bs=new Q,Cs=new Q,ar=new Q,lr=new Q,zr=new Q,Bo=new Q,gl=new Q,vl=new Q,Or=new Q;function Kc(u,e,n,r,o){for(let a=0,f=u.length-3;a<=f;a+=3){Or.fromArray(u,a);const c=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),m=e.dot(Or),h=n.dot(Or),v=r.dot(Or);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>c)return!1}return!0}const a_=new ia,rm=new Q,xl=new Q,Zc=new Q;class $l{constructor(e=new Q,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):a_.setFromPoints(e).getCenter(r);let o=0;for(let a=0,f=e.length;a<f;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Zc.subVectors(e,this.center);const n=Zc.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.add(Zc.multiplyScalar(o/r)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?xl.set(0,0,1).multiplyScalar(e.radius):xl.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(rm.copy(e.center).add(xl)),this.expandByPoint(rm.copy(e.center).sub(xl)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new Q,Qc=new Q,_l=new Q,ur=new Q,Jc=new Q,yl=new Q,ef=new Q;class cg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.direction).multiplyScalar(n).add(this.origin),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Qc.copy(e).add(n).multiplyScalar(.5),_l.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Qc);const a=e.distanceTo(n)*.5,f=-this.direction.dot(_l),c=ur.dot(this.direction),m=-ur.dot(_l),h=ur.lengthSq(),v=Math.abs(1-f*f);let g,x,S,E;if(v>0)if(g=f*m-c,x=f*c-m,E=a*v,g>=0)if(x>=-E)if(x<=E){const y=1/v;g*=y,x*=y,S=g*(g+f*x+2*c)+x*(f*g+x+2*m)+h}else x=a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;else x=-a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;else x<=-E?(g=Math.max(0,-(-f*a+c)),x=g>0?-a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h):x<=E?(g=0,x=Math.min(Math.max(-a,-m),a),S=x*(x+2*m)+h):(g=Math.max(0,-(f*a+c)),x=g>0?a:Math.min(Math.max(-a,-m),a),S=-g*g+x*(x+2*m)+h);else x=f>0?-a:a,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*m)+h;return r&&r.copy(this.direction).multiplyScalar(g).add(this.origin),o&&o.copy(_l).multiplyScalar(x).add(Qc),S}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const r=Ri.dot(this.direction),o=Ri.dot(Ri)-r*r,a=e.radius*e.radius;if(o>a)return null;const f=Math.sqrt(a-o),c=r-f,m=r+f;return c<0&&m<0?null:c<0?this.at(m,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,a,f,c,m;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),v>=0?(a=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||a>o||((a>r||r!==r)&&(r=a),(f<o||o!==o)&&(o=f),g>=0?(c=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(c=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||c>o)||((c>r||r!==r)&&(r=c),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,r,o,a){Jc.subVectors(n,e),yl.subVectors(r,e),ef.crossVectors(Jc,yl);let f=this.direction.dot(ef),c;if(f>0){if(o)return null;c=1}else if(f<0)c=-1,f=-f;else return null;ur.subVectors(this.origin,e);const m=c*this.direction.dot(yl.crossVectors(ur,yl));if(m<0)return null;const h=c*this.direction.dot(Jc.cross(ur));if(h<0||m+h>f)return null;const v=-c*ur.dot(ef);return v<0?null:this.at(v/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,r,o,a,f,c,m,h,v,g,x,S,E,y,_){const T=this.elements;return T[0]=e,T[4]=n,T[8]=r,T[12]=o,T[1]=a,T[5]=f,T[9]=c,T[13]=m,T[2]=h,T[6]=v,T[10]=g,T[14]=x,T[3]=S,T[7]=E,T[11]=y,T[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),a=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,a=e.z,f=Math.cos(r),c=Math.sin(r),m=Math.cos(o),h=Math.sin(o),v=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const x=f*v,S=f*g,E=c*v,y=c*g;n[0]=m*v,n[4]=-m*g,n[8]=h,n[1]=S+E*h,n[5]=x-y*h,n[9]=-c*m,n[2]=y-x*h,n[6]=E+S*h,n[10]=f*m}else if(e.order==="YXZ"){const x=m*v,S=m*g,E=h*v,y=h*g;n[0]=x+y*c,n[4]=E*c-S,n[8]=f*h,n[1]=f*g,n[5]=f*v,n[9]=-c,n[2]=S*c-E,n[6]=y+x*c,n[10]=f*m}else if(e.order==="ZXY"){const x=m*v,S=m*g,E=h*v,y=h*g;n[0]=x-y*c,n[4]=-f*g,n[8]=E+S*c,n[1]=S+E*c,n[5]=f*v,n[9]=y-x*c,n[2]=-f*h,n[6]=c,n[10]=f*m}else if(e.order==="ZYX"){const x=f*v,S=f*g,E=c*v,y=c*g;n[0]=m*v,n[4]=E*h-S,n[8]=x*h+y,n[1]=m*g,n[5]=y*h+x,n[9]=S*h-E,n[2]=-h,n[6]=c*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,S=f*h,E=c*m,y=c*h;n[0]=m*v,n[4]=y-x*g,n[8]=E*g+S,n[1]=g,n[5]=f*v,n[9]=-c*v,n[2]=-h*v,n[6]=S*g+E,n[10]=x-y*g}else if(e.order==="XZY"){const x=f*m,S=f*h,E=c*m,y=c*h;n[0]=m*v,n[4]=-g,n[8]=h*v,n[1]=x*g+y,n[5]=f*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=c*v,n[10]=y*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l_,e,u_)}lookAt(e,n,r){const o=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),cr.crossVectors(r,Rn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),cr.crossVectors(r,Rn)),cr.normalize(),Sl.crossVectors(Rn,cr),o[0]=cr.x,o[4]=Sl.x,o[8]=Rn.x,o[1]=cr.y,o[5]=Sl.y,o[9]=Rn.y,o[2]=cr.z,o[6]=Sl.z,o[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,f=r[0],c=r[4],m=r[8],h=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],y=r[6],_=r[10],T=r[14],A=r[3],k=r[7],L=r[11],b=r[15],F=o[0],G=o[4],M=o[8],z=o[12],K=o[1],B=o[5],de=o[9],se=o[13],q=o[2],le=o[6],te=o[10],re=o[14],W=o[3],H=o[7],j=o[11],C=o[15];return a[0]=f*F+c*K+m*q+h*W,a[4]=f*G+c*B+m*le+h*H,a[8]=f*M+c*de+m*te+h*j,a[12]=f*z+c*se+m*re+h*C,a[1]=v*F+g*K+x*q+S*W,a[5]=v*G+g*B+x*le+S*H,a[9]=v*M+g*de+x*te+S*j,a[13]=v*z+g*se+x*re+S*C,a[2]=E*F+y*K+_*q+T*W,a[6]=E*G+y*B+_*le+T*H,a[10]=E*M+y*de+_*te+T*j,a[14]=E*z+y*se+_*re+T*C,a[3]=A*F+k*K+L*q+b*W,a[7]=A*G+k*B+L*le+b*H,a[11]=A*M+k*de+L*te+b*j,a[15]=A*z+k*se+L*re+b*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],a=e[12],f=e[1],c=e[5],m=e[9],h=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],y=e[7],_=e[11],T=e[15];return E*(+a*m*g-o*h*g-a*c*x+r*h*x+o*c*S-r*m*S)+y*(+n*m*S-n*h*x+a*f*x-o*f*S+o*h*v-a*m*v)+_*(+n*h*g-n*c*S-a*f*g+r*f*S+a*c*v-r*h*v)+T*(-o*c*v-n*m*g+n*c*x+o*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],f=e[4],c=e[5],m=e[6],h=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],y=e[13],_=e[14],T=e[15],A=g*_*h-y*x*h+y*m*S-c*_*S-g*m*T+c*x*T,k=E*x*h-v*_*h-E*m*S+f*_*S+v*m*T-f*x*T,L=v*y*h-E*g*h+E*c*S-f*y*S-v*c*T+f*g*T,b=E*g*m-v*y*m-E*c*x+f*y*x+v*c*_-f*g*_,F=n*A+r*k+o*L+a*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/F;return e[0]=A*G,e[1]=(y*x*a-g*_*a-y*o*S+r*_*S+g*o*T-r*x*T)*G,e[2]=(c*_*a-y*m*a+y*o*h-r*_*h-c*o*T+r*m*T)*G,e[3]=(g*m*a-c*x*a-g*o*h+r*x*h+c*o*S-r*m*S)*G,e[4]=k*G,e[5]=(v*_*a-E*x*a+E*o*S-n*_*S-v*o*T+n*x*T)*G,e[6]=(E*m*a-f*_*a-E*o*h+n*_*h+f*o*T-n*m*T)*G,e[7]=(f*x*a-v*m*a+v*o*h-n*x*h-f*o*S+n*m*S)*G,e[8]=L*G,e[9]=(E*g*a-v*y*a-E*r*S+n*y*S+v*r*T-n*g*T)*G,e[10]=(f*y*a-E*c*a+E*r*h-n*y*h-f*r*T+n*c*T)*G,e[11]=(v*c*a-f*g*a-v*r*h+n*g*h+f*r*S-n*c*S)*G,e[12]=b*G,e[13]=(v*y*o-E*g*o+E*r*x-n*y*x-v*r*_+n*g*_)*G,e[14]=(E*c*o-f*y*o-E*r*m+n*y*m+f*r*_-n*c*_)*G,e[15]=(f*g*o-v*c*o+v*r*m-n*g*m-f*r*x+n*c*x)*G,this}scale(e){const n=this.elements,r=e.x,o=e.y,a=e.z;return n[0]*=r,n[4]*=o,n[8]*=a,n[1]*=r,n[5]*=o,n[9]*=a,n[2]*=r,n[6]*=o,n[10]*=a,n[3]*=r,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),a=1-r,f=e.x,c=e.y,m=e.z,h=a*f,v=a*c;return this.set(h*f+r,h*c-o*m,h*m+o*c,0,h*c+o*m,v*c+r,v*m-o*f,0,h*m-o*c,v*m+o*f,a*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,a,f){return this.set(1,r,a,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,a=n._x,f=n._y,c=n._z,m=n._w,h=a+a,v=f+f,g=c+c,x=a*h,S=a*v,E=a*g,y=f*v,_=f*g,T=c*g,A=m*h,k=m*v,L=m*g,b=r.x,F=r.y,G=r.z;return o[0]=(1-(y+T))*b,o[1]=(S+L)*b,o[2]=(E-k)*b,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(x+T))*F,o[6]=(_+A)*F,o[7]=0,o[8]=(E+k)*G,o[9]=(_-A)*G,o[10]=(1-(x+y))*G,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let a=As.set(o[0],o[1],o[2]).length();const f=As.set(o[4],o[5],o[6]).length(),c=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ii.copy(this);const h=1/a,v=1/f,g=1/c;return ii.elements[0]*=h,ii.elements[1]*=h,ii.elements[2]*=h,ii.elements[4]*=v,ii.elements[5]*=v,ii.elements[6]*=v,ii.elements[8]*=g,ii.elements[9]*=g,ii.elements[10]*=g,n.setFromRotationMatrix(ii),r.x=a,r.y=f,r.z=c,this}makePerspective(e,n,r,o,a,f){const c=this.elements,m=2*a/(n-e),h=2*a/(r-o),v=(n+e)/(n-e),g=(r+o)/(r-o),x=-(f+a)/(f-a),S=-2*f*a/(f-a);return c[0]=m,c[4]=0,c[8]=v,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,o,a,f){const c=this.elements,m=1/(n-e),h=1/(r-o),v=1/(f-a),g=(n+e)*m,x=(r+o)*h,S=(f+a)*v;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=-2*v,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new Q,ii=new Yt,l_=new Q(0,0,0),u_=new Q(1,1,1),cr=new Q,Sl=new Q,Rn=new Q,sm=new Yt,om=new na;class ra{constructor(e=0,n=0,r=0,o=ra.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,a=o[0],f=o[4],c=o[8],m=o[1],h=o[5],v=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,a));break;case"ZYX":this._y=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,a)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Pn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ra.DefaultOrder="XYZ";ra.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c_=0;const am=new Q,Rs=new na,Li=new Yt,wl=new Q,Go=new Q,f_=new Q,d_=new na,lm=new Q(1,0,0),um=new Q(0,1,0),cm=new Q(0,0,1),h_={type:"added"},fm={type:"removed"};class qn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DefaultUp.clone();const e=new Q,n=new ra,r=new na,o=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Hn}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=qn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?wl.copy(e):wl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Go,wl,this.up):Li.lookAt(wl,Go,this.up),this.quaternion.setFromRotationMatrix(Li),o&&(Li.extractRotation(o.matrixWorld),Rs.setFromRotationMatrix(Li),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(h_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(fm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let a=0,f=o.length;a<f;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const g=m[h];a(e.shapes,g)}else a(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,h=this.material.length;m<h;m++)c.push(a(e.materials,this.material[m]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];o.animations.push(a(e.animations,m))}}if(n){const c=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(c){const m=[];for(const h in c){const v=c[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qn.DefaultUp=new Q(0,1,0);qn.DefaultMatrixAutoUpdate=!0;const ri=new Q,Pi=new Q,tf=new Q,Di=new Q,Ls=new Q,Ps=new Q,dm=new Q,nf=new Q,rf=new Q,sf=new Q;class Ni{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ri.subVectors(e,n),o.cross(ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,r,o,a){ri.subVectors(o,n),Pi.subVectors(r,n),tf.subVectors(e,n);const f=ri.dot(ri),c=ri.dot(Pi),m=ri.dot(tf),h=Pi.dot(Pi),v=Pi.dot(tf),g=f*h-c*c;if(g===0)return a.set(-2,-1,-1);const x=1/g,S=(h*m-c*v)*x,E=(f*v-c*m)*x;return a.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Di),Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,r,o,a,f,c,m){return this.getBarycoord(e,n,r,o,Di),m.set(0,0),m.addScaledVector(a,Di.x),m.addScaledVector(f,Di.y),m.addScaledVector(c,Di.z),m}static isFrontFacing(e,n,r,o){return ri.subVectors(r,n),Pi.subVectors(e,n),ri.cross(Pi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ni.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,o,a){return Ni.getUV(e,this.a,this.b,this.c,n,r,o,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,a=this.c;let f,c;Ls.subVectors(o,r),Ps.subVectors(a,r),nf.subVectors(e,r);const m=Ls.dot(nf),h=Ps.dot(nf);if(m<=0&&h<=0)return n.copy(r);rf.subVectors(e,o);const v=Ls.dot(rf),g=Ps.dot(rf);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*h;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(Ls,f);sf.subVectors(e,a);const S=Ls.dot(sf),E=Ps.dot(sf);if(E>=0&&S<=E)return n.copy(a);const y=S*h-m*E;if(y<=0&&h>=0&&E<=0)return c=h/(h-E),n.copy(r).addScaledVector(Ps,c);const _=v*E-S*g;if(_<=0&&g-v>=0&&S-E>=0)return dm.subVectors(a,o),c=(g-v)/(g-v+(S-E)),n.copy(o).addScaledVector(dm,c);const T=1/(_+y+x);return f=y*T,c=x*T,n.copy(r).addScaledVector(Ls,f).addScaledVector(Ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let p_=0;class sa extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=js,this.side=Ko,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=eg,this.blendDst=tg,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===cx;continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Ko&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(a){const f=[];for(const c in a){const m=a[c];delete m.metadata,f.push(m)}return f}if(n){const a=o(e.textures),f=o(e.images);a.length>0&&(r.textures=a),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ff extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new Q,Ml=new Qe;class Dn{constructor(e,n,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r===!0,this.usage=Jp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),f=new ft),n[r++]=f.r,n[r++]=f.g,n[r++]=f.b}return this}copyVector2sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),f=new Qe),n[r++]=f.x,n[r++]=f.y}return this}copyVector3sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),f=new Q),n[r++]=f.x,n[r++]=f.y,n[r++]=f.z}return this}copyVector4sArray(e){const n=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let f=e[o];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),f=new $t),n[r++]=f.x,n[r++]=f.y,n[r++]=f.z,n[r++]=f.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,a){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dg extends Dn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class hg extends Dn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class En extends Dn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let m_=0;const Bn=new Yt,of=new qn,Ds=new Q,Ln=new ia,Vo=new ia,Xt=new Q;class Xn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?hg:dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Hn().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,r){return Bn.makeTranslation(e,n,r),this.applyMatrix4(Bn),this}scale(e,n,r){return Bn.makeScale(e,n,r),this.applyMatrix4(Bn),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new En(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let a=0,f=n.length;a<f;a++){const c=n[a];Vo.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(Ln.min,Vo.min),Ln.expandByPoint(Xt),Xt.addVectors(Ln.max,Vo.max),Ln.expandByPoint(Xt)):(Ln.expandByPoint(Vo.min),Ln.expandByPoint(Vo.max))}Ln.getCenter(r);let o=0;for(let a=0,f=e.count;a<f;a++)Xt.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Xt));if(n)for(let a=0,f=n.length;a<f;a++){const c=n[a],m=this.morphTargetsRelative;for(let h=0,v=c.count;h<v;h++)Xt.fromBufferAttribute(c,h),m&&(Ds.fromBufferAttribute(e,h),Xt.add(Ds)),o=Math.max(o,r.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=n.position.array,a=n.normal.array,f=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,h=[],v=[];for(let K=0;K<c;K++)h[K]=new Q,v[K]=new Q;const g=new Q,x=new Q,S=new Q,E=new Qe,y=new Qe,_=new Qe,T=new Q,A=new Q;function k(K,B,de){g.fromArray(o,K*3),x.fromArray(o,B*3),S.fromArray(o,de*3),E.fromArray(f,K*2),y.fromArray(f,B*2),_.fromArray(f,de*2),x.sub(g),S.sub(g),y.sub(E),_.sub(E);const se=1/(y.x*_.y-_.x*y.y);isFinite(se)&&(T.copy(x).multiplyScalar(_.y).addScaledVector(S,-y.y).multiplyScalar(se),A.copy(S).multiplyScalar(y.x).addScaledVector(x,-_.x).multiplyScalar(se),h[K].add(T),h[B].add(T),h[de].add(T),v[K].add(A),v[B].add(A),v[de].add(A))}let L=this.groups;L.length===0&&(L=[{start:0,count:r.length}]);for(let K=0,B=L.length;K<B;++K){const de=L[K],se=de.start,q=de.count;for(let le=se,te=se+q;le<te;le+=3)k(r[le+0],r[le+1],r[le+2])}const b=new Q,F=new Q,G=new Q,M=new Q;function z(K){G.fromArray(a,K*3),M.copy(G);const B=h[K];b.copy(B),b.sub(G.multiplyScalar(G.dot(B))).normalize(),F.crossVectors(M,B);const se=F.dot(v[K])<0?-1:1;m[K*4]=b.x,m[K*4+1]=b.y,m[K*4+2]=b.z,m[K*4+3]=se}for(let K=0,B=L.length;K<B;++K){const de=L[K],se=de.start,q=de.count;for(let le=se,te=se+q;le<te;le+=3)z(r[le+0]),z(r[le+1]),z(r[le+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new Q,a=new Q,f=new Q,c=new Q,m=new Q,h=new Q,v=new Q,g=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),y=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(n,E),a.fromBufferAttribute(n,y),f.fromBufferAttribute(n,_),v.subVectors(f,a),g.subVectors(o,a),v.cross(g),c.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),h.fromBufferAttribute(r,_),c.add(v),m.add(v),h.add(v),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(y,m.x,m.y,m.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),a.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,a),g.subVectors(o,a),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(e.attributes[o]===void 0)continue;const f=r[o].array,c=e.attributes[o],m=c.array,h=c.itemSize*n,v=Math.min(m.length,f.length-h);for(let g=0,x=h;g<v;g++,x++)f[x]=m[g]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,m){const h=c.array,v=c.itemSize,g=c.normalized,x=new h.constructor(m.length*v);let S=0,E=0;for(let y=0,_=m.length;y<_;y++){c.isInterleavedBufferAttribute?S=m[y]*c.data.stride+c.offset:S=m[y]*v;for(let T=0;T<v;T++)x[E++]=h[S++]}return new Dn(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,r=this.index.array,o=this.attributes;for(const c in o){const m=o[c],h=e(m,r);n.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const m=[],h=a[c];for(let v=0,g=h.length;v<g;v++){const x=h[v],S=e(x,r);m.push(S)}n.morphAttributes[c]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,m=f.length;c<m;c++){const h=f[c];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let a=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let g=0,x=h.length;g<x;g++){const S=h[g];v.push(S.toJSON(e.data))}v.length>0&&(o[m]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const a=e.morphAttributes;for(const h in a){const v=[],g=a[h];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const g=f[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Yt,Is=new cg,af=new $l,fr=new Q,dr=new Q,hr=new Q,lf=new Q,uf=new Q,cf=new Q,El=new Q,Tl=new Q,bl=new Q,Cl=new Qe,Al=new Qe,Rl=new Qe,ff=new Q,Ll=new Q;class Fi extends qn{constructor(e=new Xn,n=new Ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=o.length;a<f;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(e,n){const r=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),af.copy(r.boundingSphere),af.applyMatrix4(a),e.ray.intersectsSphere(af)===!1)||(hm.copy(a).invert(),Is.copy(e.ray).applyMatrix4(hm),r.boundingBox!==null&&Is.intersectsBox(r.boundingBox)===!1))return;let f;const c=r.index,m=r.attributes.position,h=r.morphAttributes.position,v=r.morphTargetsRelative,g=r.attributes.uv,x=r.attributes.uv2,S=r.groups,E=r.drawRange;if(c!==null)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const T=S[y],A=o[T.materialIndex],k=Math.max(T.start,E.start),L=Math.min(c.count,Math.min(T.start+T.count,E.start+E.count));for(let b=k,F=L;b<F;b+=3){const G=c.getX(b),M=c.getX(b+1),z=c.getX(b+2);f=Pl(this,A,e,Is,m,h,v,g,x,G,M,z),f&&(f.faceIndex=Math.floor(b/3),f.face.materialIndex=T.materialIndex,n.push(f))}}else{const y=Math.max(0,E.start),_=Math.min(c.count,E.start+E.count);for(let T=y,A=_;T<A;T+=3){const k=c.getX(T),L=c.getX(T+1),b=c.getX(T+2);f=Pl(this,o,e,Is,m,h,v,g,x,k,L,b),f&&(f.faceIndex=Math.floor(T/3),n.push(f))}}else if(m!==void 0)if(Array.isArray(o))for(let y=0,_=S.length;y<_;y++){const T=S[y],A=o[T.materialIndex],k=Math.max(T.start,E.start),L=Math.min(m.count,Math.min(T.start+T.count,E.start+E.count));for(let b=k,F=L;b<F;b+=3){const G=b,M=b+1,z=b+2;f=Pl(this,A,e,Is,m,h,v,g,x,G,M,z),f&&(f.faceIndex=Math.floor(b/3),f.face.materialIndex=T.materialIndex,n.push(f))}}else{const y=Math.max(0,E.start),_=Math.min(m.count,E.start+E.count);for(let T=y,A=_;T<A;T+=3){const k=T,L=T+1,b=T+2;f=Pl(this,o,e,Is,m,h,v,g,x,k,L,b),f&&(f.faceIndex=Math.floor(T/3),n.push(f))}}}}function g_(u,e,n,r,o,a,f,c){let m;if(e.side===li?m=r.intersectTriangle(f,a,o,!0,c):m=r.intersectTriangle(o,a,f,e.side!==Ys,c),m===null)return null;Ll.copy(c),Ll.applyMatrix4(u.matrixWorld);const h=n.ray.origin.distanceTo(Ll);return h<n.near||h>n.far?null:{distance:h,point:Ll.clone(),object:u}}function Pl(u,e,n,r,o,a,f,c,m,h,v,g){fr.fromBufferAttribute(o,h),dr.fromBufferAttribute(o,v),hr.fromBufferAttribute(o,g);const x=u.morphTargetInfluences;if(a&&x){El.set(0,0,0),Tl.set(0,0,0),bl.set(0,0,0);for(let E=0,y=a.length;E<y;E++){const _=x[E],T=a[E];_!==0&&(lf.fromBufferAttribute(T,h),uf.fromBufferAttribute(T,v),cf.fromBufferAttribute(T,g),f?(El.addScaledVector(lf,_),Tl.addScaledVector(uf,_),bl.addScaledVector(cf,_)):(El.addScaledVector(lf.sub(fr),_),Tl.addScaledVector(uf.sub(dr),_),bl.addScaledVector(cf.sub(hr),_)))}fr.add(El),dr.add(Tl),hr.add(bl)}u.isSkinnedMesh&&(u.boneTransform(h,fr),u.boneTransform(v,dr),u.boneTransform(g,hr));const S=g_(u,e,n,r,fr,dr,hr,ff);if(S){c&&(Cl.fromBufferAttribute(c,h),Al.fromBufferAttribute(c,v),Rl.fromBufferAttribute(c,g),S.uv=Ni.getUV(ff,fr,dr,hr,Cl,Al,Rl,new Qe)),m&&(Cl.fromBufferAttribute(m,h),Al.fromBufferAttribute(m,v),Rl.fromBufferAttribute(m,g),S.uv2=Ni.getUV(ff,fr,dr,hr,Cl,Al,Rl,new Qe));const E={a:h,b:v,c:g,normal:new Q,materialIndex:0};Ni.getNormal(fr,dr,hr,E.normal),S.face=E}return S}class oa extends Xn{constructor(e=1,n=1,r=1,o=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:a,depthSegments:f};const c=this;o=Math.floor(o),a=Math.floor(a),f=Math.floor(f);const m=[],h=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,a,0),E("z","y","x",1,-1,r,n,-e,f,a,1),E("x","z","y",1,1,e,r,n,o,f,2),E("x","z","y",1,-1,e,r,-n,o,f,3),E("x","y","z",1,-1,e,n,r,o,a,4),E("x","y","z",-1,-1,e,n,-r,o,a,5),this.setIndex(m),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2));function E(y,_,T,A,k,L,b,F,G,M,z){const K=L/G,B=b/M,de=L/2,se=b/2,q=F/2,le=G+1,te=M+1;let re=0,W=0;const H=new Q;for(let j=0;j<te;j++){const C=j*B-se;for(let O=0;O<le;O++){const Y=O*K-de;H[y]=Y*A,H[_]=C*k,H[T]=q,h.push(H.x,H.y,H.z),H[y]=0,H[_]=0,H[T]=F>0?1:-1,v.push(H.x,H.y,H.z),g.push(O/G),g.push(1-j/M),re+=1}}for(let j=0;j<M;j++)for(let C=0;C<G;C++){const O=x+C+le*j,Y=x+C+le*(j+1),he=x+(C+1)+le*(j+1),ve=x+(C+1)+le*j;m.push(O,Y,ve),m.push(Y,he,ve),W+=6}c.addGroup(S,W,z),S+=W,x+=re}}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(u){const e={};for(const n in u){e[n]={};for(const r in u[n]){const o=u[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function an(u){const e={};for(let n=0;n<u.length;n++){const r=Js(u[n]);for(const o in r)e[o]=r[o]}return e}function v_(u){const e=[];for(let n=0;n<u.length;n++)e.push(u[n].clone());return e}const Hl={clone:Js,merge:an};var x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class pg extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wn extends pg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,o,a,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,a=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;a+=f.offsetX*o/m,n-=f.offsetY*r/h,o*=f.width/m,r*=f.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=90,ks=1;class y_ extends qn{constructor(e,n,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new Wn(Ns,ks,e,n);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new Q(1,0,0)),this.add(o);const a=new Wn(Ns,ks,e,n);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Q(-1,0,0)),this.add(a);const f=new Wn(Ns,ks,e,n);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new Q(0,1,0)),this.add(f);const c=new Wn(Ns,ks,e,n);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new Q(0,-1,0)),this.add(c);const m=new Wn(Ns,ks,e,n);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new Q(0,0,1)),this.add(m);const h=new Wn(Ns,ks,e,n);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new Q(0,0,-1)),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,a,f,c,m,h]=this.children,v=e.getRenderTarget(),g=e.toneMapping,x=e.xr.enabled;e.toneMapping=zi,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,o),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,f),e.setRenderTarget(r,3),e.render(n,c),e.setRenderTarget(r,4),e.render(n,m),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(n,h),e.setRenderTarget(v),e.toneMapping=g,e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class mg extends jn{constructor(e,n,r,o,a,f,c,m,h,v){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,r,o,a,f,c,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends ui{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oa(5,5,5),a=new hn({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:xr});a.uniforms.tEquirect.value=n;const f=new Fi(o,a),c=n.minFilter;return n.minFilter===Xl&&(n.minFilter=Vn),new y_(1,10,this).update(e,f),n.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,o){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(a)}}const df=new Q,w_=new Q,M_=new Hn;class Ur{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=df.subVectors(r,n).cross(w_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const r=e.delta(df),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(r).multiplyScalar(a).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||M_.getNormalMatrix(e),o=this.coplanarPoint(df).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new $l,Dl=new Q;class gg{constructor(e=new Ur,n=new Ur,r=new Ur,o=new Ur,a=new Ur,f=new Ur){this.planes=[e,n,r,o,a,f]}set(e,n,r,o,a,f){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const n=this.planes,r=e.elements,o=r[0],a=r[1],f=r[2],c=r[3],m=r[4],h=r[5],v=r[6],g=r[7],x=r[8],S=r[9],E=r[10],y=r[11],_=r[12],T=r[13],A=r[14],k=r[15];return n[0].setComponents(c-o,g-m,y-x,k-_).normalize(),n[1].setComponents(c+o,g+m,y+x,k+_).normalize(),n[2].setComponents(c+a,g+h,y+S,k+T).normalize(),n[3].setComponents(c-a,g-h,y-S,k-T).normalize(),n[4].setComponents(c-f,g-v,y-E,k-A).normalize(),n[5].setComponents(c+f,g+v,y+E,k+A).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vg(){let u=null,e=!1,n=null,r=null;function o(a,f){n(a,f),r=u.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=u.requestAnimationFrame(o),e=!0)},stop:function(){u.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){u=a}}}function E_(u,e){const n=e.isWebGL2,r=new WeakMap;function o(h,v){const g=h.array,x=h.usage,S=u.createBuffer();u.bindBuffer(v,S),u.bufferData(v,g,x),h.onUploadCallback();let E;if(g instanceof Float32Array)E=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(g instanceof Int16Array)E=5122;else if(g instanceof Uint32Array)E=5125;else if(g instanceof Int32Array)E=5124;else if(g instanceof Int8Array)E=5120;else if(g instanceof Uint8Array)E=5121;else if(g instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function a(h,v,g){const x=v.array,S=v.updateRange;u.bindBuffer(g,h),S.count===-1?u.bufferSubData(g,0,x):(n?u.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):u.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=r.get(h);v&&(u.deleteBuffer(v.buffer),r.delete(h))}function m(h,v){if(h.isGLBufferAttribute){const x=r.get(h);(!x||x.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=r.get(h);g===void 0?r.set(h,o(h,v)):g.version<h.version&&(a(g.buffer,h,v),g.version=h.version)}return{get:f,remove:c,update:m}}class zf extends Xn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const a=e/2,f=n/2,c=Math.floor(r),m=Math.floor(o),h=c+1,v=m+1,g=e/c,x=n/m,S=[],E=[],y=[],_=[];for(let T=0;T<v;T++){const A=T*x-f;for(let k=0;k<h;k++){const L=k*g-a;E.push(L,-A,0),y.push(0,0,1),_.push(k/c),_.push(1-T/m)}}for(let T=0;T<m;T++)for(let A=0;A<c;A++){const k=A+h*T,L=A+h*(T+1),b=A+1+h*(T+1),F=A+1+h*T;S.push(k,L,F),S.push(L,b,F)}this.setIndex(S),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(_,2))}static fromJSON(e){return new zf(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,b_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_="vec3 transformed = vec3( position );",D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
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
}`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J_=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`vec3 diffuse = vec3( 1.0 );
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
#endif`,dy=`uniform bool receiveShadow;
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
#endif`,hy=`#if defined( USE_ENVMAP )
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,xy=`PhysicalMaterial material;
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
#endif`,_y=`struct PhysicalMaterial {
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
}`,yy=`
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Oy=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tS=`#ifdef USE_SHADOWMAP
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
#endif`,nS=`#ifdef USE_SHADOWMAP
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
#endif`,iS=`#ifdef USE_SHADOWMAP
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
#endif`,rS=`float getShadowMask() {
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
}`,sS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,aS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#ifdef USE_TRANSMISSION
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
#endif`,mS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_S=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#include <envmap_common_pars_fragment>
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
}`,bS=`#include <common>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
}`,AS=`#define DISTANCE
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
}`,RS=`#define DISTANCE
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DS=`uniform float scale;
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
}`,IS=`uniform vec3 diffuse;
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
}`,NS=`#include <common>
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
}`,kS=`uniform vec3 diffuse;
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
}`,FS=`#define LAMBERT
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
}`,zS=`uniform vec3 diffuse;
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
}`,OS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,BS=`#define NORMAL
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
}`,GS=`#define NORMAL
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
}`,VS=`#define PHONG
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
}`,WS=`#define PHONG
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
}`,HS=`#define STANDARD
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
}`,jS=`#define STANDARD
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
}`,qS=`#define TOON
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
}`,XS=`#define TOON
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
}`,$S=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,ZS=`uniform vec3 color;
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
}`,QS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,tt={alphamap_fragment:T_,alphamap_pars_fragment:b_,alphatest_fragment:C_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:L_,begin_vertex:P_,beginnormal_vertex:D_,bsdfs:I_,iridescence_fragment:N_,bumpmap_pars_fragment:k_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:U_,color_fragment:B_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:H_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:q_,displacementmap_pars_vertex:X_,displacementmap_vertex:$_,emissivemap_fragment:Y_,emissivemap_pars_fragment:K_,encodings_fragment:Z_,encodings_pars_fragment:Q_,envmap_fragment:J_,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:hy,envmap_vertex:iy,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:ly,lightmap_fragment:uy,lightmap_pars_fragment:cy,lights_lambert_vertex:fy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:_y,lights_fragment_begin:yy,lights_fragment_maps:Sy,lights_fragment_end:wy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:by,map_fragment:Cy,map_pars_fragment:Ay,map_particle_fragment:Ry,map_particle_pars_fragment:Ly,metalnessmap_fragment:Py,metalnessmap_pars_fragment:Dy,morphcolor_vertex:Iy,morphnormal_vertex:Ny,morphtarget_pars_vertex:ky,morphtarget_vertex:Fy,normal_fragment_begin:zy,normal_fragment_maps:Oy,normal_pars_fragment:Uy,normal_pars_vertex:By,normal_vertex:Gy,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:qy,output_fragment:Xy,packing:$y,premultiplied_alpha_fragment:Yy,project_vertex:Ky,dithering_fragment:Zy,dithering_pars_fragment:Qy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:eS,shadowmap_pars_fragment:tS,shadowmap_pars_vertex:nS,shadowmap_vertex:iS,shadowmask_pars_fragment:rS,skinbase_vertex:sS,skinning_pars_vertex:oS,skinning_vertex:aS,skinnormal_vertex:lS,specularmap_fragment:uS,specularmap_pars_fragment:cS,tonemapping_fragment:fS,tonemapping_pars_fragment:dS,transmission_fragment:hS,transmission_pars_fragment:pS,uv_pars_fragment:mS,uv_pars_vertex:gS,uv_vertex:vS,uv2_pars_fragment:xS,uv2_pars_vertex:_S,uv2_vertex:yS,worldpos_vertex:SS,background_vert:wS,background_frag:MS,cube_vert:ES,cube_frag:TS,depth_vert:bS,depth_frag:CS,distanceRGBA_vert:AS,distanceRGBA_frag:RS,equirect_vert:LS,equirect_frag:PS,linedashed_vert:DS,linedashed_frag:IS,meshbasic_vert:NS,meshbasic_frag:kS,meshlambert_vert:FS,meshlambert_frag:zS,meshmatcap_vert:OS,meshmatcap_frag:US,meshnormal_vert:BS,meshnormal_frag:GS,meshphong_vert:VS,meshphong_frag:WS,meshphysical_vert:HS,meshphysical_frag:jS,meshtoon_vert:qS,meshtoon_frag:XS,points_vert:$S,points_frag:YS,shadow_vert:KS,shadow_frag:ZS,sprite_vert:QS,sprite_frag:JS},Ce={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Hn},uv2Transform:{value:new Hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Hn}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Hn}}},vi={basic:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:an([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:an([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:an([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:an([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:an([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:an([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Hn},t2D:{value:null}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},cube:{uniforms:an([Ce.envmap,{opacity:{value:1}}]),vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:an([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:an([Ce.lights,Ce.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};vi.physical={uniforms:an([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};function ew(u,e,n,r,o,a){const f=new ft(0);let c=o===!0?0:1,m,h,v=null,g=0,x=null;function S(y,_){let T=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=e.get(A));const k=u.xr,L=k.getSession&&k.getSession();L&&L.environmentBlendMode==="additive"&&(A=null),A===null?E(f,c):A&&A.isColor&&(E(A,1),T=!0),(u.autoClear||T)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),A&&(A.isCubeTexture||A.mapping===ql)?(h===void 0&&(h=new Fi(new oa(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Js(vi.cube.uniforms),vertexShader:vi.cube.vertexShader,fragmentShader:vi.cube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(v!==A||g!==A.version||x!==u.toneMapping)&&(h.material.needsUpdate=!0,v=A,g=A.version,x=u.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Fi(new zf(2,2),new hn({name:"BackgroundMaterial",uniforms:Js(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ko,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||g!==A.version||x!==u.toneMapping)&&(m.material.needsUpdate=!0,v=A,g=A.version,x=u.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function E(y,_){n.buffers.color.setClear(y.r,y.g,y.b,_,a)}return{getClearColor:function(){return f},setClearColor:function(y,_=1){f.set(y),c=_,E(f,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,E(f,c)},render:S}}function tw(u,e,n,r){const o=u.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||a!==null,c={},m=_(null);let h=m,v=!1;function g(q,le,te,re,W){let H=!1;if(f){const j=y(re,te,le);h!==j&&(h=j,S(h.object)),H=T(q,re,te,W),H&&A(q,re,te,W)}else{const j=le.wireframe===!0;(h.geometry!==re.id||h.program!==te.id||h.wireframe!==j)&&(h.geometry=re.id,h.program=te.id,h.wireframe=j,H=!0)}W!==null&&n.update(W,34963),(H||v)&&(v=!1,M(q,le,te,re),W!==null&&u.bindBuffer(34963,n.get(W).buffer))}function x(){return r.isWebGL2?u.createVertexArray():a.createVertexArrayOES()}function S(q){return r.isWebGL2?u.bindVertexArray(q):a.bindVertexArrayOES(q)}function E(q){return r.isWebGL2?u.deleteVertexArray(q):a.deleteVertexArrayOES(q)}function y(q,le,te){const re=te.wireframe===!0;let W=c[q.id];W===void 0&&(W={},c[q.id]=W);let H=W[le.id];H===void 0&&(H={},W[le.id]=H);let j=H[re];return j===void 0&&(j=_(x()),H[re]=j),j}function _(q){const le=[],te=[],re=[];for(let W=0;W<o;W++)le[W]=0,te[W]=0,re[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:le,enabledAttributes:te,attributeDivisors:re,object:q,attributes:{},index:null}}function T(q,le,te,re){const W=h.attributes,H=le.attributes;let j=0;const C=te.getAttributes();for(const O in C)if(C[O].location>=0){const he=W[O];let ve=H[O];if(ve===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(ve=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(ve=q.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;j++}return h.attributesNum!==j||h.index!==re}function A(q,le,te,re){const W={},H=le.attributes;let j=0;const C=te.getAttributes();for(const O in C)if(C[O].location>=0){let he=H[O];he===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(he=q.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),W[O]=ve,j++}h.attributes=W,h.attributesNum=j,h.index=re}function k(){const q=h.newAttributes;for(let le=0,te=q.length;le<te;le++)q[le]=0}function L(q){b(q,0)}function b(q,le){const te=h.newAttributes,re=h.enabledAttributes,W=h.attributeDivisors;te[q]=1,re[q]===0&&(u.enableVertexAttribArray(q),re[q]=1),W[q]!==le&&((r.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,le),W[q]=le)}function F(){const q=h.newAttributes,le=h.enabledAttributes;for(let te=0,re=le.length;te<re;te++)le[te]!==q[te]&&(u.disableVertexAttribArray(te),le[te]=0)}function G(q,le,te,re,W,H){r.isWebGL2===!0&&(te===5124||te===5125)?u.vertexAttribIPointer(q,le,te,W,H):u.vertexAttribPointer(q,le,te,re,W,H)}function M(q,le,te,re){if(r.isWebGL2===!1&&(q.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;k();const W=re.attributes,H=te.getAttributes(),j=le.defaultAttributeValues;for(const C in H){const O=H[C];if(O.location>=0){let Y=W[C];if(Y===void 0&&(C==="instanceMatrix"&&q.instanceMatrix&&(Y=q.instanceMatrix),C==="instanceColor"&&q.instanceColor&&(Y=q.instanceColor)),Y!==void 0){const he=Y.normalized,ve=Y.itemSize,$=n.get(Y);if($===void 0)continue;const _e=$.buffer,ye=$.type,we=$.bytesPerElement;if(Y.isInterleavedBufferAttribute){const Se=Y.data,je=Se.stride,Ge=Y.offset;if(Se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<O.locationSize;Ie++)b(O.location+Ie,Se.meshPerAttribute);q.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)L(O.location+Ie);u.bindBuffer(34962,_e);for(let Ie=0;Ie<O.locationSize;Ie++)G(O.location+Ie,ve/O.locationSize,ye,he,je*we,(Ge+ve/O.locationSize*Ie)*we)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<O.locationSize;Se++)b(O.location+Se,Y.meshPerAttribute);q.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<O.locationSize;Se++)L(O.location+Se);u.bindBuffer(34962,_e);for(let Se=0;Se<O.locationSize;Se++)G(O.location+Se,ve/O.locationSize,ye,he,ve*we,ve/O.locationSize*Se*we)}}else if(j!==void 0){const he=j[C];if(he!==void 0)switch(he.length){case 2:u.vertexAttrib2fv(O.location,he);break;case 3:u.vertexAttrib3fv(O.location,he);break;case 4:u.vertexAttrib4fv(O.location,he);break;default:u.vertexAttrib1fv(O.location,he)}}}}F()}function z(){de();for(const q in c){const le=c[q];for(const te in le){const re=le[te];for(const W in re)E(re[W].object),delete re[W];delete le[te]}delete c[q]}}function K(q){if(c[q.id]===void 0)return;const le=c[q.id];for(const te in le){const re=le[te];for(const W in re)E(re[W].object),delete re[W];delete le[te]}delete c[q.id]}function B(q){for(const le in c){const te=c[le];if(te[q.id]===void 0)continue;const re=te[q.id];for(const W in re)E(re[W].object),delete re[W];delete te[q.id]}}function de(){se(),v=!0,h!==m&&(h=m,S(h.object))}function se(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:g,reset:de,resetDefaultState:se,dispose:z,releaseStatesOfGeometry:K,releaseStatesOfProgram:B,initAttributes:k,enableAttribute:L,disableUnusedAttributes:F}}function nw(u,e,n,r){const o=r.isWebGL2;let a;function f(h){a=h}function c(h,v){u.drawArrays(a,h,v),n.update(v,a,1)}function m(h,v,g){if(g===0)return;let x,S;if(o)x=u,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](a,h,v,g),n.update(v,a,g)}this.setMode=f,this.render=c,this.renderInstances=m}function iw(u,e,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");r=u.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(G){if(G==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";G="mediump"}return G==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&u instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&u instanceof WebGL2ComputeRenderingContext;let c=n.precision!==void 0?n.precision:"highp";const m=a(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const h=f||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,g=u.getParameter(34930),x=u.getParameter(35660),S=u.getParameter(3379),E=u.getParameter(34076),y=u.getParameter(34921),_=u.getParameter(36347),T=u.getParameter(36348),A=u.getParameter(36349),k=x>0,L=f||e.has("OES_texture_float"),b=k&&L,F=f?u.getParameter(36183):0;return{isWebGL2:f,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:v,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:k,floatFragmentTextures:L,floatVertexTextures:b,maxSamples:F}}function rw(u){const e=this;let n=null,r=0,o=!1,a=!1;const f=new Ur,c=new Hn,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x,S){const E=g.length!==0||x||r!==0||o;return o=x,n=v(g,S,0),r=g.length,E},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1,h()},this.setState=function(g,x,S){const E=g.clippingPlanes,y=g.clipIntersection,_=g.clipShadows,T=u.get(g);if(!o||E===null||E.length===0||a&&!_)a?v(null):h();else{const A=a?0:r,k=A*4;let L=T.clippingState||null;m.value=L,L=v(E,x,k,S);for(let b=0;b!==k;++b)L[b]=n[b];T.clippingState=L,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const y=g!==null?g.length:0;let _=null;if(y!==0){if(_=m.value,E!==!0||_===null){const T=S+y*4,A=x.matrixWorldInverse;c.getNormalMatrix(A),(_===null||_.length<T)&&(_=new Float32Array(T));for(let k=0,L=S;k!==y;++k,L+=4)f.copy(g[k]).applyMatrix4(A,c),f.normal.toArray(_,L),_[L+3]=f.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function sw(u){let e=new WeakMap;function n(f,c){return c===wf?f.mapping=Ks:c===Mf&&(f.mapping=Zs),f}function r(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===wf||c===Mf)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new S_(m.height/2);return h.fromEquirectangularTexture(u,f),e.set(f,h),f.addEventListener("dispose",o),n(h.texture,f.mapping)}else return null}}return f}function o(f){const c=f.target;c.removeEventListener("dispose",o);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Of extends pg{constructor(e=-1,n=1,r=1,o=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,f=r+e,c=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,f=a+h*this.view.width,c-=v*this.view.offsetY,m=c-v*this.view.height}this.projectionMatrix.makeOrthographic(a,f,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,pm=[.125,.215,.35,.446,.526,.582],Gr=20,hf=new Of,mm=new ft;let pf=null;const Br=(1+Math.sqrt(5))/2,zs=1/Br,gm=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Br,zs),new Q(0,Br,-zs),new Q(zs,0,Br),new Q(-zs,0,Br),new Q(Br,zs,0),new Q(-Br,zs,0)];class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){pf=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf),e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Qo,format:ai,encoding:Jr,depthBuffer:!1},o=xm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(a)),this._blurMaterial=aw(a,e,n)}return o}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,hf)}_sceneToCubeUV(e,n,r,o){const c=new Wn(90,1,n,r),m=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(mm),v.toneMapping=zi,v.autoClear=!1;const S=new Ff({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),E=new Fi(new oa,S);let y=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,y=!0):(S.color.copy(mm),y=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(c.up.set(0,m[T],0),c.lookAt(h[T],0,0)):A===1?(c.up.set(0,0,m[T]),c.lookAt(0,h[T],0)):(c.up.set(0,m[T],0),c.lookAt(0,0,h[T]));const k=this._cubeSize;Il(o,A*k,T>2?k:0,k,k),v.setRenderTarget(o),y&&v.render(E,c),v.render(e,c)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Ks||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const a=o?this._cubemapMaterial:this._equirectMaterial,f=new Fi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const m=this._cubeSize;Il(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,hf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=gm[(o-1)%gm.length];this._blur(e,o-1,o,a,f)}n.autoClear=r}_blur(e,n,r,o,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",a),this._halfBlur(f,e,r,r,o,"longitudinal",a)}_halfBlur(e,n,r,o,a,f,c){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Fi(this._lodPlanes[o],h),x=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),y=a/E,_=isFinite(a)?1+Math.floor(v*y):Gr;_>Gr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gr}`);const T=[];let A=0;for(let G=0;G<Gr;++G){const M=G/y,z=Math.exp(-M*M/2);T.push(z),G===0?A+=z:G<_&&(A+=2*z)}for(let G=0;G<T.length;G++)T[G]=T[G]/A;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=T,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:k}=this;x.dTheta.value=E,x.mipInt.value=k-r;const L=this._sizeLods[o],b=3*L*(o>k-Ws?o-k+Ws:0),F=4*(this._cubeSize-L);Il(n,b,F,3*L,2*L),m.setRenderTarget(n),m.render(g,hf)}}function ow(u){const e=[],n=[],r=[];let o=u;const a=u-Ws+1+pm.length;for(let f=0;f<a;f++){const c=Math.pow(2,o);n.push(c);let m=1/c;f>u-Ws?m=pm[f-u+Ws-1]:f===0&&(m=0),r.push(m);const h=1/(c-2),v=-h,g=1+h,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,y=3,_=2,T=1,A=new Float32Array(y*E*S),k=new Float32Array(_*E*S),L=new Float32Array(T*E*S);for(let F=0;F<S;F++){const G=F%3*2/3-1,M=F>2?0:-1,z=[G,M,0,G+2/3,M,0,G+2/3,M+1,0,G,M,0,G+2/3,M+1,0,G,M+1,0];A.set(z,y*E*F),k.set(x,_*E*F);const K=[F,F,F,F,F,F];L.set(K,T*E*F)}const b=new Xn;b.setAttribute("position",new Dn(A,y)),b.setAttribute("uv",new Dn(k,_)),b.setAttribute("faceIndex",new Dn(L,T)),e.push(b),o>Ws&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function xm(u,e,n){const r=new ui(u,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(u,e,n,r,o){u.viewport.set(e,n,r,o),u.scissor.set(e,n,r,o)}function aw(u,e,n){const r=new Float32Array(Gr),o=new Q(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function _m(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ym(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Uf(){return`

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
	`}function lw(u){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const m=c.mapping,h=m===wf||m===Mf,v=m===Ks||m===Zs;if(h||v)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return n===null&&(n=new vm(u)),g=h?n.fromEquirectangular(c,g):n.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||v&&g&&o(g)){n===null&&(n=new vm(u));const x=h?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",a),x.texture}else return null}}}return c}function o(c){let m=0;const h=6;for(let v=0;v<h;v++)c[v]!==void 0&&m++;return m===h}function a(c){const m=c.target;m.removeEventListener("dispose",a);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function uw(u){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const o=n(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function cw(u,e,n,r){const o={},a=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete o[x.id];const S=a.get(x);S&&(e.remove(S),a.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function c(g,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)e.update(x[E],34962);const S=g.morphAttributes;for(const E in S){const y=S[E];for(let _=0,T=y.length;_<T;_++)e.update(y[_],34962)}}function h(g){const x=[],S=g.index,E=g.attributes.position;let y=0;if(S!==null){const A=S.array;y=S.version;for(let k=0,L=A.length;k<L;k+=3){const b=A[k+0],F=A[k+1],G=A[k+2];x.push(b,F,F,G,G,b)}}else{const A=E.array;y=E.version;for(let k=0,L=A.length/3-1;k<L;k+=3){const b=k+0,F=k+1,G=k+2;x.push(b,F,F,G,G,b)}}const _=new(sg(x)?hg:dg)(x,1);_.version=y;const T=a.get(g);T&&e.remove(T),a.set(g,_)}function v(g){const x=a.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:m,getWireframeAttribute:v}}function fw(u,e,n,r){const o=r.isWebGL2;let a;function f(x){a=x}let c,m;function h(x){c=x.type,m=x.bytesPerElement}function v(x,S){u.drawElements(a,S,c,x*m),n.update(S,a,1)}function g(x,S,E){if(E===0)return;let y,_;if(o)y=u,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](a,S,c,x*m,E),n.update(S,a,E)}this.setMode=f,this.setIndex=h,this.render=v,this.renderInstances=g}function dw(u){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,f,c){switch(n.calls++,f){case 4:n.triangles+=c*(a/3);break;case 1:n.lines+=c*(a/2);break;case 3:n.lines+=c*(a-1);break;case 2:n.lines+=c*a;break;case 0:n.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function hw(u,e){return u[0]-e[0]}function pw(u,e){return Math.abs(e[1])-Math.abs(u[1])}function mf(u,e){let n=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?n=127:r instanceof Uint8Array?n=255:r instanceof Uint16Array?n=65535:r instanceof Int16Array?n=32767:r instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),u.divideScalar(n)}function mw(u,e,n){const r={},o=new Float32Array(8),a=new WeakMap,f=new $t,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function m(h,v,g,x){const S=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,_=y!==void 0?y.length:0;let T=a.get(v);if(T===void 0||T.count!==_){let te=function(){q.dispose(),a.delete(v),v.removeEventListener("dispose",te)};var E=te;T!==void 0&&T.texture.dispose();const L=v.morphAttributes.position!==void 0,b=v.morphAttributes.normal!==void 0,F=v.morphAttributes.color!==void 0,G=v.morphAttributes.position||[],M=v.morphAttributes.normal||[],z=v.morphAttributes.color||[];let K=0;L===!0&&(K=1),b===!0&&(K=2),F===!0&&(K=3);let B=v.attributes.position.count*K,de=1;B>e.maxTextureSize&&(de=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const se=new Float32Array(B*de*4*_),q=new ug(se,B,de,_);q.type=jr,q.needsUpdate=!0;const le=K*4;for(let re=0;re<_;re++){const W=G[re],H=M[re],j=z[re],C=B*de*4*re;for(let O=0;O<W.count;O++){const Y=O*le;L===!0&&(f.fromBufferAttribute(W,O),W.normalized===!0&&mf(f,W),se[C+Y+0]=f.x,se[C+Y+1]=f.y,se[C+Y+2]=f.z,se[C+Y+3]=0),b===!0&&(f.fromBufferAttribute(H,O),H.normalized===!0&&mf(f,H),se[C+Y+4]=f.x,se[C+Y+5]=f.y,se[C+Y+6]=f.z,se[C+Y+7]=0),F===!0&&(f.fromBufferAttribute(j,O),j.normalized===!0&&mf(f,j),se[C+Y+8]=f.x,se[C+Y+9]=f.y,se[C+Y+10]=f.z,se[C+Y+11]=j.itemSize===4?f.w:1)}}T={count:_,texture:q,size:new Qe(B,de)},a.set(v,T),v.addEventListener("dispose",te)}let A=0;for(let L=0;L<S.length;L++)A+=S[L];const k=v.morphTargetsRelative?1:1-A;x.getUniforms().setValue(u,"morphTargetBaseInfluence",k),x.getUniforms().setValue(u,"morphTargetInfluences",S),x.getUniforms().setValue(u,"morphTargetsTexture",T.texture,n),x.getUniforms().setValue(u,"morphTargetsTextureSize",T.size)}else{const y=S===void 0?0:S.length;let _=r[v.id];if(_===void 0||_.length!==y){_=[];for(let b=0;b<y;b++)_[b]=[b,0];r[v.id]=_}for(let b=0;b<y;b++){const F=_[b];F[0]=b,F[1]=S[b]}_.sort(pw);for(let b=0;b<8;b++)b<y&&_[b][1]?(c[b][0]=_[b][0],c[b][1]=_[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(hw);const T=v.morphAttributes.position,A=v.morphAttributes.normal;let k=0;for(let b=0;b<8;b++){const F=c[b],G=F[0],M=F[1];G!==Number.MAX_SAFE_INTEGER&&M?(T&&v.getAttribute("morphTarget"+b)!==T[G]&&v.setAttribute("morphTarget"+b,T[G]),A&&v.getAttribute("morphNormal"+b)!==A[G]&&v.setAttribute("morphNormal"+b,A[G]),o[b]=M,k+=M):(T&&v.hasAttribute("morphTarget"+b)===!0&&v.deleteAttribute("morphTarget"+b),A&&v.hasAttribute("morphNormal"+b)===!0&&v.deleteAttribute("morphNormal"+b),o[b]=0)}const L=v.morphTargetsRelative?1:1-k;x.getUniforms().setValue(u,"morphTargetBaseInfluence",L),x.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:m}}function gw(u,e,n,r){let o=new WeakMap;function a(m){const h=r.render.frame,v=m.geometry,g=e.get(m,v);return o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),g}function f(){o=new WeakMap}function c(m){const h=m.target;h.removeEventListener("dispose",c),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:f}}const xg=new jn,_g=new ug,yg=new o_,Sg=new mg,Sm=[],wm=[],Mm=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function to(u,e,n){const r=u[0];if(r<=0||r>0)return u;const o=e*n;let a=Sm[o];if(a===void 0&&(a=new Float32Array(o),Sm[o]=a),e!==0){r.toArray(a,0);for(let f=1,c=0;f!==e;++f)c+=n,u[f].toArray(a,c)}return a}function mn(u,e){if(u.length!==e.length)return!1;for(let n=0,r=u.length;n<r;n++)if(u[n]!==e[n])return!1;return!0}function gn(u,e){for(let n=0,r=e.length;n<r;n++)u[n]=e[n]}function Yl(u,e){let n=wm[e];n===void 0&&(n=new Int32Array(e),wm[e]=n);for(let r=0;r!==e;++r)n[r]=u.allocateTextureUnit();return n}function vw(u,e){const n=this.cache;n[0]!==e&&(u.uniform1f(this.addr,e),n[0]=e)}function xw(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;u.uniform2fv(this.addr,e),gn(n,e)}}function _w(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;u.uniform3fv(this.addr,e),gn(n,e)}}function yw(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;u.uniform4fv(this.addr,e),gn(n,e)}}function Sw(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;u.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Tm.set(r),u.uniformMatrix2fv(this.addr,!1,Tm),gn(n,r)}}function ww(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;u.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Em.set(r),u.uniformMatrix3fv(this.addr,!1,Em),gn(n,r)}}function Mw(u,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;u.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Mm.set(r),u.uniformMatrix4fv(this.addr,!1,Mm),gn(n,r)}}function Ew(u,e){const n=this.cache;n[0]!==e&&(u.uniform1i(this.addr,e),n[0]=e)}function Tw(u,e){const n=this.cache;mn(n,e)||(u.uniform2iv(this.addr,e),gn(n,e))}function bw(u,e){const n=this.cache;mn(n,e)||(u.uniform3iv(this.addr,e),gn(n,e))}function Cw(u,e){const n=this.cache;mn(n,e)||(u.uniform4iv(this.addr,e),gn(n,e))}function Aw(u,e){const n=this.cache;n[0]!==e&&(u.uniform1ui(this.addr,e),n[0]=e)}function Rw(u,e){const n=this.cache;mn(n,e)||(u.uniform2uiv(this.addr,e),gn(n,e))}function Lw(u,e){const n=this.cache;mn(n,e)||(u.uniform3uiv(this.addr,e),gn(n,e))}function Pw(u,e){const n=this.cache;mn(n,e)||(u.uniform4uiv(this.addr,e),gn(n,e))}function Dw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture2D(e||xg,o)}function Iw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||yg,o)}function Nw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Sg,o)}function kw(u,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(u.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||_g,o)}function Fw(u){switch(u){case 5126:return vw;case 35664:return xw;case 35665:return _w;case 35666:return yw;case 35674:return Sw;case 35675:return ww;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return Tw;case 35668:case 35672:return bw;case 35669:case 35673:return Cw;case 5125:return Aw;case 36294:return Rw;case 36295:return Lw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return kw}}function zw(u,e){u.uniform1fv(this.addr,e)}function Ow(u,e){const n=to(e,this.size,2);u.uniform2fv(this.addr,n)}function Uw(u,e){const n=to(e,this.size,3);u.uniform3fv(this.addr,n)}function Bw(u,e){const n=to(e,this.size,4);u.uniform4fv(this.addr,n)}function Gw(u,e){const n=to(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,n)}function Vw(u,e){const n=to(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,n)}function Ww(u,e){const n=to(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,n)}function Hw(u,e){u.uniform1iv(this.addr,e)}function jw(u,e){u.uniform2iv(this.addr,e)}function qw(u,e){u.uniform3iv(this.addr,e)}function Xw(u,e){u.uniform4iv(this.addr,e)}function $w(u,e){u.uniform1uiv(this.addr,e)}function Yw(u,e){u.uniform2uiv(this.addr,e)}function Kw(u,e){u.uniform3uiv(this.addr,e)}function Zw(u,e){u.uniform4uiv(this.addr,e)}function Qw(u,e,n){const r=e.length,o=Yl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2D(e[a]||xg,o[a])}function Jw(u,e,n){const r=e.length,o=Yl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yg,o[a])}function e1(u,e,n){const r=e.length,o=Yl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Sg,o[a])}function t1(u,e,n){const r=e.length,o=Yl(n,r);u.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||_g,o[a])}function n1(u){switch(u){case 5126:return zw;case 35664:return Ow;case 35665:return Uw;case 35666:return Bw;case 35674:return Gw;case 35675:return Vw;case 35676:return Ww;case 5124:case 35670:return Hw;case 35667:case 35671:return jw;case 35668:case 35672:return qw;case 35669:case 35673:return Xw;case 5125:return $w;case 36294:return Yw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}class i1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Fw(n.type)}}class r1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=n1(n.type)}}class s1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let a=0,f=o.length;a!==f;++a){const c=o[a];c.setValue(e,n[c.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function bm(u,e){u.seq.push(e),u.map[e.id]=e}function o1(u,e,n){const r=u.name,o=r.length;for(gf.lastIndex=0;;){const a=gf.exec(r),f=gf.lastIndex;let c=a[1];const m=a[2]==="]",h=a[3];if(m&&(c=c|0),h===void 0||h==="["&&f+2===o){bm(n,h===void 0?new i1(c,u,e):new r1(c,u,e));break}else{let g=n.map[c];g===void 0&&(g=new s1(c),bm(n,g)),n=g}}}class Bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,35718);for(let o=0;o<r;++o){const a=e.getActiveUniform(n,o),f=e.getUniformLocation(n,a.name);o1(a,f,this)}}setValue(e,n,r,o){const a=this.map[n];a!==void 0&&a.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let a=0,f=n.length;a!==f;++a){const c=n[a],m=r[c.id];m.needsUpdate!==!1&&c.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,a=e.length;o!==a;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Cm(u,e,n){const r=u.createShader(e);return u.shaderSource(r,n),u.compileShader(r),r}let a1=0;function l1(u,e){const n=u.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let f=o;f<a;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${n[f]}`)}return r.join(`
`)}function u1(u){switch(u){case Jr:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Am(u,e,n){const r=u.getShaderParameter(e,35713),o=u.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const f=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+l1(u.getShaderSource(e),f)}else return o}function c1(u,e){const n=u1(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function f1(u,e){let n;switch(e){case Dx:n="Linear";break;case Ix:n="Reinhard";break;case Nx:n="OptimizedCineon";break;case kx:n="ACESFilmic";break;case Fx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+u+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function d1(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jo).join(`
`)}function h1(u){const e=[];for(const n in u){const r=u[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function p1(u,e){const n={},r=u.getProgramParameter(e,35721);for(let o=0;o<r;o++){const a=u.getActiveAttrib(e,o),f=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),n[f]={type:a.type,location:u.getAttribLocation(e,f),locationSize:c}}return n}function jo(u){return u!==""}function Rm(u,e){return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(u){return u.replace(m1,g1)}function g1(u,e){const n=tt[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Af(n)}const v1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(u){return u.replace(x1,wg).replace(v1,_1)}function _1(u,e,n,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),wg(u,e,n,r)}function wg(u,e,n,r){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Dm(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y1(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function S1(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w1(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function M1(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case ng:e="ENVMAP_BLENDING_MULTIPLY";break;case Lx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function E1(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function T1(u,e,n,r){const o=u.getContext(),a=n.defines;let f=n.vertexShader,c=n.fragmentShader;const m=y1(n),h=S1(n),v=w1(n),g=M1(n),x=E1(n),S=n.isWebGL2?"":d1(n),E=h1(a),y=o.createProgram();let _,T,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[E].filter(jo).join(`
`),_.length>0&&(_+=`
`),T=[S,E].filter(jo).join(`
`),T.length>0&&(T+=`
`)):(_=[Dm(n),"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),T=[S,Dm(n),"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?tt.tonemapping_pars_fragment:"",n.toneMapping!==zi?f1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.encodings_pars_fragment,c1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),f=Af(f),f=Rm(f,n),f=Lm(f,n),c=Af(c),c=Rm(c,n),c=Lm(c,n),f=Pm(f),c=Pm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,T=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const k=A+_+f,L=A+T+c,b=Cm(o,35633,k),F=Cm(o,35632,L);if(o.attachShader(y,b),o.attachShader(y,F),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),u.debug.checkShaderErrors){const z=o.getProgramInfoLog(y).trim(),K=o.getShaderInfoLog(b).trim(),B=o.getShaderInfoLog(F).trim();let de=!0,se=!0;if(o.getProgramParameter(y,35714)===!1){de=!1;const q=Am(o,b,"vertex"),le=Am(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+z+`
`+q+`
`+le)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(K===""||B==="")&&(se=!1);se&&(this.diagnostics={runnable:de,programLog:z,vertexShader:{log:K,prefix:_},fragmentShader:{log:B,prefix:T}})}o.deleteShader(b),o.deleteShader(F);let G;this.getUniforms=function(){return G===void 0&&(G=new Bl(o,y)),G};let M;return this.getAttributes=function(){return M===void 0&&(M=p1(o,y)),M},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=a1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=F,this}let b1=0;class C1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const r=new A1(e);n.set(e,r)}return n.get(e)}}class A1{constructor(e){this.id=b1++,this.code=e,this.usedTimes=0}}function R1(u,e,n,r,o,a,f){const c=new fg,m=new C1,h=[],v=o.isWebGL2,g=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M,z,K,B,de){const se=B.fog,q=de.geometry,le=M.isMeshStandardMaterial?B.environment:null,te=(M.isMeshStandardMaterial?n:e).get(M.envMap||le),re=te&&te.mapping===ql?te.image.height:null,W=E[M.type];M.precision!==null&&(S=o.getMaxPrecision(M.precision),S!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",S,"instead."));const H=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,j=H!==void 0?H.length:0;let C=0;q.morphAttributes.position!==void 0&&(C=1),q.morphAttributes.normal!==void 0&&(C=2),q.morphAttributes.color!==void 0&&(C=3);let O,Y,he,ve;if(W){const je=vi[W];O=je.vertexShader,Y=je.fragmentShader}else O=M.vertexShader,Y=M.fragmentShader,m.update(M),he=m.getVertexShaderID(M),ve=m.getFragmentShaderID(M);const $=u.getRenderTarget(),_e=M.alphaTest>0,ye=M.clearcoat>0,we=M.iridescence>0;return{isWebGL2:v,shaderID:W,shaderName:M.type,vertexShader:O,fragmentShader:Y,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:S,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:x,outputEncoding:$===null?u.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Jr,map:!!M.map,matcap:!!M.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:re,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===n_,tangentSpaceNormalMap:M.normalMapType===t_,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===It,clearcoat:ye,clearcoatMap:ye&&!!M.clearcoatMap,clearcoatRoughnessMap:ye&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!M.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!M.iridescenceMap,iridescenceThicknessMap:we&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===js,alphaMap:!!M.alphaMap,alphaTest:_e,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!q.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!se,useFog:M.fog===!0,fogExp2:se&&se.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:g,skinning:de.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:C,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:M.dithering,shadowMapEnabled:u.shadowMap.enabled&&K.length>0,shadowMapType:u.shadowMap.type,toneMapping:M.toneMapped?u.toneMapping:zi,physicallyCorrectLights:u.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ys,flipSided:M.side===li,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const z=[];if(M.shaderID?z.push(M.shaderID):(z.push(M.customVertexShaderID),z.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)z.push(K),z.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(T(z,M),A(z,M),z.push(u.outputEncoding)),z.push(M.customProgramCacheKey),z.join()}function T(M,z){M.push(z.precision),M.push(z.outputEncoding),M.push(z.envMapMode),M.push(z.envMapCubeUVHeight),M.push(z.combine),M.push(z.vertexUvs),M.push(z.fogExp2),M.push(z.sizeAttenuation),M.push(z.morphTargetsCount),M.push(z.morphAttributeCount),M.push(z.numDirLights),M.push(z.numPointLights),M.push(z.numSpotLights),M.push(z.numHemiLights),M.push(z.numRectAreaLights),M.push(z.numDirLightShadows),M.push(z.numPointLightShadows),M.push(z.numSpotLightShadows),M.push(z.shadowMapType),M.push(z.toneMapping),M.push(z.numClippingPlanes),M.push(z.numClipIntersection),M.push(z.depthPacking)}function A(M,z){c.disableAll(),z.isWebGL2&&c.enable(0),z.supportsVertexTextures&&c.enable(1),z.instancing&&c.enable(2),z.instancingColor&&c.enable(3),z.map&&c.enable(4),z.matcap&&c.enable(5),z.envMap&&c.enable(6),z.lightMap&&c.enable(7),z.aoMap&&c.enable(8),z.emissiveMap&&c.enable(9),z.bumpMap&&c.enable(10),z.normalMap&&c.enable(11),z.objectSpaceNormalMap&&c.enable(12),z.tangentSpaceNormalMap&&c.enable(13),z.clearcoat&&c.enable(14),z.clearcoatMap&&c.enable(15),z.clearcoatRoughnessMap&&c.enable(16),z.clearcoatNormalMap&&c.enable(17),z.iridescence&&c.enable(18),z.iridescenceMap&&c.enable(19),z.iridescenceThicknessMap&&c.enable(20),z.displacementMap&&c.enable(21),z.specularMap&&c.enable(22),z.roughnessMap&&c.enable(23),z.metalnessMap&&c.enable(24),z.gradientMap&&c.enable(25),z.alphaMap&&c.enable(26),z.alphaTest&&c.enable(27),z.vertexColors&&c.enable(28),z.vertexAlphas&&c.enable(29),z.vertexUvs&&c.enable(30),z.vertexTangents&&c.enable(31),z.uvsVertexOnly&&c.enable(32),z.fog&&c.enable(33),M.push(c.mask),c.disableAll(),z.useFog&&c.enable(0),z.flatShading&&c.enable(1),z.logarithmicDepthBuffer&&c.enable(2),z.skinning&&c.enable(3),z.morphTargets&&c.enable(4),z.morphNormals&&c.enable(5),z.morphColors&&c.enable(6),z.premultipliedAlpha&&c.enable(7),z.shadowMapEnabled&&c.enable(8),z.physicallyCorrectLights&&c.enable(9),z.doubleSided&&c.enable(10),z.flipSided&&c.enable(11),z.useDepthPacking&&c.enable(12),z.dithering&&c.enable(13),z.specularIntensityMap&&c.enable(14),z.specularColorMap&&c.enable(15),z.transmission&&c.enable(16),z.transmissionMap&&c.enable(17),z.thicknessMap&&c.enable(18),z.sheen&&c.enable(19),z.sheenColorMap&&c.enable(20),z.sheenRoughnessMap&&c.enable(21),z.decodeVideoTexture&&c.enable(22),z.opaque&&c.enable(23),M.push(c.mask)}function k(M){const z=E[M.type];let K;if(z){const B=vi[z];K=Hl.clone(B.uniforms)}else K=M.uniforms;return K}function L(M,z){let K;for(let B=0,de=h.length;B<de;B++){const se=h[B];if(se.cacheKey===z){K=se,++K.usedTimes;break}}return K===void 0&&(K=new T1(u,z,M,a),h.push(K)),K}function b(M){if(--M.usedTimes===0){const z=h.indexOf(M);h[z]=h[h.length-1],h.pop(),M.destroy()}}function F(M){m.remove(M)}function G(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:k,acquireProgram:L,releaseProgram:b,releaseShaderCache:F,programs:h,dispose:G}}function L1(){let u=new WeakMap;function e(a){let f=u.get(a);return f===void 0&&(f={},u.set(a,f)),f}function n(a){u.delete(a)}function r(a,f,c){u.get(a)[f]=c}function o(){u=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function P1(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Im(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Nm(){const u=[];let e=0;const n=[],r=[],o=[];function a(){e=0,n.length=0,r.length=0,o.length=0}function f(g,x,S,E,y,_){let T=u[e];return T===void 0?(T={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:y,group:_},u[e]=T):(T.id=g.id,T.object=g,T.geometry=x,T.material=S,T.groupOrder=E,T.renderOrder=g.renderOrder,T.z=y,T.group=_),e++,T}function c(g,x,S,E,y,_){const T=f(g,x,S,E,y,_);S.transmission>0?r.push(T):S.transparent===!0?o.push(T):n.push(T)}function m(g,x,S,E,y,_){const T=f(g,x,S,E,y,_);S.transmission>0?r.unshift(T):S.transparent===!0?o.unshift(T):n.unshift(T)}function h(g,x){n.length>1&&n.sort(g||P1),r.length>1&&r.sort(x||Im),o.length>1&&o.sort(x||Im)}function v(){for(let g=e,x=u.length;g<x;g++){const S=u[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:a,push:c,unshift:m,finish:v,sort:h}}function D1(){let u=new WeakMap;function e(r,o){let a;return u.has(r)===!1?(a=new Nm,u.set(r,[a])):o>=u.get(r).length?(a=new Nm,u.get(r).push(a)):a=u.get(r)[o],a}function n(){u=new WeakMap}return{get:e,dispose:n}}function I1(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new ft};break;case"SpotLight":n={position:new Q,direction:new Q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return u[e.id]=n,n}}}function N1(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=n,n}}}let k1=0;function F1(u,e){return(e.castShadow?1:0)-(u.castShadow?1:0)}function z1(u,e){const n=new I1,r=N1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let v=0;v<9;v++)o.probe.push(new Q);const a=new Q,f=new Yt,c=new Yt;function m(v,g){let x=0,S=0,E=0;for(let z=0;z<9;z++)o.probe[z].set(0,0,0);let y=0,_=0,T=0,A=0,k=0,L=0,b=0,F=0;v.sort(F1);const G=g!==!0?Math.PI:1;for(let z=0,K=v.length;z<K;z++){const B=v[z],de=B.color,se=B.intensity,q=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=de.r*se*G,S+=de.g*se*G,E+=de.b*se*G;else if(B.isLightProbe)for(let te=0;te<9;te++)o.probe[te].addScaledVector(B.sh.coefficients[te],se);else if(B.isDirectionalLight){const te=n.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*G),B.castShadow){const re=B.shadow,W=r.get(B);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,o.directionalShadow[y]=W,o.directionalShadowMap[y]=le,o.directionalShadowMatrix[y]=B.shadow.matrix,L++}o.directional[y]=te,y++}else if(B.isSpotLight){const te=n.get(B);if(te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(de).multiplyScalar(se*G),te.distance=q,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,B.castShadow){const re=B.shadow,W=r.get(B);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,o.spotShadow[T]=W,o.spotShadowMap[T]=le,o.spotShadowMatrix[T]=B.shadow.matrix,F++}o.spot[T]=te,T++}else if(B.isRectAreaLight){const te=n.get(B);te.color.copy(de).multiplyScalar(se),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),o.rectArea[A]=te,A++}else if(B.isPointLight){const te=n.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*G),te.distance=B.distance,te.decay=B.decay,B.castShadow){const re=B.shadow,W=r.get(B);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,W.shadowCameraNear=re.camera.near,W.shadowCameraFar=re.camera.far,o.pointShadow[_]=W,o.pointShadowMap[_]=le,o.pointShadowMatrix[_]=B.shadow.matrix,b++}o.point[_]=te,_++}else if(B.isHemisphereLight){const te=n.get(B);te.skyColor.copy(B.color).multiplyScalar(se*G),te.groundColor.copy(B.groundColor).multiplyScalar(se*G),o.hemi[k]=te,k++}}A>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_FLOAT_1,o.rectAreaLTC2=Ce.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_HALF_1,o.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=x,o.ambient[1]=S,o.ambient[2]=E;const M=o.hash;(M.directionalLength!==y||M.pointLength!==_||M.spotLength!==T||M.rectAreaLength!==A||M.hemiLength!==k||M.numDirectionalShadows!==L||M.numPointShadows!==b||M.numSpotShadows!==F)&&(o.directional.length=y,o.spot.length=T,o.rectArea.length=A,o.point.length=_,o.hemi.length=k,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=b,o.pointShadowMap.length=b,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=b,o.spotShadowMatrix.length=F,M.directionalLength=y,M.pointLength=_,M.spotLength=T,M.rectAreaLength=A,M.hemiLength=k,M.numDirectionalShadows=L,M.numPointShadows=b,M.numSpotShadows=F,o.version=k1++)}function h(v,g){let x=0,S=0,E=0,y=0,_=0;const T=g.matrixWorldInverse;for(let A=0,k=v.length;A<k;A++){const L=v[A];if(L.isDirectionalLight){const b=o.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(T),x++}else if(L.isSpotLight){const b=o.spot[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(T),E++}else if(L.isRectAreaLight){const b=o.rectArea[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),c.identity(),f.copy(L.matrixWorld),f.premultiply(T),c.extractRotation(f),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const b=o.point[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(T),S++}else if(L.isHemisphereLight){const b=o.hemi[_];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(T),_++}}}return{setup:m,setupView:h,state:o}}function km(u,e){const n=new z1(u,e),r=[],o=[];function a(){r.length=0,o.length=0}function f(g){r.push(g)}function c(g){o.push(g)}function m(g){n.setup(r,g)}function h(g){n.setupView(r,g)}return{init:a,state:{lightsArray:r,shadowsArray:o,lights:n},setupLights:m,setupLightsView:h,pushLight:f,pushShadow:c}}function O1(u,e){let n=new WeakMap;function r(a,f=0){let c;return n.has(a)===!1?(c=new km(u,e),n.set(a,[c])):f>=n.get(a).length?(c=new km(u,e),n.get(a).push(c)):c=n.get(a)[f],c}function o(){n=new WeakMap}return{get:r,dispose:o}}class U1 extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B1 extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
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
}`;function W1(u,e,n){let r=new gg;const o=new Qe,a=new Qe,f=new $t,c=new U1({depthPacking:e_}),m=new B1,h={},v=n.maxTextureSize,g={0:li,1:Ko,2:Ys},x=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Xn;E.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Fi(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm,this.render=function(L,b,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const G=u.getRenderTarget(),M=u.getActiveCubeFace(),z=u.getActiveMipmapLevel(),K=u.state;K.setBlending(xr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);for(let B=0,de=L.length;B<de;B++){const se=L[B],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const le=q.getFrameExtents();if(o.multiply(le),a.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/le.x),o.x=a.x*le.x,q.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/le.y),o.y=a.y*le.y,q.mapSize.y=a.y)),q.map===null){const re=this.type!==Vs?{minFilter:ln,magFilter:ln}:{};q.map=new ui(o.x,o.y,re),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}u.setRenderTarget(q.map),u.clear();const te=q.getViewportCount();for(let re=0;re<te;re++){const W=q.getViewport(re);f.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),K.viewport(f),q.updateMatrices(se,re),r=q.getFrustum(),k(b,F,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Vs&&T(q,F),q.needsUpdate=!1}_.needsUpdate=!1,u.setRenderTarget(G,M,z)};function T(L,b){const F=e.update(y);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ui(o.x,o.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,u.setRenderTarget(L.mapPass),u.clear(),u.renderBufferDirect(b,null,F,x,y,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,u.setRenderTarget(L.map),u.clear(),u.renderBufferDirect(b,null,F,S,y,null)}function A(L,b,F,G,M,z){let K=null;const B=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0?K=B:K=F.isPointLight===!0?m:c,u.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const de=K.uuid,se=b.uuid;let q=h[de];q===void 0&&(q={},h[de]=q);let le=q[se];le===void 0&&(le=K.clone(),q[se]=le),K=le}return K.visible=b.visible,K.wireframe=b.wireframe,z===Vs?K.side=b.shadowSide!==null?b.shadowSide:b.side:K.side=b.shadowSide!==null?b.shadowSide:g[b.side],K.alphaMap=b.alphaMap,K.alphaTest=b.alphaTest,K.clipShadows=b.clipShadows,K.clippingPlanes=b.clippingPlanes,K.clipIntersection=b.clipIntersection,K.displacementMap=b.displacementMap,K.displacementScale=b.displacementScale,K.displacementBias=b.displacementBias,K.wireframeLinewidth=b.wireframeLinewidth,K.linewidth=b.linewidth,F.isPointLight===!0&&K.isMeshDistanceMaterial===!0&&(K.referencePosition.setFromMatrixPosition(F.matrixWorld),K.nearDistance=G,K.farDistance=M),K}function k(L,b,F,G,M){if(L.visible===!1)return;if(L.layers.test(b.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Vs)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const B=e.update(L),de=L.material;if(Array.isArray(de)){const se=B.groups;for(let q=0,le=se.length;q<le;q++){const te=se[q],re=de[te.materialIndex];if(re&&re.visible){const W=A(L,re,G,F.near,F.far,M);u.renderBufferDirect(F,null,B,W,L,te)}}}else if(de.visible){const se=A(L,de,G,F.near,F.far,M);u.renderBufferDirect(F,null,B,se,L,null)}}const K=L.children;for(let B=0,de=K.length;B<de;B++)k(K[B],b,F,G,M)}}function H1(u,e,n){const r=n.isWebGL2;function o(){let X=!1;const Le=new $t;let ue=null;const Re=new $t(0,0,0,0);return{setMask:function(be){ue!==be&&!X&&(u.colorMask(be,be,be,be),ue=be)},setLocked:function(be){X=be},setClear:function(be,Je,kt,Et,$n){$n===!0&&(be*=Et,Je*=Et,kt*=Et),Le.set(be,Je,kt,Et),Re.equals(Le)===!1&&(u.clearColor(be,Je,kt,Et),Re.copy(Le))},reset:function(){X=!1,ue=null,Re.set(-1,0,0,0)}}}function a(){let X=!1,Le=null,ue=null,Re=null;return{setTest:function(be){be?_e(2929):ye(2929)},setMask:function(be){Le!==be&&!X&&(u.depthMask(be),Le=be)},setFunc:function(be){if(ue!==be){if(be)switch(be){case Mx:u.depthFunc(512);break;case Ex:u.depthFunc(519);break;case Tx:u.depthFunc(513);break;case Sf:u.depthFunc(515);break;case bx:u.depthFunc(514);break;case Cx:u.depthFunc(518);break;case Ax:u.depthFunc(516);break;case Rx:u.depthFunc(517);break;default:u.depthFunc(515)}else u.depthFunc(515);ue=be}},setLocked:function(be){X=be},setClear:function(be){Re!==be&&(u.clearDepth(be),Re=be)},reset:function(){X=!1,Le=null,ue=null,Re=null}}}function f(){let X=!1,Le=null,ue=null,Re=null,be=null,Je=null,kt=null,Et=null,$n=null;return{setTest:function(yt){X||(yt?_e(2960):ye(2960))},setMask:function(yt){Le!==yt&&!X&&(u.stencilMask(yt),Le=yt)},setFunc:function(yt,In,en){(ue!==yt||Re!==In||be!==en)&&(u.stencilFunc(yt,In,en),ue=yt,Re=In,be=en)},setOp:function(yt,In,en){(Je!==yt||kt!==In||Et!==en)&&(u.stencilOp(yt,In,en),Je=yt,kt=In,Et=en)},setLocked:function(yt){X=yt},setClear:function(yt){$n!==yt&&(u.clearStencil(yt),$n=yt)},reset:function(){X=!1,Le=null,ue=null,Re=null,be=null,Je=null,kt=null,Et=null,$n=null}}}const c=new o,m=new a,h=new f,v=new WeakMap,g=new WeakMap;let x={},S={},E=new WeakMap,y=[],_=null,T=!1,A=null,k=null,L=null,b=null,F=null,G=null,M=null,z=!1,K=null,B=null,de=null,se=null,q=null;const le=u.getParameter(35661);let te=!1,re=0;const W=u.getParameter(7938);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),te=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),te=re>=2);let H=null,j={};const C=u.getParameter(3088),O=u.getParameter(2978),Y=new $t().fromArray(C),he=new $t().fromArray(O);function ve(X,Le,ue){const Re=new Uint8Array(4),be=u.createTexture();u.bindTexture(X,be),u.texParameteri(X,10241,9728),u.texParameteri(X,10240,9728);for(let Je=0;Je<ue;Je++)u.texImage2D(Le+Je,0,6408,1,1,0,6408,5121,Re);return be}const $={};$[3553]=ve(3553,3553,1),$[34067]=ve(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),h.setClear(0),_e(2929),m.setFunc(Sf),xt(!1),Lt(Tp),_e(2884),dt(xr);function _e(X){x[X]!==!0&&(u.enable(X),x[X]=!0)}function ye(X){x[X]!==!1&&(u.disable(X),x[X]=!1)}function we(X,Le){return S[X]!==Le?(u.bindFramebuffer(X,Le),S[X]=Le,r&&(X===36009&&(S[36160]=Le),X===36160&&(S[36009]=Le)),!0):!1}function Se(X,Le){let ue=y,Re=!1;if(X)if(ue=E.get(Le),ue===void 0&&(ue=[],E.set(Le,ue)),X.isWebGLMultipleRenderTargets){const be=X.texture;if(ue.length!==be.length||ue[0]!==36064){for(let Je=0,kt=be.length;Je<kt;Je++)ue[Je]=36064+Je;ue.length=be.length,Re=!0}}else ue[0]!==36064&&(ue[0]=36064,Re=!0);else ue[0]!==1029&&(ue[0]=1029,Re=!0);Re&&(n.isWebGL2?u.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function je(X){return _!==X?(u.useProgram(X),_=X,!0):!1}const Ge={[Us]:32774,[dx]:32778,[hx]:32779};if(r)Ge[Ap]=32775,Ge[Rp]=32776;else{const X=e.get("EXT_blend_minmax");X!==null&&(Ge[Ap]=X.MIN_EXT,Ge[Rp]=X.MAX_EXT)}const Ie={[px]:0,[mx]:1,[gx]:768,[eg]:770,[wx]:776,[yx]:774,[xx]:772,[vx]:769,[tg]:771,[Sx]:775,[_x]:773};function dt(X,Le,ue,Re,be,Je,kt,Et){if(X===xr){T===!0&&(ye(3042),T=!1);return}if(T===!1&&(_e(3042),T=!0),X!==fx){if(X!==A||Et!==z){if((k!==Us||F!==Us)&&(u.blendEquation(32774),k=Us,F=Us),Et)switch(X){case js:u.blendFuncSeparate(1,771,1,771);break;case Zo:u.blendFunc(1,1);break;case bp:u.blendFuncSeparate(0,769,0,1);break;case Cp:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:u.blendFuncSeparate(770,771,1,771);break;case Zo:u.blendFunc(770,1);break;case bp:u.blendFuncSeparate(0,769,0,1);break;case Cp:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,b=null,G=null,M=null,A=X,z=Et}return}be=be||Le,Je=Je||ue,kt=kt||Re,(Le!==k||be!==F)&&(u.blendEquationSeparate(Ge[Le],Ge[be]),k=Le,F=be),(ue!==L||Re!==b||Je!==G||kt!==M)&&(u.blendFuncSeparate(Ie[ue],Ie[Re],Ie[Je],Ie[kt]),L=ue,b=Re,G=Je,M=kt),A=X,z=null}function Nt(X,Le){X.side===Ys?ye(2884):_e(2884);let ue=X.side===li;Le&&(ue=!ue),xt(ue),X.blending===js&&X.transparent===!1?dt(xr):dt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),m.setFunc(X.depthFunc),m.setTest(X.depthTest),m.setMask(X.depthWrite),c.setMask(X.colorWrite);const Re=X.stencilWrite;h.setTest(Re),Re&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(32926):ye(32926)}function xt(X){K!==X&&(X?u.frontFace(2304):u.frontFace(2305),K=X)}function Lt(X){X!==ax?(_e(2884),X!==B&&(X===Tp?u.cullFace(1029):X===lx?u.cullFace(1028):u.cullFace(1032))):ye(2884),B=X}function ht(X){X!==de&&(te&&u.lineWidth(X),de=X)}function rt(X,Le,ue){X?(_e(32823),(se!==Le||q!==ue)&&(u.polygonOffset(Le,ue),se=Le,q=ue)):ye(32823)}function Ut(X){X?_e(3089):ye(3089)}function Pt(X){X===void 0&&(X=33984+le-1),H!==X&&(u.activeTexture(X),H=X)}function N(X,Le){H===null&&Pt();let ue=j[H];ue===void 0&&(ue={type:void 0,texture:void 0},j[H]=ue),(ue.type!==X||ue.texture!==Le)&&(u.bindTexture(X,Le||$[X]),ue.type=X,ue.texture=Le)}function R(){const X=j[H];X!==void 0&&X.type!==void 0&&(u.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ce(){try{u.compressedTexImage2D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{u.texSubImage2D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{u.texSubImage3D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{u.texStorage2D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{u.texStorage3D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{u.texImage2D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{u.texImage3D.apply(u,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(X){Y.equals(X)===!1&&(u.scissor(X.x,X.y,X.z,X.w),Y.copy(X))}function ke(X){he.equals(X)===!1&&(u.viewport(X.x,X.y,X.z,X.w),he.copy(X))}function Ye(X,Le){let ue=g.get(Le);ue===void 0&&(ue=new WeakMap,g.set(Le,ue));let Re=ue.get(X);Re===void 0&&(Re=u.getUniformBlockIndex(Le,X.name),ue.set(X,Re))}function ot(X,Le){const Re=g.get(Le).get(X);v.get(X)!==Re&&(u.uniformBlockBinding(Le,Re,X.__bindingPointIndex),v.set(X,Re))}function _t(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),r===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),x={},H=null,j={},S={},E=new WeakMap,y=[],_=null,T=!1,A=null,k=null,L=null,b=null,F=null,G=null,M=null,z=!1,K=null,B=null,de=null,se=null,q=null,Y.set(0,0,u.canvas.width,u.canvas.height),he.set(0,0,u.canvas.width,u.canvas.height),c.reset(),m.reset(),h.reset()}return{buffers:{color:c,depth:m,stencil:h},enable:_e,disable:ye,bindFramebuffer:we,drawBuffers:Se,useProgram:je,setBlending:dt,setMaterial:Nt,setFlipSided:xt,setCullFace:Lt,setLineWidth:ht,setPolygonOffset:rt,setScissorTest:Ut,activeTexture:Pt,bindTexture:N,unbindTexture:R,compressedTexImage2D:ce,texImage2D:Ue,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:ot,texStorage2D:qe,texStorage3D:ae,texSubImage2D:Me,texSubImage3D:Te,compressedTexSubImage2D:Ae,scissor:Be,viewport:ke,reset:_t}}function j1(u,e,n,r,o,a,f){const c=o.isWebGL2,m=o.maxTextures,h=o.maxCubemapSize,v=o.maxTextureSize,g=o.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let y;const _=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,R){return T?new OffscreenCanvas(N,R):Wl("canvas")}function k(N,R,ce,Me){let Te=1;if((N.width>Me||N.height>Me)&&(Te=Me/Math.max(N.width,N.height)),Te<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Ae=R?Cf:Math.floor,qe=Ae(Te*N.width),ae=Ae(Te*N.height);y===void 0&&(y=A(qe,ae));const Ue=ce?A(qe,ae):y;return Ue.width=qe,Ue.height=ae,Ue.getContext("2d").drawImage(N,0,0,qe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+qe+"x"+ae+")."),Ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function L(N){return nm(N.width)&&nm(N.height)}function b(N){return c?!1:N.wrapS!==oi||N.wrapT!==oi||N.minFilter!==ln&&N.minFilter!==Vn}function F(N,R){return N.generateMipmaps&&R&&N.minFilter!==ln&&N.minFilter!==Vn}function G(N){u.generateMipmap(N)}function M(N,R,ce,Me,Te=!1){if(c===!1)return R;if(N!==null){if(u[N]!==void 0)return u[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ae=R;return R===6403&&(ce===5126&&(Ae=33326),ce===5131&&(Ae=33325),ce===5121&&(Ae=33321)),R===33319&&(ce===5126&&(Ae=33328),ce===5131&&(Ae=33327),ce===5121&&(Ae=33323)),R===6408&&(ce===5126&&(Ae=34836),ce===5131&&(Ae=34842),ce===5121&&(Ae=Me===It&&Te===!1?35907:32856),ce===32819&&(Ae=32854),ce===32820&&(Ae=32855)),(Ae===33325||Ae===33326||Ae===33327||Ae===33328||Ae===34842||Ae===34836)&&e.get("EXT_color_buffer_float"),Ae}function z(N,R,ce){return F(N,ce)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==Vn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function K(N){return N===ln||N===Lp||N===Pp?9728:9729}function B(N){const R=N.target;R.removeEventListener("dispose",B),se(R),R.isVideoTexture&&E.delete(R)}function de(N){const R=N.target;R.removeEventListener("dispose",de),le(R)}function se(N){const R=r.get(N);if(R.__webglInit===void 0)return;const ce=N.source,Me=_.get(ce);if(Me){const Te=Me[R.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&q(N),Object.keys(Me).length===0&&_.delete(ce)}r.remove(N)}function q(N){const R=r.get(N);u.deleteTexture(R.__webglTexture);const ce=N.source,Me=_.get(ce);delete Me[R.__cacheKey],f.memory.textures--}function le(N){const R=N.texture,ce=r.get(N),Me=r.get(R);if(Me.__webglTexture!==void 0&&(u.deleteTexture(Me.__webglTexture),f.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Te=0;Te<6;Te++)u.deleteFramebuffer(ce.__webglFramebuffer[Te]),ce.__webglDepthbuffer&&u.deleteRenderbuffer(ce.__webglDepthbuffer[Te]);else{if(u.deleteFramebuffer(ce.__webglFramebuffer),ce.__webglDepthbuffer&&u.deleteRenderbuffer(ce.__webglDepthbuffer),ce.__webglMultisampledFramebuffer&&u.deleteFramebuffer(ce.__webglMultisampledFramebuffer),ce.__webglColorRenderbuffer)for(let Te=0;Te<ce.__webglColorRenderbuffer.length;Te++)ce.__webglColorRenderbuffer[Te]&&u.deleteRenderbuffer(ce.__webglColorRenderbuffer[Te]);ce.__webglDepthRenderbuffer&&u.deleteRenderbuffer(ce.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Te=0,Ae=R.length;Te<Ae;Te++){const qe=r.get(R[Te]);qe.__webglTexture&&(u.deleteTexture(qe.__webglTexture),f.memory.textures--),r.remove(R[Te])}r.remove(R),r.remove(N)}let te=0;function re(){te=0}function W(){const N=te;return N>=m&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+m),te+=1,N}function H(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.encoding),R.join()}function j(N,R){const ce=r.get(N);if(N.isVideoTexture&&Ut(N),N.isRenderTargetTexture===!1&&N.version>0&&ce.__version!==N.version){const Me=N.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(ce,N,R);return}}n.activeTexture(33984+R),n.bindTexture(3553,ce.__webglTexture)}function C(N,R){const ce=r.get(N);if(N.version>0&&ce.__version!==N.version){ye(ce,N,R);return}n.activeTexture(33984+R),n.bindTexture(35866,ce.__webglTexture)}function O(N,R){const ce=r.get(N);if(N.version>0&&ce.__version!==N.version){ye(ce,N,R);return}n.activeTexture(33984+R),n.bindTexture(32879,ce.__webglTexture)}function Y(N,R){const ce=r.get(N);if(N.version>0&&ce.__version!==N.version){we(ce,N,R);return}n.activeTexture(33984+R),n.bindTexture(34067,ce.__webglTexture)}const he={[Ef]:10497,[oi]:33071,[Tf]:33648},ve={[ln]:9728,[Lp]:9984,[Pp]:9986,[Vn]:9729,[zx]:9985,[Xl]:9987};function $(N,R,ce){if(ce?(u.texParameteri(N,10242,he[R.wrapS]),u.texParameteri(N,10243,he[R.wrapT]),(N===32879||N===35866)&&u.texParameteri(N,32882,he[R.wrapR]),u.texParameteri(N,10240,ve[R.magFilter]),u.texParameteri(N,10241,ve[R.minFilter])):(u.texParameteri(N,10242,33071),u.texParameteri(N,10243,33071),(N===32879||N===35866)&&u.texParameteri(N,32882,33071),(R.wrapS!==oi||R.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(N,10240,K(R.magFilter)),u.texParameteri(N,10241,K(R.minFilter)),R.minFilter!==ln&&R.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(R.type===jr&&e.has("OES_texture_float_linear")===!1||c===!1&&R.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(u.texParameterf(N,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function _e(N,R){let ce=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",B));const Me=R.source;let Te=_.get(Me);Te===void 0&&(Te={},_.set(Me,Te));const Ae=H(R);if(Ae!==N.__cacheKey){Te[Ae]===void 0&&(Te[Ae]={texture:u.createTexture(),usedTimes:0},f.memory.textures++,ce=!0),Te[Ae].usedTimes++;const qe=Te[N.__cacheKey];qe!==void 0&&(Te[N.__cacheKey].usedTimes--,qe.usedTimes===0&&q(R)),N.__cacheKey=Ae,N.__webglTexture=Te[Ae].texture}return ce}function ye(N,R,ce){let Me=3553;R.isDataArrayTexture&&(Me=35866),R.isData3DTexture&&(Me=32879);const Te=_e(N,R),Ae=R.source;if(n.activeTexture(33984+ce),n.bindTexture(Me,N.__webglTexture),Ae.version!==Ae.__currentVersion||Te===!0){u.pixelStorei(37440,R.flipY),u.pixelStorei(37441,R.premultiplyAlpha),u.pixelStorei(3317,R.unpackAlignment),u.pixelStorei(37443,0);const qe=b(R)&&L(R.image)===!1;let ae=k(R.image,qe,!1,v);ae=Pt(R,ae);const Ue=L(ae)||c,De=a.convert(R.format,R.encoding);let Be=a.convert(R.type),ke=M(R.internalFormat,De,Be,R.encoding,R.isVideoTexture);$(Me,R,Ue);let Ye;const ot=R.mipmaps,_t=c&&R.isVideoTexture!==!0,X=Ae.__currentVersion===void 0||Te===!0,Le=z(R,ae,Ue);if(R.isDepthTexture)ke=6402,c?R.type===jr?ke=36012:R.type===Hr?ke=33190:R.type===qs?ke=35056:ke=33189:R.type===jr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Xr&&ke===6402&&R.type!==rg&&R.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Hr,Be=a.convert(R.type)),R.format===Qs&&ke===6402&&(ke=34041,R.type!==qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=qs,Be=a.convert(R.type))),X&&(_t?n.texStorage2D(3553,1,ke,ae.width,ae.height):n.texImage2D(3553,0,ke,ae.width,ae.height,0,De,Be,null));else if(R.isDataTexture)if(ot.length>0&&Ue){_t&&X&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ue=0,Re=ot.length;ue<Re;ue++)Ye=ot[ue],_t?n.texSubImage2D(3553,ue,0,0,Ye.width,Ye.height,De,Be,Ye.data):n.texImage2D(3553,ue,ke,Ye.width,Ye.height,0,De,Be,Ye.data);R.generateMipmaps=!1}else _t?(X&&n.texStorage2D(3553,Le,ke,ae.width,ae.height),n.texSubImage2D(3553,0,0,0,ae.width,ae.height,De,Be,ae.data)):n.texImage2D(3553,0,ke,ae.width,ae.height,0,De,Be,ae.data);else if(R.isCompressedTexture){_t&&X&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ue=0,Re=ot.length;ue<Re;ue++)Ye=ot[ue],R.format!==ai?De!==null?_t?n.compressedTexSubImage2D(3553,ue,0,0,Ye.width,Ye.height,De,Ye.data):n.compressedTexImage2D(3553,ue,ke,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage2D(3553,ue,0,0,Ye.width,Ye.height,De,Be,Ye.data):n.texImage2D(3553,ue,ke,Ye.width,Ye.height,0,De,Be,Ye.data)}else if(R.isDataArrayTexture)_t?(X&&n.texStorage3D(35866,Le,ke,ae.width,ae.height,ae.depth),n.texSubImage3D(35866,0,0,0,0,ae.width,ae.height,ae.depth,De,Be,ae.data)):n.texImage3D(35866,0,ke,ae.width,ae.height,ae.depth,0,De,Be,ae.data);else if(R.isData3DTexture)_t?(X&&n.texStorage3D(32879,Le,ke,ae.width,ae.height,ae.depth),n.texSubImage3D(32879,0,0,0,0,ae.width,ae.height,ae.depth,De,Be,ae.data)):n.texImage3D(32879,0,ke,ae.width,ae.height,ae.depth,0,De,Be,ae.data);else if(R.isFramebufferTexture){if(X)if(_t)n.texStorage2D(3553,Le,ke,ae.width,ae.height);else{let ue=ae.width,Re=ae.height;for(let be=0;be<Le;be++)n.texImage2D(3553,be,ke,ue,Re,0,De,Be,null),ue>>=1,Re>>=1}}else if(ot.length>0&&Ue){_t&&X&&n.texStorage2D(3553,Le,ke,ot[0].width,ot[0].height);for(let ue=0,Re=ot.length;ue<Re;ue++)Ye=ot[ue],_t?n.texSubImage2D(3553,ue,0,0,De,Be,Ye):n.texImage2D(3553,ue,ke,De,Be,Ye);R.generateMipmaps=!1}else _t?(X&&n.texStorage2D(3553,Le,ke,ae.width,ae.height),n.texSubImage2D(3553,0,0,0,De,Be,ae)):n.texImage2D(3553,0,ke,De,Be,ae);F(R,Ue)&&G(Me),Ae.__currentVersion=Ae.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function we(N,R,ce){if(R.image.length!==6)return;const Me=_e(N,R),Te=R.source;if(n.activeTexture(33984+ce),n.bindTexture(34067,N.__webglTexture),Te.version!==Te.__currentVersion||Me===!0){u.pixelStorei(37440,R.flipY),u.pixelStorei(37441,R.premultiplyAlpha),u.pixelStorei(3317,R.unpackAlignment),u.pixelStorei(37443,0);const Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,qe=R.image[0]&&R.image[0].isDataTexture,ae=[];for(let ue=0;ue<6;ue++)!Ae&&!qe?ae[ue]=k(R.image[ue],!1,!0,h):ae[ue]=qe?R.image[ue].image:R.image[ue],ae[ue]=Pt(R,ae[ue]);const Ue=ae[0],De=L(Ue)||c,Be=a.convert(R.format,R.encoding),ke=a.convert(R.type),Ye=M(R.internalFormat,Be,ke,R.encoding),ot=c&&R.isVideoTexture!==!0,_t=Te.__currentVersion===void 0||Me===!0;let X=z(R,Ue,De);$(34067,R,De);let Le;if(Ae){ot&&_t&&n.texStorage2D(34067,X,Ye,Ue.width,Ue.height);for(let ue=0;ue<6;ue++){Le=ae[ue].mipmaps;for(let Re=0;Re<Le.length;Re++){const be=Le[Re];R.format!==ai?Be!==null?ot?n.compressedTexSubImage2D(34069+ue,Re,0,0,be.width,be.height,Be,be.data):n.compressedTexImage2D(34069+ue,Re,Ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?n.texSubImage2D(34069+ue,Re,0,0,be.width,be.height,Be,ke,be.data):n.texImage2D(34069+ue,Re,Ye,be.width,be.height,0,Be,ke,be.data)}}}else{Le=R.mipmaps,ot&&_t&&(Le.length>0&&X++,n.texStorage2D(34067,X,Ye,ae[0].width,ae[0].height));for(let ue=0;ue<6;ue++)if(qe){ot?n.texSubImage2D(34069+ue,0,0,0,ae[ue].width,ae[ue].height,Be,ke,ae[ue].data):n.texImage2D(34069+ue,0,Ye,ae[ue].width,ae[ue].height,0,Be,ke,ae[ue].data);for(let Re=0;Re<Le.length;Re++){const Je=Le[Re].image[ue].image;ot?n.texSubImage2D(34069+ue,Re+1,0,0,Je.width,Je.height,Be,ke,Je.data):n.texImage2D(34069+ue,Re+1,Ye,Je.width,Je.height,0,Be,ke,Je.data)}}else{ot?n.texSubImage2D(34069+ue,0,0,0,Be,ke,ae[ue]):n.texImage2D(34069+ue,0,Ye,Be,ke,ae[ue]);for(let Re=0;Re<Le.length;Re++){const be=Le[Re];ot?n.texSubImage2D(34069+ue,Re+1,0,0,Be,ke,be.image[ue]):n.texImage2D(34069+ue,Re+1,Ye,Be,ke,be.image[ue])}}}F(R,De)&&G(34067),Te.__currentVersion=Te.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Se(N,R,ce,Me,Te){const Ae=a.convert(ce.format,ce.encoding),qe=a.convert(ce.type),ae=M(ce.internalFormat,Ae,qe,ce.encoding);r.get(R).__hasExternalTextures||(Te===32879||Te===35866?n.texImage3D(Te,0,ae,R.width,R.height,R.depth,0,Ae,qe,null):n.texImage2D(Te,0,ae,R.width,R.height,0,Ae,qe,null)),n.bindFramebuffer(36160,N),rt(R)?x.framebufferTexture2DMultisampleEXT(36160,Me,Te,r.get(ce).__webglTexture,0,ht(R)):u.framebufferTexture2D(36160,Me,Te,r.get(ce).__webglTexture,0),n.bindFramebuffer(36160,null)}function je(N,R,ce){if(u.bindRenderbuffer(36161,N),R.depthBuffer&&!R.stencilBuffer){let Me=33189;if(ce||rt(R)){const Te=R.depthTexture;Te&&Te.isDepthTexture&&(Te.type===jr?Me=36012:Te.type===Hr&&(Me=33190));const Ae=ht(R);rt(R)?x.renderbufferStorageMultisampleEXT(36161,Ae,Me,R.width,R.height):u.renderbufferStorageMultisample(36161,Ae,Me,R.width,R.height)}else u.renderbufferStorage(36161,Me,R.width,R.height);u.framebufferRenderbuffer(36160,36096,36161,N)}else if(R.depthBuffer&&R.stencilBuffer){const Me=ht(R);ce&&rt(R)===!1?u.renderbufferStorageMultisample(36161,Me,35056,R.width,R.height):rt(R)?x.renderbufferStorageMultisampleEXT(36161,Me,35056,R.width,R.height):u.renderbufferStorage(36161,34041,R.width,R.height),u.framebufferRenderbuffer(36160,33306,36161,N)}else{const Me=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Te=0;Te<Me.length;Te++){const Ae=Me[Te],qe=a.convert(Ae.format,Ae.encoding),ae=a.convert(Ae.type),Ue=M(Ae.internalFormat,qe,ae,Ae.encoding),De=ht(R);ce&&rt(R)===!1?u.renderbufferStorageMultisample(36161,De,Ue,R.width,R.height):rt(R)?x.renderbufferStorageMultisampleEXT(36161,De,Ue,R.width,R.height):u.renderbufferStorage(36161,Ue,R.width,R.height)}}u.bindRenderbuffer(36161,null)}function Ge(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),j(R.depthTexture,0);const Me=r.get(R.depthTexture).__webglTexture,Te=ht(R);if(R.depthTexture.format===Xr)rt(R)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,Me,0,Te):u.framebufferTexture2D(36160,36096,3553,Me,0);else if(R.depthTexture.format===Qs)rt(R)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,Me,0,Te):u.framebufferTexture2D(36160,33306,3553,Me,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const R=r.get(N),ce=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");Ge(R.__webglFramebuffer,N)}else if(ce){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(36160,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]=u.createRenderbuffer(),je(R.__webglDepthbuffer[Me],N,!1)}else n.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=u.createRenderbuffer(),je(R.__webglDepthbuffer,N,!1);n.bindFramebuffer(36160,null)}function dt(N,R,ce){const Me=r.get(N);R!==void 0&&Se(Me.__webglFramebuffer,N,N.texture,36064,3553),ce!==void 0&&Ie(N)}function Nt(N){const R=N.texture,ce=r.get(N),Me=r.get(R);N.addEventListener("dispose",de),N.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=u.createTexture()),Me.__version=R.version,f.memory.textures++);const Te=N.isWebGLCubeRenderTarget===!0,Ae=N.isWebGLMultipleRenderTargets===!0,qe=L(N)||c;if(Te){ce.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)ce.__webglFramebuffer[ae]=u.createFramebuffer()}else{if(ce.__webglFramebuffer=u.createFramebuffer(),Ae)if(o.drawBuffers){const ae=N.texture;for(let Ue=0,De=ae.length;Ue<De;Ue++){const Be=r.get(ae[Ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=u.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&rt(N)===!1){const ae=Ae?R:[R];ce.__webglMultisampledFramebuffer=u.createFramebuffer(),ce.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];ce.__webglColorRenderbuffer[Ue]=u.createRenderbuffer(),u.bindRenderbuffer(36161,ce.__webglColorRenderbuffer[Ue]);const Be=a.convert(De.format,De.encoding),ke=a.convert(De.type),Ye=M(De.internalFormat,Be,ke,De.encoding),ot=ht(N);u.renderbufferStorageMultisample(36161,ot,Ye,N.width,N.height),u.framebufferRenderbuffer(36160,36064+Ue,36161,ce.__webglColorRenderbuffer[Ue])}u.bindRenderbuffer(36161,null),N.depthBuffer&&(ce.__webglDepthRenderbuffer=u.createRenderbuffer(),je(ce.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(36160,null)}}if(Te){n.bindTexture(34067,Me.__webglTexture),$(34067,R,qe);for(let ae=0;ae<6;ae++)Se(ce.__webglFramebuffer[ae],N,R,36064,34069+ae);F(R,qe)&&G(34067),n.unbindTexture()}else if(Ae){const ae=N.texture;for(let Ue=0,De=ae.length;Ue<De;Ue++){const Be=ae[Ue],ke=r.get(Be);n.bindTexture(3553,ke.__webglTexture),$(3553,Be,qe),Se(ce.__webglFramebuffer,N,Be,36064+Ue,3553),F(Be,qe)&&G(3553)}n.unbindTexture()}else{let ae=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?ae=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,Me.__webglTexture),$(ae,R,qe),Se(ce.__webglFramebuffer,N,R,36064,ae),F(R,qe)&&G(ae),n.unbindTexture()}N.depthBuffer&&Ie(N)}function xt(N){const R=L(N)||c,ce=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Me=0,Te=ce.length;Me<Te;Me++){const Ae=ce[Me];if(F(Ae,R)){const qe=N.isWebGLCubeRenderTarget?34067:3553,ae=r.get(Ae).__webglTexture;n.bindTexture(qe,ae),G(qe),n.unbindTexture()}}}function Lt(N){if(c&&N.samples>0&&rt(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ce=N.width,Me=N.height;let Te=16384;const Ae=[],qe=N.stencilBuffer?33306:36096,ae=r.get(N),Ue=N.isWebGLMultipleRenderTargets===!0;if(Ue)for(let De=0;De<R.length;De++)n.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+De,36161,null),n.bindFramebuffer(36160,ae.__webglFramebuffer),u.framebufferTexture2D(36009,36064+De,3553,null,0);n.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,ae.__webglFramebuffer);for(let De=0;De<R.length;De++){Ae.push(36064+De),N.depthBuffer&&Ae.push(qe);const Be=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Be===!1&&(N.depthBuffer&&(Te|=256),N.stencilBuffer&&(Te|=1024)),Ue&&u.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[De]),Be===!0&&(u.invalidateFramebuffer(36008,[qe]),u.invalidateFramebuffer(36009,[qe])),Ue){const ke=r.get(R[De]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,ke,0)}u.blitFramebuffer(0,0,ce,Me,0,0,ce,Me,Te,9728),S&&u.invalidateFramebuffer(36008,Ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ue)for(let De=0;De<R.length;De++){n.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+De,36161,ae.__webglColorRenderbuffer[De]);const Be=r.get(R[De]).__webglTexture;n.bindFramebuffer(36160,ae.__webglFramebuffer),u.framebufferTexture2D(36009,36064+De,3553,Be,0)}n.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function ht(N){return Math.min(g,N.samples)}function rt(N){const R=r.get(N);return c&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ut(N){const R=f.render.frame;E.get(N)!==R&&(E.set(N,R),N.update())}function Pt(N,R){const ce=N.encoding,Me=N.format,Te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===bf||ce!==Jr&&(ce===It?c===!1?e.has("EXT_sRGB")===!0&&Me===ai?(N.format=bf,N.minFilter=Vn,N.generateMipmaps=!1):R=ag.sRGBToLinear(R):(Me!==ai||Te!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ce)),R}this.allocateTextureUnit=W,this.resetTextureUnits=re,this.setTexture2D=j,this.setTexture2DArray=C,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=dt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=rt}function q1(u,e,n){const r=n.isWebGL2;function o(a,f=null){let c;if(a===Qr)return 5121;if(a===Gx)return 32819;if(a===Vx)return 32820;if(a===Ox)return 5120;if(a===Ux)return 5122;if(a===rg)return 5123;if(a===Bx)return 5124;if(a===Hr)return 5125;if(a===jr)return 5126;if(a===Qo)return r?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===Wx)return 6406;if(a===ai)return 6408;if(a===jx)return 6409;if(a===qx)return 6410;if(a===Xr)return 6402;if(a===Qs)return 34041;if(a===Xx)return 6403;if(a===Hx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===bf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===$x)return 36244;if(a===Yx)return 33319;if(a===Kx)return 33320;if(a===Zx)return 36249;if(a===Oc||a===Uc||a===Bc||a===Gc)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Dp||a===Ip||a===Np||a===kp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Dp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ip)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===kp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qx)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Fp||a===zp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Fp)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===zp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Op||a===Up||a===Bp||a===Gp||a===Vp||a===Wp||a===Hp||a===jp||a===qp||a===Xp||a===$p||a===Yp||a===Kp||a===Zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Op)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Up)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Vp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Wp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===jp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Xp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$p)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Yp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Kp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Zp)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Qp)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===qs?r?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[a]!==void 0?u[a]:null}return{convert:o}}class X1 extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qo extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $1={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,a=null,f=null;const c=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const y of e.hand.values()){const _=n.getJointPose(y,r);if(h.joints[y.jointName]===void 0){const A=new qo;A.matrixAutoUpdate=!1,A.visible=!1,h.joints[y.jointName]=A,h.add(A)}const T=h.joints[y.jointName];_!==null&&(T.matrix.fromArray(_.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=_.radius),T.visible=_!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&x>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(m.matrix.fromArray(a.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),a.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(a.linearVelocity)):m.hasLinearVelocity=!1,a.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(a.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent($1)))}return c!==null&&(c.visible=o!==null),m!==null&&(m.visible=a!==null),h!==null&&(h.visible=f!==null),this}}class Y1 extends jn{constructor(e,n,r,o,a,f,c,m,h,v){if(v=v!==void 0?v:Xr,v!==Xr&&v!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Xr&&(r=Hr),r===void 0&&v===Qs&&(r=qs),super(null,o,a,f,c,m,v,r,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:ln,this.minFilter=m!==void 0?m:ln,this.flipY=!1,this.generateMipmaps=!1}}class K1 extends eo{constructor(e,n){super();const r=this;let o=null,a=1,f=null,c="local-floor",m=null,h=null,v=null,g=null,x=null,S=null;const E=n.getContextAttributes();let y=null,_=null;const T=[],A=[],k=new Wn;k.layers.enable(1),k.viewport=new $t;const L=new Wn;L.layers.enable(2),L.viewport=new $t;const b=[k,L],F=new X1;F.layers.enable(1),F.layers.enable(2);let G=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=T[H];return j===void 0&&(j=new vf,T[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=T[H];return j===void 0&&(j=new vf,T[H]=j),j.getGripSpace()},this.getHand=function(H){let j=T[H];return j===void 0&&(j=new vf,T[H]=j),j.getHandSpace()};function z(H){const j=A.indexOf(H.inputSource);if(j===-1)return;const C=T[j];C!==void 0&&C.dispatchEvent({type:H.type,data:H.inputSource})}function K(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",B);for(let H=0;H<T.length;H++){const j=A[H];j!==null&&(A[H]=null,T[H].disconnect(j))}G=null,M=null,e.setRenderTarget(y),x=null,g=null,v=null,o=null,_=null,W.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){c=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(H){m=H},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(H){if(o=H,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",K),o.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:o.renderState.layers===void 0?E.antialias:!0,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,n,j),o.updateRenderState({baseLayer:x}),_=new ui(x.framebufferWidth,x.framebufferHeight,{format:ai,type:Qr,encoding:e.outputEncoding})}else{let j=null,C=null,O=null;E.depth&&(O=E.stencil?35056:33190,j=E.stencil?Qs:Xr,C=E.stencil?qs:Hr);const Y={colorFormat:32856,depthFormat:O,scaleFactor:a};v=new XRWebGLBinding(o,n),g=v.createProjectionLayer(Y),o.updateRenderState({layers:[g]}),_=new ui(g.textureWidth,g.textureHeight,{format:ai,type:Qr,depthTexture:new Y1(g.textureWidth,g.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:E.stencil,encoding:e.outputEncoding,samples:E.antialias?4:0});const he=e.properties.get(_);he.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),m=null,f=await o.requestReferenceSpace(c),W.setContext(o),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function B(H){for(let j=0;j<H.removed.length;j++){const C=H.removed[j],O=A.indexOf(C);O>=0&&(A[O]=null,T[O].dispatchEvent({type:"disconnected",data:C}))}for(let j=0;j<H.added.length;j++){const C=H.added[j];let O=A.indexOf(C);if(O===-1){for(let he=0;he<T.length;he++)if(he>=A.length){A.push(C),O=he;break}else if(A[he]===null){A[he]=C,O=he;break}if(O===-1)break}const Y=T[O];Y&&Y.dispatchEvent({type:"connected",data:C})}}const de=new Q,se=new Q;function q(H,j,C){de.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(C.matrixWorld);const O=de.distanceTo(se),Y=j.projectionMatrix.elements,he=C.projectionMatrix.elements,ve=Y[14]/(Y[10]-1),$=Y[14]/(Y[10]+1),_e=(Y[9]+1)/Y[5],ye=(Y[9]-1)/Y[5],we=(Y[8]-1)/Y[0],Se=(he[8]+1)/he[0],je=ve*we,Ge=ve*Se,Ie=O/(-we+Se),dt=Ie*-we;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(dt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Nt=ve+Ie,xt=$+Ie,Lt=je-dt,ht=Ge+(O-dt),rt=_e*$/xt*Nt,Ut=ye*$/xt*Nt;H.projectionMatrix.makePerspective(Lt,ht,rt,Ut,Nt,xt)}function le(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(o===null)return;F.near=L.near=k.near=H.near,F.far=L.far=k.far=H.far,(G!==F.near||M!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,M=F.far);const j=H.parent,C=F.cameras;le(F,j);for(let Y=0;Y<C.length;Y++)le(C[Y],j);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),H.position.copy(F.position),H.quaternion.copy(F.quaternion),H.scale.copy(F.scale),H.matrix.copy(F.matrix),H.matrixWorld.copy(F.matrixWorld);const O=H.children;for(let Y=0,he=O.length;Y<he;Y++)O[Y].updateMatrixWorld(!0);C.length===2?q(F,k,L):F.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(H){g!==null&&(g.fixedFoveation=H),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=H)};let te=null;function re(H,j){if(h=j.getViewerPose(m||f),S=j,h!==null){const C=h.views;x!==null&&(e.setRenderTargetFramebuffer(_,x.framebuffer),e.setRenderTarget(_));let O=!1;C.length!==F.cameras.length&&(F.cameras.length=0,O=!0);for(let Y=0;Y<C.length;Y++){const he=C[Y];let ve=null;if(x!==null)ve=x.getViewport(he);else{const _e=v.getViewSubImage(g,he);ve=_e.viewport,Y===0&&(e.setRenderTargetTextures(_,_e.colorTexture,g.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(_))}let $=b[Y];$===void 0&&($=new Wn,$.layers.enable(Y),$.viewport=new $t,b[Y]=$),$.matrix.fromArray(he.transform.matrix),$.projectionMatrix.fromArray(he.projectionMatrix),$.viewport.set(ve.x,ve.y,ve.width,ve.height),Y===0&&F.matrix.copy($.matrix),O===!0&&F.cameras.push($)}}for(let C=0;C<T.length;C++){const O=A[C],Y=T[C];O!==null&&Y!==void 0&&Y.update(O,j,m||f)}te&&te(H,j),S=null}const W=new vg;W.setAnimationLoop(re),this.setAnimationLoop=function(H){te=H},this.dispose=function(){}}}function Z1(u,e){function n(y,_){y.fogColor.value.copy(_.color),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,T,A,k){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(y,_):_.isMeshToonMaterial?(o(y,_),v(y,_)):_.isMeshPhongMaterial?(o(y,_),h(y,_)):_.isMeshStandardMaterial?(o(y,_),g(y,_),_.isMeshPhysicalMaterial&&x(y,_,k)):_.isMeshMatcapMaterial?(o(y,_),S(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),E(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?c(y,_,T,A):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.bumpMap&&(y.bumpMap.value=_.bumpMap,y.bumpScale.value=_.bumpScale,_.side===li&&(y.bumpScale.value*=-1)),_.displacementMap&&(y.displacementMap.value=_.displacementMap,y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap),_.normalMap&&(y.normalMap.value=_.normalMap,y.normalScale.value.copy(_.normalScale),_.side===li&&y.normalScale.value.negate()),_.specularMap&&(y.specularMap.value=_.specularMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const T=e.get(_).envMap;if(T&&(y.envMap.value=T,y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const L=u.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*L}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity);let A;_.map?A=_.map:_.specularMap?A=_.specularMap:_.displacementMap?A=_.displacementMap:_.normalMap?A=_.normalMap:_.bumpMap?A=_.bumpMap:_.roughnessMap?A=_.roughnessMap:_.metalnessMap?A=_.metalnessMap:_.alphaMap?A=_.alphaMap:_.emissiveMap?A=_.emissiveMap:_.clearcoatMap?A=_.clearcoatMap:_.clearcoatNormalMap?A=_.clearcoatNormalMap:_.clearcoatRoughnessMap?A=_.clearcoatRoughnessMap:_.iridescenceMap?A=_.iridescenceMap:_.iridescenceThicknessMap?A=_.iridescenceThicknessMap:_.specularIntensityMap?A=_.specularIntensityMap:_.specularColorMap?A=_.specularColorMap:_.transmissionMap?A=_.transmissionMap:_.thicknessMap?A=_.thicknessMap:_.sheenColorMap?A=_.sheenColorMap:_.sheenRoughnessMap&&(A=_.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uvTransform.value.copy(A.matrix));let k;_.aoMap?k=_.aoMap:_.lightMap&&(k=_.lightMap),k!==void 0&&(k.isWebGLRenderTarget&&(k=k.texture),k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uv2Transform.value.copy(k.matrix))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,T,A){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=A*.5,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let k;_.map?k=_.map:_.alphaMap&&(k=_.alphaMap),k!==void 0&&(k.matrixAutoUpdate===!0&&k.updateMatrix(),y.uvTransform.value.copy(k.matrix))}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let T;_.map?T=_.map:_.alphaMap&&(T=_.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),y.uvTransform.value.copy(T.matrix))}function h(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.roughness.value=_.roughness,y.metalness.value=_.metalness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),y.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===li&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap)}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){y.referencePosition.value.copy(_.referencePosition),y.nearDistance.value=_.nearDistance,y.farDistance.value=_.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Q1(u,e,n,r){let o={},a={},f=[];const c=n.isWebGL2?u.getParameter(35375):0;function m(A,k){const L=k.program;r.uniformBlockBinding(A,L)}function h(A,k){let L=o[A.id];L===void 0&&(E(A),L=v(A),o[A.id]=L,A.addEventListener("dispose",_));const b=k.program;r.updateUBOMapping(A,b);const F=e.render.frame;a[A.id]!==F&&(x(A),a[A.id]=F)}function v(A){const k=g();A.__bindingPointIndex=k;const L=u.createBuffer(),b=A.__size,F=A.usage;return u.bindBuffer(35345,L),u.bufferData(35345,b,F),u.bindBuffer(35345,null),u.bindBufferBase(35345,k,L),L}function g(){for(let A=0;A<c;A++)if(f.indexOf(A)===-1)return f.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const k=o[A.id],L=A.uniforms,b=A.__cache;u.bindBuffer(35345,k);for(let F=0,G=L.length;F<G;F++){const M=L[F];if(S(M,F,b)===!0){const z=M.value,K=M.__offset;typeof z=="number"?(M.__data[0]=z,u.bufferSubData(35345,K,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):z.toArray(M.__data),u.bufferSubData(35345,K,M.__data))}}u.bindBuffer(35345,null)}function S(A,k,L){const b=A.value;if(L[k]===void 0)return typeof b=="number"?L[k]=b:L[k]=b.clone(),!0;if(typeof b=="number"){if(L[k]!==b)return L[k]=b,!0}else{const F=L[k];if(F.equals(b)===!1)return F.copy(b),!0}return!1}function E(A){const k=A.uniforms;let L=0;const b=16;let F=0;for(let G=0,M=k.length;G<M;G++){const z=k[G],K=y(z);if(z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=L,G>0){F=L%b;const B=b-F;F!==0&&B-K.boundary<0&&(L+=b-F,z.__offset=L)}L+=K.storage}return F=L%b,F>0&&(L+=b-F),A.__size=L,A.__cache={},this}function y(A){const k=A.value,L={boundary:0,storage:0};return typeof k=="number"?(L.boundary=4,L.storage=4):k.isVector2?(L.boundary=8,L.storage=8):k.isVector3||k.isColor?(L.boundary=16,L.storage=12):k.isVector4?(L.boundary=16,L.storage=16):k.isMatrix3?(L.boundary=48,L.storage=48):k.isMatrix4?(L.boundary=64,L.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),L}function _(A){const k=A.target;k.removeEventListener("dispose",_);const L=f.indexOf(k.__bindingPointIndex);f.splice(L,1),u.deleteBuffer(o[k.id]),delete o[k.id],delete a[k.id]}function T(){for(const A in o)u.deleteBuffer(o[A]);f=[],o={},a={}}return{bind:m,update:h,dispose:T}}function J1(){const u=Wl("canvas");return u.style.display="block",u}function eM(u={}){this.isWebGLRenderer=!0;const e=u.canvas!==void 0?u.canvas:J1(),n=u.context!==void 0?u.context:null,r=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,a=u.antialias!==void 0?u.antialias:!1,f=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,m=u.powerPreference!==void 0?u.powerPreference:"default",h=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let v;n!==null?v=n.getContextAttributes().alpha:v=u.alpha!==void 0?u.alpha:!1;let g=null,x=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jr,this.physicallyCorrectLights=!1,this.toneMapping=zi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const y=this;let _=!1,T=0,A=0,k=null,L=-1,b=null;const F=new $t,G=new $t;let M=null,z=e.width,K=e.height,B=1,de=null,se=null;const q=new $t(0,0,z,K),le=new $t(0,0,z,K);let te=!1;const re=new gg;let W=!1,H=!1,j=null;const C=new Yt,O=new Qe,Y=new Q,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return k===null?B:1}let $=n;function _e(P,ee){for(let oe=0;oe<P.length;oe++){const ie=P[oe],pe=e.getContext(ie,ee);if(pe!==null)return pe}return null}try{const P={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kf}`),e.addEventListener("webglcontextlost",Ye,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",_t,!1),$===null){const ee=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&ee.shift(),$=_e(ee,P),$===null)throw _e(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ye,we,Se,je,Ge,Ie,dt,Nt,xt,Lt,ht,rt,Ut,Pt,N,R,ce,Me,Te,Ae,qe,ae,Ue,De;function Be(){ye=new uw($),we=new iw($,ye,u),ye.init(we),ae=new q1($,ye,we),Se=new H1($,ye,we),je=new dw,Ge=new L1,Ie=new j1($,ye,Se,Ge,we,ae,je),dt=new sw(y),Nt=new lw(y),xt=new E_($,we),Ue=new tw($,ye,xt,we),Lt=new cw($,xt,je,Ue),ht=new gw($,Lt,xt,je),Te=new mw($,we,Ie),R=new rw(Ge),rt=new R1(y,dt,Nt,ye,we,Ue,R),Ut=new Z1(y,Ge),Pt=new D1,N=new O1(ye,we),Me=new ew(y,dt,Se,ht,v,f),ce=new W1(y,ht,we),De=new Q1($,je,we,Se),Ae=new nw($,ye,je,we),qe=new fw($,ye,je,we),je.programs=rt.programs,y.capabilities=we,y.extensions=ye,y.properties=Ge,y.renderLists=Pt,y.shadowMap=ce,y.state=Se,y.info=je}Be();const ke=new K1(y,$);this.xr=ke,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(z,K,!1))},this.getSize=function(P){return P.set(z,K)},this.setSize=function(P,ee,oe){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,K=ee,e.width=Math.floor(P*B),e.height=Math.floor(ee*B),oe!==!1&&(e.style.width=P+"px",e.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(z*B,K*B).floor()},this.setDrawingBufferSize=function(P,ee,oe){z=P,K=ee,B=oe,e.width=Math.floor(P*oe),e.height=Math.floor(ee*oe),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,ee,oe,ie){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,ee,oe,ie),Se.viewport(F.copy(q).multiplyScalar(B).floor())},this.getScissor=function(P){return P.copy(le)},this.setScissor=function(P,ee,oe,ie){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,ee,oe,ie),Se.scissor(G.copy(le).multiplyScalar(B).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(P){Se.setScissorTest(te=P)},this.setOpaqueSort=function(P){de=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(P=!0,ee=!0,oe=!0){let ie=0;P&&(ie|=16384),ee&&(ie|=256),oe&&(ie|=1024),$.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ye,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Pt.dispose(),N.dispose(),Ge.dispose(),dt.dispose(),Nt.dispose(),ht.dispose(),Ue.dispose(),De.dispose(),rt.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Je),ke.removeEventListener("sessionend",kt),j&&(j.dispose(),j=null),Et.stop()};function Ye(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=je.autoReset,ee=ce.enabled,oe=ce.autoUpdate,ie=ce.needsUpdate,pe=ce.type;Be(),je.autoReset=P,ce.enabled=ee,ce.autoUpdate=oe,ce.needsUpdate=ie,ce.type=pe}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function X(P){const ee=P.target;ee.removeEventListener("dispose",X),Le(ee)}function Le(P){ue(P),Ge.remove(P)}function ue(P){const ee=Ge.get(P).programs;ee!==void 0&&(ee.forEach(function(oe){rt.releaseProgram(oe)}),P.isShaderMaterial&&rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,oe,ie,pe,Xe){ee===null&&(ee=he);const He=pe.isMesh&&pe.matrixWorld.determinant()<0,Ze=yr(P,ee,oe,ie,pe);Se.setMaterial(ie,He);let Ke=oe.index;const ct=oe.attributes.position;if(Ke===null){if(ct===void 0||ct.count===0)return}else if(Ke.count===0)return;let nt=1;ie.wireframe===!0&&(Ke=Lt.getWireframeAttribute(oe),nt=2),Ue.setup(pe,ie,Ze,oe,Ke);let it,St=Ae;Ke!==null&&(it=xt.get(Ke),St=qe,St.setIndex(it));const ci=Ke!==null?Ke.count:ct.count,Oi=oe.drawRange.start*nt,Ui=oe.drawRange.count*nt,at=Xe!==null?Xe.start*nt:0,lt=Xe!==null?Xe.count*nt:1/0,fi=Math.max(Oi,at),Ct=Math.min(ci,Oi+Ui,at+lt)-1,Kt=Math.max(0,Ct-fi+1);if(Kt!==0){if(pe.isMesh)ie.wireframe===!0?(Se.setLineWidth(ie.wireframeLinewidth*ve()),St.setMode(1)):St.setMode(4);else if(pe.isLine){let di=ie.linewidth;di===void 0&&(di=1),Se.setLineWidth(di*ve()),pe.isLineSegments?St.setMode(1):pe.isLineLoop?St.setMode(2):St.setMode(3)}else pe.isPoints?St.setMode(0):pe.isSprite&&St.setMode(4);if(pe.isInstancedMesh)St.renderInstances(fi,Kt,pe.count);else if(oe.isInstancedBufferGeometry){const di=Math.min(oe.instanceCount,oe._maxInstanceCount);St.renderInstances(fi,Kt,di)}else St.render(fi,Kt)}},this.compile=function(P,ee){x=N.get(P),x.init(),E.push(x),P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ee.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),x.setupLights(y.physicallyCorrectLights),P.traverse(function(oe){const ie=oe.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const Xe=ie[pe];_i(Xe,P,oe)}else _i(ie,P,oe)}),E.pop(),x=null};let Re=null;function be(P){Re&&Re(P)}function Je(){Et.stop()}function kt(){Et.start()}const Et=new vg;Et.setAnimationLoop(be),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(P){Re=P,ke.setAnimationLoop(P),P===null?Et.stop():Et.start()},ke.addEventListener("sessionstart",Je),ke.addEventListener("sessionend",kt),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ee),ee=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,ee,k),x=N.get(P,E.length),x.init(),E.push(x),C.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),re.setFromProjectionMatrix(C),H=this.localClippingEnabled,W=R.init(this.clippingPlanes,H,ee),g=Pt.get(P,S.length),g.init(),S.push(g),$n(P,ee,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(de,se),W===!0&&R.beginShadows();const oe=x.state.shadowsArray;if(ce.render(oe,P,ee),W===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),Me.render(g,P),x.setupLights(y.physicallyCorrectLights),ee.isArrayCamera){const ie=ee.cameras;for(let pe=0,Xe=ie.length;pe<Xe;pe++){const He=ie[pe];yt(g,P,He,He.viewport)}}else yt(g,P,ee);k!==null&&(Ie.updateMultisampleRenderTarget(k),Ie.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(y,P,ee),Ue.resetDefaultState(),L=-1,b=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function $n(P,ee,oe,ie){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||re.intersectsSprite(P)){ie&&Y.setFromMatrixPosition(P.matrixWorld).applyMatrix4(C);const He=ht.update(P),Ze=P.material;Ze.visible&&g.push(P,He,Ze,oe,Y.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==je.render.frame&&(P.skeleton.update(),P.skeleton.frame=je.render.frame),!P.frustumCulled||re.intersectsObject(P))){ie&&Y.setFromMatrixPosition(P.matrixWorld).applyMatrix4(C);const He=ht.update(P),Ze=P.material;if(Array.isArray(Ze)){const Ke=He.groups;for(let ct=0,nt=Ke.length;ct<nt;ct++){const it=Ke[ct],St=Ze[it.materialIndex];St&&St.visible&&g.push(P,He,St,oe,Y.z,it)}}else Ze.visible&&g.push(P,He,Ze,oe,Y.z,null)}}const Xe=P.children;for(let He=0,Ze=Xe.length;He<Ze;He++)$n(Xe[He],ee,oe,ie)}function yt(P,ee,oe,ie){const pe=P.opaque,Xe=P.transmissive,He=P.transparent;x.setupLightsView(oe),Xe.length>0&&In(pe,ee,oe),ie&&Se.viewport(F.copy(ie)),pe.length>0&&en(pe,ee,oe),Xe.length>0&&en(Xe,ee,oe),He.length>0&&en(He,ee,oe),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function In(P,ee,oe){const ie=we.isWebGL2;j===null&&(j=new ui(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Qo:Qr,minFilter:Xl,samples:ie&&a===!0?4:0})),y.getDrawingBufferSize(O),ie?j.setSize(O.x,O.y):j.setSize(Cf(O.x),Cf(O.y));const pe=y.getRenderTarget();y.setRenderTarget(j),y.clear();const Xe=y.toneMapping;y.toneMapping=zi,en(P,ee,oe),y.toneMapping=Xe,Ie.updateMultisampleRenderTarget(j),Ie.updateRenderTargetMipmap(j),y.setRenderTarget(pe)}function en(P,ee,oe){const ie=ee.isScene===!0?ee.overrideMaterial:null;for(let pe=0,Xe=P.length;pe<Xe;pe++){const He=P[pe],Ze=He.object,Ke=He.geometry,ct=ie===null?He.material:ie,nt=He.group;Ze.layers.test(oe.layers)&&la(Ze,ee,oe,Ke,ct,nt)}}function la(P,ee,oe,ie,pe,Xe){P.onBeforeRender(y,ee,oe,ie,pe,Xe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),pe.onBeforeRender(y,ee,oe,ie,P,Xe),pe.transparent===!0&&pe.side===Ys?(pe.side=li,pe.needsUpdate=!0,y.renderBufferDirect(oe,ee,ie,pe,P,Xe),pe.side=Ko,pe.needsUpdate=!0,y.renderBufferDirect(oe,ee,ie,pe,P,Xe),pe.side=Ys):y.renderBufferDirect(oe,ee,ie,pe,P,Xe),P.onAfterRender(y,ee,oe,ie,pe,Xe)}function _i(P,ee,oe){ee.isScene!==!0&&(ee=he);const ie=Ge.get(P),pe=x.state.lights,Xe=x.state.shadowsArray,He=pe.state.version,Ze=rt.getParameters(P,pe.state,Xe,ee,oe),Ke=rt.getProgramCacheKey(Ze);let ct=ie.programs;ie.environment=P.isMeshStandardMaterial?ee.environment:null,ie.fog=ee.fog,ie.envMap=(P.isMeshStandardMaterial?Nt:dt).get(P.envMap||ie.environment),ct===void 0&&(P.addEventListener("dispose",X),ct=new Map,ie.programs=ct);let nt=ct.get(Ke);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===He)return ts(P,Ze),nt}else Ze.uniforms=rt.getUniforms(P),P.onBuild(oe,Ze,y),P.onBeforeCompile(Ze,y),nt=rt.acquireProgram(Ze,Ke),ct.set(Ke,nt),ie.uniforms=Ze.uniforms;const it=ie.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=R.uniform),ts(P,Ze),ie.needsLights=Sr(P),ie.lightsStateVersion=He,ie.needsLights&&(it.ambientLightColor.value=pe.state.ambient,it.lightProbe.value=pe.state.probe,it.directionalLights.value=pe.state.directional,it.directionalLightShadows.value=pe.state.directionalShadow,it.spotLights.value=pe.state.spot,it.spotLightShadows.value=pe.state.spotShadow,it.rectAreaLights.value=pe.state.rectArea,it.ltc_1.value=pe.state.rectAreaLTC1,it.ltc_2.value=pe.state.rectAreaLTC2,it.pointLights.value=pe.state.point,it.pointLightShadows.value=pe.state.pointShadow,it.hemisphereLights.value=pe.state.hemi,it.directionalShadowMap.value=pe.state.directionalShadowMap,it.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,it.spotShadowMap.value=pe.state.spotShadowMap,it.spotShadowMatrix.value=pe.state.spotShadowMatrix,it.pointShadowMap.value=pe.state.pointShadowMap,it.pointShadowMatrix.value=pe.state.pointShadowMatrix);const St=nt.getUniforms(),ci=Bl.seqWithValue(St.seq,it);return ie.currentProgram=nt,ie.uniformsList=ci,nt}function ts(P,ee){const oe=Ge.get(P);oe.outputEncoding=ee.outputEncoding,oe.instancing=ee.instancing,oe.skinning=ee.skinning,oe.morphTargets=ee.morphTargets,oe.morphNormals=ee.morphNormals,oe.morphColors=ee.morphColors,oe.morphTargetsCount=ee.morphTargetsCount,oe.numClippingPlanes=ee.numClippingPlanes,oe.numIntersection=ee.numClipIntersection,oe.vertexAlphas=ee.vertexAlphas,oe.vertexTangents=ee.vertexTangents,oe.toneMapping=ee.toneMapping}function yr(P,ee,oe,ie,pe){ee.isScene!==!0&&(ee=he),Ie.resetTextureUnits();const Xe=ee.fog,He=ie.isMeshStandardMaterial?ee.environment:null,Ze=k===null?y.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Jr,Ke=(ie.isMeshStandardMaterial?Nt:dt).get(ie.envMap||He),ct=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!ie.normalMap&&!!oe.attributes.tangent,it=!!oe.morphAttributes.position,St=!!oe.morphAttributes.normal,ci=!!oe.morphAttributes.color,Oi=ie.toneMapped?y.toneMapping:zi,Ui=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,at=Ui!==void 0?Ui.length:0,lt=Ge.get(ie),fi=x.state.lights;if(W===!0&&(H===!0||P!==b)){const cn=P===b&&ie.id===L;R.setState(ie,P,cn)}let Ct=!1;ie.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==fi.state.version||lt.outputEncoding!==Ze||pe.isInstancedMesh&&lt.instancing===!1||!pe.isInstancedMesh&&lt.instancing===!0||pe.isSkinnedMesh&&lt.skinning===!1||!pe.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==Ke||ie.fog===!0&&lt.fog!==Xe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==R.numPlanes||lt.numIntersection!==R.numIntersection)||lt.vertexAlphas!==ct||lt.vertexTangents!==nt||lt.morphTargets!==it||lt.morphNormals!==St||lt.morphColors!==ci||lt.toneMapping!==Oi||we.isWebGL2===!0&&lt.morphTargetsCount!==at)&&(Ct=!0):(Ct=!0,lt.__version=ie.version);let Kt=lt.currentProgram;Ct===!0&&(Kt=_i(ie,ee,pe));let di=!1,Bi=!1,Gi=!1;const mt=Kt.getUniforms(),wr=lt.uniforms;if(Se.useProgram(Kt.program)&&(di=!0,Bi=!0,Gi=!0),ie.id!==L&&(L=ie.id,Bi=!0),di||b!==P){if(mt.setValue($,"projectionMatrix",P.projectionMatrix),we.logarithmicDepthBuffer&&mt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),b!==P&&(b=P,Bi=!0,Gi=!0),ie.isShaderMaterial||ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshStandardMaterial||ie.envMap){const cn=mt.map.cameraPosition;cn!==void 0&&cn.setValue($,Y.setFromMatrixPosition(P.matrixWorld))}(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&mt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial||ie.isShadowMaterial||pe.isSkinnedMesh)&&mt.setValue($,"viewMatrix",P.matrixWorldInverse)}if(pe.isSkinnedMesh){mt.setOptional($,pe,"bindMatrix"),mt.setOptional($,pe,"bindMatrixInverse");const cn=pe.skeleton;cn&&(we.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),mt.setValue($,"boneTexture",cn.boneTexture,Ie),mt.setValue($,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const un=oe.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&we.isWebGL2===!0)&&Te.update(pe,oe,ie,Kt),(Bi||lt.receiveShadow!==pe.receiveShadow)&&(lt.receiveShadow=pe.receiveShadow,mt.setValue($,"receiveShadow",pe.receiveShadow)),Bi&&(mt.setValue($,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&Kl(wr,Gi),Xe&&ie.fog===!0&&Ut.refreshFogUniforms(wr,Xe),Ut.refreshMaterialUniforms(wr,ie,B,K,j),Bl.upload($,lt.uniformsList,wr,Ie)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bl.upload($,lt.uniformsList,wr,Ie),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&mt.setValue($,"center",pe.center),mt.setValue($,"modelViewMatrix",pe.modelViewMatrix),mt.setValue($,"normalMatrix",pe.normalMatrix),mt.setValue($,"modelMatrix",pe.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const cn=ie.uniformsGroups;for(let no=0,Zl=cn.length;no<Zl;no++)if(we.isWebGL2){const Mr=cn[no];De.update(Mr,Kt),De.bind(Mr,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function Kl(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function Sr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,ee,oe){Ge.get(P.texture).__webglTexture=ee,Ge.get(P.depthTexture).__webglTexture=oe;const ie=Ge.get(P);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=oe===void 0,ie.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,ee){const oe=Ge.get(P);oe.__webglFramebuffer=ee,oe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(P,ee=0,oe=0){k=P,T=ee,A=oe;let ie=!0;if(P){const Ke=Ge.get(P);Ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),ie=!1):Ke.__webglFramebuffer===void 0?Ie.setupRenderTarget(P):Ke.__hasExternalTextures&&Ie.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture)}let pe=null,Xe=!1,He=!1;if(P){const Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture)&&(He=!0);const ct=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(pe=ct[ee],Xe=!0):we.isWebGL2&&P.samples>0&&Ie.useMultisampledRTT(P)===!1?pe=Ge.get(P).__webglMultisampledFramebuffer:pe=ct,F.copy(P.viewport),G.copy(P.scissor),M=P.scissorTest}else F.copy(q).multiplyScalar(B).floor(),G.copy(le).multiplyScalar(B).floor(),M=te;if(Se.bindFramebuffer(36160,pe)&&we.drawBuffers&&ie&&Se.drawBuffers(P,pe),Se.viewport(F),Se.scissor(G),Se.setScissorTest(M),Xe){const Ke=Ge.get(P.texture);$.framebufferTexture2D(36160,36064,34069+ee,Ke.__webglTexture,oe)}else if(He){const Ke=Ge.get(P.texture),ct=ee||0;$.framebufferTextureLayer(36160,36064,Ke.__webglTexture,oe||0,ct)}L=-1},this.readRenderTargetPixels=function(P,ee,oe,ie,pe,Xe,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){Se.bindFramebuffer(36160,Ze);try{const Ke=P.texture,ct=Ke.format,nt=Ke.type;if(ct!==ai&&ae.convert(ct)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=nt===Qo&&(ye.has("EXT_color_buffer_half_float")||we.isWebGL2&&ye.has("EXT_color_buffer_float"));if(nt!==Qr&&ae.convert(nt)!==$.getParameter(35738)&&!(nt===jr&&(we.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-ie&&oe>=0&&oe<=P.height-pe&&$.readPixels(ee,oe,ie,pe,ae.convert(ct),ae.convert(nt),Xe)}finally{const Ke=k!==null?Ge.get(k).__webglFramebuffer:null;Se.bindFramebuffer(36160,Ke)}}},this.copyFramebufferToTexture=function(P,ee,oe=0){const ie=Math.pow(2,-oe),pe=Math.floor(ee.image.width*ie),Xe=Math.floor(ee.image.height*ie);Ie.setTexture2D(ee,0),$.copyTexSubImage2D(3553,oe,0,0,P.x,P.y,pe,Xe),Se.unbindTexture()},this.copyTextureToTexture=function(P,ee,oe,ie=0){const pe=ee.image.width,Xe=ee.image.height,He=ae.convert(oe.format),Ze=ae.convert(oe.type);Ie.setTexture2D(oe,0),$.pixelStorei(37440,oe.flipY),$.pixelStorei(37441,oe.premultiplyAlpha),$.pixelStorei(3317,oe.unpackAlignment),ee.isDataTexture?$.texSubImage2D(3553,ie,P.x,P.y,pe,Xe,He,Ze,ee.image.data):ee.isCompressedTexture?$.compressedTexSubImage2D(3553,ie,P.x,P.y,ee.mipmaps[0].width,ee.mipmaps[0].height,He,ee.mipmaps[0].data):$.texSubImage2D(3553,ie,P.x,P.y,He,Ze,ee.image),ie===0&&oe.generateMipmaps&&$.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(P,ee,oe,ie,pe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=P.max.x-P.min.x+1,He=P.max.y-P.min.y+1,Ze=P.max.z-P.min.z+1,Ke=ae.convert(ie.format),ct=ae.convert(ie.type);let nt;if(ie.isData3DTexture)Ie.setTexture3D(ie,0),nt=32879;else if(ie.isDataArrayTexture)Ie.setTexture2DArray(ie,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,ie.flipY),$.pixelStorei(37441,ie.premultiplyAlpha),$.pixelStorei(3317,ie.unpackAlignment);const it=$.getParameter(3314),St=$.getParameter(32878),ci=$.getParameter(3316),Oi=$.getParameter(3315),Ui=$.getParameter(32877),at=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;$.pixelStorei(3314,at.width),$.pixelStorei(32878,at.height),$.pixelStorei(3316,P.min.x),$.pixelStorei(3315,P.min.y),$.pixelStorei(32877,P.min.z),oe.isDataTexture||oe.isData3DTexture?$.texSubImage3D(nt,pe,ee.x,ee.y,ee.z,Xe,He,Ze,Ke,ct,at.data):oe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(nt,pe,ee.x,ee.y,ee.z,Xe,He,Ze,Ke,at.data)):$.texSubImage3D(nt,pe,ee.x,ee.y,ee.z,Xe,He,Ze,Ke,ct,at),$.pixelStorei(3314,it),$.pixelStorei(32878,St),$.pixelStorei(3316,ci),$.pixelStorei(3315,Oi),$.pixelStorei(32877,Ui),pe===0&&ie.generateMipmaps&&$.generateMipmap(nt),Se.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ie.setTextureCube(P,0):P.isData3DTexture?Ie.setTexture3D(P,0):P.isDataArrayTexture?Ie.setTexture2DArray(P,0):Ie.setTexture2D(P,0),Se.unbindTexture()},this.resetState=function(){T=0,A=0,k=null,Se.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mg extends eM{}Mg.prototype.isWebGL1Renderer=!0;class Bf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=n,this.far=r}clone(){return new Bf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class tM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class nM extends jn{constructor(e=null,n=1,r=1,o,a,f,c,m,h=ln,v=ln,g,x){super(null,f,c,m,h,v,o,a,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iM extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fm=new Yt,Rf=new cg,Nl=new $l,kl=new Q;class zm extends qn{constructor(e=new Xn,n=new iM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(o),Nl.radius+=a,e.ray.intersectsSphere(Nl)===!1)return;Fm.copy(o).invert(),Rf.copy(e.ray).applyMatrix4(Fm);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),m=c*c,h=r.index,g=r.attributes.position;if(h!==null){const x=Math.max(0,f.start),S=Math.min(h.count,f.start+f.count);for(let E=x,y=S;E<y;E++){const _=h.getX(E);kl.fromBufferAttribute(g,_),Om(kl,_,m,o,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=x,y=S;E<y;E++)kl.fromBufferAttribute(g,E),Om(kl,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=o.length;a<f;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Om(u,e,n,r,o,a,f){const c=Rf.distanceSqToPoint(u);if(c<n){const m=new Q;Rf.closestPointToPoint(u,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:m,index:e,face:null,object:f})}}class Gf extends Xn{constructor(e=1,n=32,r=16,o=0,a=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:a,thetaStart:f,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+c,Math.PI);let h=0;const v=[],g=new Q,x=new Q,S=[],E=[],y=[],_=[];for(let T=0;T<=r;T++){const A=[],k=T/r;let L=0;T==0&&f==0?L=.5/n:T==r&&m==Math.PI&&(L=-.5/n);for(let b=0;b<=n;b++){const F=b/n;g.x=-e*Math.cos(o+F*a)*Math.sin(f+k*c),g.y=e*Math.cos(f+k*c),g.z=e*Math.sin(o+F*a)*Math.sin(f+k*c),E.push(g.x,g.y,g.z),x.copy(g).normalize(),y.push(x.x,x.y,x.z),_.push(F+L,1-k),A.push(h++)}v.push(A)}for(let T=0;T<r;T++)for(let A=0;A<n;A++){const k=v[T][A+1],L=v[T][A],b=v[T+1][A],F=v[T+1][A+1];(T!==0||f>0)&&S.push(k,L,F),(T!==r-1||m<Math.PI)&&S.push(L,b,F)}this.setIndex(S),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(_,2))}static fromJSON(e){return new Gf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Um();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Um(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);const Jo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class aa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const sM=new Of(-1,1,1,-1,0,1),Vf=new Xn;Vf.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3));Vf.setAttribute("uv",new En([0,2,0,0,2,0],2));class Eg{constructor(e){this._mesh=new Fi(Vf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hs extends aa{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hl.clone(e.uniforms),this.material=new hn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Eg(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Bm extends aa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let f,c;this.inverse?(f=0,c=1):(f=1,c=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),a.buffers.stencil.setClear(c),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class oM extends aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xf{constructor(e,n){if(this.renderer=e,n===void 0){const r=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Jo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Hs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Hs(Jo),this.clock=new rM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let o=0,a=this.passes.length;o<a;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const c=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Bm!==void 0&&(f instanceof Bm?r=!0:f instanceof oM&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Of(-1,1,1,-1,0,1);const Tg=new Xn;Tg.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3));Tg.setAttribute("uv",new En([0,2,0,0,2,0],2));class aM extends aa{constructor(e,n,r,o,a){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(e,n,r){const o=e.autoClear;e.autoClear=!1;let a,f;this.overrideMaterial!==void 0&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=f),e.autoClear=o}}const Gm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class es extends aa{constructor(e,n,r,o){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(a,f),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new ui(a,f);x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const S=new ui(a,f);S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),a=Math.round(a/2),f=Math.round(f/2)}Gm===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const c=Gm;this.highPassUniforms=Hl.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Qe(a,f),a=Math.round(a/2),f=Math.round(f/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Jo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const v=Jo;this.copyUniforms=Hl.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new hn({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Zo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new Ff,this.fsQuad=new Eg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,n){let r=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(r,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,o),this.renderTargetsVertical[a].setSize(r,o),this.separableBlurMaterials[a].uniforms.texSize.value=new Qe(r,o),r=Math.round(r/2),o=Math.round(o/2)}render(e,n,r,o,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this.fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[m].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[m];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=f}getSeperableBlurMaterial(e){return new hn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}es.BlurDirectionX=new Qe(1,0);es.BlurDirectionY=new Qe(0,1);const Vm={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},lM="#02160c",uM="#0aff7f",cM="#aef0c0",fM=.2,dM="#7affbf",hM=300,pM=24,mM=1,gM="#02160c",vM="#34e89a",xM=.26,_M=5.5,yM=.45,Wm=3,Hm=1,SM=.275,wM=1,MM=7,EM=16,TM=.8,bM=-2,CM=2,AM=-16,_f=1.2,RM=7,LM=.9,pr=(u,e,n)=>u+(e-u)*n,jm=(u,e,n)=>Math.max(e,Math.min(n,u));function Xs(u){const e=parseInt(u.slice(1),16);return new Q((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)}const PM=`
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
`,mr={TORUS_SCENE:1,BLOOM_SCENE:2,ENTIRE_SCENE:3},DM={uniforms:{iTime:{value:0},tDiffuse:{value:null},torusTexture:{value:null},bloomTexture:{value:null},haloTexture:{value:null},uBg:{value:Xs(lM)},uFlameA:{value:Xs(uM)},uFlameB:{value:Xs(cM)},uFlameAmt:{value:fM}},vertexShader:`
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
  `};function IM(){const u=fe.useRef(null),e=fe.useRef(null);return fe.useEffect(()=>{const n=u.current;if(!n)return;const r=new Mg({canvas:n,antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Vs;const o=new tM;o.background=new ft(0),o.fog=new Bf(0,0,15);const a=new Wn(45,window.innerWidth/window.innerHeight,.1,400);a.position.set(0,7,16),a.layers.enable(mr.TORUS_SCENE),a.layers.enable(mr.BLOOM_SCENE),a.layers.enable(mr.ENTIRE_SCENE),o.add(a);const f=new Gf(4.2,200,600),c=new hn({transparent:!0,depthWrite:!1,blending:Zo,uniforms:{uTime:{value:0},uStream:{value:0},uAppear:{value:0},uColLow:{value:Xs(gM)},uColHigh:{value:Xs(vM)},uOpacity:{value:xM},uSize:{value:_M},uBrightness:{value:yM},uWaveHeight:{value:Wm},uFlow:{value:Hm},uScale:{value:SM},uCursor:{value:new Q},uRepelRadius:{value:RM},uRepelStrength:{value:LM},uActivity:{value:0}},vertexShader:`
        uniform float uTime; uniform float uStream; uniform float uSize; uniform float uWaveHeight; uniform float uFlow; uniform float uScale;
        uniform vec3 uColLow; uniform vec3 uColHigh;
        uniform vec3 uCursor; uniform float uRepelRadius; uniform float uRepelStrength; uniform float uActivity;
        varying float vFade; varying vec3 vColor;
        ${PM}
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
      `}),m=new zm(f,c);m.frustumCulled=!1,m.layers.enable(mr.ENTIRE_SCENE);const h=new qo;h.add(m),o.add(h);const v=new aM(o,a),g=new xf(r);g.renderToScreen=!1,g.addPass(v),g.addPass(new Hs(Vm)),g.addPass(new es(new Qe(window.innerWidth,window.innerHeight),.22,.2,0)),g.addPass(new Hs(Jo));const x=new xf(r);x.renderToScreen=!1,x.addPass(v),x.addPass(new es(new Qe(window.innerWidth,window.innerHeight),.4,.55,0)),x.addPass(new Hs(Vm));const S=new Hs(DM);S.uniforms.bloomTexture.value=x.renderTarget1.texture,S.uniforms.torusTexture.value=g.renderTarget1.texture;const E=new Uint8Array([0,0,0,255]),y=new nM(E,1,1,ai);y.needsUpdate=!0,S.uniforms.haloTexture.value=y;const _=new xf(r);_.addPass(v),_.addPass(S);const T=Math.round(hM),A=new Float32Array(T*3),k=new Float32Array(T),L=new Float32Array(T);for(let _e=0;_e<T;_e++)A[_e*3]=2*Math.random()-1,A[_e*3+1]=2*Math.random()-1,A[_e*3+2]=2*Math.random()-1,k[_e]=pM*(.4+Math.random()),L[_e]=Math.random();const b=new Xn;b.setAttribute("position",new Dn(A,3)),b.setAttribute("size",new Dn(k,1)),b.setAttribute("seed",new Dn(L,1));const F=new hn({transparent:!0,blending:Zo,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uColor:{value:Xs(dM)},uRes:{value:new Qe(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}},vertexShader:`
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
      `}),G=new zm(b,F);G.frustumCulled=!1,G.layers.enable(mr.ENTIRE_SCENE),o.add(G);let M=0,z=0,K=0;const B={x:0,y:0},de={x:0,y:0},se={world:new Q,activity:0,active:!1,lastMove:performance.now()},q=new Q,le=new Q,te=new Q;function re(){if(te.set(0,0,0),se.active){q.set(de.x,de.y,.5).unproject(a),le.copy(q).sub(a.position).normalize();const ye=le.z;if(Math.abs(ye)>1e-4){const we=-a.position.z/ye;we>0&&Number.isFinite(we)&&te.copy(a.position).addScaledVector(le,we)}}se.world.lerp(te,.12);const _e=(performance.now()-se.lastMove)/1e3;se.activity+=((se.active&&_e<3?1:0)-se.activity)*.06}const W=()=>{const _e=document.documentElement.scrollHeight-window.innerHeight;M=_e>0?jm(window.scrollY/_e,0,1):0},H=_e=>{B.x=_e.clientX/window.innerWidth*2-1,B.y=-(_e.clientY/window.innerHeight*2-1),se.active=!0,se.lastMove=performance.now()},j=()=>{se.active=!1};window.addEventListener("scroll",W,{passive:!0}),window.addEventListener("mousemove",H,{passive:!0}),window.addEventListener("mouseout",j);let C=0;const O=performance.now();let Y=performance.now()/1e3,he=!0;function ve(){if(!he)return;requestAnimationFrame(ve);const _e=performance.now()/1e3,ye=Math.min(.05,_e-Y);Y=_e,z=pr(z,M,.1),K=pr(K,z,.06),de.x=pr(de.x,B.x,.06),de.y=pr(de.y,B.y,.06),c.uniforms.uTime.value=_e,C+=ye*(Hm*2)*4,c.uniforms.uStream.value=C,c.uniforms.uWaveHeight.value=Wm*(1+K*wM);const we=Math.min(K/.35,1),Se=we*we*(3-2*we),je=pr(MM,TM,Se),Ge=pr(EM,bM,Se);a.position.set(de.x*_f,je+de.y*_f*.3,Ge),a.lookAt(de.x*_f*.5,pr(0,.6,Se),pr(CM,AM,Se)),h.rotation.x=-0,h.rotation.y=0,re(),c.uniforms.uCursor.value.copy(se.world),c.uniforms.uActivity.value=se.activity;const Ie=(performance.now()-O)/1e3;c.uniforms.uAppear.value=Math.max(0,Math.min(1,(Ie-.2)/1.4)),F.uniforms.uTime.value=_e*mM*8,G.position.copy(a.position),S.uniforms.iTime.value=_e,a.layers.set(mr.TORUS_SCENE),g.render(),a.layers.set(mr.BLOOM_SCENE),x.render(),a.layers.set(mr.ENTIRE_SCENE),_.render()}const $=()=>{const _e=window.innerWidth,ye=window.innerHeight,we=window.devicePixelRatio;r.setPixelRatio(we),r.setSize(_e,ye,!1),a.aspect=_e/ye,a.updateProjectionMatrix(),g.setPixelRatio(we),g.setSize(_e,ye),x.setPixelRatio(we),x.setSize(_e,ye),_.setPixelRatio(we),_.setSize(_e,ye),F.uniforms.uRes.value.set(_e*we,ye*we);const Se=document.documentElement.scrollHeight-window.innerHeight;M=Se>0?jm(window.scrollY/Se,0,1):0};return window.addEventListener("resize",$),$(),ve(),e.current=()=>{he=!1,window.removeEventListener("scroll",W),window.removeEventListener("mousemove",H),window.removeEventListener("mouseout",j),window.removeEventListener("resize",$),f.dispose(),c.dispose(),b.dispose(),F.dispose(),y.dispose(),r.dispose()},()=>{e.current&&e.current()}},[]),D.jsx("canvas",{ref:u,id:"flow-wave-canvas",style:{position:"fixed",inset:0,width:"100vw",height:"100vh",display:"block",zIndex:0,pointerEvents:"auto"}})}function NM(u){const[e,n]=fe.useState("connecting"),r=fe.useRef(null),o=fe.useRef(u),a=fe.useRef(null),f=fe.useRef(!1);fe.useEffect(()=>{o.current=u},[u]);const c=fe.useCallback(()=>{if(f.current)return;const h=window.location.protocol==="https:"?"wss:":"ws:",v=window.location.host,g=`${h}//${v}/ws`;n("connecting");const x=new WebSocket(g);r.current=x,x.onopen=()=>{n("connected")},x.onmessage=S=>{try{const E=JSON.parse(S.data);o.current&&o.current(E)}catch(E){console.error("WebSocket message parse error:",E)}},x.onclose=()=>{n("disconnected"),f.current||(a.current=setTimeout(()=>{a.current=null,c()},2500))},x.onerror=()=>{x.close()}},[]);fe.useEffect(()=>(f.current=!1,c(),()=>{f.current=!0,a.current&&(clearTimeout(a.current),a.current=null),r.current&&(r.current.close(),r.current=null)}),[c]);const m=fe.useCallback((h,v={})=>{r.current&&r.current.readyState===WebSocket.OPEN&&r.current.send(JSON.stringify({command:h,...v}))},[]);return{connectionStatus:e,sendCommand:m}}function kM({sendCommand:u,connectionStatus:e}={}){const[n,r]=fe.useState(!1),[o,a]=fe.useState("Ready"),[f,c]=fe.useState([]),[m,h]=fe.useState(null),[v,g]=fe.useState("00:00"),[x,S]=fe.useState("idle"),E=fe.useRef(null),y=fe.useRef([]),_=fe.useRef(null),T=fe.useRef(null),A=fe.useRef(null),k=fe.useRef(0),L=fe.useRef(null),b=fe.useRef(!1),F=fe.useRef(null),G=fe.useRef(!1),M=fe.useRef(0),z=fe.useRef({}),K=fe.useRef(u),B=fe.useRef([]);fe.useEffect(()=>{B.current=f},[f]);const de=async(C,O)=>{try{await fetch(`/api/visits/${C}/transcript`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segment_id:O.segment_id,text:O.text,sequence:O.sequence,timestamp:O.timestamp,speaker:O.speaker})})}catch(Y){console.warn("Failed to persist transcript segment:",Y)}},se=fe.useCallback(C=>{L.current&&C.visit_id&&C.visit_id!==L.current||(C.type==="transcript_partial"?(h({segment_id:C.segment_id,text:C.text,speaker:C.speaker||"Speaker",timestamp:C.timestamp,sequence:C.sequence}),S("processing")):C.type==="transcript_final"&&(h(null),S("listening"),c(O=>O.some(Y=>Y.segment_id===C.segment_id)?O.map(Y=>Y.segment_id===C.segment_id?C:Y):[...O,C])))},[]),q=fe.useCallback(()=>{if(b.current=!1,G.current=!1,A.current&&(clearInterval(A.current),A.current=null),F.current){try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}F.current=null}if(E.current&&E.current.state!=="inactive")try{E.current.stop()}catch{}_.current&&(_.current.getTracks().forEach(C=>C.stop()),_.current=null),r(!1),S("idle"),h(null)},[]),le=fe.useCallback(async({name:C,visitId:O,language:Y="en-US",sendCommand:he}={})=>{if(b.current)return;he&&(K.current=he);const ve=O||`visit-${Date.now()}`;if(L.current=ve,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){a("Audio capture not supported in this browser."),S("denied");return}try{const $=await navigator.mediaDevices.getUserMedia({audio:!0});_.current=$;const _e=new MediaRecorder($);E.current=_e,y.current=[],T.current=new Date().toISOString(),b.current=!0,r(!0),S("listening"),a(`Listening to live speech — ${C||"Visitor"} is active.`);let ye=[];_e.ondataavailable=Se=>{Se.data.size>0&&(y.current.push(Se.data),ye.push(Se.data))},_e.start(1e3),A.current=setInterval(async()=>{if(!b.current)return;if(Date.now()-k.current>4e3&&ye.length>0){const Ge=new Blob(ye,{type:_e.mimeType||"audio/webm"});if(ye=[],Ge.size>1500)try{const Ie=await fetch("/api/transcribe",{method:"POST",headers:{"Content-Type":Ge.type||"audio/webm"},body:Ge});if(Ie.ok){const dt=await Ie.json();if(dt.success&&dt.transcript&&dt.transcript.trim()){const Nt=dt.transcript.trim(),xt=M.current++,Lt={type:"transcript_final",visit_id:ve,segment_id:`${ve}-whisper-${xt}`,text:Nt,is_final:!0,speaker:"Speaker",sequence:xt,timestamp:new Date().toISOString()};se(Lt),de(ve,Lt);const ht=K.current||u;ht&&ht("broadcast_transcript",Lt)}}}catch(Ie){console.warn("Whisper fallback slice error:",Ie)}}else ye=[]},4500);const we=window.SpeechRecognition||window.webkitSpeechRecognition||null;if(we){const Se=()=>{if(b.current)try{if(F.current)try{F.current.onstart=null,F.current.onresult=null,F.current.onerror=null,F.current.onend=null,F.current.abort()}catch{}const je=new we;je.continuous=!0,je.interimResults=!0,je.lang=Y,F.current=je,G.current=!0,je.onstart=()=>{S("listening")},je.onresult=Ge=>{k.current=Date.now(),S("processing");for(let Ie=Ge.resultIndex;Ie<Ge.results.length;Ie++){const dt=Ge.results[Ie],Nt=dt[0].transcript.trim();if(!Nt)continue;const xt=`${ve}-${Ie}`,Lt=dt.isFinal,ht={type:Lt?"transcript_final":"transcript_partial",visit_id:ve,segment_id:xt,text:Nt,is_final:Lt,speaker:"Speaker",sequence:Ie,timestamp:new Date().toISOString()};Lt?(h(null),c(Ut=>Ut.some(Pt=>Pt.segment_id===xt)?Ut.map(Pt=>Pt.segment_id===xt?ht:Pt):[...Ut,ht]),S("listening"),de(ve,ht)):h(ht);const rt=K.current||u;rt&&rt("broadcast_transcript",ht)}},je.onend=()=>{b.current&&G.current&&setTimeout(()=>{b.current&&G.current&&Se()},250)},je.onerror=Ge=>{Ge.error==="not-allowed"&&(S("denied"),a("Microphone permission required"))},je.start()}catch(je){console.warn("SpeechRecognition start exception:",je)}};Se()}}catch($){r(!1),S("denied"),a(`Could not start audio capture: ${$.message}`)}},[u,se]),te=fe.useCallback(C=>E.current?(a("Visit ended — summarizing memory with Groq..."),new Promise(O=>{E.current.onstop=async()=>{const Y=new Blob(y.current,{type:"audio/webm"});y.current=[];const ve=(B.current||[]).map($=>`${$.speaker}: ${$.text}`).join(`
`);if(Y.size>100){const $=new FormData;$.append("audio",Y,"visit_audio.webm"),$.append("person_id",(C==null?void 0:C.person_id)||"unknown"),$.append("started_at",T.current||new Date().toISOString()),$.append("ended_at",new Date().toISOString()),$.append("visit_id",L.current||""),fetch("/api/visits/audio",{method:"POST",body:$}).catch(_e=>console.warn("Background audio upload warning:",_e))}if(ve&&ve.trim().length>6)try{const $=await Z0(C,ve);if($&&$.trim()&&!$.toLowerCase().includes("processing")){a(`Memory summarized: "${$}"`),O($.trim());return}}catch($){console.warn("Groq visit summarization failed:",$)}O(null)},q()})):Promise.resolve(null),[q]),re=fe.useCallback((C,O)=>{if(!C||!C.trim())return;L.current||(L.current=`session-${Date.now()}`);const Y=L.current;O&&(K.current=O);let he="Speaker",ve=C.trim();const $=C.indexOf(":");$>0&&$<20&&(he=C.substring(0,$).trim(),ve=C.substring($+1).trim());const _e=M.current++,ye=`${Y}-manual-${_e}-${Date.now()}`,we={type:"transcript_final",visit_id:Y,segment_id:ye,text:ve,is_final:!0,speaker:he,sequence:_e,timestamp:new Date().toISOString()};c(je=>[...je,we]),S("listening");const Se=K.current||u;Se&&Se("broadcast_transcript",we),de(Y,we)},[u]),W=fe.useCallback(()=>{c([]),h(null),z.current={},M.current=0},[]),H=fe.useCallback(C=>{C&&(L.current=C,fetch(`/api/visits/${C}/transcript`).then(O=>O.json()).then(O=>{if(O&&O.success&&O.segments){c(O.segments);const Y=O.segments.reduce((he,ve)=>Math.max(he,ve.sequence),-1);M.current=Y+1}}).catch(O=>console.warn("Error catching up on segments:",O)))},[]);fe.useEffect(()=>{if(!n||!T.current){g("00:00");return}const C=setInterval(()=>{const O=Date.now()-new Date(T.current).getTime(),Y=Math.max(0,Math.floor(O/1e3)),he=String(Math.floor(Y/60)).padStart(2,"0"),ve=String(Y%60).padStart(2,"0");g(`${he}:${ve}`)},1e3);return()=>clearInterval(C)},[n]),fe.useEffect(()=>()=>{q()},[q]);const j=f.map(C=>`${C.speaker}: ${C.text}`).join(`
`);return{isCapturing:n,transcript:j,statusMessage:o,startCapture:le,stopListening:q,stopCaptureAndSummarize:te,appendTranscript:re,resetTranscript:W,liveSegments:f,partialSegment:m,visitDuration:v,statusState:x,handleLiveTranscriptEvent:se,catchUpTranscript:H,setStatusState:S}}function FM(){const[u,e]=fe.useState([]),[n,r]=fe.useState(!0),o=fe.useCallback(async()=>{try{const v=await fetch("/api/roster");if(!v.ok)throw new Error("Failed to fetch roster");const g=await v.json();e(g)}catch(v){console.error("Roster fetch error:",v)}finally{r(!1)}},[]);fe.useEffect(()=>{o()},[o]);const a=fe.useCallback(async v=>{if(!(await fetch("/api/roster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)})).ok)throw new Error("Failed to create profile");await o()},[o]),f=fe.useCallback(async v=>{if(!(await fetch(`/api/roster/${v}`,{method:"DELETE"})).ok)throw new Error("Failed to delete profile");await o()},[o]),c=fe.useCallback(async(v,g=null)=>{const S=await(await fetch("/api/register_face",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,image_base64:g})})).json();return S.success&&await o(),S},[o]),m=fe.useCallback(async v=>{const g=await fetch(`/api/clear_encodings/${v}`,{method:"POST"}),x=await g.json();return g.ok&&await o(),x},[o]),h=fe.useCallback(async(v,g,x="")=>{try{(await fetch("/api/update_note",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_id:v,note:g,transcript:x})})).ok&&await o()}catch(S){console.error("Failed to save memory note:",S)}},[o]);return{profiles:u,loading:n,reload:o,addProfile:a,deleteProfile:f,registerFace:c,clearFaceEncodings:m,saveUpdatedNote:h}}function zM(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){const e=Math.random()*16|0;return(u==="x"?e:e&3|8).toString(16)})}const OM={ttsEnabled:!0,interactionEnabled:!0,autoListenEnabled:!0,rate:.85,pitch:1,volume:1,language:"en-US",voiceName:null};function UM(){const[u,e]=fe.useState("patient"),[n,r]=fe.useState(null),o=fe.useRef(null),[a,f]=fe.useState(null),[c,m]=fe.useState(OM),h=fe.useRef(null),{profiles:v,addProfile:g,deleteProfile:x,registerFace:S,clearFaceEncodings:E,saveUpdatedNote:y,reload:_}=FM(),{isCapturing:T,transcript:A,startCapture:k,stopListening:L,stopCaptureAndSummarize:b,appendTranscript:F,resetTranscript:G,liveSegments:M,partialSegment:z,visitDuration:K,statusState:B,handleLiveTranscriptEvent:de,catchUpTranscript:se,setStatusState:q}=kM(),le=fe.useCallback(Y=>{const he=v.find($=>$.person_id===Y.person_id)||Y;o.current=he,r(he),G();const ve=zM();f(ve),k({name:he.name,visitId:ve,language:c.language,sendCommand:h.current})},[v,G,k,c.language]),te=fe.useCallback(async()=>{const Y=o.current;if(!Y)return;o.current=null,r(null),f(null);const he=await b(Y);he&&await y(Y.person_id,he,A)},[b,y,A]),re=fe.useCallback(Y=>{switch(Y.type){case"recognized":le(Y.person);break;case"unrecognized":te();break;case"memory_updated":_();break;case"transcript_partial":case"transcript_final":de(Y);break}},[le,te,_,de]),{connectionStatus:W,sendCommand:H}=NM(re);h.current=H,fe.useEffect(()=>{W==="disconnected"?q("disconnected"):W==="connected"&&q(T?"listening":"idle")},[W,T,q]),fe.useEffect(()=>{W==="connected"&&a&&se(a)},[W,a,se]);const j=async Y=>{try{await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"arrive",person_id:Y})})}catch(he){console.error("Simulation error:",he)}},C=async()=>{try{await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"leave"})})}catch(Y){console.error("Simulation error:",Y)}},O=async()=>{o.current&&await te()};return D.jsxs(D.Fragment,{children:[D.jsx(IM,{}),D.jsxs("header",{className:"top-nav",children:[D.jsxs("div",{className:"brand-wrapper",children:[D.jsx("div",{className:"brand-icon",children:"⚓"}),D.jsxs("div",{className:"brand-text",children:[D.jsx("h1",{children:"Anchor"}),D.jsx("p",{children:"Dementia Care Companion"})]})]}),D.jsxs("div",{className:"nav-controls",children:[D.jsxs("div",{className:"status-pill",children:[D.jsx("span",{className:`status-dot ${W==="connected"?"active":W==="connecting"?"idle":"warn"}`}),D.jsx("span",{children:W==="connected"?"Live Connected":W==="connecting"?"Connecting...":"Disconnected"})]}),D.jsxs("div",{className:"mode-tab-group",children:[D.jsx("button",{className:`mode-tab ${u==="patient"?"active":""}`,onClick:()=>e("patient"),children:"Patient View"}),D.jsx("button",{className:`mode-tab ${u==="caregiver"?"active":""}`,onClick:()=>e("caregiver"),children:"Caregiver & Controls"})]})]})]}),D.jsx("main",{className:"app-container",children:u==="patient"?D.jsx(U0,{recognizedPerson:n,speakAloud:c.ttsEnabled,ttsSettings:c,interactionEnabled:c.interactionEnabled,autoListenEnabled:c.autoListenEnabled}):D.jsx(ox,{isVisitorPresent:!!n,activePerson:n,transcript:A,isCapturing:T,onToggleListening:()=>{T?L():k({name:(n==null?void 0:n.name)||"Caregiver/Visitor",language:c.language,sendCommand:h.current})},onAppendSpeech:Y=>F(Y,h.current),onClearSpeech:G,onSimulateArrive:j,onSimulateLeave:C,onForceSummarize:O,profiles:v,onAddPerson:g,onDeletePerson:x,onRegisterFace:S,onClearEncodings:E,ttsSettings:c,onTtsSettingsChange:m,liveSegments:M,partialSegment:z,visitDuration:K,statusState:B})})]})}const BM=v0.createRoot(document.getElementById("root"));BM.render(D.jsx(c0.StrictMode,{children:D.jsx(UM,{})}));
