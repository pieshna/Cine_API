const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Movie", movieSchema);

