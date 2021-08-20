const readline = require('readline-sync');

const RULES = `The rules are: 
Rock crushes Lizard and crushes Scissors.
Paper covers Rock and disproves Spock.
Scissors cut Paper and decapitates Lizard.
Spock smashes Scissors and vaporizes Rock.
Lizard poisons Spock and eats Paper.
Choose one: 
'r' for rock,
'p' for paper,
'sc' for scissors,
'l' for lizard,
'sp' for spock
`

const CHOICES = {
 rock: { shorthand: 'r', beats: ['scissors', 'lizard'] },
 paper: { shorthand: 'p', beats: ['rock', 'spock'] },
 scissors: { shorthand: 'sc', beats: ['paper', 'lizard'] },
 lizard: { shorthand: 'l', beats: ['spock', 'paper'] },
 spock: { shorthand: 'sp', beats: ['scissors', 'rock'] }
}

const VALID_SHORTHAND = ['r', 'p', 'sc', 'l', 'sp'];

const VALID_ANSWERS = ['y', 'yes', 'n', 'no'];

const WINNING_SCORE = 5;

let score = {
 player: 0,
 computer: 0,
 reset: function() {
   this.player = 0;
   this.computer =0;
 }
};

function prompt(message) {
 console.log(`-> ${message}`);
}

function displayWelcomeMessage() {
 prompt('WELCOME TO THE ROCK, PAPER, SCISSORS GAME!');
 prompt(`THE GRAND WINNER WILL BE DETERMINED AFTER ${WINNING_SCORE} GAMES.`)
 prompt('**************************************************');
}

function getPlayerChoice() {
 prompt('Please choose one: rock, paper, scissors, lizard, spock. Shorthand: r, p, sc, l, sp');
  let choice = readline.question().toLowerCase();

 while (!Object.keys(CHOICES).includes(choice) && !VALID_SHORTHAND.includes(choice)) {
  prompt("Hmmm...that's not a valid choice. Please choose again!");
  choice = readline.question().toLowerCase();
 }
 return choice;
}

function getComputerChoice() {
 let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
 let computerChoice = Object.keys(CHOICES)[randomIndex];
 return computerChoice;
}

function whoWins() {
 return Object.entries(CHOICES);
}

function displayWinner(playerChoice, computerChoice) {
 prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

 if (playerChoice === computerChoice) {
  prompt("It's a tie game");
 } else if (whoWins(playerChoice, computerChoice)) {
  prompt("You won!");
 } else {
  prompt("Computer won!");
 }
}

function calculateScore(playerChoice, computerChoice) {
 if (whoWins(playerChoice, computerChoice)) {
 score.player += 1;
 } else if (whoWins(computerChoice, playerChoice)) {
 score.computer += 1;
 } 
}

function displayScore() {
 prompt(`Player score: ${score.player}`);
 prompt(`Computer score: ${score.computer}`);
}

function displayGrandWinner() {
 if (score.player === WINNING_SCORE) {
  prompt("CONGRATULATIONS, YOU ARE THE GRAND WINNER!");
  score.reset();
 } else if (score.computer === WINNING_SCORE) {
  prompt("UNTIL NEXT TIME, COMPUTER IS THE GRAND WINNER!");
  score.reset();
 }
}

function playAgain() {
 prompt('Would you like to play another round? (Y/N)');
 let answer = readline.question().toLowerCase();

 while (!VALID_ANSWERS.includes(answer)) {
  prompt("Hmm..that's not a valid answer. Please enter 'yes' 'y' or 'no' 'n'");
  answer = readline.question().toLowerCase();
 }
 return answer;
}

let playerChoice;
let computerChoice;
let answer;

do {
 console.clear();
 prompt(`${RULES}`);
 displayWelcomeMessage();
 displayScore();
 
 let playerChoice = getPlayerChoice();
 let computerChoice = getComputerChoice();

 displayWinner(playerChoice, computerChoice);
 calculateScore(playerChoice, computerChoice);
 displayScore();
 displayGrandWinner();
 
 answer = playAgain();
 
} while (answer[0]  === 'y');

console.clear()
prompt('THANK YOU FOR PLAYING. GOODBYE!');