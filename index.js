const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/img', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.get('/api/helloworld', (req, res) => {
  res.json({ sayHi: 'hello from server, nice to meet you!' })
})


app.listen(5000, () => {
  console.log('App listening on port 5000')
});