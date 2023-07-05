require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require("../db.js");
const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const getGenres = await Genre.findAll();
        if(getGenres.length > 0) return res.status(200).json(getGenres);
        const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = data.results.map( genre => {return {id: genre.id, name: genre.name}});
        Genre.bulkCreate(genres);
        return res.status(200).send("Genres have been added to the database.");
    } catch(error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}