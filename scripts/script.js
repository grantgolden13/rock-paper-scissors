function computerPlay() {
    computerTurn = Math.random();
    if (computerTurn >= 0.666666666) {
        return "rock";
    } else if (computerTurn >= 0.333333334 && computerTurn < 0.666666666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// collects and validates input

function playerSubmission() {
    let playerSelection = prompt("Type rock, paper, or scissors, in the field below to play.").toString().toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("invalid input");
        alert("Error: choose rock, paper, or scissors");
        playerSubmission();
    } else {
        return playerSelection;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        console.log("Player: " + playerWins + " Computer: " + computerWins);
        playerSelection = playerSubmission();
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === `You win! ${playerSelection} beats ${computerSelection}`) {
            playerWins++;
            console.log(result);
        } else if (result === `You lose! ${computerSelection} beats ${playerSelection}`) {
            computerWins++;
            console.log(result);
        } else {
            console.log(result);
        }
    }
    if (playerWins == 5) {
        console.log("You won the game! Refresh to play again.")
    } else if (computerWins == 5) {
        console.log("You lost the game! Refresh to play again.")
    }
}

game();