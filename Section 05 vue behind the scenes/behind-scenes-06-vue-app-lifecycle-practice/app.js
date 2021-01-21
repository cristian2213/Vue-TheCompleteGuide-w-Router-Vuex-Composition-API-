const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },

  beforeCreate() {
    // antes de crear la instancia
    console.log('beforeCreate()');
  },
  created() {
    // instancia creada, en este punto no se muestra nada en pantalla
    console.log('created()');
  },

  beforeMount() {
    // antes de montar la app en el html, aca no se muestra nada en pantalla
    console.log('beforeMount()');
  },
  mounted() {
    // app montada en pantalla
    console.log('mounted()');
  },

  beforeUpdate() {
    // antes de procesar la actulizacion
    console.log('beforeUpdate()');
  },

  updated() {
    // actualizacion procesada
    console.log('updated()');
  },

  beforeUnmount() {
    // desmontar
    // se ejecuta antes de desmontar la app
    console.log('beforeUnmount()');
  },

  unmounted() {
    // se ejecuta cuando se ha desmotado la app
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});

app2.mount('#app2');

// ....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);
