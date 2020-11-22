import React from "react"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    size?:number
}

export const GymFitLogo= ({size = 1}:Props)=>(
    <MaterialCommunityIcons name="trophy" color="#F5851B" size={80 * size} />
)