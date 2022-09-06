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
    }
})

module.exports = mongoose.model("Asiento", asientoSchema);