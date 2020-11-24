import React from 'react';
import Dissmisable from '../atoms/Dissmisable';
import Entrenador,{Props as EntrenadorProps} from '../atoms/Entrenador';

interface Props extends EntrenadorProps {
    onDismiss:()=>void
}

export default function (props:Props) {
  return (
    <Dissmisable
      onDismiss={props.onDismiss}>
      <Entrenador {...props} />
    </Dissmisable>
  );
}
