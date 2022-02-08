'use strict';

import popUp from './popUp.js';
import Game from './game.js';

const gameFinishBanner = new popUp();
gameFinishBanner.setClickListener(() => {
  game.start();
});

const game = new Game(3, 2, 2);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case '안할래':
      message = 'Replay❓';
      break;
    case 'ㅊㅋ':
      message = 'ㅊㅋ ⭐️';
      break;
    case 'ㅜㅜ':
      message = 'ㅠㅠ 😭';
      break;
    default:
      throw new Error('Error!');
  }
  gameFinishBanner.showWithText(message);
});
