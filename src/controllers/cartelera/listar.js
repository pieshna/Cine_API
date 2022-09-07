const Movie = require("../../models/Movie");
const Asiento = require("../../models/Asiento");
const {createAsiento} = require("./asientos");



const create = async (req, res) => {
    const { title, genre, year, director } = req.body;
    const movie = new Movie({
        title,
        genre,
        year,
        director,
    });
    const result = await movie.save();
    const asientos = createAsiento(result._id);
    await asientos.save();
    res.status(200).json(result);
};

const list = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    }

const update = async (req, res) => {
    const { title, genre, year, director } = req.body;
    const { id } = req.params;
    try {
        const movie = await Movie.findByIdAndUpdate(id, { title, genre, year, director }, { new: true });
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { create, list, update, remove };



