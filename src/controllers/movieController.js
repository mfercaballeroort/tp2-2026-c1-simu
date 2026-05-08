import * as movieService from "../services/movieService.js";

export async function getAllMoviesController(req, res) {
    try {
        const { page, limit, genre } = req.query;
        const movies = await movieService.getAllMovies({ page, limit, genre });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

export async function getMovieController(req, res) {
    try {
        const movie = await movieService.getMovieByID(req.params.id);
        if (!movie) return res.status(404).json({ message: "Película no encontrada" });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "ID de formato inválido o error de servidor" });
    }
}

export async function getAwardWinnersController(req, res) {
    try {
        const winners = await movieService.getAwardWinners();
        res.json(winners);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ganadores" });
    }
}

export async function searchMoviesController(req, res) {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ message: "Se requiere un término de búsqueda (q)" });
        
        const movies = await movieService.searchMoviesByTitle(query);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error en la búsqueda" });
    }
}