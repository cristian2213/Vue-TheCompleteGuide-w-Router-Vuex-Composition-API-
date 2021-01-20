<template>
  <base-card>
    <!-- tener en cuenta que a los elementos personalizados como este componente la mayor pararte de las veces se reciben los datos a traves de eventos personalizados, pero en este caso el evento click se aplica al elemento raiz de ese componente, es este caso ese elemento raiz es un button  -->
    <base-button @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResources.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storeResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://google.com',
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storeResources,
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style>
</style>