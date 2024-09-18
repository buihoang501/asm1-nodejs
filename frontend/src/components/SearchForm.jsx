import React, { useState } from 'react';

import classes from './SearchForm.module.css';

const SearchForm = ({ onSubmitData }) => {
  //Query search word
  const [query, setQuery] = useState('');

  //media type search
  const [mediaType, setMediaType] = useState('');

  // genre ids search
  const [genreIds, setGenreIds] = useState([]);

  //language search
  const [language, setLanguage] = useState('');

  //Year search
  const [year, setYear] = useState('');

  //Input change handler
  const inputQueryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  //Reset search query handler
  const resetSearchHandler = (e) => {
    e.preventDefault();
    setQuery('');
  };

  //Handling media type  change
  const mediaTypeChangeHandler = (e) => {
    //set media type search
    setMediaType(e.target.value);
  };

  //Handling language search change
  const languageChangeHandler = (e) => {
    //set language search
    setLanguage(e.target.value);
  };

  //Handling year search change

  const yearChangeHandler = (e) => {
    //set year search
    setYear(e.target.value);
  };

  //Handling checkbox change
  const checkboxChangeHandler = (value, checked) => {
    //Check any checked
    if (checked) {
      //Set genreIds arr
      setGenreIds((prevGenreIds) => [...prevGenreIds, Number(value)]);
    } else {
      //Remove checkbox
      setGenreIds((prevGenreIds) =>
        prevGenreIds.filter((genreId) => genreId !== Number(value))
      );
    }
  };

  //Submit search handler
  const submitSearchHandler = (e) => {
    //prevent default behavior
    e.preventDefault();

    //Check if query word length >1
    if (query.trim().length > 1) {
      //Call function handler
      onSubmitData(query, {
        mediaType: mediaType,
        genreIds: genreIds,
        language: language,
        year: year,
      });
      // setQuery('');
    }
  };
  return (
    <div className={classes['seach-form']}>
      <form onSubmit={submitSearchHandler} className={classes.form}>
        <div className={classes['form-group']}>
          {/*Genres*/}
          <div className={classes['form-control-others']}>
            <h3>Thể loại</h3>
            <div>
              <div>
                <input
                  type='checkbox'
                  name='action'
                  id='action'
                  value={28}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='action'>Action</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='adventure'
                  id='adventure'
                  value={12}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='adventure'>Adventure</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='animation'
                  id='animation'
                  value={16}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='animation'>Animation</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='comdy'
                  id='comdy'
                  value={35}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='comdy'>Comedy</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='crime'
                  id='crime'
                  value={80}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='crime'>Crime</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='documentary'
                  id='documentary'
                  value={99}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='documentary'>Documentary</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='drama'
                  id='drama'
                  value={18}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='drama'>Drama</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='family'
                  id='family'
                  value={10751}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='family'>Family</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='fantasy'
                  id='fantasy'
                  value={14}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='fantasy'>Fantasy</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='history'
                  id='history'
                  value={36}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='history'>History</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='horror'
                  id='horror'
                  value={27}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='horror'>Horror</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='music'
                  id='music'
                  value={10402}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='music'>Music</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='mystery'
                  id='mystery'
                  value={9648}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='mystery'>Mystery</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='romance'
                  id='romance'
                  value={10749}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='romance'>Romance</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='science-fiction'
                  id='science-fiction'
                  value={878}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />

                <label htmlFor='science-fiction'>Science Fiction</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='tv-movie'
                  id='tv-movie'
                  value={10770}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='tv-movie'>TV Movie</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='thriller'
                  id='thriller'
                  value={53}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='thriller'>Thriller</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='war'
                  id='war'
                  value={10752}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='war'>War</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='western'
                  id='western'
                  value={37}
                  onChange={(e) =>
                    checkboxChangeHandler(e.target.value, e.target.checked)
                  }
                />
                <label htmlFor='western'>Western</label>
              </div>
            </div>
          </div>
          {/*End Genres*/}
          {/* Media Type*/}
          <div className={classes['form-control-others']}>
            <h3>Media Type</h3>
            <div>
              <select
                name='mediaType'
                onChange={mediaTypeChangeHandler}
                value={mediaType}
              >
                <option value=''>Select Type</option>
                <option value='all'>All</option>
                <option value='movie'>Movie</option>
                <option value='tv'>TV</option>
                <option value='person'>Person</option>
              </select>
            </div>
          </div>

          {/* Language */}

          <div className={classes['form-control-others']}>
            <h3>Ngôn ngữ</h3>
            <div>
              <select
                name='language'
                onChange={languageChangeHandler}
                value={language}
              >
                <option value=''>Select Language</option>
                <option value='en'>English</option>
                <option value='ja'>Japanese</option>
                <option value='ko'>Korean</option>
              </select>
            </div>
          </div>

          {/* End Language*/}

          {/* Year */}

          <div className={classes['form-control-others']}>
            <h3>Năm phát hành</h3>
            <div>
              <input
                type='number'
                placeholder='yyyy'
                min='1900'
                max='2030'
                value={year}
                onChange={yearChangeHandler}
              />
            </div>
          </div>
          {/* End Year */}

          <div className={classes['form-control']}>
            <input
              id='search'
              type='search'
              value={query}
              onChange={inputQueryChangeHandler}
            />
            <label htmlFor='search'>
              <svg
                className='svg-inline--fa fa-search fa-w-16'
                fill='#ccc'
                aria-hidden='true'
                data-prefix='fas'
                data-icon='search'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
              </svg>
            </label>
          </div>
        </div>
        <div className={classes['form-actions']}>
          <button onClick={resetSearchHandler}>RESET</button>
          <button className={classes['search-btn']}>SEARCH</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
