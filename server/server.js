var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 8001));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/sample', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/rindex.html'))
});

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
