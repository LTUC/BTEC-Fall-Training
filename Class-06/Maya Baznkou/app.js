console.log("I am a live")

// Data Types:
let name = "Nour"
let age = 21
let isHappy = true
console.log(name, age, isHappy)
// Popup boxes
// 1. alert
// alert("Welcome to our website")
//2. confirm
/* Asking the user if they want to hear a joke. */
let userInput = confirm("Do you want to hear a jobe")
console.log(userInput)
if (userInput){

    alert("taxi is like the sum, it is not there when ou need it")
}
//3. prompt
let userAge = prompt("how old are you")
console.log(userAge)

if (userAge<18){
    alert("never too young to learn js")
}else{
    alert("never too old to learn js")

}
//arrays:
let daysOfWeek = ["sunday" , "friday" , "Monday"];
let person =["farah" ,22,"ASAC Student"];
console.log(parent)
//braket anotation
person[1]
person.length

function addNumber(){
}//call a function
addNumber()

//input , no output
function caseTwo(name){
    console.log("hello", name);
}
caseTwo("mohammad")
// input , no output
function caseTwo(name) {
    console.log("Hello", name);
}

caseTwo("Mohammad")
// no input, output
function caseThree() {
    return "Hello From ASAC"
}
let output = caseThree()
console.log(output)

// input , output
function addNumber(x, y) {
    var sum = x + y
    console.log("Inside the function", sum)
    return sum
}
let result = addNumber(2, 2)
console.log(result);

console.log("Outside the function", sum)
// Single Responsibity
// arrow functions

if (true) {
    const x = 10;
    x = 5;
    console.log("inside the block", x);
}
console.log("Outside the block", x)