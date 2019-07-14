const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 40001;

/**
 * MIDDLEWARES
 */
app.use(cors());
app.use(logger('tiny'));
app.use(helmet());
app.use(bodyParser.json());

/**
 * ROUTERS
 */
const beerRouter = require('./routes/beer');
const reviewRouter = require('./routes/review');
app.use('/api/v1', beerRouter);
app.use('/api/v1', reviewRouter);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`> Server Listening on ${port}`);
});