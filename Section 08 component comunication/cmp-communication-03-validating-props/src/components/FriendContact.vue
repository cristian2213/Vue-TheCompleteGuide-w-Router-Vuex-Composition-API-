<template>
  <li>
    <h2>{{ friendInfo.name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>

    <!-- Otra forma de emitir  en el template -->
    <button @click="$emit('delete-contact', friendInfo.id)">
      Delete Contact
    </button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friendInfo.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friendInfo.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    friendInfo: Object,
    isFavorite: Boolean,
  },

  // documentar los eventos que se emitiran y tambien se puede declara una funcion para determinar los datas que se van a enviar
  //emits: ['toggle-favorite'], //* metodo 1
  emits: {
    // metodo 2
    'toggle-favorite': function (friend) {
      return friend ? friend : null;
    },
    'delete-contact': function (id) {
      return id;
    },
  },

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // emite un evento que luego se puede usar desde el componente padre
      this.$emit('toggle-favorite', this.friendInfo); // event name and any params
    },

    // deleteContact(id) {
    //   this.$emit('delete-contact', id);
    // },
  },
};
</script>