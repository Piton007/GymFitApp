import Auth from "./auth"
import Gimnasio from "./gimnasio"
import Plan from "./plan"
import Suscripcion from "./suscripcion"

export function getRouters(services){
    return {
        "AuthDeportista": new Auth.Deportista(services.AuthDeportista).router,
        "AuthGimnasio": new Auth.Gimnasio(services.AuthGimnasio).router,
        Gimnasio: new Gimnasio(services.Gimnasio).router,
        Plan: new Plan(services.Plan).router,
        Suscripcion: new Suscripcion(services.Suscripcion).router
    }
}
