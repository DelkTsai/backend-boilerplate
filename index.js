/**
 * Created by youngwind on 16/1/22.
 * Hello World
 */

var http = require("http");
var fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) {
    responseCode = 200;
  }
  console.log(__dirname);
  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer(function (req, res) {
  var path = req.url.toLowerCase();
  console.log(path);
  switch (path) {
    case '/':
      serveStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case "/img/logo.png":
      serveStaticFile(res, '/public/logo.png', 'image/png');
      break;
    default :
      res.writeHead(400, {"Content-Type": "text/plain"});
      res.end("Not Found");
      break;
  }
}).listen(process.env.PORT || 5000);




