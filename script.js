let playerSelection = prompt("Input your hand! (rock, paper, scissors)").toLowerCase()

if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    playRound(computerPlay(), playerSelection)
} else {
    alert("Invalid input.")
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
    let youWin =`You win ${playerSelection} beats ${computerSelection}`;
    let youLose = `You lose ${computerSelection} beats ${playerSelection}`

    if (playerSelection === computerSelection){
        console.log("Its a draw");
    } else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        console.log(youWin);
    } else {
        console.log(youLose);
    }

}