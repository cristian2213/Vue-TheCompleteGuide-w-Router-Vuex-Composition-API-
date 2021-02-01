<template>
  <h3>{{ counter }}</h3>
  <p>we do more</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //* manera incorrecta de leer datos de la tienda, ademas es mala practica
      //return this.$store.state.counter;

      //* correct way
      //return this.$store.getters.finalCounter;

      //* acceder a los getters usando modulos con "namespaced"
      return this.$store.getters['numbers/finalCounter']; // primero el nombre del namespaced y luego el nombre del capturador
    },
  },
};
</script>

<style>
</style>