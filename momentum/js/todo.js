const toDoForm = document.querySelector('#todo-form');
const newToDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function handleTodoSumbit(event) {
  const newList = document.createElement('li');
  const newToDo = newToDoInput.value;
  event.preventDefault();
  toDoList.appendChild(newList);
  newList.innerText = newToDoInput.value;
  newToDoInput.value = '';
}

toDoForm.addEventListener('submit', handleTodoSumbit);
