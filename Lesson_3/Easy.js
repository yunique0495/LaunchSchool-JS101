// Question #1
// Will the code below raise an error?
let numbers = [1, 2, 3];
number[6] = 5; // => the 5th index is 5.
number[4]; // => undefined and empty slot.

// Question #2
// How can you determine whether a giving string END with (!)?

let str1 = "Come over here!"; // => true
let str2 = "What's up, Doc?"; // => faslse
// Solution
str1.endsWith("!");
str2.endsWith("!");

// Question #3
// Determine whether the following object of people and their age contains an entry(property) for 'Spot'.

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// Solution
ages.hasOwnProtery("Spot");

//Question #4
//Create new string with first char capitalized and the rest is lowercase.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// Solution
munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

//Question #5
// What will the following code output?

console.log(false == '0'); // => true
console.log(false === '0'); // => false
// == operator coerces values to same type before comparison.
// === operator only return true when both sides are same type.

// Question #6
// Add entries for Marilyn and Spot to the object.

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
// Solution
Object.assign(ages, additionAges);

// Question #7
// Determine whether the name Dino appears in the strings below -- check each string separately).

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// Solution
str1.includes("Dino"); // => false
str2.includes("Dino"); // => true

str1.match("Dino") !== null; // => fasle
str2.match("Dino") !== null; // => true

str1.indexOf("Dino") > -1; // => false
str2.indexOf("Dino") > -1; // => true

// Question #8
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// Solution
flintstones.push("Dino");
flintstones = flintstones.concat("Dino");
flintstones[flintstones.length] = "Dino";

// Question #9
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// Solution
flintstones.push("Duno", "Hoppy");

// Question #10
// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";
// Solution
advice.slice(0, advice.indexOf('house'));