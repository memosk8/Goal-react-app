const
  express = require('express'),
  router = express.Router(),
  {registerUser, loginUser, getMe} = require('../controllers/userController'),
  {protect} = require('../middleware/authMiddleware')

router
  .post('/', registerUser)
  .post('/login', loginUser)
  .get('/me', protect, getMe)

module.exports = router;