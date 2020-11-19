import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GymFitButton} from "../atoms"
import {Card, Text} from 'react-native-paper';
import {Input} from '../atoms';

const nullable: CreatePlan = {
  periodo: 0,
  precio: 0,
  cantidad: 0,
  nombre: '',
  descripcion: '',
};

export interface CreatePlan {
  periodo: number;
  precio: number;
  cantidad: number;
  nombre: string;
  descripcion: string;
}

interface Props {
  onSubmit: (plan: CreatePlan) => void;
}

export default function ({onSubmit}: Props) {
  const [plan, setPlan] = useState<CreatePlan>(nullable);

  return (
    <Card style={{flex:1}}>
      <Card.Title title="Plan" />
      <Card.Content style={{flex:1}}>
        <Input
          style={styles.field}
          label="Nombre"
          autoFocus
          value={plan.nombre}
          onChangeText={(text: string) => {
            setPlan({...plan, nombre: text});
          }}
        />
        <Input
          style={styles.field}
          label="Descripcion"
          value={plan.descripcion}
          onChangeText={(text: string) => {
            setPlan({...plan, descripcion: text});
          }}
        />
        <Input
          style={styles.field}
          label="Periodo"
          keyboardType="number-pad"
          suffix="meses"
          value={(plan.periodo || 0).toString()}
          onChangeText={(text: string) => {
            setPlan({...plan, periodo: parseInt(text)});
          }}
        />
        <Input
          style={styles.field}
          label="Cantidad"
          suffix="vacantes"
          keyboardType="number-pad"
          value={(plan.cantidad || 0).toString()}
          onChangeText={(text: string) => {
            setPlan({...plan, cantidad: parseInt(text)});
          }}
        />
        <Input
          style={styles.field}
          label="Precio"
          keyboardType="number-pad"
          prefix="$"
          value={(plan.precio || "0").toString()}
          onChangeText={(text: string) => {
            setPlan({...plan, precio: parseFloat(text)});
          }}
        />
         <GymFitButton style={styles.submit} onPress={()=>{
            onSubmit(plan)
          }}>Create</GymFitButton>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({
  field: {
    marginVertical: 5,
    width:'100%'
  },
  submit:{
    marginVertical:5,
    width:'100%'
  }
});
