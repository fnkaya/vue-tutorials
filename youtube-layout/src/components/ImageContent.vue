<template>
  <img class="image"
       :src="getImage"
       :alt="title"
       @mouseover="hover = true"
       @mouseout="hover = false"
  />
</template>

<script>
export default {
  name: "Image",
  props: {
    title: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    hoverImage: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    getImage() {
      return this.hover ? this.hoverImage : this.coverImage;
    }
  }
}
</script>

<style scoped>
.image {
  height: 200px;
  width: 360px;
}
</style>