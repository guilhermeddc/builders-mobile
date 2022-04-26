import axios from 'axios';

export interface IWeather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  id: number;
  name: string;
}

const getWeatherData = async (
  lat: number,
  lon: number,
): Promise<IWeather | null> => {
  try {
    if (lat && lon) {
      const {data: response} = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=ec5590b416530b954cc98dd2c6905d3c`,
      );

      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Erro ao carregar dados da API');
  }
};

export const weatherService = {getWeatherData};
