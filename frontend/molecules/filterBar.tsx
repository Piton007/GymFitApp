import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ChipDismiss } from "../atoms";


  interface FilterProps {
    title: string;
    value: number;
    onDismiss(): void;
  }
  
export default function({title,value,onDismiss}: FilterProps) {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Filtros: </Text>
          <View style={styles.filters}>

          
          <ChipDismiss
            title={title}
            value={value.toString()}
            onDismiss={onDismiss}
          />
          </View>
     
      </View>
    )
  }
const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        flexDirection:'row'
    },
    title:{
        fontSize:20,
        marginHorizontal:5
    },
    filters:{
        marginHorizontal:10
    }

})