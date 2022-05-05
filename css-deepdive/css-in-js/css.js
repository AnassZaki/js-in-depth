let counter = 0;

export const css = (styles) => {
  let classes = {};
  let cssString = "";

  for (const name in styles) {
    classes[name] = `${name}-${counter++}`;

    const selector = "." + classes[name];

    cssString += selector + "{";

    if (typeof styles[name] === "string") {
      cssString += styles[name];
    } else {
      for (const style in styles[name]) {
        cssString += `${style}: ${styles[name][style]};`;
      }
    }
    cssString += "}";
  }

  const styleTag = document.createElement("style");

  // Render styles.
  document.head.appendChild(styleTag).textContent = cssString;

  return classes;
};
