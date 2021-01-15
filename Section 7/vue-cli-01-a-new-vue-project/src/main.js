import { createApp } from 'vue';

import App from './App.vue';
// importar el componente con la extencion
import FriendContact from './components/FriendContact.vue';

// segundo guardar la intancia pricipal de vue en una variable y montarla app
const app = createApp(App);

/**
 * tercer paso registrar el componente
 * @param 1: component name
 * @param 2: component path
 */
app.component('friend-contact', FriendContact);

app.mount('#app');
