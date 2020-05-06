let tile = document.querySelectorAll('.tile');
let activePlayer = 1;
console.log(tile);
let player1 = document.querySelector('.score1');
let player2 = document.querySelector('.score2');
let sign = [0,'❌','⭕'];
let turn = 1;
let newGameBtn = document.querySelector('.new');
tile.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        console.log(e.target,index);
        if (activePlayer === 1){
            turn++;
            console.log(turn);

            e.target.textContent = sign[1];
            e.target.disabled = true;
            checkIfWin(1);

        }
        else{
            turn++;
            console.log(turn);
            e.target.textContent = sign[2];
            e.target.disabled = true;
            checkIfWin(2);
        }


        // check if a player won

        activePlayer = activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    });
});


//WIN check function

function checkIfWin(currentPlayer){
    if (
(tile[0].textContent === sign[currentPlayer] && tile[1].textContent === sign[currentPlayer] && tile[2].textContent === sign[currentPlayer]) ||
(tile[3].textContent === sign[currentPlayer] && tile[4].textContent === sign[currentPlayer] && tile[5].textContent === sign[currentPlayer]) ||
(tile[6].textContent === sign[currentPlayer] && tile[7].textContent === sign[currentPlayer] && tile[8].textContent === sign[currentPlayer]) ||
(tile[0].textContent === sign[currentPlayer] && tile[3].textContent === sign[currentPlayer] && tile[6].textContent === sign[currentPlayer]) ||
(tile[1].textContent === sign[currentPlayer] && tile[4].textContent === sign[currentPlayer] && tile[7].textContent === sign[currentPlayer]) ||
(tile[2].textContent === sign[currentPlayer] && tile[5].textContent === sign[currentPlayer] && tile[8].textContent === sign[currentPlayer]) ||
(tile[0].textContent === sign[currentPlayer] && tile[4].textContent === sign[currentPlayer] && tile[8].textContent === sign[currentPlayer]) ||
(tile[6].textContent === sign[currentPlayer] && tile[4].textContent === sign[currentPlayer] && tile[2].textContent === sign[currentPlayer])
    )
    {
        console.log('WINNER');
        document.querySelector('.popup__title').textContent = 'Player ' + currentPlayer + ' WON';
        document.querySelector('.popup').classList.add('open');
    }else{
        if(turn === 10){
            document.querySelector('.popup__title').textContent = 'DRAW';
            document.querySelector('.popup').classList.add('open');
        }
  
    }
  
}

newGameBtn.addEventListener('click',()=>{
    tile.forEach((currentTile)=>{
        currentTile.disabled = false;
        currentTile.textContent = '';
        document.querySelector('.popup').classList.remove('open');
        turn = 1;
    });
})