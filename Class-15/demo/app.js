'use strict';


// fetch().then().then()

// fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=ee1542e6b50640acc0e024481c773615')
//     .then((response) => response.json())
//     .then((weatherObj) => console.log(weatherObj));

// fetch().then().catch()
// REST API // API methods: GET POST PUT DELETE
fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=ee1542e6b50640acc0e024481c773615')
    .then(response => {
        console.log("Promise was resolved", response)
        return response.json()
    }).then((object) => {
        console.log("This is the result of json method")
        console.log("before cleaning",object)
        const weatherObject = new Weather(object)
        console.log("After cleaning", weatherObject)
        
    }).catch(error => {
        console.log("Promise was rejected", error)
    })


console.log("After the fetch method")


// cleaning data
/*
temp: object.main.temp
description : object.weather[0].description
max temp  : object.main.temp_max
min temp  : object.main.temp_min
day:  new Date()
wind speed: object.wind.speed
*/

function Weather(object){
    this.temp = object.main.temp;
    this.description =  object.weather[0].description;
    this.max_temp = object.main.temp_max;
    this.min_temp = object.main.temp_min;
    this.day = new Date();
    this.speed = object.wind.speed;
}














// anaymous function:
const test = function () {

}
// arrow function: just another way of writting functions ES6

const testArrow = () => {

}
