// Create web server
// Create a server that will return the comments
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(8080);