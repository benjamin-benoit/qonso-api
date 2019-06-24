import { Router } from "express";
import User from "../models/user";

import jwt from "jsonwebtoken";

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

api.get("/show", async (req, res) => {
	const users = await User.findAll();
	res.status(201).json({ users });
});

api.put("/changePassword", async (req, res) => {
	const { id, password, newPassword, newPassword_confirmation } = req.body;

	await User.findByPk(id).then(async user => {
		if (user) {
			if (password == user.password && newPassword == newPassword_confirmation) {

				try {
					await user.update({
						password: newPassword
					});

					const payload = { id: user.id, nickname: user.nickname, email: user.email };
					const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });

					res.status(201).json({ data: { user }, meta: { token } });
				} catch (err) {
					res.status(400).json({ err: err.message });
				}
			} else {
				res.status(400).json({ err: "password not correct" });
			}
		}
		else {
			res.status(400).json({ err: "User not found" });
		}
	});
});

api.delete("/delete", async (req, res) => {
	const { id } = req.body;

	await User.findByPk(id).then(user => {
		if (user) {
			try {
				user.destroy();
				res.status(201).json({ data: { user } });
			} catch (err) {
				res.status(400).json({ err: err.message });
			}
		} else {
			res.status(400).json({ err: "user not found" });
		}
	});
});

api.post("/checkJwt", (req, res) => {
	const token = req.headers.authorization;

	jwt.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			res.status(400).json({ err: err.message });
		}
		else {
			res.status(201).json({ data: { message: "valide token" } });
		}
	});
});

export default api;