var express = require('express');



var app = express();

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
  if (err) {
    console.log(err);
  }
  res.render('index');
});

var port = process.env.PORT || 1337;

console.log('¿Donde? is listening on 1337');
app.listen(port);