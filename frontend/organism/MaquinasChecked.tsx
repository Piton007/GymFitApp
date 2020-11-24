import React from 'react';
import { StyleSheet, View } from 'react-native';
import Maquina from '../molecules/MaquinaChecked';


interface MaquinaDTO {
    id: number;
    name: string;
    image: string;
  }
  
  interface Props {
    data: MaquinaDTO[];
    ids: Set<number>;
    setIds: (set: Set<number>) => void;
  }


export default ({data, ids, setIds}: Props) => {
    return (
      <View style={styles.container}>
        {data.map((x) => (
          <View key={x.id} style={styles.item}>
            <Maquina
              maquina={x}
              status={ids.has(x.id) ? 'checked' : 'unchecked'}
              onPress={() => {
                if (ids.has(x.id)) ids.delete(x.id);
                else ids.add(x.id);
                setIds(new Set([...ids]));
              }}
            />
          </View>
        ))}
      </View>
    );
  };
const styles = StyleSheet.create({
    container:{
        padding:10
    },
    item:{
        marginBottom:15
    }
})