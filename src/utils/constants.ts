export const weatherApiUrl = 'https://api.openweathermap.org/data/2.5';

export const locationSearchApiUrl = 'https://api-maps.yandex.ru/2.1';

export const weatherKey = 'a722624eaa524af8342f7a194cffad4d';

export const yKey = '3f687f74-3058-4e84-b54e-e80ce95c0925';

export const ySettings = {
  apiKey: yKey,
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
};

export enum E_Modals {
  ERROR = 'ERROR',
}

export const AppUrls = {
  index: {
    path: '/',
    name: 'index',
  },
  home: {
    path: '/home',
    name: 'home',
  },
  forecast: {
    path: '/forecast',
    name: 'forecast',
  },
} as const;
