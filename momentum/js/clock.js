const clock = document.querySelector('#clock');

function setClock() {
  const now = new Date();
  const nowHours = String(now.getHours()).padStart(2, '0');
  const nowMinutes = String(now.getMinutes()).padStart(2, '0');
  clock.innerText = `${nowHours}:${nowMinutes}`;
}

setClock();
setInterval(setClock, 1000);
