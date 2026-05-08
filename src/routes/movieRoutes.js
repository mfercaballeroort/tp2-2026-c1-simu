import express from "express";
import { 
    getAllMoviesController, 
    getMovieController, 
    getAwardWinnersController, 
    searchMoviesController 
} from "../controllers/movieController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// RUTAS ESTÁTICAS PRIMERO (Evita que "winners" o "search" entren en /:id)
router.get("/winners", getAwardWinnersController);
router.get("/search", searchMoviesController);
router.get("/", getAllMoviesController);

// RUTA DINÁMICA PROTEGIDA
router.get("/:id", authMiddleware, getMovieController);

export default router;