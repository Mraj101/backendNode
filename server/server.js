require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const app = express();
app.use(cors());
mongoose.connect(process.env.db);

const Port= process.env.port || 8000

app.get('/',(req,res)=>{
    res.send("Hello Hasnain is sending data to port 8000");
})
app.listen(8000, () => {
  console.log(`Server started on port : http://localhost:${Port}`);
});


