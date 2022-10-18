function onGeoSuccess(location) {
  let lat = location.coords.latitude;
  let long = location.coords.longitude;
  console.log('You live in', lat, long);
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
