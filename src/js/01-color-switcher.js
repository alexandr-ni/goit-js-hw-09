function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonsEl = document.querySelectorAll('button');
const bodyColor = document.body.style;
let setColor;

buttonsEl[1].disabled = true;

buttonsEl[0].addEventListener('click', onButtonStartClick);
buttonsEl[1].addEventListener('click', onButtonStopClick);

function onButtonStartClick() {
  buttonsEl[0].disabled = true;
  buttonsEl[1].disabled = false;

  setColor = setInterval(() => {
    bodyColor.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onButtonStopClick() {
  buttonsEl[0].disabled = false;
  buttonsEl[1].disabled = true;

  clearInterval(setColor);
}
