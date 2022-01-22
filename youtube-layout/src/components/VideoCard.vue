<template>
  <div class="video-card-container" @click="navigateToVideoPage">
    <ImageContent v-bind="video" />
    <div class="card-content">
      <img class="owner-image"
           :src="video.ownerImage"
           :alt="video.ownerName"
      />
      <div class="video-details">
        <h3 class="video-title">{{video.title}}</h3>
        <div class="owner-name">{{video.ownerName}}</div>
        <div class="video-infos">
          <span class="view-count">{{video.viewCount}} görüntülenme</span>
          <span class="publish-date">{{video.publishDateInMonth}} ay önce</span>
        </div>
      </div>
      <fa-icon icon="heart"
               v-on:click.stop
               :color="[video.favorite ? '#ff1744' : '#616161']"
               @click="$emit('addToFavorites', video.id)"
      />
    </div>
  </div>
</template>

<script>
import ImageContent from "@/components/ImageContent";
import {VIDEO} from "@/router/routes";

export default {
  name: "VideoCard",
  components: {
    ImageContent,
  },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToVideoPage() {
      this.$router.push({ path: VIDEO, query: { v: this.video.id } })
    },
  },
}
</script>

<style scoped>
.video-card-container {
  width: min-content;
  cursor: pointer;
  transition: transform .5s, background-color .5s;
}
.video-card-container:hover {
  background-color: var(--color-white);
  transform: scale(1.15, 1.15);
}
.card-content {
  display: flex;
  padding: 8px;
  gap: 24px;
  height: 100px;
  width: 100%;
  font-size: .8em;
  position: relative;
}
.owner-image {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
.video-details {
  display: flex;
  flex-direction: column;
  text-align: start;
  user-select: none;
  width: 100%;
}
.video-title {
  margin-bottom: auto;
  overflow: hidden;
}
.video-infos > span:first-child::after {
  content: '·';
  margin: 0 4px;
}
.card-content > svg {
  float: right;
  font-size: 1.5em;
  position: absolute;
  bottom: 16px;
  right: 16px;
  transition: font-size .3s;
}
.card-content > svg:hover {
  font-size: 2em;
}
</style>