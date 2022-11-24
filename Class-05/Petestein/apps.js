console.log("I'm a GENIUS")

// Datatypes:

let name = "Petestein"
let age = 21
let isGenius = true

console.log("Is " + name + " a Genius? " + isGenius)

// Pop-Up Boxes
// 1) Alert
alert("Welcome to my brain")
// 2) Confirm
if (confirm("Would you like to hear a joke?"))
    alert("Taxies are like the government, they're never around when you need them")
else
    alert("Ok :(")
// 3) Prompt
    prompt("How skilled are you?")

// Arrays:

let Days_of_week = ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"]
let person = ["Petesein", 21, "Scientist"]
console.log(person)

person[1]
person.length

//loops

for (i = 0; i < person.length; i++){
    alert(person[i])
}

// functions

function addNumber(){
    console.log(person[1] + 5)
}
function alertName(name){
    alert(name)
}
function sayHello(){
    return "Hello Petestein"
}
function addTwoNumbers(x, y){
    return x + y
}

addNumber()
alertName(name)
alert(sayHello())
alert(addTwoNumbers(5, 9))