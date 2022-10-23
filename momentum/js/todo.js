const toDoForm = document.querySelector('#todo-form');
const newToDoInput = toDoForm.querySelector('.todo-form__input');
const toDoList = document.querySelector('#todo-list');
const timeTable = document.querySelectorAll('.time-table__item');
const clearBtn = document.querySelector('.time-table__clear');

const colorList = [
  '#C7395F',
  '#DED4E8',
  '#E8BA40',
  '#EDCBD2',
  '#80C4B7',
  '#E3856B',
  '#3B5BA5',
  '#BBCB50',
  '#4AAFD5',
  '#E7A339',
  '#552619',
  '#31473A',
];

let colorValue = '';
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
  const color = document.createElement('input');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  let colorValue = colorList[Math.floor(Math.random() * colorList.length)];

  color.type = 'color';
  color.value = colorValue;

  editButton.classList.add('fa-solid', 'fa-pen-to-square');
  deleteButton.classList.add('fa-solid', 'fa-trash');

  color.addEventListener('click', colorSelect);
  editButton.addEventListener('click', editToDo);
  deleteButton.addEventListener('click', deleteToDo);

  newList.appendChild(color);

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

function colorSelect(event) {
  colorValue = event.target.value;
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

function onClearBtnClick() {
  timeTable.forEach((item) => (item.style.backgroundColor = 'transparent'));
}

function onTimeTableMousedown(event) {
  event.target.style.backgroundColor = `${colorValue}`;
}

toDoForm.addEventListener('submit', handleTodoSumbit);
clearBtn.addEventListener('click', onClearBtnClick);

localStorageToDos = localStorage.getItem(TODOS_KEY);

if (localStorageToDos !== null) {
  const parsedToDos = JSON.parse(localStorageToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addNewToDo);
}

timeTable.forEach((item) =>
  item.addEventListener('click', onTimeTableMousedown)
);
