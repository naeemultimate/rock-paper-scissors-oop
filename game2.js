const prompt = require("prompt-sync")({ sigint: true });

class Player {
  constructor(name) {
    this.name = name;
    this.choice = null;
  }
}

class HumanPlayer extends Player {
  makeChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper or scissors? ");
    this.choice = humanChoice;
  }
}

class ComputerPlayer extends Player {
  makeChoice() {
    let computerChoice = Math.floor(Math.random() * 3) //random number generator
    if (computerChoice === 0) {
      this.choice = 'rock'
    } else if (computerChoice === 1) {
      this.choice = 'paper'
    } else if (computerChoice === 2) {
      this.choice = 'scissors'
    }
  }
}

class Game {
  constructor() {
    this.computerPlayer = new ComputerPlayer("Computer")
    this.humanPlayer = new HumanPlayer("Human")
  }

  play() {
    this.computerPlayer.makeChoice();
    this.humanPlayer.makeChoice();

    const computerChoice = this.computerPlayer.choice;
    const humanChoice = this.humanPlayer.choice;
    console.log(`Human chose ${humanChoice} and computer chose ${computerChoice}`);

    if (computerChoice === 'rock' && humanChoice === 'scissors') {
      console.log("Rock beats Scissors so you have lost...");
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      console.log("Paper beats rock so you have lost...");
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      console.log("Scissors beats paper so you have lost...");
    } else if (computerChoice === humanChoice) {
      console.log(`You both chose ${computerChoice} so it's a tie!`);
    } else {
      console.log("You won!")
    }
  }
}

const game = new Game();
game.play();
game.play();



// Run: node game2.js