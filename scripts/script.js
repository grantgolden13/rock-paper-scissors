// Need a function called computerPlay that randomly returns either 'Rock', 'Paper', or 'Scissors'. we'll use this function to make the computer's play
function computerPlay() {
    const x = Math.random();
    if (x > 0.666666667) {
        return "rock";
    } else if (x >= 0.333333333 && x <= 0.666666667) {
        return "paper";
    } else {
        return "scissors";
    }
}

// then write a function that plays a single round of rock paper scissors. it should take 2 parameters, playerSelection and computerSelection, then return a
// string that declares the winner of the round, like so: "You Lose! Paper beats Rock"
// we want to return the results of this function call, not console.log it.

function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You Lose!";
    } else {
        return "You Win!";
    }
}

// function to get a value from user and validate the input on the playerSelection 

function playerSubmission() {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toString().toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("Only valid options are rock, paper, or scissors.");
        playerSubmission();                             //  necessary to run prompt again after user makes error
        }
          else {
            return playerSelection;
          }
}

// then write a new function called game(). use rockPaperScissors function inside of this one and play to a 5 round game that keeps score and reports a winner/loser at the end

function game() {
    let playerWins = 0;
    let computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        console.log("You have won: " + playerWins + ". Computer has won: " + computerWins);
        playerSelection = playerSubmission();
        computerSelection = computerPlay();
        let result = rockPaperScissors(playerSelection, computerSelection);
        if (result === "You Win!") {
            playerWins++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result === "You Lose") {
            computerWins++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`Tied! You chose ${playerSelection}, computer chose ${computerSelection}`);
        }
    }
}

game();                             //  must be included to run on start

