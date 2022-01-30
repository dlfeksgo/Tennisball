//필드 위치 
//game_play 버튼을 누르면
//carrot과 bug를 5개씩 생성해서 display block으로 바꾸고, 랜덤 배치한다.

const zone = document.querySelector('.game_zone');
const zoneRect = zone.getBoundingClientRect();

function initGame(){
    console.log(zoneRect);
}

initGame();


