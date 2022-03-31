import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";


const refs ={
    input : document.querySelector("#datetime-picker"),
    btnStart : document.querySelector('[data-start]'),
        timer : {
            days : document.querySelector('[data-days]'),
            hours : document.querySelector('[data-hours]'),
            minutes : document.querySelector('[data-minutes]'),
            seconds : document.querySelector('[data-seconds]')
        }
}

refs.btnStart.disabled = true;

let ms = 0;
let timerTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(options.defaultDate > selectedDates[0]){
            Notify.failure("Please choose a date in the future");
            refs.btnStart.disabled = true;
        }
        else{
            timerTime = selectedDates[0].getTime()
            refs.btnStart.disabled = false;
            convertMs(ms)}
    },
  };
 
flatpickr(refs.input, options);


refs.btnStart.addEventListener('click', OnTimer);

function OnTimer(){
        if (this.isActive){
            return
        }
        this.isActive = true;

    const timerId = setInterval(() => {
        const date = new Date();
        ms = timerTime - date;
        interfaceOutput()

}, 1000)

function interfaceOutput(){
    const {days, hours, minutes, seconds} = convertMs(ms)
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
            clearInterval(timerId);
    }
        refs.timer.days.textContent = addLeadingZero(days);
        refs.timer.hours.textContent = addLeadingZero(hours);
        refs.timer.minutes.textContent = addLeadingZero(minutes);
        refs.timer.seconds.textContent = addLeadingZero(seconds);
}
}

function addLeadingZero(value){
    return String(value).padStart(2, 0);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
  }
