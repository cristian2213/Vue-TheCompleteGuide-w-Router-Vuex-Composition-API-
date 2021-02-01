export default {
  addToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },

  remove(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};
