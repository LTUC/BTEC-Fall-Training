'use strict'; // execute my code in strict mode
hoisting()

console.log("I am alive")

// hoisting with functions:

function hoisting() {
    console.log("I am running, can you see me")
}

// hositing with var:

number = 5;
console.log(number);


var number;

age = 22