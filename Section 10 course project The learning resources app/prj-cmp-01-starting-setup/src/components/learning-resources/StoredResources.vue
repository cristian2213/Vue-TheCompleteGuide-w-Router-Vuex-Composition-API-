<template>
  <ul v-if="resources">
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :resources-item="resource"
    ></learning-resources>
  </ul>
</template>

<script>
// local component
import LearningResources from './LearningResources.vue';

export default {
  inject: ['resources'],
  components: {
    LearningResources,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>