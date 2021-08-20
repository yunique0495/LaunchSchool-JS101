// Ask the user for two numbers.
// Ask the user for the types of operation: add, substract, multiply, divide.
// Perform the calculation and show result.
// Print result to the terminal.

const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
console.log(`=> ${message}`);
}

function invalidNumber(num) {
 return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(messages.lang);
let lang = readline.question();

while (!['1', '2', '3'].includes(lang)) {
prompt('Please choose a valid language');
lang = readline.question();
}

switch (lang) {
 case '1': lang = 'en';
  break;
 case '2': lang = 'vie';
  break;
 case '3': lang = 'es';
  break;
}

prompt(messages[lang].welcome);

while (true) {
prompt(messages[lang].num1);

let number1 = readline.question();
 while (invalidNumber(number1)) {
  prompt(messages[lang].invalid);
  number1 = readline.question();
}
prompt(messages[lang].num2);
let number2 = readline.question();

 while (invalidNumber(number2)) {
  prompt(messages[lang].invalid);
  number2 = readline.question();
}

prompt(messages[lang].operation);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4')
  operation = readline.question();
    
}

let output;

switch (operation) {
  case '1':
  output = Number(number1) + Number(number2);
  break;
  case '2':
  output = Number(number1) - Number(number2);
	break;
  case '3':
  output = Number(number1) * Number(number2);
  break;
  case '4':
  output = Number(number1) / Number(number2);
  break;
}

prompt(messages[lang].result + output);

prompt(messages[lang].repeat);
let repeat = readline.question();

if (repeat !== '0') break;
}