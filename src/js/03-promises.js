import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
});

const itemsEl = document.querySelectorAll('input');
const submitButton = document.querySelector('button');

let counter = 1;

const amount = itemsEl[2];
const delay = itemsEl[0];
const newDelay = itemsEl[1];

submitButton.addEventListener('click', createPromise);

function createPromise(evt) {
  evt.preventDefault();

  submitButton.removeEventListener('click', createPromise);

  let convertIntoNumber = Number(delay.value);
  let convertIntoNewNumber = Number(newDelay.value);

  setTimeout(function time() {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      Notify.success(
        `✅ Fulfilled promise ${counter} in ${convertIntoNumber}ms`
      );
      counter += 1;
      convertIntoNumber += convertIntoNewNumber;
    } else {
      Notify.failure(
        `❌ Rejected promise ${counter} in ${convertIntoNumber}ms`
      );
      counter += 1;
      convertIntoNumber += convertIntoNewNumber;
    }
    if (counter <= Number(amount.value)) {
      setTimeout(time, convertIntoNumber);
    }
    if (counter > Number(amount.value)) {
      counter = 1;
      return submitButton.addEventListener('click', createPromise);
    }
  }, convertIntoNumber);
}
