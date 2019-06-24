import { Router } from "express";
import User from "../models/user";

const api = Router();

api.get("/show", async (req, res) => {
	const users = await User.findAll();
	res.status(201).json({ users });
});