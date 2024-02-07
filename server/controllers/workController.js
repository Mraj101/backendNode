const Workouts = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all workouts
const getAllWorkout = async (req, res) => {
  console.log(req,"here is my req");
  const workouts = await Workouts.find({}).sort({ createdAt: -1 });
  return res.status(200).json(workouts);
};

//get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout or id" });
  }

  const workout = await Workouts.findById(id);

  if (!workout)
    return res.status(404).json({ error: "no such workout exists" });

  res.status(201).json(workout);
};

//create
const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    let data = await Workouts.create({ title, reps, load });
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout or id" });
  }

  const workout = await Workouts.findOneAndDelete({ _id: id });

  if (!workout)
    return res.status(404).json({ error: "no such workout exists" });

  res.status(201).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout or id" });
  }

  const workout = await Workouts.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout)
    return res.status(404).json({ error: "no such workout exists" });

  res.status(201).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
