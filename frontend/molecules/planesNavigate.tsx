import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {GymFitButton} from '../atoms';
import {Successful} from './dialogs';
import {create} from '../network/suscripcion';

interface Props {
  deportistaId: number;
  id: number;
  precio: number;
  cantidad: number;
  availability: boolean;
}

export default function (plan: Props) {
  const [visible, setVisible] = useState(false);
  const [msg,setMsg] = useState("")

  function hideDialog() {
    setVisible(false);
  }

  function suscribe() {
    create(plan.id, plan.deportistaId).then((x) => {
        setMsg(x.message)
        setVisible(true)
    });
  }

  return (
    <View style={styles.container}>
      <Successful hideDialog={hideDialog} visible={visible} msg={msg} /> 
      <Text style={styles.periodo}> {plan.cantidad} meses </Text>
      <Text style={styles.periodo}>$ {plan.precio} </Text>
      <GymFitButton
        disabled={!plan.availability}
        onPress={() => {
          suscribe();
        }}>
        Suscribete
      </GymFitButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    padding: 10,
  },
  precio: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  periodo: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suscribeAction: {
    flex: 1,
    flexShrink: 1,
  },
});
