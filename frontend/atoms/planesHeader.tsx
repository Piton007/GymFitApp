import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native";

import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GYM_KEY, MyContext } from "../global";


export function Gimnasio(){
    const [id,setId] = useState<number>(-1)
    const navigationHeader = useNavigation()
    
    useEffect(()=>{
        let suscribe = true
        if(suscribe){
            AsyncStorage.getItem(GYM_KEY).then((x:string | null) => {
                if (x){
                    
                    const {id} = JSON.parse(x)
                    setId(id as number)
                }
                
            }); 
           
        }
        return ()=>{
            suscribe = false
        }
    },[])

    return(
        <View style={styles.header}>
            <Text style={styles.text} > Planes </Text>
            
                <MaterialCommunityIcons name="plus-circle" color='#F5851B' onPress={()=>{navigationHeader?.navigate("CreatePlan",{gimnasioId:id})}} size={30} />
            
        </View>
        
    )
}

const styles= StyleSheet.create({
    header:{
        flexDirection:'row'
    },
    text:{
        flex:2,
        fontSize:24
    },
    actions:{
        flex:1
    }
})