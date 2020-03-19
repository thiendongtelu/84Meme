const express = require('express');

const imageRouter = require('./router/image-router');



require('./db/mongoose');

const app = express();

app.use(express.json());

app.use(imageRouter)



app.get('/', (req, res) => {
  res.send('hello');
});


app.get('/api/helloworld', (req, res) => {
  res.json({ sayHi: 'hello from server, nice to meet you!' })
})


app.listen(5000, () => {
  console.log('App listening on port 5000')
});