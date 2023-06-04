import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
});

const itemsEl = document.querySelectorAll('input');
const formSubmit = document.querySelector('.form');

const amount = itemsEl[2];
const delayEl = itemsEl[0];
const stepEl = itemsEl[1];
let position = 0;

formSubmit.addEventListener('submit', stopDefAction);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function stopDefAction(evt) {
  evt.preventDefault();

  let delay = Number(delayEl.value);
  const step = Number(stepEl.value);

  for (let i = 1; i <= amount.value; i += 1) {
    if (step < 0 || delay < 0 || amount.value <= 0) {
      position = 1;
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      return;
    }
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
    position += 1;
  }
}
