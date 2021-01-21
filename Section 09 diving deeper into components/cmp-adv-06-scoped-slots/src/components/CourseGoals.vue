<template>
  <ul>
    <!-- declaracion de slot con alcance -->
    <li v-for="goal in goals" :key="goal">
      <!-- estos datos del slot se envian al componenete que esta usando este componente con el slot, pero en realidad cuando se carga los datos del slot adentro de esta etiqueta, en ese  momento se pasan los props -->
      <slot :item="goal" another-prop="otro prop"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>