"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const Se=require("@emotion/css"),N=require("react");class Q{constructor(y,d){this.src=y,this.assets=d}static generate({src:y,assets:d}){return new Q(y,d||[])}getSrcset(){let y="";for(const d of this.assets)y+=`${d.url} ${d.label},`;return y}}var C={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function cr(){if(Oe)return C;Oe=1;var O=N,y=Symbol.for("react.element"),d=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,D=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function P(k,u,j){var m,g={},w=null,I=null;j!==void 0&&(w=""+j),u.key!==void 0&&(w=""+u.key),u.ref!==void 0&&(I=u.ref);for(m in u)_.call(u,m)&&!F.hasOwnProperty(m)&&(g[m]=u[m]);if(k&&k.defaultProps)for(m in u=k.defaultProps,u)g[m]===void 0&&(g[m]=u[m]);return{$$typeof:y,type:k,key:w,ref:I,props:g,_owner:D.current}}return C.Fragment=d,C.jsx=P,C.jsxs=P,C}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function sr(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var O=N,y=Symbol.for("react.element"),d=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),k=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),Z=Symbol.iterator,Ee="@@iterator";function xe(e){if(e===null||typeof e!="object")return null;var r=Z&&e[Z]||e[Ee];return typeof r=="function"?r:null}var E=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Re("error",e,t)}}function Re(e,r,t){{var n=E.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var c=t.map(function(a){return String(a)});c.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,c)}}var Pe=!1,Te=!1,$e=!1,Ce=!1,Ne=!1,G;G=Symbol.for("react.module.reference");function De(e){return!!(typeof e=="string"||typeof e=="function"||e===_||e===F||Ne||e===D||e===j||e===m||Ce||e===I||Pe||Te||$e||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===g||e.$$typeof===P||e.$$typeof===k||e.$$typeof===u||e.$$typeof===G||e.getModuleId!==void 0))}function Fe(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ee(e){return e.displayName||"Context"}function h(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case d:return"Portal";case F:return"Profiler";case D:return"StrictMode";case j:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case k:var r=e;return ee(r)+".Consumer";case P:var t=e;return ee(t._context)+".Provider";case u:return Fe(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:h(e.type)||"Memo";case w:{var i=e,c=i._payload,a=i._init;try{return h(a(c))}catch{return null}}}return null}var S=Object.assign,T=0,re,te,ne,oe,ae,ie,ce;function se(){}se.__reactDisabledLog=!0;function Ie(){{if(T===0){re=console.log,te=console.info,ne=console.warn,oe=console.error,ae=console.group,ie=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}T++}}function Le(){{if(T--,T===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},e,{value:re}),info:S({},e,{value:te}),warn:S({},e,{value:ne}),error:S({},e,{value:oe}),group:S({},e,{value:ae}),groupCollapsed:S({},e,{value:ie}),groupEnd:S({},e,{value:ce})})}T<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=E.ReactCurrentDispatcher,Y;function L(e,r,t){{if(Y===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Y=n&&n[1]||""}return`
`+Y+e}}var V=!1,z;{var ze=typeof WeakMap=="function"?WeakMap:Map;z=new ze}function le(e,r){if(!e||V)return"";{var t=z.get(e);if(t!==void 0)return t}var n;V=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=B.current,B.current=null,Ie();try{if(r){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(b){n=b}Reflect.construct(e,[],a)}else{try{a.call()}catch(b){n=b}e.call(a.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var o=b.stack.split(`
`),p=n.stack.split(`
`),s=o.length-1,l=p.length-1;s>=1&&l>=0&&o[s]!==p[l];)l--;for(;s>=1&&l>=0;s--,l--)if(o[s]!==p[l]){if(s!==1||l!==1)do if(s--,l--,l<0||o[s]!==p[l]){var v=`
`+o[s].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),typeof e=="function"&&z.set(e,v),v}while(s>=1&&l>=0);break}}}finally{V=!1,B.current=c,Le(),Error.prepareStackTrace=i}var R=e?e.displayName||e.name:"",we=R?L(R):"";return typeof e=="function"&&z.set(e,we),we}function We(e,r,t){return le(e,!1)}function Ue(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function W(e,r,t){if(e==null)return"";if(typeof e=="function")return le(e,Ue(e));if(typeof e=="string")return L(e);switch(e){case j:return L("Suspense");case m:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case u:return We(e.render);case g:return W(e.type,r,t);case w:{var n=e,i=n._payload,c=n._init;try{return W(c(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,ue={},fe=E.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=W(e.type,e._source,r?r.type:null);fe.setExtraStackFrame(t)}else fe.setExtraStackFrame(null)}function Ae(e,r,t,n,i){{var c=Function.call.bind(U);for(var a in e)if(c(e,a)){var o=void 0;try{if(typeof e[a]!="function"){var p=Error((n||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}o=e[a](r,a,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){o=s}o&&!(o instanceof Error)&&(A(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,a,typeof o),A(null)),o instanceof Error&&!(o.message in ue)&&(ue[o.message]=!0,A(i),f("Failed %s type: %s",t,o.message),A(null))}}}var Me=Array.isArray;function q(e){return Me(e)}function Be(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ye(e){try{return pe(e),!1}catch{return!0}}function pe(e){return""+e}function ye(e){if(Ye(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Be(e)),pe(e)}var $=E.ReactCurrentOwner,Ve={key:!0,ref:!0,__self:!0,__source:!0},de,me,H;H={};function qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function He(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Xe(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=h($.current.type);H[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',h($.current.type),e.ref),H[t]=!0)}}function Je(e,r){{var t=function(){de||(de=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Ke(e,r){{var t=function(){me||(me=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Qe=function(e,r,t,n,i,c,a){var o={$$typeof:y,type:e,key:r,ref:t,props:a,_owner:c};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function Ze(e,r,t,n,i){{var c,a={},o=null,p=null;t!==void 0&&(ye(t),o=""+t),He(r)&&(ye(r.key),o=""+r.key),qe(r)&&(p=r.ref,Xe(r,i));for(c in r)U.call(r,c)&&!Ve.hasOwnProperty(c)&&(a[c]=r[c]);if(e&&e.defaultProps){var s=e.defaultProps;for(c in s)a[c]===void 0&&(a[c]=s[c])}if(o||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&Je(a,l),p&&Ke(a,l)}return Qe(e,o,p,i,n,$.current,a)}}var X=E.ReactCurrentOwner,ve=E.ReactDebugCurrentFrame;function x(e){if(e){var r=e._owner,t=W(e.type,e._source,r?r.type:null);ve.setExtraStackFrame(t)}else ve.setExtraStackFrame(null)}var J;J=!1;function K(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function ge(){{if(X.current){var e=h(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ge(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var he={};function er(e){{var r=ge();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function be(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=er(r);if(he[t])return;he[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+h(e._owner.type)+"."),x(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),x(null)}}function _e(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var n=e[t];K(n)&&be(n,r)}else if(K(e))e._store&&(e._store.validated=!0);else if(e){var i=xe(e);if(typeof i=="function"&&i!==e.entries)for(var c=i.call(e),a;!(a=c.next()).done;)K(a.value)&&be(a.value,r)}}}function rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===u||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=h(r);Ae(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!J){J=!0;var i=h(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function tr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){x(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),x(null);break}}e.ref!==null&&(x(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),x(null))}}function ke(e,r,t,n,i,c){{var a=De(e);if(!a){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=Ge(i);p?o+=p:o+=ge();var s;e===null?s="null":q(e)?s="array":e!==void 0&&e.$$typeof===y?(s="<"+(h(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,o)}var l=Ze(e,r,t,i,c);if(l==null)return l;if(a){var v=r.children;if(v!==void 0)if(n)if(q(v)){for(var R=0;R<v.length;R++)_e(v[R],e);Object.freeze&&Object.freeze(v)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else _e(v,e)}return e===_?tr(l):rr(l),l}}function nr(e,r,t){return ke(e,r,t,!0)}function or(e,r,t){return ke(e,r,t,!1)}var ar=or,ir=nr;M.Fragment=_,M.jsx=ar,M.jsxs=ir}()),M}process.env.NODE_ENV==="production"?cr():sr();N.createContext(null);N.createContext(null);N.createContext(null);const lr=[{type:"text",key:"title",name:"タイトル"},{type:"textarea",key:"subtitle",name:"サブタイトル"},{type:"image",key:"backgroundImage",name:"背景画像"}];function ur({title:O,subtitle:y,backgroundImage:d,className:_}){return React.createElement("div",{className:_},React.createElement("div",{className:"content"},React.createElement("h2",null,O),React.createElement("p",null,y)),React.createElement("img",{className:"background",src:d.src,srcSet:d.getSrcset(),alt:O,width:"100%",height:"100%"}))}const fr={base:Se.css`
    position: relative;
    width: 100%;
    min-width: 100px;

    &::before {
      position: relative;
      z-index: 1;
      content: "";
      display: block;
      width: 100%;
      padding-top: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .content {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: calc(var(--grid, 16px) * 2);
      color: var(--white, #ffffff);

      h2 {
        max-width: 900px;
        margin: 0 auto;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        line-height: 1.25;
      }

      p {
        margin-top: calc(var(--grid, 16px) * 1);
        overflow: break-word;
        word-break: break-all;
        font-size: 1.5rem;
        text-align: center;
      }
    }

    img {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  `,lg:Se.css`
    .content {
      h2 {
        font-size: 4rem;
      }
    }
  `},pr={title:"Building a Platform in Space to Benefit Life on Earth",subtitle:"Space stations that open the next chapter of human space exploration and development",backgroundImage:Q.generate({src:"https://source.unsplash.com/1600x900/?astronaut"})},yr="推奨表示サイズの説明等";exports.Template=ur;exports.defaultProps=pr;exports.description=yr;exports.props=lr;exports.styles=fr;
