"use strict";

// constructor
function Car(colorValue, typeValue, priceValue, isSoldValue) {
    this.color = colorValue;
    this.type = typeValue;
    this.price = priceValue;
    this.isSold = isSoldValue;
    console.log(this)
    allCars.push(this)
}

// car1 object from the constructor
let car1 = new Car("red", "BMW", 10000, false);
let car2 = new Car("blue", "Marcides", 20000, true);
console.log(car1)
console.log(car2)

let allCars = [];
// allCars.push(car1, car2)
console.log(allCars)