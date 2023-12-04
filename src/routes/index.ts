import { RouteRecordRaw } from 'vue-router';

import { AppUrls } from '@/utils';

const HomePage = () => import('@/_modules/home/Home.vue');
const ForecastPage = () => import('@/_modules/forecast/Forecast.vue');

const routes: RouteRecordRaw[] = [
  {
    name: AppUrls.home.name,
    path: AppUrls.home.path,
    component: HomePage,
    meta: {},
  },
  {
    name: AppUrls.forecast.name,
    path: AppUrls.forecast.path,
    component: ForecastPage,
    meta: {},
  },
  {
    path: '/:pathMatch(.*)*', //will match everything and put it under `$route.params.pathMatch`
    name: 'not-found',
    redirect: () => {
      return AppUrls.home.path;
    },
  },
];

export { routes };
