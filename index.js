for (let i = 0; i < 16; i++) {
  let container = document.createElement("div");
  let body = document.querySelector("body");
  body.appendChild(container);
  console.log("i " + i);
  for (let j = 0; j < 16; j++) {
    let box = document.createElement("div");
    container.appendChild(box);
    box.addEventListener("mouseover", () => {
      box.classList.add("hover-color");
    });
  }
  container.classList.toggle("horizontal-grid");
}
