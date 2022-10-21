const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');
const modeBtn = document.querySelector('#mode-btn');
const colorOptions = document.querySelectorAll('.color-option');

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
let isFill = false;

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

function startFilling(event) {
  if (isFill === true) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorOptionClick(event) {
  colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick(event) {
  if (isFill === false) {
    isFill = true;
    modeBtn.innerText = 'Stroke';
  } else {
    isFill = false;
    modeBtn.innerText = 'Fill';
  }
}

canvas.addEventListener('mousemove', drawMousemove);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', cancelDrawing);
canvas.addEventListener('mouseout', cancelDrawing);
canvas.addEventListener('click', startFilling);

lineWidth.addEventListener('change', onLineWidthChange);

color.addEventListener('change', onColorChange);
colorOptions.forEach((color) =>
  color.addEventListener('click', onColorOptionClick)
);

modeBtn.addEventListener('click', onModeClick);
