const app = Vue.createApp({
  data() {
    return {
      taskInput: '',
      tasks: [],
      showList: false,
    }
  },

  methods: {
    addTask() {
      if (this.taskInput.length > 0) {
        this.showList = true;
        this.tasks = [...this.tasks, this.taskInput];
        this.taskInput = '';
      }
    },

    toggleTaskList() {
      this.showList = !this.showList;
    }
  },
});

app.mount('#assignment');
