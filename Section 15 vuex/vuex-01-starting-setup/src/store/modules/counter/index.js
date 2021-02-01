// importacion de los metodos de este modulo
import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// organizando la tienda con modulos, la finalidad es separar la logica en piezas para luego fusionar los datos con la tienda
//const counterModule = {
export default {
  namespaced: true,
  state() {
    return {
      // el estado en un modulo se trata como un estado local, solo se tiene acceso a las propiedades de este modulo
      counter: 0
    };
  },

  mutations: counterMutations,

  actions: counterActions,

  getters: counterGetters
};
