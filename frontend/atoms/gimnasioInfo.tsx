import React from "react"
import { Avatar, Card } from "react-native-paper"

export interface GimnasioViewModel {
    name: string;
    email: string;
  }
const LeftContent = (props: any) => <Avatar.Icon {...props} size={48} icon="alpha-g-circle" />;
export default function(props:GimnasioViewModel){
    return (<Card style={{flex: 1}}>
      <Card.Title
        title={props.name}
        left={LeftContent}
        subtitle={props.email}
      />
    </Card>)
}