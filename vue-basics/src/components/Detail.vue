<template>
  <div>
    <p>id from prop: {{ id }}</p>
    <p>id from route: {{ this.$route.params.id }}</p>
  </div>
</template>
np
<script>
export default {
  name: "Detail",
  props: ['id']
}
</script>

<style scoped>

</style>