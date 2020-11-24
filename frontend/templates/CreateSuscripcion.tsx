import React from 'react';
import Dropdown from '../organism/EntrenadorDropDown';
import Maquinas from '../organism/MaquinasChecked';
import {Text,  Dialog, Portal, Provider} from 'react-native-paper';
import {Alert, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { MaquinaDTO } from '../network/maquinas';
import { EntrenadorDTO } from '../network/entrenador';
import { GymFitButton } from '../atoms';

interface DialogProps {
  title: string;
  visible: boolean;
  hideDialog: () => void;
}

interface Props extends DialogProps {
  maquinas: MaquinaDTO[];
  onSubmit:()=>void
  entrenadores: EntrenadorDTO[];
  maquinaIds: Set<number>;
  setMaquinaIds: (set: Set<number>) => void;
  entrenadorId: number;
  setEntrenadorId: (id: number) => void;
}

export default function ({
  entrenadores,
  visible,
  hideDialog,
  setEntrenadorId,
  entrenadorId,
  maquinaIds,
  onSubmit,
  title,
  maquinas,
  setMaquinaIds,
}: Props) {
  return (
    
    <Portal>
      <Provider>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title} </Dialog.Title>
          <Dialog.Content>
            <ScrollView>
              <View style={[styles.section, styles.entrenadorSection]}>
                <Text style={styles.label}>Entrenador</Text>
                <View style={styles.dropdown}>
                  <Dropdown
                    data={entrenadores}
                    onChange={setEntrenadorId}
                    value={entrenadorId}
                  />
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.label}>Maquinas</Text>
                <Maquinas
                  data={maquinas}
                  ids={maquinaIds}
                  setIds={setMaquinaIds}
                />
              </View>
            </ScrollView>
          </Dialog.Content>
          <Dialog.Actions  >
              
              <GymFitButton onPress={onSubmit}> Crear </GymFitButton>
           
              
          </Dialog.Actions>
        </Dialog>
        </Provider>
    </Portal>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    textAlignVertical: 'center',
  },
  dropdown: {
    width: 200,
  },
  section: {
    marginVertical: 5,
  },
  entrenadorSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
