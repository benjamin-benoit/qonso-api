import { Router } from "express";
import User from "../models/user";

import jwt from "jsonwebtoken";

const api = Router();

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