const memoForm = document.getElementById('memo-form');
const newMemoInput = memoForm.querySelector('.memo-form__input');
const memoList = document.getElementById('memo-list');

let memos = [];
const MEMOS_KEY = 'memos';

function handleEditSubmit(li) {
  const editList = document.querySelector('.edit');
  const text = editList.value;
  const liId = parseInt(li.id);
  memos.forEach((obj) => {
    if (obj.id === liId) {
      obj.text = text;
      saveMemos();
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

function addNewMemo(newMemoObj) {
  const newList = document.createElement('li');
  const newText = document.createElement('input');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  editButton.classList.add('fa-solid', 'fa-pen-to-square');
  deleteButton.classList.add('fa-solid', 'fa-trash');

  editButton.addEventListener('click', editMemo);
  deleteButton.addEventListener('click', deleteMemo);

  newList.id = newMemoObj.id;
  newList.appendChild(newText);
  newText.value = newMemoObj.text;
  newText.setAttribute('readonly', true);
  newText.classList.add('list__item');
  newText.addEventListener('click', handelListClick);

  newList.appendChild(editButton);
  newList.appendChild(deleteButton);

  memoList.appendChild(newList);
}

function editMemo(event) {
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

function deleteFilter(Memos) {
  return parseInt(liId) !== Memos.id;
}

function deleteMemo(event) {
  const li = event.target.parentNode;
  const liId = parseInt(event.target.parentNode.id);
  memos = memos.filter((memo) => memo.id !== liId);
  saveMemos();
  li.remove();
}

function saveMemos() {
  localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
}

function handleMemoSumbit(event) {
  const newMemo = newMemoInput.value;
  event.preventDefault();
  newMemoInput.value = '';
  const newMemoObj = {
    text: newMemo,
    id: Date.now(),
  };
  memos.push(newMemoObj);
  addNewMemo(newMemoObj);
  saveMemos();
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

memoForm.addEventListener('submit', handleMemoSumbit);

const localStorageMemos = localStorage.getItem(MEMOS_KEY);

if (localStorageMemos !== null) {
  const parsedMemos = JSON.parse(localStorageMemos);
  memos = parsedMemos;
  parsedMemos.forEach(addNewMemo);
}
