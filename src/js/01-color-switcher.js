function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonsEl = document.querySelectorAll('button');
const bodyColor = document.body.style;

buttonsEl[0].addEventListener('click', onButtonStartClick);
buttonsEl[1].addEventListener('click', onButtonStopClick);

function onButtonStartClick() {
  setColor = setInterval(() => {
    bodyColor.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonsEl[0].removeEventListener('click', onButtonStartClick);
}

function onButtonStopClick() {
    clearInterval(setColor);
    buttonsEl[0].addEventListener('click', onButtonStartClick);
}
