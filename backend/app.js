//Taking express from express pakage
const express = require('express');

//Parsing body
const bodyParser = require('body-parser');

//Movie Routes
const movieRoutes = require('./routes/movie');

//Taking CORS from cors pakge
const cors = require('cors');

// Defining app server
const app = express();

//Using cors middleware to permit  frontend and backend communicating
app.use(cors());
//Using body parser middleware => parsing incoming request body with JSON
app.use(bodyParser.json());

//Movie routes middleware
app.use('/api/movies', movieRoutes);

//Page not found middleware
app.use((req, res, next) => {
  //Returning status 404 and message for page not found
  res.status(404).json({ message: 'Route not found' });
});

//Initializing PORT
const PORT = 5000;

//Server starts listening at PORT 5000!
app.listen(PORT, () => {
  console.log(`Server is starting at PORT ${PORT}`);
});
