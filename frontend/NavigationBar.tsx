import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View, Text, Alert} from 'react-native';
import React, {createContext, useContext, useEffect} from 'react';
import Gimnasios from './molecules/gimnasios';
import Home from "./molecules/deportistaHome"
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { MyContext } from './global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();


const Plans = () => (
  <View>
    <Text>Hello from React Native</Text>
  </View>
);
const Entrenamiento = ({navigation}:any) => {
  const navigationHeader = useContext(MyContext)
  useEffect(()=>{
    let suscribe = true
    if(suscribe){
      navigation.addListener('focus',()=>{
        navigationHeader.setOptions({
          title:'Entrenamiento'
      })
    })
  }
    
     
 },[])
 return (
  <View>
    <Text>Comming Soon!</Text>
  </View>
); 
}



export default function () {
  const navigation = useNavigation();
  return (
    <MyContext.Provider value={navigation}>
      <Tab.Navigator initialRouteName="Home" activeColor="#F5851B"
         barStyle={{backgroundColor:'#3C3F3F'}} >
        <Tab.Screen name="Home" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )}} component={Home} />
        <Tab.Screen name="Gyms" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="weight" color={color} size={26} />
          )}} component={Gimnasios} />
        <Tab.Screen name="Entrenamiento"  options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="karate" color={color} size={26} />
          )}} component={Entrenamiento} />
        
      </Tab.Navigator>
    </MyContext.Provider>
  );
}
