const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('.login-form__input');
const loginButton = loginForm.querySelector('.login-form__button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//function

function handleLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreeting();
}

function printGreeting() {
  greeting.innerText = `Welcome, ${localStorage.getItem('username')}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  printGreeting();
}
