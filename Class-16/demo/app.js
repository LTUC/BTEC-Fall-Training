'use strict';

// event listener
// 3 questions: where? what type? what should happen when the event occur?

const formEl = document.getElementById("form");
const cardEl = document.getElementById("weatherCard");
const bodyEl = document.getElementsByTagName('body')[0]


formEl.addEventListener("submit", handlerFunction)

// callback funtion
function handlerFunction(event) {
    event.preventDefault();
    // 1. read the user input
    const city = event.target.cityName.value; // city = "amman"
    // 2. send request to OpenWeather
    getWeatherData(city)
    // 3. render the weather info as card in html

}

// Single Responsiblity Principle
function getWeatherData(cityName) {
    const apiKey = "ee1542e6b50640acc0e024481c773615";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(url)
        .then(response => response.json())
        .then(weatherObj => {
            const cityObj = new Weather(weatherObj);
            cityObj.renderCard();
            cityObj.addBackground();
        })
        .catch(error => console.log(error))
}



function Weather(object) {
    this.temp = object.main.temp;
    this.description = object.weather[0].description;
    this.max_temp = object.main.temp_max;
    this.min_temp = object.main.temp_min;
    this.day = new Date();
    this.speed = object.wind.speed;
}

Weather.prototype.renderCard = function () {
    cardEl.textContent = "" // to clear the card section after each search
    // build the Card using DOM manipulation
    const pEl = document.createElement('p');
    cardEl.appendChild(pEl);
    pEl.textContent = `Temp is : ${this.temp}`;

    const pEl2 = document.createElement('p')
    cardEl.appendChild(pEl2);
    pEl2.textContent = `Today is ${this.description}`
}


Weather.prototype.addBackground = function () {
    // how to a background image from js
    bodyEl.style.backgroundImage = `url('./assets/${this.description}.jpg')`;
    bodyEl.style.backgroundPosition = "center";
    bodyEl.style.backgroundRepeat = "no-repeat";
    bodyEl.style.backgroundSize = "fill";
    
}

/*
background-position: center;
background-repeat: no-repeat;
background-size: cover;
*/