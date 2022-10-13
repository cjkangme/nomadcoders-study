const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('.login-form__input');
const loginButton = loginForm.querySelector('.login-form__button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', handleLoginSubmit);
