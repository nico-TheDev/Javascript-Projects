const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;


function randomSquare(){
    square.forEach((item)=>{
        item.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * square.length)];
    randomPosition.classList.add('mole'); 

    hitPosition = randomPosition.id;
}

square.forEach(id =>{
        id.addEventListener('mouseup',()=>{
            if(id.id === hitPosition){
                result+=1;
                score.textContent = result;
            }
        })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('Gameover');
    }
}

let timerId = setInterval(countDown,1000);
moveMole();