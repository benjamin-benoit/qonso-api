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
                key: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                },
                title: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                },
                description: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
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