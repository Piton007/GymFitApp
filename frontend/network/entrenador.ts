import { API_URL, headers } from "../constants";
import ApiResp from "./dto";

export interface EntrenadorDTO {
    id: number;
    name: string;
    image: string;
  }
  

  export function getAll(gimnasioId:number):Promise<ApiResp<EntrenadorDTO[]>>{
    return fetch(`${API_URL}/entrenadores?gimnasio=${gimnasioId}`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}


export function deleteEntrenador(entrenadorId:number):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/entrenadores/${entrenadorId}`,{
        method:'DELETE',
        ...headers   
    }).then(x=>x.json())
}