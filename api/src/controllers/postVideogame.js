const { Videogame } = require("../db.js");
const sequelize = require('sequelize');

module.exports = async (req, res) => {
    try {
        const { name, description, platforms, image, releaseDate, rating, genres } = req.body;
        if(!name || !description || !platforms || !image || !releaseDate || !rating || !genres ) return res.status(500).send("Missing data.");
        if(await Videogame.findOne({ where: { 
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + name.toLowerCase() + '%'),
            description, platforms, image, releaseDate, rating }})) return res.status(500).send("Game already exists.");
        const newGame = await Videogame.create({ name, description, platforms, image, releaseDate, rating });
        newGame.setGenres(genres);
        return res.status(200).send("Game created succesfully.");
    } catch(error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}