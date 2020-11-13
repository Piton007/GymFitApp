import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <Button
            title="Gimnasio"
            onPress={() => {
              navigation.navigate('GymLogin');
            }}
          />
        </View>
      </View>
      <View style={styles.actions}>
        <View style={{width: 200, height: 'auto'}}>
          <Button
            title="Deportista"
            onPress={() => {
              navigation.navigate('DeportistaLogin');
            }}
          />
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
