import { Avatar, Card, Paragraph,Text,List } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import {unSuscribe} from "../network/suscripcion"
import { PRIMARY_COLOR } from "../global";
import { Alert } from "react-native";

export interface SuscripcionViewModel{
   id:number,
   gimnasio:string 
   name:string,
   descripcion:string,
   duracion:string,
   precio:string
}

const LeftContent = (props:any) => <Avatar.Icon {...props} icon="account-star" />
interface Props extends SuscripcionViewModel{
    onDelete():void
}

export default function(props:Props){

    function deleteSuscription (iconProps:any){
        
        return <MaterialCommunityIcons name="trash-can" style={{marginHorizontal:12}} onPress={()=>{
            unSuscribe(props.id).then((x)=>{
                props.onDelete()
            })
           
        }} color={PRIMARY_COLOR} {...iconProps} size={26} />
    }
    return(
        <Card style={{height:250,width:'auto'}}>
            <Card.Title title={props.gimnasio +" "+ props.name } left={LeftContent} right={deleteSuscription} />
            <Card.Content>
                <List.Item style={{marginVertical:2}} title="Precio" description={`S/${props.precio}`} left={props => <List.Icon {...props} icon="cash" />} />
                <List.Item style={{marginVertical:2}} title="Periodo"  left={props => <List.Icon {...props} icon="calendar" />} description={`${props.duracion} meses`}/>
                
            </Card.Content>
            
        </Card>
    )
}