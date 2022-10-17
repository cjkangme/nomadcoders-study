const submitForm = document.querySelector('.guess-num__form'); // event listner는 반드시 form에 지정해야한다!! (submit을 하는 것은 form이니깐!!!)
const ranNumInput = document.querySelector('.ran-num__input');
const guessNumInput = document.querySelector('.guess-num__input');
const modalWindow = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');

function paintResult(result, guessedNum, answer) {
  if (document.querySelector('.exist') !== null) {
    document.querySelector('.exist').remove();
  }

  const resultBox = document.createElement('div');
  const resultDetail = document.createElement('div');
  const resultText = document.createElement('div');

  resultBox.className = 'exist';

  resultDetail.innerText = `You choose: ${guessedNum}, the machine choose: ${answer}.`;
  resultBox.appendChild(resultDetail);

  resultText.innerText = result;
  resultText.classList.add('bold');
  resultBox.appendChild(resultText);

  document.body.appendChild(resultBox);
}

function answerCheck(guessedNum, ranNumArray) {
  const answer = Math.floor(Math.random() * ranNumArray.length);
  let result = '';
  if (guessedNum == answer) {
    result = 'You won!';
  } else {
    result = 'You lost!';
  }
  paintResult(result, guessedNum, answer);
}

function generateArray(maxNum) {
  let i = 0;
  const ranNumArray = [];
  while (i <= maxNum) {
    ranNumArray.push(i);
    i++;
  }
  return ranNumArray;
}

function handleSubmit(event) {
  event.preventDefault();

  const maxNum = ranNumInput.value;
  const guessedNum = guessNumInput.value;

  if (maxNum < 0) {
    modalWindow.classList.remove('hidden');
  }
  const ranNumArray = generateArray(maxNum);
  answerCheck(guessedNum, ranNumArray);
}

function handleModalClick() {
  modalWindow.classList.add('hidden');
}

submitForm.addEventListener('submit', handleSubmit);
modalBtn.addEventListener('click', handleModalClick);
