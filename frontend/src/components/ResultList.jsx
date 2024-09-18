import React, { useState } from 'react';

import classes from './ResultList.module.css';

import MovieDetail from './MovieDetail';

const ResultList = ({ error, loading, results }) => {
  //Show movie search detail
  const [showMovieSearchDetail, setShowMovieSearchDetail] = useState(false);

  //Current movie
  const [currentMovieSearch, setCurrentMovieSearch] = useState(null);

  console.log(results);

  //Click movie search image handler
  const clickMovieSearchImageHandler = (movie) => {
    //Handle  click MovieSearch movie image again
    if (currentMovieSearch?.id === movie?.id) {
      setShowMovieSearchDetail((prevState) => !prevState);
      setCurrentMovieSearch(null);
    } else {
      //set show MovieSearch movie
      setShowMovieSearchDetail(true);
      //set current movie search
      setCurrentMovieSearch(movie);
    }
  };

  return (
    <div className={classes['result-list']}>
      <h2>Search Result</h2>
      <div className={classes['result-container']}>
        <div className={classes.wrapper}>
          {/*Loading and fetch success, map through results movie array */}
          {!loading &&
            results.length > 0 &&
            results.map((movieSearch) => (
              <div key={movieSearch.id} className={classes['result-item']}>
                <img
                  onClick={() => clickMovieSearchImageHandler(movieSearch)}
                  src={`https://image.tmdb.org/t/p/original/${movieSearch?.poster_path}`}
                  alt='Load failed'
                />
              </div>
            ))}
        </div>
        {/*Render  movie search detail component*/}
        {showMovieSearchDetail && currentMovieSearch && (
          <MovieDetail otherStyle movie={currentMovieSearch} />
        )}
        {/*If have any errors*/}
        {error && <p className={classes.error}>Sorry, something went wrong!</p>}
      </div>
    </div>
  );
};

export default ResultList;
