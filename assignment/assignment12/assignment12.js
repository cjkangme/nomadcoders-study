const screenBody = document.querySelector('body');
const screenMain = document.querySelector('main');
const screensaver = document.querySelector('.screensaver');
const widthValue = document.querySelector('.screen-width__value');

function handlerScreenWidth() {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    screenMain.className = 'sunset';
    screensaver.className = 'hidden';
  } else if (screenWidth >= 1024) {
    screenMain.className = 'cloudy';
  } else if (screenWidth >= 800) {
    screenMain.className = 'aurora';
  } else if (screenWidth >= 640) {
    screenMain.className = 'wisteria';
    screensaver.className = 'hidden';
  } else {
    screenMain.className = 'hidden';
    screensaver.className = '';
  }
  widthValue.innerText = screenWidth;
}

handlerScreenWidth();
window.addEventListener('resize', handlerScreenWidth);
