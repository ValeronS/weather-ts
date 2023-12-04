import { createPinia } from 'pinia';
import { createApp } from 'vue';
import '@/styles/main.scss';
import YandexMap from 'vue-yandex-maps';
import App from './App.vue';
import { router } from './router';
import { ySettings } from '@/utils';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(YandexMap, ySettings);

app.mount('#app');
