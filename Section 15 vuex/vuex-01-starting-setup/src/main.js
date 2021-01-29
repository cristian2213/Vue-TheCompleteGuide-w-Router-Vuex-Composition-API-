import { createApp } from 'vue';
// vuex
import { createStore } from 'vuex';

import App from './App.vue';

// using vuex, all data are reactive
const store = createStore({
  state() {
    // here will save all data of us application
    return {
      counter: 0,
    };
  },

  // changes the store and it doesn't let repeat code
  mutations: {
    // las mutaciones son asincronas, por lo tanto no se permite ningun codigo asincrono aquie
    increment(state) {
      // toma el state actual
      state.counter = state.counter + 2;
    },

    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },

  // la forma correcta de leer datos del store, no es recomendado leer los datos directamente desde un componente
  getters: {
    // capturadores
    finalCounter(state) {
      return state.counter * 3;
    },
  },

  // es buena practica poner actions en los componentes ya que esto se encarga de cometer las mutaciones (las acciones cometen mutaciones), es mala practica mutar los datos sin usar actions, ademas los actions permiten acciones asincronasy las mutaciones no

  actions: {
    // context: object with info, "las acciones cometen mutaciones"
    increment(context) {
      // cometiendo mutacion
      context.commit('increment');
    },

    increase(context, payload) {
      // se puede alterar la carga util (payload) antes de hacer la mutacion

      context.commit('increase', payload);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
