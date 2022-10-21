const form = document.querySelector('#search-console');
const searchInput = document.querySelector('.links__input');

const API_KEY = '944c738ce4a56b8e700b1a95bd3fc1af';

function onGeoSuccess(location) {
  let lat = location.coords.latitude;
  let long = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector('.weather__temp');
      const name = document.querySelector('.weather__name');
      const icon = document.querySelector('.weather__icon');
      temp.innerText = `${Math.round(data.main.temp * 10) / 10} ℃`;
      name.innerText = data.name;
      icon.setAttribute('src', `assets/icons/${data.weather[0].icon}.png`);
    });
}

function onGeoError() {
  const temp = document.querySelector('.weather__temp');
  const icon = document.querySelector('.weather__icon');
  temp.innerText = "Can't Find Location";
  icon.classList.add('hidden');
}

function onSearch(event) {
  const searchValue = searchInput.value;
  const a = document.createElement('a');
  event.preventDefault();
  searchInput.value = '';
  a.href = `https://www.google.co.kr/search?q=${searchValue}`;
  a.target = '_blank';
  a.click();
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

form.addEventListener('submit', onSearch);
