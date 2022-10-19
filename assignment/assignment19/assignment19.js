const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const angle = ['to top', 'to left', '45deg', '225deg'];

const body = document.querySelector('body');
const button = document.querySelector('button');

let color1 = '';
let color2 = '';
let ranAngle = '';

function generateRanNum(array) {
  return Math.floor(Math.random() * array.length);
}

function paintBackground() {
  color1 = colors[generateRanNum(colors)];
  color2 = colors[generateRanNum(colors)];
  while (color1 === color2) {
    color2 = generateRanNum(colors);
  }
  ranAngle = angle[generateRanNum(angle)];
  body.style.background = `linear-gradient(${ranAngle}, ${color1}, ${color2})`;
}

button.addEventListener('click', paintBackground);
