import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native";

import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DEPORTISTA_KEY, GYM_KEY, MyContext } from "../global";

interface Props {
    navigation:any
}

export default function({navigation}:Props){
 
    function logOut(){
        Promise.all([AsyncStorage.removeItem(GYM_KEY),AsyncStorage.removeItem(DEPORTISTA_KEY)]).then(()=>{
            navigation?.navigate('Principal')
        })
    }
    


    return(
        <View style={styles.header}>
            <Text style={styles.text} >Home </Text>
            <View style={styles.actions}>
            <MaterialCommunityIcons style={styles.action} name="exit-to-app" color='#F5851B' onPress={logOut} size={30} />
            </View>
            
            
        </View>
        
    )
}

const styles= StyleSheet.create({
    header:{
        flexDirection:'row',
        alignContent:'space-between'
    },
    text:{
        flex:2,
        fontSize:24
    },
    actions:{
        flexDirection:'row'
    },
    action:{
        marginHorizontal:5
    }
})