const clock = document.querySelector('#clock');

function setClock() {
  const now = new Date();
  const nowHours = now.getHours();
  const nowMinutes = now.getMinutes();
  const nowSeconds = now.getSeconds();
  clock.innerText = `${nowHours}:${nowMinutes}:${nowSeconds}`;
}

setClock();
setInterval(setClock, 1000);
