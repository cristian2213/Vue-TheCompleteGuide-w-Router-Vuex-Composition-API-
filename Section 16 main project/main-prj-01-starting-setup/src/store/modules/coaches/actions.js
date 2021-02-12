export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;

    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    const response = await fetch(
      `https://vue-http-demo-73297-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(coachData)
      }
    );

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      // throw erro
      return;
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },

  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-73297-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // Throw error
      const error = new Error(responseData.error || 'Failed to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const keys = Object.keys(responseData[key]);
      for (const k of keys) {
        const coach = {
          id: key,
          firstName: responseData[key][k].firstName,
          lastName: responseData[key][k].lastName,
          description: responseData[key][k].description,
          hourlyRate: responseData[key][k].hourlyRate,
          areas: responseData[key][k].areas
        };
        coaches.push(coach);
      }
    }
    //console.log(coaches);

    context.commit('setCoaches', coaches);
  }
};
