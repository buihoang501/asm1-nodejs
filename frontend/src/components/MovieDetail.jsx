/*Import relevant things */
import React, { useState, useRef, useEffect } from 'react';
import classes from './MovieDetail.module.css';
import useHttp from '../hooks/use-http';
import YouTube from 'react-youtube';

const MovieDetail = ({ movie, otherStyle }) => {
  // Movie trailer
  const [movieTrailer, setMovieTrailer] = useState(null);

  //Using useHttp hook
  const { isLoading, error, sendRequest: fetchTrailer, requests } = useHttp();

  //Using ref
  const movieRef = useRef();

  //Side effects data handler
  useEffect(() => {
    //Handle data
    const handleData = (data) => {
      if (data) {
        //Set movie trailer
        setMovieTrailer(data.result);
      }
    };

    //Call fetch trailer
    fetchTrailer(
      {
        url: `http://localhost:5000/api${requests.fetchTrailer}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { film_id: movie.id },
      },
      handleData
    );
  }, [movie.id, fetchTrailer]);

  //Youtube opts config
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  //Movie style
  const movieStyle = otherStyle ? classes.other : classes['movie-detail'];

  //Scroll to bottom page
  useEffect(() => {
    if (movie && movieRef.current && otherStyle) {
      movieRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [movie]);

  return (
    <>
      {!isLoading && !error && movie && (
        <>
          <div ref={movieRef} className={movieStyle}>
            <div className={classes.left}>
              <h2>{movie?.original_title}</h2>
              <p className={classes['line-break']}></p>
              <p>Release Date: {movie?.release_date}</p>
              <p>Vote: {movie?.vote_average} /10</p>
              <p className={classes.description}>{movie?.overview}</p>
            </div>
            <div className={classes.right}>
              {/*Render YouTube Trailer */}
              {!isLoading && movieTrailer && (
                <YouTube videoId={movieTrailer?.key} opts={opts} />
              )}
              {/*If don't have movie trailer */}
              {!isLoading && !movieTrailer && (
                <p className={classes.error}>Sorry, no movie trailer found!</p>
              )}
            </div>
          </div>
        </>
      )}
      {!isLoading && !movie && (
        <p className={classes.error}>No movie detail found!</p>
      )}
      {!isLoading && error && (
        <p className={classes.error}>Couldn't find the trailer of this film!</p>
      )}
    </>
  );
};
export default MovieDetail;
