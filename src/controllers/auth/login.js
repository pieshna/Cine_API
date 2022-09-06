
const bcrypt = require("bcrypt")
const User = require("../../models/User")

const login= async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({msg: "User not found"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(400).json({msg: "Invalid password"})
    }
    //const token = await user.generateAuthToken()
    res.json({user})
}

module.exports = {login}