import "reflect-metadata";
import express from "express";
import "dotenv/config"
import { routes } from "./routes";
import "./database";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(process.env.API_PORT, () => console.log(`Server Is Started in Port ${process.env.API_PORT}`));
