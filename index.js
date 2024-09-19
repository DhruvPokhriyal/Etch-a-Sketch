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
      box.style.height = `${700 / n}px`;
      box.style.width = `${700 / n}px`;
      container.appendChild(box);
      box.addEventListener("mouseover", () => {
        // box.classList.add("hover-color");
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        // console.log(red + " " + green + " " + blue);
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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
