var express = require('express');
var bodyParser = require('body-parser');



var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// app.get('/', function(req, res) {
//   res.render('index');
// });

var port = process.env.PORT || 1337;

console.log('¿Donde? is listening on 1337');
app.listen(port);