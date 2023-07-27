
const winningScore = 5;
let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll('button'));
const scorePlayer = document.querySelector('.player');
const scoreComputer = document.querySelector('.computer');
buttons.forEach(button => button.addEventListener('click', playRound));

const getUserInput = (e) => {
    if(!e) return;
    const choice = e.target.id;
    console.log("Player Chose: ", choice); // Delete
    return choice;
}

function playRound(event) {

    const userSelect = getUserInput(event);
    const computerSelect = getComputerInput();
    const result = compareSelection(userSelect, computerSelect); 

    tallyScore(result);
    console.log("Player Score: ", playerScore); // Delete 
    console.log("Computer Score: ", computerScore); // Delete

    if(checkForWinCondition(winningScore, playerScore, computerScore)){
        endGame();
        console.log("Game Over");
        return;
    }

    return; 
}

function getComputerInput(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const computerChoice = randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
    console.log("Computer Chose: ", computerChoice); // Delete
    return computerChoice;   
}

function compareSelection( playerSelection , computerSelection) {
    let result; 
 
    if (playerSelection === computerSelection){
        result = 3; //Tie
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = 1; // player wins
    }   else {
        result = 0; // player loses
    }
        return result; 
}

function tallyScore (roundResult) {
    if (roundResult === 1) {
        playerScore++;
    } else if(roundResult === 0){
        computerScore++
    }
}

function checkForWinCondition(winningScore, playerScore, computerScore) {
    if (winningScore === playerScore || winningScore === computerScore){
        return true; 
    }
    else{
        return false;
    };
}