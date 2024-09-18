//File system
const fs = require('fs');

//Path
const path = require('path');

//Root path
const rootPath = require('../utils/path');

//Genre data path
const GENRE_PATH = path.join(rootPath, './data', 'genreList.json');

//Genre  class model
class Genre {
  // reading data func
  static all() {
    return JSON.parse(fs.readFileSync(GENRE_PATH, 'utf8'));
  }
}

//Export Genre Model
module.exports = Genre;
