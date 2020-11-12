import Deportista,{init as DeportistaBuilder,connect as DeportistaConnection} from  "./deportista"
import Gimnasio, {init as GimnasioBuilder, connect as GimnasioConnection} from "./gimnasio"
import Plan, {init as PlanBuilder, connect as PlanConnection} from "./plan"
import Suscripcion, {init as SuscripcionBuilder, connect as SuscripcionConnection} from "./suscripcion"

const DB = {
    Deportista,
    Gimnasio,
    Plan,
    Suscripcion  
}
function buildDB(context){
    return Promise.all([DeportistaBuilder(context),
        GimnasioBuilder(context),
        PlanBuilder(context),
        SuscripcionBuilder(context)])
    
    
    
} 
function connect(context){
    DeportistaConnection(context)
    GimnasioConnection(context)
    PlanConnection(context)
    SuscripcionConnection(context)
}



export default DB
export {buildDB as Migrations,connect}