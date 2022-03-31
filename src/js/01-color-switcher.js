function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const refs = {
      body : document.querySelector('body'),
      btnStart : document.querySelector('[data-start]'),
      btnStop : document.querySelector('[data-stop]'),
  }


refs.btnStop.disabled = true;

refs.btnStart.addEventListener("click", onStart)

function  onStart () {
    refs.body.style.backgroundColor = getRandomHexColor()
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

refs.btnStop.addEventListener("click", onStop);

function onStop (){
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}