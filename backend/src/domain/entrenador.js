import { DataTypes, Model } from "sequelize";
import Gimmnasio from "./gimnasio";

const TABLE_NAME = "entrenadores";
class Entrenador extends Model {



}
function connect(dbContext) {
	Entrenador.init(
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
	Gimmnasio.hasMany(Entrenador)
	Entrenador.belongsTo(Gimmnasio, { onDelete: "CASCADE" });
}

export default Entrenador;
export {connect };
