const API_KEY =' b50d1586a5666074743eba40e46da683';

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(){
  return {
    type: FETCH_WEATHER
  };
}
