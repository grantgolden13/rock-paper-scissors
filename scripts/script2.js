// randomly returns rock, paper, or scissors

function computerPlay() {
    let randomTurn = Math.random();
    if (randomTurn >= 0.666666667) {
        return "rock";
    } else if (randomTurn < 0.666666667 && randomTurn > 0.333333333) {
        return "paper";
    } else {
        return "scissors";
    }
}

// plays a single round. first takes and validates player input, then compares it to an instance of computerPlay(), and returns the result

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Type rock, paper, or scissors below to play.").toLowerCase();
    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    }
}

// plays 5 iterations of the game with function playRound(), and keeps score in the console

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for (i = 0; i < 5; i++) {
        result = playRound();
        if (result.charAt(4) === "w") {
            console.log("You win!")
            console.log(`Player: ${playerWins++} Computer: ${computerWins}`);
        } else if (result.charAt(4) === "l") {
            console.log("You lose!")
            console.log(`Player: ${playerWins} Computer: ${computerWins++}`);
        } else {
            console.log("It's a tie.");
        }
    }
    if (computerWins === 5) {
        console.log("You lost to the computer! Play again?")
    } else if (playerWins === 5) {
        console.log("You beat the computer! Play again?")
    }
}