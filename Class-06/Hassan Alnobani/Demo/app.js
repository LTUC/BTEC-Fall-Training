console.log("I am a live");

// Data type

let name = "Ahmed";
let age = 21;
let isHappy = true;

console.log(name, age, isHappy);

// Popup boxes:
// 1. Alert

alert("Welcome to our website");

// 2. confirm

let userInput = confirm("Do you want to hear a joke");
console.log(userInput);
if (userInput){
    alert("Taxi like the sun, it's not there when you are need it");
}

// 3. prompt
//usually we use form not prompt
let userAge = prompt("How old are you?");
console.log(userAge);

if(userAge < 18){

    alert("Never too young to learn java script");
}
else{
    alert("Never too old to learn java script");
}

// Arrays:

let daysOfWeek = ["Sunday", "Friday", "Monday"];
let person = ["farah", 22, "ASAC Student"];

// to check age of farah we need to know the index number

console.log(person);
person[1];

// loops

for(let i = 0; i < 5; i += 2){
console.log(i);
}

// function 

// no input, no output
function caseOne(){
console.log("First case")
}

// call a function 
caseOne();

// input, no output

function CaseTwo(name){
    console.log("Hello", name);
}

// no input, output

function caseThree(){
    return "Hello from ASAC";
}
let output = caseThree;
console.log(output);

// input, output

function caseFour(x, y){

    return x + y;
}
let result = caseFour(2,2);

console.log(result);

// single responsibility

// Arrow function learn it from free code camp.

