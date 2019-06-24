import { Router } from "express";
import Product from "../models/product";
import Type from "../models/type";

const api = Router();

api.get("/show", async (req, res) => {
	const products = await Product.findAll();
	res.status(201).json({ products });
});

api.post("/create", async (req, res) => {
	const { name, barcode, typeId } = req.body;

	const type = await Type.findByPk(typeId)
	if (type) {	
		try {
			const product = new Product({
				name,
				barcode,
				TypeId: type.id
			});
			
			await product.save();
			
			res.status(201).json({ data: { product } });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
	else {
		res.status(400).json({ err: "type not found" });
	}
});

api.delete("/delete", async (req, res) => {
	const { id } = req.body;

	await Product.findByPk(id).then(product => {
		if (product) {
			try {
				product.destroy();
				res.status(201).json({ data: { product } });
			} catch (err) {
				res.status(400).json({ err: err.message });
			}
		} else {
			res.status(400).json({ err: "product not found" });
		}
	});
});

export default api;