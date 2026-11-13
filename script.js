createGrid(16);
document.getElementById('saveBtn').addEventListener('click', () => {
  const squares = container.children;
  const size = Math.sqrt(squares.length);
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  // White background
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
