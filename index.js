var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

var staticPath = path.resolve(__dirname, 'public');

app.use(express.static(staticPath));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Noctis on ', app.get('port'));
});