import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View,Text, Alert} from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Home = () => <View style={{backgroundColor:'yellow'}}><Text>Hello from React Native</Text></View>;
const Plans = () => <View><Text>Hello from React Native</Text></View>;
const Gyms = () => <View><Text>Hello from Gym</Text></View>;

export default function () {
 
  return (
      
      <Tab.Navigator initialRouteName="Home"  >
        <Tab.Screen name="Home" options={{title:'Hey'}} component={Home} />
        <Tab.Screen name="Plans" component={Plans} />
        <Tab.Screen name="Gyms" component={Gyms}  />
      </Tab.Navigator>
      
      

  );
}
