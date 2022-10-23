const login = document.querySelector('#login');
const loginInput = login.querySelector('.login-form__input');
const loginForm = login.querySelector('.login-form');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//function

function handleLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  login.classList.add(HIDDEN_CLASSNAME);
  printGreeting();
}

function printGreeting() {
  greeting.innerText = `Welcome, ${localStorage.getItem('username')}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  printGreeting();
}
