'use strict';

// change the h1 from js:
//Part 01:  get the element, store in a variable
// one way of getting the element:
const h1Element = document.getElementById("pageHeading")// get element by id

console.log(h1Element)

// h1Element.innerHTML = "Testing"
// change content
h1Element.textContent = "DOM is Cool";

// change styling:

h1Element.style.color = "blue";

// get element by class name

const parElements = document.getElementsByClassName("paragraph");

// console.log(parElements[0])

parElements[0].style.color = "red";

// get the element by tag name (p

const parElementByTag = document.getElementsByTagName('p')
// where
// what
// possible causes of the error
console.log(parElementByTag)

document.title = "BTEC Training";


const sectionEl = document.getElementById("section")

// Part 02:
// create an html element from js:
// 1. create the element
const h2Element = document.createElement('h2');
// 2. append the element to the DOM tree
sectionEl.appendChild(h2Element);
// parent.appendChild("The element I want to append")

// add title inside h2

h2Element.textContent = "Testing Creating Element";

// create an img element  from js:

const imgElement = document.createElement("img");
sectionEl.appendChild(imgElement)


imgElement.src = "https://www.w3schools.com/images/mypagelogo32x32.png"
imgElement.alt = "Icon of a person"
// width height
imgElement.style.width = "300px"
imgElement.style.height = "300px"