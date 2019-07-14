const mockBeer = require('../assets/mockBeer.json');

const getAllReviews = (req, res) => {
  const reviews = mockBeer.reduce((arr, beer) => {
    return [...arr, ...beer.reviews];
  }, []);
  res.send(reviews);
};

module.exports = {
  getAllReviews,
};