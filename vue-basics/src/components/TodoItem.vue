<template>
  <div class="item-container">
    <span>{{todo.text}}</span>
    <input type="checkbox"
           :checked="todo.done"
           @change="todo.done = !todo.done"
    />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      default: () => {},
    }
  },
  created() {
    console.log("Item created...", this.$data, this.$props)
  },
  mounted() {
    console.log("Item mounted...", this.$data, this.$props)
  },
  updated() {
    console.log("Item updated...", this.$data, this.$props)
  },
}
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #e3f2fd;
  border-radius: 8px;
}
.item-container > span {
  text-align: start;
}
</style>