import Sequelize, { Model } from "sequelize";

export default class Consume extends Model {
    static init(database) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
					autoIncrement: true
                },
                longitude: {
					type: Sequelize.DOUBLE,
					allowNull: false,
					validate: {
						notEmpty: true
					}
				},
				latitude: {
					type: Sequelize.DOUBLE,
					allowNull: false,
					validate: {
						notEmpty: true
					}
				}
            },
            {
                tableName: "consume",
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