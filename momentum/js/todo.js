const toDoForm = document.querySelector('#todo-form');
const newToDoInput = toDoForm.querySelector('.todo-form__input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];
const TODOS_KEY = 'toDos';

function handleEditSubmit(li) {
  const editList = document.querySelector('.edit');
  const text = editList.value;
  const liId = parseInt(li.id);
  toDos.forEach((obj) => {
    if (obj.id === liId) {
      obj.text = text;
      saveToDos();
    }
  });
  editList.value = text;
  editList.classList.remove('edit');
  editList.removeAttribute(
    'onKeypress',
    'javascript:if(event.keyCode==13) {handleEditSubmit()}'
  );
  editList.setAttribute('readonly', 'true');
}

function addNewToDo(newToDoObj) {
  const newList = document.createElement('li');
  const newText = document.createElement('input');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  editButton.classList.add('fa-solid', 'fa-pen-to-square');
  deleteButton.classList.add('fa-solid', 'fa-trash');

  editButton.addEventListener('click', editToDo);
  deleteButton.addEventListener('click', deleteToDo);

  newList.id = newToDoObj.id;
  newList.appendChild(newText);
  newText.value = newToDoObj.text;
  newText.setAttribute('readonly', true);
  newText.classList.add('list__item');
  newText.addEventListener('click', handelListClick);

  newList.appendChild(editButton);
  newList.appendChild(deleteButton);

  toDoList.appendChild(newList);
}

function editToDo(event) {
  li = event.target.parentNode;
  text = event.target.previousSibling;
  text.removeAttribute('readonly');
  text.classList.add('edit');
  text.focus();
  text.setAttribute(
    'onKeypress',
    'javascript:if(event.keyCode==13) {handleEditSubmit(li)}'
  );
}

function deleteFilter(toDos) {
  return parseInt(liId) !== toDos.id;
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  const liId = parseInt(event.target.parentNode.id);
  toDos = toDos.filter((toDo) => toDo.id !== liId);
  saveToDos();
  li.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSumbit(event) {
  const newToDo = newToDoInput.value;
  event.preventDefault();
  newToDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  addNewToDo(newToDoObj);
  saveToDos();
}

function handelListClick(event) {
  if (!event.target.classList.contains('complete')) {
    event.target.style.textDecoration = 'line-through';
    event.target.style.color = 'grey';
    event.target.classList.add('complete');
  } else {
    event.target.style.textDecoration = 'none';
    event.target.style.color = '#000';
    event.target.classList.remove('complete');
  }
}

toDoForm.addEventListener('submit', handleTodoSumbit);

localStorageToDos = localStorage.getItem(TODOS_KEY);

if (localStorageToDos !== null) {
  const parsedToDos = JSON.parse(localStorageToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addNewToDo);
}
