const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});

const io = require('socket.io')(httpServer);

httpServer.listen(3000, () => {
  console.log('go to http://localhost:3000');
});

io.on('connect', socket => {
  console.log('server: connect', socket.id);

  socket.on('disconnect', data => {
    console.log('server: disconnect', data);
  })
  // let counter = 0;
  // setInterval(() => {
  //   socket.emit('hello', ++counter);
  // }, 1000);
  //
  // socket.on('hey', data => {
  //   console.log('hey', data);
  // });
});
