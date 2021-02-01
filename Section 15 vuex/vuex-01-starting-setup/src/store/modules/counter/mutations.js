export default {
  increment(state) {
    // toma el state actual
    state.counter = state.counter + 2;
  },

  increase(state, payload) {
    state.counter = state.counter + payload.value;
    console.log(state);
  }
};
