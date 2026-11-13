const container = document.getElementById('container');
let mode = 'rainbow';
let chosenColor = '#ff00ff';

function createGrid(size) {
  container.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `calc(100% / ${size})`;
    div.style.height = `calc(100% / ${size})`;

    div.addEventListener('mouseover', () => {
      if (mode === 'rainbow') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else if (mode === 'eraser') {
        div.style.backgroundColor = 'white';
      } else if (mode === 'picker') {
        div.style.backgroundColor = chosenColor;
      } else {
        div.style.backgroundColor = 'black';
      }
    });
    container.appendChild(div);
  }
}

document.getElementById('blackBtn').addEventListener('click', () => mode = 'black');
document.getElementById('rainbowBtn').addEventListener('click', () => mode = 'rainbow');
document.getElementById('eraserBtn').addEventListener('click', () => mode = 'eraser');
document.getElementById('clearBtn').addEventListener('click', () => createGrid(16));
document.getElementById('colorPicker').addEventListener('input', (e) => {
  chosenColor = e.target.value;
  mode = 'picker';
});
document.getElementById('newGridBtn').addEventListener('click', () => {
  let size = prompt('How many squares per side? Max 100');
  if (size > 100) size = 100;
  if (size) createGrid(size);
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const squares = container.children;
  const size = Math.sqrt(squares.length);
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 500, 500);

  for (let i = 0; i < squares.length; i++) {
    const row = Math.floor(i / size);
    const col = i % size;
    const color = squares[i].style.backgroundColor || 'white';
    const boxSize = 500 / size;
    ctx.fillStyle = color;
    ctx.fillRect(col * boxSize, row * boxSize, boxSize, boxSize);
  }

  const link = document.createElement('a');
  link.download = 'my-etch-a-sketch.png';
  link.href = canvas.toDataURL();
  link.click();
});

createGrid(16);
