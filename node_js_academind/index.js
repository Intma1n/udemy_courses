const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(
      '<html lang="en"><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message" id=""><button type="submit">Send</button></form></body></html>'
    );
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(
    '<html lang="en"><head><title>My First Page</title></head><body><h1>Hello from NodeJS server!</h1></body></html>'
  );
  res.end();
});

server.listen(3001);
