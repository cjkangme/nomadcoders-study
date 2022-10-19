const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(200, 200, 20, 200);
// ctx.fillRect(400, 200, 20, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(285, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);

// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(310, 100);
// ctx.lineTo(420, 200);
// ctx.lineWidth = 2;
// ctx.fill();

ctx.beginPath();
ctx.fillRect(185, 200, 15, 100);
ctx.fillRect(300, 200, 15, 100);
ctx.strokeRect(220, 200, 60, 100);
ctx.fillRect(210, 315, 20, 100);
ctx.fillRect(270, 315, 20, 100);
ctx.arc(250, 160, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(240, 160, 5, -0.25 * Math.PI, 1.25 * Math.PI);
ctx.arc(260, 160, 5, -0.25 * Math.PI, 1.25 * Math.PI);
ctx.fillStyle = '#fff';
ctx.fill();
