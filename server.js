var express = require('express');
var bodyParser = require('body-parser');
var util = require('./utilities.js');


var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});

app.post('/query', util.query);

var port = process.env.PORT || 1337;

console.log('¿Donde? is listening on 1337');
app.listen(port);