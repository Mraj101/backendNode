const express = require("express");

const router = express.Router();


//destructuring the controllers
const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout
} = require('../controllers/workController');

//get all workouts


router.get("/", getAllWorkout);

router.get("/:id", async (req, res) => {
  res.json({ mssg: "get a single workout" });
});

router.post("/",createWorkout);

router.delete("/:id", getSingleWorkout)

router.patch("/:id", async (req, res) => {
  res.json({ mssg: "update a  workout" });
});

module.exports = router;
