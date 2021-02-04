import { createStore } from 'vuex';
// importacion de modulos
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule
  },

  state() {
    return {
      userId: 'c3'
    };
  },

  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
