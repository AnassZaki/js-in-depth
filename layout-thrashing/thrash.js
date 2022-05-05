const divs = document.querySelectorAll("div");
const now = () => (performance ? performance.now() : Date.now());

const thrash = document.getElementById("thrash");
const nothrash = document.getElementById("nothrash");
const speed = document.getElementById("speed");

// Resets the divs
function reset() {
  divs.forEach((div) => {
    div.style.height = "";
    div.offsetTop;
  });
}

function renderSpeed(ms) {
  speed.textContent = ms + "ms";
}

/**
 * Thrashing solution
 */

thrash.onclick = () => {
  reset();

  const start = now();

  // Loop each div
  divs.forEach((div) => {
    const width = div.clientWidth;
    div.style.height = width + "px";
  });

  // Render result
  renderSpeed(now() - start);
};

/**
 * Non-thrashing solution
 */

nothrash.onclick = function () {
  reset();

  const start = now();

  // Loop each div
  divs.forEach((div) => {
    const width = div.clientWidth;

    // Schedule the write
    // operation to be run
    // in the next frame.
    requestAnimationFrame(() => {
      div.style.height = width + "px";
    });
  });

  // Render result
  requestAnimationFrame(() => renderSpeed(now() - start));
};
