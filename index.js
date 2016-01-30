/**
 * Created by youngwind on 16/1/22.
 * Hello World
 */

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var credentials = require('./credentials.js');
app.use(cookieParser(credentials.cookieSecret));
app.use(require('express-session')());

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

var user = [{
  "id": "1",
  "name": "shaofeng"
}, {
  "id": "2",
  "name": "node"
}];
app.get('/user', function (req, res) {
  console.log(req.cookies);
  req.session.userName = 'shaofeng';
  var color = req.session.color || 'dark';
  res.cookie('monster', 'nom nom', {signed: true});
  res.json(user);
});

app.use(function (req, res, next) {
  res.type('text/plain');
  res.status(404);
  res.send('404 not-found');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ';Press Ctrl-C to terminate.');
});



