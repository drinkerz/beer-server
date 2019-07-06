const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 40001;

const mockBeer = require('./mockBeer.json');

app.use(cors());
app.use(logger('tiny'));
app.use(helmet());
app.use(bodyParser.json());

app.get('/api/v1/beers', (req, res) => {
  res.send(mockBeer);
});

app.get('/api/v1/beer/:name', (req, res) => {
  const name = req.params.name.replace(/-/g, ' ');
  const beer = mockBeer.filter(beer => beer.name.toLowerCase() === name)[0];
  res.send(beer);
})

app.get('/api/v1/reviews', (req, res) => {
  const reviews = mockBeer.reduce((arr, beer) => {
    return [...arr, ...beer.reviews];
  }, []);
  res.send(reviews);
});

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`> Server Listening on ${port}`);
});