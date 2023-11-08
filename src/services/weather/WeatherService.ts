import { httpService } from '@/services/http/http.service';
import { Forecast } from '@/services/weather/models.ts';
import { TypedPromise } from '@/store/type';
import { weatherApiUrl, weatherKey } from '@/utils';

type Api = {
  getForecast: (lat: string, lon: string) => TypedPromise<Forecast>;
};
const route = '/forecast';

export const WeatherService: Api = {
  getForecast(lat, lon) {
    return httpService.get(`${weatherApiUrl}/${route}`, {
      query: {
        appid: weatherKey,
        units: 'metric',
        lang: 'ru',
        lat,
        lon,
      },
    });
  },
};
