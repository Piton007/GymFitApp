import React from 'react';
import  {Standard} from '../atoms/Entrenador';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  Divider,
  TouchableRipple,
} from 'react-native-paper';
import { ScrollView, StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../global';


interface EntrenadorDTO {
    id: number;
    name: string;
    image: string;
  }
  
  interface Props {
    width?:number,
    data: EntrenadorDTO[];
    onChange: (index: number) => void;
    value: number;
  }


export default  ({data, onChange, value,width=200}: Props) => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const selected = (index: number) => {
      setVisible(false);
      onChange(index);
    };
  
    const closeMenu = () => setVisible(false);
  
    return (
      <View
        style={styles.container}>
        <Menu
          visible={visible}
          style={styles.menu}
          onDismiss={closeMenu}
          anchor={
            <TouchableRipple onPress={openMenu}>
              <View style={styles.anchor}>
                <Standard entrenador={data.find(x=>value == x.id)!} />
              </View>
            </TouchableRipple>
          }>
          <ScrollView style={styles.scroll}>
            {data.map((x, index) => (
              <View key={index}>
                <Menu.Item
                  style={[styles.menu,{width}]}
                  titleStyle={[styles.item,{width}]}
                  onPress={() => {
                    selected(x.id);
                  }}
                  title={
                    <View style={[styles.itemContent,{width:width - 30 }]}>
                      <Standard
                        entrenador={x}
                        right={
                          x.id === value ? (
                            <MaterialCommunityIcons
                              name="check"
                              color={PRIMARY_COLOR}
                              size={26}
                            />
                          ) : null
                        }
                      />
                    </View>
                  }
                />
                {index < data.length - 1 && <Divider style={styles.divider} />}
              </View>
            ))}
          </ScrollView>
        </Menu>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    anchor: {
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#3C3F3F',
    },
    menu: {
  
    },
    item: {
      marginVertical: 5,
    },
    itemContent:{
      
    },
    divider: {
      height: 0.7,
    },
    scroll: {
      height: 150,
    },
  });
  