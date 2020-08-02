 'use strict';

/* let name = 'Vasya'; */


// Именования переменных A-Za-z, 0-9, _, $
// Однострочный коментарий
/*
    *
    Многострочный комментарий
 */

/* const age = 30;

console.log(name);
console.log(age);

name = 'Vlad';

let colorRed = "F00"

let string = `My faworite color is ${colorRed}`;


let firstName = 'Roman';
let lastName = 'Revunenkov';
let fullName = `My name is ${firstName} ${lastName}`;
console.log(`String! new ${string}`);
console.log(fullName);

name = prompt("Enter your name:");
alert(name);

let testValue = String(50);
console.log(testValue);
 */


/* let number = prompt ("Enter your number:");

let minuts = Number(number);

if (minuts >= 0 && minuts <= 15) {

    console.log( `Its a 1st quarter of an hour`);
    
} else if (minuts <= 30) {

    console.log( `Its a 2nd quarter of an hour`);
    
} else if (minuts <= 45) {

    console.log( `Its a 3rd quarter of an hour`);
    
} else if (minuts <= 59){
    console.log( `Its a 3rd quarter of an hour`);
} else {
    console.log( `Its incorect number`);
}; */



let digit = prompt ("Enter your number (from 0 to 500):");

let number = Number(digit);

if (number <= 500 && number >= 0) {

    let i = 0;

    while (i <= number) {
    console.log(`#`);
    i++;
}

do {
    console.log(`#`);
    i++;
} while (i <= number);


for (i=0; i <= number; i++) {
    
    console.log(`#`);

}
} else {
    console.log(`Your number incorrect`);
}



