const Workout=require('../models/workoutModel');

const createWorkout= async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    let data = await Workout.create({ title, reps, load });
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//create 


module.exports = {
  create: createWorkout,
};
