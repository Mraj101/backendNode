const express=require('express');

const router=express.Router();


// const workController = require('../controller/workController')


//get all workouts

const workoutModels = require('../models/workoutModels');

router.get("/", async (req, res) => {
    res.json({mssg:'get all workouts'})
  });
  
  router.get("/:id", async (req, res) => {
    res.json({mssg:'get a single workout'})
  });
  
  router.post("/",async (req, res) => {
    try {
        const {title,reps,load}=req.body;
        let data= await workoutModels.create({title,reps,load})
        return res.status(201).json(data)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    res.json({mssg:'post workouts'})
  });
  router.delete("/:id", async (req, res) => {
    res.json({mssg:'delete a single workout'})
  });
  
  router.patch("/:id", async (req, res) => {
    res.json({mssg:'update a  workout'})
  });
  

module.exports = router