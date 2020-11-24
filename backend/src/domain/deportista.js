import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "deportistas";
class Deportista extends Model {
	
}
function connect(dbContext){
	Deportista.init(
		{
			name: {
				type: DataTypes.STRING,
				
			},
			email: {
				type: DataTypes.STRING,
				
			},
		},
		{
			sequelize: dbContext,
			modelName: TABLE_NAME,
		}
	);
}

export default Deportista 
export {connect}
