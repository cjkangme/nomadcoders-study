const timeStamp = document.querySelector('#time-stamp');
const christmas = new Date('2022-12-25 00:00:00');

function getTimes() {
  const now = new Date();
  const dDay = christmas - now;

  const leftDay = padStart(Math.floor(dDay / (1000 * 60 * 60 * 24)));
  const leftHours = padStart(Math.floor((dDay / (1000 * 60 * 60)) % 24));
  const leftMinutes = padStart(Math.floor((dDay / (1000 * 60)) % 60));
  const leftSeconds = padStart(Math.floor((dDay / 1000) % 60));

  timeStamp.innerText = `${leftDay}d ${leftHours}h ${leftMinutes}m ${leftSeconds}s`;
}

function padStart(content) {
  return String(content).padStart(2, '0');
}

setInterval(getTimes, 1000);
