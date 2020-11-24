import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GymFitButton} from '../atoms';
import {Card, Switch, Text} from 'react-native-paper';
import {Input} from '../atoms';
import {PRIMARY_COLOR} from '../global';

export interface CreatePlan {
  periodo: number;
  precio: number;
  descuento: number | null;
  cantidad: number;
  nombre: string;
  descripcion: string;
}

interface FormProps extends Props {
  actionName: string;
  edit?: boolean;
}
interface Props {
  init: CreatePlan;
  onSubmit: (plan: CreatePlan) => void;
}

export const Create = WithCreate();
export const Editable = WithEdit();

function WithCreate() {
  return ({init, onSubmit}: Props) => {
    return (
      <Card style={{flex: 1}}>
        <Card.Content style={{flex: 1}}>
          <Form init={init} onSubmit={onSubmit} actionName="Create" />
        </Card.Content>
      </Card>
    );
  };
}

function WithEdit() {
  return ({init, onSubmit}: Props) => {
    const [isEditable, setEditable] = React.useState(false);
    const onToggleEdit = () => setEditable(!isEditable);

    return (
      <Card style={{flex: 1}}>
        <Card.Content style={{flex: 1}}>
          <View
            style={{
              paddingHorizontal: 12,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Edit</Text>
            <Switch
              style={styles.field}
              value={isEditable}
              color={PRIMARY_COLOR}
              onValueChange={onToggleEdit}
            />
          </View>

          <Form
            init={init}
            onSubmit={onSubmit}
            edit={isEditable}
            actionName="Edit"
          />
        </Card.Content>
      </Card>
    );
  };
}

function Form({init, edit = true, onSubmit, actionName}: FormProps) {
  const [plan, setPlan] = useState<CreatePlan>(init);
  const [discount, setDiscount] = useState(false);

  function onToggleDiscount() {
    if (discount) {
      plan.descuento = null;
    }
    setDiscount(!discount);
  }

  return (
    <>
      <View
        style={{
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16,marginStart:12}}>Oferta</Text>
        <Switch
          style={styles.field}
          value={discount}
          disabled={!edit}
          color={PRIMARY_COLOR}
          onValueChange={onToggleDiscount}
        />
      </View>

      <Input
        style={styles.field}
        label="Nombre"
        disabled={!edit}
        autoFocus
        value={plan.nombre}
        onChangeText={(text: string) => {
          setPlan({...plan, nombre: text});
        }}
      />
      <Input
        style={styles.field}
        label="Descripcion"
        disabled={!edit}
        value={plan.descripcion}
        onChangeText={(text: string) => {
          setPlan({...plan, descripcion: text});
        }}
      />
      <Input
        style={styles.field}
        label="Periodo"
        disabled={!edit}
        keyboardType="number-pad"
        suffix="meses"
        value={(plan.periodo || 0).toString()}
        onChangeText={(text: string) => {
          setPlan({...plan, periodo: parseInt(text)});
        }}
      />
      <Input
        style={styles.field}
        label="Descuento"
        disabled={!edit || !discount}
        keyboardType="number-pad"
        suffix="%"
        value={(plan.descuento || 0).toString()}
        onChangeText={(text: string) => {
          setPlan({...plan, descuento: parseInt(text)});
        }}
      />
      <Input
        style={styles.field}
        label="Cantidad"
        suffix="vacantes"
        disabled={!edit}
        keyboardType="number-pad"
        value={(plan.cantidad || 0).toString()}
        onChangeText={(text: string) => {
          setPlan({...plan, cantidad: parseInt(text)});
        }}
      />
      <Input
        style={styles.field}
        label="Precio"
        disabled={!edit}
        keyboardType="number-pad"
        prefix="$"
        value={(plan.precio || '0').toString()}
        onChangeText={(text: string) => {
          setPlan({...plan, precio: parseFloat(text)});
        }}
      />
      {edit && (
        <GymFitButton
          style={styles.submit}
          onPress={() => {
            onSubmit(plan);
          }}>
          {actionName}
        </GymFitButton>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  field: {
    marginVertical: 5,
    width: '100%',
  },
  submit: {
    marginVertical: 5,
    width: '100%',
  },
});
