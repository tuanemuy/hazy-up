import { j as N } from "./jsx-runtime-cbaaaa63.js";
import { css as we } from "@emotion/css";
import Ee, { createContext as Q } from "react";
class Z {
  constructor(y, d) {
    this.src = y, this.assets = d;
  }
  static generate({ src: y, assets: d }) {
    return new Z(y, d || []);
  }
  getSrcset() {
    let y = "";
    for (const d of this.assets)
      y += `${d.url} ${d.label},`;
    return y;
  }
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function lr() {
  if (Oe)
    return C;
  Oe = 1;
  var w = Ee, y = Symbol.for("react.element"), d = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, D = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(k, f, O) {
    var m, h = {}, j = null, I = null;
    O !== void 0 && (j = "" + O), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (m in f)
      _.call(f, m) && !F.hasOwnProperty(m) && (h[m] = f[m]);
    if (k && k.defaultProps)
      for (m in f = k.defaultProps, f)
        h[m] === void 0 && (h[m] = f[m]);
    return { $$typeof: y, type: k, key: j, ref: I, props: h, _owner: D.current };
  }
  return C.Fragment = d, C.jsx = T, C.jsxs = T, C;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function fr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Ee, y = Symbol.for("react.element"), d = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), k = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var x = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(a) {
          return String(a);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Ne = !1, Ce = !1, De = !1, Fe = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === F || Fe || e === D || e === O || e === m || De || e === I || $e || Ne || Ce || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === h || e.$$typeof === T || e.$$typeof === k || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case d:
          return "Portal";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case O:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return re(r) + ".Consumer";
          case T:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return ze(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case j: {
            var i = e, s = i._payload, a = i._init;
            try {
              return g(a(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, P = 0, te, ne, oe, ae, ie, se, ce;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Le() {
      {
        if (P === 0) {
          te = console.log, ne = console.info, oe = console.warn, ae = console.error, ie = console.group, se = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function We() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: te
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: ie
            }),
            groupCollapsed: S({}, e, {
              value: se
            }),
            groupEnd: S({}, e, {
              value: ce
            })
          });
        }
        P < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = x.ReactCurrentDispatcher, Y;
    function z(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var V = !1, L;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ue();
    }
    function fe(e, r) {
      if (!e || V)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      V = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Le();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              n = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), p = n.stack.split(`
`), c = o.length - 1, l = p.length - 1; c >= 1 && l >= 0 && o[c] !== p[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (o[c] !== p[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || o[c] !== p[l]) {
                    var v = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, v), v;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        V = !1, B.current = s, We(), Error.prepareStackTrace = i;
      }
      var R = e ? e.displayName || e.name : "", Se = R ? z(R) : "";
      return typeof e == "function" && L.set(e, Se), Se;
    }
    function Ae(e, r, t) {
      return fe(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Me(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case O:
          return z("Suspense");
        case m:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ae(e.render);
          case h:
            return W(e.type, r, t);
          case j: {
            var n = e, i = n._payload, s = n._init;
            try {
              return W(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ue = {}, pe = x.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(U);
        for (var a in e)
          if (s(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (A(i), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), A(null)), o instanceof Error && !(o.message in ue) && (ue[o.message] = !0, A(i), u("Failed %s type: %s", t, o.message), A(null));
          }
      }
    }
    var Ye = Array.isArray;
    function q(e) {
      return Ye(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function de(e) {
      if (qe(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ye(e);
    }
    var $ = x.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ve, H;
    H = {};
    function Xe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = g($.current.type);
        H[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g($.current.type), e.ref), H[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ve || (ve = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ge = function(e, r, t, n, i, s, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function er(e, r, t, n, i) {
      {
        var s, a = {}, o = null, p = null;
        t !== void 0 && (de(t), o = "" + t), Je(r) && (de(r.key), o = "" + r.key), Xe(r) && (p = r.ref, Ke(r, i));
        for (s in r)
          U.call(r, s) && !He.hasOwnProperty(s) && (a[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            a[s] === void 0 && (a[s] = c[s]);
        }
        if (o || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Qe(a, l), p && Ze(a, l);
        }
        return Ge(e, o, p, i, n, $.current, a);
      }
    }
    var X = x.ReactCurrentOwner, he = x.ReactDebugCurrentFrame;
    function E(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function ge() {
      {
        if (X.current) {
          var e = g(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function tr(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + g(e._owner.type) + "."), E(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), E(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && _e(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), a; !(a = s.next()).done; )
              K(a.value) && _e(a.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = g(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            E(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), E(null);
            break;
          }
        }
        e.ref !== null && (E(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), E(null));
      }
    }
    function je(e, r, t, n, i, s) {
      {
        var a = Ie(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr(i);
          p ? o += p : o += ge();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === y ? (c = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var l = er(e, r, t, i, s);
        if (l == null)
          return l;
        if (a) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (q(v)) {
                for (var R = 0; R < v.length; R++)
                  ke(v[R], e);
                Object.freeze && Object.freeze(v);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(v, e);
        }
        return e === _ ? or(l) : nr(l), l;
      }
    }
    function ar(e, r, t) {
      return je(e, r, t, !0);
    }
    function ir(e, r, t) {
      return je(e, r, t, !1);
    }
    var sr = ir, cr = ar;
    M.Fragment = _, M.jsx = sr, M.jsxs = cr;
  }()), M;
}
process.env.NODE_ENV === "production" ? lr() : fr();
Q(null);
Q(null);
Q(null);
const ur = [
  { type: "text", key: "title", name: "タイトル" },
  { type: "textarea", key: "subtitle", name: "サブタイトル" },
  { type: "image", key: "backgroundImage", name: "背景画像" }
], pr = ({
  title: w,
  subtitle: y,
  backgroundImage: d,
  className: _
}) => /* @__PURE__ */ N.jsxs("div", { className: _, children: [
  /* @__PURE__ */ N.jsxs("div", { className: "content", children: [
    /* @__PURE__ */ N.jsx("h2", { children: w }),
    /* @__PURE__ */ N.jsx("p", { children: y })
  ] }),
  /* @__PURE__ */ N.jsx(
    "img",
    {
      className: "background",
      src: d.src,
      srcSet: d.getSrcset(),
      alt: w,
      width: "100%",
      height: "100%"
    }
  )
] }), yr = {
  base: we`
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
  `,
  lg: we`
    .content {
      h2 {
        font-size: 4rem;
      }
    }
  `
}, dr = {
  title: "Building a Platform in Space to Benefit Life on Earth",
  subtitle: "Space stations that open the next chapter of human space exploration and development",
  backgroundImage: Z.generate({
    src: "https://source.unsplash.com/1600x900/?astronaut"
  })
}, mr = "推奨表示サイズの説明等", br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Template: pr,
  defaultProps: dr,
  description: mr,
  props: ur,
  styles: yr
}, Symbol.toStringTag, { value: "Module" }));
export {
  br as S,
  pr as T,
  mr as a,
  dr as d,
  ur as p,
  yr as s
};
