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
