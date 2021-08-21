const readline = require('readline-sync');

function prompt(message) {
 console.log(`=> ${message}`);
}

function invalidNumber(number) {
 return number.trimStart() === ''|| Number(number) < 0 || Number.isNaN(Number(number));
}

function invalidYear(number) {
 return number <= 0;
}

function getLoan() {
 prompt('Please introduce your loan amount in USD\nEG:"20000 for $20,000"');
 let loanAmount = readline.question();

 while (invalidNumber(loanAmount)) {
 prompt("Hmm...not a valid number. Please do not include $ or ,");
 loanAmount = readline.question();
 }
 return loanAmount;
}

function getLoanDuration() {
 prompt('How long is your loan term (in years)?');
 let loanDuration = readline.question();

 while (invalidNumber(loanDuration) || invalidYear(loanDuration)) {
 prompt("Hmmm..not a valid number. Please try again!");
 loanDuration = readline.question();
 }
 return loanDuration;
}

function getApr() {
 prompt("What's the APR % for your loan?\nEG:'4 for 4% or 4.5 for 4.5%'");
 let apr = readline.question();

 while (invalidNumber(apr)) {
 prompt("Hmm...not a valid APR %. Please try again!");
 }
 return apr;
}


function getMonthlyPayments() {
 let monthlyPayments;
 if (monthlyInterestRate === 0) {
 monthlyPayments = loanAmount / monthlyDuration;
} else {
 monthlyPayments = loanAmount * (monthlyInterestRate /
 (1 - Math.pow( 1 + monthlyInterestRate), -(monthlyDuration)));
 }
 return monthlyPayments;
}

function newCalculation() {
 prompt('Would you like to perform  another loan calculation? (Y/N)');
 let answer = readline.question().toLowerCase();

 while (answer !== 'n' && answer !== 'y') {
 prompt("Please select 'y' or 'n' to proceed.");
 answer = readline.question().toLowerCase();
 }
 return answer;
}
let loanAmount;
let monthlyInterestRate;
let monthlyDuration;
let apr;
let aprPercentage;
let loanDuration;
let answer;
let monthlyPayments;

do {
 console.clear();
 prompt('WELCOME TO THE MORTGAGE CALCULATOR!');
 prompt('***********************************');

loanAmount = getLoan();
apr = getApr();
aprPercentage = apr / 100;
monthlyInterestRate = Number(aprPercentage / 12);
loanDuration = getLoanDuration();
monthlyDuration = loanDuration * 12;
monthlyPayments = getMonthlyPayments();
    
console.clear();
prompt(`Your current loan payment is: $${monthlyPayments.toFixed(2)}`);

answer = newCalculation();

} while (answer === 'y');

console.clear();
prompt('THANK YOU FOR USING MORTGAGE CALCULATOR. GOODBYE!');