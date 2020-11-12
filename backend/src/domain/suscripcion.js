import Deportista from "./deportista"
import { Model } from "sequelize";
import Plan from "./plan"

class Suscripcion extends Model {
	static TABLE_NAME = "suscripciones";
}

function modelBuilder(dbContext) {
	Suscripcion.init(
		{
            
		},
		{
			sequelize: dbContext,
			modelName: Suscripcion.TABLE_NAME,
		}
    );
    setUpRelations()
}

function setUpRelations(){
    Plan.hasMany(Suscripcion)
    Deportista.hasMany(Suscripcion)
    Suscripcion.belongsTo(Deportista,{
		onDelete:'CASCADE'
	})
    Suscripcion.belongsTo(Plan,{
		onDelete:'CASCADE'
	})
}

export default Suscripcion
export {modelBuilder as init}

