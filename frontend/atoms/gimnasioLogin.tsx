import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Gimnasio as API} from '../network/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import { GYM_KEY } from '../global';



const resetAction= CommonActions.reset({
    index: 0,
    routes: [
      { name: 'GymHome' }
    ],
  })
export default function Deportista() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();

  function login() {
    API.login(email)
      .then((x) => {
         AsyncStorage.setItem(GYM_KEY, JSON.stringify(x)).then(() => {
          navigation.dispatch(resetAction)
        }); 
      })
      .catch((x) => {Alert.alert(x)});
  }

  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <View style={{marginVertical: 16}}>
        <TextInput
          label="Email"
         
          autoFocus
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          value={email}
        />
      </View>
      <Button
        title="Login"
        onPress={() => {
          login();
        }}></Button>
    </View>
  );
}
