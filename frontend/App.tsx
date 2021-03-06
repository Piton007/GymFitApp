/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Home from "./Login"
import CreatePlan,{Edit as EditPlan} from "./organism/plan"
import DeportistaLogin from "./atoms/deportistaLogin"
import GymLogin from "./atoms/gimnasioLogin"
import BottomNavigationBar from "./NavigationBar"
import AddSuscription from "./molecules/addSuscription"
import Scratch from "./Scratch"
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

const App = () => {
  
  return (

        <NavigationContainer>

          <Stack.Navigator initialRouteName="Principal">
            <Stack.Screen name="Principal" options={{headerShown:false}} component={Home}/>
            <Stack.Screen name="DeportistaLogin" options={{headerTitle:"Deportista"}} component={DeportistaLogin}/>
            <Stack.Screen name="CreatePlan" options={{headerTitle:"Crear Plan"}} component={CreatePlan} />
            <Stack.Screen name="EditPlan" options={{headerTitle: "Plan"}} component={EditPlan} />
            <Stack.Screen name="DeportistaHome" component={BottomNavigationBar.Deportista}  />
            <Stack.Screen name="GymLogin"  options={{headerTitle:"Gimnasio"}}  component={GymLogin}/>
            <Stack.Screen name="AddSuscription" component={AddSuscription}/>
            <Stack.Screen name="GymHome" component={BottomNavigationBar.Gimnasio}  />
            <Stack.Screen name ="Scratch" component={Scratch}/>
          </Stack.Navigator>
        </NavigationContainer>
            


  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
