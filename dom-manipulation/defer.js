console.log("Defer loaded JS");

window.addEventListener("resize", (event) => {
  console.log("Window event", event);
});

/** Resize event is not available in the document object */
document.addEventListener("resize", (event) => {
  console.log("Document event", event);
});

const node = document.querySelector(".semantic");
const h1 = document.querySelectorAll("h1");

const element = document.getElementById("non-semantic");
const button = document.querySelector("button");

node.addEventListener(
  "click",
  (event) => console.log("parent", event.target),
  true
);

h1[1].addEventListener("click", (event) => console.log("child", event.target));

// element.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// button.onclick = (event) => console.log("onclick", event);
// button.addEventListener("click", (event) =>
//   console.log("addEventListener", event)
// );

// console.log(button.onclick);
