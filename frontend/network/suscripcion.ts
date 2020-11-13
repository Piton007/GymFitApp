import { API_URL, headers } from "../constants";
import ApiResp from "./dto";

export interface SuscripcionDTO{
    id:number,
    name:string,
    descripcion:string,
    duracion:number,
    precio:number
}

export function getAll():Promise<ApiResp<SuscripcionDTO>>{
    return fetch(`${API_URL}/gimnasios`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}