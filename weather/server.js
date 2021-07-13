const express = require('express')

const os = require('os')
const app = express()
const fetch = require("node-fetch");
const { request } = require('https');
 require('dotenv').config()


//${API_key}
const city_name= 'haldwani'

const API_key = process.env.API_KEY



const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
console.log(url);

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