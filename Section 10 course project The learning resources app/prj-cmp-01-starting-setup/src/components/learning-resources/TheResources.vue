<template>
  <base-card>
    <!-- tener en cuenta que a los elementos personalizados como este componente la mayor pararte de las veces se reciben los datos a traves de eventos personalizados, pero en este caso el evento click se aplica al elemento raiz de ese componente, es este caso ese elemento raiz es un button  -->
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      newResourceItem: this.addNewResource,
      removeResource: this.removeResource,
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },

    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addNewResource(resource) {
      const { title, description, link } = resource;
      this.storeResources.unshift({
        id: title,
        title,
        description,
        link,
      });
      this.selectedTab = 'stored-resources';
    },

    // si se desea que los datos en pantalla se actualicen cuando se elimina un elemento, en vue se debe modificar el array original y no rescribir el array con un filter
    removeResource(id) {
      // get index
      const indexResource = this.storeResources.findIndex(
        (res) => res.id === id
      );
      // delete item with the method splice
      this.storeResources.splice(indexResource, 1);
    },
  },
};
</script>

<style>
</style>