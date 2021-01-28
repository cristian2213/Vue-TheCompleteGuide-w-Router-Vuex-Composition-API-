<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- cuando se tiene un componente que recibe una url dinamica y se tiene otra ruta, la segunda ruta no funcionara porque vue no destruye el componente y lo vuelve a ejecutar cuando cambia la ruta, por este motivo esta url cambia en la parte superior del navegador, pero los datos no son mostrados en pantalla -->
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props: ['teamId'], // este prop es recibo a traves de la ruta, habilitando los props a true
  inject: ['users', 'teams'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Max Schwarz2', role: 'Engineer' },
      ],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // mediante route tengo acceso a toda la informacion sobre la ruta que estoy cargando
      //console.log(this.$route.params.teamId);
      //const teamId = route.params.teamId; // obtener la id del parametro, (esta propiedad siempre va a permanecer actualizada con el ultimo valor)
      //console.log(this.$route.query);

      const selectedTeam = this.teams.find((team) => team.id === teamId); // selecionar equipo
      const members = selectedTeam.members; // miembros del equipo
      const selectedMembers = [];

      for (const member of members) {
        const selectedUsers = this.users.find((user) => user.id === member); // recorre todo el array de usuarios y filtra el usuario que concuerde con el miembro
        selectedMembers.push(selectedUsers);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },

  // guardi individual que se ejecuta cuando un componente es reutilizado con nuevos datos (uptualizado)
  beforeRouteUpdate(to, from, next) {
    //console.log(to, from, next);
    next();
  },

  watch: {
    // cuando se cambia la ruta se ejecuta otra vez el metodo
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>