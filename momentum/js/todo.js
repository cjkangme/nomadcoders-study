const toDoForm = document.querySelector('#todo-form');
const newToDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function handleEditSubmit() {
  const editList = document.querySelector('.edit');
  const text = editList.value;
  editList.value = text;
  editList.classList.remove('edit');
  editList.removeAttribute(
    'onKeypress',
    'javascript:if(event.keyCode==13) {handleEditSubmit()}'
  );
  editList.setAttribute('readonly', 'true');
}

function editToDo(event) {
  li = event.target.parentNode;
  text = event.target.previousSibling;
  text.removeAttribute('readonly');
  text.classList.add('edit');
  text.focus();
  text.setAttribute(
    'onKeypress',
    'javascript:if(event.keyCode==13) {handleEditSubmit()}'
  );
}

function deleteToDo(event) {
  li = event.target.parentNode;
  li.remove();
}

function addNewToDo(newToDo) {
  const newList = document.createElement('li');
  const newText = document.createElement('input');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  editButton.classList.add('fa-solid', 'fa-pen-to-square');
  deleteButton.classList.add('fa-solid', 'fa-trash');

  editButton.addEventListener('click', editToDo);
  deleteButton.addEventListener('click', deleteToDo);

  newList.appendChild(newText);
  newText.value = newToDo;
  newText.setAttribute('readonly', true);

  newList.appendChild(editButton);
  newList.appendChild(deleteButton);

  toDoList.appendChild(newList);
}

function handleTodoSumbit(event) {
  const newToDo = newToDoInput.value;
  event.preventDefault();
  newToDoInput.value = '';
  addNewToDo(newToDo);
}

toDoForm.addEventListener('submit', handleTodoSumbit);
