import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const STORAGE_KEY = 'feedback-form-state';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timeLeft = selectedDates[0] - options.defaultDate;
    localStorage.setItem(STORAGE_KEY, timeLeft);

    const todayDate = options.defaultDate.toLocaleString();

    if (selectedDates[0].toLocaleString() <= todayDate) {
      Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
startButton.disabled = true;

const time = document.querySelectorAll('.value');
const refs = {
  days: time[0],
  hours: time[1],
  minutes: time[2],
  seconds: time[3],
};

flatpickr(dateInput, options);

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  dateInput.disabled = true;

  timer.start();
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const timer = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      if (localStorage.getItem(STORAGE_KEY) < 1000) {
        clearInterval(this.intervalId);
        startButton.disabled = false;
        dateInput.disabled = false;
        return;
      }
      const deltaTime = localStorage.getItem(STORAGE_KEY) - 1000;
      localStorage.setItem(STORAGE_KEY, deltaTime);
      const convertTime = convertMs(deltaTime);

      updateClockFace(convertTime);
    }, 1000);
  },
};

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
