const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyPage: document.querySelector('body'),
};
let changeBodyColorTimer = null;

refs.stopBtn.setAttribute('disabled', 'true');

refs.startBtn.addEventListener('click', () => {
  startChengeBodyColor();
});
refs.stopBtn.addEventListener('click', () => {
  stopChengeBodyColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function hendlerChangeBodyColor() {
  refs.bodyPage.style.background = getRandomHexColor();
}

function startChengeBodyColor() {
  changeBodyColorTimer = setInterval(hendlerChangeBodyColor, 500);
  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');
}
function stopChengeBodyColor() {
  clearInterval(changeBodyColorTimer);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'true');
}

function addBodyStyle() {
  refs.bodyPage.style.cssText = `
  `;
}
