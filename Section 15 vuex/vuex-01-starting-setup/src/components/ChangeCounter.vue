<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //* confirm method, this method takes the mutation name to execute it

      //this.$store.state.counter++; nunca se debe mutar el store sin usar mutaciones

      //this.$store.commit('increment'); // correct way, pero con actions es mejor

      this.$store.dispatch('increment'); // mutando el store usando actions
    },
  },
};
</script>

<style>
</style>