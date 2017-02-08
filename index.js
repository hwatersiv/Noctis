var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8080));

var staticPath = path.resolve(__dirname, 'public');



app.get("/api/inventory", function (req, res) {
  res.json([
    {
      name:'Beanie',
      id: 1,
      description: 'High Quality Wool. Handmade.',
      image: 'http://www.fillmurray.com/300/300',
      price: '$40.00',
    },
    {
      name:'Scarf',
      id:2,
      description: 'High Quality Wool. Handmade',
      image: 'http://www.fillmurray.com/300/300',
      price: '$30.00',
    },
    {
      name:'Arm Warmers',
      id:3,
      description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
      image: 'http://www.fillmurray.com/300/300',
      price: '$20.00',
    },
    {
      name:'Something Else Awesome',
      id:4,
      description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
      image: 'http://www.fillmurray.com/300/300',
      price: '$20.00',
    },
  ])
})

app.use("/", express.static(staticPath));
app.use("/store", express.static(staticPath));
app.use("/cart", express.static(staticPath));
app.use("/contact", express.static(staticPath));

app.listen(app.get('port'), function() {
  console.log('Noctis on ', app.get('port'));
});