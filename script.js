const container = document.getElementById("container");
const button = document.getElementById("new-grid");

function makeGrid(size) {
  container.innerHTML = "";
  let squareSize = 480 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = squareSize + "px";
    div.style.height = squareSize + "px";
    div.style.opacity = "0";

    div.addEventListener("mouseover", function() {
      // Rainbow color!
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Get darker each time!
      let currentOpacity = Number(div.style.opacity);
      if (currentOpacity < 1) {
        div.style.opacity = currentOpacity + 0.1;
      }
    });

    container.appendChild(div);
  }
}

button.addEventListener("click", function() {
  let newSize = prompt("How many squares per side? Max 100");
  newSize = Number(newSize);
  if (newSize > 100) newSize = 100;
  if (newSize < 1) newSize = 16;
  makeGrid(newSize);
});

makeGrid(16);
