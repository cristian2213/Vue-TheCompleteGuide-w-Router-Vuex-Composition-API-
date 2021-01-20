<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <the-resources title="RememberMe"></the-resources>
  </div>
</template>

<script>
// local components
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>,
    TheResources

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

button {
  cursor: pointer;
}
</style>