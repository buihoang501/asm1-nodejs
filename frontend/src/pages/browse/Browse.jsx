//Import relevant things
import React, { useState, useEffect } from 'react';
import useHttp from '../../hooks/use-http';

//Import components
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import MovieList from '../../components/MovieList';

function Browse() {
  //Using useHttp hook
  const { error, isLoading, requests, sendRequest: fetchData } = useHttp();

  //Initialize result movie object
  const [resultMovies, setResultMovies] = useState({
    originals: [],
    trending: [],
    topRated: [],
    actions: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });
  //Side effects  handler
  useEffect(() => {
    //Set result data from response
    const handleData = (dataKey, data) => {
      setResultMovies((prevResultMovies) => {
        return {
          ...prevResultMovies,
          [dataKey]: data.results,
        };
      });
    };

    //Call data function
    const callFetchData = (path, type) => {
      fetchData(
        {
          url: `http://localhost:5000/api${path}`,
        },
        handleData.bind(null, type)
      );
    };

    //Fetch all data
    const fetchAll = async () => {
      await Promise.all([
        callFetchData(requests.fetchNetflixOriginals, 'originals'),
        callFetchData(requests.fetchTrending, 'trending'),
        callFetchData(requests.fetchTopRated, 'topRated'),
        callFetchData(requests.fetchActionMovies, 'actions'),
        callFetchData(requests.fetchComedyMovies, 'comedy'),
        callFetchData(requests.fetchHorrorMovies, 'horror'),
        callFetchData(requests.fetchRomanceMovies, 'romance'),
        callFetchData(requests.fetchDocumentaries, 'documentaries'),
      ]);
    };

    //Call fetch all data
    fetchAll();
  }, [
    fetchData,
    requests.fetchNetflixOriginals,
    requests.fetchTrending,
    requests.fetchTopRated,
    requests.fetchActionMovies,
    requests.fetchComedyMovies,
    requests.fetchHorrorMovies,
    requests.fetchRomanceMovies,
    requests.fetchDocumentaries,
  ]);

  return (
    <div className='app'>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render Banner component */}
      <Banner />
      {/*Render Movie List component */}
      {!isLoading && !error && resultMovies.documentaries.length > 1 && (
        <MovieList results={resultMovies} />
      )}
    </div>
  );
}

export default Browse;
