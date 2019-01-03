const express = require('express');
const http = require('http');
const connection = require('./connection').connection;

const app = express();

app.get('/put/:name/:score',(req,res) => {
  let name = req.params.name;
  let score = req.params.score;
  let values = [[name, score]];

  connection.query('INSERT INTO developers (name, score) VALUES ?', [values], function (err) {
    if(err) {
      res.send('Error saving your information');
    }
  });

  res.send('Successfully saved your information');
})


app.get('/get/:name',(req,res) => {
  let name = req.params.name;

  connection.query("SELECT * FROM developers WHERE name=?", [name], function (err, result) {
    res.send(result);
  });

  // res.send('whats up');
})

const server = http.createServer(app);

server.listen(8000, ()=> console.log('Server is listening at port 8000'));
