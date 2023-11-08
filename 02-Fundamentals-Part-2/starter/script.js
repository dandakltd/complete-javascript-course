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

const interface = 'Audio';
const private = 534;

// The strict mode sometimes these words like above where JS thinks in the future it will be using 
// as such words as syntaxes for various functionalities.
