const Workouts=require('../models/workoutModel');
const mongoose = require("mongoose");





const getAllWorkout=async(req,res)=>{
  const workouts= await Workouts.find({}).sort({createdAt:-1});
  return res.status(200).json(workouts)
}

const getSingleWorkout =async(req,res)=>{
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout or id"})
  }

  const workout=await Workouts.findById(id);
  
  if(!workout)
    return res.status(404).json({error:'no such workout exists'});

   res.status(201).json(workout)
}

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
   createWorkout,
   getAllWorkout,
   getSingleWorkout
};
