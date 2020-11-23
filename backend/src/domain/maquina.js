import { DataTypes, Model } from "sequelize";
import Gimmnasio from "./gimnasio";

const TABLE_NAME = "maquinas";
class Maquina extends Model {



}
function connect(dbContext) {
	Maquina.init(
		{
			name: {
				type: DataTypes.STRING
			},
			image: {
				type: DataTypes.STRING
			}
		},
		{
			sequelize: dbContext,
			modelName: TABLE_NAME,
		}
	);
	setUpRelations();
}


function setUpRelations() {
	Gimmnasio.hasMany(Maquina)
	Maquina.belongsTo(Gimmnasio, { onDelete: "CASCADE" });
}

export default Maquina;
export {connect };
