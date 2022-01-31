//필드 위치 
//game_play 버튼을 누르면
//carrot과 bug를 5개씩 생성해서 display block으로 바꾸고, 랜덤 배치한다.

const CARROT_SIZE = 80;
const zone = document.querySelector('.game_zone');
const zoneRect = zone.getBoundingClientRect();
const playBtn = document.querySelector('.game_play'); 
const score = document.querySelector('.game_score');

function initGame(){
    console.log(zoneRect);
    addItem('carrot', 5, '/img/carrot.png');
    addItem('bug', 5, '/img/bug.png');

}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = zoneRect.width - CARROT_SIZE;
    const y2 = zoneRect.height - CARROT_SIZE;
    for(let i = 0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        zone.appendChild(item);
    }
}


function randomNumber(min, max){
    return Math.random()*(max-min) + min;
}

// initGame();

playBtn.addEventListener('click', function(){
    console.log('Hey~');
})

// function gamePlay(){
//     initGame();
//     score.innerHTML = 'carrot.count';

// }

//addItem으로 생성된 carrot의 count를 가져와서 
//game_score 부분에 innerHTML 또는 textcontent로 넣어준다.

//만일 started가 true라면 play 버튼이 눌렸을 때, 게임을 멈춘다.