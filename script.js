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

    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = "hotpink";
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
