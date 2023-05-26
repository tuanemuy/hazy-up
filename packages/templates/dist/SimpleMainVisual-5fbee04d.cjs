"use strict";const C=require("./jsx-runtime-5c3ac4f7.cjs"),Se=require("@emotion/css"),D=require("react");class Z{constructor(y,d){this.src=y,this.assets=d}static generate({src:y,assets:d}){return new Z(y,d||[])}getSrcset(){let y="";for(const d of this.assets)y+=`${d.url} ${d.label},`;return y}}var N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function yr(){if(we)return N;we=1;var S=D,y=Symbol.for("react.element"),d=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,F=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function P(k,u,w){var m,h={},j=null,z=null;w!==void 0&&(j=""+w),u.key!==void 0&&(j=""+u.key),u.ref!==void 0&&(z=u.ref);for(m in u)_.call(u,m)&&!I.hasOwnProperty(m)&&(h[m]=u[m]);if(k&&k.defaultProps)for(m in u=k.defaultProps,u)h[m]===void 0&&(h[m]=u[m]);return{$$typeof:y,type:k,key:j,ref:z,props:h,_owner:F.current}}return N.Fragment=d,N.jsx=P,N.jsxs=P,N}var B={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function dr(){return Oe||(Oe=1,process.env.NODE_ENV!=="production"&&function(){var S=D,y=Symbol.for("react.element"),d=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),k=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),G=Symbol.iterator,Ce="@@iterator";function Ne(e){if(e===null||typeof e!="object")return null;var r=G&&e[G]||e[Ce];return typeof r=="function"?r:null}var O=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];De("error",e,t)}}function De(e,r,t){{var n=O.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(a){return String(a)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Fe=!1,Ie=!1,ze=!1,Le=!1,We=!1,ee;ee=Symbol.for("react.module.reference");function Ue(e){return!!(typeof e=="string"||typeof e=="function"||e===_||e===I||We||e===F||e===w||e===m||Le||e===z||Fe||Ie||ze||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===h||e.$$typeof===P||e.$$typeof===k||e.$$typeof===u||e.$$typeof===ee||e.getModuleId!==void 0))}function Ae(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function re(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case d:return"Portal";case I:return"Profiler";case F:return"StrictMode";case w:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case k:var r=e;return re(r)+".Consumer";case P:var t=e;return re(t._context)+".Provider";case u:return Ae(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case j:{var i=e,s=i._payload,a=i._init;try{return g(a(s))}catch{return null}}}return null}var x=Object.assign,T=0,te,ne,oe,ae,ie,se,ce;function le(){}le.__reactDisabledLog=!0;function Me(){{if(T===0){te=console.log,ne=console.info,oe=console.warn,ae=console.error,ie=console.group,se=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:le,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}T++}}function Be(){{if(T--,T===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:te}),info:x({},e,{value:ne}),warn:x({},e,{value:oe}),error:x({},e,{value:ae}),group:x({},e,{value:ie}),groupCollapsed:x({},e,{value:se}),groupEnd:x({},e,{value:ce})})}T<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var V=O.ReactCurrentDispatcher,Y;function L(e,r,t){{if(Y===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Y=n&&n[1]||""}return`
`+Y+e}}var q=!1,W;{var Ve=typeof WeakMap=="function"?WeakMap:Map;W=new Ve}function ue(e,r){if(!e||q)return"";{var t=W.get(e);if(t!==void 0)return t}var n;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=V.current,V.current=null,Me();try{if(r){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(b){n=b}Reflect.construct(e,[],a)}else{try{a.call()}catch(b){n=b}e.call(a.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var o=b.stack.split(`
`),p=n.stack.split(`
`),c=o.length-1,l=p.length-1;c>=1&&l>=0&&o[c]!==p[l];)l--;for(;c>=1&&l>=0;c--,l--)if(o[c]!==p[l]){if(c!==1||l!==1)do if(c--,l--,l<0||o[c]!==p[l]){var v=`
`+o[c].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),typeof e=="function"&&W.set(e,v),v}while(c>=1&&l>=0);break}}}finally{q=!1,V.current=s,Be(),Error.prepareStackTrace=i}var R=e?e.displayName||e.name:"",xe=R?L(R):"";return typeof e=="function"&&W.set(e,xe),xe}function Ye(e,r,t){return ue(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return ue(e,qe(e));if(typeof e=="string")return L(e);switch(e){case w:return L("Suspense");case m:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case u:return Ye(e.render);case h:return U(e.type,r,t);case j:{var n=e,i=n._payload,s=n._init;try{return U(s(i),r,t)}catch{}}}return""}var A=Object.prototype.hasOwnProperty,fe={},pe=O.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function He(e,r,t,n,i){{var s=Function.call.bind(A);for(var a in e)if(s(e,a)){var o=void 0;try{if(typeof e[a]!="function"){var p=Error((n||"React class")+": "+t+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}o=e[a](r,a,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){o=c}o&&!(o instanceof Error)&&(M(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,a,typeof o),M(null)),o instanceof Error&&!(o.message in fe)&&(fe[o.message]=!0,M(i),f("Failed %s type: %s",t,o.message),M(null))}}}var Xe=Array.isArray;function H(e){return Xe(e)}function Je(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ke(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function de(e){if(Ke(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Je(e)),ye(e)}var $=O.ReactCurrentOwner,Qe={key:!0,ref:!0,__self:!0,__source:!0},me,ve,X;X={};function Ze(e){if(A.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ge(e){if(A.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=g($.current.type);X[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g($.current.type),e.ref),X[t]=!0)}}function rr(e,r){{var t=function(){me||(me=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){ve||(ve=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,s,a){var o={$$typeof:y,type:e,key:r,ref:t,props:a,_owner:s};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function or(e,r,t,n,i){{var s,a={},o=null,p=null;t!==void 0&&(de(t),o=""+t),Ge(r)&&(de(r.key),o=""+r.key),Ze(r)&&(p=r.ref,er(r,i));for(s in r)A.call(r,s)&&!Qe.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps){var c=e.defaultProps;for(s in c)a[s]===void 0&&(a[s]=c[s])}if(o||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&rr(a,l),p&&tr(a,l)}return nr(e,o,p,i,n,$.current,a)}}var J=O.ReactCurrentOwner,he=O.ReactDebugCurrentFrame;function E(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}var K;K=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function ge(){{if(J.current){var e=g(J.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ar(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var be={};function ir(e){{var r=ge();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(be[t])return;be[t]=!0;var n="";e&&e._owner&&e._owner!==J.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),E(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),E(null)}}function ke(e,r){{if(typeof e!="object")return;if(H(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&_e(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Ne(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),a;!(a=s.next()).done;)Q(a.value)&&_e(a.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===u||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=g(r);He(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!K){K=!0;var i=g(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function cr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){E(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),E(null);break}}e.ref!==null&&(E(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),E(null))}}function je(e,r,t,n,i,s){{var a=Ue(e);if(!a){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=ar(i);p?o+=p:o+=ge();var c;e===null?c="null":H(e)?c="array":e!==void 0&&e.$$typeof===y?(c="<"+(g(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,o)}var l=or(e,r,t,i,s);if(l==null)return l;if(a){var v=r.children;if(v!==void 0)if(n)if(H(v)){for(var R=0;R<v.length;R++)ke(v[R],e);Object.freeze&&Object.freeze(v)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(v,e)}return e===_?cr(l):sr(l),l}}function lr(e,r,t){return je(e,r,t,!0)}function ur(e,r,t){return je(e,r,t,!1)}var fr=ur,pr=lr;B.Fragment=_,B.jsx=fr,B.jsxs=pr}()),B}process.env.NODE_ENV==="production"?yr():dr();D.createContext(null);D.createContext(null);D.createContext(null);const Ee=[{type:"text",key:"title",name:"タイトル"},{type:"textarea",key:"subtitle",name:"サブタイトル"},{type:"image",key:"backgroundImage",name:"背景画像"}],Re=({title:S,subtitle:y,backgroundImage:d,className:_})=>C.jsxRuntimeExports.jsxs("div",{className:_,children:[C.jsxRuntimeExports.jsxs("div",{className:"content",children:[C.jsxRuntimeExports.jsx("h2",{children:S}),C.jsxRuntimeExports.jsx("p",{children:y})]}),C.jsxRuntimeExports.jsx("img",{className:"background",src:d.src,srcSet:d.getSrcset(),alt:S,width:"100%",height:"100%"})]}),Pe={base:Se.css`
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
  `},Te={title:"Building a Platform in Space to Benefit Life on Earth",subtitle:"Space stations that open the next chapter of human space exploration and development",backgroundImage:Z.generate({src:"https://source.unsplash.com/1600x900/?astronaut"})},$e="推奨表示サイズの説明等",mr=Object.freeze(Object.defineProperty({__proto__:null,Template:Re,defaultProps:Te,description:$e,props:Ee,styles:Pe},Symbol.toStringTag,{value:"Module"}));exports.SimpleMainVisual=mr;exports.Template=Re;exports.defaultProps=Te;exports.description=$e;exports.props=Ee;exports.styles=Pe;
