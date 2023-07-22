
playGame();


//  Create a function to play 5 rounds of hangman and keep score

function playGame() {

    // Initialize scores to zero;
    let playerScore = 0;
    let computerScore = 0; 
    
    // Initialize number of rounds to play
    const rounds = 5;

    // Initialize variable to keep count of the current round 
    let i = 0; 


    // Execute playround function
    while (i < rounds)  {
        
        i++;

        /* Store result of round in status variable
           Player win returns a value of 1
           Player loss returns value of 0
           Tie returns value of 3 */

        let status = playRound();

        // Check if last round ended in player win
        if (status == 1) {
            console.log("You win round " + i)
            playerScore++;
          // Check if last round ended in computer win  
        } else if (status == 0) {
            console.log("Computer wins round " + i)
            computerScore++;
        }
        else {
            console.log("Round " + i + " is a tie")
            continue; 
        }
    }
    // Notify player if they have won or lost
    if (playerScore > computerScore) {
        console.log ("You win!");
         
    } else if (computerScore > playerScore) {
        console.log ("You lose!");
    } else {
        console.log("You tied!");
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}

// Returns string of user's selection
function getUserInput() {

    let valid = false;
    let lowerCase;

    // Only allow user to input a valid response (Case insensitive)   
    do {
        const userChoice = prompt("Please type in 'Rock', 'Paper', or 'Scissors' for your move: ");
        lowerCase = userChoice.toLowerCase();
        if (lowerCase == 'rock' || lowerCase == 'paper' || lowerCase == 'scissors')
        {
            valid = true;
        }
        else {
            console.log("Sorry but you typed in " + "'" + userChoice + "' " + "which is not a valid response.")
        }
    } while (valid == false);
    console.log("Player Choice: " + lowerCase);
    return lowerCase;
}

function getComputerInput(){
    
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    else if (randomNumber == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    
    // Delete later 
    console.log("Computer Choice: " + computerChoice);

    return computerChoice;
    
}

function compareSelection( playerSelection , computerSelection) {
    // Function stores result of winner outcome as follows:
    // result = 3:  player tied with computer
    // result = 1:  player won against computer
    // result = 0:  Player lost against computer

    let result = 3; 

    //Player picks rock 
    if (playerSelection == "rock") {

            //Player loses if computer selects paper
        if (computerSelection == "paper") {

            result = 0;

            // Player wins if computer selects scissors
        } else if (computerSelection == "scissors") {

            result = 1; 
        }

        return result;

        // Player picks paper
    }   else if (playerSelection == "paper") {

        // Player loses if computer selects scissors
        if (computerSelection == "scissors") {

            result = 0; 

            // Player wins if computer selects rock
        } else if (computerSelection == "rock") {

            result = 1;
        }

        return result;

        // Player picks scissors
    }   else if (playerSelection == "scissors") {

       // Player loses if computer selects rock
        if (computerSelection == "rock") {

            result = 0;

        // Player wins if computer selects paper
        } else if ( computerSelection == "paper") {

            result = 1;   
        }

    return result; 

    }

}

function playRound() {

    let result;

    const userSelect = getUserInput();

    const computerSelect = getComputerInput();

    result = compareSelection(userSelect, computerSelect);

    return result; 

}