const 
  express = require('express'),
  router = express.Router(),
  {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);

module.exports = router;