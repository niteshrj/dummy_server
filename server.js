const express = require('express');
const http = require('http');

const app = express();

app.get('/',(req, res) => {
  console.log('whats up ?')
  res.send('hello nitesh');
})

const server = http.createServer(app);

server.listen(8000, ()=> console.log('Server is listening at port 8000'));
