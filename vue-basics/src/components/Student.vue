<template>
    <div class="row">
      <span class="data">{{ data.name }}</span>
      <button type="button"
              class="button"
              @click="$emit('alert', data)"
      >Alert</button>
      <router-link :to="{name: 'studentDetail', params: { id: data.id }}">
        <span class="button">Detail</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    data: Object,
  },
}
</script>

<style scoped>
  .row {
    margin-bottom: .5em;
  }
  .row a {
    text-decoration: none;
    background-color: red;
    color: white;
    padding: 8px;
    border-radius: 8px;
  }
  .data {
    margin-right: 1em;
    font-size: 1.5em;
    font-weight: 700;
  }
  .button {
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 8px;
    background-color: transparent;
  }
</style>