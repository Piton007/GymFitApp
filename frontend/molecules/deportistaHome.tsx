import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Info, {DeportistaViewModel} from '../atoms/deporistaInfo';
import {SuscripcionViewModel} from '../atoms/suscripcion';
import {DEPORTISTA_KEY, MyContext} from '../global';
import {getAll, SuscripcionDTO} from '../network/suscripcion';
import Dialog from '../templates/UpdateSuscripcion';
import {DeportistaDTO} from '../network/deportista';
import Header from './homeHeader';
import SuscripcionInfo from '../atoms/suscripcion';
import { Portal, Provider } from 'react-native-paper';

function buildViewModel(deportista: DeportistaDTO): DeportistaViewModel {
  return {...deportista};
}
function buildSuscripcionVM(suscripcion: SuscripcionDTO): SuscripcionViewModel {
  return {
    gimnasioId: suscripcion.gimnasioId,
    id: suscripcion.id,
    gimnasio: suscripcion.gym,
    duracion: suscripcion.duracion.toString(),
    precio: suscripcion.precio.toString(),
    name: suscripcion.name,
    descripcion: suscripcion.descripcion,
    entrenadorId: suscripcion.entrenadorId,
    maquinasId: suscripcion.maquinas,
  };
}

export default function ({navigation}: any) {
  const navigationHeader = useContext(MyContext);
  const [dialog, setDialog] = useState(false);
  const [info, setInfo] = useState<DeportistaViewModel>({
    id: -1,
    email: 'null@gmail.com',
    name: 'null',
  });
  const [suscripciones, setSuscripciones] = useState<SuscripcionViewModel[]>(
    [],
  );
  const [selected,setSelected] = useState<SuscripcionViewModel>() 

  function onDelete(index: number) {
    setSuscripciones(suscripciones.filter((x) => x.id !== index));
  }

  const openDialog = () => {
    setDialog(true);
  };
  const hideDialog = () => {
    setDialog(false);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (info.id >= 0) {
        getAll(info.id).then((resp) => {
          setSuscripciones(resp.data?.map(buildSuscripcionVM) || []);
        });
      }

      navigationHeader.setOptions({
        headerTitle: () => <Header navigation={navigationHeader} />,
      });
    });
  }, [info]);
  useEffect(() => {
    let suscribe = true;
    if (suscribe) {
      AsyncStorage.getItem(DEPORTISTA_KEY).then((x: string | null) => {
        if (x !== null) {
          const user: DeportistaDTO = JSON.parse(x);
          getAll(user.id).then((resp) => {
            setSuscripciones(resp.data?.map(buildSuscripcionVM) || []);
          });
          setInfo(buildViewModel(user));
        }
      });
    }
    return () => {
      suscribe = false;
    };
  }, []);

  return (
      <Provider>
          <Portal>

          
    <ScrollView>
        {
            selected && <Dialog suscripcion={selected} visible={dialog} hideDialog={hideDialog} />
        }
        
          <View
            style={{
              flex: 1,
              flexGrow: 1,
              flexBasis: 250,
              marginVertical: 8,
              marginHorizontal: 8,
            }}>
            <Info {...info} />
          </View>
          <View style={{flex: 2, flexShrink: 1, marginHorizontal: 8}}>
            <Text style={{fontSize: 24, marginVertical: 12}}>
              Mis suscripciones
            </Text>

            {suscripciones.map((x) => (
              <View key={x.id} style={{margin: 8}}>

                    <SuscripcionInfo
                      onEdit={()=>{
                          setSelected(x)
                          openDialog()
                      }}
                      onDelete={() => {
                        onDelete(x.id);
                      }}
                      {...x}
                    />

              </View>
            ))}
          </View>

    </ScrollView>
    </Portal>
      </Provider>
  );
}
