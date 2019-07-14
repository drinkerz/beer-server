const mockBeer = require('../assets/mockBeer.json');

const getAllBeers = (req, res) => {
  res.send(mockBeer);
};

const getBeerByName = (req, res) => {
  const name = req.params.name.replace(/-/g, ' ');
  const beer = mockBeer.filter(beer => beer.name.toLowerCase() === name)[0];
  res.send(beer);
};

module.exports = {
  getAllBeers,
  getBeerByName,
};