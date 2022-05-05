import { paddingHorz, paddingVert } from "./consts.js";

export const boxShadow = (...shadows) => ({
  "-moz-box-shadow": shadows,
  "-webkit-box-shadow": shadows,
  "box-shadow": shadows,
});

export const buttonSize = ({
  paddingY = paddingVert,
  paddingX = paddingHorz,
  fontSize = "10px",
  borderRadius = "20px",
} = {}) => ({
  padding: `${paddingY} ${paddingX}`,
  "font-size": fontSize,
  "border-radius": borderRadius,
});
