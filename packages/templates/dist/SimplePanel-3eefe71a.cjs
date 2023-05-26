"use strict";const e=require("./jsx-runtime-5c3ac4f7.cjs"),r=require("@emotion/css"),t=[{type:"text",key:"name",name:"名前"},{type:"textarea",key:"description",name:"説明"},{type:"boolean",key:"reverse",name:"反転色"}],s=({name:c,description:i,reverse:l,className:p})=>e.jsxRuntimeExports.jsxs("div",{className:`${p} ${l?"reverse":""}`,children:[e.jsxRuntimeExports.jsx("h3",{children:c}),e.jsxRuntimeExports.jsx("p",{children:i})]}),o={base:r.css`
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
  `,lg:r.css`
    h3 {
      font-size: 2rem;
    }
  `},n={name:"サービス①",description:"私たちは〇〇を提供しています。",reverse:!1},a="推奨表示サイズの説明等",d=Object.freeze(Object.defineProperty({__proto__:null,Template:s,defaultProps:n,description:a,props:t,styles:o},Symbol.toStringTag,{value:"Module"}));exports.SimplePanel=d;exports.Template=s;exports.defaultProps=n;exports.description=a;exports.props=t;exports.styles=o;
