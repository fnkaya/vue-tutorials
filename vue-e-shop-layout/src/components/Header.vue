<template>
  <div class="container">
    <input type="text" class="search-box" placeholder="Search..." v-model="searchKeyword">
    <span class="favorites-count" @click="navigateToFavoritesPage">
      <i class="fas fa-heart"></i>
    </span>
  </div>
</template>

<script>
import {ROUTES} from "@/router/ROUTES";

export default {
  name: "Header",
  data() {
    return {
      searchKeyword: undefined,
    }
  },
  methods: {
    navigateToFavoritesPage() {
      this.$router.push(ROUTES.favorites.path.replace(':userId', 'bootcamp'))
    }
  }
}
</script>

<style scoped>
.container {
  width: 75vw;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-box {
  padding: 16px;
  height: 30px;
  width: 250px;
  border: none;
  border-bottom: 1px solid dimgray;
  outline: none;
}
.favorites-count {
  padding: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: color 1s;
}
.favorites-count:hover {
  color: red;
}
</style>