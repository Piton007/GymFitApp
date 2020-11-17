import React from 'react';
import {StyleSheet} from 'react-native';
import { TextInput} from 'react-native-paper';
import { PRIMARY_COLOR } from '../global';
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";

interface Props extends Partial<TextInputProps>{
  suffix?:string
  prefix?:string
}


export default function ({suffix,prefix,...props}:Props) {
  return (
    <TextInput
      {...props}
      left={(prefix) ? <TextInput.Affix text={prefix} textStyle={styles.prefix}/>:null}
      right={(suffix) ? <TextInput.Affix text={suffix}/>:null}
      theme={{colors: {primary: PRIMARY_COLOR}}}
      style={styles.input}
      autoFocus
      placeholderTextColor={PRIMARY_COLOR}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: 350,
  },
  prefix:{
      marginRight:5
  }
});
