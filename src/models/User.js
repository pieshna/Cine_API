const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    identity:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    payment:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);