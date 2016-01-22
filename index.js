/**
 * Created by youngwind on 16/1/22.
 * Hello World
 */

var http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World!");
}).listen(3333);




