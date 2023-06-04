function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonsEl = document.querySelectorAll('button');
const bodyColor = document.body.style;

buttonsEl[0].addEventListener('click', onButtonStartClick);
buttonsEl[1].addEventListener('click', onButtonStopClick);

buttonsEl[1].disabled = true;

function onButtonStartClick() {
  buttonsEl[0].disabled = true;
  buttonsEl[1].disabled = false;

  setColor = setInterval(() => {
    bodyColor.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonsEl[0].removeEventListener('click', onButtonStartClick);
}

function onButtonStopClick() {
  buttonsEl[0].disabled = false;
  buttonsEl[1].disabled = true;

  clearInterval(setColor);
  buttonsEl[0].addEventListener('click', onButtonStartClick);
}
