import express from "express";
import bodyParser from "body-parser";
import { db as database } from "./models";
import cors from "cors";
import dotenv from "dotenv";
import api from "./routes";

dotenv.config();

const start = async () => {
    try {
        const host = process.env.HOST || "0.0.0.0";
        const port = process.env.PORT || 8888;
        const app = express();

        await database.authenticate();

        app.use(cors());

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.get("/", (request, response) => {
            response.json({
              api :"Please feel free to use our api with /api"
            });
        });

        app.use("/api", api);

        app.listen(port, host, () => {
            console.log(`Server is running in ${host} at ${port}`);
        });
    } catch (err) {
        console.log(err.message);
    }
}

start();