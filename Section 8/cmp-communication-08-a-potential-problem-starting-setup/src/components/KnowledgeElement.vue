<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <!-- para enviar datos del componente hijo al padre usando privide y inject -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description'],
  // emits: ['select-topic'],
  inject: ['selectTopic'],
};
</script>