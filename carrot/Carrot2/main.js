//필드 위치
//game_play 버튼을 누르면
//carrot과 bug를 5개씩 생성해서 display block으로 바꾸고, 랜덤 배치한다.

const CARROT_SIZE = 80
const CARROT_COUNT = 5
const BUG_COUNT = 5
const GAME_DURATION_SEC = 5

const zone = document.querySelector('.game_zone')
const zoneRect = zone.getBoundingClientRect()
const playBtn = document.querySelector('.game_play')
const gameScore = document.querySelector('.game_score')
const gameTimer = document.querySelector('.game_timer')

//상태에 대한 저장이 필요하다.
//게임의 초기 상태를 기억하기 위함.

let started = false
let score = 0
let timer = 0

//play 버튼 하나로 컨트롤 하는 것 말고, 버튼을 두개 둬서 하는 방법 코드 작성해보기
//버튼을 두개 두면 if문이 필요하지 않을 수도 있음.
playBtn.addEventListener('click', function () {
  // const icon = document.querySelector('.fa-play');
  if (started) {
    stopGame()
  } else {
    startGame()
    // icon.classList.add('fa-stop');
    // icon.classList.remove('fa-play');
  }
  started = !started //예를 들어 started가 true면 stopGame이 실행되는데, stopGame이 되면 started가 false가 되어야 하니까
})

function startGame() {
  initGame()
  showStopBtn()
  showTimerAndScore()
  startGameTimer()
}

function stopGame() {}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible'
  gameScore.style.visibility = 'visible'
}

function showStopBtn() {
  const icon = document.querySelector('.fa-play')
  if (started) {
    icon.classList.add('fa-stop') //새로 선언한 stopIcon이라는 변수의 class 항목에 'fa-stop'이라는 클래스를 추가해줄게~
    icon.classList.remove('fa-play') //원래 위치했던 'fa-play'는 이제 꺼져줄래 ?
  } else {
    icon.classList.add('fa-play')
    icon.classList.add('fa-stop')
  }
}

function startGameTimer() {
  //4번
  //   let nowTime2 = GAME_DURATION_SEC
  //   timer = setInterval(() => {
  //     const min = Math.floor(nowTime2 / 60)
  //     const sec = nowTime2 % 60
  //     gameTimer.innerHTML = `${min}:${sec}`
  //     if (nowTime2 <= 0) {
  //       clearInterval(timer)
  //       return
  //     }
  //     nowTime2--
  //   }, 1000)

  //3번
  //   let nowTime2 = GAME_DURATION_SEC
  //   gameTimer.innerHTML = nowTime2
  //   timer = setInterval(() => {
  //     if (nowTime2 < 0) {
  //       gameTimer.innerHTML = 'end'
  //     } else {
  //       gameTimer.innerHTML = nowTime2
  //     }
  //     --nowTime2
  //   }, 1000)

  //GAME_DURATION_SEC는 const로 위에 선언해두었으니까 새로 변수에 담아서 사용한다.

  //1번
  let nowTime = GAME_DURATION_SEC
  updateTimer(nowTime)
  timer = setInterval(() => {
    if (nowTime <= 0) {
      clearInterval(timer)
      return
    }
    updateTimer(--nowTime)
  }, 1000)

  //2번
  // timer = setInterval(countUp, 1000)
  // function countUp() {
  //   if (timer > 0) {
  //     gameTimer.innerHTML = timer
  //     ++timer
  //   }
  // }
}

//1번
function updateTimer(time) {
  const min = Math.floor(time / 60) //설정된 시간이 분을 넘길 경우에 적용
  const sec = time % 60 //설정된 시간이 5초니까 여기만 적용됨.
  gameTimer.innerHTML = `${min}:${sec}`
}

function initGame() {
  zone.innerHTML = '' //play 버튼을 누를 때마다, zone.appenChild로 생성했던 HTML들을 공백처리 함.
  gameScore.innerHTML = CARROT_COUNT
  addItem('carrot', CARROT_COUNT, '/img/carrot.png')
  addItem('bug', BUG_COUNT, '/img/bug.png')
}

function addItem(className, count, imgPath) {
  const x1 = 0
  const y1 = 0
  const x2 = zoneRect.width - CARROT_SIZE
  const y2 = zoneRect.height - CARROT_SIZE
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img')
    item.setAttribute('class', className)
    item.setAttribute('src', imgPath)
    item.style.position = 'absolute'
    const x = randomNumber(x1, x2)
    const y = randomNumber(y1, y2)
    item.style.left = `${x}px`
    item.style.top = `${y}px`
    zone.appendChild(item)
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

// function gamePlay(){
//     initGame();
//     score.innerHTML = 'carrot.count';

// }

//addItem으로 생성된 carrot의 count를 가져와서
//game_score 부분에 innerHTML 또는 textcontent로 넣어준다.

//만일 started가 true라면 play 버튼이 눌렸을 때, 게임을 멈춘다.
