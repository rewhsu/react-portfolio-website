var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 8001));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../public/index'))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
