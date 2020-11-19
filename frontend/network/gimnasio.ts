import { API_URL, headers } from "../constants";
import ApiResp from "./dto";
import { PlanDTO } from "./planes";

export interface GimnasioDTO{
    id:number,
    name:string,
    email:string,
    latitud:string,
    longitud:string,
    direccion:string
    planes:PlanDTO[]
}

export function getAll():Promise<ApiResp<GimnasioDTO[]>>{
    return fetch(`${API_URL}/gimnasios`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}

export function getByIdAndPopulatePlans(id:number):Promise<ApiResp<GimnasioDTO>>{
    return fetch(`${API_URL}/gimnasios/${id}/planes`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}