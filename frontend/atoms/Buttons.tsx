import React from "react"
import {Button} from 'react-native-paper';



export function GymFitButton(props:any){

 

    return(
        <Button labelStyle={{color:'#FFFFFF'}} disabled={props.disabled} theme={{colors: {primary: (props.disabled) ? '#3C3F3F' : "#F5851B" } }} {...props}style={ Object.assign({},{width:200,backgroundColor:(props.disabled) ? '#3C3F3F' : "#F5851B"},props.style) }/>
          
       

        
    )
}