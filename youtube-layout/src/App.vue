<template>
  <div>
    <TopBar />
    <router-view id="app" />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
  padding: 32px;
}
</style>
