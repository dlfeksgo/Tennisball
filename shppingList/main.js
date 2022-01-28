const newList = document.querySelector('.list');
const input = document.querySelector('.textinput');
const addBtn = document.querySelector('.addBtn');

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

// deleteBtn.addEventListener('click', function () {
//   newList.removeChild(newItem);
// });

//createItem 함수가 실행되면 이벤트를 적용해서 저 HTML 구조를 추가해줘야지
let id = 0;
function createItem(text) {
  const newItem = document.createElement('li');
  newItem.setAttribute('class', 'item__row');
  newItem.innerHTML = `
    <div class="item" data-id=${id}>
      <span class="item__name">${text}</span>
      <button class="item__delete">
          <i class="fas fa-trash-alt" ${id}></i>
      </button>
    </div>
    <div class="div__line"></div>
  `;
  id++;
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

newList.addEventListener('click', function (e) {
  if (e.target.nodeName === 'I') {
    console.log('hey~');
  }
});
