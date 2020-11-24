import { useEffect, useState } from "react";
import { EntrenadorDTO,getAll } from "../network/entrenador";





export function useEntrenadores(gimnasioId:number){
    const [entrenadores,setEntrenadores] = useState<EntrenadorDTO[]>([])
    useEffect(()=>{
        let suscribe = true
        if (suscribe){
            getAll(gimnasioId).then((x)=>{
                console.log(x)
                setEntrenadores(x.data||[])
            })
        }   
        return ()=>{
            suscribe = false
        }
    },[])
    return entrenadores
}