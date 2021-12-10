// This function selects a random number betwee 0-2 and assigns it a corresponding string value which 
// it then returns

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
        default:
            computerSelection = "Error";

    }

    return computerSelection;

}


// This function gets the player Selection

function getPlayerSelection() {
    let playerEntry = prompt("Rock, Paper, or Scissors?");
    let playerEntryLength = playerEntry.length;

    playerSelection = playerEntry.substr(0, 1).toUpperCase() + playerEntry.substr(1, playerEntryLength).toLowerCase();

    return playerSelection;
}


// This function runs the game. It calls another function function inside of it 5x that compares the 
// computer choice to the player choice and increases the appropriate scores.

function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playARound(computerPlay(), getPlayerSelection());
    }


    function playARound(computerSelection, playerSelection) {

        console.log("Computer's play is " + computerSelection);
        console.log("Player's selection is " + playerSelection);

        if (computerSelection === "Rock") {
            if (playerSelection === "Rock") {
                console.log("It's a TIE!");
            } else if (playerSelection === "Paper") {
                console.log("You WIN! Paper beats Rock.");
                playerScore++;
            } else if (playerSelection === "Scissors") {
                console.log("You LOSE! Rock beats Scissors");
                computerScore++;
            }
        }

        if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                console.log("You LOSE! Paper beats Rock.");
                computerScore++;
            } else if (playerSelection === "Paper") {
                console.log("It's a TIE!");
            } else if (playerSelection === "Scissors") {
                console.log("You WIN! Scissors beats Paper.");
                playerScore++;
            }
        }

        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                console.log("You WIN! Rock beats Scissors.");
                playerScore++;
            } else if (playerSelection === "Paper") {
                console.log("You LOSE! Scissors beats Paper.");
                computerScore++;
            } else if (playerSelection === "Scissors") {
                console.log("It's a TIE!");
            }
        }
        console.log("Computer Score: " + computerScore + " Player Score: " + playerScore);
    }

    if (computerScore > playerScore) {
        console.log("Computer wins the 5 rounds!")
    } else if (playerScore > computerScore) {
        console.log("You win the 5 rounds!");
    } else {
        console.log("The 5 rounds was a tie!");
    }
}

game(); // calls the game so it runs upon loading of the page