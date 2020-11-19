import { NavigationProp, ParamListBase, Route} from "@react-navigation/native"
import React from "react"
import { Alert } from "react-native"
import {SubmitPlan,CreatePlanModel} from "../molecules"
import { createPlan } from "../network/planes"

interface Params {
    gimnasioId:number
}

interface Props {
    route:Route<string, Params | undefined>
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
        <SubmitPlan  onSubmit={onSubmit} />
    )
}