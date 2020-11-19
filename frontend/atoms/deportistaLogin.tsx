import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Deportista as API} from '../network/auth';
import {GymFitButton} from './Buttons';
import AsyncStorage from '@react-native-community/async-storage';
import Input from './Textfield';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {DEPORTISTA_KEY} from '../global';

const resetAction = CommonActions.reset({
  index: 0,
  routes: [{name: 'DeportistaHome'}],
});
export default function Deportista() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();

  function login() {
    API.login(email)
      .then((x) => {
        AsyncStorage.setItem(DEPORTISTA_KEY, JSON.stringify(x)).then(() => {
          navigation.dispatch(resetAction);
        });
      })
      .catch((x) => {
        Alert.alert(x);
      });
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{marginVertical: 16,alignItems:'center'}}>
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
