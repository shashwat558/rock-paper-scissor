
const moveArray = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function getComputerChoice(){
    randomMove = moveArray[Math.floor(Math.random() * moveArray.length)]
    return randomMove;
}

let result = "";
function playRound(playerSelection){
   const computerSelection = getComputerChoice();  
   if(playerSelection === computerSelection){
       result = "IT'S A TIE";
   }
   else{
    switch(playerSelection){
        case "rock":
            result = (computerSelection === "scissors") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "paper":
            result = (computerSelection === "rock") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "scissors":
            result = (computerSelection === "paper") ? "YOU WIN!" : "YOU LOSE";
            break;

    }
   }
 
   playerDisplay.textContent = `PLAYER: ${playerSelection}`     
   computerDisplay.textContent = `COMPUTER: ${computerSelection}`  
   resultDisplay.textContent = result;   
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        
    }
}