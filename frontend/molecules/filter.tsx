import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Slider as GymSlider} from '../atoms';
import {SliderRef} from '../atoms/Slider';

interface Props {
  
  value: number;
  setValue:(v:number)=>void
  minValue: number;
  maxValue: number;
  step: number;
}

export function MaximumCost({minValue, maxValue, step, setValue, value}: Props) {
  
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Max Price</Text>
        <Text style={styles.value}>${value}</Text>
      </View>
      <View style={styles.slider}>
        <GymSlider
          value={value}
          onChange={(v: number) => {
            setValue(v);
          }}
          width={200}
          step={step}
          minValue={minValue}
          maxValue={maxValue}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
  },
  slider: {
    marginVertical: 20,
  },
});
