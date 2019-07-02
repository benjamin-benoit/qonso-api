import { Router } from "express";
import Consume from "../models/consume";
import Product from "../models/product";
import User from "../models/user";
import Type from "../models/type";

const api = Router();

api.get("/show", async (req, res) => {
	const consumes = await Consume.findAll();
	res.status(201).json({ consumes });
});

api.post("/create", async (req, res) => {
	const { key, title, description, longitude, latitude, productId, userId } = req.body;

	const product = await Product.findByPk(productId);
	const user = await User.findByPk(userId);

	if (user && product) {
		try {
			const consume = new Consume({
				key,
				title,
				description,
				longitude,
				latitude,
				UserId: user.id,
				ProductId: product.id
			});

			await consume.save();

			res.status(201).json({ data: { consume } });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	} else {
		res.status(400).json({ err: "user or product not found" });
	}
});

api.post("/createRecursive", async (req, res) => {
	const { key, title, description, longitude, latitude, productName, productBarCode, typeName, userId } = req.body;

	try {
		// console.log("find or create type");
		const type = await Type.findOrCreate({ where: { name: typeName } });
		// console.log(type[0].dataValues.id);
		// console.log("type created");
		const product = await Product.findOrCreate({ where: { name: productName, barcode: productBarCode, TypeId: type[0].dataValues.id } });
		// console.log("product created");

		const user = await User.findByPk(userId);

		if (user && product) {
			try {
				const consume = new Consume({
					key,
					title,
					description,
					longitude,
					latitude,
					UserId: user.id,
					ProductId: product[0].dataValues.id
				});

				await consume.save();

				res.status(201).json({ data: { consume } });
			} catch (err) {
				res.status(400).json({ err: err.message });
			}
		} else {
			res.status(400).json({ err: "user or product not found" });
		}
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
});

api.delete("/delete", async (req, res) => {
	const { id } = req.body;

	await Consume.findByPk(id).then(consume => {
		if (consume) {
			try {
				consume.destroy();
				res.status(201).json({ data: { consume } });
			} catch (err) {
				res.status(400).json({ err: err.message });
			}
		} else {
			res.status(400).json({ err: "consume not found" });
		}
	});
});

api.get("/getAll", async (req, res) => {
	await Consume.findAll({
		include: [{
			model: User
		},
		{
			model: Product,
			include: [{
				model: Type
			}]
		}]
	}).then(consumes => {
		res.status(201).json({ consumes });
	});
});

api.get("/getByUserId/:userId", async (req, res) => {
	const { userId } = req.params;

	const user = await User.findByPk(userId);

	if (!user) {
		res.status(400).json({ err: "user not found" });
	}
	else {
		await Consume.findAll({
			include: [{
				model: User
			},
			{
				model: Product,
				include: [{
					model: Type
				}]
			}],
			where: {
				UserId: userId
			}
		}).then(consumes => {
			res.status(201).json({ consumes });
		}).catch(err => {
			res.status(400).json({ err: err.message });
		});
	}
});

export default api;