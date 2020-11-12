import { DataTypes, Model } from "sequelize";

class Deportista extends Model {
	static TABLE_NAME = "users";
}

function modelBuilder(dbContext) {
	Deportista.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					len: [0, 20],
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: true,
				},
			},
		},
		{
			sequelize: dbContext,
			modelName: Deportista.TABLE_NAME,
		}
	);
}
export default Deportista 
export {modelBuilder as init}
