import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Avatar, Card, List} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export interface PlanViewModel {
  periodo: string;
  name: string;
  descripcion: string;
  precio: string;
  disponibilidad: boolean;
  cantidad: number;
}
interface PlanProps {
  data: PlanViewModel;
  deleteAction: () => void;
}

function DeleteView({onPress}: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
            flex:1,
          backgroundColor: '#E22904',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: '#FFFFFF',fontWeight:'600',padding:20}}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function ({data, deleteAction}: PlanProps) {
  const [displayInfo, setDisplayInfo] = useState(false);

  function moreInfo() {
    if (displayInfo) {
      return (
        <Card.Content style={{backgroundColor: '#FFFFFF'}}>
          <List.Item
            style={{marginVertical: 2}}
            title="Deportistas"
            description={`${data.cantidad}`}
            left={(props) => <List.Icon {...props} icon="bike" />}
          />
          <List.Item
            style={{marginVertical: 2}}
            title="Precio"
            description={`${data.precio}`}
            left={(props) => <List.Icon {...props} icon="cash" />}
          />
          <List.Item
            style={{marginVertical: 2}}
            title="Periodo"
            left={(props) => <List.Icon {...props} icon="calendar" />}
            description={`${data.periodo}`}
          />
        </Card.Content>
      );
    } else {
      return null;
    }
  }
  return (
   
      <Swipeable
        renderRightActions={() => (<DeleteView onPress={deleteAction} />)}>
        <Card
          style={{
            flex: 1,
            backgroundColor: data.disponibilidad ? '#FFFFFF' : '#F54F0B',
          }}
          onPress={() => {
            setDisplayInfo(!displayInfo);
          }}>
          <Card.Title
            title={data.name}
            left={(left: any) => (
              <Avatar.Icon
                {...left}
                style={{
                  backgroundColor: data.disponibilidad ? '#FFFFFF' : '#F54F0B',
                }}
                size={48}
                icon="alpha-f-circle"
              />
            )}
          />
          {moreInfo()}
        </Card>
        </Swipeable>

  );
}
