/** Event Delagation */
const customUI = document.createElement("ul");

function responding(evt) {
  console.log(evt, "Responding");
  if (evt.target.nodeName === "LI") console.log("Responding");
}

for (var i = 1; i <= 10; i++) {
  const newElement = document.createElement("li");
  newElement.textContent = "This is line " + i;
  customUI.appendChild(newElement);
}

customUI.addEventListener("click", responding);

document.body.appendChild(customUI);
