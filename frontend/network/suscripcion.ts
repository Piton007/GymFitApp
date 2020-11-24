import { API_URL, headers } from "../constants";
import ApiResp from "./dto";

export interface CreateSuscriptionDTO{
    planId:number
    deportistaId:number
    entrenadorId:number
    maquinaIds:number[]
}

export interface SuscripcionDTO{
    id:number,
    gym:string,
    name:string,
    descripcion:string,
    duracion:number,
    precio:number
}

export function getAll(deportistaId:number):Promise<ApiResp<SuscripcionDTO[]>>{
    return fetch(`${API_URL}/suscripciones?deportista=${deportistaId}`,{
        method:'GET',
        ...headers
    }).then(x=>x.json())
}

export function create({planId,deportistaId,entrenadorId,maquinaIds}:CreateSuscriptionDTO):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/suscripciones/`,{
        method:'POST',
        ...headers,
        body:JSON.stringify({
            plan_id:planId,
            deportista_id:deportistaId,
            entrenador_id:entrenadorId,
            maquinas:maquinaIds
        })
    }).then(x=>x.json())
}

export function unSuscribe(suscripcionId:number):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/suscripciones/${suscripcionId}`,{
        method:'DELETE',
        ...headers   
    }).then(x=>x.json())
}