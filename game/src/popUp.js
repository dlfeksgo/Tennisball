'use strict';

export default class popUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.abc();
      this.hide();
    });
  }

  setClickListener(a) {
    this.abc = a;
  }

  showWithText(text) {
    this.popUpText.innerHTML = text;
    this.popUp.classList.remove('pop-up--hide');
  }

  hide() {
    this.popUp.classList.add('pop-up--hide');
  }
}

//이해는 했는데 이걸 다음에 어떤식으로 사용할 수 있을지 생각해보기
//Class는 말 그대로 재사용을 하기 위함이야

//이벤트 리스너에다가 바로 그냥 setClickListener를 넣으면 안되나 ?
