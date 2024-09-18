//express
const express = require('express');

//Movie Controller
const movieController = require('../controllers/movie');

//Check Auth Token
const checkAuthToken = require('../middlewares/auth');

//router
const router = express.Router();

//@Route-GET  /api/movies/trending
router.get('/trending', checkAuthToken, movieController.getTrending);

//@Route-GET /api/movies/top-rate
router.get('/top-rate', checkAuthToken, movieController.getTopRating);

//@Route-GET /api/movies/discover
router.get('/discover', checkAuthToken, movieController.getGenre);

//@Route-POST /api/movies/video
router.post('/video', checkAuthToken, movieController.postTrailler);

//@Route-POST /api/movies/search
router.post('/search', checkAuthToken, movieController.postSearchMovie);

//export router
module.exports = router;
