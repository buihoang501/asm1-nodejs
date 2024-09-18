//File system
const fs = require('fs');

//Path
const path = require('path');

//Root path
const rootPath = require('../utils/path');

//User data path
const USER_PATH = path.join(rootPath, './data', 'userToken.json');

//User  class model
class User {
  // reading data func
  static all() {
    return JSON.parse(fs.readFileSync(USER_PATH, 'utf8'));
  }
}

//Export User Model
module.exports = User;
