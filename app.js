var express = require('express');
var path = require('path');
var app = express();

var staticPath = path.resolve(__dirname, 'public');

app.use(express.static(staticPath));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3030, function () {
  console.log('Noctis 80!');
});