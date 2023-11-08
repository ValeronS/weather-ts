import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { FetchState } from '@/services/http/type.response.ts';
import { WeatherService } from '@/services/weather/WeatherService.ts';
import { Forecast } from '@/services/weather/models';
import { doRequestAPI, onGeneralError } from '@/store/helpers';

export const useWeatherStore = defineStore('weather', () => {
  const fetchState = ref<FetchState>('initial');
  const isLoading = computed(() => fetchState.value === 'loading');
  const setFetchState = (s: FetchState) => (fetchState.value = s);

  const forecast = ref<Forecast>();

  const fetchForecast = async (lat: string, lon: string) => {
    await doRequestAPI({
      reqFunc: () => WeatherService.getForecast(lat, lon),
      onLoading: setFetchState,
      onLoad: (v) => {
        forecast.value = v;
      },
      onError: onGeneralError,
    });
  };

  return {
    fetchForecast,
    isLoading,
    forecast,
  };
});
