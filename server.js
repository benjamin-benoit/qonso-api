import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const start = async () => {
    try {
        const host = "0.0.0.0";
        const port = process.env.PORT || 8888
        const app = express();

        app.use(cors());

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.get("/", (request, response) => {
            response.json({
              api :"Please feel free to use our api with /api"
            });
        });

        app.listen(port, () => {
            console.log(`Server is running in ${host} at ${port}`);
        });
    } catch (err) {
        console.log(ex.message);
    }
}

start();