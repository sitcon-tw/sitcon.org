import { ViteSSG } from 'vite-ssg';

import App from './App.vue';
import { routerOptions } from '@/router';

export const createApp = ViteSSG(
  // Root component
  App,
  // vue-router options
  routerOptions
  // Install custom Modules
  // (ctx) => {}
);
