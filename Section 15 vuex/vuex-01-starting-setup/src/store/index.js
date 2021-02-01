// vuex
import { createStore } from 'vuex';

// importacion de los metodos de la tienda, que estan divididos de acuerdo a su funcionalidad
import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

// importacion de modulos
import counterModule from './modules/counter/index.js';

//* using vuex, all data are reactive
const store = createStore({
  // implementando los modulos
  modules: {
    // si se habilita el "namespaced" la key de cada modulo es el nombre que tomaria todas las priedades del modulo, esto con el fin de no tener conflictos con los metodos de otros modulos.
    numbers: counterModule
  },

  state() {
    // here will save all data of us application
    return {
      isLoggedIn: false
    };
  },

  mutations: rootMutations,

  getters: rootGetters,

  actions: rootActions
});

export default store;
