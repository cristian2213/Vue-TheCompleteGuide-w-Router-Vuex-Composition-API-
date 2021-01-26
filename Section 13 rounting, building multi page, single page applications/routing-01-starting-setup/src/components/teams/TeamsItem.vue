<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- se manda a llamar una propiedad computada, porque es recomendable no tener logica en la vista -->
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() {
      //* Forma #1
      //return '/teams/' + this.id; //this.id = t1 || t2 || t3
      //* Forma #2
      //return {
      //  path: '/teams/' + this.id,
      //};
      //* Forma #3, llamando a la ruta por medio del nombre y pasando los valores dinamicos a traves de los parametros como clave y valor
      return {
        // return 'teams/' + this.id + '?sort=asc'
        name: 'team-members',
        params: { teamId: this.id },
        // parametros de consulta, son opcionales por lo tanto no se deben agregar a la configuracion de rutas
        query: { sort: 'asc' },
      };

      //* Forma #4, Navegar mediante programacion
      //this.$router.push(
      //  {
      //    name: 'team-members',
      //    params: { teamId: this.id
      //  }
      //);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>