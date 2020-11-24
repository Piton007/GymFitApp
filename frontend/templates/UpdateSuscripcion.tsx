import React, {useState} from 'react';
import Dropdown from '../organism/EntrenadorDropDown';
import Maquinas from '../organism/MaquinasChecked';
import {Text, Dialog, Portal, Provider} from 'react-native-paper';
import {Alert, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MaquinaDTO} from '../network/maquinas';
import {EntrenadorDTO} from '../network/entrenador';
import {GymFitButton} from '../atoms';
import {SuscripcionViewModel} from '../atoms/suscripcion';
import {useEntrenadores} from '../hooks/entrenador';
import {useMaquinas} from '../hooks/maquina';
import {update} from '../network/suscripcion';

interface DialogProps {
  visible: boolean;
  hideDialog: () => void;
}

interface Props extends DialogProps {
  suscripcion: SuscripcionViewModel;
}
const entrenadores1: EntrenadorDTO[] = [
  {id: 1, name: 'Zidane', image: 'entrenador1.jpg'},
  {id: 2, name: 'Bob', image: 'entrenador1.jpg'},
];

export default function ({suscripcion, visible, hideDialog}: Props) {
  const [maquinaIds, setMaquinaIds] = useState<Set<number>>(
    new Set(suscripcion.maquinasId),
  );
  const [entrenadorId, setEntrenadorId] = useState<number>(
    suscripcion.entrenadorId,
  );
  const entrenadores = useEntrenadores(suscripcion.gimnasioId);
  const maquinas = useMaquinas(suscripcion.gimnasioId);

  function onSubmit() {
    update({
      entrenadorId,
      maquinasId: Array.from(maquinaIds),
      suscriptionId: suscripcion.id,
    }).then(() => {
      hideDialog();
    });
  }

  return (
    <Portal>
      <Provider>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Actualizar Suscripcion </Dialog.Title>
          <Dialog.Content>
            <ScrollView>
              <View style={[styles.section, styles.entrenadorSection]}>
                <Text style={styles.label}>Entrenador</Text>
                <View style={styles.dropdown}>
                  {entrenadores.length > 0 && (
                    <Dropdown
                      data={entrenadores}
                      onChange={setEntrenadorId}
                      value={entrenadorId}
                    />
                  )}
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
          <Dialog.Actions>
            <GymFitButton onPress={onSubmit}> Actualizar </GymFitButton>
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
