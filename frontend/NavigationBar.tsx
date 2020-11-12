import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View,Text} from 'react-native';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const Home = () => <View style={{backgroundColor:'yellow'}}><Text>Hello from React Native</Text></View>;
const Plans = () => <View><Text>Hello from React Native</Text></View>;
const Gyms = () => <View><Text>Hello from React Native</Text></View>;

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Plans" component={Plans} />
        <Tab.Screen name="Gyms" component={Gyms} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
