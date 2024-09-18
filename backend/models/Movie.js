//File system
const fs = require('fs');

//Path
const path = require('path');

//Root path
const rootPath = require('../utils/path');

//Movie data path
const MOVIE_PATH = path.join(rootPath, './data', 'movieList.json');

//Movie  class model
class Movie {
  // reading data func
  static all() {
    return JSON.parse(fs.readFileSync(MOVIE_PATH, 'utf8'));
  }
}

//Export Movie Model
module.exports = Movie;
