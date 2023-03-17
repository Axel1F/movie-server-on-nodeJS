const db = require('../db')

class GenreController {
    async createGenre (req, res){
        const{genre_id,genre_name,fk_film_id} = req.body
        const newGenre = await db.query('INSERT INTO genre (genre_id,genre_name,fk_film_id) values ($1, $2, $3) RETURNING *', [genre_id,genre_name,fk_film_id])
        res.json(newGenre.rows[0])

    }

    async getGenres (req, res){
        const genres = await db.query('SELECT * FROM genre')
        res.json(genres.rows)
        
    }
    
    async getOneGenre (req, res){
        const id = req.params.id
        const genre = await db.query('SELECT * FROM genre WHERE genre_id=$1', [id])
        res.json(genre.rows[0])
        
    }

    async updateGenre (req, res){
        const{genre_name,fk_film_id, genre_id} = req.body
        const genre = await db.query('UPDATE genre set genre_name=$1, fk_film_id=$2 WHERE genre_id=$3 RETURNING *', [genre_name,fk_film_id, genre_id])
        res.json(genre.rows[0]) 
        
    }

    async deleteGenre (req, res){
        const id = req.params.id
        const genre = await db.query('DELETE FROM genre WHERE genre_id=$1', [id])
        res.json(genre.rows[0])
        
    }

    async getGenreByFilm (req, res){
        const id = req.query.id
        const genres = await db.query('SELECT * FROM genre WHERE fk_film_id = $1', [id])
        res.json(genres.rows)
        
    }
}

module.exports = new GenreController () 