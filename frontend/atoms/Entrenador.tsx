import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';
import {ASSETS_URL} from '../constants';

interface EntrenadorViewModel {
  name: string;
  image: string;
}

export interface Props {
  right?: React.ReactNode;
  size?: number;
  entrenador: EntrenadorViewModel;
}

export default function ({size = 1, right, entrenador}: Props) {
  return (
    <Card style={cardStyles.container} >
      <Card.Title
        title={
          <Text style={[cardStyles.text, {fontSize: 20 * size}]}>
            {entrenador.name}
          </Text>
        }
        right={() => (<View style={cardStyles.rigth}>{right}</View>)}
        left={(left: any) => (
          <Avatar.Image
            {...left}
            source={{uri: ASSETS_URL + entrenador.image}}
          />
        )}
      />
    </Card>
  );
}
const cardStyles = StyleSheet.create({
  container: {
    width:'100%',
    height:'auto',
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 20,
    textAlignVertical: 'center',
  },
  rigth: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Standard({size = 1, right, entrenador}: Props){
  return (
    <View style={styles.container} >
      <View style={styles.content}>
        <Avatar.Image size={40*size} source={{uri:ASSETS_URL + entrenador.image}} />
        <Text style={[styles.text, {fontSize: 20 * size}]}>
            {entrenador.name}
          </Text>
      </View>
      <View style={styles.rigth}>{right}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
  
    justifyContent:'space-between',
    flexDirection:'row',
   
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 20,
    textAlignVertical: 'center',
  },
  rigth: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
})
