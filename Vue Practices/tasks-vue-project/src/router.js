import { createRouter, createWebHistory } from 'vue-router';

// components
import Login from './components/login/Login.vue';
import Auth from './components/auth/Auth.vue';
import Projects from './components/projects/Projects.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },

    {
      path: '/login',
      component: Login,
    },

    {
      path: '/create_account',
      component: Auth,
    },

    {
      path: '/projects',
      component: Projects,
    },

    {
      path: '/:pathMatch(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
});

export default router;
