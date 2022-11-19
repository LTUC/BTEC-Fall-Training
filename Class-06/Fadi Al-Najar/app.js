
console.log("I am a live");

//Data Types:
let name = "Fadi Alnajar";
let age = 21;
let isHappy = true;

console.log(name, age, isHappy);

//Popup boxes
//1. alert
alert("Welcom to our website"); //Its ugly

//2. confirm
let userInput = confirm("Do you want continuous");
console.log(userInput);

if (userInput) {
  alert("Thank you");
}

//3. proompt
let userAge = prompt("How old are you");
console.log(userAge);

if (userAge < 18) {
  alert("Never too young to learn js");
} else {
  alert("Never too old too learn js");
}



// Arrays:
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday"]
console.log(daysOfWeek, daysOfWeek.length)

let LP = ["Java", "JavaScript", "C++", "C#"]
console.log(LP)

LP.shift()
console.log(LP)

LP.unshift()
console.log(LP)

LP.push("React JS")
console.log(LP)

LP.pop()
console.log(LP)

// bracket anotation
LP[1]

//Loops
for(let i = 0; i < 5; i++){
    let l = "Loops"
console.log(l)
}

// Old fashioned function
// functions:
// Declare a function 
// no input, no output
function addNumbers(){
    console.log("First Case")
}
// Call a function:
addNumbers()

// input, no output
function caseTwo(name){
    console.log("Hello", name)
}
caseTwo("Fadi")

// no input, output
function caseThree(){
    return "Hello, "
}
let output = caseThree()
console.log(output)

// input, output
// function scope
function addNumber(x, y){
    // let sum = x + y
    var sum = x + y
    console.log("Inside the function", sum)
    return sum
}
//console.log("Out side in the function", sum)
let result = addNumber(2, 2)
console.log(result)

// arrow functions


if(true){
    // let x = 10 const and let the same within the block
    var x = 10
    console.log("Inside the block", x)
}
console.log("Out side the block", x)


/****************************************************/


function calAvg(){
// The problem is solved Average some student let say
let sum = 0
let degree = [90, 91, 84, 73, 90]
for(let i = 0; i < degree.length; i++){
    sum = degree[i]
}
let avg = sum / degree.length
console.log("The avg =", sum)
}

// the problem is isolate numbers Even or Odd 
function checkedNumber(){
let number = 3
if(number % 2 == 0){
console.log("Is Even number:", number)
}else{
    console.log("Is Odd number:", number)
}
}

// Sorting Array
let arr = [5, 6, 8, 1, 9, 12, 0, 2, 3, 4]
console.log("The Array befor", arr)

for(let i = 0; i < arr.length; i++){
    arr.sort() 
}
console.log("The Array after", arr)