import { createStore } from 'vuex';
// importacion de modulos
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule
  },

  state() {
    return {};
  }
});

export default store;
