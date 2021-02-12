export default {
  async addRequest(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(
      `https://vue-http-demo-73297-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error || 'Failed to Fetch');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },

  async getRequests(context) {
    // obtener las propiedades de la raiz
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://vue-http-demo-73297-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error || 'Failed to Fetch');
      throw error;
    }

    const requests = [];

    const keys = Object.keys(responseData);

    for (const k of keys) {
      const request = {
        id: k,
        coachId: responseData[k].coachId,
        message: responseData[k].message,
        userEmail: responseData[k].userEmail
      };
      requests.push(request);
    }

    context.commit('addRequests', requests);
  }
};
