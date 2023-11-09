// Strict mode is a special mode that we can write secire code in JS
// This has to be the first any code if it;'s before this the stict mode will not activate.
// Its like bin bash in bash scripts
// Script mode gives visible errors in the Dev console while coding and forbids us to do certain things
'use strict'; 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D');

// if i comment out strict mode the error wouldn't come but if i uncomment vice versa

// const interface = 'Audio';
// const private = 534;

// The strict mode sometimes these words like above where JS thinks in the future it will be using 
// as such words as syntaxes for various functionalities.


// The fundemental building blocks of JS is functions
// A function is a piece of code that we can use over and over again.

function logger() {
    console.log('My name is Dilshan');
}
// This is how you declare(Invoking, running or Calling) a function which has already been coded before.
logger();
logger();
logger();
logger();
//  A function can not only reuse code but it can also recieve and return data aswell.
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;    
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));


const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

const num = Number('23');
console.log(num);

// These are function declartions

function calcAge1(birtHYear) {
    return 2037 - birtHYear;
}
const age1 = calcAge1(1991);
console.log(age1); // This is function Declaration.

const calcAge2 = function (birtHYear) {
    return 2037 - birtHYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2); // This is function expression


// Function declaratinions can be defined before it's being scripted.
// Function expressions can be better than expressions. (personal preference)


