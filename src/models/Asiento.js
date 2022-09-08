const mongoose = require("mongoose");

const asientoSchema = mongoose.Schema({
        movieId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    asientos:{
        type: Array,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Asiento", asientoSchema);