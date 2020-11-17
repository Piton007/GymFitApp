import React from "react"
import {Button} from 'react-native-paper';


export function GymFitButton(props:any){

 

    return(
        <Button labelStyle={{color:'#FFFFFF'}} theme={{colors:{primary:'#3C3F3F'}}} {...props}style={{width:200,backgroundColor:'#3C3F3F'}}/>
          
       

        
    )
}