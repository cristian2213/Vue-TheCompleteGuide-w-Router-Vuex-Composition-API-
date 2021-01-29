<template>
  <form class="login-form" novalidate>
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 450px;
  height: auto;
  margin: 1rem 0;
  padding: 4rem 2rem 2rem 2rem;
  background-color: white;
  border-radius: 7px;
  box-shadow: 8px 8px 7px rgba(68, 68, 68, 0.2);
}

@media screen and (max-width: 576px) {
  .login-form {
    width: 90%;
  }
}
</style>