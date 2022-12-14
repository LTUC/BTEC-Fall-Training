'use strict';

function Drink(name, ingredients, imgurl, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imagePath = imgurl;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = 0;
    allDrinks.push(this);
}
let allDrinks = [];
// this function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// prototype to calculate a random price for each drink 
Drink.prototype.calculatePrice = function (min, max) {
    this.price = getRandomNumber(min, max);
};
// function Drink(name, ingredients, imgurl, isCold, isHot) {
// to render the new drinks using DOM way
Drink.prototype.renderDrinks = function () {
    // parent div
    const bigDiv = document.getElementById('drinks');
    // child div    
    const divEle = document.createElement('div');
    bigDiv.appendChild(divEle);

    const h4 = document.createElement('h4');
    divEle.appendChild(h4);
    h4.textContent = this.name;

    // hot or cold / both of them (hot and cold)
    const p = document.createElement('p');
    divEle.appendChild(p);
    if (this.isCold && this.isHot) {
        // interpolation way

        p.textContent = `${this.name} is available hot and cold `

    } else if (this.isHot) {
        p.textContent = `${this.name} is available only hot `
    } else {
        p.textContent = `${this.name} is available only cold `
    }
    // render the ingredients [coffe , milk , flavour]
    const ul = document.createElement('ul');
    divEle.appendChild(ul);
    for (let x = 0; x < this.ingredients.length; x++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.ingredients[x];

        // - coffee
        // - milk
        // - flavour 

    }

    const p2 = document.createElement('p');
    divEle.appendChild(p2);
    p2.textContent = `${this.price} JD`;

    const img = document.createElement('img');
    divEle.appendChild(img);
    img.setAttribute('src', this.imagePath);


}

const espresso = new Drink('espresso', ['espresso'], 'images/espresso.png', false, true);
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'], 'images/latte.png', true, true);
const mocha = new Drink('mocha', ['espresso milk', 'whipped cream', 'chocolate syrub'], 'images/mocha.png', true, true);
const turkish = new Drink('Turkish', ['coffee'], 'images/mocha.png', false, true);


for (let j = 0; j < allDrinks.length; j++) {
    allDrinks[j].calculatePrice(1, 5);
    allDrinks[j].renderDrinks();

}


let htmlForm = document.getElementById('drinkForm');
htmlForm.addEventListener("submit", addNewDrink)

function addNewDrink(event) {
    event.preventDefault()
    let name = event.target.name.value;
    let imgurl = event.target.imgurl.value;
    let ingredients = event.target.ingredients.value.split(',');
    let isCold = event.target.isCold.value;
    let isHot = event.target.isHot.value;

    let newDrink = new Drink(name, ingredients, imgurl, isCold, isHot);
    newDrink.calculatePrice(1, 3);
    newDrink.renderDrinks();
    saveToLocalStorage()
}

// local storage:
// 1. where do I need to call this function
// 2. allDrinks in an array, and setItem methos, takes a string 
function saveToLocalStorage() {
    const stringifiedArr = JSON.stringify(allDrinks)
    console.log("DId the array converted to string?", stringifiedArr);
    localStorage.setItem("Drinks", stringifiesArr)

}

// 1. where do I need to call this function? 
// 2 . How to dispaly data I get from ls as drinks on my page
// 3. convert dtring to array of objects
// 4. loop through the array to render each object as a drink
function getFromLocalStorage() {

    let drinksStr = localStorage.getItem("Drinks")
    const drinksArr = JSON.parse(drinksStr)
    console.log(1111, drinksArr)
    console.log(typeof drinksArr)
    if (drinksArr !== null) {
        for (let i = allDrinks.length; i < drinksArr.length; i++) {
            const temp = new Drink(drinksArr[i].name, drinksArr[i].ingredients, drinksArr[i].imagePath, drinksArr[i].isCold, drinksArr[i].isHot)
            temp.renderDrinks();
        }
    }

    console.log(2222, allDrinks)
}


getFromLocalStorage();