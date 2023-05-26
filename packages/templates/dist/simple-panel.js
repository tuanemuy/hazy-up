import { css as e } from "@emotion/css";
const n = [
  { type: "text", key: "name", name: "名前" },
  { type: "textarea", key: "description", name: "説明" },
  { type: "boolean", key: "reverse", name: "反転色" }
];
function l({ name: r, description: t, reverse: a, className: o }) {
  return /* @__PURE__ */ React.createElement("div", { className: `${o} ${a ? "reverse" : ""}` }, /* @__PURE__ */ React.createElement("h3", null, r), /* @__PURE__ */ React.createElement("p", null, t));
}
const s = {
  base: e`
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
  lg: e`
    h3 {
      font-size: 2rem;
    }
  `
}, i = {
  name: "サービス①",
  description: "私たちは〇〇を提供しています。",
  reverse: !1
}, f = "推奨表示サイズの説明等";
export {
  l as Template,
  i as defaultProps,
  f as description,
  n as props,
  s as styles
};
