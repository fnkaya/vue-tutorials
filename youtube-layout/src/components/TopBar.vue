<template>
  <div class="top-bar-container">
    <span v-if="this.$route.path === routes.HOME"
          class="navigate-button" @click="navigateToFavorites"
    >
      Favorites <fa-icon icon="heart" />
    </span>
    <span v-else class="navigate-button"
          @click="$router.push(routes.HOME)"
    >
      Home Page <fa-icon :icon="['fab', 'youtube']" />
    </span>
  </div>
</template>

<script>
import * as ROUTES from "@/router/routes";

export default {
  name: "TopBar",
  props: {
    favoriteVideos: Array,
  },
  data() {
    return {
      routes: ROUTES,
    }
  },
  methods: {
    navigateToFavorites() {
      this.$router.push(ROUTES.FAVORITES.replace(':userId', 'bootcamp'));
    },
  },
}
</script>

<style scoped>
.top-bar-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 96px;
  background-color: var(--color-background-light);
  box-shadow: 0 1px 10px 1px var(--color-background-dark);
}
.navigate-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 16px;
  color: var(--color-white);
  background-color: var(--color-button-secondary);
  transition: box-shadow .5s;
}
.navigate-button:hover {
  box-shadow: 0 0 10px 3px var(--color-button-secondary);
}
</style>