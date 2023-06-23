const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require('../controllers/getVideogames.js');
const postVideogame = require('../controllers/postVideogame.js');
const getVideogameById = require('../controllers/getVideogameById.js');
const getGenres = require('../controllers/getGenres.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/videogames/:idVideogame', getVideogameById);
router.post('/videogames', postVideogame);
router.get('/genres', getGenres);

module.exports = router;
