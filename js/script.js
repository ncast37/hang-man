
const winningScore = 5;
let playerScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector('.player');
const scoreComputer = document.querySelector('.computer');
const scoreBoxes = document.querySelectorAll('.score');
const textBox = document.querySelector('#textbox');
const gameButtons = Array.from(document.querySelectorAll('.btn-game'));
const resultWindow = document.createElement('div');
gameButtons.forEach(button => button.addEventListener('click', playRound));




// GAME LOGIC
const getUserInput = (e) => {
    if(!e) return;
    const choice = e.target.id;
    return choice;
}

function playRound(event) {

    const userSelect = getUserInput(event);
    const computerSelect = getComputerInput();
    const result = compareSelection(userSelect, computerSelect); 
    tallyScore(result);
    updateScoreBox();

    if(checkForWinCondition(winningScore, playerScore, computerScore)){
        endGame();
        console.log("Game Over");
        return;
    }

    return; 
}

function updateScoreBox(){
    scorePlayer.textContent = `Player Score: ${playerScore}`;
    scoreComputer.textContent = `Computer Score: ${computerScore}`;
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

function endGame(){
    hideGameButtons();
    insertResultContainer();
    return;
}

function insertResultContainer(){
    resultWindow.style.height = '200px';
    resultWindow.style.width = '200px';
    resultWindow.textContent = "You Lose!"
    resultWindow.style.backgroundColor = 'red';
    resultWindow.classList.add('results');
    
    if (playerScore > computerScore){
        resultWindow.textContent = "You Win!"
        resultWindow.style.backgroundColor = 'green';
    }

    //remove original textbox and replace with the result window
    const flexContainer = document.querySelector('.flex-container');
    flexContainer.insertBefore(resultWindow, flexContainer.firstChild);
    flexContainer.removeChild(textBox);
    return;
}

function hideGameButtons(){
    gameButtons.forEach(button => button.classList.add('hide'));
}