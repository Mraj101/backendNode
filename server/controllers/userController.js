const User=require('../models/userModel')

//login  user creation
const loginUser=async(req,res)=>{
 
}


//signup User creation
const signupUser=async(req,res)=>{
    res.json({mssg:'signup here'})
    }


module.exports={
    loginUser,
    signupUser
}