const db = require('../db')

class FilmController {
    async createFilm (req, res){
        const{film_id,film_name,film_date_year} = req.body
        const newFilm = await db.query('INSERT INTO film (film_id,film_name,film_date_year) values ($1, $2, $3) RETURNING *', [film_id,film_name,film_date_year])
        res.json(newFilm.rows[0])

    }
    
    async getFilms (req, res){
        const films = await db.query('SELECT * FROM film')
        res.json(films.rows)
        
    }
    
    async getOneFilm (req, res){
        const id = req.params.id
        const film = await db.query('SELECT * FROM film WHERE film_id=$1', [id])
        res.json(film.rows[0])
        
    }

    async updateFilm (req, res){
        const{film_name,film_date_year, film_id} = req.body
        const film = await db.query('UPDATE film set film_name=$1, film_date_year=$2 WHERE film_id=$3 RETURNING *', [film_name,film_date_year, film_id])
        res.json(film.rows[0]) 
        
    }

    async deleteFilm (req, res){
        const id = req.params.id
        const film = await db.query('DELETE FROM film WHERE film_id=$1', [id])
        res.json(film.rows[0])
        
    }
}

module.exports = new FilmController () 