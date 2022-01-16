<template>
  <div class="container">
    <div class="numberContainer">
      <button class="button" type="button" @click="counter--">-</button>
      <span class="number">{{counter}}</span>
      <button class="button" type="button" @click="counter++">+</button>
    </div>
    <TodoInput @addTodo="addTodo"/>
    <div class="todo-container">
      <TodoItem v-for="todo in filteredTodos"
                :key="todo.text"
                :todo="todo"
      />
    </div>
  </div>
</template>

<script>
import {getTodos} from '@/utils/db';
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";

export default {
  name: 'Layout',
  components: {TodoItem, TodoInput},
  data() {
    return {
      counter: 0,
      todos: getTodos(),
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(todo => todo.done === false);
    },
  },
  watch: {
    counter() {
      console.log('watch counter');
    },
  },
  beforeCreated() {
    console.log("Layout beforeCreated...", this.$data)
  },
  created() {
    console.log("Layout created...", this.$data)
  },
  beforeMount() {
    console.log("Layout beforeMount...", this.$data)
  },
  mounted() {
    console.log("Layout mounted...", this.$data)
  },
  beforeUpdate() {
    console.log("Layout beforeUpdate...", this.$data)
  },
  updated() {
    console.log("Layout updated...", this.$data)
  },
  activated() {
    console.log("Layout activated...", this.$data)
  },
  deactivated() {
    console.log("Layout deactivated...", this.$data)
  },
  beforeUnmount() {
    console.log("Layout beforeUnmount...", this.$data)
  },
  unmounted() {
    console.log("Layout unmounted...", this.$data)
  },
  //errorCaptured(err, vm, info) {
    // err: error trace
    // vm: component in which error occurred
    // info: vue specific error information such as lifecycle hooks, events etc.
    // return false to stop propagation of errors further to parent or global error
  //}
}
</script>


<style scoped>
.container {
  width: 50vw;
  display: flex;
  flex-direction: column;
  margin: 64px auto;
}
.todo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.numberContainer {
  padding: 16px;
  border-radius: 8px;
}
.button {
  background-color: #e3f2fd;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  border: none;
}
.number {
  font-size: 16px;
  font-weight: 800;
  margin: 0 16px;
}
</style>
