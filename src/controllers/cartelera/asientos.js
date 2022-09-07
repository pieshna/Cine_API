const Asiento = require("../../models/Asiento");

const createAsiento = (movieId) => {
    const nuevo = [];
   const asientos = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (j !== 3 && j !== 4 && j !== 8 && j !== 9) {
                asientos.push({
                    row: i,
                    column: j,
                    isAvailable: true
                })
            }else{
                asientos.push({
                    row: i,
                    column: j,
                    isAvailable: false
                })
            }
        }
    }
    nuevo.push({
        movieId,
        asientos
    })
    return nuevo;
};

const listByMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const asientos = await Asiento.find({ movieId: id });
        res.status(200).json(asientos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateToAvailable = async (req, res) => {
    const { id } = req.params;
    const { row, column } = req.body;
    try {
        const asiento = await Asiento.findOne({ movieId: id });
        const asientos = asiento.asientos;
        const index = asientos.findIndex((item) => item.row === row && item.column === column);
        asientos[index].isAvailable = true;
        const result = await Asiento.findOneAndUpdate({ movieId: id }, { asientos }, { new: true });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { row, column } = req.body;
    try {
        const asiento = await Asiento.findOne({ movieId: id });
        const asientos = asiento.asientos;
        const index = asientos.findIndex((item) => item.row === row && item.column === column);
        asientos[index].isAvailable = false;
        const result = await Asiento.findOneAndUpdate({ movieId: id }, { asientos }, { new: true });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const compareAndUpdate = async (movieId, asientos) => {
    try {
        const asiento = await Asiento.findOne({ movieId });
        const asientosDB = asiento.asientos;
        asientos.forEach(element => {
            const index = asientosDB.findIndex((item) => item.row === element.row && item.column === element.column);
            asientosDB[index].isAvailable = false;
        });
        const result = await Asiento.findOneAndUpdate({ movieId }, { asientos: asientosDB }, { new: true });
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = { createAsiento, listByMovie, update, updateToAvailable, compareAndUpdate};

