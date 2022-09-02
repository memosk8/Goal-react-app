const express = require("express"),       // Handle HTTP req/res with Node.js
  colors = require('colors'),             // Print to console with styles
  dotenv = require("dotenv").config(),    // Handle env variables
  {errorHandler} = require('./middleware/errorMiddleware'), // Custom middleware
  connectDB = require('./config/db'),     // Mongodb config
  port = process.env.PORT,                // Server Port
  app = express();                        // Express app initialization

connectDB();

// server config
app
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use('/api/goals', require('./routes/goalRoutes')) 
  .use('/api/users', require('./routes/userRoutes')) 
  .use(errorHandler)
  .listen(port, () => console.log(`server started on port : ${port}`));
