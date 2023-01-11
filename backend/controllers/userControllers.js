const User = require('../models/userModel.js')
exports.getUsers = async (req,res)=>{
    try {
        const users = await User.find()
        res.json({success:true,data:users})
    } catch (error) {
        res.json(error.message)
    }
}

exports.getUserById = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(user){
        res.json({success:true,data:user})
        }
        else
        {
            res.status(404).send("User not found")
        }
    } catch (error) {
        console.log(error.message)
    }
}

exports.createUser = async (req,res)=>{
    try {
        const user = await User.create(req.body)
        res.json("User added")
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(user){
            await user.remove()
            res.json({msg : "User removed"})
        }
        else{
            res.status(404).send("User not found")
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.authUser = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            })
        }
        else{
            res.status(401).json({success:false,msg:"Invalid email or password"})
        }
    } catch (error) {
        res.send(error.message)
    }
}