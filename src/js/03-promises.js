import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget;
  const delayNumber = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountNumber = Number(amount.value);

  for (let i = 0; i < amountNumber; i += 1) {
    createPromise(i + 1, delayNumber + i * stepNumber)
      .then(onResolve)
      .catch(onReject);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onResolve({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onReject({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
