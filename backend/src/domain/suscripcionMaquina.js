
import { Model } from "sequelize";
import Maquina from "./maquina"
import Suscripcion from "./suscripcion"




const TABLE_NAME = "suscripcion_maquinas";
class SuscripcionMaquinas extends Model {

}
function connect(dbContext){
	SuscripcionMaquinas.init(
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
	Suscripcion.hasMany(SuscripcionMaquinas,{foreignKey:'suscripcionId'})
	Maquina.hasMany(SuscripcionMaquinas,{foreignKey:'maquinaId'})
    SuscripcionMaquinas.belongsTo(Suscripcion,{onDelete:"CASCADE",foreignKey:'suscripcionId'})
    SuscripcionMaquinas.belongsTo(Maquina,{onDelete:"CASCADE",foreignKey:'maquinaId'})
}

export default SuscripcionMaquinas
export {connect}

