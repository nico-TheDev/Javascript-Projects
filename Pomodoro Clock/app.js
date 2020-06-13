// class Timer {
//     constructor() {
//         this.timeMs = 1500000; //default
//         this.buttons = document.querySelectorAll(".app__btn");
//         this.startBtn = document.querySelector(".app__start");

//     }

//     getTime(current) {
//         this.timeMs = parseInt(current.dataset.value);
//         console.log(this.timeMs);
//         timer.convertMs();
//     }

//     convertMs() {
//         this.seconds = Math.floor(this.timeMs / 1000); // time in seconds
//         this.minutes = Math.floor(this.seconds / 60);
//         this.minutes %= 60;
//         this.seconds %= 60;
//     }

//     startTimer() {
//         this.timeMs -= 1000;
//         timer.convertMs();
//         console.log(this.minutes);
//     }
// }

// const timer = new Timer();

// console.log(timer.minutes);
// timer.buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         timer.getTime(btn);
//     });
// });

// timer.startBtn.addEventListener("click", timer.startTimer);

const buttons = document.querySelectorAll(".app__btn");
const startBtn = document.querySelector(".app__start");
const pauseBtn = document.querySelector(".app__pause");
const minutesLabel = document.querySelector(".minutes");
const secondsLabel = document.querySelector(".seconds");
let timeMs = 1500000; //default
let minutes, seconds;
let running = false;
let startRunning;
function getTime() {
    timeMs = parseInt(this.dataset.value);
    console.log(timeMs);
    convertMs();
    displayTime();
}

function convertMs() {
    seconds = Math.floor(timeMs / 1000); // time in seconds
    minutes = Math.floor(seconds / 60);
    minutes %= 60;
    seconds %= 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
    timeMs -= 1000;
    convertMs();
    // console.log(minutes,seconds);
    displayTime();
}

function displayTime() {
    minutesLabel.textContent = minutes;
    secondsLabel.textContent = seconds;
}

function stopTime(){
    clearInterval(startRunning);
}

buttons.forEach((btn) => {
    btn.addEventListener("click", getTime);
});

startBtn.addEventListener("click", () => {
    running = true;
    startBtn.disabled = true;
    startRunning = setInterval(startTimer, 1000);
});

pauseBtn.addEventListener('click',function(){
    running = false;
    startBtn.disabled = false;
    stopTime();
});

