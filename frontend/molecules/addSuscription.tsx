import React, { useEffect, useState } from "react"
import { Alert, ImageBackground as Image, Platform,  StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List, Text } from "react-native-paper";
import Plan from "./planesNavigate"
import { getByIdAndPopulatePlans, GimnasioDTO } from "../network/gimnasio";
import { NavigationProp, ParamListBase, Route, useNavigation} from "@react-navigation/native"

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
    availability:boolean
}

interface Params {
    id : number,
    name:string
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
interface Props {
    route:Route<string, Params | undefined>
    navigation:NavigationProp<ParamListBase>
}


export default function({route}:Props){
    const {id,name} = route.params as Params
    const navigationHeader = useNavigation()
    const [gym,setGym] = useState<GimnasioViewModel>(nullable)

    function renderPlans(){
        return (
            <View>
                <Text style={{fontSize:20,margin:10}}>Planes</Text>
                {gym.planes.map(x=>(
            <View key={x.id}>
                <Plan {...x} />
                <Divider />
            </View>))}
            </View>
        )

    }

    useEffect(()=>{
        let suscribe = true
        if(suscribe){
            navigationHeader.setOptions({
                title:name,
                headerTransparent:true,
               
            })
            getByIdAndPopulatePlans(id)
            .then((x)=>{
                if (x.data) {
                    setGym(assembleGymViewModel(x.data))
                }
                
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
            {renderPlans()}
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