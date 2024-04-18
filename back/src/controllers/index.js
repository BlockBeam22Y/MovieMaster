const moviesService = require('../services/moviesService');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getMovies: catchAsync(async (req, res) => {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  }),
  createMovie: catchAsync(async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
    res.status(201).json({
      message: 'Movie added successfully'
    });
  })
};