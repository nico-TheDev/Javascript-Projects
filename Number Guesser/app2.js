
let min = 1,
    max = 10,
    winningNum = getRandom(min,max),
    guessesLeft = 3;

// UI

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-value'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI

minNum.textContent = min;
maxNum.textContent = max;
// game wrapper

game.addEventListener('mousedown',e=>{
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',(e)=>{
    let guess = parseInt(guessInput.value);

    // validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`);
    }else{

        if(guess === winningNum){
            //game over won
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'green';
            // setMessage(`${winningNum} is correct!`,'green');
            gameOver(true,`${winningNum} is correct!`);
        }else{
            guessesLeft--;
    
            if(guessesLeft === 0){
                // game over
                // guessInput.disabled = true;
                // guessInput.style.borderColor = 'red';
                // setMessage(`Game over! You LOST! The correct answer is ${winningNum}`,'red');
                gameOver(false,`Game over! You LOST! The correct answer is ${winningNum}`);
    
            }
            else{
                //game continue answer wrong
                setMessage(`${guess} is not correct. ${guessesLeft} guesses left`);
                guessInput.value = '';
                guessInput.style.borderColor = 'red';
               
            }
    
        }
    
    }

    e.preventDefault();
});


// set message

function setMessage(msg,color){
    message.textContent = msg;
    guessInput.style.borderColor = color;
}

function gameOver(won,msg){
    let color;

    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}