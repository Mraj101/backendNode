const express = require("express");

const router = express.Router();

const createWorkout = require('../controllers/workController');

//get all workouts

const workoutModels = require("../models/workoutModel");

router.get("/", async (req, res) => {
  res.json({ mssg: "get all workouts" });
});

router.get("/:id", async (req, res) => {
  res.json({ mssg: "get a single workout" });
});

router.post("/",createWorkout.create);
router.delete("/:id", async (req, res) => {
  res.json({ mssg: "delete a single workout" });
});

router.patch("/:id", async (req, res) => {
  res.json({ mssg: "update a  workout" });
});

module.exports = router;
