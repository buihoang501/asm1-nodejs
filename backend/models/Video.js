//File system
const fs = require('fs');

//Path
const path = require('path');

//Root path
const rootPath = require('../utils/path');

//Video data path
const VIDEO_PATH = path.join(rootPath, './data', 'videoList.json');

//Video  class model
class Video {
  // reading data func
  static all() {
    return JSON.parse(fs.readFileSync(VIDEO_PATH, 'utf8'));
  }
}

//Export Video Model
module.exports = Video;
