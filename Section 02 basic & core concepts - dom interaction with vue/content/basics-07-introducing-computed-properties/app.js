const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  /* los metodos computados son metodos que se cachean y se actualizan automaticamnete cuando exista un cambio en alguna propiedad, en este case en el (name) */
  // para calcular valores de salida de forma dinamica
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    },
  },
  methods: {
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
