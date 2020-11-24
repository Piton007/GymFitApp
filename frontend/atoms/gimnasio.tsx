import { useNavigation } from "@react-navigation/native"
import React, { useContext } from "react"
import { Card,Avatar, Paragraph } from "react-native-paper"
import { MyContext } from "../global"

export interface GimnasioViewModel{
    id:number,
    nombre:string,
    email:string,
    direccion:string
}

const LeftContent = (props:any) => <Avatar.Icon {...props} icon="alpha-g-circle" />

export default function(props:GimnasioViewModel){
    const navigationHeader = useContext(MyContext)
    return(
        <Card style={{height:100,width:'auto'}} onPress={()=>{navigationHeader.navigate('AddSuscription',{name:props.nombre,id:props.id})}} >
            <Card.Title title={props.nombre} left={LeftContent} subtitle={props.direccion}/>
           
        </Card>
    )
}