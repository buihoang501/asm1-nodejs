import { useCallback, useState } from 'react';

const useHttp = () => {
  //Create loading state
  const [isLoading, setIsLoading] = useState(false);
  //Create error state
  const [error, setError] = useState(null);

  //User Id
  const userId = 'User 01';
  //Token
  const token = '8qlOkxz4wq';
  // request urls
  const requests = {
    fetchTrailer: `/movies/video?userId=${userId}&token=${token}`,
    fetchTrending: `/movies/trending?userId=${userId}&token=${token}`,
    fetchNetflixOriginals: `/movies/discover?userId=${userId}&token=${token}&mediaType=tv`,
    fetchTopRated: `/movies/top-rate?userId=${userId}&token=${token}`,
    fetchActionMovies: `/movies/discover?userId=${userId}&token=${token}&genre=28`,
    fetchComedyMovies: `/movies/discover?userId=${userId}&token=${token}&genre=35`,
    fetchHorrorMovies: `/movies/discover?userId=${userId}&token=${token}&genre=27`,
    fetchRomanceMovies: `/movies/discover?userId=${userId}&token=${token}&genre=10749`,
    fetchDocumentaries: `/movies/discover?userId=${userId}&token=${token}&genre=99`,
    fetchSearch: `/movies/search?userId=${userId}&token=${token}`,
  };

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // When it's sending request loading is true, error is null
    setIsLoading(true);
    setError(null);

    try {
      //Sending request by fetch method
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},

        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      //If request has  errors
      if (!response.ok) {
        throw new Error('Request failed!');
      }

      // All things ok, start getting data
      const data = await response.json();

      //Applying data
      applyData(data);
    } catch (error) {
      ///set error state,
      setError(error.message || 'Something went wrong');
    }
    setIsLoading(false);
  }, []);

  //After request sended, isLoading's false

  //Return to use  outside
  return {
    isLoading,
    error,
    requests,
    sendRequest,
  };
};

export default useHttp;
