<template>
  <base-container title="Vuex">
    <!-- Accediendo a los datos de la tiemda, mediante la variable store -->
    <the-counter></the-counter>
    <favorite-value></favorite-value>

    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
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
      this.$store.dispatch({
        type: 'increase',
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