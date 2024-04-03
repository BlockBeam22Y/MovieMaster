const Movie = require('../models/Movie');

module.exports = {
  getMovies: async () => {
    return Movie.find();
  },
};