<template>
  <li>
    <base-card>
      <template #default>
        <header>
          <h3>{{ resourcesItem.title }}</h3>
          <base-button mode="flat" @click="removeResource(resourcesItem.id)"
            >Delete</base-button
          >
        </header>
        <p>{{ resourcesItem.description }}</p>
        <nav>
          <a
            :href="resourcesItem.link"
            target="_blank"
            rel="nofollow noopener noreferrer"
            >{{ resourcesItem.title }}</a
          >
        </nav>
      </template>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ['removeResource'],
  props: {
    resourcesItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>