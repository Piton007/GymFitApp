import { Alert } from "react-native";
import { API_KEY, API_URL,headers } from "../constants";
import ApiResp from "./dto";

export interface PlanDTO {
    id:number,
    name:string,
    gimnasio_id:string,
    descripcion:string,
    descuento:number|null,
    duracion:number,
    precio:number,
    cantidad:number,
    availability:boolean
}

export interface UpdatePlanDTO{
    id:number,
    name:string,
    duracion:number,
    descripcion:string,
    descuento:number|null,
    precio:number,
    cantidad:number
}

export interface CreatePlanDTO{
    gimnasioId:number,
    periodo:number,
    precio:number,
    descuento:number|null,
    cantidad:number,
    nombre:string,
    descripcion:string
}

export function getAll():Promise<ApiResp<PlanDTO[]>>{
    return fetch(`${API_URL}/planes`,{
        method:'GET',
        ...headers   
    }).then(x=>x.json())
}
export function update(plan:UpdatePlanDTO):Promise<ApiResp<number>>{
    
    return fetch(`${API_URL}/planes/${plan.id}`,{
        method:'PUT',
        ...headers,
        body:JSON.stringify({
            periodo:plan.duracion,
            descuento:plan.descuento,
            precio:plan.precio,
            cantidad:plan.cantidad,
            nombre:plan.name,
            descripcion:plan.descripcion
        })   
    }).then(x=>x.json())
}

export function deletePlan(planId:number):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/planes/${planId}`,{
        method:'DELETE',
        ...headers   
    }).then(x=>x.json())
}
export function createPlan(plan:CreatePlanDTO):Promise<ApiResp<number>>{
    
    return fetch(`${API_URL}/planes`,{
        method:'POST',
        ...headers,
        body:JSON.stringify({
            gimnasio_id:plan.gimnasioId,
            periodo:plan.periodo,
            descuento:plan.descuento,
            precio:plan.precio,
            cantidad:plan.cantidad,
            nombre:plan.nombre,
            descripcion:plan.descripcion
        })
    }).then(x=>x.json())
}

