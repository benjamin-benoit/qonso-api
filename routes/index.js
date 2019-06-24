import { Router } from "express";
import User from "./user";
import Type from "./type";
import Product from "./product";
import Consume from "./consume";

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

api.use("/user", User);
api.use("/type", Type);
api.use("/product", Product);
api.use("/consume", Consume);

export default api;