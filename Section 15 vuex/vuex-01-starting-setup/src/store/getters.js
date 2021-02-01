export default {
  // la forma correcta de leer datos del store, no es recomendado leer los datos directamente desde un componente
  userIsAuthenticated(state) {
    return state.isLoggedIn;
  }
};
