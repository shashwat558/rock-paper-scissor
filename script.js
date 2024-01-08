
const moveArray = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
let roundPlayed = 0;
let playerScore = 0;
let computerScore = 0;

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

    if(result == "YOU WIN!"){
        playerScore++
    }else{
        computerScore++
    }
   }
 
   playerDisplay.textContent = `PLAYER: ${playerSelection}`     
   computerDisplay.textContent = `COMPUTER: ${computerSelection}`  
   resultDisplay.textContent = result; 
   scoreDisplay.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;  
   roundPlayed++

   if(roundPlayed == 6){
    
    alert(`Game Over! Final Scores: Player - ${playerScore}, Computer - ${computerScore}`)
    endGame()
   }
}

function endGame(){
     playerScore = 0;
     computerScore = 0;
     roundPlayed = 0;
   
}
