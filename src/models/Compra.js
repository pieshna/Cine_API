const mongoose = require("mongoose");

const compraSchema = mongoose.Schema({
    movieId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    asientos:{
        type: String,
        required: true,
    },
    total:{
        type: Number,
        required: true
    },
    pago: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Compra", compraSchema);