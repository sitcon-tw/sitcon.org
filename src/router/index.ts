import { RouterOptions } from 'vite-ssg';
import { RouteRecordRaw, RouterScrollBehavior } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'Landing'
    },
    meta: {
      order: 0
    }
  }
];

export const routerOptions: RouterOptions = {
  base: import.meta.env.BASE_URL,
  routes: routes,
  scrollBehavior: ((): RouterScrollBehavior => () => ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }))()
};
