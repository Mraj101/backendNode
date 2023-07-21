const Workouts=require('../models/workoutModel');

const getAllWorkout=async(req,res)=>{
  const workouts= await Workouts.find({}).sort({createdAt:-1});
  return res.status(200).json(workouts)
}

const getSingleWorkout =async(req,res)=>{
  const { id } = req.params
  const workout=await Workouts.findById(id);
  return res.status(201).json(workout)
  if(!id)
  return res.status(404).json({error:'id not found'});
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
