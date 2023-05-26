"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@emotion/css"),c=[{type:"text",key:"name",name:"名前"},{type:"textarea",key:"description",name:"説明"},{type:"boolean",key:"reverse",name:"反転色"}];function s({name:r,description:t,reverse:a,className:o}){return React.createElement("div",{className:`${o} ${a?"reverse":""}`},React.createElement("h3",null,r),React.createElement("p",null,t))}const n={base:e.css`
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
  `,lg:e.css`
    h3 {
      font-size: 2rem;
    }
  `},l={name:"サービス①",description:"私たちは〇〇を提供しています。",reverse:!1},i="推奨表示サイズの説明等";exports.Template=s;exports.defaultProps=l;exports.description=i;exports.props=c;exports.styles=n;
