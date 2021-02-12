// las mutaciones no son asincronas, por lo tanto no se permite ningun codigo asincrono aqui

export default {
  // changes the store and it doesn't let repeat code
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};
