import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "gimnasios";
class Gimnasio extends Model {
	
}
function connect(dbContext){
	Gimnasio.init(
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
function modelBuilder(dbContext) {
	connect(dbContext)
	return Gimnasio.sync()
}
export default Gimnasio
export {modelBuilder as init,connect}