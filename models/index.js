import Sequelize from "sequelize";
import dotenv from "dotenv";

import User from "./user";
import Consume from "./consume";
import Product from "./product";
import Type from "./type";

dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URL + "?" + process.env.DATABASE_ARG);

User.init(db);
Consume.init(db);
Product.init(db);
Type.init(db);

Product.belongsTo(Type);

Consume.belongsTo(User);
Consume.belongsTo(Product);