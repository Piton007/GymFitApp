import { API_URL, headers } from "../constants";
import ApiResp from "./dto";

export interface GimnasioDTO{
    id:number,
    name:string,
    email:string
}

export function getAll():Promise<ApiResp<GimnasioDTO>>{
    return fetch(`${API_URL}/gimnasios`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}