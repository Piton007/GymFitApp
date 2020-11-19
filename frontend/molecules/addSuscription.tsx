import React, { useEffect, useState } from "react"
import { ImageBackground as Image, Platform, StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { getByIdAndPopulatePlans, GimnasioDTO } from "../network/gimnasio";

 interface GimnasioViewModel{
    gimnasioId:number,
    name:string,
    email:string,
    latitud:string,
    longitud:string,
    direccion:string,
    planes: PlanViewModel[]
}
 interface PlanViewModel {
    id:number,
    name:string,
    descripcion:string,
    duracion:number,
    precio:number,
    cantidad:number,
    available:boolean
}

interface Props {
    id:number
}

const nullable:GimnasioViewModel = {
    direccion:'',
    email:'',
    gimnasioId:0,
    latitud:'',
    longitud:'',
    name:'',
    planes:[],
}

function assembleGymViewModel(gym:GimnasioDTO):GimnasioViewModel{
    return { ...gym,gimnasioId:gym.id}
}


export default function({id}:Props){
    const [gym,setGym] = useState<GimnasioViewModel>(nullable)


    useEffect(()=>{
        let suscribe = true
        if(suscribe){
            getByIdAndPopulatePlans(id)
            .then((x)=>{
                if (x.data) setGym(assembleGymViewModel(x.data))
                
            })
        }
        return ()=>{suscribe = false}
    },[])

    return (
        <ScrollView>
            <Image style={styles.container} source={{uri:'https://picsum.photos/700'}}/>
            <Text>
                Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo saepe dolorum. Natus labore tempora quia id autem placeat eaque, explicabo vitae iusto quod sint aliquam sit, sunt mollitia incidunt.
            </Text>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      height:300,
      width:'auto',
      paddingTop: Platform.OS === 'ios' ? 60 : 80,
    }
  });