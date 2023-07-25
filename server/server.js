require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const UserModel = require("./models/Users");

const workoutRoutes= require('./routes/workouts');
const userRoutes= require('./routes/user');



// const Tank = mongoose.model('Tank', yourSchema);
const app = express();
app.use(cors());
app.use(express.json())

//middlewares
app.use('/api/workouts',workoutRoutes);
app.use('/api/user/',userRoutes)

const Port = process.env.port || 8000;
const url = process.env.db
const dbName = process.env.dbName

mongoose.connect(url,{dbName: dbName})
.then(() => {
  app.listen(8000, () => {
    console.log(`connected to database and Server started on port : http://localhost:${Port}`);
  });
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});





// console.log("hi bug");
// app.post("/createuser", async(req, res) => {
//   let result = await UserModel.create({
//     username: "test",
//     age: 24,
//     name: "test name"
//   });
//     console.log(result);
//     return res.status(200).json(result);
//   });




