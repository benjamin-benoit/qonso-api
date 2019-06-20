import Sequelize, { Model } from "sequelize";

export default class User extends Model {
    static init(database) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
					autoIncrement: true
                },
                nickname: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                },
                email: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true,
						isEmail: true
					}
                },
                password: {
					type: Sequelize.STRING,
					allowNull: false,
					validate: {
						notEmpty: true
					}
                }
            },
            {
                tableName: "user",
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