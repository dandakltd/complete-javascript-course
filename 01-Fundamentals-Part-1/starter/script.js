let js = "amazing";
console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
console.log(23);

let firstname = "Matilda";
let lastName = "perera";
let middle_name = "sanjeewa";
console.log(firstname);
console.log(lastName);
console.log(middle_name);
console.log(firstname);

// A variable cannot start with a number
// A variable cannot be seperated by &
// "new, function" cannot be used as variables you can instead modify
// "name" is a reserved keyword so better not to use it as a variable name
// Variables cannot be starting with an uppuercase  letter.
// variables which will not get changes can only be starting with a uppercase
    // eg : let PI = 3.1415; (it has to be real constant)

// Practice test
let country = 'USA';
let continent = 'North America';
let population = '1.34B';

console.log(country);
console.log(continent);
console.log(population);

// /* can be used to comment all lines of code /*

true;
console.log(true)
let javascriptidFun = true; // A variable name holding a boolean
console.log(javascriptidFun);

console.log(typeof true); 
console.log(typeof javascriptidFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptidFun = 'YES!'; // When changing variable names you can simply do like this.
console.log(javascriptidFun);
console.log(typeof javascriptidFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // This is regarded is called as an error but for legacy reasons they haved typed it as an object.

let age = 30;
age = 31;  // This is called reassigning or mutated the variable

// Const type pof variables cannot be changed.

// const birthyear = 1991;
// birthyear = 1990; // const is an immutable variable type

// const job; // When using const we need initioal values cannot leve it undefined

// Eg :
// birth year can be a const
// age can be a let

// var should be completely avoided because of legacy reasons, its the old way of defining vars

// var job = 'programmer';
// job = 'teacher';  // Never use var

// lastname = 'Dilshan';
// console.log(lastname);

// An operator will help you to transform values
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3  = 2 * 2 * 2

const firstName = 'Jonas';
const lastname = 'perera';
console.log(firstName + ' ' + lastname);

let x = 10 + 5; //15
x += 10; // adding another 10 to the x value = 25
x *= 4; // lates x value times 4 
x++; // Adding a 1 to the latest x number
x--; // Substracting 1 from the latest x value
console.log(x);


// Comparison Operators to produce boolean values
console.log(ageJonas > ageSarah); // This will give whether its true or false >, <, >=, <=
console.log(ageSarah >= 18);
// We can do the same actions inside the console aswell because the broswe tab reads everything inside the html including the script.js
const isfullage = ageSarah >= 18;
// isfullage variable will be holding a boolean value.


console.log(now-1991 > now-2018);
// the above tasks can be done like this aswell.
const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);

marksbmi = 28.3;
johnsbmi = 23.9;
if (marksbmi > johnsbmi) {
    console.log('Marks BMI is Higher than Johns BMI');
} else {
    console.log('Johns BMI is Higher than Marks BMI');
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log('Marks BMI is Higher than Johns BMI');
} else {
    console.log('Johns BMI is Higher than Marks BMI');
}

const firsTname = 'Jonas';
const job = 'teacgher';
const birthyear = 1991;
const yEar = 2037;
const jonas = "I'm " + firsTname + ', a ' + (yEar - birthyear) + ' years old ' + job + '.';
console.log(jonas);

// A template literal has the ability to concatinate  multiple strings and values to a one peace.

const jonasNew = `I'm ${firstName}, a ${yEar - birthyear} year old ${job}!`;
console.log(jonasNew);


// Backtick is on the ~ button "   '   "

console.log ('String with \n\
multiple \n\
lines');
// A string with mutile lines

console.log(`sting
multiple
lines`);
// The backtick agin came handy here.


