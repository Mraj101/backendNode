const UserModel = require("../models/Users")




async function createWork(req, res){
    try {
        let data = req.body
        let result = await UserModel.create(data)
        console.log(result)
        //return res.status(201).json({msg:'success', result})
    } catch (error) {
        
    }
}

module.exports = {
    create: createWork,
    
}