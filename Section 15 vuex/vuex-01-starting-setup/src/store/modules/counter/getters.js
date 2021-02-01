export default {
  testAuth(state, getters, rootState, rootGetters) {
    //* cuando se necesitan datos de la tienda se pueden acceder a través de estos parametros, la idea de los modulos es trabajar simplemente con el estado del modulo, pero existen casos muy concretos en los cuales se necesitan datos de la tienda
    console.log('getters', getters);
    console.log('rootState', rootState);
    console.log('rootGetters', rootGetters);

    return state.isLoggedIn;
  },

  // capturadores
  finalCounter(state) {
    return state.counter * 3;
  }
};
