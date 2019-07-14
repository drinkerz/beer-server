const express = require('express');
const router = express.Router();

const {
  getAllReviews,
} = require('../services/review');

router.get('/reviews', getAllReviews);

module.exports = router;