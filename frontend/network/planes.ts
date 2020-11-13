import { API_KEY, API_URL,headers } from "../constants";
import ApiResp from "./dto";

export interface PlanDTO {
    id:number,
    name:string,
    descripcion:string,
    duracion:number,
    precio:number,
    available:boolean
}

export interface CreatePlanDTO{
    gimnasioId:number,
    periodo:number,
    precio:number,
    cantidad:number,
    nombre:string,
    descripcion:string
}

export function deletePlan(planId:number):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/gimnasios/${planId}`,{
        method:'DELETE',
        ...headers   
    }).then(x=>x.json())
}
export function createPlan(plan:CreatePlanDTO):Promise<ApiResp<number>>{
    return fetch(`${API_URL}/gimnasios`,{
        method:'POST',
        ...headers,
        body:JSON.stringify({
            gimnasio_id:plan.gimnasioId,
            periodo:plan.periodo,
            precio:plan.precio,
            cantidad:plan.cantidad,
            nombre:plan.nombre,
            descripcion:plan.descripcion
        })
    }).then(x=>x.json())
}

