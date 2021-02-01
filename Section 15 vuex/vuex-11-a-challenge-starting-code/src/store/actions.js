export default {
  addToCart(context, payload) {
    context.commit('addProductToCart', payload);
  }
};
