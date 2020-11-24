import Deportista from "./deportista"
import { Model } from "sequelize";
import Entrenador from "./entrenador"
import Maquina from "./maquina"
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
	Entrenador.hasMany(Suscripcion)
	Suscripcion.belongsTo(Entrenador,{onDelete:"CASCADE",foreignKey:'entrenadorId'})
    Suscripcion.belongsTo(Deportista, { onDelete: "CASCADE" })
    Suscripcion.belongsTo(Plan, { onDelete: "CASCADE" })
}

export default Suscripcion
export {connect}

