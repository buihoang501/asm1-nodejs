//Path
const path = require('path');

//Root path
const rootPath = path.join(path.dirname(process.mainModule.filename));

//Export root path
module.exports = rootPath;
