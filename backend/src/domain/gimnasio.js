import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "gimnasios";
class Gimnasio extends Model {
   
}
function connect(dbContext){
	Gimnasio.init(
		{
			name: {
				type: DataTypes.STRING,
				
			},
			email: {
				type: DataTypes.STRING,
				
            },
            longitud:{
                type:DataTypes.STRING,
            },
            latitud:{
                type:DataTypes.STRING
            },
            direccion:{
                type:DataTypes.STRING
            }
		},
		{
			sequelize: dbContext,
			modelName: TABLE_NAME,
		}
	);
}

export default Gimnasio
export {connect}