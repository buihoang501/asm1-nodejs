//Taking User model
const User = require('../models/User');

const checkAuthToken = (req, res, next) => {
  //get token from req query
  const token = req.query.token ? req.query.token : '';
  //get userId form req query
  const userId = req.query.userId ? req.query.userId : '';

  if (!token && !userId) {
    //Forbidden
    return res.status(403).json({ message: 'Unauthenticated' });
  }
  //Get token list
  const userTokenList = User.all();

  //Check token and userId
  const userToken = userTokenList.find(
    (user) =>
      user.userId === userId && user.token.toString() === token.toString()
  );

  //Unauthorized message when  token or userId is wrong!
  if (!userToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  //Check successfully, call next to go to controller
  next();
};

//Export checkAuthToken func
module.exports = checkAuthToken;
