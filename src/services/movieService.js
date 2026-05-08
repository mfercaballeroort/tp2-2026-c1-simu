import { findAllMovies, findMovieById, findAwardWinners, findMoviesByTitle } from "../data/movieData.js";

export async function getAllMovies({ page, limit, genre }) {
    const p = parseInt(page) || 1;
    const l = parseInt(limit) || 20;
    return await findAllMovies({ page: p, limit: l, genre });
}

export async function getMovieByID(id) {
    return await findMovieById(id);
}

export async function getAwardWinners() {
    return await findAwardWinners();
}

export async function searchMoviesByTitle(query) {
    return await findMoviesByTitle(query);
}