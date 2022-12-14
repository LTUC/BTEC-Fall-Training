'use strict';

localStorage
console.log("What is local storage???")
console.log(localStorage)

// 1. store names in the local storage:

localStorage.setItem("name", "Rahaf");
localStorage.setItem("age", "24");

// 2. read from the local storage
const username = localStorage.getItem("name")

console.log(username)

// 3. remove an item:
localStorage.removeItem("age")

// 4. clear everything in the ls:
localStorage.clear()