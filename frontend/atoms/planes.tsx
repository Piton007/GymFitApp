import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar, Card, Chip, List,Text} from 'react-native-paper';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MyContext, PRIMARY_COLOR } from '../global';
import { PlanDTO } from '../network/planes';


interface PlanProps {
  data: PlanDTO;
  deleteAction?: () => void;
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
  
  const navigationHeader = useContext(MyContext)

  function toEdit(){
    navigationHeader?.navigate("EditPlan",data)
  }

  function resume(title:string,descuento:number|null){
    return(
      <View style={{flexDirection:"row",alignItems:'baseline'}}>
        <Text style={{fontSize:18}}>
          {title}
        </Text>

        {
          (descuento) && <Chip style={{backgroundColor:PRIMARY_COLOR,marginStart:50}} textStyle={{color:'#FFFFFF'}}> OFERTA {descuento}%</Chip>
        }
        
      </View>
    )
  }

  /* function moreInfo() {
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
            description={`${data.duracion} meses`}
          />
        </Card.Content>
      );
    } else {
      return null;
    }
  } */
  return (
   
      <Swipeable
        renderRightActions={() => (<DeleteView onPress={deleteAction} />)}>
        <Card
          style={{
            flex: 1,
            backgroundColor: data.availability ? '#FFFFFF' : '#F54F0B',
          }}
          onPress={toEdit}>
          <Card.Title
            title={
              resume(data.name,data.descuento)
            }
            left={(left: any) => (
              <Avatar.Icon
                {...left}
                style={{
                  backgroundColor: data.availability ? '#FFFFFF' : '#F54F0B',
                }}
                size={48}
                icon="alpha-f-circle"
              />
            )
          }
         
          />
        
        </Card>
        </Swipeable>

  );
}
export  function Deportista ({data}: PlanProps) {
  
  const [displayInfo,setDisplayInfo] = useState(false)

  function resume(title:string,descuento:number|null){
    return(
      <View style={{flexDirection:"row",alignItems:'baseline'}}>
        <Text style={{fontSize:18}}>
          {title}
        </Text>

        {
          (descuento) && <Chip style={{backgroundColor:PRIMARY_COLOR,marginStart:50}} textStyle={{color:'#FFFFFF'}}> OFERTA {descuento}%</Chip>
        }
        
      </View>
    )
  }

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
            description={`${data.duracion} meses`}
          />
        </Card.Content>
      );
    } else {
      return null;
    }
  }
  return (
        <Card
          style={{
            flex: 1,
            backgroundColor: data.availability ? '#FFFFFF' : '#F54F0B',
          }}
          onPress={()=>{setDisplayInfo(!displayInfo)}}
          >
          <Card.Title
            title={
              resume(data.name,data.descuento)
            }
            left={(left: any) => (
              <Avatar.Icon
                {...left}
                style={{
                  backgroundColor: data.availability ? '#FFFFFF' : '#F54F0B',
                }}
                size={48}
                icon="alpha-f-circle"
              />
            )
          }
         
          />
      
            {moreInfo()}
       
        
        </Card>
     

  );
}
