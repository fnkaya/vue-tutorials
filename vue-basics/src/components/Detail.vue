<template>
  <p>{{ id }}</p>
</template>

<script>
export default {
  name: "Detail",
  props: {
    id: String
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>