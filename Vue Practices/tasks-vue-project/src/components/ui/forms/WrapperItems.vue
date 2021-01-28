<template>
  <div class="input-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
}
</style>