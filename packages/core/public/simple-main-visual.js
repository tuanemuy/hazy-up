import { css as Se } from "@emotion/css";
import Ee, { createContext as K } from "react";
class Q {
  constructor(y, d) {
    this.src = y, this.assets = d;
  }
  static generate({ src: y, assets: d }) {
    return new Q(y, d || []);
  }
  getSrcset() {
    let y = "";
    for (const d of this.assets)
      y += `${d.url} ${d.label},`;
    return y;
  }
}
var N = {};
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
function sr() {
  if (Oe)
    return N;
  Oe = 1;
  var O = Ee, y = Symbol.for("react.element"), d = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, C = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(k, f, j) {
    var m, h = {}, w = null, F = null;
    j !== void 0 && (w = "" + j), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (F = f.ref);
    for (m in f)
      _.call(f, m) && !D.hasOwnProperty(m) && (h[m] = f[m]);
    if (k && k.defaultProps)
      for (m in f = k.defaultProps, f)
        h[m] === void 0 && (h[m] = f[m]);
    return { $$typeof: y, type: k, key: w, ref: F, props: h, _owner: C.current };
  }
  return N.Fragment = d, N.jsx = P, N.jsxs = P, N;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function lr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Ee, y = Symbol.for("react.element"), d = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), k = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), Z = Symbol.iterator, xe = "@@iterator";
    function Re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var E = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = E.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(a) {
          return String(a);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Te = !1, $e = !1, Ne = !1, Ce = !1, De = !1, G;
    G = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === D || De || e === C || e === j || e === m || Ce || e === F || Te || $e || Ne || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === h || e.$$typeof === P || e.$$typeof === k || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
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
        case D:
          return "Profiler";
        case C:
          return "StrictMode";
        case j:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return ee(r) + ".Consumer";
          case P:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case w: {
            var i = e, c = i._payload, a = i._init;
            try {
              return g(a(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, T = 0, re, te, ne, oe, ae, ie, ce;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Le() {
      {
        if (T === 0) {
          re = console.log, te = console.info, ne = console.warn, oe = console.error, ae = console.group, ie = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
        T++;
      }
    }
    function ze() {
      {
        if (T--, T === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: re
            }),
            info: S({}, e, {
              value: te
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: oe
            }),
            group: S({}, e, {
              value: ae
            }),
            groupCollapsed: S({}, e, {
              value: ie
            }),
            groupEnd: S({}, e, {
              value: ce
            })
          });
        }
        T < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = E.ReactCurrentDispatcher, M;
    function I(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var Y = !1, L;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      L = new We();
    }
    function le(e, r) {
      if (!e || Y)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Y = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = B.current, B.current = null, Le();
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
`), s = o.length - 1, l = p.length - 1; s >= 1 && l >= 0 && o[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (o[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || o[s] !== p[l]) {
                    var v = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, v), v;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        Y = !1, B.current = c, ze(), Error.prepareStackTrace = i;
      }
      var R = e ? e.displayName || e.name : "", we = R ? I(R) : "";
      return typeof e == "function" && L.set(e, we), we;
    }
    function Ue(e, r, t) {
      return le(e, !1);
    }
    function Ae(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ae(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case j:
          return I("Suspense");
        case m:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case h:
            return z(e.type, r, t);
          case w: {
            var n = e, i = n._payload, c = n._init;
            try {
              return z(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, fe = {}, ue = E.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ue.setExtraStackFrame(t);
      } else
        ue.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var c = Function.call.bind(W);
        for (var a in e)
          if (c(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (U(i), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), U(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, U(i), u("Failed %s type: %s", t, o.message), U(null));
          }
      }
    }
    var Me = Array.isArray;
    function V(e) {
      return Me(e);
    }
    function Ye(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ve(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ve(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(e)), pe(e);
    }
    var $ = E.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, me, q;
    q = {};
    function He(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = g($.current.type);
        q[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g($.current.type), e.ref), q[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          de || (de = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, c, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: c
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
    function Ge(e, r, t, n, i) {
      {
        var c, a = {}, o = null, p = null;
        t !== void 0 && (ye(t), o = "" + t), Xe(r) && (ye(r.key), o = "" + r.key), He(r) && (p = r.ref, Je(r, i));
        for (c in r)
          W.call(r, c) && !qe.hasOwnProperty(c) && (a[c] = r[c]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (c in s)
            a[c] === void 0 && (a[c] = s[c]);
        }
        if (o || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ke(a, l), p && Qe(a, l);
        }
        return Ze(e, o, p, i, n, $.current, a);
      }
    }
    var H = E.ReactCurrentOwner, ve = E.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function he() {
      {
        if (H.current) {
          var e = g(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ge = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + g(e._owner.type) + "."), x(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && be(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Re(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), a; !(a = c.next()).done; )
              J(a.value) && be(a.value, r);
        }
      }
    }
    function tr(e) {
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
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = g(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function ke(e, r, t, n, i, c) {
      {
        var a = Fe(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = er(i);
          p ? o += p : o += he();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var l = Ge(e, r, t, i, c);
        if (l == null)
          return l;
        if (a) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (V(v)) {
                for (var R = 0; R < v.length; R++)
                  _e(v[R], e);
                Object.freeze && Object.freeze(v);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(v, e);
        }
        return e === _ ? nr(l) : tr(l), l;
      }
    }
    function or(e, r, t) {
      return ke(e, r, t, !0);
    }
    function ar(e, r, t) {
      return ke(e, r, t, !1);
    }
    var ir = ar, cr = or;
    A.Fragment = _, A.jsx = ir, A.jsxs = cr;
  }()), A;
}
process.env.NODE_ENV === "production" ? sr() : lr();
K(null);
K(null);
K(null);
const pr = [
  { type: "text", key: "title", name: "タイトル" },
  { type: "textarea", key: "subtitle", name: "サブタイトル" },
  { type: "image", key: "backgroundImage", name: "背景画像" }
];
function yr({
  title: O,
  subtitle: y,
  backgroundImage: d,
  className: _
}) {
  return /* @__PURE__ */ React.createElement("div", { className: _ }, /* @__PURE__ */ React.createElement("div", { className: "content" }, /* @__PURE__ */ React.createElement("h2", null, O), /* @__PURE__ */ React.createElement("p", null, y)), /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "background",
      src: d.src,
      srcSet: d.getSrcset(),
      alt: O,
      width: "100%",
      height: "100%"
    }
  ));
}
const dr = {
  base: Se`
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
  lg: Se`
    .content {
      h2 {
        font-size: 4rem;
      }
    }
  `
}, mr = {
  title: "Building a Platform in Space to Benefit Life on Earth",
  subtitle: "Space stations that open the next chapter of human space exploration and development",
  backgroundImage: Q.generate({
    src: "https://source.unsplash.com/1600x900/?astronaut"
  })
}, vr = "推奨表示サイズの説明等";
export {
  yr as Template,
  mr as defaultProps,
  vr as description,
  pr as props,
  dr as styles
};
