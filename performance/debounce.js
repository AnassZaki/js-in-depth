const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      console.log("Debouced");
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function drawMe() {
  const div = document.createElement("div");
  div.className = "debounce-box";
  body.appendChild(div);
}

const debounceButton = document.getElementById("debounce");

const drawOnce = debounce(drawMe, 300);

debounceButton.addEventListener("click", () => {
  drawOnce();
});
