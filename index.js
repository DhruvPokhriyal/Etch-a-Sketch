function createGrid(n) {
  let containers = document.querySelector(".containers");
  while (containers.hasChildNodes()) {
    containers.removeChild(containers.firstChild);
  }
  for (let i = 0; i < n; i++) {
    let container = document.createElement("div");
    containers.appendChild(container);
    console.log("i " + i);
    for (let j = 0; j < n; j++) {
      let box = document.createElement("div");
      container.appendChild(box);
      box.addEventListener("mouseover", () => {
        box.classList.add("hover-color");
      });
    }
    container.classList.toggle("horizontal-grid");
  }
}
createGrid(16);
const popUpButton = document.querySelector("button");
popUpButton.addEventListener("click", () => {
  let n = prompt("Enter n (n < 100) :");
  createGrid(n);
});
