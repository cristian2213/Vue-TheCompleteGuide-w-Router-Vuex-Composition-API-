<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
// Using Mapper helper
import { mapGetters } from 'vuex';

export default {
  computed: {
    //counter() {
    //* leyendo datos, correct way
    //  return this.$store.getters.finalCounter;// profundizando en la tiemda
    //},

    // se fuciona los datos con la propiedad computada

    //...mapGetters(['finalCounter']), //* se declaran los nombres de los getters

    //* acceder a los getters usando el mapGetters y con la propiedade "namespaced" activada
    ...mapGetters('numbers', ['finalCounter']), // primero toma el nombre del namespaced y luego todos los metodos a los que se desea acceder
  },
};
</script>

<style>
</style>