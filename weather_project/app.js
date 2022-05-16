const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')

});

app.post('/', function (req, res) {
  const city = req.body.cityName;
  const query = city;
  const apiKey = '432c4acc16a3767e61b5b3b281500a3e';
  const units = 'metric';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey +'&units=' + units;
  https.get(url, function (response){
    response.on('data', function (data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURl = 'https://openweathermap.org/img/wn/'+ icon + '@2x.png';

      res.write('<p>The weather is currently ' + weatherDescription + '</p>');
      res.write('<h1>The temperture in ' + city+' is ' + temp + ' degrees Celsius.</h1>');
      res.write('<img src='+imgURl + '>');
      res.send();
    });
  });
})



app.listen(3000, function (){

})
