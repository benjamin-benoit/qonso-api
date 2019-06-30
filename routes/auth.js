import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

const api = Router();

api.post("/register", async (req, res) => {
	const { nickname, email, password, password_confirmation } = req.body;

	try {
		if (password == password_confirmation) {

			const user = new User({
				nickname,
				email,
				password
			});

			await user.save();

			const payload = { id: user.id, nickname, email };
			const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });

			res.status(201).json({ data: { user }, meta: { token } });
		} else {
			res.status(400).json({ err: "password are not the same" });
		}
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
});

api.post("/login", (req, res) => {
	const { nickname, password } = req.body;

	try {
		User.findOne({ where: { nickname: nickname, password: password } }).then(user => {
			if (user) {
				const payload = { id: user.id, nickname, email: user.email };
				const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });

				res.status(201).json({ data: { user }, meta: { token } });
			}
			else {
				res.status(400).json({ err: "login or password incorrect" });
			}
		});
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
});

export default api;