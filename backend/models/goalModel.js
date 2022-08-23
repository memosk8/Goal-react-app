const mongoose = require('mongoose'),
  goalSchema = mongoose.Schema({
    // reference to a user
    user:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    text: {
      type: String,
      required: [true, 'Please add a text value']
    }
  }, {timestamps: true});

module.exports = mongoose.model('Goal', goalSchema)