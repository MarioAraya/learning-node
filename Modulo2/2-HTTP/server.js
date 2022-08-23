var http = require("node:http");
var fs = require("node:fs").promises;

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "audio/mpeg");
    const file = fs.readFile("./cancion.mp3").then((file) => {
      res.write(file);
      res.end(file);
    });
  })
  .listen(444);

http
  .createServer(function (req, res) {
    res.setHeader("Content-type", "image/jpeg");
    const file = fs.readFile("./foto.jpeg").then((file) => {
      res.write(file);
      res.end(file);
    });
  })
  .listen(555);

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<html><body><h1 style="background:red">This is HTML</h1></body></html>`
    );
    res.end();
  })
  .listen(666);
