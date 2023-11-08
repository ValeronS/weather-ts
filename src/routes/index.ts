import { RouteRecordRaw } from 'vue-router';

import { AppUrls } from '@/utils';

const HomePage = () => import('@/_modules/home/Home.vue');

const routes: RouteRecordRaw[] = [
  {
    name: AppUrls.home.name,
    path: AppUrls.home.path,
    component: HomePage,
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
