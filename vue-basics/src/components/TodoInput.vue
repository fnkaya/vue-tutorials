<template>
  <input class="input"
         type="text"
         @keydown.enter="addTodo($event.target)" />
</template>

<script>
export default {
  name: "TodoInput",
  methods: {
    addTodo(input) {
      this.$emit('addTodo', { text: input.value, done: false})
      input.value = '';
    }
  },
  created() {
    console.log("Input created...", this.$data, this.$props)
  },
  mounted() {
    console.log("Input mounted...", this.$data, this.$props)
  },
  updated() {
    console.log("Input updated...", this.$data, this.$props)
  },
}
</script>

<style scoped>
.input {
  padding: 8px;
  outline: none;
  border: 2px solid #e3f2fd;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>