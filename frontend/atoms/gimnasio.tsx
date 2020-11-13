import React from "react"
import { Card,Avatar, Paragraph } from "react-native-paper"

export interface GimnasioViewModel{
    nombre:string,
    email:string,
    direccion:string
}

const LeftContent = (props:any) => <Avatar.Icon {...props} icon="alpha-g-circle" />

export default function(props:GimnasioViewModel){
    return(
        <Card style={{height:100,width:'auto'}}>
            <Card.Title title={props.nombre} left={LeftContent} subtitle={props.direccion}/>
           
        </Card>
    )
}