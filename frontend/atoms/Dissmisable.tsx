import React from "react"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TouchableOpacity, View} from 'react-native';
import { Text } from "react-native-paper";

interface Props{
    children:React.ReactNode
    onDismiss:()=>void
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

export default function({children,onDismiss}:Props){
    return (
        <Swipeable renderRightActions={() => (<DeleteView onPress={onDismiss} />)}>
            {children}
        </Swipeable>
    )
}