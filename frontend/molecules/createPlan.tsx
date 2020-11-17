import React, { useState } from "react"
import { View } from "react-native"
import {Input} from "../atoms"

const nullable:CreatePlan = {
    periodo:0,
    precio:0,
    cantidad:0,
    nombre:"",
    descripcion:""

}

interface CreatePlan {
    periodo:number,
    precio:number,
    cantidad:number,
    nombre:string,
    descripcion:string
}

interface Props{
    onSubmit:(plan:CreatePlan)=>void
}


export default function(props:Props){
    const [plan,setPlan] = useState<CreatePlan>(nullable)


    return(
        <View>
            <Input label="Nombre" value={plan.nombre} onChangeText= {(text: string) => {
            setPlan({...plan,nombre:text});
          }} />
          <Input label="Descripcion" value={plan.nombre} onChangeText= {(text: string) => {
            setPlan({...plan,descripcion:text});
          }}/>
            <Input label="Periodo"  keyboardType="number-pad" suffix="meses" value={plan.nombre} onChangeText= {(text: string) => {
            setPlan({...plan,periodo:parseInt(text)});
          }}/>
            <Input label="Cantidad" suffix="vacantes" keyboardType="number-pad" value={plan.nombre} onChangeText= {(text: string) => {
            setPlan({...plan,cantidad:parseInt(text)});
          }}/>
            <Input label="Precio"  keyboardType="number-pad" prefix="$" value={plan.nombre} onChangeText= {(text: string) => {
            setPlan({...plan,precio:parseFloat(text)});
          }}/>
        </View>
    )
}