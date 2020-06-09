window.addEventListener('DOMContentLoaded',updateTime);

function updateTime(){
    const hourLabel = document.querySelector('.hour');
    const minutesLabel = document.querySelector('.minutes');
    const secondsLabel = document.querySelector('.seconds');

    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hour > 12 ? hour = hour - 12 : hour;

    hour < 10 ? hour = `0${hour}` : hour;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;

    hourLabel.textContent = hour;
    minutesLabel.textContent = minutes;
    secondsLabel.textContent = seconds;


}

setInterval(updateTime,1000);