const Router = require('express')
const router = new Router()
const genreController = require('../controller/genre.controller')

router.post('/genre', genreController.createGenre)
router.get('/genre', genreController.getGenres)
router.get('/genre/:id', genreController.getOneGenre)
router.put('/genre', genreController.updateGenre)
router.delete('/genre/:id', genreController.deleteGenre)
router.get('/genre?:id', genreController.getGenreByFilm)





module.exports = router