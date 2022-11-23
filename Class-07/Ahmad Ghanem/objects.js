"use strict";

let arrOfCar = ["red", "BMW", 10000, false];

let car1 = {
    color: "black",
    type: "BMW",
    price: 15000,
    isSold: "fast",
    // method:
    printInfo: function () {
        // This
        console.table(this);

        console.log("Printing the car info");
        let info = "This car has the color of " + this.color;
        console.log(info);
    },
    // driving methode
    drive: function () {
        console.log("Driving");
    },
};

console.log(car1.color);

// bracket notation
console.log(car1["type"]);

console.log(car1);

// How to add a new property to an object:
car1.speed = "fast";
console.log(car1);

// How to update a value of a property to an object:
car1.price = 12000;
console.log(car1);

// How to delete a property to an object:
delete car1.isSold;
// delete car1["isSold"];

console.table(car1);

// looping an object : for - in
// key => i
for (let key in car1) {
    console.log(key);
    console.log(car1[key]);
    // The value of color is red
    // concatanation
    let output = "The value of " + key + " is " + car1[key];
    console.log(output);
}

// methods
car1.printInfo();

car1.drive()