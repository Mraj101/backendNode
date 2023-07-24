

//login user
const loginUser=async(req,res){
res.json({mssg:'login user'})
}


//singup user
const signupUser=async(req,res){
    res.json({mssg:'signup here'})
    }


module.exports={
    loginUser,
    signupUser
}