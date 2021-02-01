import loginMutations from './mutations.js';
import loginActions from './actions.js';
import loginGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    };
  },

  mutations: loginMutations,
  actions: loginActions,
  getters: loginGetters
};
