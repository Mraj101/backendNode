require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
// const Tank = mongoose.model('Tank', yourSchema);
const app = express();
app.use(cors());

const Port = process.env.port || 8000;
const url = process.env.db
const dbName = process.env.dbName

mongoose.connect(url,{
    dbName: dbName,
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


app.get("/getUsers", async (req, res) => {
  let result = await UserModel.find({});
  console.log(result);
  return res.status(200).json(result);
});

app.get("/createuser", async (req, res) => {
    let result = await UserModel.create({
        username: "test",
        age: 24,
        name: "test name"
    });
    console.log(result);
    return res.status(200).json(result);
  });



app.listen(8000, () => {
  console.log(`Server started on port : http://localhost:${Port}`);
});
