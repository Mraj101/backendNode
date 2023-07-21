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

router.get("/:id", getSingleWorkout)

router.post("/",createWorkout);

router.delete("/:id")

router.patch("/:id", async (req, res) => {
  res.json({ mssg: "update a  workout" });
});

module.exports = router;
