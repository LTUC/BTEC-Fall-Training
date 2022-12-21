'use strict'
 let car01 ={
    color: "red",
    type: "BM",
    price: 10000,
    isSold: false,
    //methods:
    printInfo:function(){
        console.log("printing the car info")
        
      //this
      console.log(this)
      let info = "this car has the color of "+ this.color;
      console.log(info)
    },
    //driving methode
    drive:function(){
console.log("Driving")
    }

 }

 let car02 ={
    color: "blue",
    type: "BMw",
    price: 30000,
    isSold: true,
    //methods:
    printInfo:function(){
        console.log("printing the car info")
        
      //this
      console.log(this)
      let info = "this car has the color of "+ this.color;
      console.log(info)
    },
    //driving methode
    drive:function(){
console.log("Driving")
    }

 }


//properties in objects:
console.log(car01.color)
//baracket notation:
 console.log(car01["type"])
//array
 let carArr =["red","Bw", 1000, false]
 console.log(carArr)
 console.log(car01)
//add new property
 car01.speed ="fast"
 console.log(car01)

 //ubdate property
 car01.price=50000;
 console.log(car01)

 //delete property
 delete car01.price
 console.table(car01)

 //looping: for-in
 for( let key in car01 ){
    // console.log(key)
    // console.log(car01[key])
    //concatanation
    let output ="the value of"+key+"is"+car01[key]
    console.log(output)
 }
car01.printInfo()
car02.printInfo()
