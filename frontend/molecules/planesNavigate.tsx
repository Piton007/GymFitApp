import React from "react"
import { Alert, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import {GymFitButton} from "../atoms"

interface Props {
    id:number,
    precio:number,
    cantidad:number,
    availability:boolean
}


export default function(plan:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.periodo} > {plan.cantidad} meses </Text>
            <Text  style={styles.periodo}>$ {plan.precio} </Text>
            <GymFitButton disabled={!plan.availability} onPress={()=>{Alert.alert('SUSCRIBETE')}} >Suscribete</GymFitButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
      
        padding:10
    },
    precio:{
        flex:1,
        fontSize:18,
        marginHorizontal:5,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
        
    },
    periodo:{
        flex:1,
        fontSize:18,
        marginHorizontal:5,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    suscribeAction:{
        flex:1,
        flexShrink:1
    }
})