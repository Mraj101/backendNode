const express=require('express');

const router=express.Router();

// const workController = require('../controller/workController')


//get all workouts

router.get("/", async (req, res) => {
    res.json({mssg:'get all workouts'})
  });
  
  router.get("/:id", async (req, res) => {
    res.json({mssg:'get a single workout'})
  });
  
  router.post("/",async (req, res) => {
    res.json({mssg:'post workouts'})
  });
  router.delete("/:id", async (req, res) => {
    res.json({mssg:'delete a single workout'})
  });
  
  router.patch("/:id", async (req, res) => {
    res.json({mssg:'update a  workout'})
  });
  

module.exports = router