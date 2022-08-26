const
  express = require('express'),
  router = express.Router(),
  { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController'),
  { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;