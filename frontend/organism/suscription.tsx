import React, { useContext, useEffect } from "react"
import {AddSuscription} from "../molecules"
import { MyContext } from "../global"
import { useNavigation } from "@react-navigation/native"

const Title = 'My Suscription'
export default function(){
    const navigationHeader = useNavigation()
    
    useEffect(()=>{
        let suscribe = true
        if (suscribe){
            navigationHeader.setOptions({
                headTitle:Title,
                headerTransparent:true,
               
            })
        }
    },[])
    
    return (
        <AddSuscription/>
    )
}