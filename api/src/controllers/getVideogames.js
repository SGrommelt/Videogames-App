require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame } = require("../db.js");
const axios = require('axios');
const sequelize = require('sequelize');

module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        let apiVideogames = [];
        let dbVideogames = [];
        if(name) {
            dbVideogames = await Videogame.findAll({ where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + name.toLowerCase() + '%')
            }});
            const totalResults = 15 - dbVideogames.length;
            const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=${totalResults}`);
            if(!data) res.status(404).send("The game doesn't exist.");
            apiVideogames = data.results;
        } else {
            let i = 0;
            let videogameData = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
            while(i < 5) {
                apiVideogames = apiVideogames.concat(videogameData.data.results);
                videogameData = await axios.get(videogameData.data.next);
                i++;
            }
            dbVideogames = await Videogame.findAll();
        }
        apiVideogames = apiVideogames.map( game => {
            return {
                id: game.id,
                name: game.name,
                platforms: game.platforms.map(platform => platform.platform.name),
                genres: game.genres.map(genre => genre.name),
                image: game.background_image,
                releaseDate: game.released,
                rating: game.rating,
            }
        })
        console.log(apiVideogames.length);
        const allVideogames = apiVideogames.concat(dbVideogames);
        return res.status(200).json(allVideogames);
    } catch(error) {
        return res.status(500).json(error.message);
    }
}