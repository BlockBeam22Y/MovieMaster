const Movie = require('../models/Movie');

module.exports = {
  getMovies: async () => {
    const movies = Movie.find();
    return movies;
  },
  createMovie: async (movieData) => {
    const newMovie = await Movie.create(movieData);
    return newMovie; 
  }
};