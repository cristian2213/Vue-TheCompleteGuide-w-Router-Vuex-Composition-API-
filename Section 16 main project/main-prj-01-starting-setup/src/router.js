import { createRouter, createWebHistory } from 'vue-router';

// importacoin de componentes
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList, name: 'coaches' },

    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,

      children: [
        { path: 'contact', component: ContactCoach } // ruta anidada: /coaches/c1/contact
      ]
    },

    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },

    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
