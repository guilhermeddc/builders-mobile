import React from 'react';
import {outono, solta} from 'shared/assets';
import {convertMilesToKilometers} from 'shared/utils/convertMilesToKilometers';
import {Wrapper, H4, Body2, Box, Stack, Image} from './styles';

type IProps = {
  speed?: number;
  humidity?: number;
};

export function Information({speed, humidity}: IProps) {
  return (
    <Wrapper>
      <Box>
        <Image source={outono} />
        <Stack>
          <Body2>Vento</Body2>
          <H4>{convertMilesToKilometers(speed)}km/h</H4>
        </Stack>
      </Box>

      <Box />

      <Box>
        <Image source={solta} />
        <Stack>
          <Body2>Umidade</Body2>
          <H4>{humidity}%</H4>
        </Stack>
      </Box>
    </Wrapper>
  );
}
