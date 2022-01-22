<template>
  <div class="video-player-container">
    <iframe width="75%" height="50%" :src="videoUrl" :title="video.title" allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
</template>

<script>
import {getVideo} from "@/utils/api";

export default {
  name: "VideoPage",
  data() {
    return {
      video: Object,
    }
  },
  computed: {
    videoUrl() {
      return this.video.videoAddress && this.video.videoAddress.replace(/watch\?v=/, 'embed/').replace(/&.*/, '');
    }
  },
  async mounted() {
    this.video = await getVideo(this.$route.query.v)
  }
}
</script>

<style scoped>
.video-player-container {
  width: 100vw;
  height: 100vh;
}
</style>