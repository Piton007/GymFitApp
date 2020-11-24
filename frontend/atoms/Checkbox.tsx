import React from "react"
import { Checkbox } from "react-native-paper"
import { PRIMARY_COLOR } from "../global"

export type CheckboxStatus = 'checked' | 'unchecked' | 'indeterminate'

interface Props {
    status: CheckboxStatus
    onPress:()=>void
}

export default function ({status,onPress}:Props){
    return (
        <Checkbox
       color={PRIMARY_COLOR}
        status={status}
        onPress={onPress}
      />
    )
}
