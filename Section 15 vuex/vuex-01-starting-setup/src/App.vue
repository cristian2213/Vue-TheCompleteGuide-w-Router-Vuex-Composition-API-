<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <!-- Accediendo a los datos de la tiemda, mediante la variable store -->
    <the-counter></the-counter>
    <favorite-value></favorite-value>

    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },

  methods: {
    addOne() {
      // cambiando los datos del store
      //this.$store.commit('increase', { value: 10 });

      // segunda manera
      //this.$store.commit({
      //  type: 'increase',
      //  value: 10,
      //});

      // correct way, using actions
      //this.$store.dispatch({
      //  type: 'increase',
      //  value: 10,
      //});

      // accediendo a las acciones usando modulos con namespaced
      this.$store.dispatch({
        type: 'numbers/increase', // toma el nombre del namespaced y el metodo
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>