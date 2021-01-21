import { createApp } from 'vue';

import App from './App.vue';
// aqui se declaran los componentes globales
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);

app.mount('#app');
