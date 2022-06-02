let computerScore = 0;
let playerScore = 0;

let playerRock = document.querySelector(".playerRock");
let playerPaper = document.querySelector(".playerPaper");
let playerScissors = document.querySelector(".playerScissors");
let gameResultBoard = document.querySelector("#game-result-board");

playerRock.addEventListener("click", () => playRound(computerPlay(), "rock"));
playerPaper.addEventListener("click", () => playRound(computerPlay(), "paper"));
playerScissors.addEventListener("click", () => playRound(computerPlay(), "scissors"));


function computerPlay(){
    let rand = Math.floor(Math.random()*3);

    if (rand === 0) {
        return 'rock';
    } else if (rand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    let resultEl = document.createElement("h1");
    let playerPoints = document.querySelector(`.play-${playerScore + 1}`).classList;
    let comPoints = document.querySelector(`.com-${computerScore + 1}`).classList;
    let youWin =`You Win! ${playerSelection} beats ${computerSelection}`;
    let youLose = `You Lose! ${computerSelection} beats ${playerSelection}`

    if (playerSelection === computerSelection){
        resultEl.innerText = "It's a draw";
        gameResultBoard.replaceChild(resultEl, gameResultBoard.childNodes[0])

    } else if((playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')){

        console.log(typeof(myId))


        resultEl.innerText = youWin;
        gameResultBoard.replaceChild(resultEl, gameResultBoard.childNodes[0])
        playerScore += 1;
        playerPoints.add("point")

        

    } else {
        resultEl.innerText = youLose;
        gameResultBoard.replaceChild(resultEl, gameResultBoard.childNodes[0])
        computerScore += 1;
        comPoints.add("point")
    }

    if (computerScore === 5){
        reset("Computer wins the Game!");

    } else if (playerScore === 5) {
        reset("Player wins the Game!");
    }
}


function reset(message){
    let resultEl = document.createElement("h1");
    resultEl.innerText = message;
    gameResultBoard.replaceChild(resultEl, gameResultBoard.childNodes[0])
    computerScore = 0;
    playerScore = 0;

    for(i = 5; i >= 1; i--){
        let comlist =  document.querySelector(`.play-${i}`).classList;
        let playlist =  document.querySelector(`.com-${i}`).classList;

        comlist.remove("point");
        playlist.remove("point")
    }
}

// if (computerScore > playerScore) {
//     console.log(`Computer win! with a score of ${computerScore} to ${playerScore}`);
// } else {
//     console.log(`You win! with a score of ${playerScore} to ${computerScore}`);
// }