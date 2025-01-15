const prompt = require("prompt-sync")()
class Player {
    constructor(choice) {
        this.choice = choice
    } 
}


// class HumanPlayer extends Player {
//     super()
// }

class ComputerPlayer extends Player {
    constructor(rock, paper, scissors, randomNum){
        super(rock, paper, scissors)
        // this.randomNum = randomNum
    }

    getRandomInt() {
        const ranNum = Math.floor(Math.random()*3) //random number generator
        if(ranNum === 0){
            return 'rock'
        } else if (ranNum === 1){
            return 'paper'
        } else if (ranNum === 2){
            return 'scissors' 
        }
    }
}



class Game {
 
    start() {
        if (prompt == 'rock'){
            console.log("rock");
        }
    }

    chosen(gameChoice) {
        console.log(`You have chosen: ${gameChoice}`);
    }
    
    winGame(computerChoice, humanChoice) {
        if (computerChoice === 'rock' && humanChoice === 'scissors'){
            console.log("Rock beats Scissors so you have lost...");
        } else if (computerChoice === 'paper' && humanChoice === 'rock'){
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

const player1 = new Game
const player2 = new ComputerPlayer
player2.getRandomInt
// player1.winGame() //This works when you console log it

