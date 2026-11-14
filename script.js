const container = document.getElementById('container');
const sizeLabel = document.getElementById('sizeLabel');
const sizeSlider = document.getElementById('sizeSlider');
let mode = 'rainbow';
let chosenColor = '#ff00ff';
let gridOn = true;

function createGrid(size) {
  container.innerHTML = '';
  sizeLabel.textContent = size + ' x ' + size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    if (!gridOn) div.classList.add('no-grid');
    div.style.width = `calc(100% / ${size})`;
    div.style.height = `calc(100% / ${size})`;
    div.dataset.dark = '0';
    div.style.backgroundColor = 'white';

    div.addEventListener('mouseover', () => {
      if (mode === 'rainbow') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else if (mode === 'shading') {
        let dark = parseInt(div.dataset.dark) + 1;
        if (dark > 10) dark = 10;
        div.dataset.dark = dark;
        const val = 255 - (dark * 25);
        div.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
      } else if (mode === 'eraser') {
        div.style.backgroundColor = 'white';
        div.dataset.dark = '0';
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
document.getElementById('shadingBtn').addEventListener('click', () => mode = 'shading');
document.getElementById('eraserBtn').addEventListener('click', () => mode = 'eraser');
document.getElementById('clearBtn').addEventListener('click', () => createGrid(sizeSlider.value));

document.getElementById('colorPicker').addEventListener('input', (e) => {
  chosenColor = e.target.value;
  mode = 'picker';
});

document.getElementById('bgPicker').addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

document.getElementById('gridBtn').addEventListener('click', (e) => {
  gridOn = !gridOn;
  e.target.textContent = gridOn ? 'Grid Lines: ON' : 'Grid Lines: OFF';
  document.querySelectorAll('.square').forEach(s => {
    s.classList.toggle('no-grid', !gridOn);
  });
});

sizeSlider.addEventListener('input', () => {
  createGrid(sizeSlider.value);
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
