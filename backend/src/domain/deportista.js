import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "deportistas";
class Deportista extends Model {
	
}
function connect(dbContext){
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
			modelName: TABLE_NAME,
		}
	);
}
function modelBuilder(dbContext) {
	connect(dbContext)
	return Deportista.sync()
}
export default Deportista 
export {modelBuilder as init,connect}
