import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

export default function Login() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login </Text>
      </View>
      <Separator />
      <View style={styles.actions}>
        <Button
          title="Gimnasio"
          onPress={() => {navigation.navigate("GimnasioLogin")}}
        />
      </View>
      <View style={styles.actions}>
        <Button
          title="Deportista"
          
          onPress={() => {navigation.navigate("DeportistaLogin")}}
        />
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
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
