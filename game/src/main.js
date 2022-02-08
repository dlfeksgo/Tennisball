'use strict';

import popUp from './popUp.js';
import Game from './game.js';
import GameBuiler from './game.js';

const gameFinishBanner = new popUp();
gameFinishBanner.setClickListener(() => {
  game.start();
});

const game = new GameBuiler()
  .withGameDuration(10)
  .withCarrotCount(5)
  .withBugCount(5)
  .build();

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
