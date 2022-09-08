const Compra = require('../../models/compra');
const { compareAndUpdate } = require('../cartelera/asientos');

const create = async (req, res) => {
    const { userId, movieId, asientos, total, pago, butacas } = req.body;
    try {
        const compra = new Compra({
            userId,
            movieId,
            asientos,
            total,
            pago
        });
        const result = await compra.save();
        compareAndUpdate(movieId, butacas);
        res.status(200).json(result.asientos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const listByUser = async (req, res) => {
    const { id } = req.params;
    try {
        const compras = await Compra.find({ userId: id });
        res.status(200).json(compras);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { create, listByUser };