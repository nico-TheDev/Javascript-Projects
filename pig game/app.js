let random,dice,hold,roll,newGame,scores,round,activePlayer,player1RoundScore,player2RoundScore,player1Total,player2Total;
// playerscores 
//panel
//indicator
//winner indicator


// Grabbing the element from the DOM

player1RoundScore = document.querySelector('.player-1__roundScore');
player1Total = document.querySelector('.player-1__totalScore');
player2RoundScore = document.querySelector('.player-2__roundScore');
player2Total = document.querySelector('.player-2__totalScore');
dice = document.querySelector('.dice');
hold = document.querySelector('.hold');
roll = document.querySelector('.roll');
newGame = document.querySelector('.new');

// changePlayer
function changePlayer(){
    document.querySelector(`.player-${activePlayer}`).classList.remove('current');
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    round = 0;
    player1RoundScore.textContent = 0;
    player2RoundScore.textContent = 0;
}

// Score Holders

let isPlaying;



function reset(){
    isPlaying = true;
        // Reset the score
        scores = [0,0];
        round = 0;
    
        activePlayer = 1;
        document.querySelector('.player-1').classList.remove('winner');
        document.querySelector('.player-2').classList.remove('winner');
        document.querySelector('.player-1').classList.remove('current');
        document.querySelector('.player-2').classList.remove('current');
        document.querySelector('.ongoing').style.display = 'block';
        player1RoundScore.textContent = '0';
        player1Total.textContent = '0';
        player2Total.textContent = '0';
        player2RoundScore.textContent = '0';
        dice.style.display = 'block';
}


roll.addEventListener('click',function(){
    if(isPlaying){
        random = Math.floor((Math.random() * 6) + 1); // rolls random
        dice.src = `/img/dice${random}.PNG`;
    
        document.querySelector(`.player-${activePlayer}`).classList.add('current');
        console.log(round);
        if (random !== 1){
            round +=  random;
            document.querySelector(`.player-${activePlayer}__roundScore`).textContent = round;
        }
        else{
            alert('🤡YOU🤡GOT🤡ONE');
            changePlayer();
        }
    }
       
});

hold.addEventListener('click',function(){
    if (isPlaying){
        scores[activePlayer - 1]+=round;
        document.querySelector(`.player-${activePlayer}__totalScore`).textContent = scores[activePlayer - 1];
    
        if (scores[activePlayer - 1] >= 10){
            document.querySelector(`.player-${activePlayer}`).classList.add('winner');
            scores[0] = 0;
            scores[1] = 0;
            round = 0;
            dice.style.display = 'none';
            document.querySelector('.ongoing').style.display = 'none';
            isPlaying = false;

        }
        else{
            changePlayer();
        }
    }
    
});


newGame.addEventListener('click',reset);




//reset the scores
// generate a random number
//roll the dice
// change the img of the dice based on the random number
// add the random number to the current player round score

// if dice is 1 round score will be zero

// else keep the player rolling

// when hold is clicked add the round score to the total score of the current player


