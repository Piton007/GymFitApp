import Deportista from "./deportista"
import { Model,DataTypes } from "sequelize";
import Plan from "./plan"

const TABLE_NAME = "suscripciones";
class Suscripcion extends Model {

}
function connect(dbContext){
	Suscripcion.init(
		{

		},
		{
			sequelize: dbContext,
			modelName: TABLE_NAME,
		}
	);
	setUpRelations()
}

function setUpRelations(){
	Deportista.hasMany(Suscripcion)
	Plan.hasMany(Suscripcion)
    Suscripcion.belongsTo(Deportista, { onDelete: "CASCADE" })
    Suscripcion.belongsTo(Plan, { onDelete: "CASCADE" })
}

export default Suscripcion
export {connect}

