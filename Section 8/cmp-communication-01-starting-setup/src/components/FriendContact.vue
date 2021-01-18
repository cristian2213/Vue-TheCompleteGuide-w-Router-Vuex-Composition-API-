<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>

    <button @click="toggleFavorite">Make favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  //* los props en este framawork se declaran usando camelCase
  //props: ["name", "phoneNumber", " emailAddress", "isFavorite"],

  //* Props validation number 1
  //props: {
  //  name: String,
  //  phoneNumber: String,
  //  phoneNumber: String,
  //},

  //* Props validation number two
  props: {
    name: {
      type: String,
      required: true,
    },
    // without isn't required, so will be declared a default value
    // phoneNumber: {
    //   type: String,
    //   required: false,
    //   default: "0",
    // },
    // emailAddress: String,

    //* Validator value
    phoneNumber: {
      type: String,
      required: false,
      default: "0",
      // if the prop is not required so, we must validate the value
      validator: function (value) {
        return value.length > 0 ? value : null;
      },
    },
    emailAddress: String,
  },

  data() {
    return {
      friendIsFavorite: this.isFavorite,
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    // The parent props never can be mutated
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>