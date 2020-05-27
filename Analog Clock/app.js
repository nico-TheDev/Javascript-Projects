const secondsHand = document.querySelector('.second-hand'),
      hourHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.minute-hand');
      const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds() + 1;
        hours > 12 ? hours = hours - 12 : hours;
        let hourMove = (30 * hours) - 90;
        let minuteMove = (6 * minutes) - 90;
        let secondMove = (6 * seconds) - 90;

function moveHands(){
    secondMove+=6;
    hourMove > 360 ? hoursMove+=30 :hours;
    minuteMove > 360 ? minuteMove += 6 : minuteMove;
    //rotate the clock based on the time
    //hours 
    // 360 / 12 = 30 per 1 unit
    //minutes and seconds => 360 / 60 = 6 degress per unit
  
    hourHand.style.transform = `translateY(-50%) rotate(${hourMove}deg)`; 
    minuteHand.style.transform = `translateY(-50%) rotate(${minuteMove}deg)`; 
    secondsHand.style.transform = `translateY(-50%) rotate(${secondMove}deg)`; 
    
}

setInterval(moveHands,1000);