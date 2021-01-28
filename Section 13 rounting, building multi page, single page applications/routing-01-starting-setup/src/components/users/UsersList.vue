<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },

  methods: {
    confirmInput() {
      // redirigir mediante programacion
      this.$router.push('/teams');
    },

    saveChanges() {
      this.changesSaved = true;
    },
  },

  // Guardia protector de componente
  beforeRouteEnter(to, from, next) {
    next();
  },

  // guardia protector de componente, se ejecuta antes de salir de la pagina, es muy utili para verificar si un usuario esta rellenando un formalario y por acidente se sale de la pagina, mediante este metodo se puede confirmar si desea o no salir
  beforeRouteLeave(to, from, next) {
    console.log('BeforeRouteLeave', to, from);
    if (this.changesSaved) {
      next();
    } else {
      const result = confirm('desea salir de la pagina');
      next(result); // result return true o false
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>