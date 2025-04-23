

import { createWebHistory, createRouter } from "vue-router";
import { createApp } from 'vue';

import App from './App.vue';

import routes from "./router/index";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
//app.config.isCustomElement = tag => tag.startsWith('storage-');

app.use(router).mount('#app');

export default router;

