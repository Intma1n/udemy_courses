const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(
      '<html lang="en">' +
        '<head>' +
        '<title>Task</title>' +
        '</head>' +
        '<body>' +
        '<h1>Hello!</h1>' +
        '<form action="/create-user" method="POST">' +
        '<input type="text" name="username" >' +
        '<button type="submit">Create user</button>' +
        '</form>' +
        '</body>' +
        '</html>'
    );
    return res.end();
  }
  if (url === '/users') {
    res.write(
      '<html lang="en">' +
        '<body>' +
        '<ul><li>User 1</li></ul>' +
        '</body>' +
        '</html>'
    );
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(
    '<html lang="en"><head><title>My First Page</title></head><body><h1>Hello from NodeJS server!</h1></body></html>'
  );
  res.end();
});

server.listen(3001);
