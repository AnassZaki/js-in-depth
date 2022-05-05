import { boxShadow, buttonSize } from "./mixins.js";
import { backgroundColor, paddingHorz, paddingVert } from "./consts.js";
import { css } from "./css.js";

const styles = {
  strNotation: `
    color: white;
    background: green;
    padding: 10px 13px;
    font-size: 1.2rem;
    border-radius: 7px;
    -moz-box-shadow: 0px 4px 5px #666,2px 6px 10px #999;
    -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  `,
  objNotation: {
    color: "red",
    background: backgroundColor,
    padding: `${paddingHorz} ${paddingVert}`,
    ...buttonSize(),
    ...boxShadow("0px 10px 20px #666"),
  },
};

const classes = css(styles);

document.body.innerHTML = `
  <button class="${classes.strNotation}">CSSinJS Button</button>
  <button class="${classes.objNotation}">CSSinJS Button</button>
`;
