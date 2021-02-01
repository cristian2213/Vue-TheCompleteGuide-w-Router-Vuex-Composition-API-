<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('numbers', ['testAuth']),
    ...mapGetters(['userIsAuthenticated']),
  },

  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<style>
</style>