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

const aGe = 15;
const isOldEnough = aGe >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsleft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsleft} years`);
}

// if (){

// } else {

// }
// This is called a control structure.


const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
// If i define variables inside a control structure i will not be able to console output that instead
// what i would do is have an empty variable abobve the control structure and assign the values to it inside the control
// structure.

// Type conversion is when we manually convert from one type to another coersion when js automatically converts the type


// type coversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN)

console.log(String(23));
console.log(typeof 23) // All this is manually Converting

// In JS we can only convert numbers, strings and booleans only.


// type coercion
console.log('I am ' + 23 + ' years old')
// when a number is in the middlle of the string like this JS is smart enough to convert the whole 
// thing into a string. Th "plus" operator will do it.
console.log('23' + '10' -3);
// In this case the output will be 2307 as a string value because the plus operator is in the middle,
// If it was " - " in the middle it will give a number.
console.log('23' * '2')
console.log('23' / '2')
console.log('23' + '2')

let n = '1' + 1;
n = n -1;
console.log(n);
// In this case the answer will be 10.

// falsey values are values that are not exactly false but will become false when we convert them into booleans
// there are 5 falsey values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// Any string which is not an empty string is a truthy value.