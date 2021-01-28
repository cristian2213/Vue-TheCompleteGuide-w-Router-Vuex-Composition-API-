import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },

      // proteger rutas individuales
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// este metodo sera llamado cada vez que se navegue entre las rutas, y evaluara todas las rutas
//router.beforeEach(function (to, from, next) {
//console.log('Global beforeEach');
//console.log(to, from);
// if (to.name === 'team-members') { // validar que no se redirige a la misma ruta porque se produce un blucle infinito
//   next();// permite la navegacion, autoriza que el usuario vea la rutas
//   next(false);// permite cancelar la navegacion
// } else {
//   next({ name: 'team-members', params: { teamId: 't2' } });// ruta a la que desea navegar pasando un objeto
//   next('/teams');// ruta a la que desea navegar
// }
//   next();
// });

router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
