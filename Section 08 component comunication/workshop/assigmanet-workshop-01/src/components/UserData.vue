<template>
  <div class="container container-item">
    <form class="form-user-data" @submit.prevent="handlerUserData">
      <p v-if="error">All field are required</p>

      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          @change="handlerData"
          :value="userData.name"
        />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Your age"
          @change="handlerData"
          :value="userData.age"
        />
      </div>

      <div class="form-group">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // emit validation
  emits: ["form-data"],
  data() {
    return {
      userData: {
        name: "",
        age: "",
      },
      error: false,
    };
  },

  methods: {
    handlerData(event) {
      this.userData = {
        ...this.userData,
        [event.target.name]: event.target.value,
      };
    },

    handlerUserData() {
      const { name, age } = this.userData;

      if (name.trim() === "" || age.trim() === "") {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      }
      this.error = false;

      // send data to the main component
      this.$emit("form-data", this.userData);

      // clean object
      this.userData = {
        name: "",
        age: "",
      };
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.form-user-data {
  width: 100%;
}

.form-group {
  width: 80%;
  margin: 0 auto;
}

.form-group label,
.form-group input {
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem;
}

.form-group input {
  border: none;
  border-bottom: 3px solid rgb(247, 134, 134);
  border-radius: 4px 4px 0 0;
  background-color: rgba(225, 225, 225, 0.319);
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.form-group button {
  display: block;
  width: 50%;
  margin: 1rem auto;
  padding: 0.7rem;
  background-color: rgba(255, 161, 161, 0.534);
  border: 1px solid #ff717159;
  color: #fff;
  border-radius: 7px;
  transform: scale(0.9);
  transition: transform 300ms ease-in-out, background-color 300ms ease-in-out;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #ff7474ab;
  transform: scale(1);
}
</style>