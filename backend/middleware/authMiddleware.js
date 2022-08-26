const jwt = require('jsonwebtoken'),
  asyncHandler = require('express-async-handler'),
  User = require('../models/userModel'),

  protect = asyncHandler((req, res, next) => {
    let token

    if (req.headers.authorization && req.header.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1]

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // get user from generateToken
        req.user = await User.findById(decoded.id).select('-password')
        next();
      } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')
      }
    }
  })