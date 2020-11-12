import Deportista from "./deportista"
import { Model } from "sequelize";
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
function modelBuilder(dbContext) {
	connect(dbContext)
	
	return Suscripcion.sync()
}

function setUpRelations(){
    
    Suscripcion.belongsTo(Deportista,{
		onDelete:'CASCADE'
	})
    Suscripcion.belongsTo(Plan,{
		onDelete:'CASCADE'
	})
}

export default Suscripcion
export {modelBuilder as init,connect}

