const app = Vue.createApp({
  data() {
    return {
      user: '',
      userTwo: ''
    }
  },

  methods: {

    showAlert() {
      alert('This is an alert with view');
    },

    registerUser(event) {
      this.user = event.target.value;
    },

    registerUserTwo(event) {
      this.userTwo = event.target.value;
    }

  },
});

app.mount('#assignment');