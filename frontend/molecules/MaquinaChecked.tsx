import React from "react"
import Maquina,{MaquinaViewModel} from "../atoms/Maquina"
import Checkbox,{CheckboxStatus} from "../atoms/Checkbox"

interface Props {
    maquina: MaquinaViewModel,
    status: CheckboxStatus,
    onPress:()=>void
}

export default function(props:Props){
    
    return (
       
        <Maquina maquina={props.maquina} right={<Checkbox
            status={props.status}
            onPress={props.onPress}
        />}/> 
    )
}
