let request = require('request');
const process = require('dotenv').config()

let apiKey = 'c696cafc9907d2abdf758afa97b951fc';
let city = 'haldwani';
let url = `http://api.openweathermap.org/data/2.5/weather?q=haldwani&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    // let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    const message = weather.main.temp
    const cToFahr = (message - 32) * 5 / 9;
    console.log(body);
    console.log(cToFahr);
  }
});