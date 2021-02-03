<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        name="frontend"
        id="frontend"
        @change="setFilter"
      />
      <label for="frontend">Frontend</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" name="backend" id="backend" @change="setFilter" />
      <label for="backend">Backend</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" name="career" id="career" @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  // registrando los emits
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: false,
        backend: false,
        career: false,
      },
    };
  },

  methods: {
    setFilter(event) {
      this.filters = {
        ...this.filters,
        [event.target.id]: event.target.checked,
      };

      this.$emit('change-filter', this.filters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>