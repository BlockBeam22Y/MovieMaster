const { Router } = require('express');
const { getMovies, createMovie } = require('../controllers');
const validateData = require('../middlewares/validateData');

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', validateData, createMovie);

module.exports = router;