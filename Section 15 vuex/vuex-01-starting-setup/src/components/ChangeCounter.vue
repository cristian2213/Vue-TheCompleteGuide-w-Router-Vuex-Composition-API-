<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    //addOne() {
    //* confirm method, this method takes the mutation name to execute it
    //this.$store.state.counter++; nunca se debe mutar el store sin usar mutaciones
    //this.$store.commit('increment'); // correct way, pero con actions es mejor

    //   this.$store.dispatch('increment'); //* mutando el store usando actions
    //},

    // ...mapActions(['increment', 'increase']), //* se definen el nombre de las acciones que se quieren tener en este componente

    //* otra forma de hacer uso del mapeo de datos para las actions
    //...mapActions({
    //  inc: 'increment',
    //  increase: 'increase',
    //}),

    //* Accediendo a las acciones de un modulo con nameSpaced activa
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }), // primero toma el nombre del namespaced y luego se acceden a los metodos de ese modulo
  },
};
</script>

<style>
</style>