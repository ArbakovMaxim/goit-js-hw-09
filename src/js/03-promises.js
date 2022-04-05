import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    } else {
      reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  })
}

  const form = document.querySelector(".form");
  const delayEl = form.delay;
  const stepEl = form.step;
  const amountEl = form.amount;

  form.addEventListener("submit", stop)

  function stop (event){
    event.preventDefault();
    for (let i = 0; i < amountEl.value; i += 1) {
      const time = Number(delayEl.value) + Number((i * stepEl.value));
      const position = i + 1;
      createPromise(position, time)
      .then(resolve => {
        resolve;
      })
      .catch(reject => {
        reject;
      });
    } 
  }
