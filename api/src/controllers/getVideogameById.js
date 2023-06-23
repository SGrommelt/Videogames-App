require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db.js");
const axios = require('axios');
const regexUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i; 

module.exports = async (req, res) => {
    try {
        const { idVideogame } = req.params;
        if(regexUUID.test(idVideogame)) {
            const game = await Videogame.findByPk(idVideogame, {
                include: [{
                    model: Genre,
                    attributes: ['name'],
                    through: {
                      attributes: []
                    }
                 }]
             });
            if(!game) return res.status(404).send("ID not found.");
            return res.status(200).json(game);
        }
        if(Number(idVideogame) > 961983) return res.status(404).send("ID not found.");
        const { data } = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        const game = {
                id: data.id,
                name: data.name,
                platforms: data.platforms,
                image: data.image,
                releaseDate: data.released,
                rating: data.rating,
            }
        return res.status(200).json(game);
    } catch(error) {
        return res.status(500).json(error.message);
    }
}