import { NavigationProp, ParamListBase, Route} from "@react-navigation/native"
import React from "react"
import { Alert } from "react-native"
import { PlanNullable } from "../global"
import {CreatePlan,CreatePlanModel,EditPlan} from "../molecules"
import { createPlan, update, UpdatePlanDTO } from "../network/planes"

interface Params {
    gimnasioId:number
}



interface Props {
    route:Route<string, Params | undefined>
    navigation:NavigationProp<ParamListBase>
}

interface EditProps {
    route:Route<string, UpdatePlanDTO| undefined>
    navigation:NavigationProp<ParamListBase>
}


export default function({route}:Props){
    const {gimnasioId} = route.params as Params
    function onSubmit(plan:CreatePlanModel){
        createPlan({gimnasioId,...plan})
        .then(({message})=>{
            Alert.alert(message )
        }).catch((err)=>{
            Alert.alert(err.message)
        })
        
    }

    return(
        <CreatePlan  onSubmit={onSubmit}  init={PlanNullable} />
    )
}

export function Edit({route}:EditProps){
    const dto = route.params as UpdatePlanDTO
    function onSubmit(plan:CreatePlanModel){
        update({...plan,id:dto.id,name:plan.nombre,duracion:plan.periodo})
        .then(({message})=>{
            Alert.alert(message )
        }).catch((err)=>{
            Alert.alert(err.message)
        })
        
    }
    return(
        <EditPlan onSubmit={onSubmit} init={{nombre:dto.name,periodo:dto.duracion,...dto}}/>
    )
}