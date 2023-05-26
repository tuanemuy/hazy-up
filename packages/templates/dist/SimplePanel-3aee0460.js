import { j as e } from "./jsx-runtime-cbaaaa63.js";
import { css as r } from "@emotion/css";
const n = [
  { type: "text", key: "name", name: "名前" },
  { type: "textarea", key: "description", name: "説明" },
  { type: "boolean", key: "reverse", name: "反転色" }
], c = ({ name: o, description: t, reverse: a, className: s }) => /* @__PURE__ */ e.jsxs("div", { className: `${s} ${a ? "reverse" : ""}`, children: [
  /* @__PURE__ */ e.jsx("h3", { children: o }),
  /* @__PURE__ */ e.jsx("p", { children: t })
] }), i = {
  base: r`
    width: 100%;
    height: 100%;
    padding: calc(var(--grid, 16px) * 2);
    color: var(--white, #ffffff);
    background-color: var(--theme, #232c64);

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      margin-top: calc(var(--grid, 16px) * 1);
      overflow: break-word;
      word-break: break-all;
    }

    &.reverse {
      color: var(--theme, #232c64);
      background-color: var(--white, #ffffff);

      p {
        color: var(--black, #333333);
      }
    }
  `,
  lg: r`
    h3 {
      font-size: 2rem;
    }
  `
}, l = {
  name: "サービス①",
  description: "私たちは〇〇を提供しています。",
  reverse: !1
}, p = "推奨表示サイズの説明等", m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Template: c,
  defaultProps: l,
  description: p,
  props: n,
  styles: i
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as S,
  c as T,
  p as a,
  l as d,
  n as p,
  i as s
};
