const bcrypt = require("bcrypt")
const User = require("../../models/User")

const register = async (req, res) => {
    console.log(req.body);
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        identity: req.body.identity,
        email: req.body.email,
        telephone: req.body.telephone,
        payment: req.body.payment,
        password: hash
    })
    await user.save()
    res.json({user})
}

module.exports = {register}