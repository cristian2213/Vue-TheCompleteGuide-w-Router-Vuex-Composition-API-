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
      // todas las propiedades con dolar al priciopio son nativas de vue js, ref es un atributo que permite hacer referencia al elemento (html) y obtener su valor, como lo es en este caso, tener en cuenta que $refs es un objeto y que el nombre que declaramos en html para la propiedad ref es el que se utiliza para acceder al elemento en vue.

      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');

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

console.log(proxy.longMessage);
