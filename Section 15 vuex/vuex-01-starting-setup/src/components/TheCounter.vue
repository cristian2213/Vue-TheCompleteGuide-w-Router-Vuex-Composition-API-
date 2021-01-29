<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      // leyendo datos, correct way
      return this.$store.getters.finalCounter;
    },
  },
};
</script>

<style>
</style>