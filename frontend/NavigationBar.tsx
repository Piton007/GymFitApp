import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View, Text, Alert} from 'react-native';
import React, {createContext, useContext, useEffect} from 'react';
import Gimnasios from './molecules/gimnasios';
import Home from "./molecules/deportistaHome"
import GimnasioPerfil from "./molecules/gimnasioHome"
import Planes from "./molecules/planes"
import {GimnasioPlanHeader as Header} from "./atoms"
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { MyContext } from './global';
import DeportistaPlanes from "./molecules/planesDeportista"
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
        navigationHeader?.setOptions({
          headerTitle:'Entrenamiento'
      })
    })
  }
    return ()=>{
      suscribe  = false
    }
     
 },[])
 return (
  <View>
    <Text>Comming Soon!</Text>
  </View>
); 
}



function DeportistaHome () {
  const navigation = useNavigation();
  return (
    <MyContext.Provider value={navigation}>
      <Tab.Navigator initialRouteName="DeportistaPerfil" activeColor="#F5851B"
         barStyle={{backgroundColor:'#3C3F3F'}} >
        <Tab.Screen name="DeportistaPerfil" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),title:"Home"}} component={Home} />
          <Tab.Screen name="DeportistaPlanes"  options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="karate" color={color} size={26} />
          ),title:"Planes"}} component={DeportistaPlanes} />
        <Tab.Screen name="DeportistaGyms" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="weight" color={color} size={26} />
          ),title:"Gyms"}} component={Gimnasios} />
      </Tab.Navigator>
    </MyContext.Provider>
  );
}


function GimnasioHome () {
  const navigation = useNavigation();
  
  return (
    <MyContext.Provider value={navigation}>
      <Tab.Navigator initialRouteName="GimnasioPerfil" activeColor="#F5851B"
         barStyle={{backgroundColor:'#3C3F3F'}} >
        <Tab.Screen name="GimnasioPerfil" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="home"  color={color} size={26} />
          ),title:"Home"}} component={GimnasioPerfil} />
        <Tab.Screen name="GimnasioPlanes" options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="cards" color={color} size={26} />
          ),title:"Planes"}} component={Planes} />
        <Tab.Screen name="GimnasioConfiguracion"  options={{tabBarIcon:({ color }) => (
            <MaterialCommunityIcons name="wrench" color={color} size={26} />
          ),title:"Configuracion"}} component={Entrenamiento} />
        
      </Tab.Navigator>
    </MyContext.Provider>
  );
}

export default {
  Deportista:DeportistaHome,
  Gimnasio:GimnasioHome
}
