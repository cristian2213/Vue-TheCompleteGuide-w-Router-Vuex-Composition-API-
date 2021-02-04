<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>

      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      // redirigir mediante programacion
      this.$router.replace('/coaches'); // hace lo mismo que push, la diferencia es que este metodo no permite volver a la ruta
    },
  },
};
</script>

<style>
</style>