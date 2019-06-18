import { Router } from "express";

const api = Router();

api.get("/", (req, res) => {
    res.json({
        name: "qonso.Api",
        meta: {
            version: "1.0.0",
            status: "running"
        }
    });
});

export default api;