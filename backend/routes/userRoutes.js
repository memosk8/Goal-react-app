const
  express = require('express'),
  router = express.Router(),
  {registerUser, loginUser, getMe} = require('../controllers/userController')

router
  .post('/', registerUser)
  .post('/login', loginUser)
  .get('/me', getMe)

module.exports = router;