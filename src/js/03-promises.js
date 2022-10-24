import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delay: document.querySelector('input'),
};

refs.formEl.addEventListener('submit', () => {
  onSubmitForm();
});

function onSubmitForm() {
  event.preventDefault();
  let firstDelay = +refs.formEl.delay.value;
  const step = +refs.formEl.step.value;
  const amount = +refs.formEl.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
