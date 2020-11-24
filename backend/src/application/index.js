import Auth from "./auth"
import Gimnasio from "./gimnasio"
import Plan from "./plan"
import Suscripcion from "./suscripcion"
import Entrenador from "./entrenador"
import Maquina from "./maquina"

export function getRouters(services){
    return {
        "AuthDeportista": new Auth.Deportista(services.AuthDeportista).router,
        "AuthGimnasio": new Auth.Gimnasio(services.AuthGimnasio).router,
        Gimnasio: new Gimnasio(services.Gimnasio).router,
        Plan: new Plan(services.Plan).router,
        Suscripcion: new Suscripcion(services.Suscripcion).router,
        Entrenador: new Entrenador(services.Entrenador).router,
        Maquina: new Maquina(services.Maquina).router,

    }
}
