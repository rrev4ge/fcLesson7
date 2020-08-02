'use strict';

let name = 'Vasya';


// Именования переменных A-Za-z, 0-9, _, $
// Однострочный коментарий
/*
    *
    Многострочный комментарий
 */

const age = 30;

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
let result = 