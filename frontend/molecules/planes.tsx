import React, {useContext, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getByIdAndPopulatePlans} from '../network/gimnasio';
import Plan from '../atoms/planes';
import FilterBar from './filterBar';
import {ChipDismiss, GimnasioPlanHeader as Header} from '../atoms';
import {GYM_KEY, MyContext, NoDisponibleMsj} from '../global';
import {PlanFilter} from '../organism/planFilter';
import {deletePlan, PlanDTO} from '../network/planes';

import {
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Chip, Provider, Text} from 'react-native-paper';



export  default function (/* props:GimnasioDTO[] */) {
  const [planes, setPlanes] = useState<PlanDTO[]>([]);
  const [filterDialog, setFilterDialog] = useState<boolean>(false);
  const [cost, setCost] = useState<number>(-1);
  const navigation = useNavigation();
  const navigationHeader = useContext(MyContext);

  function deletes(index: number) {
    deletePlan(index)
      .then(() => {
        setPlanes(planes.filter((x) => x.id !== index));
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  }

  useEffect(() => {
    let suscribe = true;
    if (suscribe) {
      navigation.addListener('focus', () => {
        AsyncStorage.getItem(GYM_KEY).then((x: string | null) => {
          if (x) {
            const {id} = JSON.parse(x);
            getByIdAndPopulatePlans(id as number).then(({data}) => {
              setPlanes(data?.planes || []);
            });
          }
        });
        navigationHeader?.setOptions({
          headerTitle: () => (
            <Header
              toggleFilter={() => {
                setFilterDialog(true);
              }}
            />
          ),
        });
      });
    }
    return () => {
      suscribe = false;
    };
  }, []);

  
  function resetCost() {
    setCost(-1);
  }

  function render() {
    if (cost > 0) {
      return renderPlanes(planes.filter((x) => cost >= x.precio));
    } else {
      return renderPlanes(planes);
    }
  }

  function renderPlanes(filtered: PlanDTO[]) {
    if (filtered.length > 0) {
      return filtered.map((x) => (
        <View key={x.id} style={{marginHorizontal: 8, marginVertical: 8}}>
          <Plan
            data={x}
            deleteAction={() => {
              deletes(x.id);
            }}
          />
        </View>
      ));
    } else {
      return (
        <Text style={{fontSize: 20, margin:15}}>
          {NoDisponibleMsj('planes')}
        </Text>
      );
    }
  }
  


  return (
    <Provider>
      <PlanFilter
        cost={cost}
        visible={filterDialog}
        hideDialog={() => {
          setFilterDialog(false);
        }}
        onChangeCost={setCost}
      />
      <ScrollView>
        {cost > 0 && (
          <FilterBar value={cost} title="Max Cost" onDismiss={resetCost} />
        )}

        {render()}
      </ScrollView>
    </Provider>
  );
}
