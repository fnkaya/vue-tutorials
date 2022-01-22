<template>
  <div class="container">
    <VideoCard v-for="video in videos"
               :key="video.id"
               :video="video"
    />
  </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";
import {getVideos} from "@/utils/api";

export default {
  name: "HomePage",
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [],
      favorites: [],
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}
</style>