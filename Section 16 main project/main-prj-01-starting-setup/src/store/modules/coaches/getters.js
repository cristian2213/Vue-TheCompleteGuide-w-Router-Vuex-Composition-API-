export default {
  coaches(state) {
    return state.coaches;
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0; // retorna true o false
  },

  // verificar si es entrenador o no
  isCoach(state, getters, rootState, rootGetters) {
    //console.log('getters', getters); // local
    //console.log('rootState', rootState); // global
    //console.log('rootGetters', rootGetters); // global

    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId); // si retorna verdadero quiere decir que el entrenador se registro
  }
};
