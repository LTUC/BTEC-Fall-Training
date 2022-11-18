console.log("I am a live")

// Data Types
let name = "Ahmad"
let age = 20
let isHappy = true

console.log(name, age, isHappy)

// Popup boxes
// 1. alert
alert("Welcome to our website");

// 2. confirm
let userinput = confirm("Do you want to hear a joke");
console.log(userinput)
if (userinput) {
    alert("Taxi is like the sun, it is not there when you need it")
};

// 3. prompt
let userAge = prompt("How old are you?");
console.log(userAge)

if (userAge > 18) {
    alert("Never too young to learn js")
} else {
    alert("Never too old too learn js")
}

//  Arrays
let dayOfWeek = ["Sunday", "Friday", "Monday"];
let person = ["Ahmad", 20, "ASAC Student"];

console.log(person)

// push
let arrPush = [ 1, 2, 3 ];
arrPush.push(4);
console.log(arrPush);

// pop
let arrPop = [1, 2, 3, 4];
arrPop.pop();
console.log(arrPop);

// shift
let arrShift = [ 0, 1, 2, 3 ];
arrShift.shift();
console.log(arrShift);

// unshift
let arrUnshift = [ 1, 2, 3 ];
arrUnshift.unshift(0);
console.log(arrUnshift);

// Bracket anotation
person[1]
person.length //3

// Loops
for (let i = 0; i < 5; i = i + 2) {
    console.log(i)
}

// functions
// 1. declare a function
// 2. no input, no output
// 3. no input, output
// 4. input , output
function addNumber() {
    console.log("First case")
}
// call a functions
addNumber()

// 2. no input, no output
function caseTwo(name) {
    console.log("Hello", name);
}
caseTwo("Ahmad")

// 3. no input, output
function caseThree() {
    return "Hello From ASAC"
}
let output = caseThree()
console.log(output)

// 4. input , output
function sum(x, y) {
    var sum = x + y
    console.log("Inside the function", sum)
    return sum
}
let result = sum(2, 2)
console.log(result);
// console.log("Outside the function", sum)

// Single Responsibity
// arrow functions

if (true) {
    var x = 10;
    x = 5;
    console.log("Inside the block ", x);
}
console.log("Outside the block ", x)