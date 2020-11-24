import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {GymFitButton} from '../atoms';
import {Successful} from './dialogs';
import {create} from '../network/suscripcion';
import { useEntrenadores } from '../hooks/entrenador';
import { useMaquinas } from '../hooks/maquina';
import CreateSuscripcion from "../templates/CreateSuscripcion"
import { useNavigation } from '@react-navigation/native';

interface Props {
  deportistaId: number;
  id: number;
  gimnasioId:number
  precio: number;
  periodo:number,
  cantidad: number;
  availability: boolean;
}

export default function (plan: Props) {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  const entrenadores = useEntrenadores(plan.gimnasioId)
  const maquinas = useMaquinas(plan.gimnasioId)
  const [entrenadorId,setEntrenadorId] = useState<number>(0)
  const [maquinaIds,setMaquinasIds] = useState<Set<number>>(new Set([]))

  function hideDialog() {
    setVisible(false);
  }
  useEffect(()=>{
    let suscribe = true
    if(suscribe ){
      if(entrenadores.length > 0){
        setEntrenadorId(entrenadores[0].id)
    }
    }
    return ()=>{suscribe  = false}
  },[entrenadores])

  function suscribe() {
    create({planId:plan.id,deportistaId:plan.deportistaId,entrenadorId,maquinaIds:Array.from(maquinaIds)}).then((x) => {
        
        setVisible(false)
        navigation.navigate('DeportistaPerfil')
    });
  }

  return (
    <View style={styles.container}>
      <CreateSuscripcion hideDialog={hideDialog} onSubmit={suscribe} visible={visible} title={"Create Suscripcion"} entrenadorId={entrenadorId} entrenadores={entrenadores} maquinaIds={maquinaIds} maquinas={maquinas} setEntrenadorId={setEntrenadorId} setMaquinaIds={setMaquinasIds} /> 
      <Text style={styles.periodo}> {plan.periodo} meses </Text>
      <Text style={styles.periodo}>$ {plan.precio} </Text>
      <GymFitButton
        disabled={!plan.availability}
        onPress={()=>{setVisible(true)}}>
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
