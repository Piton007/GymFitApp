import React, {createRef, useEffect, useRef} from 'react';
import Slider, {SliderRef as Ref} from '@react-native-community/slider';
import {PRIMARY_COLOR} from '../global';
import {Alert, SliderProps, StyleSheet} from 'react-native';

export type SliderRef =  React.MutableRefObject<Ref> & React.RefObject<Slider>

interface Props {
  onChange: (v: number) => void;
  minValue: number;
  value:number;
  maxValue: number;
  step: number;
  width: number;
}


export default (props: Props) => {

  return (
    <Slider

      value={props.value}
      style={styles(props.width).slider}
      minimumValue={props.minValue}
      maximumValue={props.maxValue}
      onValueChange={props.onChange}
      step={props.step}
      minimumTrackTintColor={PRIMARY_COLOR}
      maximumTrackTintColor="#3C3F3F"
    />
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    slider: {
      height: 40,
      width,
    },
  });
