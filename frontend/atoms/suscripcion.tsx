import {Avatar, Card, Paragraph, Text, List, Provider, Portal} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {unSuscribe} from '../network/suscripcion';
import {PRIMARY_COLOR} from '../global';
import Dialog from '../templates/UpdateSuscripcion';
import {Alert, View} from 'react-native';

export interface SuscripcionViewModel {
  id: number;
  gimnasio: string;
  gimnasioId: number;
  name: string;
  entrenadorId: number;
  maquinasId: number[];
  descripcion: string;
  duracion: string;
  precio: string;
}

const LeftContent = (props: any) => (
  <Avatar.Icon {...props} icon="account-star" />
);
function DeleteSuscription({size, props}: any) {
  return (
    <MaterialCommunityIcons
      name="trash-can"
      style={{marginHorizontal: 12}}
      onPress={() => {
        unSuscribe(props.id).then((x) => {
          props.onDelete();
        });
      }}
      color={PRIMARY_COLOR}
      size={size}
    />
  );
}
function EditSuscription({size, onEdit}: any) {
  return (
    <MaterialCommunityIcons
      name="pencil"
      style={{marginHorizontal: 12}}
      onPress={onEdit}
      color={PRIMARY_COLOR}
      size={size}
    />
  );
}

function Icons({size, props, onEdit}: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      <EditSuscription size={size} onEdit={onEdit} />
      <DeleteSuscription size={size} props={props} />
    </View>
  );
}
interface Props extends SuscripcionViewModel {
  onDelete(): void;
  onEdit():void
}

export default function (props: Props) {
  

  return (
    

        <Card style={{height: 250, width: 'auto'}}>
          
          <Card.Title
            title={props.gimnasio + ' ' + props.name}
            left={LeftContent}
            right={({size}) => (
              <Icons size={size} props={props} onEdit={props.onEdit} />
            )}
          />
          <Card.Content>
            <List.Item
              style={{marginVertical: 2}}
              title="Precio"
              description={`S/${props.precio}`}
              left={(props) => <List.Icon {...props} icon="cash" />}
            />
            <List.Item
              style={{marginVertical: 2}}
              title="Periodo"
              left={(props) => <List.Icon {...props} icon="calendar" />}
              description={`${props.duracion} meses`}
            />
          </Card.Content>
        </Card>

    
  );
}
