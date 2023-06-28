require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db.js");
const axios = require('axios');
const regexUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i; 

module.exports = async (req, res) => {
    try {
        const { idVideogame } = req.params;
        if(regexUUID.test(idVideogame)) {
            let game = await Videogame.findByPk(idVideogame, {
                include: [{
                    model: Genre,
                    attributes: ['name'],
                    through: {
                      attributes: []
                    }
                 }]
             });
            if(!game) return res.status(404).send("ID not found.");
            game = {
                id: game.id,
                name: game.name,
                platforms: game.platforms.split(", "),
                genres: game.Genres.map(genre => genre.name),
                image: game.image,
                description: game.description,
                releaseDate: game.releaseDate,
                rating: game.rating,
            }
            return res.status(200).json(game);
        }
        if(Number(idVideogame) > 961983) return res.status(404).send("ID not found.");
        const { data } = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        const game = {
                id: data.id,
                name: data.name,
                platforms: data.platforms.map(platform => platform.platform.name),
                image: data.background_image,
                releaseDate: data.released,
                rating: data.rating,
                genres: data.genres.map(genre => genre.name),
            }
        return res.status(200).json(game);
    } catch(error) {
        return res.status(500).json(error.message);
    }
}