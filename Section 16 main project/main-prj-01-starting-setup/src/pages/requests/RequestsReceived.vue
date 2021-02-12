<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasRequest">
        <request-item
          v-for="request in receivedRequest"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    hasRequest() {
      return this.$store.getters['requests/hasRequest'];
    },

    receivedRequest() {
      return this.$store.getters['requests/getRequests'];
    },
  },

  methods: {
    async getRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/getRequests');
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
    },
  },

  created() {
    this.getRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>