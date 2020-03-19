const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({
  fileFilter(req, file, callback) {
    !file.originalname.match(/\.(jpg|jpeg|png|txt)$/)
      ? callback(new Error('Only jpg, jpeg, png file'))
      : callback(undefined, true);
  }
})

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/img', upload.single('image'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
  const options = {
    'method': 'Post',
    'url': "https://api.imgbb.com/1/upload?key=430f22ae6e75ba471e67081eec99d78b",
    'header': {},
    formData: {
      'image': {
        'value': buffer,
        'options': {
          'filename': 'Thien',
          'contentType': null
        }
      }
    }
  };
  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body))
    res.send(req.body);
  })

  // console.log(req.file)
})

app.get('/api/helloworld', (req, res) => {
  
  res.json({ sayHi: 'hello from server, nice to meet you!' })
})


app.listen(5000, () => {
  console.log('App listening on port 5000')
});