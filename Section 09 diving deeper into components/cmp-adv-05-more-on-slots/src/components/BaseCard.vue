<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The Default</h2> este etiquesta se muestra como valor por defecto-->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    /* variable de vue muestra los slots que tienen contenido */
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>