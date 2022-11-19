'use strict';

let carArr = ["red", "BMW", 10000, false];

let car01 = {
    color: "red", // property
    type: "BMW",
    price: 10000,
    isSold: false,
    // methods:
    printInfo: function () {
        // this
        // console.table(this)
        console.log("Printing the car info")
        let info = "This car has the color of " + this.color;
        console.log(info)
    },
    // driving method:
    drive: function () {
        console.log("Driving")
    }
}

let car02 = {
    color: "blue",
    type: "BMW",
    price: 3000,
    isSold: true,
    // methods:
    printInfo: function () {
        // this
        // console.table(this)
        console.log("Printing the car info")
        let info = "This car has the color of " + this.color;
        console.log(info)
    },
    // driving method:
    drive: function () {
        console.log("Driving")
    }
}

// Properties in Objects:
// I want to check a value of a property
// check the color of car01
// dot notation
// console.log(car01.color)
// baracket notation:
// console.log(car01["type"])

// methods:
car01.printInfo()
car01.drive()

// how to add a new property to an object:
car01.speed = "fast"
// how to update a value of a property:
car01.price = 5000;



// delete a property:
delete car01.price


console.table(car01)

// looping an object: for - in
// key => i 
for (let key in car01) {
    // console.log(key)
    // console.log(car01[key])
    // the value of color is red
    // concatanation 
    let output = "the value of " + key + " is " + car01[key]
    // console.log(output)
}