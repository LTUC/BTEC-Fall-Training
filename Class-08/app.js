'use strict';

const allDrinks = [];
let count = 0
const menuSection = document.getElementById("menu");

function Drink(name, ingredients, image, isCold, isHot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    allDrinks.push(this);
    // allDrinks[count].printMenu()
    // count++;
}

// method to print a  drink
Drink.prototype.printMenu = function () {
    console.log("Our menu", this.name)
    // add title of the drink:
    const h3El = document.createElement("h3"); // h3El = <h3></h3>
    menuSection.appendChild(h3El); // <section id="menu"> <h3></h3> </section>
    h3El.textContent = this.name //<section id="menu"> <h3> name of the drink</h3> </section>
}

// instantation .// create new instance => instance = object
const mocha = new Drink('mocha', [], "./assets/mocha.png", false, true, 2)
const latte = new Drink("latte", ["milk", "sugar", "water", "coffee"], "./assets/latte.png", true, true, 3)

console.log(allDrinks)

// mocha.printMenu()
// latte.printMenu()

// print all drinks
for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].printMenu();
}
