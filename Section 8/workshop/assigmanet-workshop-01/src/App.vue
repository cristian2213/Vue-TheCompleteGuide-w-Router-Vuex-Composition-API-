<template>
  <div class="container container-flex">
    <user-data @form-data="saveUserData"></user-data>

    <active-user :user-info="userData"></active-user>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userData: null,
    };
  },

  methods: {
    saveUserData(userData) {
      this.userData = userData;
    },
  },
};
</script>

<style>
.container-flex {
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
