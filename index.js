/**
 * Created by youngwind on 16/1/22.
 * Hello World
 */

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

// 定制404页面
app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Meadowalrt Travel');
});

app.get('/about', function (req, res) {
  res.type('text/plain');
  res.send('About');
});

app.use(function (req, res, next) {
  res.type('text/plain');
  res.status(404);
  res.send('404 not-found');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ';Press Ctrl-C to terminate.');
});



