const http = require('node:http');

let url = 'http://localhost:666';

http.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Ha ocurrido un error. Code: ${res.statusCode}`);
    res.resume();
    return;
  }
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log(data);
  });
});
  