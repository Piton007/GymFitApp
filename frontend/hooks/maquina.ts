import { useEffect, useState } from "react";
import { MaquinaDTO,getAll } from "../network/maquinas";




export function useMaquinas(gimnasioId:number){
    const [maquinas,setMaquinas] = useState<MaquinaDTO[]>([])
    useEffect(()=>{
        let suscribe = true
        if (suscribe){
            getAll(gimnasioId).then((x)=>{
                console.log('Maquinas')
                setMaquinas(x.data||[])
            })
        }   
        return ()=>{
            suscribe = false
        }
    },[])
    return maquinas
}