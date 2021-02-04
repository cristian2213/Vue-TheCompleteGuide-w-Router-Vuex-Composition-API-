<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <dir class="controls">
        <base-button mode="outline">Refresh</base-button>
        <!-- al declarar solo el nombre del prop, este se paso como valor true al componenete -->
        <base-button link to="/register" v-if="!isCoach"
          >Register as Coach</base-button
        >
      </dir>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firs-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/Filter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },

  data() {
    return {
      activeFilters: {
        frontend: false,
        backend: false,
        career: false,
      },
    };
  },

  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    filteredCoaches() {
      // obtener todos los entrenadores
      const coaches = this.$store.getters['coaches/coaches'];

      // se ejecuta el filtro de acuerdo al tipu de entrenador
      return coaches.filter((coach) => {
        if (
          this.activeFilters.frontend === false &&
          this.activeFilters.backend === false &&
          this.activeFilters.career === false &&
          coach
        )
          return true;

        // de acuerdo a la condicion se retorna los entrenadores
        if (this.activeFilters.frontend && coach.areas.includes('frontend'))
          return true;

        if (this.activeFilters.backend && coach.areas.includes('backend'))
          return true;

        if (this.activeFilters.career && coach.areas.includes('career'))
          return true;

        return false; // no existen resultados
      });
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },

  methods: {
    setFilters(updateFilters) {
      // recribir los valores del filtro
      this.activeFilters = updateFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>