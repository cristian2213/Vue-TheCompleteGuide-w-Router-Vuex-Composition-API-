// las mutaciones son asincronas, por lo tanto no se permite ningun codigo asincrono aquie

export default {
  // changes the store and it doesn't let repeat code
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};
