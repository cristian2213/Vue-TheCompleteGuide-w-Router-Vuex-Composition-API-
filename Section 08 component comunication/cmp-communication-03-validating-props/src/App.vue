<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>

    <div>
      <!-- vue component -->
      <new-friend @form-info="addFriend"></new-friend>
    </div>

    <ul>
      <friend-contact
        v-for="value in friends"
        :key="value.id"
        :friend-info="value"
        :is-favorite="value.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavorite: false,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },

  methods: {
    //* recibe los datos que son emitidos del componenete hijo
    toggleFavoriteStatus({ id }) {
      // vue detecta automaticamente que se hizo una modificacion y actualiza el objeto
      const idFriend = this.friends.find((friend) => friend.id === id);
      idFriend.isFavorite = !idFriend.isFavorite;
    },

    addFriend(formInfo) {
      const newFriend = {
        ...formInfo,
        ...{ id: toString(Date.now()), isFavorite: false },
      };

      this.friends.push(newFriend);
    },

    deleteFriend(id) {
      console.log(id);
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>