import { DataTypes, Model } from "sequelize";

class Gimnasio extends Model {
	static TABLE_NAME = "gimnasios";
}

function modelBuilder(dbContext) {
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
			modelName: Gimnasio.TABLE_NAME,
		}
	);
}
export default Gimnasio
export {modelBuilder as init}