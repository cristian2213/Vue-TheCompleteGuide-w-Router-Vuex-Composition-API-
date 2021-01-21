<template>
  <section>
    <base-card>
      <!-- se pasa un template con el nombre del slot en el cual se va a imprimir el contenido -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>

      <!-- para el slot que no tiene nombre se define como slot por defecto -->
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style >
</style>