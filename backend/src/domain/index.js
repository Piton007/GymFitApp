import Deportista,{init as DeportistaBuilder} from  "./deportista"
import Gimnasio, {init as GimnasioBuilder} from "./gimnasio"
import Plan, {init as PlanBuilder} from "./plan"
import Suscripcion, {init as SuscripcionBuilder} from "./suscripcion"

const DB = {
    Deportista,
    Gimnasio,
    Plan,
    Suscripcion  
}
const Builder = {
    Deportista:DeportistaBuilder,
    Gimnasio:GimnasioBuilder,
    Plan:PlanBuilder,
    Suscripcion:SuscripcionBuilder
} 


export default DB
export {Builder}