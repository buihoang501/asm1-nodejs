/*Import relevant things */
import React, { useState } from 'react';
import useHttp from '../../hooks/use-http';

/*Import components*/
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';
import ResultList from '../../components/ResultList';

const Search = () => {
  //Initialize result search state
  const [resultSearch, setResultSearch] = useState([]);

  //Using http hook
  const {
    error,
    isLoading,
    sendRequest: fetchResultSearch,
    requests,
  } = useHttp();

  //on submit data function
  const onSubmitData = (query, searchOpts) => {
    //Handle result search data function
    const handleSearchResultData = (data) => {
      setResultSearch(data.results);
    };

    fetchResultSearch(
      {
        url: `http://localhost:5000/api${requests.fetchSearch}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { keyword: query, searchOpts: searchOpts },
      },
      handleSearchResultData
    );
  };

  return (
    <div className='app'>
      {/*Render navbar component */}
      <Navbar />
      {/*Render search form*/}
      <SearchForm onSubmitData={onSubmitData} />
      {/*Render result component after searching */}
      <ResultList error={error} loading={isLoading} results={resultSearch} />
    </div>
  );
};

export default Search;
