// computerPlay function randomly returns either Rock Paper or Scissors and assigns to computerChoice variable

function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

let computerChoice = computerPlay();
console.log(computerChoice);

// function that determines that the user input is lowercase.
let playerChoice = prompt("Rock, Paper, or Scissors?");
let playerChoiceLower = playerChoice.toLowerCase();

// function that sets initial scores
let computerScore = 0;
let playerScore = 0;

// each round is played here:

function game(x,y) {
  if ((y !== "rock") && (y !== "paper") && (y !== "scissors")) {
    return "Please enter a valid input.";
  } else if (x == y) {
    return "It's a draw!";
  } else if (x == "rock") {
      if (y == "scissors") {
        computerScore++;
        return  "You lose! Rock beats scissors. Computer Score: " + computerScore;
      } else if  (y == "paper") {
        playerScore++;
        return "You win! Paper beats rock. Player Score: " + playerScore;
      }
    } else if (x =="paper"){
        if (y == "rock") {
          computerScore++;
          return  "You lose! Paper beats rock. Computer Score: " + computerScore;
        } else if  (y == "scissors") {
          playerScore++;
          return "You win! Scissors beats paper. Player Score: " + playerScore;
        }
    } else if (x =="scissors") {
        if (y == "paper") {
          computerScore++;
          return  "You lose! Scissors beats paper. Computer Score: " + computerScore;
        } else if  (y == "rock") {
          playerScore++;
          return "You win! Rock beats scissors. Player Score: " + playerScore;
        }
    }
  }

console.log(game(computerChoice,playerChoiceLower));

// game function that makes this into a five-round game