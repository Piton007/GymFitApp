import React, { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GimnasioViewModel } from "../atoms/gimnasio";
import { getAll, GimnasioDTO } from "../network/gimnasio";
import Gimnasio from "../atoms/gimnasio"
import { MyContext } from "../global";


function buildViewModel(gimnasio:GimnasioDTO):GimnasioViewModel{
    return {
        email:gimnasio.email,
        nombre:gimnasio.name,
        direccion:gimnasio.direccion
    }
}


export default function(/* props:GimnasioDTO[] */{navigation}:any){
    const [gimnasios,setGimnasios] = useState<GimnasioDTO[]>([])


    const navigationHeader = useContext(MyContext)
    
    useEffect(()=>{
       let suscribe = true
       if(suscribe){
       
        getAll().then(({data})=>{
            setGimnasios(data|| [])
        })
        navigation.addListener('focus',()=>{
            navigationHeader.setOptions({
              title:'Gimnasios'
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
                gimnasios.map(x=>(
                    <View  key={x.id} style={{marginHorizontal:8,marginVertical:8}}>
                        <Gimnasio {...buildViewModel(x)} />
                    </View>
                ))
            }
            
        </ScrollView>
    )
}