export default {
  // es buena practica poner actions en los componentes ya que esto se encarga de cometer las mutaciones (las acciones cometen mutaciones), es mala practica mutar los datos sin usar actions, ademas los actions permiten acciones asincronasy las mutaciones no
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },

  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
