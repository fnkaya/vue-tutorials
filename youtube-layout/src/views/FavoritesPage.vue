<template>
  <div class="container">
    <VIdeoItem v-for="video in favoriteVideos"
               :key="video.id"
               :video="video" />
  </div>
</template>

<script>
import {getVideos} from "@/utils/api";
import VIdeoItem from "@/components/VideoItem";

export default {
  name: "FavoritesPage",
  components: {VIdeoItem},
  data() {
    return {
      videos: [],
    }
  },
  computed: {
    favoriteVideos() {
      return this.videos.filter(video => video.favorite);
    }
  },
  async mounted() {
    this.videos = await getVideos();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
</style>