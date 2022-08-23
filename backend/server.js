const express = require("express"),
  colors = require('colors'),
  dotenv = require("dotenv").config(),
  {errorHandler} = require('./middleware/errorMiddleware'),
  connectDB = require('./config/db'),
  port = process.env.PORT,
  app = express();

connectDB();

app
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use('/api/goals', require('./routes/goalRoutes')) // rutas para goals
  .use('/api/users', require('./routes/userRoutes')) // rutas para users
  .use(errorHandler)
  .listen(port, () => console.log(`server started on port : ${port}`));
