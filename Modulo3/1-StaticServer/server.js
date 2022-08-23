const http = require('node:http')
const fs = require('node:fs').promises;

const port = 8080;
const server1 = http.createServer(function(req, response) {
  response.setHeader("Content-type", "text/html");
  fs.readFile('./static/pagina.html').then(file => {
    response.write(file);
    response.end(file);
  })
});
server1.listen(port);
 
http.createServer(function(req, response) {
  response.setHeader("Content-type", "audio/mpeg");
  fs.readFile('./static/17-Athletic.mp3').then(file => {
    response.write(file);
    response.end(file);
  })
}).listen(8081);

http.createServer(function(req, response) {
  response.setHeader("Content-type", "image/jpeg");
  fs.readFile('./static/foto.jpeg').then(file => {
    response.write(file);
    response.end(file);
  })
}).listen(8082);