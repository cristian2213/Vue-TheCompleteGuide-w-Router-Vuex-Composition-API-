<template>
  <footer class="main-footer">
    <p class="main-info">
      &copy; Design By Cristian Johany Devia
      <a
        href="https://github.com/cristian2213"
        class="main-link"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.main-footer {
  text-align: center;
  padding: 0rem 1rem;
  margin: 1rem 0 0 0;
}

.main-link {
  color: #048f8a;
  font-weight: normal;
  transition: color 300ms ease-in, text-decoration 300ms ease-in,
    font-weight 300ms;
}

.main-link:hover {
  color: #02726e;
  text-decoration: underline;
  font-weight: 600;
}
</style>