export default {
  addProductToCart(state, payload) {
    // retorn -1 si no existe en el array o el indice
    const productInCartIndex = state.cart.items.findIndex(
      ci => ci.productId === payload.value.id
    );

    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;

      state.cart.total += payload.value.price;
    } else {
      const newItem = {
        productId: payload.value.id,
        title: payload.value.title,
        image: payload.value.image,
        price: payload.value.price,
        qty: 1
      };
      state.cart.items.push(newItem);

      state.cart.qty++;
      state.cart.total += payload.value.price;
    }

    console.log(state.cart.items);
  }
};
