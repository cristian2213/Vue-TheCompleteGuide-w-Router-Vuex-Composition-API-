import { createApp } from 'vue';
// para las rutas
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(), // guardar el historial de la pagina
  routes: [
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
  ],
});
// nota: componentes que se declaren en las rutas no son necesarios que se carguen en los componentes

const app = createApp(App);

app.use(router);

app.mount('#app');
