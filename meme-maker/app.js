const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');
const modeBtn = document.querySelector('#mode-btn');
const clearBtn = document.querySelector('#clear-btn');
const eraseBtn = document.querySelector('#erase-btn');
const colorOptions = document.querySelectorAll('.color-option');
const fileInput = document.querySelector('#file-input');
const textInput = document.querySelector('#text-input');
const saveBtn = document.querySelector('#save-btn');

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
ctx.lineCap = 'round';

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

function startFilling() {
  if (isFill === true) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

function onModeClick() {
  if (isFill === false) {
    isFill = true;
    modeBtn.innerText = 'Stroke';
  } else {
    isFill = false;
    modeBtn.innerText = 'Fill';
  }
}

function onClearClick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function onEraseClick() {
  ctx.strokeStyle = '#fff';
  isFill = false;
  modeBtn.innerText = 'Fill';
}

function onFileChange(event) {
  onClearClick();
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== '') {
    ctx.save();
    ctx.lineWidth = 3;
    ctx.font = '64px impact';
    ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

canvas.addEventListener('mousemove', drawMousemove);
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', cancelDrawing);
canvas.addEventListener('mouseout', cancelDrawing);
canvas.addEventListener('click', startFilling);
canvas.addEventListener('dblclick', onDoubleClick);

lineWidth.addEventListener('change', onLineWidthChange);

color.addEventListener('change', onColorChange);
colorOptions.forEach((color) =>
  color.addEventListener('click', onColorOptionClick)
);

modeBtn.addEventListener('click', onModeClick);
clearBtn.addEventListener('click', onClearClick);
eraseBtn.addEventListener('click', onEraseClick);
fileInput.addEventListener('change', onFileChange);
