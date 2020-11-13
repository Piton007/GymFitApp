import React, { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GimnasioViewModel } from "../atoms/gimnasio";
import { getAll, GimnasioDTO } from "../network/gimnasio";
import Plan from "../atoms/planes"
import { MyContext } from "../global";
import { PlanDTO } from "../network/planes";
import { PlanViewModel } from "../atoms/planes";


function buildViewModel(plan:PlanDTO):PlanViewModel{
    return {
        disponibilidad:plan.available,
        descripcion:plan.descripcion,
        periodo:plan.duracion+" meses",
        name:plan.name,
        precio:"S/"+plan.precio,
        cantidad:plan.cantidad
    }
}
const dummy:PlanDTO[] =[{
    id:0,name:'Plan VIP',available:true,descripcion:'Plan descripcion 1',duracion:6,precio:200,cantidad:12
},
{
    id:1,name:'Plan Standard',available:false,descripcion:'Plan descripcion 2',duracion:3,precio:300,cantidad:14
},
{
    id:2,name:'Plan Super Basic',available:true,descripcion:'Plan descripcion 3',duracion:2,precio:600,cantidad:20
}
]

export default function(/* props:GimnasioDTO[] */{navigation}:any){
    const [planes,setPlanes] = useState<PlanDTO[]>(dummy)


    const navigationHeader = useContext(MyContext)
    
    useEffect(()=>{
       let suscribe = true
       if(suscribe){
       

        navigation.addListener('focus',()=>{
            navigationHeader.setOptions({
              title:'Planes'
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
                planes.map((x,index)=>(
                    <View  key={index} style={{marginHorizontal:8,marginVertical:8}}>
                        <Plan data={buildViewModel(x)} deleteAction={()=>{
                            
                            setPlanes(planes.filter((x,i)=>i !== index))
                        }} />
                    </View>
                ))
            }
            
        </ScrollView>
    )
}