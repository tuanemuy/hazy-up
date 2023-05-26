import { j as e } from "./jsx-runtime-cbaaaa63.js";
import { css as t } from "@emotion/css";
const a = [
  { type: "text", key: "title", name: "タイトル" },
  { type: "text", key: "subtitle", name: "サブタイトル" },
  { type: "boolean", key: "reverse", name: "反転色" }
], n = ({ title: r, subtitle: o, reverse: i, className: s }) => /* @__PURE__ */ e.jsxs("div", { className: `${s}${i ? " reverse" : ""}`, children: [
  /* @__PURE__ */ e.jsx("h3", { children: r }),
  /* @__PURE__ */ e.jsx("p", { children: o })
] }), l = {
  base: t`
    position: relative;
    width: 100%;
    min-width: 100px;

    &::after {
      position: relative;
      z-index: 1;
      content: "";
      display: block;
      width: 3rem;
      height: 3px;
      margin: 0 auto;
      margin-top: calc(var(--grid, 16px) * 1);
      background-color: var(--theme, "#333333");
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.25;
    }

    p {
      overflow: break-word;
      word-break: break-all;
      font-size: 1rem;
      text-align: center;
    }

    &.reverse {
      color: var(--white, "#ffffff");

      &::after {
        background-color: var(--white, "#ffffff");
      }
    }
  `,
  lg: t`
    h3 {
      font-size: 2.5rem;
    }
  `
}, c = {
  title: "Section Title",
  subtitle: "セクションタイトル",
  reverse: !1
}, f = "推奨表示サイズの説明等", d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Template: n,
  defaultProps: c,
  description: f,
  props: a,
  styles: l
}, Symbol.toStringTag, { value: "Module" }));
export {
  d as S,
  n as T,
  f as a,
  c as d,
  a as p,
  l as s
};
