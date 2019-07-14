const express = require('express');
const router = express.Router();

const {
  getAllBeers,
  getBeerByName,
} = require('../services/beer');

router.get('/beers', getAllBeers);
router.get('/beer/:name', getBeerByName);

module.exports = router;