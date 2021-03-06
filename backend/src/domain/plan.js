import { DataTypes, Model } from "sequelize";
import Gimmnasio from "./gimnasio";

const TABLE_NAME = "plans";
class Plan extends Model {



}
function connect(dbContext) {
	Plan.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					len: [0, 20],
				},
			},
			descripcion: {
				type: DataTypes.STRING,
				validate: {
					len: [0, 100],
				},
			},
			periodo: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
				},
			},
			precio: {
				type: DataTypes.DECIMAL,
				validate: {
					isDecimal: true,
				},
			},
			cantidad: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			descuento:{
				type:DataTypes.INTEGER,
				allowNull:true
			}
		},
		{
			sequelize: dbContext,
			modelName: TABLE_NAME,
		}
	);

	Plan.prototype.isAvailable = function () {
		return this.cantidad > 0;
	};
	setUpRelations();
}


function setUpRelations() {
	Gimmnasio.hasMany(Plan)
	Plan.belongsTo(Gimmnasio, { onDelete: "CASCADE" });
}

export default Plan;
export {connect };
