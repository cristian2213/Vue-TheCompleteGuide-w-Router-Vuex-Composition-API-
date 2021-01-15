const app = Vue.createApp({
  data() {
    return {
      number: 0,
      messages: ''
    }
  },

  // metodo reactivo, se ejecuta cuando la propiedad cambia su valor
  watch: {
    number(value) {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    }
  },

  // son reactivas, se utilizan para cacher parte de la aplicacion que consumen hartos recursos
  computed: {
    result() {
      if (this.number < 37) return this.messages = 'Not Yet';
      return this.messages = 'Too much!';
    },
  },

  // para declarar los metodos
  methods: {
    addBigNumber() {
      this.number += 5;
    },

    addSmallNumber() {
      this.number += 1;
    }
  },
});

app.mount('#assignment');