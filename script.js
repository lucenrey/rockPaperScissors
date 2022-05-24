let computerScore = 0;
let playerScore = 0;
game();

function game() {

    for (let i= 1; i <= 5; i++){

        let playerSelection = prompt("Input your hand! (rock, paper, scissors)").toLowerCase()

        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                playRound(computerPlay(), playerSelection)
            } else {
                alert("Invalid input.")
            }
    }
}

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
    let youWin =`You Win! ${playerSelection} beats ${computerSelection}`;
    let youLose = `You Lose! ${computerSelection} beats ${playerSelection}`

    if (playerSelection === computerSelection){
        console.log("Its a draw");
    } else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        console.log(youWin);
        playerScore += 1;
    } else {
        console.log(youLose);
        computerScore += 1;
    }

}

if (computerScore > playerScore) {
    console.log(`Computer win! with a score of ${computerScore} to ${playerScore}`);
} else {
    console.log(`You win! with a score of ${playerScore} to ${computerScore}`);
}