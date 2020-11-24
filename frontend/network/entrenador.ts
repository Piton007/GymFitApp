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