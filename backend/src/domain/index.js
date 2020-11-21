import Deportista,{connect as DeportistaConnection} from  "./deportista"
import Gimnasio, { connect as GimnasioConnection} from "./gimnasio"
import Plan, {connect as PlanConnection} from "./plan"
import Suscripcion, {connect as SuscripcionConnection} from "./suscripcion"


function buildDB(context){
    DeportistaConnection(context)
    GimnasioConnection(context)
    PlanConnection(context)
    SuscripcionConnection(context)
    return context.sync()
    
} 
function connect(context){
    DeportistaConnection(context)
    GimnasioConnection(context)
    PlanConnection(context)
    SuscripcionConnection(context)
}



export default {
    Deportista,
    Gimnasio,
    Plan,
    Suscripcion  
}
export {buildDB as Migrations,connect}