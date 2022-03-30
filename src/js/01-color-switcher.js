function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const refs = {
      body : document.querySelector('body'),
      btnStart : document.querySelector('[data-start]'),
      btnStop : document.querySelector('[data-stop]'),
  }

refs.btnStart.addEventListener("click", onStart)

function  onStart () {
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    refs.btnStart.disabled = true;
}

refs.btnStop.addEventListener("click", ofStart);

function ofStart (){
    clearInterval(timerId);
    refs.btnStart.disabled = false;
}