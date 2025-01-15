const choices = ["rock", "paper", "scissors"];

class Player {
  constructor(){
    this.move = null;
  }
}


const p = new Player();
p.move = "rock";
console.log(p.move);


class HumanPlayer extends Player {
  makeMove(){
    let userMove = prompt("Enter your move: rock, paper or scissors?");
    this.move = userMove;
  }
}

class ComputerPlayer extends Player {
  makeMove(){
    let computerMove = choices[Math.floor(Math.random()*3)];
    this.move = computerMove;
  }
}

class Game {
  constructor(computerPlayer, humanPlayer){
    this.computerPlayer = computer;
    this.humanPlayer = humanPlayer;
  }

  makeMoves() {
    this.computerPlayer.makeMove();
    this.humanPlayer.makeMove();
  }

  // showResult(){
  //   if (computerChoice === 'rock' && humanChoice === 'scissors'){
  //     console.log("Rock beats Scissors so you have lost...");
  // } else if (computerChoice === 'paper' && humanChoice === 'rock'){
  //     console.log("Paper beats rock so you have lost...");
  // } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
  //     console.log("Scissors beats paper so you have lost...");
  // } else if (computerChoice === humanChoice) {
  //   console.log(`You both chose ${computerChoice} so it's a tie!`);
  // } else {
  //   console.log("You won!")
  // }
  // }

}

