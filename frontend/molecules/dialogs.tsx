import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Dialog, Portal,Provider} from 'react-native-paper';
import {GymFitLogo} from '../atoms/Icons';

interface Props {
  visible: boolean;
  hideDialog: () => void;
  msg: string;
}

export function Successful({visible, msg, hideDialog}: Props) {
  return (
 
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content style={styles.container}>
            <View style={styles.logo}>
              <GymFitLogo size={1.5} />
            </View>
            <Paragraph style={styles.msg}>{msg}</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
  );
}
const styles = StyleSheet.create({
  container: {
   width:'auto',
   height:250

  },

  logo: {
    marginVertical: 15,
    flex: 2,
    alignItems:'center',
    justifyContent:'center'
  },
  msg: {
    fontSize: 20,
    flex: 1,
    textAlign:'center'
  },
});
