// Need a function called computerPlay that randomly returns either 'Rock', 'Paper', or 'Scissors'. we'll use this function to make the computer's play
function computerPlay() {
    let computerSelection = Math.random();
    if (computerSelection > 0.666666667) {
        return "Rock";
    } else if (computerSelection >= 0.333333333 && computerSelection <= 0.666666667) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// then write a function that plays a single round of rock paper scissors. it should take 2 parameters, playerSelection and computerSelection, then return a
// string that declares the winner of the round, like so: "You Lose! Paper beats Rock"
// we want to return the results of this function call, not console.log it.

function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }
}

// then write a new function called game(). use the previous function inside of this one and play to a 5 round game that keeps score and reports a winner/loser at the end
// don't make this a loop since I haven't learned loops yet
// for this we'll use console.log to display the results of each round and the winner at the end
// use prompt() to get input from the user
// feel free to create more functions if necessary



// declare function game and make it: receive user input via prompt. take said input and pass it as a value to rockPaperScissors.

function game() {
    let playerSelection = prompt("Choose your fighter: Type 'rock', 'paper', or 'scissors' into the field below.");
    rockPaperScissors(playerSelection, computerSelection);
}
