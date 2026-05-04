import { getAllMovies, getMovieByID, getAwardWinners, searchMoviesByTitle } from "../services/movieService.js";

// TODO (ejercicio 1): leer page y limit de req.query (ver ejemplo en userController.js)
// Llamar a getAllMovies y responder con el array. Manejar errores con status 500.
export async function getAllMoviesController(req, res) {

}

// TODO (ejercicio 2): leer req.params.id, llamar a getMovieByID
// Responder 404 si no existe, o la película en JSON si existe. Manejar errores con status 500.
export async function getMovieController(req, res) {

}

// TODO (ejercicio 4): llamar a getAwardWinners y responder con el array en JSON
// Manejar errores con status 500
export async function getAwardWinnersController(req, res) {

}

// TODO (ejercicio 5): leer el query param `q` de req.query
// Si no viene `q`, responder 400 con mensaje "Se requiere un término de búsqueda"
// Si viene, llamar a searchMoviesByTitle y responder con el array. Manejar errores con status 500.
export async function searchMoviesController(req, res) {

}
