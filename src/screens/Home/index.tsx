import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import * as Location from 'expo-location';
import {addressService} from 'shared/services/api/addressService';
import {weatherService} from 'shared/services/api/weatherService';

import {Degrees, Information} from './modules';
import {
  Button,
  Container,
  Divider,
  Description,
  Title,
  Subtitle,
} from './styles';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState({lat: 0, lon: 0});
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (position.lat === 0 && position.lon === 0)
      (async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setPosition({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
      })();
  }, [position.lat, position.lon]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const {lat, lon} = position;

      const resWeather = await weatherService.getWeatherData(lat, lon);
      const resAddress = await addressService.getAddress(lat, lon);

      setData({address: resAddress, weather: resWeather});
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, [position]);

  useEffect(() => {
    if (position.lat !== 0 && position.lon !== 0) getData();
  }, [getData, position]);

  const handleUpdateWeather = useCallback(() => {
    getData();
  }, [getData]);

  if (errorMsg || error) {
    return (
      <Container>
        <Title>Error</Title>
        <Description>{errorMsg || error}</Description>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" testID="loading" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        {data?.address?.locality}, {data?.address?.principalSubdivision}/
        {data?.weather?.sys?.country}
      </Title>
      <Subtitle>{new Date().toLocaleDateString()}</Subtitle>
      <Button title="ATUALIZAR" onPress={handleUpdateWeather} />
      <Degrees temp={data?.weather?.main.temp} />
      <Description>{data?.weather?.weather[0].description}</Description>
      <Divider />
      <Information
        humidity={data?.weather?.main.humidity}
        speed={data?.weather?.wind.speed}
      />
    </Container>
  );
}
