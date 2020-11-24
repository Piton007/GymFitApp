import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import Entrenador from "../molecules/EntrenadorDismiss"
import { deleteEntrenador, EntrenadorDTO, getAll } from "../network/entrenador"

interface Props{
    gimnasioId:number
}



export default ({gimnasioId}:Props)=>{
    const [entrenadores,setEntrenadores] = useState<EntrenadorDTO[]>([])
    const navigation = useNavigation()

    function fetchEntrenadores(){
        getAll(gimnasioId).then(x=>{
            
            setEntrenadores(x.data || [])
        })
    }

    navigation.addListener('focus',fetchEntrenadores)
    useEffect(()=>{
        let suscribe = true
        if(suscribe){
            fetchEntrenadores()
        }
        return ()=>{suscribe = false}
    },[])
    function onDelete(index:number){
        deleteEntrenador(index).then(()=>{
            setEntrenadores(entrenadores.filter((v)=>v.id == index))
        })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Entrenadores</Text>
            {
                entrenadores.map(x=>(
                    <View key={x.id} style={styles.item}>
                    <Entrenador key={x.id} entrenador={x} onDismiss={()=>{onDelete(x.id)}} />
                    </View>
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    label:{
        fontSize:24
    },
    item:{
        marginVertical:3
    }


})
