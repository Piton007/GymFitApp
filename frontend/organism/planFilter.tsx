import React, {useRef, useState} from 'react';
import {MaximumCost} from '../molecules';
import {Dialog, Portal} from 'react-native-paper';
import { GymFitButton } from '../atoms';

interface Props {
  cost: number;
  visible:boolean;
  hideDialog:()=>void
  onChangeCost: (v: number) => void;
}

export function PlanFilter({cost, onChangeCost,visible,hideDialog}: Props) {
  const [currentCost,setCurrentCost] = useState<number>((cost > 0 ) ? cost : 50)

  function onSubmit(){
      onChangeCost(currentCost)
      hideDialog()
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onSubmit} >
        <Dialog.Title>Filtros</Dialog.Title>
        <Dialog.Content>
          <MaximumCost
           setValue={setCurrentCost}
            value={currentCost}
            minValue={50}
            maxValue={900}
            step={50}
          />
        </Dialog.Content>
        <Dialog.Actions style={{justifyContent:'center'}}>
            <GymFitButton onPress={onSubmit}>Filtrar</GymFitButton>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
