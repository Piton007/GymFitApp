import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {PRIMARY_COLOR} from '../global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  value: string;
  onDismiss(): void;
}

export function Dismissible(props: Props) {
  return (
    <Chip style={styles.chip} textStyle={{color:'#FFFFFF'}} onClose={props.onDismiss}>
      {props.title}: {props.value}
    </Chip>
  );
}
const styles = StyleSheet.create({
  chip: {
    backgroundColor: PRIMARY_COLOR,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
