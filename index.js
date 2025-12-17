// axios untuk http request
// dotenv untuk API keys
let fs = require('fs')

const axios = require('axios');
require('dotenv').config()

let apiKey = process.env.WEATHER_API_KEY
let kota = process.argv[2] || "Palembang"

let url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric`

axios.get(url)
.then(response => {
    const data = response.data;
    console.log(`\n  Cuaca di ${data.name}, ${data.sys.country}`);
    console.log(`  Suhu: ${data.main.temp}°C`);
    console.log(`  Kondisi: ${data.weather[0].description}`);
    console.log(`  Angin: ${data.wind.speed} m/s\n`);
})
.catch(error => {
    console.log("Error tai:", error.message);
});




