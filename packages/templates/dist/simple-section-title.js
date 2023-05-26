import { css as e } from "@emotion/css";
const n = [
  { type: "text", key: "title", name: "タイトル" },
  { type: "text", key: "subtitle", name: "サブタイトル" },
  { type: "boolean", key: "reverse", name: "反転色" }
];
function l({ title: t, subtitle: r, reverse: o, className: a }) {
  return /* @__PURE__ */ React.createElement("div", { className: `${a}${o ? " reverse" : ""}` }, /* @__PURE__ */ React.createElement("h3", null, t), /* @__PURE__ */ React.createElement("p", null, r));
}
const s = {
  base: e`
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
  lg: e`
    h3 {
      font-size: 2.5rem;
    }
  `
}, c = {
  title: "Section Title",
  subtitle: "セクションタイトル",
  reverse: !1
}, f = "推奨表示サイズの説明等";
export {
  l as Template,
  c as defaultProps,
  f as description,
  n as props,
  s as styles
};
