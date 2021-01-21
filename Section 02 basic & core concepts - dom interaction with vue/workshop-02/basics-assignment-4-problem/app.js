const app = Vue.createApp({
  data() {
    return {
      userOne: '',
      setBackground: '',
      clicked: false,
    }
  },

  computed: {
    addClass() {
      if (this.userOne === 'user1' || this.userOne === 'user2') {
        return this.userOne;
      }
      return '';
    },

    showClass() {
      if (this.clicked) {
        return { hidden: this.clicked };
      }
      return { visible: !this.clicked };
    },

    showClassParagraph() {
      if (this.setBackground.length > 0) {
        return { background: `${this.setBackground}` };
      }
    }

  },
  methods: {
    alterState() {
      this.clicked = !this.clicked;
    }
  },

});

app.mount('#assignment');