import React, {useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import Input from './Textfield';
import {Gimnasio as API} from '../network/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {GYM_KEY} from '../global';
import {GymFitButton} from './Buttons';

const resetAction = CommonActions.reset({
  index: 0,
  routes: [{name: 'GymHome'}],
});
export default function Deportista() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();

  function login() {
    API.login(email)
      .then((x) => {
        AsyncStorage.setItem(GYM_KEY, JSON.stringify(x)).then(() => {
          navigation.dispatch(resetAction);
        });
      })
      .catch((x) => {
        Alert.alert(x);
      });
  }

  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <View 
          style={{justifyContent: 'center', alignItems: 'center',marginVertical:20}}>
        <Avatar.Image
          size={130}
          source={require('../assets/gimnasio_login.jpg')}
        />
      </View>
      <View
        style={{
          marginVertical: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Input
          label="Email"
          autoFocus
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          value={email}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <GymFitButton
          onPress={() => {
            login();
          }}>
          Login
        </GymFitButton>
      </View>
    </View>
  );
}
