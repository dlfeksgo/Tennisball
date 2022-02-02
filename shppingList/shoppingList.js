const newList = document.querySelector('.list');
const input = document.querySelector('.textinput');
const addBtn = document.querySelector('.addBtn');
// 1. 사용자에게 데이터를 입력받는다.
// 2. 입력받은 데이터를 사용해서 새로운 리스트 행을 생성한다.
// 2-1. 새로운 아이템을 구성하는 애들은 <div>-<span>-<button>으로 여러개라서 함수로 만들자
// 3. 부모 리스트 안에 생성된 리스트를 추가한다.
// 4. 인풋을 초기화 한다.

//github test

function onAdd() {
  const text = input.value;

  if (text === '') {
    input.focus();
    return alert('내용 입력해 짜스가');
  }

  const item = createItem(text);
  newList.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  // 1. 가장 하위 카테고리인 <div>를 조작해보자.
  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', function () {
    newList.removeChild(newItem);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'div__line');

  // 2. <div>를 감싸고 있는 <li>를 조작해보자.
  const newItem = document.createElement('li');
  newItem.setAttribute('class', 'item__row');

  // 3. 따로 구현한 각각의 항목들을 상속시켜주는 작업을 해주자.
  item.appendChild(name);
  item.appendChild(deleteBtn);

  newItem.appendChild(item);
  newItem.appendChild(itemDivider);

  return newItem;
}

addBtn.addEventListener('click', function () {
  onAdd();
});

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onAdd();
  }
});
