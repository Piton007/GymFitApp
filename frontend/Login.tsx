import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Button, StyleSheet,  View} from 'react-native';
import {Text} from "react-native-paper"
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GymFitButton } from './atoms/Buttons';

const Separator = () => <View style={styles.separator} />;

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 32}}>GymFitApp</Text>
        <MaterialCommunityIcons name="trophy" color="#F5851B" size={80} />
      </View>
      <Separator />
      <View style={styles.actions}>
        <View style={{width: 200, height: 'auto'}}>
          <GymFitButton
            
            onPress={() => {
              navigation.navigate('GymLogin');
            }}
          >
            Gimnasio
          </GymFitButton>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={{width: 200, height: 'auto'}}>
          <GymFitButton
           
            onPress={() => {
              navigation.navigate('DeportistaLogin');
            }}
          >
            Deportista
          </GymFitButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    marginVertical: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
