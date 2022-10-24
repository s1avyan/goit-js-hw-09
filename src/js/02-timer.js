import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dataSet: document.querySelector('#datetime-picker'),
  starBtn: document.querySelector('[data-start]'),
  textDays: document.querySelector('[data-days]'),
  textHours: document.querySelector('[data-hours]'),
  textMinutes: document.querySelector('[data-minutes]'),
  textSeconds: document.querySelector('[data-seconds]'),
};
styleAdd();
refs.starBtn.setAttribute('disabled', true);
let timeOutId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deadLine = selectedDates[0];
    timer(deadLine);
  },
};

flatpickr('input#datetime-picker', options);

function timer(deadLine) {
  if (deadLine < options.defaultDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  refs.starBtn.removeAttribute('disabled');
  refs.starBtn.addEventListener('click', onClickStartBtn);

  function onClickStartBtn() {
    Notiflix.Notify.success('Сountdown has started');
    timeOutId = setInterval(timeCounter, 1000);
  }

  function timeCounter() {
    const endTime =
      deadLine - Date.now(); /* вопрос дейтнау без вызова функции ломает */
    timerInner(endTime);
  }
}

function timerInner(endTime) {
  if (!endTime) {
    return;
  }
  updateInterfaсe(endTime);

  if (endTime < 1000) {
    clearInterval(timeOutId);
    refs.starBtn.setAttribute('disabled', true);
    Notiflix.Notify.success('Time is over');
    refs.textSeconds.textContent = '00';
    return;
  }
}
function updateInterfaсe(endTime) {
  const endTimeFunc = convertMs(endTime);

  const {
    days = '00',
    hours = '00',
    minutes = '00',
    seconds = '00',
  } = endTimeFunc;
  refs.textDays.textContent = days;
  refs.textHours.textContent = hours;
  refs.textMinutes.textContent = minutes;
  refs.textSeconds.textContent = seconds;
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
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
function styleAdd() {
  const timerDiv = document.querySelector('.timer');
  timerDiv.style.display = 'flex';
  timerDiv.style.alineItem = 'flex';

  const fieldDiv = document.querySelectorAll('.field');
  fieldDiv.forEach(field => {
    field.style.display = 'flex';
    field.style.flexDirection = 'column';
    field.style.alignItems = 'center';
    field.style.margin = '10px';
  });
}
