export interface WeatherData {
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string
  }
}

export interface WeatherInfoProps {
  data: WeatherData | null;
  loading: boolean;
}