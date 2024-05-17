import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newToDo: null
    }
  },
  methods: {
    addToDo() {
      if (this.newToDo) {
        this.todos.push( { title: this.newToDo, done: false })
        this.newToDo = "";
      }
    },

    removeToDo(index) {
      this.todos.splice(index,1);
    }
  }
}).mount('#todosContainer')
