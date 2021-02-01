import loginGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    };
  },

  getters: loginGetters
};
