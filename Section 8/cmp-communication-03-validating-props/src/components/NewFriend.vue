<template>
  <form
    action="#"
    @submit.prevent="handlerSubmit"
    class="form-friend"
    novalidate
  >
    <p class="alert" v-if="alertDanger">All field are required</p>

    <div>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Carlos"
        :value="formInfo.name"
        @input="handleInput"
      />
    </div>

    <div>
      <label for="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="1233 4354"
        :value="formInfo.phone"
        @input="handleInput"
      />
    </div>

    <div>
      <label for="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="carlos@gmail.com"
        :value="formInfo.email"
        @input="handleInput"
      />
    </div>

    <div>
      <button type="submit">Send</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['form-info'],

  data() {
    return {
      formInfo: {
        name: '',
        phone: '',
        email: '',
      },

      alertDanger: false,
    };
  },

  methods: {
    handleInput(event) {
      this.formInfo = {
        ...this.formInfo,
        [event.target.name]: event.target.value,
      };
    },

    handlerSubmit() {
      const { name, phone, email } = this.formInfo;
      if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        // throw an error
        this.alertDanger = true;
        setTimeout(() => {
          this.alertDanger = false;
        }, 3000);
        return;
      }

      // send to the main component
      this.$emit('form-info', this.formInfo);

      // clean object
      this.formInfo = {
        name: '',
        phone: '',
        email: '',
      };
    },
  },
};
</script>

<style scoped>
.alert {
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem;
  margin: 0rem auto 2rem auto;
  color: white;
  text-align: center;
  border-radius: 4px;
  background-color: #ff0077;
}

.form-friend {
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Jost', sans-serif;
}

.form-friend label {
  display: block;
  margin: 0.7rem 0;
  text-align: left;
}

.form-friend label {
  display: block;
  width: 50%;
  margin: 0.7rem auto;
  color: #ff0077;
}

.form-friend input {
  display: block;
  width: 50%;
  margin: 0.7rem auto;
  padding: 0.6rem;
  text-align: left;
  border: none;
  border-bottom: 2px solid #cc005f;
  border-radius: 6px 6px 0px 0px;
  background-color: #faedf3af;

  color: rgba(19, 19, 19, 0.604);
}
.form-friend input:focus {
  outline: none;
  font-size: 0.9rem;
  color: black;
}

.form-friend button {
  display: block;
  width: 50%;
  margin: 1.2rem auto 0 auto;
  padding: 0.3rem !important;
  border-radius: 5px;
}
</style>