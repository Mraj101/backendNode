const express = require("express");


const router = express.Router();


//destructuring the controllers
const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workController');

//get all workouts


router.get("/", getAllWorkout);

router.get("/:id", getSingleWorkout)

router.post("/",createWorkout);

router.delete("/:id",deleteWorkout);

router.patch("/:id",updateWorkout);

module.exports = router;
