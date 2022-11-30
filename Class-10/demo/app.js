'use strict';
// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
//  There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold
// - hot 
// - price 

// TODO: dynamically generate drink objects using form data

function Drink(name, ingredients, imgurl, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imagePath = imgurl;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = 0;
    allDriks.push(this);
    // console.log(allDriks)
}
let allDriks = [];
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

// create new objects (new instances ) ..
//function Drink(name, ingredients, imgurl, isCold, isHot) 
const espresso = new Drink('espresso', ['espresso'],'images/espresso.png',false, true);
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'],'images/latte.png', true, true);
const mocha = new Drink('mocha', ['espresso milk', 'whipped cream', 'chocolate syrub'], 'images/mocha.png',true, true);
const turkish = new Drink('Turkish', ['coffee'], 'images/mocha.png', false, true);
// call the functions

// espresso.calculatePrice(1, 5);
// espresso.renderDrinks();

// latte.calculatePrice(2, 6);
// latte.renderDrinks();

// mocha.calculatePrice(3, 4);
// mocha.renderDrinks();
//            [0,       1,      2,      3  ];
// allDriks = [espresso,latte,mocha,turkish];

for (let j = 0; j < allDriks.length; j++){
    allDriks[j].calculatePrice(1, 5);
    allDriks[j].renderDrinks();

}

// where ? form , type of event : submit , action (function) addNewDrink
// element.addEventListener(event, function);

let htmlForm = document.getElementById('drinkForm');
htmlForm.addEventListener("submit", addNewDrink)

function addNewDrink(event) {
    event.preventDefault();
    console.log(event)
    // event object : will tell us info about the event that we used 
    let name = event.target.name.value;
    let imgurl = event.target.imgurl.value;
    let ingredients = event.target.ingredients.value.split(',');
    let isCold = event.target.isCold.value;
    let isHot = event.target.isHot.value;

    let newDrink = new Drink(name, ingredients, imgurl, isCold, isHot);
    newDrink.calculatePrice(1, 3);
    newDrink.renderDrinks();

}
