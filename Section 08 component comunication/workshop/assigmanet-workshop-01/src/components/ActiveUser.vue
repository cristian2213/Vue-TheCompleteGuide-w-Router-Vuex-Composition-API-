<template>
  <div class="container-item">
    <h2>User name: {{ userInfo ? userInfo.name : null }}</h2>
    <h3>User age: {{ userInfo ? userInfo.age : null }}</h3>
  </div>
</template>

<script>
export default {
  // props validation
  props: {
    userInfo: {
      type: Object,
      required: false,
      default: function (value) {
        return value ? value : false;
      },
    },
  },

  data() {
    return {};
  },
};
</script>

<style>
.container-item {
  width: 50%;
}
</style>