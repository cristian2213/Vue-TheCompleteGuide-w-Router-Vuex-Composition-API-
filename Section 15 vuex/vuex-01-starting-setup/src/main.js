import { createApp } from 'vue';
import App from './App.vue';
// importacion de la tienda, en um file aparte para mayor orden en proyectos grandes
import store from './store/index.js';

const app = createApp(App);

app.use(store);

app.mount('#app');
