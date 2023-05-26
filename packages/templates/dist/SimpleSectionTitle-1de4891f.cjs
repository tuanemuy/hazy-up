"use strict";const e=require("./jsx-runtime-5c3ac4f7.cjs"),t=require("@emotion/css"),r=[{type:"text",key:"title",name:"タイトル"},{type:"text",key:"subtitle",name:"サブタイトル"},{type:"boolean",key:"reverse",name:"反転色"}],i=({title:l,subtitle:a,reverse:c,className:p})=>e.jsxRuntimeExports.jsxs("div",{className:`${p}${c?" reverse":""}`,children:[e.jsxRuntimeExports.jsx("h3",{children:l}),e.jsxRuntimeExports.jsx("p",{children:a})]}),s={base:t.css`
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
  `,lg:t.css`
    h3 {
      font-size: 2.5rem;
    }
  `},o={title:"Section Title",subtitle:"セクションタイトル",reverse:!1},n="推奨表示サイズの説明等",f=Object.freeze(Object.defineProperty({__proto__:null,Template:i,defaultProps:o,description:n,props:r,styles:s},Symbol.toStringTag,{value:"Module"}));exports.SimpleSectionTitle=f;exports.Template=i;exports.defaultProps=o;exports.description=n;exports.props=r;exports.styles=s;
