<template>
  <div class="video-item" @click="navigateToVideoPage">
    <ImageContent v-bind="video" />
    <div class="video-details">
      <h3 class="video-title">{{video.title}}</h3>
      <div class="video-infos">
        <span class="view-count">{{video.viewCount}} görüntülenme</span>
        <span class="publish-date">{{video.publishDateInMonth}} ay önce</span>
      </div>
      <div class="owner-infos">
        <img class="owner-image"
             :src="video.ownerImage"
             :alt="video.ownerName" />
        <span class="owner-name">{{video.ownerName}}</span>
      </div>
      <div class="video-description">{{video.description}}</div>
    </div>
  </div>
</template>

<script>
import ImageContent from "@/components/ImageContent";
import {VIDEO} from "@/router/routes";
export default {
  name: "VideoItem",
  components: {ImageContent},
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  methods: {
    navigateToVideoPage() {
      this.$router.push({ path: VIDEO, query: { v: this.video.id } })
    },
  },
}
</script>

<style scoped>
.video-item {
  display: flex;
  width: 75vw;
  gap: 24px;
  cursor: pointer;
}
.video-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.video-infos > span:first-child::after {
  content: '·';
  margin: 0 4px;
}
.owner-infos {
  display: flex;
  align-items: center;
  gap: 16px;
}
.owner-image {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
.video-description {
  text-align: justify;
}
</style>