let rafIdDraw;
let rafIdErase;
const body = document.body;

function rafDraw() {
  const div = document.createElement("div");
  div.className = "raf-box";
  body.appendChild(div);

  rafIdDraw = requestAnimationFrame(rafDraw);
}

function erase() {
  const div = document.querySelector(".raf-box");
  if (div) {
    div.remove();
    rafIdErase = requestAnimationFrame(erase);
  } else {
    console.log("No more divs broski");
    return;
  }
}

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const eraseButton = document.getElementById("erase");

startButton.addEventListener("click", () => {
  rafIdDraw = requestAnimationFrame(rafDraw);
});

eraseButton.addEventListener("click", () => {
  rafIdErase = requestAnimationFrame(erase);
});

pauseButton.addEventListener("click", () => {
  cancelAnimationFrame(rafIdDraw);
  cancelAnimationFrame(rafIdErase);
});
