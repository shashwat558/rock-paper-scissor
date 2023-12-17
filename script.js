let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let GameWinner = '';




function getComputerChoice() {
    moveArray = ["Rock", "Paper", "Scissor"];
    let randomMove = Math.floor(Math.random()* moveArray.length);
    return moveArray[randomMove];

}
function playRound(playerSelection, computerSelection) {
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        roundWinner = "tie";
    }
    if((playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER")) {
        playerScore++
        roundWinner = "Player";
    }
    if((playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "ROCK")){
        computerScore++
        roundWinner = "Computer";
    }
    let startNew;

    if((computerScore === 5) || (playerScore === 5)){
        endGame();
        startNew = () => {
            playerScore = 0;
            computerScore = 0;
            console.log("Starting a new Game")
        }
    }


   
}

function endGame(){
    console.log("Game Over")
    console.log(`Your Score: ${playerScore}`)
    console.log(`Computer's Score: ${computerScore}`)
}














//playing with the computer
// so the computer should randomly return from rock, paper ad scissor
// make a array of all three moves
// and then use math.random and math.floor to get random index of array