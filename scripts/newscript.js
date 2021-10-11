let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
    });
});

function computerPlay() {
    let computerTurn = Math.random();
    if (computerTurn >= 0.666666667) {
        return "rock";
    } else if (computerTurn > 0.333333334 && computerTurn < 0.666666667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';
    if (playerSelection === computerSelection) {
        result = `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}. <br><br>Player: ${playerWins}  Computer: ${computerWins}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "paper" && computerSelection === "rock")||
            (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWins++;
        result = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. <br><br>Player: ${playerWins}  Computer: ${computerWins}.`;

        if (playerWins == 5) {
            result += `<br><br>You win the game! Refresh to play again!`;
            disableButtons();
        }
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerWins++;
        result = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. <br><br>Player: ${playerWins}  Computer: ${computerWins}`;

        if (computerWins == 5) {
            result += `<br><br>You lost the game! Refresh to play again!`;
            disableButtons();
        }
    }
    document.querySelector('#result').innerHTML = result;
    return;
}

