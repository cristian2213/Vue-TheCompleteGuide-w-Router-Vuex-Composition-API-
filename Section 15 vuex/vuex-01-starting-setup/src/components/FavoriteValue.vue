<template>
  <h3>{{ counter }}</h3>
  <p>we do more</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // manera incorrecta de leer datos de la tienda, ademas es mala practica
      //return this.$store.state.counter;
      // correct way
      return this.$store.getters.finalCounter;
    },
  },
};
</script>

<style>
</style>