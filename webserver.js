var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var whitelist = ['http://localhost:3000', 'http://localhost:8090'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

//app.options('*', cors());

app.get('/dist/bundle.js', cors(corsOptions), function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(3000);