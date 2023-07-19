const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose");
app.use(cors());
mongoose.connect(process.env.db);



app.listen(8000, () => {
  console.log("Server started on port 8000");
});
