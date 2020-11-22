import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useState } from "react";
import { DEPORTISTA_KEY } from "../global";
import { DeportistaDTO } from "../network/deportista";

export function useDeportista():[DeportistaDTO,(dto:DeportistaDTO)=>void]{
    const [deportista,setDeportista] = useState<DeportistaDTO>({email:'',id:-1,name:''})

    function changeDeportista(dto:DeportistaDTO){
        AsyncStorage.setItem(DEPORTISTA_KEY, JSON.stringify(dto)).then(() => {
            setDeportista(dto)
          });
    }

    useEffect(()=>{
        let suscribe = true
        if (suscribe){
            AsyncStorage.getItem(DEPORTISTA_KEY).then((x:string | null) => {
                if(x)setDeportista(JSON.parse(x) as DeportistaDTO)
              });
        }   
        return ()=>{
            suscribe = false
        }
    },[])
    return [deportista,changeDeportista]
}