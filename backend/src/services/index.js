import GimnasioService from "./gimnasio"
import  {Gimnasio as AuthGimnasio, Deportista as AuthDeportista} from "./auth"
import DeportistaService from "./deportista"
import PlanService from "./plan"
import SuscripcionService from "./suscripcion"


export function getServices(repository,mapper){
  return {    
    Gimnasio:new GimnasioService(repository,mapper),
    "AuthGimnasio": new AuthGimnasio(repository,mapper),
    "AuthDeportista":new AuthDeportista(repository,mapper),
    Deportista:new DeportistaService(repository,mapper),
    Plan:new PlanService(repository,mapper),
    Suscripcion:new SuscripcionService(repository,mapper)

} 
}

