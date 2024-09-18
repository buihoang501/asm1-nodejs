//Import relevant things
import React, { useEffect, useState } from 'react';
import classes from './Banner.module.css';

import useHttp from '../hooks/use-http';

const Banner = () => {
  //Using useHttp hooks
  const { error, isLoading, sendRequest: fetchOriginals, requests } = useHttp();

  //Random original result
  const [randomResult, setRandomResult] = useState({});

  // Handle side effects
  useEffect(() => {
    //Handle originals data response
    const getOriginalRandomHandler = (data) => {
      //Random index
      const randomNumber = Math.floor(Math.random() * data.results.length);
      let index;
      if (randomNumber === 0) {
        index = randomNumber;
      } else {
        index = randomNumber - 1;
      }

      //Set original random data film
      setRandomResult(data.results[index]);
    };

    // Call fetch originals function
    fetchOriginals(
      {
        url: `http://localhost:5000/api${requests.fetchNetflixOriginals}`,
      },
      getOriginalRandomHandler
    );
  }, [fetchOriginals, requests.fetchNetflixOriginals]);

  let errorNull = '';

  if (randomResult?.backdrop_path === null) {
    errorNull = <p className={classes.error}>The banner's film has an error</p>;
  }

  return (
    <React.Fragment>
      <div className={classes.banner}>
        {/*Null banner error*/}
        {errorNull}
        {/*Error from response server*/}
        {!isLoading && error && <p className={classes.error}>{error}</p>}
        {/*Loading banner*/}
        {isLoading && !randomResult.backdrop_path && (
          <p className={classes.loading}>Wait for loading film's banner</p>
        )}

        {/*Success get data*/}
        {!isLoading &&
          Object.keys(randomResult).length > 0 &&
          randomResult?.backdrop_path && (
            <>
              <div className={classes['img-container']}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${randomResult?.backdrop_path}`}
                  alt='Loading Banner Failed'
                />
              </div>

              <div className={classes.info}>
                <h2>{randomResult.name}</h2>

                <div className={classes.actions}>
                  <button>Play</button>
                  <button>My List</button>
                </div>

                <p>
                  {randomResult.overview.length > 145
                    ? `${randomResult.overview.substring(0, 145)} ...`
                    : randomResult.overview}
                </p>
              </div>
            </>
          )}
      </div>
    </React.Fragment>
  );
};

export default Banner;
