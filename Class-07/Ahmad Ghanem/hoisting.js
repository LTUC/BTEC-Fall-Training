'use strict'; // execute my code in strict mode
hoisting()

console.log("I am a live")

// hoisting with function
function hoisting() {
    console.log("I am running, can you see me ?")
}

// hoisting with var
number = 5;
console.log(number);

var number;

age = 20;
