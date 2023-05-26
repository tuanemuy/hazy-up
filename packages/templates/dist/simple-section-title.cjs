"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@emotion/css"),a=[{type:"text",key:"title",name:"タイトル"},{type:"text",key:"subtitle",name:"サブタイトル"},{type:"boolean",key:"reverse",name:"反転色"}];function n({title:t,subtitle:r,reverse:o,className:i}){return React.createElement("div",{className:`${i}${o?" reverse":""}`},React.createElement("h3",null,t),React.createElement("p",null,r))}const l={base:e.css`
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
  `,lg:e.css`
    h3 {
      font-size: 2.5rem;
    }
  `},s={title:"Section Title",subtitle:"セクションタイトル",reverse:!1},c="推奨表示サイズの説明等";exports.Template=n;exports.defaultProps=s;exports.description=c;exports.props=a;exports.styles=l;
