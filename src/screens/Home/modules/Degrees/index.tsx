import React from 'react';
import {convertFahrenheitToCelsius} from 'shared/utils/convertFahrenheitToCelsius';
import {Circle, Text} from './styles';

type IProps = {
  temp?: number;
};

export function Degrees({temp}: IProps) {
  return (
    <Circle>
      <Text>{convertFahrenheitToCelsius(temp)}˚C</Text>
    </Circle>
  );
}
