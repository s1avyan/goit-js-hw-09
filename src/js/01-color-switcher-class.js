const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyPage: document.querySelector('body'),
};

class ChangeBodyColor {
  constructor({ onTick }) {
    this.changeBodyColorTimer = null;
    this.starting = refs.startBtn;
    this.stoping = refs.stopBtn;
    this.onTick = onTick;

    this.init();
  }
  init() {
    this.stoping.setAttribute('disabled', 'true');
  }
  start() {
    this.changeBodyColorTimer = setInterval(this.onTick, 500);
    this.starting.setAttribute('disabled', 'true');
    this.stoping.removeAttribute('disabled');
  }
  stop() {
    clearInterval(this.changeBodyColorTimer);
    this.starting.removeAttribute('disabled');
    this.stoping.setAttribute('disabled', 'true');
  }
}
const changeBodyColor = new ChangeBodyColor({
  onTick: hendlerChangeBodyColor,
});
refs.startBtn.addEventListener(
  'click',
  changeBodyColor.start.bind(changeBodyColor)
);
refs.stopBtn.addEventListener(
  'click',
  changeBodyColor.stop.bind(changeBodyColor)
);

function hendlerChangeBodyColor() {
  refs.bodyPage.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
