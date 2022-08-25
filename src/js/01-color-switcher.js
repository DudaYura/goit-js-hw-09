const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let colorIntervalId = null;

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick(evt) {
  colorIntervalId = setInterval(changeBgColor, 1000);
  evt.target.disabled = true;
  stopBtnRef.disabled = false;
};

function onStopBtnClick(evt) {
  clearInterval(colorIntervalId);
  evt.target.disabled = true;
  startBtnRef.disabled = false;
};

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
