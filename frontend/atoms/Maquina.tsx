import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar,  Card,  Text} from 'react-native-paper';
import { ASSETS_URL } from '../constants';

export interface MaquinaViewModel{
    name:string,
    image:string
}

export interface MaquinaProps {
  right?: React.ReactNode;
  size?: number;
  maquina:MaquinaViewModel
}

export default function({size=1,maquina,right}: MaquinaProps) {
  return (
    <Card style={styles.container} >
      <Card.Title
        title={
          <Text style={[styles.text, {fontSize: 20 * size}]}>
            {maquina.name}
          </Text>
        }
        right={() => (<View style={styles.rigth}>{right}</View>)}
        left={(left: any) => (
          <Avatar.Image
            {...left}
            source={{uri: ASSETS_URL + maquina.image}}
          />
        )}
      />
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 'auto',
  },
  content:{
      flexDirection:'row'
  },
  text: {
      marginLeft:20,
    textAlignVertical: 'center',
  },
  rigth: {
      
    justifyContent: 'center',
    alignItems: 'center',
  },
});