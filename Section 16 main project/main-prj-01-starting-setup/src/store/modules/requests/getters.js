export default {
  getRequests(state, _, _2, rootGetters) {
    const id = rootGetters.userId;

    return state.requests.filter(req => req.coachId === id);
  },

  hasRequest(state, getters) {
    return getters.getRequests.length <= 0 ? false : true;
  }
};
