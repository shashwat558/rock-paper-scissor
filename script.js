let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let GameWinner = '';




function getComputerChoice(){
    const moveArray = ["ROCK", "PAPER", "SCISSOR"]
    randomMove = moveArray[Math.floor(Math.random() * moveArray.length)];
    return randomMove;
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "Tie";
    }
    if((playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
       (playerChoice === "PAPER" && computerChoice === "ROCK") ||
       (playerChoice === "SCISSOR" && computerChoice === "PAPER")  
    ){
        return "Player";
    }else {
        return "Computer";
    }
}

function playRound(playerChoice, computerChoice){

    const result = checkWinner(playerChoice, computerChoice);
    if(result == "Tie"){
        return "It's a tie!";
    } else if(result == "Player"){
        return `you win! ${playerChoice} beats ${computerChoice}`;
    }else {
        return `you Lost! ${computerChoice} beats ${playerChoice}`;
    }
}

function getPlayerChoice(){
    const moveArray = ["ROCK", "PAPER", "SCISSOR"]
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Enter a Valid choice from ROCK, PAPER and SCISSOR").toUpperCase()
        if(choice == null){
            continue;
        }
        if(moveArray.includes(choice)){
            validatedInput = true;
            return choice;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for(let i = 0; i < 5; i++){
        const playerChoice = getPlayerChoice()
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice))
        console.log('---------------');
        if(checkWinner(playerChoice, computerChoice) === "Player"){
            scorePlayer++
        }
        else if(checkWinner(playerChoice, computerChoice)=== "Computer"){
            scoreComputer++
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("You won the game")
    }
    else if(scoreComputer > scorePlayer){
        console.log("You lose")
    }
    else {
        console.log("It's a tie")
    }
}
game()








//playing with the computer
// so the computer should randomly return from rock, paper ad scissor
// make a array of all three moves
// and then use math.random and math.floor to get random index of array