import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; //

import App from './App.vue';
// importacion de componentes para las rutas
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
      //* rutas con nombre
      name: 'teams',
      path: '/teams',
      /* component: TeamsList, */

      //* En una ruta se puede tener mas de un componente, esto sirve para cargar componentes  de distintas sesiones, en este objeto las keys identifican los nombres de las router-views en donde se renderiza cada componente
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },

      // rutas anidadas, consiste en ejecutar una ruta adentro de otra, no es necesario agregar otra vez el nombre de la ruta que la contiene, por ejemplo /teams/:teamId
      children: [
        {
          name: 'team-members',
          /* props: true, le dice a esta ruta que todos los parametros dinamicos se deben pasar como props */
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },

    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      // Guardia de ruta individual, la funcion es proteger el componente
      beforeEnter(to, from, next) {
        //console.log(to, from);
        next();
      }
    },

    { path: '/:notFound(.*)', component: NotFound }
  ],
  /* Cambiar el estilo que viene por defecto en la ruta seleccionada */
  linkActiveClass: 'active',

  //** controlar el scroll de la pagina */
  scrollBehavior(to, from, savedPosition) {
    // to: pagina a la que vamos
    // from: pagina de la que venimos o en la que se esta navegando
    // savedPosition: objeto que cuarda la posicion si el usuario retrocede
    //console.log(to);
    //console.log(from);
    //console.log(savedPosition); // esta posicion se establece si el usuario retrocede en la pagina

    if (savedPosition) {
      // si existe una posicion entonces se retorna
      return savedPosition; // return { left: 0, top: 10.12321341 }
    }

    return { left: 0, top: 0 };
  }
});

//* Navigation Guards
// este es un guardian global, filtra asolutamente todas las rutas
router.beforeEach((to, from, next) => {
  // next: para confirmar o cancelar la accion de la navegacion
  //console.log(to, from);

  const isAuthenticated = true;
  if ((to.name !== 'teams' || to.name !== 'users') && !isAuthenticated)
    next({ name: 'teams' });
  else next();
});

// es un guardia globarl y este no permite modificar las rutas
router.afterEach((to, from) => {
  // es util para envirar datos analiticos al servidor
  console.log(to, from);
});

const app = createApp(App);
// aplicar las rutas
app.use(router); // este metodo permite conectar nuestra app de vue con paquetes de terceros

app.mount('#app');
