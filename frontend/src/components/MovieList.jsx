import React, { Fragment, useState } from 'react';

import classes from './MovieList.module.css';
import MovieDetail from './MovieDetail';

const MovieList = ({ results }) => {
  //Show movie detail
  const [showTrendingMovieDetail, setShowTrendingMovieDetail] = useState(false);
  const [showTopRatedMovieDetail, setShowTopRatedMovieDetail] = useState(false);
  const [showActionMovieDetail, setShowActionMovieDetail] = useState(false);
  const [showComedyMovieDetail, setShowComedyMovieDetail] = useState(false);
  const [showHorrorMovieDetail, setShowHorrorMovieDetail] = useState(false);
  const [showRomanceMovieDetail, setShowRomanceMovieDetail] = useState(false);
  const [showDocumentaryMovieDetail, setShowDocumentaryMovieDetail] =
    useState(false);
  //Current movie
  const [currentTrendingMovie, setCurrentTrendingMovie] = useState(null);
  const [currentTopRatedMovie, setCurrentTopRatedMovie] = useState(null);
  const [currentActionMovie, setCurrentActionMovie] = useState(null);
  const [currentComedyMovie, setCurrentComedyMovie] = useState(null);
  const [currentHorrorMovie, setCurrentHorrorMovie] = useState(null);
  const [currentRomanceMovie, setCurrentRomanceMovie] = useState(null);
  const [currentDocumentaryMovie, setCurrentDocumentaryMovie] = useState(null);

  //Click trending image handler
  const clickTrendingImageHandler = (movie) => {
    //Handle  click trending movie image again
    if (currentTrendingMovie?.id === movie?.id) {
      setShowTrendingMovieDetail((prevState) => !prevState);
      setCurrentTrendingMovie(null);
    } else {
      //set show trending movie
      setShowTrendingMovieDetail(true);
      //set current  movie
      setCurrentTrendingMovie(movie);
    }
  };

  //Click top rated image handler
  const clickTopRatedImageHandler = (movie) => {
    //Handle  click top rated movie image again
    if (currentTopRatedMovie?.id === movie?.id) {
      setShowTopRatedMovieDetail((prevState) => !prevState);
      setCurrentTopRatedMovie(null);
    } else {
      //set show TopRated movie
      setShowTopRatedMovieDetail(true);
      //set current  movie
      setCurrentTopRatedMovie(movie);
    }
  };

  //Click action image handler
  const clickActionImageHandler = (movie) => {
    //Handle  click action movie image again
    if (currentActionMovie?.id === movie?.id) {
      setShowActionMovieDetail((prevState) => !prevState);
      setCurrentActionMovie(null);
    } else {
      //set show Action movie
      setShowActionMovieDetail(true);
      //set current  movie
      setCurrentActionMovie(movie);
    }
  };

  //Click comedy image handler
  const clickComedyImageHandler = (movie) => {
    //Handle  click comedy movie image again
    if (currentComedyMovie?.id === movie?.id) {
      setShowComedyMovieDetail((prevState) => !prevState);
      setCurrentComedyMovie(null);
    } else {
      //set show Comedy movie
      setShowComedyMovieDetail(true);
      //set current  movie
      setCurrentComedyMovie(movie);
    }
  };

  //Click horror image handler
  const clickHorrorImageHandler = (movie) => {
    //Handle  click horror movie image again
    if (currentHorrorMovie?.id === movie?.id) {
      setShowHorrorMovieDetail((prevState) => !prevState);
      setCurrentHorrorMovie(null);
    } else {
      //set show Horror movie
      setShowHorrorMovieDetail(true);
      //set current  movie
      setCurrentHorrorMovie(movie);
    }
  };

  //Click romance image handler
  const clickRomanceImageHandler = (movie) => {
    //Handle  click romance movie image again
    if (currentRomanceMovie?.id === movie?.id) {
      setShowRomanceMovieDetail((prevState) => !prevState);
      setCurrentRomanceMovie(null);
    } else {
      //set show Romance movie
      setShowRomanceMovieDetail(true);
      //set current  movie
      setCurrentRomanceMovie(movie);
    }
  };

  //Click documentary image handler
  const clickDocumentaryImageHandler = (movie) => {
    //Handle  click documentary movie image again
    if (currentDocumentaryMovie?.id === movie?.id) {
      setShowDocumentaryMovieDetail((prevState) => !prevState);
      setCurrentDocumentaryMovie(null);
    } else {
      //set show Documentary movie
      setShowDocumentaryMovieDetail(true);
      //set current  movie
      setCurrentDocumentaryMovie(movie);
    }
  };

  return (
    <Fragment>
      {results && results.documentaries.length > 0 && (
        <div className={classes['movie-list']}>
          <div className={classes['original-wrapper']}>
            <div className={classes.originals}>
              {/*Map through and render original movies */}
              {results.originals.map((originalMovie) => (
                <div key={originalMovie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${originalMovie?.poster_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
          </div>

          {/*Render trending movies*/}
          <div className={classes.other}>
            <h3>Xu hướng</h3>
            <div className={classes.wrapper}>
              {/*Map through  trending movies*/}
              {results.trending.map((trendingMovie) => (
                <div key={trendingMovie.id}>
                  <img
                    onClick={() => clickTrendingImageHandler(trendingMovie)}
                    src={`https://image.tmdb.org/t/p/original/${trendingMovie?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render trending movie detail component*/}
            {showTrendingMovieDetail && currentTrendingMovie && (
              <MovieDetail movie={currentTrendingMovie} />
            )}
          </div>
          {/*Render top rated movies*/}
          <div className={classes.other}>
            <h3>Xếp hạng cao</h3>
            <div className={classes.wrapper}>
              {/*Map through  top rated movies*/}
              {results.topRated.map((topMovie) => (
                <div key={topMovie.id}>
                  <img
                    onClick={() => clickTopRatedImageHandler(topMovie)}
                    src={`https://image.tmdb.org/t/p/original/${topMovie?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render top rated  movie detail component*/}
            {showTopRatedMovieDetail && currentTopRatedMovie && (
              <MovieDetail movie={currentTopRatedMovie} />
            )}
          </div>
          {/*Render action movies*/}
          <div className={classes.other}>
            <h3>Hành động</h3>
            <div className={classes.wrapper}>
              {/*Map through  action movies*/}
              {results.actions.map((action) => (
                <div key={action.id}>
                  <img
                    onClick={() => clickActionImageHandler(action)}
                    src={`https://image.tmdb.org/t/p/original/${action?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render action movie detail component*/}
            {showActionMovieDetail && currentActionMovie && (
              <MovieDetail movie={currentActionMovie} />
            )}
          </div>
          {/*Render comedy movies*/}
          <div className={classes.other}>
            <h3>Hài</h3>
            <div className={classes.wrapper}>
              {/*Map through  comedy movies*/}
              {results.comedy.map((comedyMovie) => (
                <div key={comedyMovie.id}>
                  <img
                    onClick={() => clickComedyImageHandler(comedyMovie)}
                    src={`https://image.tmdb.org/t/p/original/${comedyMovie?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render comedy movie detail component*/}
            {showComedyMovieDetail && currentComedyMovie && (
              <MovieDetail movie={currentComedyMovie} />
            )}
          </div>
          {/*Render horror movies*/}
          <div className={classes.other}>
            <h3>Kinh dị</h3>
            <div className={classes.wrapper}>
              {/*Map through  horror movies*/}
              {results.horror.map((horrorMovie) => (
                <div key={horrorMovie.id}>
                  <img
                    onClick={() => clickHorrorImageHandler(horrorMovie)}
                    src={`https://image.tmdb.org/t/p/original/${horrorMovie?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render horror movie detail component*/}
            {showHorrorMovieDetail && currentHorrorMovie && (
              <MovieDetail movie={currentHorrorMovie} />
            )}
          </div>
          {/*Render romance movies*/}
          <div className={classes.other}>
            <h3>Lãng mạn</h3>
            <div className={classes.wrapper}>
              {/*Map through  romance movies*/}
              {results.romance.map((romanceMovie) => (
                <div key={romanceMovie.id}>
                  <img
                    onClick={() => clickRomanceImageHandler(romanceMovie)}
                    src={`https://image.tmdb.org/t/p/original/${romanceMovie?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render romance movie detail component*/}
            {showRomanceMovieDetail && currentRomanceMovie && (
              <MovieDetail movie={currentRomanceMovie} />
            )}
          </div>
          {/*Render documentary movies*/}
          <div className={classes.other}>
            <h3>Tài liệu</h3>
            <div className={classes.wrapper}>
              {/*Map through  doccumentary movies*/}
              {results.documentaries.map((documentary) => (
                <div key={documentary.id}>
                  <img
                    onClick={() => clickDocumentaryImageHandler(documentary)}
                    src={`https://image.tmdb.org/t/p/original/${documentary?.backdrop_path}`}
                    alt='Load failed'
                  />
                </div>
              ))}
            </div>
            {/*Render documentary movie detail component*/}
            {showDocumentaryMovieDetail && currentDocumentaryMovie && (
              <MovieDetail movie={currentDocumentaryMovie} />
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MovieList;
