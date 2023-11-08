import qs from 'qs';
import { createRouter, createWebHistory, LocationQuery } from 'vue-router';
import { routes } from '@/routes';

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  parseQuery: (query) => qs.parse(query) as LocationQuery,
  stringifyQuery: qs.stringify,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // always scroll to top
    return { top: 0 };
  },
});

export { router };
