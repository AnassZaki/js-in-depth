const drawButton = document.getElementById("slow-draw");
const fastDrawButton = document.getElementById("fast-draw");

const section = document.getElementById("fragment");

const draw = (count, storage) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    const style = div.style;

    style.width = "100px";
    style.height = "100px";
    style.backgroundColor = "white";
    style.border = "2px solid black";

    storage.appendChild(div);
  }
};

drawButton.onclick = () => {
  draw(200, section);
};

fastDrawButton.onclick = () => {
  const fragment = new DocumentFragment();

  draw(200, fragment);

  section.appendChild(fragment);
};
