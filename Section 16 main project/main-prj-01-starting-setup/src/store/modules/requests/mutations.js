export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },

  addRequests(state, payload) {
    state.requests = payload;
  }
};
