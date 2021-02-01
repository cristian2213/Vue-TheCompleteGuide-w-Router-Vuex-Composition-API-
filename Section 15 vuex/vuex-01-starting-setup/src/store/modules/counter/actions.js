export default {
  // context: object with info, "las acciones cometen mutaciones"
  increment(context) {
    // cometiendo mutacion
    context.commit('increment');
  },

  increase(context, payload) {
    // se puede alterar la carga util (payload) antes de hacer la mutacion

    context.commit('increase', payload);
  },

  login(context) {
    console.log(context);
  }
};
