<template>
  <div class="container">
    <h1 class="title-login">Login</h1>
    <wrapper-form>
      <wrapper-input>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </wrapper-input>

      <wrapper-input>
        <label for="password">Password</label>
        <input type="pass" name="pass" id="pass" />
      </wrapper-input>

      <wrapper-input>
        <button>Log in</button>
      </wrapper-input>

      <router-link to="create_account">Sign in</router-link>
    </wrapper-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(199, 239, 255, 0.8),
      rgba(125, 160, 163, 0.8)
    ),
    url(../../assets/img/background-main.jpg);
  background-size: cover;
  background-position: center;
}

.title-login {
  padding: 0.5rem 1rem;
  font-size: 2.3rem;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  color: #2b5876;
  border-bottom: 4px solid #1d3f55;
}
</style>