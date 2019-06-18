import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE);

export const db = new Sequelize(process.env.DATABASE);
