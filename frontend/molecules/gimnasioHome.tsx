import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Info,{ GimnasioViewModel } from "../atoms/gimnasioInfo";
import { SuscripcionViewModel } from "../atoms/suscripcion";
import { GYM_KEY, MyContext } from "../global";
import Entrenadores from "../organism/Entrenadores"
import Header from "./homeHeader"

import { GimnasioDTO } from "../network/gimnasio";

function buildViewModel(gimnasio:GimnasioDTO):GimnasioViewModel{
    return {...gimnasio}
}



export default function({navigation}:any){
    const navigationHeader = useContext(MyContext)
    const [info,setInfo] = useState<GimnasioViewModel>({id:-1,email:'null@gmail.com',name:'null'})
    
 

    useEffect(()=>{
        let suscribe = true
        if(suscribe){
         
         AsyncStorage.getItem(GYM_KEY).then((x:string | null) => {
             if(x !== null){
                setInfo(buildViewModel(JSON.parse(x))) 
             }
            
          }); 
          navigation.addListener('focus',()=>{
              navigationHeader?.setOptions({
                headerTitle: ()=>(<Header navigation={navigationHeader}/>)
            })
        })
        }
        return ()=>{
           
            suscribe = false
        }
         
     },[])
    
    return(
        <ScrollView>
            <View style={{flex:1,flexGrow:1,flexBasis:250,marginVertical:8,marginHorizontal:8}}>
            <Info {...info} />
            </View>{
                info.id !== -1 &&
                <Entrenadores gimnasioId={info.id} />
            }
            
        </ScrollView>
    )
}