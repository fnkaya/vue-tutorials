<template>
  <div class="container">
    <input type="text" class="search-box" placeholder="Search..." v-model="searchKeyword">
    <span v-show="favoritesCount" class="favorites-count" @click="navigateToFavoritesPage">
      <font-awesome-icon icon="heart" />
      <span v-if="favoritesCount > 0">{{ favoritesCount }}</span>
    </span>
  </div>
</template>

<script>
import {FAVORITES} from "@/router/routes";

export default {
  name: "Header",
  props: {
    favoritesCount: Number
  },
  data() {
    return {
      searchKeyword: undefined,
    }
  },
  methods: {
    navigateToFavoritesPage() {
      this.$router.push(FAVORITES.path.replace(':userId', 'bootcamp'))
    }
  },
  watch: {
    searchKeyword() {
      this.$emit('searchKeywordChanged', this.searchKeyword);
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
}
.favorites-count {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  color: lightcoral;
  transition: color 1s, background-color 1s;
}
.favorites-count:hover {
  color: white;
  background-color: lightcoral;
}
</style>