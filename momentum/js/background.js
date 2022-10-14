const images = [
  'background1.jpg',
  'background2.jpg',
  'background3.jpg',
  'background4.jpg',
  'background5.jpg',
  'background6.jpg',
];

function makeRandomNumber() {
  const count = images.length;
  const randomNumber = Math.floor(Math.random() * count);
  return randomNumber;
}

const chosenImage = images[makeRandomNumber()];
const bgImage = document.createElement('img');

bgImage.src = `assets/images/${chosenImage}`;
document.body.appendChild(bgImage);
