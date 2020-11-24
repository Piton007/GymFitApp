import React, {useState} from 'react';
import Maquina from './molecules/MaquinaChecked';
import {
  Button,
  Menu,
  Divider,
  Provider,
  Text,
  Avatar,
  TouchableRipple,
  Card,
} from 'react-native-paper';
import Dropdown from './organism/EntrenadorDropDown';
import Maquinas from './organism/MaquinasChecked';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {ASSETS_URL} from './constants';
import {PRIMARY_COLOR} from './global';

interface EntrenadorDTO {
  id: number;
  name: string;
  image: string;
}

interface MaquinaDTO {
  id: number;
  name: string;
  image: string;
}

interface Props {
  maquinas: MaquinaDTO[];
  entrenadores: EntrenadorDTO;
  maquinasIds: Set<number>;
  setMaquinasIds: (set: Set<number>) => void;
  entrenadorId: number;
  setEntrenadorId: (id: number) => void;
}

const maquinas1: MaquinaDTO[] = [
  {id: 1, name: 'Pesas', image: 'pesas.png'},
  {id: 2, name: 'Curls', image: 'entrenador1.jpg'},
  {id: 3, name: 'Bicicleta', image: 'entrenador1.jpg'},
  {id: 4, name: 'Bicicleta', image: 'entrenador1.jpg'},
];

const entrenadores1: EntrenadorDTO[] = [
  {id: 1, name: 'Zidane', image: 'entrenador1.jpg'},
  {id: 2, name: 'Bob', image: 'entrenador1.jpg'},
];

export default () => <Foo />;

export function Foo() {
  const [entrenadores, setEntrenadores] = useState(entrenadores1);
  const [maquinas, setMaquinas] = useState(maquinas1);
  const [entrenadorId, setEntrenadorId] = useState(1);
  const [maquinaIds, setMaquinaIds] = useState<Set<number>>(new Set([]));

  return (
    <Provider>
      <Card style={{flex: 1}}>
        <Card.Title title="Crear Suscripcion" />
        <Card.Content>
          <View style={{flexDirection: 'row',marginVertical:5,justifyContent:'space-between'}}>
            <Text style={{fontSize:20,textAlignVertical:'center'}} > Entrenador </Text>
            <View style={{width: 200}}>
              <Dropdown
                data={entrenadores}
                onChange={setEntrenadorId}
                value={entrenadorId}
              />
            </View>
          </View>
          <View style={{marginVertical:5}}>
            <Text  style={{fontSize:20,textAlignVertical:'center'}}> Maquinas </Text>
            <View >
              <Maquinas
                data={maquinas}
                ids={maquinaIds}
                setIds={setMaquinaIds}

              />
            </View>
          </View>
        </Card.Content>
      </Card>
    </Provider>
  );
}
