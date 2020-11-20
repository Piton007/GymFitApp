import React, { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GimnasioViewModel } from "../atoms/gimnasio";
import { getAll, getByIdAndPopulatePlans, GimnasioDTO } from "../network/gimnasio";
import Plan from "../atoms/planes"
import {GimnasioPlanHeader as Header} from "../atoms"
import { GYM_KEY, MyContext } from "../global";
import { deletePlan, PlanDTO } from "../network/planes";
import { PlanViewModel } from "../atoms/planes";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";


function buildViewModel(plan:PlanDTO):PlanViewModel{
    return {
        disponibilidad:plan.availability,
        descripcion:plan.descripcion,
        periodo:plan.duracion+" meses",
        name:plan.name || "Standard",
        precio:"S/"+plan.precio,
        cantidad:plan.cantidad
    }
}


interface Props {
    navigation:NavigationProp<ParamListBase>
}

export default function(/* props:GimnasioDTO[] */){
    const [planes,setPlanes] = useState<PlanDTO[]>([])
    const navigation = useNavigation()


    const navigationHeader = useContext(MyContext)
    function deletes(index:number){
        deletePlan(index).then(()=>{
            setPlanes(planes.filter((x)=>x.id !== index))
        }).catch((err)=>{Alert.alert(err.message)})
    }
    
    useEffect(()=>{
       let suscribe = true
       if(suscribe){
       

        navigation.addListener('focus',()=>{
            AsyncStorage.getItem(GYM_KEY).then((x:string | null)=>{
                if (x){
                    const {id} = JSON.parse(x)
                    getByIdAndPopulatePlans(id as number).then(({data})=>{
                        setPlanes(data?.planes || [])
                    })
                }
                
            })
            navigationHeader?.setOptions({
              
              headerTitle: ()=>(<Header/>) 
          })
      })
       }
       return ()=>{
           suscribe= false
       }
        
    },[])

  
    return (
        <ScrollView>
            {
                planes.map((x)=>(
                    <View  key={x.id} style={{marginHorizontal:8,marginVertical:8}}>
                        <Plan data={buildViewModel(x)} deleteAction={()=>{
                            deletes(x.id)
                        }} />
                    </View>
                ))
            }
            
        </ScrollView>
    )
}