const 
  { response } = require('express'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcryptjs'),
  asyncHandler = require('express-async-handler'),
  User = require('../models/userModel'),

  /**
   * @desc    Auth user
   * @route   POST /api/users/login
   * @access  Public
   */
  loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login user" })
  }),

  /**
   * @desc    Get user data
   * @route   GET /api/users/me
   * @access  Public
   */
  getMe = asyncHandler(async (req, res) => {
    res.json({ message: "user data" })
  }),

  /**
   * @desc    Register new user
   * @route   POST /api/users
   * @access  Public
   */
  registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please add all fields')
    }
    // check is usr exist by email
    const userExist = await User.findOne({ email })
    if (userExist) {
      res.status(400)
      throw new Error('User already exists')
    }
    // hash password
    const
      salt = await bcrypt.genSalt(10),
      hashedPwd = await bcrypt.hash(password, salt),
      // create user
      user = await User.create({
        name, email, password: hashedPwd
      });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email
      })
    }
    else {
      res.statu(400)
      throw new Error('Invalid user data')
    }
  });

module.exports = { registerUser, getMe, loginUser };