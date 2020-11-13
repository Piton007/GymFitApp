import { API_URL, headers } from "../constants";
import { DeportistaDTO } from "./deportista";
import ApiResp from "./dto";

export interface AuthGimnasioDTO{
    email:string
}


function loginGimnasio(email:string):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/authGimnasio/login`,{
        method:'POST',
        ...headers,
        body:JSON.stringify({
            email
        })
    }).then(x=>x.json())
}


function loginDeportista(email:string):Promise<ApiResp<DeportistaDTO>>{
    return fetch(`${API_URL}/authDeportista/login`,{
        method:'POST',
        ...headers,
        body:JSON.stringify({
            email
        })
    }).then(x=>x.json())
}

const Gimnasio = {
    login:loginGimnasio
}

const Deportista = {
    login:loginDeportista
}
export default {
    Gimnasio,
    Deportista
}
export {Gimnasio, Deportista}