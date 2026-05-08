import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // Suponiendo que ya existe

const app = express();

app.use(cors());
app.use(express.json());

// Inyección de rutas
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => res.send("API funcionando 🚀"));

export default app;