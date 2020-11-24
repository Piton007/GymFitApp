import Deportista,{connect as DeportistaConnection} from  "./deportista"
import Gimnasio, { connect as GimnasioConnection} from "./gimnasio"
import Entrenador, { connect as EntrenadorConnection} from "./entrenador"
import Maquina, { connect as MaquinaConnection} from "./maquina"
import SuscripcionMaquinas, { connect as SuscripcionMaquinaConnection} from "./suscripcionMaquina"
import Plan, {connect as PlanConnection} from "./plan"
import Suscripcion, {connect as SuscripcionConnection} from "./suscripcion"


function buildDB(context){
    DeportistaConnection(context)
    GimnasioConnection(context)
    PlanConnection(context)
    EntrenadorConnection(context)
    MaquinaConnection(context)
    SuscripcionConnection(context)
    SuscripcionMaquinaConnection(context)
    return context.sync()
    
} 
function connect(context){
    DeportistaConnection(context)
    GimnasioConnection(context)
    PlanConnection(context)
    EntrenadorConnection(context)
    MaquinaConnection(context)
    SuscripcionConnection(context)
    SuscripcionMaquinaConnection(context)
}



export default {
    Deportista,
    Gimnasio,
    Plan,
    Suscripcion,
    Entrenador,
    Maquina,
    SuscripcionMaquinas  
}
export {buildDB as Migrations,connect}