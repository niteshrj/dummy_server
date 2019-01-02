const express = require('express');
const http = require('http');

const app = express();

app.get('/',(req,res) => {
  res.send('whats up ?');
})

const server = http.createServer(app);

server.listen(443, ()=> console.log('Server is listening at port 443'));
