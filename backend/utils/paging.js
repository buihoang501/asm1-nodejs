//Paging movies
const paging = (page, movies, field, option) => {
  //isNotFoundGenreId
  let isNotFoundGenreId = true;
  //Initializing resultMovies
  let resultMovies = movies;
  //Sorting movies by descending value of the field
  if (field) {
    resultMovies = movies.sort((a, b) => b[field] - a[field]);
  }

  //Sorting movies by genre id
  if (option && option.hasOwnProperty('genreId')) {
    //finding exist movie with genreId
    const existingMovie = resultMovies.find((movie) =>
      movie.genre_ids.includes(option.genreId)
    );

    //Check existing movie with that genreId
    if (existingMovie) {
      //Found GenreId
      isNotFoundGenreId = false;
      //Filtering results by genreId
      resultMovies = resultMovies.filter((movie) =>
        movie.genre_ids.includes(option.genreId)
      );
    } //Not found with that genreId
    else {
      //Not Found GenreId
      isNotFoundGenreId = true;
    }
  }

  //Sorting movies by mediType
  if (option && option.hasOwnProperty('mediaType')) {
    //Filtering results by genreId
    resultMovies = resultMovies.filter(
      (movie) => movie.media_type === option.mediaType
    );
  }

  //Searching movies by keyword matching with overview or title
  //Check option object & has property's name is keyword
  if (option && option.hasOwnProperty('keyword')) {
    // Searching by filtering arr with title or overview which matches with keyword property
    resultMovies = resultMovies.filter((movie) => {
      //Searching with title
      if (movie.title && !movie.overview) {
        //Formatting lowercase and remove whitespace
        return movie?.title
          .toLowerCase()
          .trim()
          .includes(option.keyword.toLowerCase().trim());
      }

      //Searching with overview
      if (!movie.title && movie.overview) {
        //Formatting lowercase and remove whitespace
        return movie.overview
          .toLowerCase()
          .trim()
          .includes(option.keyword.toLowerCase().trim());
      }
      //Searching with overview and title
      if (movie.title && movie.overview) {
        //Formatting lowercase and remove whitespace
        return (
          movie?.title
            .toLowerCase()
            .trim()
            .includes(option.keyword.toLowerCase().trim()) &&
          movie.overview
            .toLowerCase()
            .trim()
            .includes(option.keyword.toLowerCase().trim())
        );
      }
    });
    // search opts conditions
    //Searching by genreIds
    if (option.searchOptions.genreIds.length > 0) {
      //Filtering resultMovies by genreIds
      resultMovies = resultMovies.filter((movie) => {
        // movie.genre_ids  contains  genreId checkbox arr
        return option.searchOptions.genreIds.every((genreId) =>
          movie.genre_ids.includes(genreId)
        );
      });
    }
    //Searching by  media type
    if (option.searchOptions.mediaType) {
      //Filtering resultMovies by media type
      resultMovies = resultMovies.filter(
        (movie) => movie.media_type === option.searchOptions.mediaType
      );
    }

    //Searching by  language
    if (option.searchOptions.language) {
      //Filtering resultMovies by language
      resultMovies = resultMovies.filter(
        (movie) => movie.original_language === option.searchOptions.language
      );
    }

    //Searching by  year
    if (option.searchOptions.year) {
      //Filtering resultMovies by year

      resultMovies = resultMovies.filter((movie) => {
        //get date
        let year = movie.release_date
          ? movie.release_date
          : movie.first_air_date;
        //get year
        year = Number(new Date(year).getFullYear());
        year = Number(year);

        //get search year
        let searchYear = Number(option.searchOptions.year);

        //returning if having year equal comparisions
        return year === searchYear;
      });
    }
  }

  //Defining results arr
  let results = [];

  //Check results movie length ===1, arr has only one element
  // if (resultMovies.length === 1) {
  //   results = resultMovies;

  //   return { results, totalPages: 1, isNotFoundGenreId };
  // }

  //Check in default case
  if (page === 1) {
    //Assgin results arr
    results = resultMovies.slice(0, 20);
  } //Check if having page query (page !==1)
  else {
    //Assigning results arr
    results = resultMovies.slice(page * 20 - 20, page * 20);
  }

  //Calculating total pages
  const totalPages = Math.ceil(resultMovies.length / 20);
  //Returning results arr and totalPages value
  return { results, totalPages, isNotFoundGenreId };
};

//Export paging func
module.exports = paging;
