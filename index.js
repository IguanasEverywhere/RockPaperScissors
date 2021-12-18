// This function selects a random number betwee 0-2 and assigns it a corresponding string value which 
// it then returns as Rock, Paper, or Scissors value

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




function game() {

    let computerScore = 0;
    let playerScore = 0;

    let playerSelection;

    const clickSound = new Audio("sounds/clickSound.wav");

    // button event listeners //////////////////////////////////////////////////

    const rockBtn = document.getElementById("rockBtn");
    rockBtn.addEventListener('click', () => {
        playerSelection = "Rock";
        clickSound.currentTime=0;
        clickSound.play();
        playARound(computerPlay(), playerSelection);
    });

    const paperBtn = document.getElementById("paperBtn");
    paperBtn.addEventListener('click', () => {
        playerSelection = "Paper";
        clickSound.currentTime=0;
        clickSound.play();
        playARound(computerPlay(), playerSelection);
    });

    const scissorsBtn = document.getElementById("scissorsBtn");
    scissorsBtn.addEventListener('click', () => {
        playerSelection = "Scissors";
        clickSound.currentTime=0;
        clickSound.play();
        playARound(computerPlay(), playerSelection);
    });

    // function compares random computer selection to player selection, declares round winner, and increments appropriate score

    function playARound(computerSelection, playerSelection) {

        console.log("Computer's play is " + computerSelection);
        console.log("Player's selection is " + playerSelection);

        let winnerDisplay = document.querySelector("#winnerDisplay");
        let playerScoreDisplay = document.querySelector("#player-score");
        let computerScoreDisplay = document.querySelector("#computer-score");
        let choicesDisplay = document.querySelector("#display-selections");
        let bodyColor = document.querySelector("body");

        bodyColor.style.backgroundColor="#950101";


        if (computerSelection === "Rock") {
            if (playerSelection === "Rock") {
                winnerDisplay.textContent="It's a TIE!";
            } else if (playerSelection === "Paper") {
                winnerDisplay.textContent="You WIN! Paper beats Rock.";
                playerScore++;
            } else if (playerSelection === "Scissors") {
                winnerDisplay.textContent="You LOSE! Rock beats Scissors";
                computerScore++;
            }
        }

        if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                winnerDisplay.textContent="You LOSE! Paper beats Rock.";
                computerScore++;
            } else if (playerSelection === "Paper") {
                winnerDisplay.textContent="It's a TIE!";
            } else if (playerSelection === "Scissors") {
                winnerDisplay.textContent="You WIN! Scissors beats Paper.";
                playerScore++;
            }
        }

        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                winnerDisplay.textContent="You WIN! Rock beats Scissors.";
                playerScore++;
            } else if (playerSelection === "Paper") {
                winnerDisplay.textContent="You LOSE! Scissors beats Paper.";
                computerScore++;
            } else if (playerSelection === "Scissors") {
                winnerDisplay.textContent="It's a TIE!";
            }
        }
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        choicesDisplay.textContent = "You chose " + playerSelection + " and Computer chose " + computerSelection;


        if (playerScore === 5 || computerScore === 5) {
            winnerDisplay.textContent = "GAME OVER! Click a weapon to start again.";
            playerScore = 0;
            computerScore = 0;

            const gameOverAudio = new Audio("sounds/gameOver.wav");
            gameOverAudio.currentTime=0;
            gameOverAudio.play();
            bodyColor.style.backgroundColor="#3745ed";
        }
          
    }
}

game(); // calls the game so it runs upon loading of the page