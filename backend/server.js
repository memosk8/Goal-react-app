const express = require("express"),
  dotenv = require("dotenv").config(),
  port = process.env.PORT,
  {errorHandler} = require('./middleware/errorMiddleware')
  app = express();

app
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use('/api/goals', require('./routes/goalRoutes')) // rutas para goals
  .use(errorHandler)
  .listen(port, () => console.log(`server started on port : ${port}`));
