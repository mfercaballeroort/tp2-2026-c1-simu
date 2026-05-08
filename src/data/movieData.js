import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

const COLLECTION = "movies";

export async function findAllMovies({ page = 1, limit = 20, genre = null } = {}) {
    const db = await getDb();
    const skip = (page - 1) * limit;
    
    // Filtro dinámico: si llega genre, filtramos el array 'genres'. Si no, objeto vacío.
    const query = genre ? { genres: genre } : {};

    return await db.collection(COLLECTION)
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray();
}

export async function findMovieById(id) {
    const db = await getDb();
    // Importante: parsear el string ID a ObjectId de BSON
    return await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

export async function findAwardWinners() {
    const db = await getDb();
    return await db.collection(COLLECTION)
        .find({ "awards.wins": { $gt: 0 } })
        .sort({ "awards.wins": -1 }) // De mayor a menor
        .limit(10)
        .toArray();
}

export async function findMoviesByTitle(query) {
    const db = await getDb();
    return await db.collection(COLLECTION)
        .find({ title: { $regex: query, $options: "i" } }) // case-insensitive
        .limit(20)
        .toArray();
}