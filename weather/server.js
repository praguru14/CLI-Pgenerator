const express = require('express')
const process = require('process')
const os = require('os')
const app = express()
const fetch = require("node-fetch");
const { request } = require('https');



const city_name = process.argv[2]
console.log(city_name);
const API_key = "c696cafc9907d2abdf758afa97b951fc"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`


app.get('/app' ,async (req , res)=>{

    const weather = await fetch(url);
    let response = await weather.json();
const answer = response.main.temp
console.log(answer);
    
    res.json({
        temprature:answer

    })
    

})

app.listen(3000,()=>{
    console.log("listening");
})

//  api.openweathermap.org/data/2.5/weather?q=haldwani&appid=c696cafc9907d2abdf758afa97b951fc