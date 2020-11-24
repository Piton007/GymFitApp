import { API_URL, headers } from "../constants";
import ApiResp from "./dto";

export interface MaquinaDTO {
    id: number;
    name: string;
    image: string;
  }


  export function getAll(gimnasioId:number):Promise<ApiResp<MaquinaDTO[]>>{
    return fetch(`${API_URL}/maquinas?gimnasio=${gimnasioId}`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}