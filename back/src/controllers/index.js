const moviesService = require('../services/moviesService');

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({
        error: 'Failed to fetch movies',
      });
    }
  },
};