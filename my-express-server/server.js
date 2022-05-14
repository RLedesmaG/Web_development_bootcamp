const express = require ('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1> Hello, World!</h1>');
})

app.get('/about', function (req, res){
  res.send('This webpage was made by me');
});

app.get('/contact', function (req, res){
  res.send('Roberto Ledesma');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
