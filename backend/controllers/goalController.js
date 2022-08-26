const
  asyncHandler = require('express-async-handler'),
  Goal = require('../models/goalModel'),

  /**
   * @desc    Get goals
   * @route   GET /api/goals
   * @access  Private
   */
  getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find(); // find all goals
    res.status(200).json(goals); // respond with stored goals
  }),

  /**
   * @desc    Set goal
   * @route   POST /api/goals
   * @access  Private
   */
  setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)/* .json({message: "please add text field"}) */
      throw new Error('Please add text field')
    }
    const goal = await Goal.create({ text: req.body.text, user: req.body.user })
    res.status(200).json({ goal })
  }),

  /**
  * @desc    Update goal
  * @route   PUT /api/goals/:id
  * @access  Private
  */
  updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ updatedGoal })
  }),

  /**
   * @desc    Delete goal
   * @route   DELETE /api/goals/:id
   * @access  Private
   */
  deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    await goal.remove()
    res.status(200).json({ id: req.params.id })
  });

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };