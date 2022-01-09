<template>
    <div class="row">
      <span class="data"
            v-bind:style="[data.passed ? {'color': 'green'} : {'color': 'red'}]">{{ data.name }}</span>
      <button type="button"
              class="button"
              @click="showScore"
      >Show Note</button>
      <router-link :to="{name: 'studentDetail', params: { id: data.id }}">
        <span>Detail</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    data: Object,
  },
  methods: {
    showScore() {
      this.$emit('showScore', this.data.score)
    }
  }
}
</script>

<style scoped>
  .row {
    padding: 8px 16px;
    margin-bottom: .5em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px dotted dimgrey;
  }
  .row a {
    text-decoration: none;
    background-color: lightcoral;
    color: white;
    padding: 4px 16px;
    border-radius: 8px;
    font-weight: 800;
  }
  .data {
    margin-right: auto;
    font-size: 1.5em;
    font-weight: 700;
  }
  .button {
    padding: 8px 16px;
    margin-right: 8px;
    border: none;
    border-radius: 8px;
    background-color: lightblue;
    color: white;
    font-weight: 800;
    cursor: pointer;
  }
</style>