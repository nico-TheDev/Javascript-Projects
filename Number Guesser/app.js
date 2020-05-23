const game = document.getElementById('game');
const guess = document.getElementById('guess-input');
const message = document.querySelector('.message');
const minimum = document.querySelector('.min-num');
const maximum = document.querySelector('.max-num');

game.addEventListener('submit',startGuess);

let theNumber,maxNum,guessCount;

maxNum = 10;
theNumber = Math.floor((Math.random() * maxNum) + 1);
guessCount = 3;
console.log(theNumber);

maximum.textContent = maxNum;


function startGuess(e){
    //create a random number to guess
    //create a number of guesses
    //check if the guess is correct
    let theGuess = parseInt(guess.value);

    if(theGuess === theNumber && guessCount !== 0 ){
        addMessage('You got it right! The number is ',theNumber,'green');
        guessCount = 3;
        theNumber = Math.floor((Math.random() * maxNum) + 1);
        guess.setAttribute('disabled',true);
        
        setTimeout(()=>{
            location.reload();
        },2000);
    }
    else{        
        guessCount--;

        if (guessCount === 0){
            addMessage('You Lost. The number is',theNumber,'red');
            guess.setAttribute('disabled',true);
            setTimeout(()=>{
                location.reload();
            },2000);
        }
        else if(theGuess > theNumber){
           addMessage('Your guest is bigger. Chances left:',guessCount,'red');
        }
        else if(theGuess < theNumber){
            addMessage('Your guest is smaller. Chances left:',guessCount,'red');
        }

   


    }
    //then reset the game
    // if wrong 
    // subtract to guess count then continue the game until it hits zero

    guess.value = '';
    e.preventDefault();
}


function setStartingValues(num,count,max){

    num = Math.floor((Math.random() * maxNum) + 1);
    
    return [num,count,max];
}


function addMessage(text,count,color){

    message.appendChild(document.createTextNode((`${text} ${count}`)));

    guess.style.borderColor = color;
    setTimeout(()=>{
        message.firstChild.remove();
        guess.style.borderColor = 'gray';
    },1500);
}