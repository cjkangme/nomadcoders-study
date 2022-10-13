const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('.login-form__input');
const loginButton = loginForm.querySelector('.login-form__button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//function

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreeting(username);
}

function printGreeting(username) {
  greeting.innerText = `Welcome, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  printGreeting(savedUsername);
}
