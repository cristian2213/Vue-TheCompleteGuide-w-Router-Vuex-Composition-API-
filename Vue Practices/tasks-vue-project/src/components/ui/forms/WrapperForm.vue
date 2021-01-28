<template>
  <form class="login-form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.login-form {
  width: 450px;
  height: 350px;
  padding: 2rem;
  background-color: rgba(242, 242, 242, 0.33);
}

@media screen and (max-width: 576px) {
  .login-form {
    background-color: red;
    width: auto;
    min-width: 300px;
  }
}
</style>