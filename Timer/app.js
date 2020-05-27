
function shuffleImage(){
    let images = document.querySelectorAll('.gallery__img');

    const randomized = [];
    let getRandom;
    
    console.log(randomized);
    while(randomized.length != 12){
        getRandom = Math.floor(Math.random() * 12);
    
        if(!randomized.includes(getRandom)){
            randomized.push(getRandom);
        }
    
        if(randomized.length === 12){
            break;
        }
    
    }
    console.log(images);
    for(let i = 0; i < randomized.length; i++){
        images[i].src = `./img/${randomized[i]}.jpg`
    }
    
}


function countdown(){
    shuffleImage();

    let daysLabel =document.querySelector('.days').firstChild;
    let hoursLabel =document.querySelector('.hours').firstChild;
    let minutesLabel =document.querySelector('.minutes').firstChild;
    let secondsLabel =document.querySelector('.seconds').firstChild;
    


    const timeNow = new Date();
    // const releaseDate = new Date(2020,5,19,12,0,0);
    const releaseDate = new Date('June 19, 2020 24:00:00 GMT-07:00');

    // console.log(timeNow);
    // console.log(releaseDate);

    //get current time
    const timeNowMS = timeNow.getTime();
    const releaseDateMS = releaseDate.getTime();

    // console.log(timeNowMS);
    // console.log(releaseDateMS);
    // get target time
    //subrtract the target to current
    const remainingTime = releaseDateMS - timeNowMS;
    //convert the result to hours
   if (remainingTime === 0){

    daysLabel.textContent= `00`;
    hoursLabel.textContent= `00`;
    minutesLabel.textContent= `00`;
    secondsLabel.textContent= `00`;

   }else{
    let seconds = Math.floor(remainingTime/1000); 
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours/24);

    // console.log(`Days:${days}`)
    // console.log(`Hours:${hours}`)
    // console.log(`Minutes:${minutes}`)
    // console.log(`Seconds:${seconds}`)

    hours = hours % 24;
    minutes %= 60;
    seconds %= 60;
    
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;


    daysLabel.textContent= days;
    hoursLabel.textContent= hours;
    minutesLabel.textContent= minutes;
    secondsLabel.textContent= seconds;
   }
}




setInterval(countdown,1000);
