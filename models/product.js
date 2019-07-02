import Sequelize, { Model } from "sequelize";

export default class Product extends Model {
    static init(database) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
					autoIncrement: true
                },
                name: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                },
                barcode: {
					type: Sequelize.DOUBLE,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                }
            },
            {
                tableName: "product",
                sequelize: database,

                indexes: [
					{
						unique: true,
						fields: ["id"]
					}
				]
            }
        )
    }
}