import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Info,{ DeportistaViewModel } from "../atoms/deporistaInfo";
import { SuscripcionViewModel } from "../atoms/suscripcion";
import { DEPORTISTA_KEY, MyContext } from "../global";
import { DeportistaDTO } from "../network/deportista";
import SuscripcionInfo from "../atoms/suscripcion"

function buildViewModel(deportista:DeportistaDTO):DeportistaViewModel{
    return {...deportista}
}

const suscripciones:SuscripcionViewModel[] = [{descripcion:'Descripcion1',duracion:'2',gimnasio:'Gimnasio1',name:'VIP',precio:'200'},
{descripcion:'Descripcion1',duracion:'2',gimnasio:'Gimnasio1',name:'VIP',precio:'200'},
{descripcion:'Descripcion1',duracion:'2',gimnasio:'Gimnasio1',name:'VIP',precio:'200'},
{descripcion:'Descripcion1',duracion:'2',gimnasio:'Gimnasio1',name:'VIP',precio:'200'},
]  

export default function({navigation}:any){
    const navigationHeader = useContext(MyContext)
    const [info,setInfo] = useState<DeportistaViewModel>({email:'null@gmail.com',name:'null'})
    
    

    useEffect(()=>{
        let suscribe = true
        if(suscribe){
         
         AsyncStorage.getItem(DEPORTISTA_KEY).then((x:string | null) => {
             if(x !== null){
                setInfo(buildViewModel(JSON.parse(x))) 
             }
            
          }); 
          navigation.addListener('focus',()=>{
              navigationHeader.setOptions({
                title:'Home'
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
            </View>
            <View style={{flex:2,flexShrink:1,marginHorizontal:8}}>
                <Text style={{fontSize:24,marginVertical:12}} >Mis suscripciones</Text>
                
               {
                   suscripciones.map((x,index)=>(
                       <View key={index} style={{margin:8}}>
                           <SuscripcionInfo  {...x}/>
                       </View>
                    
                   ))
               }
              
            </View>
            
        </ScrollView>
    )
}