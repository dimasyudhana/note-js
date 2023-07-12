let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
    let playerChoise = prompt("Please enter rock, paper, or scissors");
    if (playerChoise) {
        let playerOne = playerChoise.trim().toLowerCase();
        if (
            playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
        ) {
            let computerChoise = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoise === 1 ? "rock"
                : computerChoise === 2 ? "paper"
                : "scissors"
            let result = 
            playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
            alert(result);
            let playAgain = confirm("Play again");
            playAgain ? location.reload() : alert("okey, see you next time")
        } else {
            alert("You did not enter rock, paper, scissors.")
        }
    } else {
        alert("I guess you change your mind, maybe next time.")
    }
} else {
    alert("okey, maybe next time.");
}