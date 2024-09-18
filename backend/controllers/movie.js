//Taking Movie Model
const Movie = require('../models/Movie');
//Taking Genre Model
const Genre = require('../models/Genre');
//Taking Video Model
const Video = require('../models/Video');

//Import paging func
const paging = require('../utils/paging');

//Get Trending Controller
exports.getTrending = (req, res, next) => {
  //Get page query value
  const page = req.query.page ? Number(req.query.page) : 1;

  //Calling to get movie list
  const movies = Movie.all();

  //Check movies arr has  at least  one element
  if (movies.length > 0) {
    //Receiving  results, totalPages from paging func
    const { results, totalPages } = paging(page, movies, 'popularity', null);

    //Returning status 200 &  results arr, total_pages
    res
      .status(200)
      .json({ results: results, page: page, total_pages: totalPages });
  }
};

//Get Top-Rate Controller
exports.getTopRating = (req, res, next) => {
  //Get page query value
  const page = req.query.page ? Number(req.query.page) : 1;

  //Calling to get movies list
  const movies = Movie.all();

  //Check movies arr has  at least  one element
  if (movies.length > 0) {
    //Receiving  results, totalPages from paging func
    const { results, totalPages } = paging(page, movies, 'vote_average', null);

    //Returning status 200 &  results arr, total_pages
    res
      .status(200)
      .json({ results: results, page: page, total_pages: totalPages });
  }
};

//GET Genre Controller
exports.getGenre = (req, res, next) => {
  //Get media type query
  const mediaType = req.query.mediaType ? req.query.mediaType : '';

  //Get genre query value
  const genre = req.query.genre ? Number(req.query.genre) : null;
  //Get page query value
  const page = req.query.page ? Number(req.query.page) : 1;

  //Calling to get movies list
  const movies = Movie.all();

  //Calling to get genre list
  const genreList = Genre.all();
  let genre_name = '';
  //Check genreList is not empty
  if (genreList.length > 0) {
    //Find matching with query param id & get name field
    genre_name = genreList.find((item) => item.id === genre)?.name;
  }

  //Check if mediaType query exist
  if (mediaType) {
    const { results, totalPages } = paging(page, movies, null, {
      mediaType: mediaType,
    });
    //Returning media type  movie results
    return res.status(200).json({
      results: results,
      page: page,
      total_pages: totalPages,
    });
  }

  //Check if query param is empty
  if (!genre) {
    // status 400  & message
    return res.status(400).json({ message: 'Not found genre param' });
  }

  //Check movies arr has  at least  one element
  if (movies.length > 0) {
    //Receiving  results, totalPages,isNotFoundGenreId from paging func
    const { results, totalPages, isNotFoundGenreId } = paging(
      page,
      movies,
      null,
      {
        genreId: genre,
      }
    );
    //Case not found with that genreId
    if (isNotFoundGenreId) {
      return res.status(400).json({ message: 'Not found that genre id' });
    }

    //Returning status 200 &  results arr, total_pages
    res.status(200).json({
      results: results,
      page: page,
      total_pages: totalPages,
      genre_name: genre_name,
    });
  }
};

//POST Trailer Controller
exports.postTrailler = (req, res, next) => {
  //Get film_id from req body
  const filmId = req.body.film_id ? Number(req.body.film_id) : null;

  //Check filmId existing
  if (!filmId) {
    //Return  status 400 (bad request) & message
    return res.status(400).json({ message: 'Not found film_id param' });
  }

  //Calling to get video list
  const videoList = Video.all();

  //Initializing result video
  let resultVideo;

  //Check video
  if (videoList.length > 0) {
    //Check for matching with film_id
    const videoIdMatching = videoList.find((video) => video.id === filmId);

    //Check do not match => Not found video case
    if (!videoIdMatching) {
      return res.status(404).json({ message: 'Not found video' });
    }

    //Result arr filter with official =true and site =youbetue,
    let resultVideoArr = videoIdMatching.videos.filter(
      (video) => video?.official && video?.site === 'YouTube'
    );

    //Video type  is trailer precedence, otherwise teaser
    //Check for existing trailer video
    const existingTrailer = resultVideoArr.find(
      (video) => video?.type === 'Trailer'
    );
    if (existingTrailer) {
      //Filtering by type ==='Trailer'
      resultVideoArr = resultVideoArr.filter(
        (video) => video?.type === 'Trailer'
      );
    } else {
      //Filtering by type ==='Teaser'
      resultVideoArr = resultVideoArr.filter(
        (video) => video?.type === 'Teaser'
      );
    }

    //result video with  the nearest sorting published_at
    resultVideo = resultVideoArr.sort((a, b) => {
      new Date(b.published_at).now - new Date(a.published_at).now;
    })[0];

    // return  status 200  and result video
    return res.status(200).json({ result: resultVideo });
  }
};

//POST Search Controller
exports.postSearchMovie = (req, res, next) => {
  //Get keyword from req body object
  const keyword = req.body.keyword ? req.body.keyword : '';

  //Get search options object
  const searchOptions = req.body.searchOpts ? req.body.searchOpts : {};
  //Check keyword existing
  if (!keyword) {
    //Return  status 400 (bad request) & message
    return res.status(400).json({ message: 'Not found keyword param' });
  }

  //Get page query value
  const page = req.query.page ? Number(req.query.page) : 1;

  //Calling to get movies list
  const movies = Movie.all();

  //Check movies arr has  at least  one element
  if (movies.length > 0) {
    //Receiving  results, totalPages from paging func, keyword for searching
    //searchOptions for adding others type of searching
    const { results, totalPages } = paging(page, movies, null, {
      keyword: keyword,
      searchOptions: searchOptions,
    });

    //Returning status 200 &  results arr, total_pages
    res
      .status(200)
      .json({ results: results, page: page, total_pages: totalPages });
  }
};
