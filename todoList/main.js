'use strict'

const newList = document.querySelector('.list');
const input = document.querySelector('.textInput');
const addBtn = document.querySelector('.add');


function onAdd(){
    const txt = input.value;
    if(txt === ''){
        input.focus();
    return alert('내용 입력해 짜스가');

    }
// const newList = document.querySelector('.list');
// ul인 리스트 안에다가 다른 데이터를 넣은 li를 넣을거니까

    //li 힌줄
 const item1 = document.createElement('li');
 item1.setAttribute('class', 'item');
    //할일 텍스트
 const content = document.createElement('span');
 content.setAttribute('class', 'text');
 content.innerHTML = txt;
     //쓰레기통
const deleteBtn = document.createElement('button');
deleteBtn.setAttribute('class', 'delete');
deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
deleteBtn.addEventListener('click', function(){
    newList.removeChild(item1);
    newList.removeChild(divider1);
});

    //구분선
const divider1 = document.createElement('div');
divider1.setAttribute('class', 'divider');

item1.appendChild(content);
item1.appendChild(deleteBtn);

newList.appendChild(item1);
newList.appendChild(divider1);

item1.scrollIntoView({block: "center"});

input.value = '';
input.focus();
}

addBtn.addEventListener('click', function(){
 onAdd();
})

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        onAdd();
    }
})

//리스트가 생성되어야 휴지통이 나오기때문에 실행시에
//삭제 이벤트리스너 참조가 없다고 나옴. 
//가만히 있을 때에는 해당 함수가 실행되지 않게 해야함??