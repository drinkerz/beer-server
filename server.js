const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 40001;

const mockBeer = require('./mockBeer.json');
const mockReview = require('./mockReview.json');

app.use(cors());
app.use(logger('tiny'));
app.use(helmet());
app.use(bodyParser.json());

app.get('/api/v1/beers', (req, res) => {
  res.send(mockBeer);
});

app.get('/api/v1/reviews', (req, res) => {
  res.send(mockReview);
});

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`> Server Listening on ${port}`);
});