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
  padding: 8px 16px;
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e9f4;
  border-radius: 8px;
}
.search-box {
  padding: 8px;
  height: 30px;
  width: 50%;
  border: none;
  background-color: transparent;
  border-left: 3px solid dimgray;
  border-radius: 4px;
  outline: none;
  transition: border .25s, border-radius .25s;
}
.search-box:focus {
  border: 2px solid dimgray;
  border-radius: 16px;
}
.favorites-count {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-right: 3px solid lightcoral;
  border-radius: 4px;
  color: lightcoral;
  cursor: pointer;
  font-weight: bold;
  transition: color .5s, background-color .5s, border-radius .5s;
}
.favorites-count:hover {
  color: white;
  background-color: lightcoral;
  border-radius: 16px;
}
</style>