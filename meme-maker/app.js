const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const lineWidth = document.querySelector('#line-width');

const colors = [
  '#C7395F',
  '#DED4E8',
  '#E8BA40',
  '#EDCBD2',
  '#80C4B7',
  '#E3856B',
  '#3B5BA5',
  '#BBCB50',
  '#4AAFD5',
  '#E7A339',
  '#552619',
  '#31473A',
];

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let isPainting = false;

function drawMousemove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startDrawing() {
  isPainting = true;
}

function cancelDrawing() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener('mousemove', drawMousemove);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', cancelDrawing);
canvas.addEventListener('mouseout', cancelDrawing);

lineWidth.addEventListener('change', onLineWidthChange);
