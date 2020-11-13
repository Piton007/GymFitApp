import { Avatar, Card, Paragraph,Text,List } from "react-native-paper";
import React from "react";

export interface SuscripcionViewModel{
   gimnasio:string 
   name:string,
   descripcion:string,
   duracion:string,
   precio:string
}

const LeftContent = (props:any) => <Avatar.Icon {...props} icon="account-star" />

export default function(props:SuscripcionViewModel){
    return(
        <Card style={{height:250,width:'auto'}}>
            <Card.Title title={props.gimnasio +" "+ props.name } left={LeftContent} />
            <Card.Content>
                <List.Item style={{marginVertical:2}} title="Precio" description={`S/${props.precio}`} left={props => <List.Icon {...props} icon="cash" />} />
                <List.Item style={{marginVertical:2}} title="Periodo"  left={props => <List.Icon {...props} icon="calendar" />} description={`${props.duracion} meses`}/>
                
            </Card.Content>
        </Card>
    )
}