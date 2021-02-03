import { createApp } from 'vue';
import App from './App.vue';
// importacion de las rutas
import router from './router.js';
// importacion de la tienda
import store from './store/index.js';

// importacion de componenetes globales
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

// component registration
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
