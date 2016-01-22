/**
 * Created by youngwind on 16/1/22.
 * Hello World
 */

var http = require("http");
http.createServer(function (req, res) {
  var path = req.url.toLowerCase();
  console.log(path);
  switch (path){
    case '/':
      res.writeHead(200, {"Content-Type":"text/plain"});
      res.end("HomePage");
      break;
    case '/about':
      res.writeHead(200, {"Content-Type":"text/plain"});
      res.end("About");
      break;
    default :
      res.writeHead(400, {"Content-Type":"text/plain"});
      res.end("Not Found");
      break;
  }
}).listen(process.env.PORT || 5000);




